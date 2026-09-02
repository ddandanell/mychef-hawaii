import { detectIslandFromHost, PRODUCTION_ROOT } from '../src/config/site';
import { islandSitemapIndex, sitemapLocs } from '../src/lib/seo';

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

export async function GET(request: Request) {
  try {
    const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || PRODUCTION_ROOT)
      .split(':')[0]
      .toLowerCase();

    const index = islandSitemapIndex(host);
    const fromHost = detectIslandFromHost(host);
    const wantIndex = !fromHost && index.length > 0 && host === PRODUCTION_ROOT;

    let body: string;
    if (wantIndex) {
      body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.w3.org/schemas/sitemap/0.9">
${index.map((loc) => `  <sitemap><loc>${xmlEscape(loc)}</loc></sitemap>`).join('\n')}
  <sitemap><loc>https://${PRODUCTION_ROOT}/sitemaps/hub.xml</loc></sitemap>
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
        'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    console.error('sitemap', err);
    return new Response('<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      status: 200,
      headers: { 'content-type': 'application/xml; charset=utf-8' },
    });
  }
}
