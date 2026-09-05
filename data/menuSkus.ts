import type { IslandId } from './islands';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog MENU_SLUGS — designed per table, not a fake standing carte.
 * Distinct from /menus (the process), /catering/family-style (the service format),
 * and /events/brunch (the occasion).
 */

export const MENU_SKU_SLUGS = ['three-course', 'family-style-menu', 'breakfast', 'lunch'] as const;
export type MenuSkuSlug = (typeof MENU_SKU_SLUGS)[number];

export interface MenuSkuPage extends UniqueCell {
  slug: MenuSkuSlug;
}

export const menuSkuPages: Record<IslandId, MenuSkuPage[]> = {
  oahu: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course in an Oahu dining room — designed per table.',
      title: 'A three-course in an Oahu dining room | myCHEF',
      description:
        'Three-course menus in Kahala dining rooms and Ko Olina villas. Designed per table, not a standing carte. Distinct from /menus as a process page.',
      lede:
        'Crudo, a sear, a close. The sample on /menus is an example. This URL is the three-course as its own document so we do not pretend there is a printed carte.',
      photo: 'menuThreeOahu',
      body: [
        'How menus are designed: /menus. Plated service: /catering/plated. Tasting arcs: /fine-dining/tasting-menu.',
        'Dietary is designed in — /dietary. We will not print a fake kids’ carte; see /kids-menus.',
      ],
      faqs: [
        {
          q: 'Is this the sample on /menus?',
          a: 'That is an example. This page is the three-course as a SKU. Every table is still designed.',
        },
        {
          q: 'Can it be four courses?',
          a: 'Yes. We write it. This URL stays three-course so the titles stay clean.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/catering/plated', label: 'Plated service' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu in Oahu houses — platters, not the service format.',
      title: 'A family-style menu in Oahu houses | myCHEF',
      description:
        'Family-style menus in Kahala and Ko Olina houses. Distinct from /catering/family-style (the service format). Designed per table.',
      lede:
        'Platters down the table. /catering/family-style is how we staff the night. This URL is what is on the platters.',
      photo: 'menuFamilyOahu',
      body: [
        'The service format is /catering/family-style. Welcome dinners often run this menu — /events/welcome-dinners.',
        'Kids’ plates sit beside, not after — /kids-menus. Process: /menus.',
      ],
      faqs: [
        {
          q: 'Same as /catering/family-style?',
          a: 'That page is the service. This page is the menu — Kahala kitchen.',
        },
        {
          q: 'Same as grazing?',
          a: 'Grazing is boards — /catering/grazing. This is seated platters in a Kahala dining room.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast in an Oahu house — morning food, not the brunch occasion.',
      title: 'Breakfast in an Oahu house | myCHEF',
      description:
        'Breakfast menus in Kahala houses and Ko Olina villas. Distinct from /events/brunch (the occasion). Stay Chef mornings live on /vacation-chef.',
      lede:
        'Eggs, fruit, last night’s fish recast. /events/brunch is the occasion. This URL is the morning menu so those titles do not collide.',
      photo: 'menuBreakfastOahu',
      body: [
        'Brunch as an occasion: /events/brunch. Multi-day mornings: /vacation-chef. Retreat kitchens: /retreat-catering.',
        'Process: /menus. We do not print a fake breakfast carte.',
      ],
      faqs: [
        {
          q: 'Same as recovery brunch?',
          a: 'That occasion is /events/brunch. This page is the breakfast menu — Kahala kitchen.',
        },
        {
          q: 'Stay Chef breakfast every morning?',
          a: 'Yes as part of /vacation-chef. This URL is the menu document.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in an Oahu house — midday, not the dinner door.',
      title: 'Lunch in an Oahu house | myCHEF',
      description:
        'Lunch menus in Kailua houses, Kahala dining rooms and Ko Olina villas. Midday food. Not the dinner door. Designed per table.',
      lede:
        'Mokulua in the window if you are in Kailua. A shorter arc than dinner. This URL is lunch so / and /catering keep the evening.',
      photo: 'menuLunchOahu',
      body: [
        'Dinner is this host’s home and /catering. Stay Chef weeks include lunch when the day rate says so — /vacation-chef.',
        'Process: /menus. Kailua: /kailua. Guest counts still apply — /guest-counts.',
      ],
      faqs: [
        {
          q: 'Is lunch cheaper than dinner?',
          a: 'Often a shorter arc. Still a written quote. See /pricing — Kahala kitchen.',
        },
        {
          q: 'Hotel-room lunch?',
          a: 'If there is a stove. Most suites do not.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  maui: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course in a Maui dining room — designed per table.',
      title: 'A three-course in a Maui dining room | myCHEF',
      description:
        'Three-course menus in Wailea and Kapalua. Designed per table, not a standing carte. Distinct from /menus as a process page.',
      lede:
        'Crudo, a grill, a close. The sample on /menus is an example. This URL is the three-course as its own document.',
      photo: 'menuThreeMaui',
      body: [
        'Process: /menus. Plated: /catering/plated. Tasting: /fine-dining/tasting-menu. Dietary: /dietary.',
        'We do not impersonate another Maui kitchen. See /what-we-dont-do.',
      ],
      faqs: [
        {
          q: 'Is this the sample on /menus?',
          a: 'That is an example. This page is the three-course SKU. Every table is still designed.',
        },
        {
          q: 'Upcountry three-course?',
          a: 'Surcharge zone. Quoted with the menu. See /coverage.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu in Maui villas — platters, not the service format.',
      title: 'A family-style menu in Maui villas | myCHEF',
      description:
        'Family-style menus in Wailea, Kīhei and West Maui. Distinct from /catering/family-style. Designed per table.',
      lede:
        'Platters on the lanai. The service format is next door. This URL is what is on the platters.',
      photo: 'menuFamilyMaui',
      body: [
        'Service format: /catering/family-style. Welcome dinners: /events/welcome-dinners. Kids: /kids-menus.',
        'South Maui: /south-maui. Process: /menus.',
      ],
      faqs: [
        {
          q: 'Same as /catering/family-style?',
          a: 'That page is the service. This page is the menu — Wailea kitchen.',
        },
        {
          q: 'Kids on the platters?',
          a: 'Beside, not after. See /kids-menus.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast in a Maui villa — morning food, not the brunch occasion.',
      title: 'Breakfast in a Maui villa | myCHEF',
      description:
        'Breakfast menus in Wailea and West Maui villas. Distinct from /events/brunch. Stay Chef mornings live on /vacation-chef.',
      lede:
        'Eggs, fruit, the pool still. /events/brunch is the occasion. This URL is the morning menu.',
      photo: 'menuBreakfastMaui',
      body: [
        'Brunch occasion: /events/brunch. Multi-day: /vacation-chef. Retreat kitchens: /retreat-catering.',
        'West Maui arrival traffic: /west-maui. Process: /menus.',
      ],
      faqs: [
        {
          q: 'Same as recovery brunch?',
          a: 'That occasion is /events/brunch. This page is the breakfast menu — Wailea kitchen.',
        },
        {
          q: 'Stay Chef every morning?',
          a: 'When the day rate says so — /vacation-chef.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in a Maui house — midday in Kīhei and Wailea.',
      title: 'Lunch in a Maui house | myCHEF',
      description:
        'Lunch menus in Kīhei family houses and Wailea villas. Midday food. Not the dinner door. Designed per table.',
      lede:
        'A shorter arc than dinner. South Maui light. This URL is lunch so /catering keeps the evening.',
      photo: 'menuLunchMaui',
      body: [
        'Dinner is this host’s home and /catering. Stay Chef weeks: /vacation-chef. South Maui: /south-maui.',
        'Process: /menus. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Cheaper than dinner?',
          a: 'Often a shorter arc. Still a written quote. See /pricing — Wailea kitchen.',
        },
        {
          q: 'Beach-park lunch?',
          a: 'We cook houses. Parks are not a kitchen.',
        },
      ],
      related: [
        { path: '/kihei', label: 'Kīhei' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course on a Kauai estate — designed per table, inquiry.',
      title: 'A three-course on a Kauai estate | myCHEF',
      description:
        'Three-course menus in Princeville and Poʻipū. Inquiry stage. Designed per table. Distinct from /menus as a process page.',
      lede:
        'Crudo, a sear, a close. Inquiry. The sample on /menus is an example. This URL is the three-course as its own document.',
      photo: 'menuThreeKauai',
      body: [
        'Process: /menus. Plated: /catering/plated. Far-North: /hanalei-bridge. Inquiry list with the shore.',
        'Dietary: /dietary. We will not print a fake standing carte.',
      ],
      faqs: [
        {
          q: 'Can I book a three-course this month?',
          a: 'Inquiry list with the shore.',
        },
        {
          q: 'Is this the sample on /menus?',
          a: 'That is an example. This page is the SKU. Every table is still designed — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu on Kauai estates — platters, both shores.',
      title: 'A family-style menu on Kauai estates | myCHEF',
      description:
        'Family-style menus in Princeville and Poʻipū. Inquiry stage. Distinct from /catering/family-style. Designed per table.',
      lede:
        'Platters down the estate table. The service format is next door. Inquiry.',
      photo: 'menuFamilyKauai',
      body: [
        'Service format: /catering/family-style. Welcome dinners: /events/welcome-dinners. Far-North: /hanalei-bridge.',
        'Process: /menus. Kids: /kids-menus.',
      ],
      faqs: [
        {
          q: 'Same as /catering/family-style?',
          a: 'That page is the service. This page is the menu — Princeville kitchen at inquiry.',
        },
        {
          q: 'North Shore platters in surf season?',
          a: 'Bridge clause still applies. See /hanalei-bridge.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast on a Kauai estate — morning food, inquiry, both shores.',
      title: 'Breakfast on a Kauai estate | myCHEF',
      description:
        'Breakfast menus in Poʻipū and Princeville. Inquiry stage. Distinct from /events/brunch. Stay Chef mornings live on /vacation-chef.',
      lede:
        'Eggs, fruit, South sun or North mist. /events/brunch is the occasion. This URL is the morning menu.',
      photo: 'menuBreakfastKauai',
      body: [
        'Brunch occasion: /events/brunch. Multi-day: /vacation-chef. Inquiry stage.',
        'Far-North breakfast still inherits /hanalei-bridge. Process: /menus.',
      ],
      faqs: [
        {
          q: 'Same as estate brunch?',
          a: 'That occasion is /events/brunch. This page is the breakfast menu — Princeville kitchen at inquiry.',
        },
        {
          q: 'Can I book breakfast this month?',
          a: 'Inquiry list with the shore.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch on Kauai — midday in Kapaʻa and estate kitchens, inquiry.',
      title: 'Lunch on Kauai — midday, inquiry | myCHEF',
      description:
        'Lunch menus in Kapaʻa houses and Princeville or Poʻipū estates. Inquiry stage. Midday food. Not the dinner door.',
      lede:
        'A shorter arc. East-side Kapaʻa or an estate kitchen. Inquiry. This URL is lunch so /catering keeps the evening.',
      photo: 'menuLunchKauai',
      body: [
        'Dinner is this host’s home and /catering. Stay Chef: /vacation-chef. Kapaʻa: /kapaa. East-side is closer to base and still a real booking.',
        'Process: /menus. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Cheaper than dinner?',
          a: 'Often a shorter arc. Still a written quote. See /pricing — Princeville kitchen at inquiry.',
        },
        {
          q: 'Picnic lunch for a hike?',
          a: 'Not a published packed-lunch SKU. Meal prep stays gated — /meal-prep.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course on the Kohala Coast — designed per table, west side.',
      title: 'A three-course on the Kohala Coast | myCHEF',
      description:
        'Three-course menus in Kona and Kohala houses. Inquiry stage. Designed per table. East side is a different day.',
      lede:
        'Kanpachi crudo, a sear, a close. Inquiry. The sample on /menus is an example. This URL is the three-course as its own document.',
      photo: 'menuThreeBigisland',
      body: [
        'Process: /menus. Plated: /catering/plated. Coffee origin: /coffee-act-198. East side: /east-side.',
        'Dietary: /dietary. West-side: /kohala-corridor.',
      ],
      faqs: [
        {
          q: 'Is this the sample on /menus?',
          a: 'That is an example. This page is the SKU. Every table is still designed — Waikoloa kitchen. Hilo is never implied.',
        },
        {
          q: 'Hilo three-course?',
          a: 'Quote-only dedicated day. See /east-side.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu on west-side Hawaiʻi Island — platters on lava.',
      title: 'A family-style menu on west-side Hawaiʻi Island | myCHEF',
      description:
        'Family-style menus in Kona and Kohala. Inquiry stage. Distinct from /catering/family-style. East side is a different day.',
      lede:
        'Platters on lava. The service format is next door. Not a Hilo add-on.',
      photo: 'menuFamilyBigisland',
      body: [
        'Service format: /catering/family-style. Welcome dinners: /events/welcome-dinners. West-side: /kohala-corridor.',
        'Kids: /kids-menus. Process: /menus. East side: /east-side.',
      ],
      faqs: [
        {
          q: 'Same as /catering/family-style?',
          a: 'That page is the service. This page is the menu — Waikoloa kitchen. Hilo is never implied.',
        },
        {
          q: 'Kids on lava at noon?',
          a: 'Shade is the house. See /kids-menus.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast on west-side Hawaiʻi Island — morning food, not brunch.',
      title: 'Breakfast on west-side Hawaiʻi Island | myCHEF',
      description:
        'Breakfast menus in Kona and Kohala villas. Inquiry stage. Distinct from /events/brunch. Stay Chef mornings live on /vacation-chef. East side is a different day.',
      lede:
        'Eggs, fruit, breakfast fish, hard sun. Coffee cherries on a side board if the house has them — origin labeled when the law requires it.',
      photo: 'menuBreakfastBigisland',
      body: [
        'Brunch occasion: /events/brunch. Multi-day: /vacation-chef. Coffee origin: /coffee-act-198.',
        'Ironman weeks pack town — /ironman-weeks. Process: /menus.',
      ],
      faqs: [
        {
          q: 'Same as west-side brunch?',
          a: 'That occasion is /events/brunch. This page is the breakfast menu — Waikoloa kitchen. Hilo is never implied.',
        },
        {
          q: 'Kona coffee tasting with breakfast?',
          a: 'Coffee may be on the crust. A farm tour is not a SKU. See /coffee-act-198.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in a Waikoloa house — midday, west side, inquiry.',
      title: 'Lunch in a Waikoloa house | myCHEF',
      description:
        'Lunch menus in Waikoloa and Kona houses. Inquiry stage. Midday food. Not the dinner door. East side is a different day.',
      lede:
        'A shorter arc than dinner. Hard sun. This URL is lunch so /catering keeps the evening. Not a Hilo add-on.',
      photo: 'menuLunchBigisland',
      body: [
        'Dinner is this host’s home and /catering. Stay Chef: /vacation-chef. Waikoloa: /waikoloa. East side: /east-side.',
        'Process: /menus. Ironman weeks: /ironman-weeks.',
      ],
      faqs: [
        {
          q: 'Cheaper than dinner?',
          a: 'Often a shorter arc. Still a written quote. See /pricing — Waikoloa kitchen. Hilo is never implied.',
        },
        {
          q: 'Volcano picnic lunch from Waikoloa?',
          a: 'Not a west-side errand. East side is dedicated staffing. See /east-side.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
};

export function getMenuSkuPage(island: IslandId, slug: string): MenuSkuPage | undefined {
  return menuSkuPages[island].find((row) => row.slug === slug);
}
