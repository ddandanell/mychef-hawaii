import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Hub-only pickers for support paths that already live on every island host.
 * Titles must not use money keywords and must not steal island-host titles.
 */

export const HUB_DIRECTORY_PATHS = [
  '/faq',
  '/coverage',
  '/contact',
  '/locations',
  '/menus',
  '/help',
  '/fine-dining',
  '/staffing',
] as const;

export type HubDirectoryId =
  | 'faq'
  | 'coverage'
  | 'contact'
  | 'locations'
  | 'menus'
  | 'help'
  | 'fineDining'
  | 'staffing';

export interface HubDirectory {
  path: (typeof HUB_DIRECTORY_PATHS)[number];
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  cardLabel: string;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const hubDirectories: Record<HubDirectoryId, HubDirectory> = {
  faq: {
    path: '/faq',
    h1: 'Questions, by island.',
    title: 'Questions, by island | myCHEF Hawaii',
    description:
      'Each island host keeps its own FAQ. This hub page is the picker — not Oahu questions, not Maui villa kitchens.',
    lede:
      'Booking questions live on the island host. This page does not rank for private chef Maui or Oahu catering. Open the island that holds the house.',
    kicker: 'Statewide · FAQ',
    photo: 'hubFaq',
    cardLabel: 'Questions',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']} monthly) stays on maui.mychef-hawaii.com. Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on oahu.mychef-hawaii.com/catering. This directory holds neither title.`,
      'Each island FAQ names kitchens, corridors, and what we will not claim. Kauaʻi and Hawaiʻi Island stay inquiry. The answers are not copied statewide.',
    ],
    faqs: [
      {
        q: 'Is this the Oahu FAQ?',
        a: 'No. Oahu questions live on oahu.mychef-hawaii.com/faq. This page is the four-island picker.',
      },
      {
        q: 'Does this page own a money keyword?',
        a: 'No. Catering and private-chef titles stay on island hosts and on hub /catering. This is a directory.',
      },
    ],
  },
  coverage: {
    path: '/coverage',
    h1: 'Coverage maps, by island.',
    title: 'Coverage maps, by island | myCHEF Hawaii',
    description:
      'Each island host publishes its own coverage map. Distinct from hub /areas (map notes) and from live dinner doors at /locations.',
    lede:
      'Drive times and surcharge days live on the island host. This page is the picker. /areas is map notes. /locations is the live dinner-door list.',
    kicker: 'Statewide · Coverage',
    photo: 'hubCoverage',
    cardLabel: 'Coverage map',
    body: [
      `Hawaii catering (${SEARCH_VOLUMES['hawaii catering']} monthly) stays on hub /catering. This directory does not steal that title.`,
      'Oahu names the North Shore surcharge. Maui names Upcountry. Kauaʻi names both shores and the bridge. Hawaiʻi Island is west side first — Hilo is a different day.',
    ],
    faqs: [
      {
        q: 'Same as /areas?',
        a: 'No. Hub /areas is map notes. This page points at each island’s /coverage zone map.',
      },
      {
        q: 'Same as /locations?',
        a: 'Locations is the live corridor list. Coverage is the zone map and drive times.',
      },
    ],
  },
  contact: {
    path: '/contact',
    h1: 'How to reach a desk, by island.',
    title: 'How to reach a desk, by island | myCHEF Hawaii',
    description:
      'Each island department has its own desk hours and form. This hub page is the picker — not the Oahu desk, not the Maui desk.',
    lede:
      'Quotes and inquiry replies run in Hawaii Standard Time on the island host. This page does not take the booking. Open the desk that holds the house.',
    kicker: 'Statewide · Contact',
    photo: 'hubContact',
    cardLabel: 'The desk',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) and private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stay on those hosts. This directory is how to reach a coordinator, not a dinner title.`,
      'Oʻahu and Maui take quotes. Kauaʻi and Hawaiʻi Island are inquiry. WhatsApp and the five-field form live on the island /contact and /quote pages.',
    ],
    faqs: [
      {
        q: 'Can I quote from this page?',
        a: 'Open the island desk. The form and HST hours live there. This page only points.',
      },
      {
        q: 'Is this the honesty register?',
        a: 'No. Reviews and what we will not claim live on each island /trust. This is reachability.',
      },
    ],
  },
  locations: {
    path: '/locations',
    h1: 'Live dinner doors, by island.',
    title: 'Live dinner doors, by island | myCHEF Hawaii',
    description:
      'Each island host lists its live corridor URLs. Distinct from hub /areas (map notes) and from each island /coverage zone map.',
    lede:
      'Named towns are live URLs on the island host — not a statewide blob. This page is the picker. /areas is map notes, not this list.',
    kicker: 'Statewide · Locations',
    photo: 'hubLocations',
    cardLabel: 'Live dinner doors',
    body: [
      `Private chef Honolulu (${SEARCH_VOLUMES['private chef honolulu']}) is a related phrase, not this title. Corridor pages live on the Oahu host. This directory does not flatten them.`,
      'Oahu: Honolulu to Ko Olina. Maui: Wailea to Kapalua. Kauaʻi: both shores. Hawaiʻi Island: Kona to Kohala, west side first.',
    ],
    faqs: [
      {
        q: 'Same as hub /areas?',
        a: 'No. /areas is map notes. This page points at each island’s live dinner-door list.',
      },
      {
        q: 'Why not one Honolulu page on the hub?',
        a: 'The live URL is oahu.mychef-hawaii.com/honolulu. The hub does not steal corridor titles.',
      },
    ],
  },
  menus: {
    path: '/menus',
    h1: 'How menus are designed, by island.',
    title: 'How menus are designed, by island | myCHEF Hawaii',
    description:
      'Each island host explains how a table is designed. Distinct from nested /menus/:sku pages and from the island /menus process document.',
    lede:
      'There is no standing statewide carte. Each island writes how fish, produce, and the draft work in that kitchen. This page is the picker.',
    kicker: 'Statewide · Menus',
    photo: 'hubMenus',
    cardLabel: 'Menu design',
    body: [
      `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on maui.mychef-hawaii.com/catering. This directory is how a menu is designed, not a catering title.`,
      'Three-course, family-style, breakfast, and lunch SKUs live under each island /menus/:sku. Open the island process page first, then the SKU.',
    ],
    faqs: [
      {
        q: 'Is this a sample menu?',
        a: 'No. Sample courses live on island SKU pages. This is the four-island picker for the process documents.',
      },
      {
        q: 'Same as /help/menu-guide?',
        a: 'The menu guide is a help article on the island host. This page points at each island’s /menus process page.',
      },
    ],
  },
  help: {
    path: '/help',
    h1: 'Help desks, by island.',
    title: 'Help desks, by island | myCHEF Hawaii',
    description:
      'Each island host keeps a help desk: first booking, menu draft, after the quote. Distinct from /faq and from nested /help/:slug articles.',
    lede:
      '/faq is questions. /how-it-works is the night. /quote is the form. Each island /help is the list of first-booking documents. This page is the picker.',
    kicker: 'Statewide · Help',
    photo: 'hubHelp',
    cardLabel: 'Help desk',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on the Kauaʻi host. This directory does not steal that title.`,
      'Getting started, menu guide, wedding guide, corporate guide, and managing a booking live under each island /help/:slug. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /faq?',
        a: 'FAQ is the question list on the island host. Help is the first-booking document list. This page points at help desks.',
      },
      {
        q: 'Can I start a booking here?',
        a: 'Open the island help desk, then /quote on that host. This page does not take the form.',
      },
    ],
  },
  fineDining: {
    path: '/fine-dining',
    h1: 'In-villa formats, by island.',
    title: 'In-villa formats, by island | myCHEF Hawaii',
    description:
      'Each island lists in-villa formats — not a Michelin claim. Distinct from /honeymoon-dinners, /chefs-table, and nested /fine-dining/:course pages.',
    lede:
      'Halo formats live on the island host. We do not claim a star. This page is the picker for those lists, not a tasting-menu SKU.',
    kicker: 'Statewide · Fine dining',
    photo: 'hubFine',
    cardLabel: 'In-villa formats',
    body: [
      `Wedding catering Hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) stays on hub /weddings. This directory is in-villa formats, not a wedding title.`,
      'Romantic dinner, tasting menu, chef’s-table evening, and celebration dinner live under each island /fine-dining/:course. Open the island list first.',
    ],
    faqs: [
      {
        q: 'Is this a Michelin page?',
        a: 'No. We do not claim a star. Island /fine-dining pages say that in the title. This is the picker.',
      },
      {
        q: 'Same as /chefs-table?',
        a: 'Chef’s table is a named SKU on the island host. This page points at the format list that includes it.',
      },
    ],
  },
  staffing: {
    path: '/staffing',
    h1: 'Staffing add-ons, by island.',
    title: 'Staffing add-ons, by island | myCHEF Hawaii',
    description:
      'Each island lists hourly add-ons: servers, bartenders, quoted butlers. Distinct from /bar, /mobile-bar, and nested /staffing/:role pages.',
    lede:
      '/bar is the bartender add-on door. /mobile-bar is the four-hour package. Each island /staffing is the list of hourly lines. This page is the picker.',
    kicker: 'Statewide · Staffing',
    photo: 'hubStaff',
    cardLabel: 'Staffing add-ons',
    body: [
      `Mobile bar Hawaii (${SEARCH_VOLUMES['mobile bar hawaii']} monthly) stays on hub /mobile-bar and island /mobile-bar. This directory is the staffing list, not that package.`,
      'Servers, bartenders, and quoted butlers live under each island /staffing/:role. Kauaʻi and Hawaiʻi Island print those lines at inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /bar?',
        a: 'Bar is the bartender add-on. This page points at the staffing directory that includes servers and quoted butlers.',
      },
      {
        q: 'Do you send a butler from this URL?',
        a: 'No. Butler is a quoted line on the island host. Open that island’s staffing list.',
      },
    ],
  },
};

export function getHubDirectory(path: string): HubDirectory | undefined {
  const clean = path.replace(/\/$/, '') || '/';
  return (Object.values(hubDirectories) as HubDirectory[]).find((row) => row.path === clean);
}
