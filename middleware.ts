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

const HUB_PATHS = [
  '/',
  '/private-chef',
  '/catering',
  '/weddings',
  '/bar',
  '/pricing',
  '/quote',
  '/trust',
  '/legal',
] as const;
const ISLAND_PATHS = ['/', '/private-chef', '/catering', '/weddings', '/bar', '/pricing', '/quote'] as const;

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function loc(host: string, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `https://${host}${clean === '/' ? '/' : clean}`;
}

function urlEntry(href: string, changefreq: string, priority: string): string {
  return `  <url>\n    <loc>${xmlEscape(href)}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

function urlset(entries: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
}

function sitemapXml(hostname: string): string {
  const h = hostname.split(':')[0]?.toLowerCase() ?? '';
  const first = h.split('.')[0];
  const island = (ISLANDS as readonly string[]).includes(first) ? (first as (typeof ISLANDS)[number]) : null;
  if (island) {
    return urlset(
      ISLAND_PATHS.map((p) =>
        urlEntry(loc(`${island}.${PRODUCTION_ROOT}`, p), p === '/' ? 'weekly' : 'monthly', p === '/' ? '1.0' : '0.8'),
      ),
    );
  }
  const hub = HUB_PATHS.map((p) =>
    urlEntry(loc(PRODUCTION_ROOT, p), p === '/' ? 'weekly' : 'monthly', p === '/' ? '1.0' : '0.7'),
  );
  const islands = ISLANDS.flatMap((id) =>
    ISLAND_PATHS.map((p) =>
      urlEntry(loc(`${id}.${PRODUCTION_ROOT}`, p), p === '/' ? 'weekly' : 'monthly', p === '/' ? '0.9' : '0.8'),
    ),
  );
  return urlset([...hub, ...islands]);
}

function isStaticAsset(pathname: string): boolean {
  if (pathname === '/index.html') return true;
  if (pathname.startsWith('/assets/')) return true;
  if (pathname.startsWith('/photos/')) return true;
  if (pathname.startsWith('/api/')) return true;
  if (pathname.startsWith('/_vercel/')) return true;
  if (pathname === '/seo-map.json') return true;
  return /\.[a-zA-Z0-9]+$/.test(pathname) && pathname !== '/sitemap.xml' && pathname !== '/robots.txt' && pathname !== '/sitemap-hub.xml';
}

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').split(':')[0].toLowerCase();
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

  // Serve sitemap + robots here. A hop to /api/sitemap 500s when that
  // function is missing or fails to boot — live robots.txt points at this URL.
  if (path === '/sitemap.xml' || path === '/sitemap-hub.xml') {
    return new Response(sitemapXml(host), {
      status: 200,
      headers: {
        'content-type': 'application/xml; charset=utf-8',
        'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }
  if (path === '/robots.txt') {
    const originHost =
      (ISLANDS as readonly string[]).includes(label) ? `${label}.${PRODUCTION_ROOT}` : PRODUCTION_ROOT;
    const origin = `https://${originHost}`;
    const body = `User-agent: *\nAllow: /\n\nHost: ${origin}\nSitemap: ${origin}/sitemap.xml\n`;
    return new Response(body, {
      status: 200,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'public, s-maxage=3600',
      },
    });
  }

  return next();
}

export const config = {
  matcher: ['/((?!assets/|photos/|_vercel/|src/).*)'],
};
