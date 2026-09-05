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
  '/events',
  '/what-we-dont-do',
  '/guest-counts',
  '/dietary',
  '/honeymoon-dinners',
  '/chefs-table',
  '/kids-menus',
  '/personal-chef',
  '/private-chef-cost',
  '/meal-prep',
  '/cooking-classes',
  '/omakase-at-home',
  '/rehearsal-dinners',
  '/retreat-catering',
  '/corporate-catering',
] as const;

export type HubDirectoryId =
  | 'faq'
  | 'coverage'
  | 'contact'
  | 'locations'
  | 'menus'
  | 'help'
  | 'fineDining'
  | 'staffing'
  | 'events'
  | 'whatWeDontDo'
  | 'guestCounts'
  | 'dietary'
  | 'honeymoonDinners'
  | 'chefsTable'
  | 'kidsMenus'
  | 'personalChef'
  | 'privateChefCost'
  | 'mealPrep'
  | 'cookingClasses'
  | 'omakaseAtHome'
  | 'rehearsalDinners'
  | 'retreatCatering'
  | 'corporateCatering';

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
  events: {
    path: '/events',
    h1: 'Villa occasions, by island.',
    title: 'Villa occasions, by island | myCHEF Hawaii',
    description:
      'Each island host keeps its own events document. Distinct from hub /gatherings, /weddings, and nested /events/:occasion pages.',
    lede:
      'Birthdays, welcome nights, and retreats live on the island host. This page is the picker. Wedding-week stacks stay on /weddings.',
    kicker: 'Statewide · Events',
    photo: 'hubEvents',
    cardLabel: 'Occasions',
    body: [
      `Wedding catering Hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) stays on hub /weddings. This directory is villa occasions, not a wedding title.`,
      'Nested occasion URLs — birthdays, welcome dinners, retreats, brunch — live under each island /events/:occasion. Open the island document first.',
    ],
    faqs: [
      {
        q: 'Same as /gatherings?',
        a: 'Hub /gatherings is the statewide house-gathering door. This page points at each island’s /events document.',
      },
      {
        q: 'Same as /weddings?',
        a: 'Weddings is the week stack. This page is other villa occasions.',
      },
    ],
  },
  whatWeDontDo: {
    path: '/what-we-dont-do',
    h1: 'What we will not claim, by island.',
    title: 'What we will not claim, by island | myCHEF Hawaii',
    description:
      'Each island publishes its own claim list. Distinct from /trust (honesty register) and from /blog/no-fake-reviews.',
    lede:
      'No invented reviews, no fake licenses, no “now serving” language ahead of a staffed kitchen. Each island writes that in its own words. This page is the picker.',
    kicker: 'Statewide · Honesty',
    photo: 'hubHonesty',
    cardLabel: 'Claim list',
    body: [
      `Private chef Hawaii (${SEARCH_VOLUMES['private chef hawaii']}) stays on hub /. This directory does not steal that title.`,
      'Reviews publish after verified events. /trust is the honesty register. /blog/no-fake-reviews is the longer note. This page points at each island’s claim list.',
    ],
    faqs: [
      {
        q: 'Same as /trust?',
        a: 'Trust is the honesty register on the island host. This page points at the claim list beside it.',
      },
      {
        q: 'Do you have statewide reviews here?',
        a: 'No. We do not invent them. Open the island page.',
      },
    ],
  },
  guestCounts: {
    path: '/guest-counts',
    h1: 'Guest counts we staff, by island.',
    title: 'Guest counts we staff, by island | myCHEF Hawaii',
    description:
      'Each island publishes dinners 2–15 and receptions about 10–75. Distinct from /events and from /honeymoon-dinners.',
    lede:
      'A dinner for two is a chef and the shopping. A seated twelve is a different crew. Headcount lives on the island host. This page is the picker.',
    kicker: 'Statewide · Guest counts',
    photo: 'hubCounts',
    cardLabel: 'Headcount',
    body: [
      `Hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is headcount, not a catering title.`,
      'Larger than about seventy-five is quoted or declined on the island host — not stretched from a Tuesday dinner.',
    ],
    faqs: [
      {
        q: 'Can the hub promise 200 guests?',
        a: 'No. Open the island page. Larger formats are quoted, not promised.',
      },
      {
        q: 'Is two too small?',
        a: 'No. Dinner for two lives on each island /honeymoon-dinners.',
      },
    ],
  },
  dietary: {
    path: '/dietary',
    h1: 'Dietary design, by island.',
    title: 'Dietary design, by island | myCHEF Hawaii',
    description:
      'Each island designs vegan, gluten-free, and allergy plates in advance. Distinct from /menus and from /help/menu-guide.',
    lede:
      'Dietary is designed in, not theatre. Each island writes how that works in that kitchen. This page is the picker.',
    kicker: 'Statewide · Dietary',
    photo: 'hubDietary',
    cardLabel: 'Dietary',
    body: [
      `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on the Maui catering URL. This directory is how a restriction is designed, not a catering title.`,
      'Tell the island desk the restriction with the dates. The draft carries it. We do not invent a second menu brand statewide.',
    ],
    faqs: [
      {
        q: 'Is this a vegan restaurant page?',
        a: 'No. We cook in the house. Open the island dietary document.',
      },
      {
        q: 'Same as /menus?',
        a: 'Menus is how a table is designed. This page points at the dietary constraint document.',
      },
    ],
  },
  honeymoonDinners: {
    path: '/honeymoon-dinners',
    h1: 'Dinner for two, by island.',
    title: 'Dinner for two, by island | myCHEF Hawaii',
    description:
      'Each island hosts dinner-for-two as its own document. Distinct from /fine-dining, /chefs-table, and /weddings.',
    lede:
      'Two seats, one kitchen. Not a wedding-week stack. Each island writes the room. This page is the picker.',
    kicker: 'Statewide · Dinner for two',
    photo: 'hubHoneymoon',
    cardLabel: 'Two seats',
    body: [
      `Wedding catering Maui (${SEARCH_VOLUMES['wedding catering maui']}) stays on maui.mychef-hawaii.com/weddings. This directory is dinner for two, not that week.`,
      'Nested fine-dining courses live under /fine-dining/:course on the island host. This picker points at the honeymoon SKU.',
    ],
    faqs: [
      {
        q: 'Same as /weddings?',
        a: 'No. Weddings is the week. This is two seats on an ordinary night.',
      },
      {
        q: 'Same as /fine-dining?',
        a: 'Fine dining is the format list. This page points at the dinner-for-two SKU.',
      },
    ],
  },
  chefsTable: {
    path: '/chefs-table',
    h1: 'Chef’s table nights, by island.',
    title: 'Chef’s table nights, by island | myCHEF Hawaii',
    description:
      'Each island hosts chef’s table in the villa. Distinct from /fine-dining/chefs-table-evening, /omakase-at-home, and /honeymoon-dinners.',
    lede:
      'Not a resort communal table. The pass is in the house. Each island writes that SKU. This page is the picker.',
    kicker: 'Statewide · Chef’s table',
    photo: 'hubChefsTable',
    cardLabel: 'Chef’s table',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on the Kauaʻi host home. This directory does not steal that title.`,
      'The nested evening format is /fine-dining/chefs-table-evening on the island host. This page points at the named SKU beside it.',
    ],
    faqs: [
      {
        q: 'Is this a restaurant chef’s table?',
        a: 'No. The table is in the villa. Open the island SKU.',
      },
      {
        q: 'Same as omakase at home?',
        a: 'Omakase is a tasting arc with launch gates. Chef’s table is the named villa SKU. Different URLs on the island host.',
      },
    ],
  },
  kidsMenus: {
    path: '/kids-menus',
    h1: 'Kids at the table, by island.',
    title: 'Kids at the table, by island | myCHEF Hawaii',
    description:
      'Each island plans children’s plates with the adults’ menu. Distinct from /menus/breakfast and from /guest-counts.',
    lede:
      'Children’s plates are planned with the adults, not an afterthought. Each island writes how. This page is the picker.',
    kicker: 'Statewide · Kids',
    photo: 'hubKids',
    cardLabel: 'Kids’ plates',
    body: [
      `Personal chef Oahu (${SEARCH_VOLUMES['personal chef oahu']}) is a related household phrase, not this title. Kids’ plates live on the island host.`,
      'Headcount still lives on /guest-counts. Breakfast SKUs live under /menus/breakfast. This picker is the children’s-plate document.',
    ],
    faqs: [
      {
        q: 'Do you have a statewide kids’ carte?',
        a: 'No. Plates are designed per table on the island host.',
      },
      {
        q: 'Same as guest counts?',
        a: 'Guest counts is headcount. This page is how children’s plates are planned.',
      },
    ],
  },
  personalChef: {
    path: '/personal-chef',
    h1: 'Household chef line, by island.',
    title: 'Household chef line, by island | myCHEF Hawaii',
    description:
      'Each island keeps a resident household line. Distinct from hub /private-chef, from /vacation-chef, and from Oahu /kamaaina.',
    lede:
      'Weekly household cooking is not a tourist one-off. Each island writes that line. This page is the picker — not the statewide private-chef door.',
    kicker: 'Statewide · Household line',
    photo: 'hubPersonal',
    cardLabel: 'Household line',
    body: [
      `Personal chef Honolulu (${SEARCH_VOLUMES['personal chef honolulu']}) stays in Oahu copy, not this title. Private chef doors stay on island homes and hub /private-chef.`,
      'Oahu also has /kamaaina. That is a resident frequency page, not this picker. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef?',
        a: 'Hub /private-chef is the statewide villa-dinner door. This page points at each island’s household line.',
      },
      {
        q: 'Same as /vacation-chef?',
        a: 'Vacation chef is the villa week. This is resident household cooking.',
      },
    ],
  },
  privateChefCost: {
    path: '/private-chef-cost',
    h1: 'Fee stack explainers, by island.',
    title: 'Fee stack explainers, by island | myCHEF Hawaii',
    description:
      'Each island explains service, GET, and travel. Distinct from /pricing (what a night costs) and from island homes.',
    lede:
      '/pricing is the rate card. This picker points at each island’s fee-stack explainer. Titles never use “private chef {island}”.',
    kicker: 'Statewide · Fee stack',
    photo: 'hubFeeStack',
    cardLabel: 'Fee stack',
    body: [
      `Private chef Maui cost (${SEARCH_VOLUMES['private chef maui cost']}) is a measured long-tail. It does not live on this hub title. The explainer is on the island host.`,
      'Service 20% and GET are their own lines. Travel prints when it applies. The written quote is the confirmed total.',
    ],
    faqs: [
      {
        q: 'Same as /pricing?',
        a: 'Pricing is what a night costs. This page points at the fee-stack explainer beside it.',
      },
      {
        q: 'Does this URL rank for private chef Maui?',
        a: 'No. That title stays on the Maui host home.',
      },
    ],
  },
  mealPrep: {
    path: '/meal-prep',
    h1: 'Meal prep honesty, by island.',
    title: 'Meal prep honesty, by island | myCHEF Hawaii',
    description:
      'Each island gates volume meal prep until utilization is proven. Distinct from /vacation-chef and from /menus/lunch.',
    lede:
      'Meal prep is inquiry until proven. Each island says so. This page is the picker, not a standing fridge program.',
    kicker: 'Statewide · Meal prep',
    photo: 'hubMealPrep',
    cardLabel: 'Meal prep',
    body: [
      `Personal chef Maui (${SEARCH_VOLUMES['personal chef maui']}) stays in Maui household copy. This directory is the gated prep page, not a dinner title.`,
      'A villa week of dinners is /vacation-chef. Packed fridge volume is this SKU — gated on every island until utilization is real.',
    ],
    faqs: [
      {
        q: 'Can I order statewide meal prep here?',
        a: 'No. Open the island page. It is gated until proven.',
      },
      {
        q: 'Same as Stay Chef?',
        a: 'Stay Chef is the villa day rate on /vacation-chef. Meal prep is a different, gated line.',
      },
    ],
  },
  cookingClasses: {
    path: '/cooking-classes',
    h1: 'Cooking classes honesty, by island.',
    title: 'Cooking classes honesty, by island | myCHEF Hawaii',
    description:
      'Each island keeps classes unpublished until a real instructor bench exists. Distinct from /menus and from /chefs-table.',
    lede:
      'Experience product publishes only with a named bench. Each island says when that is not true. This page is the picker.',
    kicker: 'Statewide · Classes',
    photo: 'hubClasses',
    cardLabel: 'Classes',
    body: [
      `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on kauai.mychef-hawaii.com/catering. This directory is class honesty, not a catering title.`,
      'We will not sell a class SKU ahead of an instructor. The island page says so in its own words.',
    ],
    faqs: [
      {
        q: 'Can I book a class from the hub?',
        a: 'No. Open the island page. Classes stay unpublished until a bench exists.',
      },
      {
        q: 'Same as chef’s table?',
        a: 'Chef’s table is a dinner SKU. This is an experience product with a different gate.',
      },
    ],
  },
  omakaseAtHome: {
    path: '/omakase-at-home',
    h1: 'Omakase-at-home notes, by island.',
    title: 'Omakase-at-home notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts tasting-at-home with sourcing gates. Distinct from /fine-dining/tasting-menu, /chefs-table, and /honeymoon-dinners.',
    lede:
      'A tasting arc in the villa, not a restaurant omakase brand. Menu/IP and sourcing are launch gates. This page is the picker.',
    kicker: 'Statewide · Omakase',
    photo: 'hubOmakase',
    cardLabel: 'Tasting at home',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays on the Hawaiʻi Island host. This directory does not steal that title.`,
      'The nested tasting format is /fine-dining/tasting-menu on the island host. This picker points at the omakase SKU with its gates.',
    ],
    faqs: [
      {
        q: 'Is this a Michelin omakase?',
        a: 'No. We do not claim a star. Open the island page.',
      },
      {
        q: 'Same as /chefs-table?',
        a: 'Chef’s table is a named villa SKU. Omakase-at-home is a tasting arc with sourcing gates.',
      },
    ],
  },
  rehearsalDinners: {
    path: '/rehearsal-dinners',
    h1: 'Rehearsal dinners, by island.',
    title: 'Rehearsal dinners, by island | myCHEF Hawaii',
    description:
      'Each island quotes the night before as its own line. Distinct from /weddings, /events, and hub /gatherings.',
    lede:
      'The night before is not swallowed by a reception quote. Each island writes that line. This page is the picker.',
    kicker: 'Statewide · Rehearsal',
    photo: 'hubRehearsal',
    cardLabel: 'Rehearsal',
    body: [
      `Wedding catering Oahu (${SEARCH_VOLUMES['wedding catering oahu']}) stays on oahu.mychef-hawaii.com/weddings. This directory is the night before, not that week title.`,
      'Welcome dinners live under /events/welcome-dinners. The rehearsal SKU is its own URL on the island host.',
    ],
    faqs: [
      {
        q: 'Same as /weddings?',
        a: 'Weddings is the week stack. This page points at the rehearsal line beside it.',
      },
      {
        q: 'Same as /gatherings?',
        a: 'Hub /gatherings is the statewide house-gathering door. Rehearsal is a named SKU on the island host.',
      },
    ],
  },
  retreatCatering: {
    path: '/retreat-catering',
    h1: 'Retreat full-board, by island.',
    title: 'Retreat full-board, by island | myCHEF Hawaii',
    description:
      'Each island quotes full-board retreat days in houses. Distinct from /events/retreats, /corporate, and /corporate-catering.',
    lede:
      'Food as its own line for days in the house — not a ballroom. Each island writes that SKU. This page is the picker.',
    kicker: 'Statewide · Retreat kitchens',
    photo: 'hubRetreat',
    cardLabel: 'Full-board',
    body: [
      `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on the Hawaiʻi Island catering URL. This directory is retreat kitchens, not that title.`,
      '/events/retreats is the occasion essay. /corporate is the offsite directory. This picker points at the full-board SKU.',
    ],
    faqs: [
      {
        q: 'Same as /events/retreats?',
        a: 'That is the occasion document. This page points at the full-board catering SKU.',
      },
      {
        q: 'Same as /corporate?',
        a: 'Corporate is the offsite directory. Retreat catering is food as its own line for days in the house.',
      },
    ],
  },
  corporateCatering: {
    path: '/corporate-catering',
    h1: 'House offsite catering, by island.',
    title: 'House offsite catering, by island | myCHEF Hawaii',
    description:
      'Each island quotes executive dinners in houses. Distinct from hub /corporate, /events/corporate-events, and /help/corporate-guide.',
    lede:
      'Not HCC citywides — those are closed through 2027 and are not our product. Each island writes the house-offsite SKU. This page is the picker.',
    kicker: 'Statewide · Offsite catering',
    photo: 'hubCorpCater',
    cardLabel: 'House offsites',
    body: [
      `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on oahu.mychef-hawaii.com/catering. This directory is the house-offsite SKU, not that money title.`,
      'Hub /corporate is the statewide offsite door. /events/corporate-events is the occasion. This picker points at the catering SKU on each island.',
    ],
    faqs: [
      {
        q: 'Same as hub /corporate?',
        a: 'Hub /corporate is the statewide villa-offsite door. This page points at each island’s /corporate-catering SKU.',
      },
      {
        q: 'Do you staff HCC citywides?',
        a: 'No. Citywides are closed through 2027 and are not the product. Oahu /conventions says so. Other islands say it on /what-we-dont-do.',
      },
    ],
  },
};

export function getHubDirectory(path: string): HubDirectory | undefined {
  const clean = path.replace(/\/$/, '') || '/';
  return (Object.values(hubDirectories) as HubDirectory[]).find((row) => row.path === clean);
}
