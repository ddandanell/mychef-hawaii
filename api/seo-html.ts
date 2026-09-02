import seoMap from '../public/seo-map.json' with { type: 'json' };

const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

type SeoEntry = { title: string; description: string; island: string | null; path: string };

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function islandFromHost(host: string): (typeof ISLANDS)[number] | null {
  const first = host.split(':')[0]?.split('.')[0]?.toLowerCase() ?? '';
  return (ISLANDS as readonly string[]).includes(first) ? (first as (typeof ISLANDS)[number]) : null;
}

function localPath(host: string, pathname: string, island: string | null): string {
  const p = pathname.replace(/\/$/, '') || '/';
  if (island) return p.startsWith('/') ? p : `/${p}`;
  const seg = p.split('/').filter(Boolean)[0];
  if (seg && (ISLANDS as readonly string[]).includes(seg)) {
    const rest = p.slice(seg.length + 1);
    return rest ? rest : '/';
  }
  return p.startsWith('/') ? p : `/${p}`;
}

const CANONICAL_ALIASES: Record<string, string> = {
  '/wedding-catering': '/weddings',
  '/mobile-bar': '/bar',
  '/events': '/catering',
};

function canonicalPath(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const noTrail = clean.replace(/\/+$/, '') || '/';
  return CANONICAL_ALIASES[noTrail] ?? noTrail;
}

function canonical(island: string | null, path: string): string {
  const clean = canonicalPath(path);
  if (island) {
    return `https://${island}.mychef-hawaii.com${clean === '/' ? '/' : clean}`;
  }
  return `https://mychef-hawaii.com${clean === '/' ? '/' : clean}`;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = url.searchParams.get('path') || '/';
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || 'mychef-hawaii.com').split(
    ':',
  )[0];
  const deployment = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : url.origin;

  const htmlRes = await fetch(`${deployment}/index.html`, { headers: { 'x-seo-bypass': '1' } });
  if (!htmlRes.ok) return new Response('index missing', { status: 500 });

  const html = await htmlRes.text();
  const map = seoMap as Record<string, SeoEntry>;
  const fromHost = islandFromHost(host);
  const pathSeg = path.split('/').filter(Boolean)[0];
  const fromPath =
    !fromHost && pathSeg && (ISLANDS as readonly string[]).includes(pathSeg) ? pathSeg : null;
  const island = fromHost ?? fromPath;
  const local = canonicalPath(localPath(host, path, fromHost));
  const rec = map[`${island ?? 'hub'}:${local}`];
  const title = rec?.title ?? 'myCHEF Hawaii';
  const description =
    rec?.description ??
    'Private chefs, private dining, catering and events across Oʻahu, Maui, Kauaʻi and Hawaiʻi Island.';
  const canon = canonical(island, local);
  const robots = rec ? 'index,follow' : 'noindex,follow';

  const extra = [
    `<link rel="canonical" href="${esc(canon)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(canon)}" />`,
    `<meta name="robots" content="${robots}" />`,
  ].join('\n    ');

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  if (/<meta name="description"/.test(out)) {
    out = out.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`);
  }
  out = out.replace('</head>', `    ${extra}\n  </head>`);

  return new Response(out, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, s-maxage=120, stale-while-revalidate=86400',
      'x-island': island ?? 'hub',
    },
  });
}
