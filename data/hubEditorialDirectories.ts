import { SEARCH_VOLUMES } from './offers';
import type { HubDirectory } from './hubDirectories';

/** Hub pickers for journal and shared-blog URLs that already 200 on every island host. */
export const HUB_EDITORIAL_PATHS = [
  '/journal/how-much-does-a-private-chef-cost',
  '/journal/how-to-hire-a-private-chef',
  '/journal/villa-kitchens',
  '/journal/dietary-needs',
  '/journal/what-is-included',
  '/journal/how-far-ahead-to-book',
  '/journal/private-chef-vs-restaurant',
  '/journal/wedding-week',
  '/journal/vacation-chef-week',
  '/journal/travel-zones',
  '/blog/grocery-at-cost',
  '/blog/wine-and-alcohol',
  '/blog/weather-backup',
  '/blog/sourcing-honesty',
  '/blog/cleanup-standard',
  '/blog/condo-load-in',
  '/blog/family-reunions',
  '/blog/photoshoot-catering',
  '/blog/proposal-dinners',
  '/blog/estate-logistics',
  '/blog/shoulder-season',
  '/blog/named-farms',
  '/blog/fish-species',
  '/blog/coffee-labeling',
  '/blog/peak-season',
  '/blog/no-fake-reviews',
  '/blog/anniversary-dinners',
  '/blog/kids-at-the-table',
  '/blog/breakfast-in-the-villa',
  '/blog/lunch-service',
  '/blog/staffing-servers',
  '/blog/bartender-add-on',
  '/blog/welcome-dinner',
  '/blog/day-after-brunch',
  '/blog/rehearsal-dinner',
  '/blog/corporate-offsites',
  '/blog/retreat-full-board',
] as const;

export type HubEditorialId =
  | 'jnlCost'
  | 'jnlHire'
  | 'jnlKitchens'
  | 'jnlDietary'
  | 'jnlIncluded'
  | 'jnlBook'
  | 'jnlVsrest'
  | 'jnlWedding'
  | 'jnlVacweek'
  | 'jnlZones'
  | 'blogGrocery'
  | 'blogWine'
  | 'blogWeather'
  | 'blogSourcing'
  | 'blogCleanup'
  | 'blogCondo'
  | 'blogReunions'
  | 'blogPhotoshoot'
  | 'blogProposal'
  | 'blogEstate'
  | 'blogShoulder'
  | 'blogFarms'
  | 'blogFish'
  | 'blogCoffee'
  | 'blogPeak'
  | 'blogReviews'
  | 'blogAnniv'
  | 'blogKids'
  | 'blogBreakfast'
  | 'blogLunch'
  | 'blogServers'
  | 'blogBartender'
  | 'blogWelcome'
  | 'blogBrunch'
  | 'blogRehearsal'
  | 'blogOffsites'
  | 'blogRetreat';

