import { SEARCH_VOLUMES } from './offers';
import type { HubDirectory } from './hubDirectories';

/** Nested hub pickers for island-only occasion, format, fine-dining, staffing, menu, and help URLs. */
export const HUB_NESTED_PATHS = [
  '/events/birthdays',
  '/events/welcome-dinners',
  '/events/retreats',
  '/events/anniversaries',
  '/events/corporate-events',
  '/events/villa-parties',
  '/events/brunch',
  '/catering/bbq',
  '/catering/plated',
  '/catering/family-style',
  '/catering/buffet',
  '/catering/grazing',
  '/catering/drop-off',
  '/fine-dining/romantic-dinner',
  '/fine-dining/tasting-menu',
  '/fine-dining/chefs-table-evening',
  '/fine-dining/celebration-dinner',
  '/staffing/servers',
  '/staffing/bartenders',
  '/staffing/butlers',
  '/menus/three-course',
  '/menus/family-style-menu',
  '/menus/breakfast',
  '/menus/lunch',
  '/help/getting-started',
  '/help/menu-guide',
  '/help/wedding-guide',
  '/help/corporate-guide',
  '/help/managing-booking',
] as const;

export type HubNestedId =
  | 'occBirthdays'
  | 'occWelcome'
  | 'occRetreats'
  | 'occAnniversaries'
  | 'occCorporate'
  | 'occParties'
  | 'occBrunch'
  | 'fmtBbq'
  | 'fmtPlated'
  | 'fmtFamily'
  | 'fmtBuffet'
  | 'fmtGrazing'
  | 'fmtDropoff'
  | 'fineRomantic'
  | 'fineTasting'
  | 'fineChefsev'
  | 'fineCeleb'
  | 'staffServers'
  | 'staffBartenders'
  | 'staffButlers'
  | 'menuThree'
  | 'menuFamily'
  | 'menuBreakfast'
  | 'menuLunch'
  | 'helpStart'
  | 'helpMenu'
  | 'helpWedding'
  | 'helpCorp'
  | 'helpManage';

