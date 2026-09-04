import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog FINE_SLUGS — halo formats, not Michelin claims, not money-keyword doors.
 * Distinct from /honeymoon-dinners, /omakase-at-home, /chefs-table, /events/villa-parties.
 */

export const FINE_DINING_SLUGS = [
  'romantic-dinner',
  'tasting-menu',
  'chefs-table-evening',
  'celebration-dinner',
] as const;
export type FineDiningSlug = (typeof FINE_DINING_SLUGS)[number];

export interface FineDiningPage extends UniqueCell {
  slug: FineDiningSlug;
}

export const fineDiningPages: Record<IslandId, FineDiningPage[]> = {
  oahu: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner in a Kahala dining room — two seats, not a restaurant.',
      title: 'A romantic dinner in a Kahala dining room | myCHEF',
      description:
        'Two-seat romantic dinners in Kahala and Ko Olina houses. Distinct from the honeymoon SKU. Not a restaurant reservation. Not the private-chef keyword.',
      lede:
        'Brass, two plates, Diamond Head faint. The honeymoon page is the published two-top SKU. This URL is the night as a fine-dining posture — still a house, still a written quote.',
      photo: 'fineRomanticOahu',
      body: [
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) is this host’s home. Honeymoon two-tops are /honeymoon-dinners. This URL is the romantic night so those titles do not collide.`,
        'We do not claim stars we do not have. Sourcing is written on the menu or it is not claimed. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Same as honeymoon dinner?',
          a: 'Same kitchen. /honeymoon-dinners is the published two-top SKU. This page is the romantic night as a format.',
        },
        {
          q: 'Can it be plated?',
          a: 'Usually. See /catering/plated and /menus/three-course.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu in an Oahu villa — written courses, not a star claim.',
      title: 'A tasting menu in an Oahu villa | myCHEF',
      description:
        'Written tasting arcs in Kahala and Ko Olina kitchens. Distinct from /omakase-at-home. Not a Michelin claim. Designed per table.',
      lede:
        'Courses on paper, then on the island. Omakase-at-home is the paced tasting SKU with sourcing gates. This URL is the written menu as a format.',
      photo: 'fineTastingOahu',
      body: [
        'Omakase at home: /omakase-at-home. Chef’s table seating: /chefs-table. This page is the tasting menu so those doors stay distinct.',
        'Menus are designed per table — /menus. We will not print a fake standing carte.',
      ],
      faqs: [
        {
          q: 'Is this omakase?',
          a: 'Omakase is /omakase-at-home. This page is the written tasting arc.',
        },
        {
          q: 'Will you name a fishmonger?',
          a: 'When the invoice can stand behind it. We do not invent farm names.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/fine-dining/chefs-table-evening', label: "Chef's table evening" },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in an Oahu kitchen — the pass is the table.',
      title: 'A chef’s table evening in an Oahu kitchen | myCHEF',
      description:
        'Evening seating at the Kahala or Ko Olina kitchen island. Distinct from /chefs-table as a product line. Not a restaurant pass. Not a star claim.',
      lede:
        'Guests at the island. The sear in front of you. /chefs-table is the SKU. This URL is the evening as a fine-dining format so the titles stay clean.',
      photo: 'fineChefsEveOahu',
      body: [
        'The product line is /chefs-table. This page is the evening format. Tasting arcs: /fine-dining/tasting-menu. Omakase: /omakase-at-home.',
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) remains the dinner door on this host’s home.`,
      ],
      faqs: [
        {
          q: 'Same as /chefs-table?',
          a: 'That page is the SKU. This page is the evening format. Buy one story, not two titles.',
        },
        {
          q: 'How many seats at the island?',
          a: 'What the kitchen holds. Usually a small list. See /guest-counts.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table SKU" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/gold-coast', label: 'Gold Coast' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner in an Oahu dining room — plated, not a lawn party.',
      title: 'A celebration dinner in an Oahu dining room | myCHEF',
      description:
        'Seated celebration dinners in Kahala dining rooms and Ko Olina villas. Distinct from /events/villa-parties and /events/birthdays. Not the catering keyword.',
      lede:
        'Eight plates, brass, a dining room. The villa party is a different door. This URL is the seated celebration as a fine-dining night.',
      photo: 'fineCelebrationOahu',
      body: [
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. Birthdays: /events/birthdays. Villa parties: /events/villa-parties. This page is the seated celebration.`,
        'Plated service: /catering/plated. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Birthday instead?',
          a: 'Birthdays are /events/birthdays. This page is the plated celebration night.',
        },
        {
          q: 'Can it be a hundred on the lawn?',
          a: 'Not as a promise. Larger than about seventy-five is quoted. See /guest-counts.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/catering/plated', label: 'Plated service' },
        { path: '/events/villa-parties', label: 'Villa parties' },
      ],
    },
  ],
  maui: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Wailea lanai — two plates, Molokini faint.',
      title: 'A romantic dinner on a Wailea lanai | myCHEF',
      description:
        'Two-seat romantic dinners in Wailea and Kapalua. Distinct from the honeymoon SKU. Not a restaurant reservation. Not the private-chef keyword.',
      lede:
        'Blue hour, two plated fish. The honeymoon page is the published two-top. This URL is the romantic night as a format.',
      photo: 'fineRomanticMaui',
      body: [
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) is this host’s home. Honeymoon two-tops: /honeymoon-dinners. This URL keeps those titles clean.`,
        'West Maui houses: /west-maui. Wet-weather backup is written for lanais that do not hold.',
      ],
      faqs: [
        {
          q: 'Same as honeymoon?',
          a: '/honeymoon-dinners is the SKU. This page is the romantic format.',
        },
        {
          q: 'Kapalua instead of Wailea?',
          a: 'Yes. Northwest bay houses. Traffic: /west-maui.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu in a Maui villa — written courses in Wailea.',
      title: 'A tasting menu in a Maui villa | myCHEF',
      description:
        'Written tasting arcs in Wailea and Kapalua kitchens. Distinct from /omakase-at-home. Not a Michelin claim. Not a Lotus Chefs impersonation.',
      lede:
        'Courses at the open-kitchen counter. Omakase-at-home is the paced SKU. This URL is the written tasting as a format.',
      photo: 'fineTastingMaui',
      body: [
        'Omakase: /omakase-at-home. Chef’s table: /chefs-table. This page is the tasting menu.',
        'We do not impersonate another kitchen. See /what-we-dont-do. Menus: /menus.',
      ],
      faqs: [
        {
          q: 'Lotus Chefs tasting?',
          a: 'Related searches, not us. We do not impersonate another kitchen.',
        },
        {
          q: 'Same as omakase?',
          a: 'Omakase is /omakase-at-home. This is the written arc.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in a Maui kitchen — the counter is the table.',
      title: 'A chef’s table evening in a Maui kitchen | myCHEF',
      description:
        'Evening seating at a Wailea or Kapalua kitchen counter. Distinct from /chefs-table. Not a restaurant pass. Not a star claim.',
      lede:
        'The sear in front of you. Molokini in the window if the house has it. /chefs-table is the SKU. This URL is the evening format.',
      photo: 'fineChefsEveMaui',
      body: [
        'The product line is /chefs-table. This page is the evening. Tasting: /fine-dining/tasting-menu.',
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) remains the dinner door.`,
      ],
      faqs: [
        {
          q: 'Same as /chefs-table?',
          a: 'That page is the SKU. This page is the evening format.',
        },
        {
          q: 'How many at the counter?',
          a: 'What the kitchen holds. See /guest-counts.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table SKU" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner in a Maui dining room — plated, not a lawn party.',
      title: 'A celebration dinner in a Maui dining room | myCHEF',
      description:
        'Seated celebration dinners in Wailea and West Maui houses. Distinct from /events/villa-parties and /events/birthdays. Not the catering keyword.',
      lede:
        'A dining room, identical plates, a small list. The lawn party is a different door. This URL is the seated celebration.',
      photo: 'fineCelebrationMaui',
      body: [
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. Birthdays: /events/birthdays. Villa parties: /events/villa-parties.`,
        'Plated: /catering/plated. Wet-weather backup is written if you move to a lawn.',
      ],
      faqs: [
        {
          q: 'Birthday on the lawn instead?',
          a: 'Birthdays: /events/birthdays. Villa parties: /events/villa-parties. This page is plated celebration.',
        },
        {
          q: 'Lahaina celebration?',
          a: 'West Maui houses with kitchens. See /lahaina for how we name that.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/catering/plated', label: 'Plated service' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Kauai estate — two seats, inquiry, both shores.',
      title: 'A romantic dinner on a Kauai estate | myCHEF',
      description:
        'Two-seat romantic dinners in Princeville and Poʻipū. Inquiry stage. Distinct from the honeymoon SKU. Not a restaurant reservation.',
      lede:
        'Wet North stone or South sun. Two plates. Inquiry. The honeymoon SKU is next door. Far-North inherits the bridge clause.',
      photo: 'fineRomanticKauai',
      body: [
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) is this host’s home. Honeymoon: /honeymoon-dinners. Far-North: /hanalei-bridge.`,
        'Inquiry list with the shore. We will not fake a live roster.',
      ],
      faqs: [
        {
          q: 'Can I book this month?',
          a: 'Join the inquiry with the shore and the dates.',
        },
        {
          q: 'Hanalei two-top in surf season?',
          a: 'Bridge clause still applies. See /hanalei-bridge.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu on a Kauai estate — written courses, inquiry.',
      title: 'A tasting menu on a Kauai estate | myCHEF',
      description:
        'Written tasting arcs in Princeville and Poʻipū. Inquiry stage. Distinct from /omakase-at-home. Not a restaurant claim.',
      lede:
        'Courses at the estate counter. Inquiry. Omakase-at-home is the paced SKU. This URL is the written tasting.',
      photo: 'fineTastingKauai',
      body: [
        'Omakase: /omakase-at-home. Chef’s table: /chefs-table. Far-North still inherits /hanalei-bridge.',
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) remains the dinner door.`,
      ],
      faqs: [
        {
          q: 'Same as omakase?',
          a: 'Omakase is /omakase-at-home. This is the written arc.',
        },
        {
          q: 'Can I book a tasting this month?',
          a: 'Inquiry list with the shore.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/poipu', label: 'Poʻipū' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening on Kauai — the estate counter, inquiry.',
      title: 'A chef’s table evening on Kauai | myCHEF',
      description:
        'Evening seating at a Princeville or Poʻipū kitchen counter. Inquiry stage. Distinct from /chefs-table. Not a restaurant pass.',
      lede:
        'The sear, the mist or the pool. /chefs-table is the SKU. This URL is the evening format. Inquiry.',
      photo: 'fineChefsEveKauai',
      body: [
        'The product line is /chefs-table. This page is the evening. Tasting: /fine-dining/tasting-menu.',
        'Inquiry stage. Far-North: /hanalei-bridge.',
      ],
      faqs: [
        {
          q: 'Same as /chefs-table?',
          a: 'That page is the SKU. This page is the evening format.',
        },
        {
          q: 'How many at the counter?',
          a: 'What the kitchen holds. Inquiry. See /guest-counts.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table SKU" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner on a Kauai estate — plated, inquiry, both shores.',
      title: 'A celebration dinner on a Kauai estate | myCHEF',
      description:
        'Seated celebration dinners in Princeville and Poʻipū. Inquiry stage. Distinct from /events/villa-parties. Not the catering keyword.',
      lede:
        'An estate table, plated fish, a small list. Inquiry. The estate party is a different door.',
      photo: 'fineCelebrationKauai',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. Birthdays: /events/birthdays. Estate parties: /events/villa-parties.`,
        'Far-North celebrations inherit /hanalei-bridge. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Birthday instead?',
          a: 'Birthdays: /events/birthdays. This page is the plated celebration.',
        },
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry with the shore and the dates.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/events/villa-parties', label: 'Estate parties' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Kohala lava terrace — two seats, west side.',
      title: 'A romantic dinner on a Kohala lava terrace | myCHEF',
      description:
        'Two-seat romantic dinners in Kona and Kohala. Inquiry stage. Distinct from the honeymoon SKU. East side is a different day.',
      lede:
        'Two plates on lava, Mauna Kea faint. Not a Hilo add-on. The honeymoon SKU is next door.',
      photo: 'fineRomanticBigisland',
      body: [
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) is a dinner door. Honeymoon: /honeymoon-dinners. West-side: /kohala-corridor. East side: /east-side.`,
        'Inquiry stage. We will not fake a live west-side roster.',
      ],
      faqs: [
        {
          q: 'Hilo two-top?',
          a: 'Quote-only dedicated staffing. See /east-side.',
        },
        {
          q: 'Same as honeymoon?',
          a: '/honeymoon-dinners is the SKU. This page is the romantic format.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu on west-side Hawaiʻi Island — written courses, Kona.',
      title: 'A tasting menu on west-side Hawaiʻi Island | myCHEF',
      description:
        'Written tasting arcs in Kona and Kohala kitchens. Inquiry stage. Distinct from /omakase-at-home. East side is a different day. Not a restaurant claim.',
      lede:
        'Kanpachi in courses at the counter. Lava in the window. Omakase-at-home is the paced SKU. This URL is the written tasting.',
      photo: 'fineTastingBigisland',
      body: [
        'Omakase: /omakase-at-home. Coffee origin on a crust: /coffee-act-198. East side: /east-side.',
        `Private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) remains a dinner door.`,
      ],
      faqs: [
        {
          q: 'Same as omakase?',
          a: 'Omakase is /omakase-at-home. This is the written arc.',
        },
        {
          q: 'Hilo tasting?',
          a: 'Quote-only dedicated day. See /east-side.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in a Kona kitchen — the counter is the table.',
      title: 'A chef’s table evening in a Kona kitchen | myCHEF',
      description:
        'Evening seating at a Kona or Kohala kitchen counter. Inquiry stage. Distinct from /chefs-table. East side is a different day. Not a restaurant pass.',
      lede:
        'The sear, hard sun cooling. /chefs-table is the SKU. This URL is the evening format. Not Hilo.',
      photo: 'fineChefsEveBigisland',
      body: [
        'The product line is /chefs-table. This page is the evening. Tasting: /fine-dining/tasting-menu.',
        'West-side first. Ironman weeks compress town — /ironman-weeks.',
      ],
      faqs: [
        {
          q: 'Same as /chefs-table?',
          a: 'That page is the SKU. This page is the evening format.',
        },
        {
          q: 'Hilo counter?',
          a: 'Quote-only east side. See /east-side.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table SKU" },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner on the Kohala Coast — plated, west side.',
      title: 'A celebration dinner on the Kohala Coast | myCHEF',
      description:
        'Seated celebration dinners in Kona and Kohala houses. Inquiry stage. Distinct from /events/villa-parties. East side is a different day. Not the catering keyword.',
      lede:
        'Eight plates on lava, Mauna Kea faint. The villa party is a different door. Not a Hilo add-on.',
      photo: 'fineCelebrationBigisland',
      body: [
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. Birthdays: /events/birthdays. Villa parties: /events/villa-parties.`,
        'West-side: /kohala-corridor. East side: /east-side. Ironman weeks: /ironman-weeks.',
      ],
      faqs: [
        {
          q: 'Hilo celebration?',
          a: 'Quote-only dedicated staffing. See /east-side.',
        },
        {
          q: 'Birthday instead?',
          a: 'Birthdays: /events/birthdays. This page is the plated celebration.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/events/villa-parties', label: 'Villa parties' },
      ],
    },
  ],
};

export function getFineDiningPage(island: IslandId, slug: string): FineDiningPage | undefined {
  return fineDiningPages[island].find((row) => row.slug === slug);
}
