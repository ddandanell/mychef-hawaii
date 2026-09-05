import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /gatherings indexes. Distinct from hub /gatherings, from /events,
 * /blog/family-reunions, /events/birthdays, and /rehearsal-dinners.
 * Titles must not use money keywords.
 */

export const GATHERINGS_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/events', label: 'Occasions' },
  { path: '/events/birthdays', label: 'Birthdays' },
  { path: '/blog/family-reunions', label: 'Family reunions' },
  { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
  { path: '/events/brunch', label: 'Day-after brunch' },
  { path: '/guest-counts', label: 'Guest counts we staff' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandGatherings: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu gatherings — the house, not a Gold Coast ballroom.',
    title: 'Oahu house gatherings — birthdays and reunions in the room | myCHEF',
    description:
      'Oahu house gatherings: birthdays and reunions in the room. Distinct from /events, /blog/family-reunions, and hub /gatherings.',
    lede:
      '/events is the occasion index. /blog/family-reunions is the reunion note. Hub /gatherings is statewide. This page is the Oahu house-gathering list.',
    kicker: 'Oʻahu · Gatherings',
    photo: 'gatherIndexOahu',
    body: [
      `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. Wedding-week stacks live on /weddings. These URLs do not steal those titles.`,
      'Birthdays, reunions, and rehearsal dinners sit in residences we can actually cook in. Guest counts we staff: dinners 2–15, receptions about 10–75 — /guest-counts.',
    ],
    faqs: [
      {
        q: 'Same as /events?',
        a: 'That page is the occasion index. This page is the Oahu house-gathering list beside it.',
      },
      {
        q: 'Same as /blog/family-reunions?',
        a: 'That note is the reunion essay. This page is the Oahu gathering directory.',
      },
    ],
  },
  maui: {
    h1: 'Maui gatherings — the villa, not a Wailea banquet.',
    title: 'Maui house gatherings — birthdays and reunions in the villa | myCHEF',
    description:
      'Maui house gatherings: birthdays and reunions in the villa. Distinct from /events, /blog/family-reunions, /wedding-week, and hub /gatherings.',
    lede:
      '/events is the occasion index. /wedding-week is the SKU stack. This page is the Maui house-gathering list — a villa table, not a banquet.',
    kicker: 'Maui · Gatherings',
    photo: 'gatherIndexMaui',
    body: [
      `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. Wedding-week stacks live on /weddings and /wedding-week. These URLs do not steal those titles.`,
      'Birthdays, reunions, and rehearsal dinners sit in South Maui and West Maui houses. Guest counts we staff live on /guest-counts.',
    ],
    faqs: [
      {
        q: 'Same as /wedding-week?',
        a: 'That page is the SKU stack. This page is house gatherings that are not a four-line wedding.',
      },
      {
        q: 'Same as /blog/family-reunions?',
        a: 'That note is the reunion essay. This page is the Maui gathering directory.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai gatherings — the estate at inquiry, not a ballroom.',
    title: 'Kauai house gatherings — inquiry estates, not a ballroom | myCHEF',
    description:
      'Kauai house gatherings at inquiry. Distinct from /events, /blog/family-reunions, and hub /gatherings. Not a Book-now button.',
    lede:
      '/events is the occasion index at inquiry. This page is the Kauai house-gathering list — both shores, when we can staff, not a fake roster.',
    kicker: 'Kauaʻi · Gatherings',
    photo: 'gatherIndexKauai',
    body: [
      `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. Wedding-week stacks live on /weddings and /wedding-week. Inquiry stage.`,
      'A named shore is not a confirmation. Far-North gatherings inherit /hanalei-bridge. Guest counts we staff live on /guest-counts.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. House gatherings exist when we can staff. Send the dates on /quote.',
      },
      {
        q: 'Same as /events?',
        a: 'That page is the occasion index. This page is the Kauai house-gathering list beside it.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side gatherings — the house at inquiry. Hilo not implied.',
    title: 'West-side house gatherings — inquiry tables, Hilo not implied | myCHEF',
    description:
      'Hawaiʻi Island west-side house gatherings at inquiry. Distinct from /events, /blog/family-reunions, /east-side, and hub /gatherings.',
    lede:
      '/events is the occasion index at inquiry. This page is the west-side house-gathering list — Kona to Kohala, Hilo never implied.',
    kicker: 'Hawaiʻi Island · Gatherings',
    photo: 'gatherIndexBigisland',
    body: [
      `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. West side first. East side is a dedicated day — /east-side.`,
      'Birthdays and reunions sit in west-side houses we can actually staff. Ironman weeks compress the calendar — /ironman-weeks. Guest counts: /guest-counts.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. These are west-side house gatherings — Kona to Kohala. Hilo is a dedicated east-side day on /east-side.',
      },
      {
        q: 'Same as /events?',
        a: 'That page is the occasion index. This page is the west-side gathering list beside it.',
      },
    ],
  },
};
