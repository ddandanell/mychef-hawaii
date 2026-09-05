import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /areas indexes. Distinct from /locations (live dinner doors only)
 * and from /coverage (zone map). Titles must not use money keywords.
 */

export interface IslandAreasPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandAreas: Record<IslandId, IslandAreasPage> = {
  oahu: {
    h1: 'Oahu map notes — live corridors plus the rest of the named places.',
    title: 'Oahu map notes — Honolulu plus the rest of the island | myCHEF',
    description:
      'Oahu map notes: live dinner doors plus kitchen notes for the rest of the named places. /locations is corridors only. /coverage is the zone map.',
    lede:
      '/locations is the live dinner-door list. /coverage is the zone map. This page is the rest of the geography — Honolulu through ʻEwa, corridors and kitchen notes together.',
    kicker: 'Oʻahu · Areas',
    photo: 'areasIndexOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This directory does not steal that title.`,
      'Dinner doors below are live URLs. Named places without a corridor page link to a kitchen note, not a fake /{slug}. North Shore is still a surcharge day.',
    ],
    faqs: [
      {
        q: 'Same as /locations?',
        a: 'Locations lists only live dinner doors. This page adds the rest of the named places as kitchen notes.',
      },
      {
        q: 'Same as /coverage?',
        a: 'Coverage is drive time and zone class. This page is the place list.',
      },
    ],
  },
  maui: {
    h1: 'Maui map notes — live corridors plus Upcountry and the rest.',
    title: 'Maui map notes — Wailea plus Upcountry and the rest | myCHEF',
    description:
      'Maui map notes: live dinner doors plus kitchen notes for Upcountry, Pāʻia, and the rest. /locations is corridors only. /coverage is the zone map.',
    lede:
      '/locations is the live dinner-door list. /coverage is the zone map. This page is the rest of the island — Wailea through Kula, corridors and kitchen notes together.',
    kicker: 'Maui · Areas',
    photo: 'areasIndexMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This directory does not steal that title.`,
      'Dinner doors below are live URLs. Upcountry, Pāʻia, Makawao, and the rest are kitchen notes until they earn a corridor page. Saturday West Maui traffic still lives on /west-maui.',
    ],
    faqs: [
      {
        q: 'Same as /locations?',
        a: 'Locations lists only live dinner doors. This page adds Upcountry and the rest as kitchen notes.',
      },
      {
        q: 'Same as /south-maui or /west-maui?',
        a: 'Those are corridor essays. This page is the island-wide place list.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai map notes — both shores plus west-side towns, inquiry.',
    title: 'Kauai map notes — both shores plus west-side towns, inquiry | myCHEF',
    description:
      'Kauai map notes at inquiry: live dinner doors plus kitchen notes for west-side towns. /locations is corridors only. Inquiry is not a Book-now button.',
    lede:
      '/locations is the live dinner-door list at inquiry. /coverage is the zone map. This page is the rest of the island — both shores plus Waimea, Hanapēpē, and the towns in between.',
    kicker: 'Kauaʻi · Areas',
    photo: 'areasIndexKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This directory does not steal that title. Inquiry stage.`,
      'Princeville, Poʻipū, Hanalei, and Kapaʻa are dinner doors at inquiry. West-side towns are kitchen notes. A named place is not a live roster.',
    ],
    faqs: [
      {
        q: 'Same as /locations?',
        a: 'Locations lists only live dinner doors. This page adds west-side towns as kitchen notes.',
      },
      {
        q: 'Are you live on every town below?',
        a: 'Inquiry. We crew when we can staff. Send the date on /quote.',
      },
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island map notes — west side first, then the rest.',
    title: 'Hawaiʻi Island map notes — west side first, then the rest | myCHEF',
    description:
      'Hawaiʻi Island map notes: west-side dinner doors plus kitchen notes for the rest of the island. Hilo is a different day. /locations is corridors only.',
    lede:
      '/locations is the live west-side dinner-door list. /east-side is the Hilo crossing. This page is the rest of the geography — Kona through Kaʻū, corridors and kitchen notes together.',
    kicker: 'Hawaiʻi Island · Areas',
    photo: 'areasIndexBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This directory does not steal that title. West side first.`,
      'Kona, Waimea, Waikoloa, and Kohala are dinner doors at inquiry. Hilo, Volcano, Kaʻū, and the rest are kitchen notes or a dedicated east-side day — never a same-day round trip.',
    ],
    faqs: [
      {
        q: 'Same as /locations?',
        a: 'Locations lists only live west-side dinner doors. This page adds the rest of the named places.',
      },
      {
        q: 'Where is Hilo?',
        a: 'On this list as kitchen notes, and as a dedicated day on /east-side. Not a Kona add-on.',
      },
    ],
  },
};
