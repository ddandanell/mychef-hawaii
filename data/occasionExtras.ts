import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Remaining catalog EVENT_SLUGS except weddings (already a money door).
 * Titles must not use catering or private-chef money keywords.
 */

export const OCCASION_EXTRA_SLUGS = ['anniversaries', 'corporate-events', 'villa-parties', 'brunch'] as const;
export type OccasionExtraSlug = (typeof OCCASION_EXTRA_SLUGS)[number];

export interface OccasionExtra extends UniqueCell {
  slug: OccasionExtraSlug;
}

export const occasionExtras: Record<IslandId, OccasionExtra[]> = {
  oahu: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners in a Kahala dining room — two seats or a small table.',
      title: 'Anniversary dinners in a Kahala dining room | myCHEF',
      description:
        'Anniversary tables in Kahala dining rooms and Ko Olina villas. Two seats or a small list. Not a restaurant buyout. Not the catering keyword.',
      lede:
        'Two plates, brass, Diamond Head faint. Or a small family table. The birthday page is next door. This one is the year-mark.',
      photo: 'occAnniversaryOahu',
      body: [
        'Honeymoon two-tops: /honeymoon-dinners. Birthdays: /events/birthdays. This URL is the anniversary so those nights do not share a title.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. Guest counts: /guest-counts.`,
      ],
      faqs: [
        {
          q: 'Just two of us?',
          a: 'Yes. Date night is a published band. See /honeymoon-dinners if it is a honeymoon week.',
        },
        {
          q: 'Cake?',
          a: 'A dessert course we plate, or a bakery cake you bring. We do not print a fake bakery brand.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Oahu house offsites — not HCC citywides.',
      title: 'Oahu house offsites — not HCC citywides | myCHEF',
      description:
        'House offsites in Kahala and Ko Olina. HCC citywides are closed through 2027. Distinct from /corporate-catering. Not the catering keyword.',
      lede:
        'Laptops away from the pass. Breakfast in the house. Not the convention centre. The food line lives on /corporate-catering.',
      photo: 'occCorporateOahu',
      body: [
        'HCC citywides: /conventions. The kitchen line for executive dinners is /corporate-catering. Retreat occasion: /events/retreats.',
        'Production crews in residences are this product. A stage downtown is not.',
      ],
      faqs: [
        {
          q: 'Sony Open week?',
          a: 'Calendar awareness, not an affiliation. Ask early.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That page is the food line. This page is the occasion.',
        },
      ],
      related: [
        { path: '/conventions', label: 'Not MICE' },
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties in Ko Olina and Kahala — the house is the venue.',
      title: 'Villa parties in Ko Olina and Kahala | myCHEF',
      description:
        'Staffed villa parties in Ko Olina short-stay houses and Kahala dining rooms. About 10–75. Not a restaurant buyout. Not the catering keyword.',
      lede:
        'The house, family-style fish, the guest list you actually have. Legal short-stay fact lives on /short-stay. This page is the party.',
      photo: 'occVillaOahu',
      body: [
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) is /catering. This URL is the villa party so those titles do not collide.`,
        'Ko Olina legal short-stay: /short-stay. Gold Coast dining rooms: /gold-coast. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Can you do a hundred on a Gold Coast lawn?',
          a: 'Not as a promise. Larger than about seventy-five is quoted. See /guest-counts.',
        },
        {
          q: 'Hotel suite party?',
          a: 'If there is a stove. Most suites do not. Residences and villas are the product.',
        },
      ],
      related: [
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/gold-coast', label: 'Gold Coast' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Brunch in an Oahu house — recovery morning, not a restaurant.',
      title: 'Brunch in an Oahu house | myCHEF',
      description:
        'Recovery brunch in Kahala houses and Ko Olina villas. Morning after the villa week or the wedding night. Not a restaurant brunch. Not the catering keyword.',
      lede:
        'Fruit, eggs, last night’s fish recast. The house still waking. Wedding-week brunch is a line on /weddings; this page is the morning as its own product.',
      photo: 'occBrunchOahu',
      body: [
        'Wedding recovery brunch stacks on /weddings as its own line. This page is the villa-week morning — or a standalone brunch in a Kahala dining room.',
        'Stay Chef weeks: /vacation-chef. Kids at the table: /kids-menus.',
      ],
      faqs: [
        {
          q: 'Same as the wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on /weddings. This page is the villa morning.',
        },
        {
          q: 'Bloody Marys?',
          a: 'Bar is /bar or /mobile-bar. Brunch food is this page — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
  ],
  maui: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary nights on a Wailea lanai — two plates, not a buyout.',
      title: 'Anniversary nights on a Wailea lanai | myCHEF',
      description:
        'Anniversary tables in Wailea, Kapalua and Kīhei. Two seats or a small list. Not a restaurant buyout. Not the catering keyword.',
      lede:
        'Blue hour, two plated fish, Molokini faint. Or a small family table on the lawn. The birthday page is next door.',
      photo: 'occAnniversaryMaui',
      body: [
        'Honeymoon two-tops: /honeymoon-dinners. Birthdays: /events/birthdays. This URL is the year-mark.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. Wet-weather backup is written for lawns.`,
      ],
      faqs: [
        {
          q: 'Kapalua instead of Wailea?',
          a: 'Yes. Northwest bay houses. Traffic: /west-maui.',
        },
        {
          q: 'Just two of us?',
          a: 'Yes. See /honeymoon-dinners if it is a honeymoon week.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Maui villa offsites — South and West houses, not a ballroom.',
      title: 'Maui villa offsites in South and West houses | myCHEF',
      description:
        'Villa offsites in Wailea, Kapalua and Kīhei. Not hotel ballrooms. Distinct from /corporate-catering. Not the catering keyword.',
      lede:
        'A small offsite table, the lawn optional. We cook houses. We do not staff banquet rooms. The food line is /corporate-catering.',
      photo: 'occCorporateMaui',
      body: [
        'The kitchen line is /corporate-catering. Retreat occasion: /events/retreats. South Maui logistics: /south-maui. West Maui traffic: /west-maui.',
        'Production crews in residences are this product. Convention citywides are not.',
      ],
      faqs: [
        {
          q: 'Hotel conference?',
          a: 'No. Residences and villas.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That page is the food. This page is the occasion — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties in Wailea and West Maui — lawn or dining room.',
      title: 'Villa parties in Wailea and West Maui | myCHEF',
      description:
        'Staffed villa parties in Wailea, Kīhei, Kāʻanapali and Kapalua. About 10–75. Wet-weather backup written for lawns. Not the catering keyword.',
      lede:
        'Grass, identical plates, the guest list you actually have. Saturday West Maui traffic is planned into arrival, not discovered on the invoice.',
      photo: 'occVillaMaui',
      body: [
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) is /catering. This URL is the villa party.`,
        'South Maui: /south-maui. West Maui: /west-maui. Lahaina naming: /lahaina. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Rain on a Wailea lawn?',
          a: 'Backup is written. We do not pretend the weather is a surprise.',
        },
        {
          q: 'Kids on the lawn?',
          a: 'Yes — /kids-menus. Headcount still /guest-counts.',
        },
      ],
      related: [
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Maui recovery brunch — the morning after the villa week.',
      title: 'Maui recovery brunch in the villa | myCHEF',
      description:
        'Recovery brunch in Wailea and West Maui villas. Morning after the week or the wedding night. Wedding-week brunch is a line on /wedding-week.',
      lede:
        'Coffee, fruit, grilled fish, the pool still. Wedding brunch stacks on /wedding-week; this page is the villa morning as its own product.',
      photo: 'occBrunchMaui',
      body: [
        'Wedding-week brunch is a separate line on /wedding-week. This page is the Stay Chef morning — or a standalone brunch in a Wailea house.',
        'Stay Chef: /vacation-chef. Kids: /kids-menus. Traffic if you are coming from Kāʻanapali: /west-maui.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen. Wedding brunch lives on /wedding-week. This page is the villa morning.',
        },
        {
          q: 'Bloody Marys on the lanai?',
          a: 'Bar is /bar or /mobile-bar. Brunch food is this page — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners on a Kauai estate — inquiry, both shores.',
      title: 'Anniversary dinners on a Kauai estate | myCHEF',
      description:
        'Anniversary tables in Princeville, Hanalei and Poʻipū. Inquiry stage. Two seats or a small list. Not the catering keyword.',
      lede:
        'Two seats on wet North Shore stone, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occAnniversaryKauai',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This URL is the anniversary.`,
        'Honeymoon two-tops: /honeymoon-dinners. Far-North: /hanalei-bridge. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry with the shore and the dates.',
        },
        {
          q: 'Just two of us in Hanalei?',
          a: 'Yes if the crew exists. Bridge clause still applies. See /hanalei-bridge.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Kauai estate offsites — inquiry, not a convention play.',
      title: 'Kauai estate offsites — inquiry, not a convention | myCHEF',
      description:
        'Estate offsites in Princeville and Poʻipū. Inquiry stage. Not a MICE island. Distinct from /corporate-catering.',
      lede:
        'A small estate table. Both shores. Inquiry. We do not pretend Kauaʻi is a convention product. The food line is /corporate-catering.',
      photo: 'occCorporateKauai',
      body: [
        'Kitchen line: /corporate-catering. Retreat occasion: /events/retreats. Far-North offsites inherit /hanalei-bridge.',
        'Inquiry stage. Published starting prices for dinners still apply when we cook.',
      ],
      faqs: [
        {
          q: 'Līhuʻe conference?',
          a: 'No. Estates and villas. Not a convention product.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That page is the food. This page is the occasion — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Estate parties on Kauai — Princeville and Poipu houses, inquiry.',
      title: 'Estate parties on Kauai — both shores, inquiry | myCHEF',
      description:
        'Staffed estate parties in Princeville, Hanalei and Poʻipū. About 10–75. Inquiry stage. Far-North inherits the bridge clause. Not the catering keyword.',
      lede:
        'An estate dessert course looking into a valley, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occVillaKauai',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) is /catering. This URL is the estate party.`,
        'Bridge clause: /hanalei-bridge. Guest counts: /guest-counts. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry with the shore and the dates.',
        },
        {
          q: 'Kids on the terrace?',
          a: 'Yes — /kids-menus. Weather still applies on the North.',
        },
      ],
      related: [
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Kauai estate brunch — both shores, inquiry.',
      title: 'Kauai estate brunch — both shores, inquiry | myCHEF',
      description:
        'Estate brunch in Poʻipū and Princeville. Inquiry stage. Wedding-week brunch is a line on /wedding-week. Not a restaurant brunch.',
      lede:
        'Pool morning on the South, or misted North coffee. Inquiry. Wedding brunch stacks on /wedding-week; this page is the estate morning.',
      photo: 'occBrunchKauai',
      body: [
        'Wedding-week brunch lives on /wedding-week. This page is the villa-week morning. Stay Chef: /vacation-chef.',
        'Far-North brunch still inherits /hanalei-bridge. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on /wedding-week.',
        },
        {
          q: 'Bloody Marys?',
          a: 'Bar is /bar or /mobile-bar. Brunch food is this page — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners on a Kohala lava terrace — west side first.',
      title: 'Anniversary dinners on a Kohala lava terrace | myCHEF',
      description:
        'Anniversary tables on Kona–Kohala terraces. Inquiry stage. Two seats or a small list. East side is a different day. Not the catering keyword.',
      lede:
        'Two plates on lava, Mauna Kea faint. Not a Hilo add-on. The birthday page is next door.',
      photo: 'occAnniversaryBigisland',
      body: [
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This URL is the anniversary.`,
        'Honeymoon two-tops: /honeymoon-dinners. West-side: /kohala-corridor. East side: /east-side.',
      ],
      faqs: [
        {
          q: 'Hilo anniversary?',
          a: 'Quote-only dedicated staffing. See /east-side.',
        },
        {
          q: 'Just two of us in Waikoloa?',
          a: 'Yes. Inquiry stage. See /honeymoon-dinners if it is a honeymoon week.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'West-side villa offsites on Hawaiʻi Island — not a Hilo add-on.',
      title: 'West-side villa offsites on Hawaiʻi Island | myCHEF',
      description:
        'Villa offsites in Kona and Kohala. Inquiry stage. East side is a different day. Distinct from /corporate-catering. Not the catering keyword.',
      lede:
        'A small west-side table, hard sun. Not the whole island. The food line is /corporate-catering. Ironman weeks compress town.',
      photo: 'occCorporateBigisland',
      body: [
        'Kitchen line: /corporate-catering. Retreat occasion: /events/retreats. Ironman weeks: /ironman-weeks. East side: /east-side.',
        'Inquiry stage. We will not pretend a Waikoloa offsite covers Hilo.',
      ],
      faqs: [
        {
          q: 'Can you add Volcano onto a Waikoloa week?',
          a: 'As its own dedicated team day, quoted. Not as an unpaid errand.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That page is the food. This page is the occasion — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties on the Kohala Coast — lava terrace, west side.',
      title: 'Villa parties on the Kohala Coast | myCHEF',
      description:
        'Staffed villa parties on Kona–Kohala terraces. About 10–75. Inquiry stage. East side is a different day. Not the catering keyword.',
      lede:
        'Eight to forty on lava, plated kanpachi, Mauna Kea faint. Not a Hilo add-on. Hard sun is real.',
      photo: 'occVillaBigisland',
      body: [
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) is /catering. This URL is the villa party.`,
        'West-side radius: /kohala-corridor. East side: /east-side. Ironman weeks: /ironman-weeks. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Hilo party?',
          a: 'Quote-only with dedicated staffing. See /east-side.',
        },
        {
          q: 'Kids on a lava terrace at noon?',
          a: 'Shade and timing are the house. We cook the kitchen you have. See /kids-menus.',
        },
      ],
      related: [
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'West-side brunch on Hawaiʻi Island — Kona and Kohala mornings.',
      title: 'West-side brunch on Hawaiʻi Island | myCHEF',
      description:
        'West-side brunch in Kona and Kohala villas. Inquiry stage. Wedding brunch is a line on /weddings. East side is a different day.',
      lede:
        'Breakfast fish, fruit, hard sun. Coffee cherries on a side board if the house has them — origin labeled when the law requires it.',
      photo: 'occBrunchBigisland',
      body: [
        'Wedding brunch stacks on /weddings. This page is the villa morning. Stay Chef: /vacation-chef. Coffee origin: /coffee-act-198.',
        'East-side brunch is quote-only dedicated staffing. See /east-side. Ironman weeks pack town — /ironman-weeks.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on /weddings.',
        },
        {
          q: 'Kona coffee tasting with brunch?',
          a: 'Coffee may be on the crust. A farm tour is not a SKU. See /coffee-act-198.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
};
