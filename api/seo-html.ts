export const config = { runtime: 'nodejs' };

import { resolveDocumentSeo } from '../src/lib/seo';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function inject(html: string, seo: ReturnType<typeof resolveDocumentSeo>): string {
  const extra = [
    `<link rel="canonical" href="${esc(seo.canonical)}" />`,
    `<meta property="og:type" content="${seo.ogType}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${esc(seo.canonical)}" />`,
    `<meta property="og:image" content="${esc(seo.ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="robots" content="${seo.robots}" />`,
    `<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`,
  ].join('\n    ');

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(seo.title)}</title>`);
  if (/<meta name="description"/.test(out)) {
    out = out.replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${esc(seo.description)}" />`,
    );
  } else {
    out = out.replace('</title>', `</title>\n    <meta name="description" content="${esc(seo.description)}" />`);
  }
  if (!out.includes('rel="canonical"')) {
    out = out.replace('</head>', `    ${extra}\n  </head>`);
  }
  return out;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = url.searchParams.get('path') || '/';
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'mychef-hawaii.com';
  const seo = resolveDocumentSeo(host, path);

  const deployment = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : url.origin;
  const indexRes = await fetch(`${deployment}/index.html`, {
    headers: { 'x-seo-bypass': '1' },
  });
  if (!indexRes.ok) {
    return new Response('index missing', { status: 500 });
  }
  const html = inject(await indexRes.text(), seo);
  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, s-maxage=120, stale-while-revalidate=86400',
      'x-island': seo.islandId ?? 'hub',
    },
  });
}
