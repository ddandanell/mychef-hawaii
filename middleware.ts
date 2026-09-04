import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PRODUCTION_ROOT = 'mychef-hawaii.com';
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

/** Live corridor slugs — must match `moneyNeighborhoods` in data/offers.ts. */
const CORRIDORS: Record<(typeof ISLANDS)[number], readonly string[]> = {
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

function isIsland(value: string): value is (typeof ISLANDS)[number] {
  return (ISLANDS as readonly string[]).includes(value);
}

function isStaticAsset(pathname: string): boolean {
  if (pathname.startsWith('/_next/')) return true;
  if (pathname.startsWith('/photos/')) return true;
  if (pathname.startsWith('/about/') && /\.[a-zA-Z0-9]+$/.test(pathname)) return true;
  if (pathname.startsWith('/api/')) return true;
  if (pathname === '/favicon.ico') return true;
  if (pathname === '/logo.svg') return true;
  return /\.[a-zA-Z0-9]+$/.test(pathname) && pathname !== '/sitemap.xml' && pathname !== '/robots.txt';
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '')
    .split(':')[0]
    .toLowerCase();
  const path = url.pathname;

  if (isStaticAsset(path)) return NextResponse.next();

  if (host === `www.${PRODUCTION_ROOT}`) {
    const dest = url.clone();
    dest.hostname = PRODUCTION_ROOT;
    dest.protocol = 'https:';
    dest.port = '';
    return NextResponse.redirect(dest, 308);
  }

  const label = firstLabel(host);
  if (host.endsWith(`.${PRODUCTION_ROOT}`) && host !== `www.${PRODUCTION_ROOT}`) {
    if (!isIsland(label)) {
      return new NextResponse('Unknown island department', { status: 404 });
    }
  }

  if (isApexNetwork(host) && (host === PRODUCTION_ROOT || host === `www.${PRODUCTION_ROOT}`)) {
    const seg = path.split('/').filter(Boolean)[0];
    if (seg && isIsland(seg)) {
      const rest = path.slice(seg.length + 1) || '/';
      const dest = new URL(rest.startsWith('/') ? rest : `/${rest}`, `https://${seg}.${PRODUCTION_ROOT}`);
      dest.search = url.search;
      return NextResponse.redirect(dest, 301);
    }
  }

  const islandHost =
    isIsland(label) && (host.endsWith(`.${PRODUCTION_ROOT}`) || host.endsWith('.localhost')) ? label : null;

  if (islandHost && isIsland(islandHost)) {
    const segs = path.split('/').filter(Boolean);
    const first = segs[0] ?? '';
    const corridors = CORRIDORS[islandHost];
    if (first === 'locations') {
      const dest = url.clone();
      const slug = segs[1] ?? '';
      dest.pathname = slug && corridors.includes(slug) ? `/${slug}` : '/';
      return NextResponse.redirect(dest, 301);
    }
    if (first === 'private-chef' && segs.length > 1) {
      const dest = url.clone();
      dest.pathname = '/private-chef';
      return NextResponse.redirect(dest, 301);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-host', host);
  requestHeaders.set('x-pathname', path);

  if (islandHost && isIsland(islandHost)) {
    requestHeaders.set('x-island', islandHost);
    requestHeaders.set('x-host-mode', '1');
    if (path === '/sitemap.xml' || path === '/robots.txt') {
      return NextResponse.next({ request: { headers: requestHeaders } });
    }
    const alreadyPrefixed = path === `/${islandHost}` || path.startsWith(`/${islandHost}/`);
    if (!alreadyPrefixed) {
      const rewriteUrl = url.clone();
      rewriteUrl.pathname = path === '/' ? `/${islandHost}` : `/${islandHost}${path}`;
      return NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    }
  } else {
    const seg = path.split('/').filter(Boolean)[0];
    if (seg && isIsland(seg)) {
      requestHeaders.set('x-island', seg);
      requestHeaders.set('x-host-mode', '0');
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
