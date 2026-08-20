export const config = { runtime: 'nodejs' };

import { PRODUCTION_ROOT, detectIslandFromHost, locFromHost, siteUrl } from '../src/config/site';

export async function GET(request: Request) {
  const host = (request.headers.get('host') || PRODUCTION_ROOT).split(':')[0];
  const loc = locFromHost(host);
  const island = detectIslandFromHost(host);
  const origin = (island ? siteUrl(island, '/', loc) : siteUrl('root', '/', loc)).replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

Host: ${origin}
Sitemap: ${origin}/sitemap.xml
`;
  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, s-maxage=3600',
    },
  });
}
