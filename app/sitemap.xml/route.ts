import { PRODUCTION_ROOT, detectIslandFromHost } from '@/lib/site';
import { MASTER_MAP, masterHostName, type MasterHost, type IslandSitemapHost } from '@/data/commercialGraph';
import { moneyNeighborhoods } from '@/data/offers';

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function loc(host: MasterHost, path: string): string {
  const hostname = masterHostName(host);
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `https://${hostname}${clean === '/' ? '/' : clean}`;
}

function neighborhoodRows(island: IslandSitemapHost): { host: MasterHost; path: string; priority: string }[] {
  return moneyNeighborhoods[island].map((hood) => ({
    host: island,
    path: `/${hood.slug}`,
    priority: '0.7',
  }));
}

function urlset(rows: { host: MasterHost; path: string; priority?: string }[]): string {
  const entries = rows.map((r) => {
    const href = loc(r.host, r.path);
    const priority =
      r.priority ??
      (r.path === '/' ? (r.host === 'hub' ? '1.0' : '0.9') : r.path === '/about' ? '0.6' : '0.8');
    const changefreq = r.path === '/' ? 'weekly' : 'monthly';
    return `  <url>
    <loc>${xmlEscape(href)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

export async function GET(request: Request) {
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || PRODUCTION_ROOT)
    .split(':')[0]
    .toLowerCase();
  const island = detectIslandFromHost(host);
  const corridors = island
    ? neighborhoodRows(island)
    : (['oahu', 'maui', 'kauai', 'bigisland'] as const).flatMap(neighborhoodRows);
  const rows = island
    ? [...MASTER_MAP.filter((r) => r.host === island), ...corridors]
    : [...MASTER_MAP, ...corridors];
  return new Response(urlset(rows), {
    status: 200,
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

export const dynamic = 'force-dynamic';
