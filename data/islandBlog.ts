import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /blog index documents. Distinct from /journal (longer corridor notes)
 * and from the hub blog directory. Titles must not use money keywords.
 */

export interface IslandBlogPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
}

export const islandBlog: Record<IslandId, IslandBlogPage> = {
  oahu: {
    h1: 'Oahu blog — Honolulu kitchens in plain language.',
    title: 'Oahu private chef blog | myCHEF',
    description:
      'Shorter Oahu host posts for Honolulu kitchens and booking questions. Not the journal. Not a statewide feed.',
    lede:
      'Short posts for people already looking at this island’s dinner doors. Not a statewide feed, and not the longer corridor notes on /journal.',
    kicker: 'Oʻahu · Blog',
    photo: 'blogOahu',
    body: [
      `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) and Honolulu chef (${SEARCH_VOLUMES['private chef honolulu']}) stay on /catering and the home. This page does not steal those titles.`,
      'If you want the longer corridor notes, read /journal. This page stays closer to booking questions.',
    ],
  },
  maui: {
    h1: 'Maui blog — villa nights without a statewide feed.',
    title: 'Maui private chef blog | myCHEF',
    description:
      'Shorter Maui host posts beside Wailea and Kāʻanapali nights. Not the journal. Not a statewide feed.',
    lede:
      'Short posts beside villa nights on this island. Wailea and Kāʻanapali stay named; statewide Hawaii catering does not live here.',
    kicker: 'Maui · Blog',
    photo: 'blogMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) and Maui catering (${SEARCH_VOLUMES['maui catering']}) stay dinner doors. This page is the shorter companion.`,
      'Wedding-week pacing and kitchen-constraint notes belong on /journal; this page stays closer to booking questions.',
    ],
  },
  kauai: {
    h1: 'Kauai blog — inquiry notes, not a staffed calendar.',
    title: 'Kauai private chef blog | myCHEF',
    description:
      'Shorter Kauai host posts at inquiry. Princeville and Poʻipū named. Not a live roster. Not the journal.',
    lede:
      'Short posts for readers who still need to know we quote before we staff. Princeville and Poʻipū are named; we do not invent volume.',
    kicker: 'Kauaʻi · Blog',
    photo: 'blogKauai',
    body: [
      `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This page does not steal that title.`,
      'If you need the Hanalei-bridge weather note at length, /journal is the better page.',
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island blog — Kona first, Hilo later.',
    title: 'Hawaiʻi Island private chef blog | myCHEF',
    description:
      'Shorter Hawaiʻi Island host posts. West side first. East side is a different day. Not the journal.',
    lede:
      'Short posts beside west-side kitchens. East side is a different day — that sentence belongs here too.',
    kicker: 'Hawaiʻi Island · Blog',
    photo: 'blogBigisland',
    body: [
      `Big island catering (${SEARCH_VOLUMES['big island catering']}) and a Kona chef (${SEARCH_VOLUMES['private chef kona']}) stay dinner doors. This page is the shorter companion.`,
      'West-side kitchens and Kohala travel show up in the shorter posts; /journal keeps the longer corridor notes.',
    ],
  },
};
