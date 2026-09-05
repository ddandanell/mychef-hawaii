import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /corporate indexes. Distinct from hub /corporate, from
 * /corporate-catering (SKU), /events/corporate-events (occasion),
 * /help/corporate-guide, and /conventions. Titles must not use money keywords.
 */

export const CORPORATE_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/corporate-catering', label: 'Executive dinners' },
  { path: '/events/corporate-events', label: 'House offsites' },
  { path: '/help/corporate-guide', label: 'How to brief an offsite' },
  { path: '/retreat-catering', label: 'Full-board retreat food' },
  { path: '/events/retreats', label: 'Retreat occasion' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandCorporate: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu offsites — Kahala dining rooms, not the convention centre.',
    title: 'Oahu villa offsites — houses, not HCC citywides | myCHEF',
    description:
      'Oahu villa offsites: houses, not HCC citywides. Distinct from /corporate-catering, /events/corporate-events, and hub /corporate.',
    lede:
      '/corporate-catering is the kitchen SKU. /events/corporate-events is the occasion. Hub /corporate is statewide. This page is the Oahu offsite list — a Kahala dining room is still a house.',
    kicker: 'Oʻahu · Offsites',
    photo: 'corpIndexOahu',
    body: [
      `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. These URLs do not steal that title. HCC citywides are closed through 2027 — /conventions.`,
      'Board dinners and house offsites sit in residences we can actually cook in. We do not staff a ballroom because a conference is in town.',
    ],
    faqs: [
      {
        q: 'Same as /corporate-catering?',
        a: 'That URL is the executive-dinner SKU. This page is the Oahu offsite list beside it.',
      },
      {
        q: 'Same as hub /corporate?',
        a: 'The hub is statewide. This page is the Oahu list.',
      },
    ],
  },
  maui: {
    h1: 'Maui offsites — Wailea houses, not a banquet floor.',
    title: 'Maui villa offsites — houses, not hotel ballrooms | myCHEF',
    description:
      'Maui villa offsites: houses, not hotel ballrooms. Distinct from /corporate-catering, /events/corporate-events, and hub /corporate.',
    lede:
      '/corporate-catering is the kitchen SKU. /events/corporate-events is the occasion. Hub /corporate is statewide. This page is the Maui offsite list — a Wailea dining room is still a house.',
    kicker: 'Maui · Offsites',
    photo: 'corpIndexMaui',
    body: [
      `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. These URLs do not steal that title. Saturday West Maui traffic is planned on /west-maui.`,
      'Villa offsites and crew meals sit in residences. We do not staff a resort banquet room because the group is already on property.',
    ],
    faqs: [
      {
        q: 'Same as /corporate-catering?',
        a: 'That URL is the executive-dinner SKU. This page is the Maui offsite list beside it.',
      },
      {
        q: 'Same as hub /corporate?',
        a: 'The hub is statewide. This page is the Maui list.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai offsites — estate tables at inquiry, not a convention product.',
    title: 'Kauai estate offsites — inquiry, not a MICE island | myCHEF',
    description:
      'Kauai estate offsites at inquiry. Distinct from /corporate-catering, /events/corporate-events, and hub /corporate. Not a Book-now button.',
    lede:
      '/corporate-catering is the kitchen SKU at inquiry. /events/corporate-events is the occasion. This page is the Kauai offsite list — both shores, when we can staff, not a fake roster.',
    kicker: 'Kauaʻi · Offsites',
    photo: 'corpIndexKauai',
    body: [
      `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. These URLs do not steal that title. Inquiry stage. Kauaʻi is not a MICE island.`,
      'A named shore is not a confirmation. Far-North offsites inherit /hanalei-bridge. Send dates on /quote.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. These documents explain the ask. They are not a Book-now button.',
      },
      {
        q: 'Same as /corporate-catering?',
        a: 'That URL is the SKU. This page is the Kauai offsite list beside it.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side offsites — Kona houses at inquiry. Hilo not implied.',
    title: 'West-side villa offsites — inquiry, not citywides | myCHEF',
    description:
      'Hawaiʻi Island west-side villa offsites at inquiry. Distinct from /corporate-catering, /events/corporate-events, /east-side, and hub /corporate.',
    lede:
      '/corporate-catering is the kitchen SKU at inquiry. This page is the west-side offsite list — Kona to Kohala, Hilo never implied.',
    kicker: 'Hawaiʻi Island · Offsites',
    photo: 'corpIndexBigisland',
    body: [
      `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. These URLs do not steal that title. West side first.`,
      'East side is a dedicated day — /east-side. Ironman weeks compress lodging, not a fake kitchen promise — /ironman-weeks.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. These are west-side villa offsites — Kona to Kohala. Hilo is a dedicated east-side day on /east-side.',
      },
      {
        q: 'Same as /corporate-catering?',
        a: 'That URL is the SKU. This page is the west-side offsite list beside it.',
      },
    ],
  },
};
