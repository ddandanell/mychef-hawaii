import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /journal index documents. Distinct from /blog (short form) and from
 * the hub journal directory. Titles must not use money keywords.
 */

export interface IslandJournalPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
}

export const islandJournal: Record<IslandId, IslandJournalPage> = {
  oahu: {
    h1: 'Oahu journal — corridor notes, not a statewide digest.',
    title: 'Oahu journal — corridor notes | myCHEF',
    description:
      'Oahu host journal: Honolulu, Waikīkī, Kailua, North Shore, Kahala, Ko Olina. Not the hub digest. Statewide Hawaii catering stays off this title.',
    lede:
      'Short notes from the live corridors. Statewide Hawaii catering is not this page. The hub journal on mychef-hawaii.com is a directory, not this list.',
    kicker: 'Oʻahu · Journal',
    photo: 'journalOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) and Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stay on / and /catering. This index does not steal those titles.`,
      'Pieces stay close to the kitchen: Gold Coast counters, convention-week access, short-stay villas that still have to cook. /blog is the shorter companion.',
    ],
  },
  maui: {
    h1: 'Maui journal — Wailea, Kāʻanapali, and the week between.',
    title: 'Maui journal — South and West | myCHEF',
    description:
      'Maui host journal: South Maui, West Maui, wedding-week houses. Not Oahu, Kauaʻi, or Hawaiʻi Island. Not the hub directory.',
    lede:
      'Notes from South Maui, West Maui, and wedding-week houses. Private chef Maui is the money phrase on the home; this page is the reading list beside it.',
    kicker: 'Maui · Journal',
    photo: 'journalMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) and Maui catering (${SEARCH_VOLUMES['maui catering']}) stay on / and /catering. This index does not steal those titles.`,
      'Expect kitchen-constraint notes, wedding-week pacing, and why a Wailea villa is a different night from a Kāʻanapali walk-up. /blog is the shorter companion.',
    ],
  },
  kauai: {
    h1: 'Kauai journal — North Shore weather and South Shore kitchens.',
    title: 'Kauai journal — both shores | myCHEF',
    description:
      'Kauai host journal at inquiry: Princeville, Hanalei, Kapaʻa, Poʻipū. Not a staffed calendar. Not the hub directory.',
    lede:
      'Inquiry-first notes from both shores. Private chef Kauai is measured; this page does not pretend we staff every night.',
    kicker: 'Kauaʻi · Journal',
    photo: 'journalKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) and Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stay dinner doors. This index is the reading list.`,
      'Hanalei-bridge weather and south-shore kitchens show up here because they change whether we can even quote a date. /blog is the shorter companion.',
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island journal — west side first, east side another day.',
    title: 'Hawaiʻi Island journal — west side first | myCHEF',
    description:
      'Hawaiʻi Island host journal: Kona, Waikoloa, Waimea, Kohala. West side first. Hilo is a different day. Not the hub directory.',
    lede:
      'Notes from the west side. Big island catering is the measured volume; east side is not implied.',
    kicker: 'Hawaiʻi Island · Journal',
    photo: 'journalBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and big island catering (${SEARCH_VOLUMES['big island catering']}) stay dinner doors. This index is the reading list.`,
      'Coffee Act 198 and Ironman weeks live here because they change access, not because they are marketing slogans. /blog is the shorter companion.',
    ],
  },
};
