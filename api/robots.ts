const PRODUCTION_ROOT = 'mychef-hawaii.com';
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

function productionHost(hostname: string): string {
  const h = hostname.split(':')[0]?.toLowerCase() ?? PRODUCTION_ROOT;
  if (h === 'localhost' || h.endsWith('.localhost') || h.startsWith('127.')) return h;
  const first = h.split('.')[0];
  if ((ISLANDS as readonly string[]).includes(first)) {
    return `${first}.${PRODUCTION_ROOT}`;
  }
  return PRODUCTION_ROOT;
}

export async function GET(request: Request) {
  const raw = (request.headers.get('x-forwarded-host') || request.headers.get('host') || PRODUCTION_ROOT)
    .split(':')[0]
    .toLowerCase();
  const host = productionHost(raw);
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
