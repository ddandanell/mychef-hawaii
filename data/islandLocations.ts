import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /locations indexes. Distinct from /coverage (zone map) and from
 * live corridor URLs. Middleware must not 301 this index to home.
 * Titles must not use money keywords.
 */

export interface IslandLocationsPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandLocations: Record<IslandId, IslandLocationsPage> = {
  oahu: {
    h1: 'The Oahu corridors we cook — live URLs, not a Honolulu blob.',
    title: 'Oahu corridors we cook — Honolulu to Ko Olina | myCHEF',
    description:
      'Live Oahu corridor URLs: Honolulu, Waikīkī, Kailua, North Shore, Kahala, Ko Olina. /coverage is the zone map. This page is the directory.',
    lede:
      '/coverage is the zone map. This page is the list of live neighborhood URLs on this host. We do not flatten them into one Honolulu keyword.',
    kicker: 'Oʻahu · Locations',
    photo: 'locIndexOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This directory does not steal that title.`,
      'Each name below is its own URL. Hotel suites without a cooktop are declined on /waikiki. North Shore is a surcharge day.',
    ],
    faqs: [
      {
        q: 'Same as /coverage?',
        a: 'Coverage is the zone map and drive times. This page is the live corridor list.',
      },
      {
        q: 'Why is /locations/honolulu a redirect?',
        a: 'The live URL is /honolulu. Old /locations/:slug addresses 301 here to the corridor.',
      },
    ],
  },
  maui: {
    h1: 'The Maui corridors we cook — South Shore, West Maui, named towns.',
    title: 'Maui corridors we cook — Wailea to Kapalua | myCHEF',
    description:
      'Live Maui corridor URLs: Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, Makena. /coverage is the zone map. This page is the directory.',
    lede:
      '/coverage is the zone map. This page is the list of live neighborhood URLs. Lahaina is a town on this list, not a mystery fee.',
    kicker: 'Maui · Locations',
    photo: 'locIndexMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This directory does not steal that title.`,
      'Saturday West Maui traffic is planned into arrival — /west-maui. Each name below is its own URL.',
    ],
    faqs: [
      {
        q: 'Same as /south-maui or /west-maui?',
        a: 'Those are corridor essays. This page is the directory of live town URLs.',
      },
      {
        q: 'Is Lahaina a separate fee?',
        a: 'No. Open /lahaina. Travel prints as its own line when it applies.',
      },
    ],
  },
  kauai: {
    h1: 'The Kauai corridors we quote — both shores, live URLs.',
    title: 'Kauai corridors we cook — both shores | myCHEF',
    description:
      'Live Kauai corridor URLs: Princeville, Poʻipū, Hanalei, Kapaʻa. Inquiry. /coverage is the zone map. This page is the directory.',
    lede:
      '/coverage is the zone map. This page is the live neighborhood list. Inquiry: a named shore is not a Book-now button.',
    kicker: 'Kauaʻi · Locations',
    photo: 'locIndexKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This directory does not steal that title.`,
      'Hanalei-bridge weather is a clause — /hanalei-bridge. Princeville and Poʻipū are not the same drive.',
    ],
    faqs: [
      {
        q: 'Are you live on both shores?',
        a: 'Inquiry. We crew when we can staff. The names below are still the places we will quote.',
      },
      {
        q: 'Same as /north-shore or /south-shore?',
        a: 'Those are shore essays. This page is the directory of live town URLs.',
      },
    ],
  },
  bigisland: {
    h1: 'The west-side corridors we quote — Kona to Kohala, live URLs.',
    title: 'Hawaiʻi Island corridors we cook — Kona to Kohala | myCHEF',
    description:
      'Live Hawaiʻi Island corridor URLs: Kona, Waimea, Waikoloa, Kohala. West side first. /east-side is a different day. This page is the directory.',
    lede:
      '/coverage is the zone map. This page is the live west-side list. Hilo is not implied — that day is /east-side.',
    kicker: 'Hawaiʻi Island · Locations',
    photo: 'locIndexBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This directory does not steal that title.`,
      'West side first. East side is a dedicated day. Each name below is its own URL.',
    ],
    faqs: [
      {
        q: 'Where is Hilo?',
        a: 'Not on this list. Open /east-side. It is a different chef day.',
      },
      {
        q: 'Same as /kohala-corridor?',
        a: 'That page is the 30-minute west-side essay. This page is the directory of live town URLs.',
      },
    ],
  },
};
