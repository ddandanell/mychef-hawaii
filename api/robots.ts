export async function GET(request: Request) {
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || 'mychef-hawaii.com')
    .split(':')[0]
    .toLowerCase();
  const proto = host.includes('localhost') ? 'http' : 'https';
  const origin = `${proto}://${host}`;
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