export const hubNestedDirectories: Record<HubNestedId, HubDirectory> = {
  occBirthdays: {
    path: '/events/birthdays',
    h1: 'Birthday dinners, by island.',
    title: 'Birthday dinners, by island | myCHEF Hawaii',
    description:
      'Each island hosts birthday dinners in houses. Distinct from hub /events and from /gatherings.',
    lede:
      'A birthday in the house is not a catering keyword. Each island writes the room. This page is the picker.',
    kicker: 'Statewide · Birthdays',
    photo: 'hubOccBirthdays',
    cardLabel: 'Birthdays',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. Hub /events is the occasions directory. This picker points at the birthday SKU.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /gatherings?',
        a: 'Hub /gatherings is the statewide house-gathering door. This page points at each island’s birthday SKU.',
      },
      {
        q: 'Same as /events?',
        a: '/events is the island occasions document. This URL is the birthday cell.',
      },
    ],
  },
  occWelcome: {
    path: '/events/welcome-dinners',
    h1: 'Arrival-night dinners, by island.',
    title: 'Arrival-night dinners, by island | myCHEF Hawaii',
    description:
      'Each island hosts the first night of the villa week. Distinct from /events, /honeymoon-dinners, and /rehearsal-dinners.',
    lede:
      'First night in the house. Not a wedding-week stack. Each island writes the arrival dinner. This page is the picker.',
    kicker: 'Statewide · Welcome nights',
    photo: 'hubOccWelcome',
    cardLabel: 'Welcome nights',
    body: [
      `wedding catering hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) stays on hub /weddings. This directory is arrival night, not a wedding title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /rehearsal-dinners?',
        a: 'Rehearsal is the night before the ceremony. This is the first night of the villa week.',
      },
      {
        q: 'Same as /honeymoon-dinners?',
        a: 'Dinner for two is its own SKU. Welcome night is the arrival table.',
      },
    ],
  },
  occRetreats: {
    path: '/events/retreats',
    h1: 'Retreat cooking notes, by island.',
    title: 'Retreat cooking notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts the retreat occasion essay. Distinct from /retreat-catering (full-board SKU) and from /corporate.',
    lede:
      'Days in the house, food as a constraint. The full-board SKU is /retreat-catering. This picker is the occasion note.',
    kicker: 'Statewide · Retreat notes',
    photo: 'hubOccRetreats',
    cardLabel: 'Retreat notes',
    body: [
      `big island catering (${SEARCH_VOLUMES['big island catering']}) stays on the Hawaiʻi Island catering URL. This directory is the retreat occasion, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /retreat-catering?',
        a: 'That is the full-board SKU. This page points at the occasion essay.',
      },
      {
        q: 'Same as /corporate?',
        a: 'Corporate is the offsite directory. This is the retreat occasion cell.',
      },
    ],
  },
  occAnniversaries: {
    path: '/events/anniversaries',
    h1: 'Anniversary nights, by island.',
    title: 'Anniversary nights, by island | myCHEF Hawaii',
    description:
      'Each island hosts anniversary dinners in houses. Distinct from /honeymoon-dinners, /chefs-table, and /events.',
    lede:
      'A marked night in the dining room. Not a wedding week. Each island writes the table. This page is the picker.',
    kicker: 'Statewide · Anniversaries',
    photo: 'hubOccAnniversaries',
    cardLabel: 'Anniversaries',
    body: [
      `personal chef maui (${SEARCH_VOLUMES['personal chef maui']}) stays on Maui household copy. This directory is an anniversary night, not a dinner title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /honeymoon-dinners?',
        a: 'Dinner for two is the SKU. This page is the anniversary occasion.',
      },
      {
        q: 'Same as /events?',
        a: '/events is the directory. This URL is the anniversary cell.',
      },
    ],
  },
  occCorporate: {
    path: '/events/corporate-events',
    h1: 'House offsite nights, by island.',
    title: 'House offsite nights, by island | myCHEF Hawaii',
    description:
      'Each island hosts the offsite occasion. Distinct from hub /corporate, /corporate-catering, and /help/corporate-guide.',
    lede:
      'A night in a house, not HCC citywides. The catering SKU is /corporate-catering. This picker is the occasion.',
    kicker: 'Statewide · Offsite nights',
    photo: 'hubOccCorporate',
    cardLabel: 'Offsite nights',
    body: [
      `oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on oahu.mychef-hawaii.com/catering. This directory is the offsite occasion, not that money title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /corporate-catering?',
        a: 'That is the catering SKU. This page points at the occasion cell.',
      },
      {
        q: 'Same as hub /corporate?',
        a: 'Hub /corporate is the statewide offsite door. This URL is the island occasion picker.',
      },
    ],
  },
  occParties: {
    path: '/events/villa-parties',
    h1: 'Villa parties, by island.',
    title: 'Villa parties, by island | myCHEF Hawaii',
    description:
      'Each island hosts villa parties as their own occasion. Distinct from /gatherings, /events, and /guest-counts.',
    lede:
      'Extra glasses in the house. Headcount still lives on /guest-counts. Each island writes the party. This page is the picker.',
    kicker: 'Statewide · Villa parties',
    photo: 'hubOccParties',
    cardLabel: 'Villa parties',
    body: [
      `maui catering (${SEARCH_VOLUMES['maui catering']}) stays on maui.mychef-hawaii.com/catering. This directory is a villa party, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /gatherings?',
        a: 'Hub /gatherings is the statewide house-gathering door. This is the villa-party cell.',
      },
      {
        q: 'Same as /guest-counts?',
        a: 'Guest counts is headcount. This page is the party occasion.',
      },
    ],
  },
  occBrunch: {
    path: '/events/brunch',
    h1: 'Day-after brunch, by island.',
    title: 'Day-after brunch, by island | myCHEF Hawaii',
    description:
      'Each island hosts brunch in the house. Distinct from /menus/breakfast, /menus/lunch, and /events.',
    lede:
      'Mid-morning in the villa, not a standing carte. Breakfast SKUs live under /menus/breakfast. This picker is the occasion.',
    kicker: 'Statewide · Brunch',
    photo: 'hubOccBrunch',
    cardLabel: 'Brunch',
    body: [
      `personal chef oahu (${SEARCH_VOLUMES['personal chef oahu']}) stays on Oahu household copy. This directory is brunch as an occasion, not a dinner title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /menus/breakfast?',
        a: 'Breakfast is a menu SKU. This page is the brunch occasion.',
      },
      {
        q: 'Same as /events?',
        a: '/events is the directory. This URL is the brunch cell.',
      },
    ],
  },
  fmtBbq: {
    path: '/catering/bbq',
    h1: 'Lawn BBQ service, by island.',
    title: 'Lawn BBQ service, by island | myCHEF Hawaii',
    description:
      'Each island hosts BBQ as a format document. Distinct from hub /catering and from nested plated service.',
    lede:
      'A lawn format, not the catering money keyword. Each island writes the grill. This page is the picker.',
    kicker: 'Statewide · BBQ',
    photo: 'hubFmtBbq',
    cardLabel: 'BBQ',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the BBQ format, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /catering?',
        a: 'Hub /catering is the statewide staffed-room door. This URL is the BBQ format picker.',
      },
      {
        q: 'Is this a restaurant BBQ page?',
        a: 'No. We cook in the house. Open the island format.',
      },
    ],
  },
  fmtPlated: {
    path: '/catering/plated',
    h1: 'Plated villa service, by island.',
    title: 'Plated villa service, by island | myCHEF Hawaii',
    description:
      'Each island hosts plated service as a format. Titles never use “{island} catering plated”. Distinct from /fine-dining.',
    lede:
      'Identical courses in the house. The catering keyword stays on /catering. This page is the format picker.',
    kicker: 'Statewide · Plated',
    photo: 'hubFmtPlated',
    cardLabel: 'Plated',
    body: [
      `oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on oahu.mychef-hawaii.com/catering. This directory is plated format, not that money title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /fine-dining?',
        a: 'Fine dining is the halo format list. This is plated catering service.',
      },
      {
        q: 'Same as /menus/three-course?',
        a: 'Three-course is a designed SKU. This page is the plated service format.',
      },
    ],
  },
  fmtFamily: {
    path: '/catering/family-style',
    h1: 'Family-style service, by island.',
    title: 'Family-style service, by island | myCHEF Hawaii',
    description:
      'Each island hosts family-style service as a format. Distinct from /menus/family-style-menu and from plated service.',
    lede:
      'Shared platters, not a standing carte. The menu SKU is /menus/family-style-menu. This picker is the service format.',
    kicker: 'Statewide · Family-style',
    photo: 'hubFmtFamily',
    cardLabel: 'Family-style',
    body: [
      `maui catering (${SEARCH_VOLUMES['maui catering']}) stays on the Maui catering URL. This directory is the service format, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /menus/family-style-menu?',
        a: 'That is the designed menu SKU. This page is how it is served.',
      },
      {
        q: 'Same as plated?',
        a: 'Plated is identical courses. Family-style is shared platters.',
      },
    ],
  },
  fmtBuffet: {
    path: '/catering/buffet',
    h1: 'Buffet service, by island.',
    title: 'Buffet service, by island | myCHEF Hawaii',
    description:
      'Each island hosts buffet as a format. Distinct from /catering, /guest-counts, and drop-off.',
    lede:
      'A staffed buffet in the house, not a hotel ballroom. Each island writes the line. This page is the picker.',
    kicker: 'Statewide · Buffet',
    photo: 'hubFmtBuffet',
    cardLabel: 'Buffet',
    body: [
      `kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on kauai.mychef-hawaii.com/catering. This directory is buffet format, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as drop-off?',
        a: 'Drop-off is not staffed. Buffet is staffed in the house.',
      },
      {
        q: 'Same as /guest-counts?',
        a: 'Guest counts is headcount. This page is the buffet format.',
      },
    ],
  },
  fmtGrazing: {
    path: '/catering/grazing',
    h1: 'Grazing boards, by island.',
    title: 'Grazing boards, by island | myCHEF Hawaii',
    description:
      'Each island hosts grazing as a format. Distinct from /bar, /events/villa-parties, and plated service.',
    lede:
      'Boards, not a fake standing carte. Each island writes how. This page is the picker.',
    kicker: 'Statewide · Grazing',
    photo: 'hubFmtGrazing',
    cardLabel: 'Grazing',
    body: [
      `mobile bar hawaii (${SEARCH_VOLUMES['mobile bar hawaii']}) stays on hub /mobile-bar. This directory is grazing boards, not that package.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /bar?',
        a: 'Bar is the bartender add-on. This is a food format.',
      },
      {
        q: 'Same as a villa party?',
        a: 'Villa parties is the occasion. This page is the grazing format.',
      },
    ],
  },
  fmtDropoff: {
    path: '/catering/drop-off',
    h1: 'Drop-off is not staffed, by island.',
    title: 'Drop-off is not staffed, by island | myCHEF Hawaii',
    description:
      'Each island says drop-off is not staffed service. Distinct from /catering, buffet, and /meal-prep.',
    lede:
      'Food left, crew gone. Not a staffed room. Each island writes that honesty. This page is the picker.',
    kicker: 'Statewide · Drop-off',
    photo: 'hubFmtDropoff',
    cardLabel: 'Drop-off',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is the drop-off honesty format, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Is this staffed catering?',
        a: 'No. Drop-off is not staffed. Open the island page.',
      },
      {
        q: 'Same as /meal-prep?',
        a: 'Meal prep is a gated fridge program. Drop-off is an unstaffed event format.',
      },
    ],
  },
  fineRomantic: {
    path: '/fine-dining/romantic-dinner',
    h1: 'Romantic villa dinners, by island.',
    title: 'Romantic villa dinners, by island | myCHEF Hawaii',
    description:
      'Each island hosts a romantic-dinner format. Distinct from /honeymoon-dinners, /chefs-table, and /fine-dining.',
    lede:
      'Two seats as a format, not a Michelin claim. The SKU /honeymoon-dinners is beside it. This picker is the format.',
    kicker: 'Statewide · Romantic dinner',
    photo: 'hubFineRomantic',
    cardLabel: 'Romantic dinner',
    body: [
      `wedding catering maui (${SEARCH_VOLUMES['wedding catering maui']}) stays on maui.mychef-hawaii.com/weddings. This directory is a romantic format, not a wedding title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /honeymoon-dinners?',
        a: 'That is the dinner-for-two SKU. This page is the romantic-dinner format.',
      },
      {
        q: 'Is this a star claim?',
        a: 'No. Island /fine-dining pages say so. This is the picker.',
      },
    ],
  },
  fineTasting: {
    path: '/fine-dining/tasting-menu',
    h1: 'Tasting menus, by island.',
    title: 'Tasting menus, by island | myCHEF Hawaii',
    description:
      'Each island hosts tasting-menu as a format. Distinct from /omakase-at-home, /menus/three-course, and /fine-dining.',
    lede:
      'A tasting arc in the villa, not a restaurant omakase brand. Omakase-at-home has sourcing gates. This picker is the format.',
    kicker: 'Statewide · Tasting menu',
    photo: 'hubFineTasting',
    cardLabel: 'Tasting menu',
    body: [
      `private chef kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on the Kauaʻi host home. This directory does not steal that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /omakase-at-home?',
        a: 'Omakase-at-home is a gated SKU. This page is the tasting-menu format.',
      },
      {
        q: 'Same as /menus/three-course?',
        a: 'Three-course is a designed SKU. This is the tasting format.',
      },
    ],
  },
  fineChefsev: {
    path: '/fine-dining/chefs-table-evening',
    h1: 'Evening chef’s-table formats, by island.',
    title: 'Evening chef’s-table formats, by island | myCHEF Hawaii',
    description:
      'Each island hosts chef’s-table evening as a format. Distinct from /chefs-table (the named SKU) and from /omakase-at-home.',
    lede:
      'The evening format, not the named SKU. /chefs-table is the villa SKU. This picker is the nested format.',
    kicker: 'Statewide · Chef’s-table evening',
    photo: 'hubFineChefsev',
    cardLabel: 'Evening format',
    body: [
      `private chef kona (${SEARCH_VOLUMES['private chef kona']}) stays on the Hawaiʻi Island host. This directory does not steal that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /chefs-table?',
        a: 'That is the named villa SKU. This page is the nested evening format.',
      },
      {
        q: 'Is this a Michelin table?',
        a: 'No. We do not claim a star. Open the island format.',
      },
    ],
  },
  fineCeleb: {
    path: '/fine-dining/celebration-dinner',
    h1: 'Celebration dinners, by island.',
    title: 'Celebration dinners, by island | myCHEF Hawaii',
    description:
      'Each island hosts celebration-dinner as a format. Distinct from /events/anniversaries, /events/birthdays, and /fine-dining.',
    lede:
      'A marked night as a format, not an occasion URL. Birthdays and anniversaries stay under /events. This picker is the format.',
    kicker: 'Statewide · Celebration dinner',
    photo: 'hubFineCeleb',
    cardLabel: 'Celebration dinner',
    body: [
      `wedding catering oahu (${SEARCH_VOLUMES['wedding catering oahu']}) stays on oahu.mychef-hawaii.com/weddings. This directory is a celebration format, not that week.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /events/birthdays?',
        a: 'Birthdays is the occasion. This page is the celebration-dinner format.',
      },
      {
        q: 'Same as /fine-dining?',
        a: '/fine-dining is the list. This URL is one nested format.',
      },
    ],
  },
  staffServers: {
    path: '/staffing/servers',
    h1: 'Server add-ons, by island.',
    title: 'Server add-ons, by island | myCHEF Hawaii',
    description:
      'Each island quotes servers hourly. Distinct from /staffing, /bar, and /guest-counts.',
    lede:
      'An hourly line, not a hidden fee. Each island writes the rate band. This page is the picker.',
    kicker: 'Statewide · Servers',
    photo: 'hubStaffServers',
    cardLabel: 'Servers',
    body: [
      `private chef hawaii (${SEARCH_VOLUMES['private chef hawaii']}) stays on hub /. This directory is the server add-on, not a dinner title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /staffing?',
        a: '/staffing is the list. This URL is the server line.',
      },
      {
        q: 'Same as /bar?',
        a: 'Bar is the bartender add-on. Servers are a different hourly line.',
      },
    ],
  },
  staffBartenders: {
    path: '/staffing/bartenders',
    h1: 'Bartender hourly lines, by island.',
    title: 'Bartender hourly lines, by island | myCHEF Hawaii',
    description:
      'Each island quotes bartenders hourly. Distinct from /bar, /mobile-bar, and /staffing.',
    lede:
      '/bar is the add-on door. /mobile-bar is the four-hour package. This picker is the nested hourly line.',
    kicker: 'Statewide · Bartenders',
    photo: 'hubStaffBartenders',
    cardLabel: 'Bartenders',
    body: [
      `mobile bar hawaii (${SEARCH_VOLUMES['mobile bar hawaii']}) stays on hub /mobile-bar. This directory is the hourly bartender line, not that package.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /bar?',
        a: '/bar is the bartender add-on door. This page is the nested hourly SKU.',
      },
      {
        q: 'Same as /mobile-bar?',
        a: 'Mobile bar is the four-hour package. This is an hourly line.',
      },
    ],
  },
  staffButlers: {
    path: '/staffing/butlers',
    h1: 'Quoted butler lines, by island.',
    title: 'Quoted butler lines, by island | myCHEF Hawaii',
    description:
      'Each island quotes butlers only when a bench exists. Distinct from /staffing and from /help.',
    lede:
      'Quoted, not promised. Each island says when the bench is not there. This page is the picker.',
    kicker: 'Statewide · Butlers',
    photo: 'hubStaffButlers',
    cardLabel: 'Butlers',
    body: [
      `private chef maui (${SEARCH_VOLUMES['private chef maui']}) stays on the Maui host home. This directory does not steal that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Do you send a butler from the hub?',
        a: 'No. Open the island page. Butler is quoted only when a bench exists.',
      },
      {
        q: 'Same as /staffing?',
        a: '/staffing is the list. This URL is the butler line.',
      },
    ],
  },
  menuThree: {
    path: '/menus/three-course',
    h1: 'Three-course tables, by island.',
    title: 'Three-course tables, by island | myCHEF Hawaii',
    description:
      'Each island designs a three-course SKU per table. Distinct from /menus, /catering/plated, and /fine-dining/tasting-menu.',
    lede:
      'Designed per table, not a fake standing carte. /menus is the process. This picker is the SKU.',
    kicker: 'Statewide · Three-course',
    photo: 'hubMenuThree',
    cardLabel: 'Three-course',
    body: [
      `private chef oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on the Oahu host home. This directory is a menu SKU, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /menus?',
        a: '/menus is how a table is designed. This URL is the three-course SKU.',
      },
      {
        q: 'Same as plated service?',
        a: 'Plated is the catering format. This is a designed menu SKU.',
      },
    ],
  },
  menuFamily: {
    path: '/menus/family-style-menu',
    h1: 'Family-style menus, by island.',
    title: 'Family-style menus, by island | myCHEF Hawaii',
    description:
      'Each island designs a family-style menu SKU. Distinct from /catering/family-style and from /menus.',
    lede:
      'The designed menu, not the service format. Family-style service is /catering/family-style. This picker is the SKU.',
    kicker: 'Statewide · Family-style menu',
    photo: 'hubMenuFamily',
    cardLabel: 'Family-style menu',
    body: [
      `maui catering (${SEARCH_VOLUMES['maui catering']}) stays on the Maui catering URL. This directory is a menu SKU, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /catering/family-style?',
        a: 'That is how it is served. This page is the designed menu.',
      },
      {
        q: 'Same as /menus?',
        a: '/menus is the process document. This URL is the SKU.',
      },
    ],
  },
  menuBreakfast: {
    path: '/menus/breakfast',
    h1: 'Breakfast in the house, by island.',
    title: 'Breakfast in the house, by island | myCHEF Hawaii',
    description:
      'Each island designs breakfast per table. Distinct from /events/brunch, /vacation-chef, and /menus.',
    lede:
      'Morning in the villa, designed per table. Brunch as an occasion is /events/brunch. This picker is the breakfast SKU.',
    kicker: 'Statewide · Breakfast',
    photo: 'hubMenuBreakfast',
    cardLabel: 'Breakfast',
    body: [
      `personal chef honolulu (${SEARCH_VOLUMES['personal chef honolulu']}) stays on Oahu household copy. This directory is breakfast as a SKU, not a dinner title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /events/brunch?',
        a: 'Brunch is the occasion. This page is the breakfast menu SKU.',
      },
      {
        q: 'Same as Stay Chef?',
        a: 'Vacation chef is the day rate. This is the breakfast SKU.',
      },
    ],
  },
  menuLunch: {
    path: '/menus/lunch',
    h1: 'Lunch in the house, by island.',
    title: 'Lunch in the house, by island | myCHEF Hawaii',
    description:
      'Each island designs lunch per table. Distinct from /menus/breakfast, /meal-prep, and /menus.',
    lede:
      'Midday in the house, designed per table. Meal prep is a gated fridge line. This picker is the lunch SKU.',
    kicker: 'Statewide · Lunch',
    photo: 'hubMenuLunch',
    cardLabel: 'Lunch',
    body: [
      `personal chef maui (${SEARCH_VOLUMES['personal chef maui']}) stays on Maui household copy. This directory is lunch as a SKU, not a dinner title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /meal-prep?',
        a: 'Meal prep is gated volume. This page is a designed lunch SKU.',
      },
      {
        q: 'Same as /menus?',
        a: '/menus is the process. This URL is the lunch SKU.',
      },
    ],
  },
  helpStart: {
    path: '/help/getting-started',
    h1: 'First booking notes, by island.',
    title: 'First booking notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts the first-booking help article. Distinct from /help, /faq, /how-it-works, and /quote.',
    lede:
      '/faq is questions. /how-it-works is the night. /quote is the form. This picker is the first-booking article.',
    kicker: 'Statewide · Getting started',
    photo: 'hubHelpStart',
    cardLabel: 'Getting started',
    body: [
      `private chef kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on the Kauaʻi host. This directory does not steal that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /help?',
        a: '/help is the desk list. This URL is the first-booking article.',
      },
      {
        q: 'Same as /quote?',
        a: '/quote is the form. This page is the first-booking note.',
      },
    ],
  },
  helpMenu: {
    path: '/help/menu-guide',
    h1: 'How to read a menu draft, by island.',
    title: 'How to read a menu draft, by island | myCHEF Hawaii',
    description:
      'Each island hosts the menu-guide help article. Distinct from /menus, /help, and nested menu SKUs.',
    lede:
      'How to read the draft, not a standing carte. /menus is the process. This picker is the help article.',
    kicker: 'Statewide · Menu guide',
    photo: 'hubHelpMenu',
    cardLabel: 'Menu guide',
    body: [
      `hawaii catering (${SEARCH_VOLUMES['hawaii catering']}) stays on hub /catering. This directory is a help article, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /menus?',
        a: '/menus is the process document. This page is how to read the draft.',
      },
      {
        q: 'Same as /help?',
        a: '/help is the list. This URL is the menu-guide article.',
      },
    ],
  },
  helpWedding: {
    path: '/help/wedding-guide',
    h1: 'Wedding-week planning notes, by island.',
    title: 'Wedding-week planning notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts the wedding-week help article. Distinct from /weddings, /rehearsal-dinners, and /help.',
    lede:
      'How the week is planned. The money door stays on /weddings. This picker is the help article.',
    kicker: 'Statewide · Wedding guide',
    photo: 'hubHelpWedding',
    cardLabel: 'Wedding guide',
    body: [
      `wedding catering hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) stays on hub /weddings. This directory is the planning note, not that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /weddings?',
        a: '/weddings is the week stack. This page is the planning help article.',
      },
      {
        q: 'Same as /rehearsal-dinners?',
        a: 'Rehearsal is the night-before SKU. This is the week-planning guide.',
      },
    ],
  },
  helpCorp: {
    path: '/help/corporate-guide',
    h1: 'Offsite planning notes, by island.',
    title: 'Offsite planning notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts the offsite help article. Distinct from /corporate, /corporate-catering, /events/corporate-events, and /help.',
    lede:
      'How to plan a house offsite. Not HCC citywides. This picker is the help article.',
    kicker: 'Statewide · Offsite guide',
    photo: 'hubHelpCorp',
    cardLabel: 'Offsite guide',
    body: [
      `oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on oahu.mychef-hawaii.com/catering. This directory is a help article, not that money title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /corporate?',
        a: 'Hub /corporate is the statewide offsite door. This is the planning help article.',
      },
      {
        q: 'Same as /corporate-catering?',
        a: 'That is the catering SKU. This page is the planning guide.',
      },
    ],
  },
  helpManage: {
    path: '/help/managing-booking',
    h1: 'After the quote, by island.',
    title: 'After the quote, by island | myCHEF Hawaii',
    description:
      'Each island hosts the after-quote help article. Distinct from /quote, /help/getting-started, and /help.',
    lede:
      'Deposit and date lock live on the island host. /quote is the form. This picker is the after-quote article.',
    kicker: 'Statewide · After the quote',
    photo: 'hubHelpManage',
    cardLabel: 'After the quote',
    body: [
      `private chef maui cost (${SEARCH_VOLUMES['private chef maui cost']}) stays on a measured long-tail on the Maui host. This directory does not use that title.`,
      'Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: '/quote is the form. This page is what happens after the written quote.',
      },
      {
        q: 'Same as /help/getting-started?',
        a: 'Getting started is the first ask. This is after the quote.',
      },
    ],
  },
};

