import { PRODUCTION_ROOT, detectIslandFromHost } from '@/lib/site';

export async function GET(request: Request) {
  const raw = (request.headers.get('x-forwarded-host') || request.headers.get('host') || PRODUCTION_ROOT)
    .split(':')[0]
    .toLowerCase();
  const island = detectIslandFromHost(raw);
  const host =
    raw === 'localhost' || raw.endsWith('.localhost') || raw.startsWith('127.')
      ? raw
      : island
        ? `${island}.${PRODUCTION_ROOT}`
        : PRODUCTION_ROOT;
  const proto = host.includes('localhost') ? 'http' : 'https';
  const origin = `${proto}://${host}`;
  const body = `User-agent: *
Allow: /

Host: ${origin}
Sitemap: ${origin}/sitemap.xml
`;
  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, s-maxage=3600',
    },
  });
}

export const dynamic = 'force-dynamic';
