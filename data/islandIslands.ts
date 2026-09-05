import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /islands indexes. Distinct from hub /islands (the statewide picker)
 * and from /areas (map notes on this host). Titles must not use money keywords.
 */

export const islandIslands: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'This host is Oahu. Maui, Kauai, and the west side are other departments.',
    title: 'The other islands from Oahu — Maui, Kauai, west-side Hawaiʻi | myCHEF',
    description:
      'Oahu is this host. The other three island departments are separate sites. Distinct from hub /islands and from /areas.',
    lede:
      'Hub /islands is the statewide picker. /areas is Oahu map notes. This page is the other-host list — Maui, Kauaʻi, and Hawaiʻi Island as their own sites.',
    kicker: 'Oʻahu · Other islands',
    photo: 'islandsIndexOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This directory does not steal that title.`,
      'Each island is its own host: own chefs, own zones, own quote vs inquiry posture. Kauaʻi and Hawaiʻi Island stay inquiry. Oahu corridors stay on /locations.',
    ],
    faqs: [
      {
        q: 'Same as hub /islands?',
        a: 'The hub is the statewide picker. This page is the other-host list from Oahu.',
      },
      {
        q: 'Same as /areas?',
        a: 'That page is Oahu map notes. This page is the other island departments.',
      },
    ],
  },
  maui: {
    h1: 'This host is Maui. Oahu, Kauai, and the west side are other departments.',
    title: 'The other islands from Maui — Oahu, Kauai, west-side Hawaiʻi | myCHEF',
    description:
      'Maui is this host. The other three island departments are separate sites. Distinct from hub /islands and from /areas.',
    lede:
      'Hub /islands is the statewide picker. /areas is Maui map notes. This page is the other-host list — Oahu, Kauaʻi, and Hawaiʻi Island as their own sites.',
    kicker: 'Maui · Other islands',
    photo: 'islandsIndexMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This directory does not steal that title.`,
      'Each island is its own host. Kauaʻi and Hawaiʻi Island stay inquiry. Maui corridors stay on /locations. Saturday West Maui traffic stays on /west-maui.',
    ],
    faqs: [
      {
        q: 'Same as hub /islands?',
        a: 'The hub is the statewide picker. This page is the other-host list from Maui.',
      },
      {
        q: 'Same as /areas?',
        a: 'That page is Maui map notes. This page is the other island departments.',
      },
    ],
  },
  kauai: {
    h1: 'This host is Kauai at inquiry. The other three departments are separate sites.',
    title: 'The other islands from Kauai — Oahu, Maui, west-side Hawaiʻi | myCHEF',
    description:
      'Kauai is this host at inquiry. The other three island departments are separate sites. Distinct from hub /islands and from /areas.',
    lede:
      'Hub /islands is the statewide picker. /areas is Kauai map notes. This page is the other-host list — Oahu, Maui, and Hawaiʻi Island as their own sites.',
    kicker: 'Kauaʻi · Other islands',
    photo: 'islandsIndexKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This directory does not steal that title. Inquiry stage.`,
      'A named shore is not a Book-now button. Oahu and Maui take written quotes. Hawaiʻi Island is also inquiry, west side first.',
    ],
    faqs: [
      {
        q: 'Same as hub /islands?',
        a: 'The hub is the statewide picker. This page is the other-host list from Kauai.',
      },
      {
        q: 'Are you live?',
        a: 'Inquiry. Send dates on /quote. We write back when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'This host is the west side at inquiry. The other three departments are separate sites.',
    title: 'The other islands from the west side — Oahu, Maui, Kauai | myCHEF',
    description:
      'Hawaiʻi Island west side is this host at inquiry. The other three island departments are separate sites. Distinct from hub /islands, /areas, and /east-side.',
    lede:
      'Hub /islands is the statewide picker. /areas is west-side map notes. This page is the other-host list — Oahu, Maui, and Kauaʻi. Hilo is not another island; it is /east-side.',
    kicker: 'Hawaiʻi Island · Other islands',
    photo: 'islandsIndexBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This directory does not steal that title. West side first.`,
      'East side is a dedicated day on this same host — /east-side — not a fourth island. Oahu and Maui take written quotes. Kauaʻi is also inquiry.',
    ],
    faqs: [
      {
        q: 'Is Hilo another island?',
        a: 'No. Open /east-side. It is a different chef day on this host.',
      },
      {
        q: 'Same as hub /islands?',
        a: 'The hub is the statewide picker. This page is the other-host list from the west side.',
      },
    ],
  },
};
