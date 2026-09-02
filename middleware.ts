import { next, rewrite } from '@vercel/functions';

const PRODUCTION_ROOT = 'mychef-hawaii.com';
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

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

  if (path === '/sitemap.xml' || path === '/sitemap-hub.xml') {
    url.pathname = '/api/sitemap';
    return rewrite(url);
  }
  if (path === '/robots.txt') {
    url.pathname = '/api/robots';
    return rewrite(url);
  }

  return next();
}

export const config = {
  matcher: ['/((?!assets/|photos/|_vercel/|src/).*)'],
};
