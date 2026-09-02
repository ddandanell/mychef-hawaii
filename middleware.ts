import { next } from '@vercel/functions';

const PRODUCTION_ROOT = 'mychef-hawaii.com';
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

/** Deferred neighborhood slugs — 301 to the island home. Not their own URLs. */
const DEFERRED: Record<(typeof ISLANDS)[number], readonly string[]> = {
  oahu: ['honolulu', 'waikiki', 'kailua', 'north-shore', 'kahala', 'ko-olina'],
  maui: ['wailea', 'kaanapali', 'lahaina', 'kihei', 'kapalua', 'makena'],
  kauai: ['princeville', 'poipu', 'hanalei', 'kapaa'],
  bigisland: ['kona', 'waimea', 'waikoloa', 'kohala'],
};

function firstLabel(hostname: string): string {
  return hostname.split(':')[0]?.split('.')[0]?.toLowerCase() ?? '';
}

function isApexNetwork(hostname: string): boolean {
  const h = hostname.split(':')[0]?.toLowerCase() ?? '';
  return h === PRODUCTION_ROOT || h === `www.${PRODUCTION_ROOT}` || h.endsWith(`.${PRODUCTION_ROOT}`);
}

function isStaticAsset(pathname: string): boolean {
  if (pathname === '/index.html') return true;
  if (pathname.startsWith('/assets/')) return true;
  if (pathname.startsWith('/photos/')) return true;
  if (pathname.startsWith('/about/') && /\.[a-zA-Z0-9]+$/.test(pathname)) return true;
  if (pathname.startsWith('/api/')) return true;
  if (pathname.startsWith('/_vercel/')) return true;
  if (pathname.startsWith('/sitemaps/')) return true;
  if (pathname === '/seo-map.json') return true;
  // Build-time files in public/ (copied to dist). Never generate these in-process —
  // returning a body from this function is the live FUNCTION_INVOCATION_FAILED path.
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt' || pathname === '/sitemap-hub.xml') {
    return true;
  }
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

function route(request: Request): Response {
  const url = new URL(request.url);
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '')
    .split(':')[0]
    .toLowerCase();
  const path = url.pathname;

  if (request.headers.get('x-seo-bypass') === '1') return next();
  if (isStaticAsset(path)) return next();

  if (host === `www.${PRODUCTION_ROOT}`) {
    url.hostname = PRODUCTION_ROOT;
    url.protocol = 'https:';
    return Response.redirect(url, 308);
  }

  const label = firstLabel(host);
  if (host.endsWith(`.${PRODUCTION_ROOT}`) && host !== `www.${PRODUCTION_ROOT}`) {
    if (!(ISLANDS as readonly string[]).includes(label)) {
      return new Response('Unknown island department', { status: 404 });
    }
  }

  // Hub path /maui/... → island subdomain when wildcard DNS is live.
  if (isApexNetwork(host) && (host === PRODUCTION_ROOT || host === `www.${PRODUCTION_ROOT}`)) {
    const seg = path.split('/').filter(Boolean)[0];
    if (seg && (ISLANDS as readonly string[]).includes(seg)) {
      const rest = path.slice(seg.length + 1) || '/';
      const dest = new URL(rest.startsWith('/') ? rest : `/${rest}`, `https://${seg}.${PRODUCTION_ROOT}`);
      dest.search = url.search;
      return Response.redirect(dest, 301);
    }
  }

  // Island host: doorway / neighborhood slugs collapse to the island home.
  if (host.endsWith(`.${PRODUCTION_ROOT}`) && (ISLANDS as readonly string[]).includes(label)) {
    const segs = path.split('/').filter(Boolean);
    const first = segs[0] ?? '';
    const deferred = DEFERRED[label as (typeof ISLANDS)[number]];
    if (first && deferred?.includes(first) && segs.length === 1) {
      const dest = new URL('/', `https://${label}.${PRODUCTION_ROOT}`);
      dest.search = url.search;
      return Response.redirect(dest, 301);
    }
    if (first === 'locations') {
      const dest = new URL('/', `https://${label}.${PRODUCTION_ROOT}`);
      dest.search = url.search;
      return Response.redirect(dest, 301);
    }
    if (first === 'private-chef' && segs.length > 1) {
      const dest = new URL('/private-chef', `https://${label}.${PRODUCTION_ROOT}`);
      dest.search = url.search;
      return Response.redirect(dest, 301);
    }
  }

  return next();
}

export default function middleware(request: Request) {
  try {
    return route(request);
  } catch (err) {
    console.error('middleware', err);
    try {
      return next();
    } catch {
      return new Response('', { status: 200, headers: { 'cache-control': 'no-store' } });
    }
  }
}

// Vercel Routing Middleware matcher (not Next.js-only). Exclude build-time SEO
// files so /sitemap.xml and /robots.txt never invoke this function.
export const config = {
  matcher: [
    '/((?!assets/|photos/|_vercel/|src/|sitemaps/|api/|sitemap\\.xml|robots\\.txt|sitemap-hub\\.xml|seo-map\\.json).*)',
  ],
};
