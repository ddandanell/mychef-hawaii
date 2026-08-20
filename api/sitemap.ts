export const config = { runtime: 'nodejs' };

import { detectIslandFromHost } from '../src/config/site';
import { islandSitemapIndex, sitemapLocs } from '../src/lib/seo';

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

export async function GET(request: Request) {
  const host = request.headers.get('host') || 'mychef-hawaii.com';
  const childMaps = islandSitemapIndex(host);

  let body: string;
  if (childMaps.length && !detectIslandFromHost(host)) {
    body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${childMaps.map((u) => `  <sitemap><loc>${xmlEscape(u)}</loc></sitemap>`).join('\n')}
  <sitemap><loc>${xmlEscape(`https://${host.replace(/:\d+$/, '')}/sitemap-hub.xml`)}</loc></sitemap>
</sitemapindex>
`;
  } else {
    const urls = sitemapLocs(host);
    body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${xmlEscape(u.loc)}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  }

  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, s-maxage=3600',
    },
  });
}
