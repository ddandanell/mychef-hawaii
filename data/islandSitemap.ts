import type { IslandId } from './islands';
import type { PhotoKey } from './photos';

/**
 * Island HTML /sitemap documents. The list of URLs is generated; the
 * title, H1, and still are unique so the page is not a cloned index.
 * Titles must not use money keywords.
 */

export interface IslandSitemapPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
}

export const islandSitemap: Record<IslandId, IslandSitemapPage> = {
  oahu: {
    h1: 'Every live Oahu URL on this host.',
    title: 'Oahu HTML sitemap — live URLs on this host | myCHEF',
    description:
      'HTML sitemap for the Oahu host: corridors, services, occasions, and supporting documents. Not the hub sitemap.',
    lede:
      'This is the Oahu host’s URL list. It is not Maui, Kauaʻi, or Hawaiʻi Island, and it is not the XML file at /sitemap.xml.',
    kicker: 'Oʻahu · Sitemap',
    photo: 'sitemapOahu',
  },
  maui: {
    h1: 'Every live Maui URL on this host.',
    title: 'Maui HTML sitemap — live URLs on this host | myCHEF',
    description:
      'HTML sitemap for the Maui host: corridors, services, occasions, and supporting documents. Not the hub sitemap.',
    lede:
      'This is the Maui host’s URL list. Wailea, West Maui, and wedding-week cells sit here as addresses, not as a statewide dump.',
    kicker: 'Maui · Sitemap',
    photo: 'sitemapMaui',
  },
  kauai: {
    h1: 'Every live Kauai URL on this host.',
    title: 'Kauai HTML sitemap — live URLs on this host | myCHEF',
    description:
      'HTML sitemap for the Kauai host at inquiry: both shores, supporting documents, and the cells we will quote.',
    lede:
      'This is the Kauaʻi host’s URL list. Inquiry stage. A listed URL is not a Book-now button.',
    kicker: 'Kauaʻi · Sitemap',
    photo: 'sitemapKauai',
  },
  bigisland: {
    h1: 'Every live west-side URL on this host.',
    title: 'Hawaiʻi Island HTML sitemap — live URLs on this host | myCHEF',
    description:
      'HTML sitemap for the Hawaiʻi Island host: west-side corridors, supporting documents, and east-side as its own cell.',
    lede:
      'This is the Hawaiʻi Island host’s URL list. West side first. /east-side is on the list because it is a different day.',
    kicker: 'Hawaiʻi Island · Sitemap',
    photo: 'sitemapBigisland',
  },
};
