import { headers } from 'next/headers';
import { ISLAND_HOSTS, detectIslandFromHost } from '@/lib/site';
import type { IslandId } from '@/data/islands';
import { islands } from '@/data/islands';
import { resolveDocumentSeo, type DocumentSeo } from '@/lib/seo';
import type { Metadata } from 'next';

export function isIslandId(value: string | undefined | null): value is IslandId {
  return Boolean(value && (ISLAND_HOSTS as readonly string[]).includes(value));
}

export async function requestHost(): Promise<string> {
  const h = await headers();
  return (
    h.get('x-request-host') ||
    h.get('x-forwarded-host') ||
    h.get('host') ||
    'mychef-hawaii.com'
  )
    .split(':')[0]
    .toLowerCase();
}

export async function requestPathname(): Promise<string> {
  const h = await headers();
  const raw = h.get('x-pathname') || '/';
  return raw.replace(/\/$/, '') || '/';
}

export async function requestIsland(): Promise<IslandId | null> {
  const h = await headers();
  const flagged = h.get('x-island');
  if (isIslandId(flagged)) return flagged;
  const host = await requestHost();
  const fromHost = detectIslandFromHost(host);
  if (fromHost) return fromHost;
  const path = await requestPathname();
  const seg = path.split('/').filter(Boolean)[0];
  return isIslandId(seg) ? seg : null;
}

export async function requestHostMode(): Promise<boolean> {
  const h = await headers();
  if (h.get('x-host-mode') === '1') return true;
  const host = await requestHost();
  return Boolean(detectIslandFromHost(host));
}

export async function resolveRequestSeo(): Promise<DocumentSeo> {
  const host = await requestHost();
  const path = await requestPathname();
  return resolveDocumentSeo(host, path);
}

export async function pageMetadata(overrides?: Partial<Metadata>): Promise<Metadata> {
  const seo = await resolveRequestSeo();
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
    ...overrides,
  };
}

export function islandName(id: IslandId | null): string {
  return id ? islands[id].name : 'Hawaiʻi';
}
