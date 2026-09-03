import type { Metadata } from 'next';
import type { IslandId } from '@/data/islands';
import { ISLAND_HOSTS } from '@/lib/site';
import { resolveDocumentSeo, type DocumentSeo } from '@/lib/seo';

export function seoToMetadata(seo: DocumentSeo, extras?: Partial<Metadata>): Metadata {
  const index = !seo.robots.includes('noindex');
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
    robots: { index, follow: !seo.robots.includes('nofollow') },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      type: seo.ogType,
      images: [{ url: seo.ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    ...extras,
  };
}

export function hubMetadata(path: string): Metadata {
  return seoToMetadata(resolveDocumentSeo('mychef-hawaii.com', path));
}

export function islandMetadata(island: IslandId, path: string): Metadata {
  return seoToMetadata(resolveDocumentSeo(`${island}.mychef-hawaii.com`, path));
}

export async function islandPageMetadata(
  params: Promise<{ island: string }>,
  path: string,
): Promise<Metadata> {
  const { island } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) {
    return hubMetadata('/');
  }
  return islandMetadata(island as IslandId, path);
}
