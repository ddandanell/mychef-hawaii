export const config = { runtime: 'nodejs' };

import { sitemapLocs } from '../src/lib/seo';

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

/** Apex-only URL set (hub routes). Island sitemaps live on island hosts. */
export async function GET(request: Request) {
  const host = request.headers.get('host') || 'mychef-hawaii.com';
  const urls = sitemapLocs(host).filter((u) => {
    try {
      const h = new URL(u.loc).hostname;
      return h === host.split(':')[0] || h === host;
    } catch {
      return true;
    }
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>
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
  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, s-maxage=3600',
    },
  });
}
