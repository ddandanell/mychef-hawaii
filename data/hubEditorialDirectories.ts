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
] as const;

export type HubEditorialId =
  | 'jnlCost'
  | 'jnlHire'
  | 'jnlKitchens'
  | 'jnlDietary'
  | 'jnlIncluded'
  | 'jnlBook'
  | 'jnlVsrest'
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
  | 'blogReviews';

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
};
