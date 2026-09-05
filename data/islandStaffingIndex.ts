import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /staffing indexes. Distinct from nested /staffing/:role pages,
 * from /bar (bartender product) and /mobile-bar (4-hour package).
 * Titles must not use money keywords.
 */

export const islandStaffingIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu add-ons — servers, bartenders, butlers when a bench exists.',
    title: 'Oahu staffing add-ons — servers, bartenders, quoted butlers | myCHEF',
    description:
      'Oahu staffing add-ons: servers, bartenders, butlers quoted only when a bench exists. Hourly lines, never buried in the plate. Distinct from /bar.',
    lede:
      '/bar is the bartender product. /mobile-bar is the 4-hour package. This page is the hourly add-on list — written on the quote, never hidden in the catch.',
    kicker: 'Oʻahu · Staffing',
    photo: 'staffIndexOahu',
    body: [
      `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. These URLs are add-ons so that title stays clean. Staffing minimums live on /pricing.`,
      'A plated twelve needs more hands than a family-style eight. Butlers stay honesty/quoted — only when a bench exists. Gold Coast dining rooms: /gold-coast.',
    ],
    faqs: [
      {
        q: 'Same as /bar?',
        a: '/bar is the bartender product. /staffing/bartenders is the hourly line. This page lists both kinds of add-on.',
      },
      {
        q: 'Are butlers always available?',
        a: 'No. /staffing/butlers says so. We quote only when a bench exists.',
      },
    ],
  },
  maui: {
    h1: 'Maui add-ons — servers, lanai bartenders, butlers when a bench exists.',
    title: 'Maui staffing add-ons — servers, lanai bartenders, quoted butlers | myCHEF',
    description:
      'Maui staffing add-ons: servers, lanai bartenders, butlers quoted only when a bench exists. Hourly lines. Distinct from /bar and /mobile-bar.',
    lede:
      '/bar is the bartender product. /mobile-bar is the 4-hour package. This page is the hourly add-on list — Wailea rooms, West Maui lanais.',
    kicker: 'Maui · Staffing',
    photo: 'staffIndexMaui',
    body: [
      `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. These URLs are add-ons so that title stays clean. Staffing minimums live on /pricing.`,
      'Saturday West Maui traffic is planned on /west-maui. Butlers stay honesty/quoted — only when a bench exists.',
    ],
    faqs: [
      {
        q: 'Same as /bar?',
        a: '/bar is the bartender product. /staffing/bartenders is the hourly line. This page lists both kinds of add-on.',
      },
      {
        q: 'Are butlers always available?',
        a: 'No. /staffing/butlers says so. We quote only when a bench exists.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai add-ons — hourly lines, inquiry, no fake roster.',
    title: 'Kauai staffing add-ons — hourly lines at inquiry | myCHEF',
    description:
      'Kauai staffing add-ons at inquiry: servers, bartenders, butlers quoted only when a bench exists. Not a fake roster. Distinct from /bar.',
    lede:
      '/bar is the bartender product at inquiry. This page is the hourly add-on list — both shores, when we can staff, not a Book-now button.',
    kicker: 'Kauaʻi · Staffing',
    photo: 'staffIndexKauai',
    body: [
      `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. These URLs are add-ons so that title stays clean. Inquiry stage.`,
      'A named shore is not a confirmation. Hanalei-bridge weather is a clause — /hanalei-bridge. Butlers stay honesty/quoted.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. Hourly lines exist when we can staff. They are not a fake roster.',
      },
      {
        q: 'Same as /bar?',
        a: '/bar is the bartender product. /staffing/bartenders is the hourly line. This page lists both.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side add-ons — hourly lines, inquiry. Hilo not implied.',
    title: 'West-side staffing add-ons — hourly lines at inquiry | myCHEF',
    description:
      'Hawaiʻi Island west-side staffing add-ons at inquiry. Distinct from /bar, /mobile-bar, and /east-side.',
    lede:
      '/bar is the bartender product at inquiry. This page is the west-side hourly add-on list — Kona to Kohala, Hilo never implied.',
    kicker: 'Hawaiʻi Island · Staffing',
    photo: 'staffIndexBigisland',
    body: [
      `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. These URLs are add-ons so that title stays clean. West side first.`,
      'East side is a dedicated day — /east-side. Ironman weeks compress the calendar — /ironman-weeks. Butlers stay honesty/quoted.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. Open /east-side. It is a different chef day.',
      },
      {
        q: 'Same as /bar?',
        a: '/bar is the bartender product. /staffing/bartenders is the hourly line. This page lists both.',
      },
    ],
  },
};
