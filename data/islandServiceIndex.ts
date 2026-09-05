import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /services indexes. Distinct from hub /services, from money doors
 * (/, /catering, /private-chef), and from /sitemap. Titles must not use
 * money keywords.
 */

export interface IslandServiceIndexPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/private-chef', label: 'What’s included' },
  { path: '/vacation-chef', label: 'Stay Chef week' },
  { path: '/personal-chef', label: 'Household line' },
  { path: '/catering', label: 'Staffed catering' },
  { path: '/weddings', label: 'Wedding week' },
  { path: '/events', label: 'Occasions' },
  { path: '/bar', label: 'Bartender add-on' },
  { path: '/mobile-bar', label: 'The packaged cart' },
  { path: '/fine-dining', label: 'In-villa formats' },
  { path: '/staffing', label: 'Staffing add-ons' },
  { path: '/help', label: 'Help desk' },
  { path: '/corporate', label: 'Villa offsites' },
  { path: '/gatherings', label: 'House gatherings' },
  { path: '/pricing', label: 'What a night costs' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandServiceIndex: Record<IslandId, IslandServiceIndexPage> = {
  oahu: {
    h1: 'Oahu services — villa dinners, Stay Chef weeks, staffed rooms.',
    title: 'Oahu service list — villa dinners, Stay Chef weeks, staffed rooms | myCHEF',
    description:
      'Oahu service list: villa dinners, Stay Chef weeks, staffed catering, bar. Distinct from /, /catering, and hub /services.',
    lede:
      '/ is the dinner door. /catering is the staffed-room door. This page is the list — Gold Coast dinners, Ko Olina weeks, and the add-ons beside them.',
    kicker: 'Oʻahu · Services',
    photo: 'svcIndexOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This directory does not steal those titles.`,
      'Each name below is a live URL on this host. Hotel suites without a cooktop are still declined. The honesty register is /trust. The claim list is /what-we-dont-do.',
    ],
    faqs: [
      {
        q: 'Same as / or /catering?',
        a: 'Those are the Gold Coast money doors. This page is the curated Oahu service list beside them.',
      },
      {
        q: 'Same as hub /services?',
        a: 'The hub is statewide. This page is the Oahu list.',
      },
    ],
  },
  maui: {
    h1: 'Maui services — Wailea dinners, villa weeks, staffed rooms.',
    title: 'Maui service list — Wailea dinners, villa weeks, staffed rooms | myCHEF',
    description:
      'Maui service list: villa dinners, Stay Chef weeks, staffed catering, bar. Distinct from /, /catering, and hub /services.',
    lede:
      '/ is the dinner door. /catering is the staffed-room door. This page is the list — Wailea dinners, West Maui weeks, and the add-ons beside them.',
    kicker: 'Maui · Services',
    photo: 'svcIndexMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This directory does not steal those titles.`,
      'Each name below is a live URL on this host. Saturday West Maui traffic is planned on /west-maui. The honesty register is /trust.',
    ],
    faqs: [
      {
        q: 'Same as / or /catering?',
        a: 'Those are the Wailea money doors. This page is the curated Maui service list beside them.',
      },
      {
        q: 'Same as hub /services?',
        a: 'The hub is statewide. This page is the Maui list.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai services — both-shore inquiry dinners and staffed rooms.',
    title: 'Kauai service list — both-shore inquiry dinners and staffed rooms | myCHEF',
    description:
      'Kauai service list at inquiry: dinners, weeks, staffed rooms, bar. Distinct from /, /catering, and hub /services. Not a Book-now button.',
    lede:
      '/ is the dinner door at inquiry. /catering is the staffed-room door. This page is the list — both shores, when we can staff, not a fake roster.',
    kicker: 'Kauaʻi · Services',
    photo: 'svcIndexKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This directory does not steal those titles. Inquiry stage.`,
      'Each name below is a live URL at inquiry. A named shore is not a Book-now button. Hanalei-bridge weather is a clause — /hanalei-bridge. The honesty register is /trust.',
    ],
    faqs: [
      {
        q: 'Same as / or /catering?',
        a: 'Those are the inquiry doors. This page is the curated service list beside them.',
      },
      {
        q: 'Are you live?',
        a: 'Inquiry. Send the dates on /quote. We write back when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side services — inquiry dinners, weeks, staffed rooms. Hilo not implied.',
    title: 'West-side service list — inquiry dinners, weeks, staffed rooms | myCHEF',
    description:
      'Hawaiʻi Island west-side service list at inquiry. Distinct from /, /catering, /east-side, and hub /services.',
    lede:
      '/ is the west-side dinner door at inquiry. /catering is the staffed-room door. This page is the list — Kona to Kohala, Hilo never implied.',
    kicker: 'Hawaiʻi Island · Services',
    photo: 'svcIndexBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This directory does not steal those titles. West side first.`,
      'Each name below is a live URL at inquiry. East side is a dedicated day — /east-side. Ironman weeks compress the calendar — /ironman-weeks. The honesty register is /trust.',
    ],
    faqs: [
      {
        q: 'Same as / or /catering?',
        a: 'Those are the west-side inquiry doors. This page is the curated service list beside them.',
      },
      {
        q: 'Does this list cover Hilo?',
        a: 'No. These are west-side service names — Kona to Kohala. Hilo is a dedicated east-side day on /east-side.',
      },
    ],
  },
};
