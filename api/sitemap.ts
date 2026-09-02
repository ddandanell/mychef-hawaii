/**
 * XML sitemap. Standalone — do not import src/lib/seo.ts (that graph 500s
 * the serverless function before GET can catch).
 *
 * Locs are always purchased hosts: mychef-hawaii.com and island subdomains.
 * Never mychef-hawaii.vercel.app. Never mychefhawaii.com.
 */

const PRODUCTION_ROOT = 'mychef-hawaii.com';
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

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

function islandFromHost(hostname: string): (typeof ISLANDS)[number] | null {
  const h = hostname.split(':')[0]?.toLowerCase() ?? '';
  const first = h.split('.')[0];
  return (ISLANDS as readonly string[]).includes(first) ? (first as (typeof ISLANDS)[number]) : null;
}

function urlEntry(href: string, changefreq: string, priority: string): string {
  return `  <url>
    <loc>${xmlEscape(href)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function urlset(entries: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

function islandUrlset(island: (typeof ISLANDS)[number]): string {
  return urlset(
    ISLAND_PATHS.map((p) =>
      urlEntry(loc(`${island}.${PRODUCTION_ROOT}`, p), p === '/' ? 'weekly' : 'monthly', p === '/' ? '1.0' : '0.8'),
    ),
  );
}

function hubUrlset(): string {
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

export async function GET(request: Request) {
  try {
    const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || PRODUCTION_ROOT)
      .split(':')[0]
      .toLowerCase();

    const island = islandFromHost(host);
    const onApex = host === PRODUCTION_ROOT || host === `www.${PRODUCTION_ROOT}`;

    let body: string;
    if (island) {
      body = islandUrlset(island);
    } else if (onApex) {
      // Apex returns the commercial urlset (hub paths + island homes). Island
      // hosts publish their own /sitemap.xml. robots.txt points here.
      body = hubUrlset();
    } else {
      // Preview / unknown host: still emit production canonicals, never vercel.app.
      body = hubUrlset();
    }

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
      {
        status: 200,
        headers: { 'content-type': 'application/xml; charset=utf-8' },
      },
    );
  }
}
