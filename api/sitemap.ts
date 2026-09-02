/**
 * XML sitemap. Standalone — do not import src/.
 * Lists only the 12 locked Hawaii money URLs.
 */

const PRODUCTION_ROOT = 'mychef-hawaii.com';
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

type Host = 'hub' | (typeof ISLANDS)[number];

const MASTER: { host: Host; path: string }[] = [
  { host: 'hub', path: '/' },
  { host: 'hub', path: '/catering' },
  { host: 'hub', path: '/weddings' },
  { host: 'oahu', path: '/' },
  { host: 'oahu', path: '/catering' },
  { host: 'oahu', path: '/weddings' },
  { host: 'maui', path: '/' },
  { host: 'maui', path: '/catering' },
  { host: 'maui', path: '/weddings' },
  { host: 'kauai', path: '/' },
  { host: 'kauai', path: '/catering' },
  { host: 'bigisland', path: '/' },
];

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function loc(host: Host, path: string): string {
  const hostname = host === 'hub' ? PRODUCTION_ROOT : `${host}.${PRODUCTION_ROOT}`;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `https://${hostname}${clean === '/' ? '/' : clean}`;
}

function urlEntry(href: string, priority: string): string {
  return `  <url>
    <loc>${xmlEscape(href)}</loc>
    <changefreq>${href.endsWith('.com/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function urlset(rows: { host: Host; path: string }[]): string {
  const entries = rows.map((r) =>
    urlEntry(loc(r.host, r.path), r.path === '/' ? (r.host === 'hub' ? '1.0' : '0.9') : '0.8'),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

function islandFromHost(hostname: string): (typeof ISLANDS)[number] | null {
  const first = hostname.split(':')[0]?.split('.')[0]?.toLowerCase() ?? '';
  return (ISLANDS as readonly string[]).includes(first) ? (first as (typeof ISLANDS)[number]) : null;
}

export async function GET(request: Request) {
  try {
    const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || PRODUCTION_ROOT)
      .split(':')[0]
      .toLowerCase();
    const island = islandFromHost(host);
    const body = island ? urlset(MASTER.filter((r) => r.host === island)) : urlset(MASTER);
    return new Response(body, {
      headers: {
        'content-type': 'application/xml; charset=utf-8',
        'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    console.error('sitemap', err);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      { status: 200, headers: { 'content-type': 'application/xml; charset=utf-8' } },
    );
  }
}