export const hubEditorialDirectories: Record<HubEditorialId, HubDirectory> = {
  jnlCost: {
    path: '/journal/how-much-does-a-private-chef-cost',
    h1: 'How a quote is built, by island.',
    title: 'How a quote is built, by island | myCHEF Hawaii',
    description:
      'Each island writes how the rate card, fee stack, and corridor become one total. Distinct from /pricing and /private-chef-cost.',
    lede:
      'The tariff is /pricing. The stack is /private-chef-cost. Each island journal piece is how those two become a written total. This page is the picker.',
    kicker: 'Statewide · Quote notes',
    photo: 'hubJnlCost',
    cardLabel: 'How a quote is built',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the journal note beside the rate card, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /pricing?',
        a: 'Hub /pricing is the statewide rate card. This page points at each island’s journal note on how a quote is built.',
      },
      {
        q: 'Same as /private-chef-cost?',
        a: 'That picker is the fee-stack explainer. This URL is the journal piece beside it.',
      },
    ],
  },
  jnlHire: {
    path: '/journal/how-to-hire-a-private-chef',
    h1: 'How to hire, by island.',
    title: 'How to hire, by island | myCHEF Hawaii',
    description:
      'Each island writes why the five-field form exists. Distinct from /quote and /help/getting-started.',
    lede:
      '/help/getting-started is the first-booking checklist. /quote is the form. Each island journal piece is why those two exist. This page is the picker.',
    kicker: 'Statewide · Hiring notes',
    photo: 'hubJnlHire',
    cardLabel: 'How to hire',
    body: [
      `private chef hawaii (${SEARCH_VOLUMES['private chef hawaii']}) stays off this title. This directory is the hiring note, not a money door.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the form. This page points at each island’s journal note on why we will not take a verbal yes.',
      },
      {
        q: 'Same as /help/getting-started?',
        a: 'That picker is the first-booking checklist. This URL is the journal piece beside it.',
      },
    ],
  },
  jnlKitchens: {
    path: '/journal/villa-kitchens',
    h1: 'Villa kitchens, by island.',
    title: 'Villa kitchens, by island | myCHEF Hawaii',
    description:
      'Each island writes the kitchen as the constraint — galley, condo, estate. Distinct from /menus and /condo-load-in.',
    lede:
      'The room you have is the menu you can have. Each island writes that constraint. This page is the picker.',
    kicker: 'Statewide · Kitchens',
    photo: 'hubJnlKitchens',
    cardLabel: 'Villa kitchens',
    body: [
      `oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on oahu.mychef-hawaii.com/catering. This directory is the kitchen note, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /blog/condo-load-in?',
        a: 'Condo load-in is freight elevators and quiet hours. This piece is whether the cooktop can support the menu.',
      },
      {
        q: 'Same as /menus?',
        a: '/menus is how a menu is designed. This URL is the room that design has to survive.',
      },
    ],
  },
  jnlDietary: {
    path: '/journal/dietary-needs',
    h1: 'Allergy notes, by island.',
    title: 'Allergy notes, by island | myCHEF Hawaii',
    description:
      'Each island writes allergies as a menu, not an improvisation. Distinct from hub /dietary.',
    lede:
      'Hub /dietary is the SKU. Each island journal piece is how allergies print on that island’s quote. This page is the picker.',
    kicker: 'Statewide · Allergies',
    photo: 'hubJnlDietary',
    cardLabel: 'Allergy notes',
    body: [
      `maui catering (${SEARCH_VOLUMES['maui catering']}) stays on maui.mychef-hawaii.com/catering. This directory is the allergy journal note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /dietary?',
        a: 'Hub /dietary is the dietary-design SKU. This page points at each island’s journal note on allergies.',
      },
      {
        q: 'Do you claim you can cook anything?',
        a: 'No. Cross-contact limits are stated if the kitchen cannot support them. Each island writes that.',
      },
    ],
  },
  jnlIncluded: {
    path: '/journal/what-is-included',
    h1: 'What prints on the quote, by island.',
    title: 'What prints on the quote, by island | myCHEF Hawaii',
    description:
      'Each island writes the included/excluded split. Distinct from /pricing and /private-chef-cost.',
    lede:
      'Shop, cook, serve, clean — in. Alcohol, rentals, venue fees — out. Each island writes the split. This page is the picker.',
    kicker: 'Statewide · Included',
    photo: 'hubJnlIncluded',
    cardLabel: 'What prints',
    body: [
      `kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on kauai.mychef-hawaii.com/catering. This directory is the included/excluded journal note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /pricing?',
        a: 'That page is the rate card. This URL is what prints as a line beside it.',
      },
      {
        q: 'Same as /blog/grocery-at-cost?',
        a: 'Groceries are one line. This piece is the whole included/excluded split.',
      },
    ],
  },
  jnlBook: {
    path: '/journal/how-far-ahead-to-book',
    h1: 'Notice windows, by island.',
    title: 'Notice windows, by island | myCHEF Hawaii',
    description:
      'Each island writes how far ahead to send the form. Distinct from /blog/peak-season and /blog/shoulder-season.',
    lede:
      'Peak weeks compress. Far zones carry published notice. Each island writes the window. This page is the picker.',
    kicker: 'Statewide · Notice',
    photo: 'hubJnlBook',
    cardLabel: 'Notice windows',
    body: [
      `wedding catering hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) stays on hub /weddings. This directory is the notice journal note, not a wedding title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /blog/peak-season?',
        a: 'Peak-season is which weeks actually compress. This piece is how far ahead to send the form.',
      },
      {
        q: 'Same as /blog/shoulder-season?',
        a: 'Shoulder months are April and November. This URL is the notice window.',
      },
    ],
  },
  jnlVsrest: {
    path: '/journal/private-chef-vs-restaurant',
    h1: 'House table vs going out, by island.',
    title: 'House table vs going out, by island | myCHEF Hawaii',
    description:
      'Each island writes in-villa service against a restaurant reservation. Distinct from /private-chef and /honeymoon-dinners.',
    lede:
      'A restaurant reservation is a different product. Each island writes when the house is the better table. This page is the picker.',
    kicker: 'Statewide · House vs out',
    photo: 'hubJnlVsrest',
    cardLabel: 'House vs going out',
    body: [
      `private chef hawaii (${SEARCH_VOLUMES['private chef hawaii']}) stays off this title. This directory is the comparison note, not a money door.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef?',
        a: 'That door is what’s included. This page points at each island’s journal comparison with going out.',
      },
      {
        q: 'Same as /honeymoon-dinners?',
        a: 'Dinner for two is a SKU. This URL is the house-versus-restaurant note.',
      },
    ],
  },
  jnlWedding: {
    path: '/journal/wedding-week',
    h1: 'Wedding-week kitchen notes, by island.',
    title: 'Wedding-week kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes how welcome, rehearsal, reception, and brunch stack beside /weddings. Distinct from Maui/Kauaʻi /wedding-week cells and from /help/wedding-guide.',
    lede:
      '/weddings owns the catering keyword. Maui and Kauaʻi keep a /wedding-week cell. Each island journal piece is the kitchen timing beside those doors. This page is the picker.',
    kicker: 'Statewide · Wedding-week notes',
    photo: 'hubJnlWedding',
    cardLabel: 'Wedding-week kitchen notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the week-stack kitchen note, not a wedding title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry. Oahu and Hawaiʻi Island have no /wedding-week cell — the journal note sits beside /weddings.',
    ],
    faqs: [
      {
        q: 'Same as /weddings?',
        a: 'That picker owns the catering keyword. This URL is the week-stack kitchen note.',
      },
      {
        q: 'Same as /help/wedding-guide?',
        a: 'That picker is the planner checklist. This URL is how the nights leave the pass.',
      },
    ],
  },
  jnlVacweek: {
    path: '/journal/vacation-chef-week',
    h1: 'Stay Chef week notes, by island.',
    title: 'Stay Chef week notes, by island | myCHEF Hawaii',
    description:
      'Each island writes how a villa week stacks beside /vacation-chef. Distinct from the SKU and from /personal-chef.',
    lede:
      '/vacation-chef is the villa-week SKU. Each island journal piece is the crate-and-plate kitchen. This page is the picker.',
    kicker: 'Statewide · Stay Chef weeks',
    photo: 'hubJnlVacweek',
    cardLabel: 'Stay Chef week notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the villa-week kitchen note, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /vacation-chef?',
        a: 'That picker is the SKU. This URL is the week-stack kitchen note.',
      },
      {
        q: 'Same as /personal-chef?',
        a: 'That picker is the resident household line. This note is a visitor villa week.',
      },
    ],
  },
  jnlZones: {
    path: '/journal/travel-zones',
    h1: 'Travel-zone kitchen notes, by island.',
    title: 'Travel-zone kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes why two corridors are not one cooler, beside /coverage. Distinct from the zone map and from /locations.',
    lede:
      '/coverage is the published map. Each island journal piece is the cooler-load honesty. This page is the picker.',
    kicker: 'Statewide · Travel zones',
    photo: 'hubJnlZones',
    cardLabel: 'Travel-zone kitchen notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the travel kitchen note, not a coverage title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry. Hilo stays a dedicated day.',
    ],
    faqs: [
      {
        q: 'Same as /coverage?',
        a: 'That picker is the zone map. This URL is the kitchen note beside it.',
      },
      {
        q: 'Same as /locations?',
        a: 'That picker lists dinner doors. This note is the travel honesty beside them.',
      },
    ],
  },
  blogGrocery: {
    path: '/blog/grocery-at-cost',
    h1: 'Groceries at cost, by island.',
    title: 'Groceries at cost, by island | myCHEF Hawaii',
    description:
      'Each island writes groceries billed at cost with receipts. Distinct from /pricing and /journal/what-is-included.',
    lede:
      'Shopped the day of. Billed at cost. Never a hidden markup. Each island writes the grocery line. This page is the picker.',
    kicker: 'Statewide · Groceries',
    photo: 'hubBlogGrocery',
    cardLabel: 'Groceries at cost',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is one dinner’s shop, itemised.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /pricing?',
        a: 'That page is the rate card. This URL is how groceries print beside it.',
      },
      {
        q: 'Is there a grocery markup?',
        a: 'No. Cost plus receipts. Each island says so. Open /quote on the island host.',
      },
    ],
  },
  blogWine: {
    path: '/blog/wine-and-alcohol',
    h1: 'Wine as its own line, by island.',
    title: 'Wine as its own line, by island | myCHEF Hawaii',
    description:
      'Each island writes wine, beer, and spirits as a separate quote line. Distinct from /bar and /mobile-bar.',
    lede:
      'Pours are never swallowed by the dinner band. Each island writes the alcohol line. This page is the picker.',
    kicker: 'Statewide · Alcohol line',
    photo: 'hubBlogWine',
    cardLabel: 'Wine as its own line',
    body: [
      `mobile bar hawaii (${SEARCH_VOLUMES['mobile bar hawaii']}) stays on hub /mobile-bar. This directory is the alcohol line, not the four-hour package.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /bar?',
        a: '/bar is the bartender add-on. This page is how wine and spirits print as a line.',
      },
      {
        q: 'Same as /mobile-bar?',
        a: 'That SKU is the four-hour package. This URL is the alcohol line on a dinner quote.',
      },
    ],
  },
  blogWeather: {
    path: '/blog/weather-backup',
    h1: 'Wet-weather backups, by island.',
    title: 'Wet-weather backups, by island | myCHEF Hawaii',
    description:
      'Each island writes the indoor backup for an outdoor table. Distinct from /coverage and Kauaʻi /hanalei-bridge.',
    lede:
      'Outdoor tables need a real indoor plan. Each island writes the backup. This page is the picker.',
    kicker: 'Statewide · Weather',
    photo: 'hubBlogWeather',
    cardLabel: 'Wet-weather backups',
    body: [
      `kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on kauai.mychef-hawaii.com/catering. This directory is the weather note, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /coverage?',
        a: 'Coverage is where we cook. This URL is what happens when the lawn is wet.',
      },
      {
        q: 'Same as Kauaʻi /hanalei-bridge?',
        a: 'That cell is the Far-North road clause. This picker is the outdoor-table backup on every island.',
      },
    ],
  },
  blogSourcing: {
    path: '/blog/sourcing-honesty',
    h1: 'Sourcing honesty, by island.',
    title: 'Sourcing honesty, by island | myCHEF Hawaii',
    description:
      'Each island writes that Hawaiʻi still imports most of its food. Distinct from /blog/named-farms and /blog/fish-species.',
    lede:
      'We do not invent a local-only kitchen. Each island writes what we actually buy. This page is the picker.',
    kicker: 'Statewide · Sourcing',
    photo: 'hubBlogSourcing',
    cardLabel: 'Sourcing honesty',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the sourcing note, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /blog/named-farms?',
        a: 'Named farms print only after written verification. This piece is the broader import honesty.',
      },
      {
        q: 'Same as /blog/fish-species?',
        a: 'That note is how fish is named as food. This URL is the sourcing posture.',
      },
    ],
  },
  blogCleanup: {
    path: '/blog/cleanup-standard',
    h1: 'Cleanup standard, by island.',
    title: 'Cleanup standard, by island | myCHEF Hawaii',
    description:
      'Each island writes how the kitchen is left. Distinct from /journal/what-is-included.',
    lede:
      'The house is left cleaner than we found it. Each island writes the standard. This page is the picker.',
    kicker: 'Statewide · Cleanup',
    photo: 'hubBlogCleanup',
    cardLabel: 'Cleanup standard',
    body: [
      `oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on oahu.mychef-hawaii.com/catering. This directory is the cleanup note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /journal/what-is-included?',
        a: 'That journal piece is the included/excluded split. This URL is the cleanup line inside it.',
      },
      {
        q: 'Do you do dishes the next morning?',
        a: 'Service includes cleanup that night. Each island writes the standard. Overnight stays are a different quote.',
      },
    ],
  },
  blogCondo: {
    path: '/blog/condo-load-in',
    h1: 'Condo load-in notes, by island.',
    title: 'Condo load-in notes, by island | myCHEF Hawaii',
    description:
      'Each island writes freight elevators, quiet hours, and tower kitchens. Distinct from /journal/villa-kitchens and /blog/estate-logistics.',
    lede:
      'Towers are not estates. Each island writes the load-in. This page is the picker.',
    kicker: 'Statewide · Condo load-in',
    photo: 'hubBlogCondo',
    cardLabel: 'Condo load-in',
    body: [
      `private chef honolulu (${SEARCH_VOLUMES['private chef honolulu']}) stays off this title. This directory is the condo note, not a money door.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /journal/villa-kitchens?',
        a: 'Villa kitchens is whether the cooktop can support the menu. This URL is freight, quiet hours, and COIs.',
      },
      {
        q: 'Same as /blog/estate-logistics?',
        a: 'Estates are a different kit and driveway. This picker is towers.',
      },
    ],
  },
  blogReunions: {
    path: '/blog/family-reunions',
    h1: 'Family reunion tables, by island.',
    title: 'Family reunion tables, by island | myCHEF Hawaii',
    description:
      'Each island writes multi-household tables in houses. Distinct from hub /gatherings and /events.',
    lede:
      'Several households, one house, guest counts we actually staff. Each island writes the reunion table. This page is the picker.',
    kicker: 'Statewide · Reunions',
    photo: 'hubBlogReunions',
    cardLabel: 'Family reunions',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. Hub /gatherings is the statewide house-gathering door. This directory is the reunion blog note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /gatherings?',
        a: 'Hub /gatherings is the statewide house-gathering door. This page points at each island’s reunion blog note.',
      },
      {
        q: 'Same as /events?',
        a: '/events is the occasions directory. This URL is the reunion note.',
      },
    ],
  },
  blogPhotoshoot: {
    path: '/blog/photoshoot-catering',
    h1: 'Crew meals, by island.',
    title: 'Crew meals, by island | myCHEF Hawaii',
    description:
      'Each island writes production and crew meals in residences. Distinct from /corporate-catering and Oahu /conventions.',
    lede:
      'Crew meals are a staffed-room product, not a ballroom overlay. Each island writes the production note. This page is the picker.',
    kicker: 'Statewide · Crew meals',
    photo: 'hubBlogPhotoshoot',
    cardLabel: 'Crew meals',
    body: [
      `oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on oahu.mychef-hawaii.com/catering. HCC citywides are closed and are not the product. This directory is crew meals in houses.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /corporate-catering?',
        a: 'That SKU is house offsites. This URL is production and crew meals.',
      },
      {
        q: 'Do you staff convention citywides?',
        a: 'No. Oahu /conventions says so. Other islands say it on /what-we-dont-do.',
      },
    ],
  },
  blogProposal: {
    path: '/blog/proposal-dinners',
    h1: 'Proposal dinners, by island.',
    title: 'Proposal dinners, by island | myCHEF Hawaii',
    description:
      'Each island writes a dinner-for-two with a question. Distinct from /honeymoon-dinners and /fine-dining/romantic-dinner.',
    lede:
      'Not a honeymoon SKU. Not a tasting menu. Each island writes the proposal table. This page is the picker.',
    kicker: 'Statewide · Proposals',
    photo: 'hubBlogProposal',
    cardLabel: 'Proposal dinners',
    body: [
      `wedding catering hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) stays on hub /weddings. This directory is the proposal note, not a wedding title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /honeymoon-dinners?',
        a: 'Dinner for two is the SKU. This URL is the proposal blog note beside it.',
      },
      {
        q: 'Same as /fine-dining/romantic-dinner?',
        a: 'That picker is the romantic format. This page is the proposal note.',
      },
    ],
  },
  blogEstate: {
    path: '/blog/estate-logistics',
    h1: 'Estate load-in notes, by island.',
    title: 'Estate load-in notes, by island | myCHEF Hawaii',
    description:
      'Each island writes driveway, kit, and lawn logistics for estates. Distinct from /blog/condo-load-in.',
    lede:
      'Estates are a different kit. Each island writes the driveway. This page is the picker.',
    kicker: 'Statewide · Estates',
    photo: 'hubBlogEstate',
    cardLabel: 'Estate load-in',
    body: [
      `maui catering (${SEARCH_VOLUMES['maui catering']}) stays on maui.mychef-hawaii.com/catering. This directory is estate logistics, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /blog/condo-load-in?',
        a: 'Condos are freight elevators and quiet hours. This URL is estates.',
      },
      {
        q: 'Same as /events/villa-parties?',
        a: 'Villa parties is the occasion SKU. This page is the load-in note.',
      },
    ],
  },
  blogShoulder: {
    path: '/blog/shoulder-season',
    h1: 'Shoulder months, by island.',
    title: 'Shoulder months, by island | myCHEF Hawaii',
    description:
      'Each island writes April and November. Distinct from /blog/peak-season and /journal/how-far-ahead-to-book.',
    lede:
      'Quieter months are not empty months. Each island writes April and November. This page is the picker.',
    kicker: 'Statewide · Shoulder',
    photo: 'hubBlogShoulder',
    cardLabel: 'Shoulder months',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the quieter-month note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /blog/peak-season?',
        a: 'Peak weeks compress. This URL is April and November.',
      },
      {
        q: 'Same as /journal/how-far-ahead-to-book?',
        a: 'That journal piece is the notice window. This page is the quieter months.',
      },
    ],
  },
  blogFarms: {
    path: '/blog/named-farms',
    h1: 'Named farms only when verified, by island.',
    title: 'Named farms only when verified, by island | myCHEF Hawaii',
    description:
      'Each island writes that farm names print only after written verification. Distinct from /blog/sourcing-honesty.',
    lede:
      'We do not invent farm names. Each island writes the verification rule. This page is the picker.',
    kicker: 'Statewide · Named farms',
    photo: 'hubBlogFarms',
    cardLabel: 'Named farms',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the farm-name rule, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /blog/sourcing-honesty?',
        a: 'Sourcing honesty is the import posture. This URL is when a farm name is allowed to print.',
      },
      {
        q: 'Same as Hawaiʻi Island /coffee-act-198?',
        a: 'That cell is coffee origin law on one island. This picker is named farms on every island.',
      },
    ],
  },
  blogFish: {
    path: '/blog/fish-species',
    h1: 'Fish named as food, by island.',
    title: 'Fish named as food, by island | myCHEF Hawaii',
    description:
      'Each island writes fish as food, not décor. Distinct from /blog/sourcing-honesty and /menus.',
    lede:
      'Species print as what is on the plate. Each island writes that. This page is the picker.',
    kicker: 'Statewide · Fish',
    photo: 'hubBlogFish',
    cardLabel: 'Fish named as food',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is how fish is named, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /blog/sourcing-honesty?',
        a: 'That note is the import posture. This URL is how a species prints on the menu.',
      },
      {
        q: 'Do you garnish with decorative fish?',
        a: 'No. Fish is food. Each island says so.',
      },
    ],
  },
  blogCoffee: {
    path: '/blog/coffee-labeling',
    h1: 'Coffee origin notes, by island.',
    title: 'Coffee origin notes, by island | myCHEF Hawaii',
    description:
      'Each island writes coffee origin labeling. Distinct from Hawaiʻi Island /coffee-act-198.',
    lede:
      'Named Kona and Kaʻū coffee follow the law. Each island writes the labeling note. This page is the picker.',
    kicker: 'Statewide · Coffee',
    photo: 'hubBlogCoffee',
    cardLabel: 'Coffee origin notes',
    body: [
      `private chef kona (${SEARCH_VOLUMES['private chef kona']}) stays off this title. This directory is the coffee-labeling note, not a money door.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /coffee-act-198?',
        a: 'That cell lives on Hawaiʻi Island only. This picker is the coffee-labeling blog note on every island.',
      },
      {
        q: 'Do you invent farm names on coffee?',
        a: 'No. Named origin follows verification and the labeling law. See also /blog/named-farms.',
      },
    ],
  },
  blogPeak: {
    path: '/blog/peak-season',
    h1: 'Peak weeks, by island.',
    title: 'Peak weeks, by island | myCHEF Hawaii',
    description:
      'Each island writes which weeks actually compress. Distinct from /journal/how-far-ahead-to-book and /blog/shoulder-season.',
    lede:
      'December–March and wedding peaks move first. Each island writes which weeks. This page is the picker.',
    kicker: 'Statewide · Peak weeks',
    photo: 'hubBlogPeak',
    cardLabel: 'Peak weeks',
    body: [
      `wedding catering hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) stays on hub /weddings. This directory is which weeks compress, not a wedding title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /journal/how-far-ahead-to-book?',
        a: 'That journal piece is the notice window. This URL is which weeks actually compress.',
      },
      {
        q: 'Same as /blog/shoulder-season?',
        a: 'Shoulder months are April and November. This page is peak weeks.',
      },
    ],
  },
  blogReviews: {
    path: '/blog/no-fake-reviews',
    h1: 'Why the review count is zero, by island.',
    title: 'Why the review count is zero, by island | myCHEF Hawaii',
    description:
      'Each island writes why the guest-review count is still zero. Distinct from /trust and /what-we-dont-do.',
    lede:
      'We do not invent Hawaiʻi star ratings. Each island writes that. This page is the picker.',
    kicker: 'Statewide · Reviews',
    photo: 'hubBlogReviews',
    cardLabel: 'Why the count is zero',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. Hub /what-we-dont-do is the claim list. /trust is the honesty register. This directory is why the review count is zero.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /trust?',
        a: 'Hub /trust is the honesty register. This page points at each island’s zero-review blog note.',
      },
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That picker is the claim list. This URL is specifically why there are no Hawaiʻi star ratings yet.',
      },
    ],
  },
  blogAnniv: {
    path: '/blog/anniversary-dinners',
    h1: 'Anniversary kitchen notes, by island.',
    title: 'Anniversary kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the anniversary kitchen beside /events/anniversaries. Distinct from the occasion SKU and from /blog/proposal-dinners.',
    lede:
      '/events/anniversaries is the occasion door. Each island blog note is the two-top kitchen. This page is the picker.',
    kicker: 'Statewide · Anniversary notes',
    photo: 'hubBlogAnniv',
    cardLabel: 'Anniversary kitchen notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the kitchen note beside the anniversary SKU, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /events/anniversaries?',
        a: 'That picker is the occasion SKU. This URL is the kitchen note beside it.',
      },
      {
        q: 'Same as /blog/proposal-dinners?',
        a: 'That note is the ask. This page is the later anniversary table.',
      },
    ],
  },
  blogKids: {
    path: '/blog/kids-at-the-table',
    h1: 'Kids-plate kitchen notes, by island.',
    title: 'Kids-plate kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes how kids plates land beside /kids-menus. Distinct from the SKU.',
    lede:
      '/kids-menus is the SKU. Each island blog note is how a kids plate actually lands. This page is the picker.',
    kicker: 'Statewide · Kids plates',
    photo: 'hubBlogKids',
    cardLabel: 'Kids-plate kitchen notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the kitchen note beside the kids SKU.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /kids-menus?',
        a: 'That picker is the SKU. This URL is the kitchen note beside it.',
      },
      {
        q: 'Do you run a kids station?',
        a: 'No. One kitchen, two plate sizes. Open the island note.',
      },
    ],
  },
  blogBreakfast: {
    path: '/blog/breakfast-in-the-villa',
    h1: 'Villa-breakfast kitchen notes, by island.',
    title: 'Villa-breakfast kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the morning kitchen beside /menus/breakfast. Distinct from the menu SKU.',
    lede:
      '/menus/breakfast is the SKU. Each island blog note is the morning call. This page is the picker.',
    kicker: 'Statewide · Breakfast notes',
    photo: 'hubBlogBreakfast',
    cardLabel: 'Villa-breakfast notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the morning kitchen note, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /menus/breakfast?',
        a: 'That picker is the menu SKU. This URL is the morning kitchen note.',
      },
      {
        q: 'Same as /events/brunch?',
        a: 'Brunch is an occasion. This note is villa breakfast as a kitchen.',
      },
    ],
  },
  blogLunch: {
    path: '/blog/lunch-service',
    h1: 'In-villa lunch notes, by island.',
    title: 'In-villa lunch notes, by island | myCHEF Hawaii',
    description:
      'Each island writes why lunch is its own call beside /menus/lunch. Distinct from the menu SKU.',
    lede:
      '/menus/lunch is the SKU. Each island blog note is why midday is not an unpaid dinner add-on. This page is the picker.',
    kicker: 'Statewide · Lunch notes',
    photo: 'hubBlogLunch',
    cardLabel: 'In-villa lunch notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the midday kitchen note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /menus/lunch?',
        a: 'That picker is the menu SKU. This URL is the midday kitchen note.',
      },
      {
        q: 'Lunch and dinner as one unpaid day?',
        a: 'No. Both print. Open the island note.',
      },
    ],
  },
  blogServers: {
    path: '/blog/staffing-servers',
    h1: 'Server-add kitchen notes, by island.',
    title: 'Server-add kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes when a guest list needs a pour beside /staffing/servers. Distinct from the hourly SKU.',
    lede:
      '/staffing/servers is the hourly SKU. Each island blog note is when we add the person. This page is the picker.',
    kicker: 'Statewide · Servers',
    photo: 'hubBlogServers',
    cardLabel: 'Server-add notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the pour-decision kitchen note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /staffing/servers?',
        a: 'That picker is the hourly SKU. This URL is when we add the person.',
      },
      {
        q: 'Same as /bar?',
        a: 'That picker is the bartender add-on. This note is service at the table.',
      },
    ],
  },
  blogBartender: {
    path: '/blog/bartender-add-on',
    h1: 'Bartender-add kitchen notes, by island.',
    title: 'Bartender-add kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the bartender add-on kitchen beside /bar. Distinct from /staffing/bartenders and /mobile-bar.',
    lede:
      '/bar is the add-on SKU. /staffing/bartenders is hourly. Each island blog note is the pour. This page is the picker.',
    kicker: 'Statewide · Bartender notes',
    photo: 'hubBlogBartender',
    cardLabel: 'Bartender-add notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the bartender kitchen note, not a catering title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /bar?',
        a: 'That picker is the add-on SKU. This URL is the kitchen note beside it.',
      },
      {
        q: 'Same as /mobile-bar?',
        a: 'That picker is the 4-hour package. This note is the shorter add-on kitchen.',
      },
    ],
  },
  blogWelcome: {
    path: '/blog/welcome-dinner',
    h1: 'Arrival-night kitchen notes, by island.',
    title: 'Arrival-night kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the first-evening kitchen beside /events/welcome-dinners. Distinct from the occasion SKU.',
    lede:
      '/events/welcome-dinners is the occasion SKU. Each island blog note is the arrival kitchen. This page is the picker.',
    kicker: 'Statewide · Arrival nights',
    photo: 'hubBlogWelcome',
    cardLabel: 'Arrival-night notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the first-evening kitchen note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /events/welcome-dinners?',
        a: 'That picker is the occasion SKU. This URL is the arrival kitchen note.',
      },
      {
        q: 'Same as the reception?',
        a: 'No. Separate line. Open /weddings if that is the night you mean.',
      },
    ],
  },
  blogBrunch: {
    path: '/blog/day-after-brunch',
    h1: 'Day-after brunch notes, by island.',
    title: 'Day-after brunch notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the recovery-morning kitchen beside /events/brunch. Distinct from the occasion SKU and from /menus/breakfast.',
    lede:
      '/events/brunch is the occasion SKU. Each island blog note is the recovery morning. This page is the picker.',
    kicker: 'Statewide · Brunch notes',
    photo: 'hubBlogBrunch',
    cardLabel: 'Day-after brunch notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the recovery-morning kitchen note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /events/brunch?',
        a: 'That picker is the occasion SKU. This URL is the recovery-morning kitchen note.',
      },
      {
        q: 'Same as /menus/breakfast?',
        a: 'Breakfast is a menu SKU. This note is the day-after occasion kitchen.',
      },
    ],
  },
  blogRehearsal: {
    path: '/blog/rehearsal-dinner',
    h1: 'Rehearsal-night kitchen notes, by island.',
    title: 'Rehearsal-night kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the night-before kitchen beside /rehearsal-dinners. Distinct from the SKU and from /weddings.',
    lede:
      '/rehearsal-dinners is the SKU. Each island blog note is the night-before kitchen. This page is the picker.',
    kicker: 'Statewide · Rehearsal notes',
    photo: 'hubBlogRehearsal',
    cardLabel: 'Rehearsal-night notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the night-before kitchen note, not a wedding title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /rehearsal-dinners?',
        a: 'That picker is the SKU. This URL is the kitchen note beside it.',
      },
      {
        q: 'Same as /weddings?',
        a: 'That door owns the catering keyword. This note is the night-before kitchen.',
      },
    ],
  },
  blogOffsites: {
    path: '/blog/corporate-offsites',
    h1: 'House-offsite kitchen notes, by island.',
    title: 'House-offsite kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the house-table kitchen beside /events/corporate-events. Distinct from /corporate-catering.',
    lede:
      '/events/corporate-events is the occasion. /corporate-catering is the kitchen SKU. Each island blog note is the house table. This page is the picker.',
    kicker: 'Statewide · Offsite notes',
    photo: 'hubBlogOffsites',
    cardLabel: 'House-offsite notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the house-offsite kitchen note, not a citywide.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /events/corporate-events?',
        a: 'That picker is the occasion SKU. This URL is the house kitchen note.',
      },
      {
        q: 'Same as /corporate-catering?',
        a: 'That picker is the kitchen SKU. This note is the shorter offsite kitchen.',
      },
    ],
  },
  blogRetreat: {
    path: '/blog/retreat-full-board',
    h1: 'Retreat-day meal notes, by island.',
    title: 'Retreat-day meal notes, by island | myCHEF Hawaii',
    description:
      'Each island writes how full-board meals stack beside /retreat-catering. Distinct from /events/retreats.',
    lede:
      '/retreat-catering is the kitchen SKU. /events/retreats is the occasion. Each island blog note is the meal stack. This page is the picker.',
    kicker: 'Statewide · Retreat notes',
    photo: 'hubBlogRetreat',
    cardLabel: 'Retreat-day meal notes',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the full-board kitchen note.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /retreat-catering?',
        a: 'That picker is the kitchen SKU. This URL is the meal-stack kitchen note.',
      },
      {
        q: 'Same as /events/retreats?',
        a: 'That picker is the occasion. This note is how the meals stack.',
      },
    ],
  },
};

export function nestedHubEditorials(kind: 'journal' | 'blog'): HubDirectory[] {
  const prefix = `/${kind}/`;
  const byPath = new Map(
    (Object.values(hubEditorialDirectories) as HubDirectory[]).map((row) => [row.path, row]),
  );
  return HUB_EDITORIAL_PATHS.filter((path) => path.startsWith(prefix)).map((path) => {
    const row = byPath.get(path);
    if (!row) throw new Error(`Missing hub editorial for ${path}`);
    return row;
  });
}
