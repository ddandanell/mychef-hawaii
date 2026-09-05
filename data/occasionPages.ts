import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import { OCCASION_EXTRA_SLUGS, occasionExtras } from './occasionExtras';
import type { UniqueCell } from './uniqueCells';

/**
 * Occasion cells under /events/:slug — not catering clones.
 * Do not put money catering keywords in titles.
 */

export const OCCASION_SLUGS = ['birthdays', 'welcome-dinners', 'retreats', ...OCCASION_EXTRA_SLUGS] as const;
export type OccasionSlug = (typeof OCCASION_SLUGS)[number];

export interface OccasionPage extends UniqueCell {
  slug: OccasionSlug;
}

export const occasionPages: Record<IslandId, OccasionPage[]> = {
  oahu: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners in an Oahu house — not a restaurant buyout.',
      title: 'Birthday dinners in an Oahu house | myCHEF',
      description:
        'Staffed birthday tables in Kahala dining rooms and Ko Olina villas. About 10–75 guests. The catering keyword stays on /catering.',
      lede:
        'The house, a simple dessert, the guest list you actually have. Not a buyout downtown. /events is the occasion index; this page is the birthday.',
      photo: 'occBirthdayOahu',
      body: [
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) is /catering. This URL is the birthday so those titles do not collide.`,
        'Kahala dining rooms and Ko Olina villas are the usual rooms. Anniversaries run the same kitchen. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Cake?',
          a: 'A dessert course we plate. A bakery cake you bring is fine. We do not print a fake bakery brand.',
        },
        {
          q: 'Same as villa events?',
          a: '/events is the index. This page is the birthday night.',
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Oahu welcome dinners — first night of the villa week.',
      title: 'Oahu welcome dinners — first night of the villa week | myCHEF',
      description:
        'Arrival-night grazing or family-style in Ko Olina, Kahala and Kailua. Wedding-week stacks live on /weddings. Not the catering keyword.',
      lede:
        'Bags in the hall. The room still landing. Family-style fish, not a seated reception. The week itself is a different door.',
      photo: 'occWelcomeOahu',
      body: [
        'Ko Olina short-stay weeks often start here. Kahala houses too. Wedding welcome nights that stack into a weekend are a line on /weddings — this page is the first night as its own product.',
        'Stay Chef weeks: /vacation-chef. Legal short-stay fact: /short-stay.',
      ],
      faqs: [
        {
          q: 'Same day as landing?',
          a: 'Yes if we have the corridor and the headcount. We still arrive about three hours before service.',
        },
        {
          q: 'Grazing or plated?',
          a: 'Usually family-style or grazing. Plated is a dinner. See /menus.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Oahu retreat cooking — full-board days in houses.',
      title: 'Oahu retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Oahu villa offsites. Not HCC citywides. Dietary designed in. Ko Olina and Gold Coast houses.',
      lede:
        'Breakfast through dinner in the house. Laptops away from the pass. Not a convention-centre play while citywides are closed.',
      photo: 'occRetreatOahu',
      body: [
        'HCC citywides are closed through 2027 and are not our product — see /conventions. A house offsite of 10–75 is. Dietary is table stakes, claimed only when true — /dietary.',
        'Multi-day rates: /vacation-chef. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Can you feed a production crew?',
          a: 'Call-time breakfasts in a house, yes. A stage downtown, no.',
        },
        {
          q: 'Sony Open week?',
          a: 'Calendar awareness, not an affiliation. Ask early.',
        },
      ],
      related: [
        { path: '/conventions', label: 'Not MICE' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.oahu,
  ],
  maui: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday gatherings on a Maui lawn — Wailea and West Maui houses.',
      title: 'Birthday gatherings on a Maui lawn | myCHEF',
      description:
        'Staffed birthday tables in Wailea, Kīhei and West Maui. About 10–75. The catering keyword stays on /catering.',
      lede:
        'Grass, identical plates, a simple dessert. Not a restaurant buyout. /events is the index; this page is the birthday.',
      photo: 'occBirthdayMaui',
      body: [
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) is /catering. This URL is the birthday night.`,
        'Wet-weather backup is written for lawns. Kīhei family houses and Wailea residences. See /south-maui.',
      ],
      faqs: [
        {
          q: 'Kids at a lawn birthday?',
          a: 'Yes — /kids-menus. Headcount still /guest-counts.',
        },
        {
          q: 'Lahaina birthday?',
          a: 'West Maui houses with kitchens. See /lahaina for how we name that.',
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Maui welcome dinners — first night in Wailea or West Maui.',
      title: 'Maui welcome dinners — first night of the villa week | myCHEF',
      description:
        'Arrival-night grazing in Wailea, Kapalua and Kāʻanapali. Wedding-week stacks live on /wedding-week. Not the catering keyword.',
      lede:
        'Travel clothes, family-style fish, the ice-breaker before the week. The reception is a different line.',
      photo: 'occWelcomeMaui',
      body: [
        'Wedding welcome nights stack on /wedding-week as their own line. This page is the first night when the week is a villa stay, not a four-line wedding.',
        'Stay Chef: /vacation-chef. Traffic: /west-maui.',
      ],
      faqs: [
        {
          q: 'Same as the wedding welcome?',
          a: 'Same kitchen. Wedding welcome is a line on /wedding-week. This page is the villa-week arrival.',
        },
        {
          q: 'Landing at OGG and eating in Kapalua that night?',
          a: 'If we have the crew and the corridor. West Maui Saturday traffic is planned into arrival.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Maui retreat cooking — full-board days in South and West Maui houses.',
      title: 'Maui retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Maui villa offsites. Not ballrooms. Dietary designed in. Wailea, Kapalua, Kīhei.',
      lede:
        'Three meals in the house. The lawn is optional. This is not a hotel conference.',
      photo: 'occRetreatMaui',
      body: [
        'South Maui and West Maui houses that actually cook. Dietary is table stakes — /dietary. Multi-day: /vacation-chef.',
        'Production crews in residences are this product. Convention citywides are not.',
      ],
      faqs: [
        {
          q: 'Full-board vegan week?',
          a: 'Designed in advance. Claimed only when the kitchen can hold it.',
        },
        {
          q: 'Upcountry retreat?',
          a: 'Surcharge zone. Quoted with the menu. See /coverage.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    ...occasionExtras.maui,
  ],
  kauai: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners on a Kauai estate — both shores, inquiry.',
      title: 'Birthday dinners on a Kauai estate | myCHEF',
      description:
        'Staffed birthday tables in Princeville, Hanalei and Poʻipū. About 10–75. Inquiry stage. Catering stays on /catering.',
      lede:
        'An estate dessert course looking into a valley, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occBirthdayKauai',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) is /catering. This URL is the birthday.`,
        'Far-North inherits /hanalei-bridge. Guest counts: /guest-counts. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry list with the shore and the dates.',
        },
        {
          q: 'Kids on the terrace?',
          a: 'Yes — /kids-menus. Weather still applies on the North.',
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Kauai welcome dinners — first night, both shores.',
      title: 'Kauai welcome dinners — first night of the estate week | myCHEF',
      description:
        'Arrival-night family-style in Poʻipū or Princeville. Inquiry stage. Wedding-week stacks live on /wedding-week.',
      lede:
        'The first evening after Līhuʻe. Family-style fish. The week stack is optional.',
      photo: 'occWelcomeKauai',
      body: [
        'Poʻipū pool kitchens are the usual South arrival. Princeville for the North. Far-North still inherits the bridge clause if you keep driving.',
        'Stay Chef: /vacation-chef. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Same day as the flight?',
          a: 'If the crew exists and the shore is named. Inquiry, not a fake instant confirm.',
        },
        {
          q: 'Wedding welcome instead?',
          a: 'That line lives on /wedding-week. This page is the villa-week arrival.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Kauai retreat cooking — full-board days, inquiry.',
      title: 'Kauai retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Kauai estate offsites. Inquiry stage. Dietary designed in. Both shores. Not a ballroom.',
      lede:
        'Breakfast through dinner in the house. The mist and the fire plan follow the shore.',
      photo: 'occRetreatKauai',
      body: [
        'Inquiry stage. Dietary is table stakes, claimed only when true — /dietary. Far-North retreats inherit /hanalei-bridge.',
        'Multi-day: /vacation-chef. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Can you hold a silent retreat kitchen?',
          a: 'We cook. House rules are yours. Tell us the hours.',
        },
        {
          q: 'Vegan full-board?',
          a: 'Designed in advance. We will not claim it as theatre.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.kauai,
  ],
  bigisland: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners on the Kohala Coast — west side first.',
      title: 'Birthday dinners on the Kohala Coast | myCHEF',
      description:
        'Staffed birthday tables on Kona–Kohala terraces. About 10–75. Inquiry stage. East side is a different day. Catering stays on /catering.',
      lede:
        'Eight to forty on lava, a simple dessert, Mauna Kea faint. Not a Hilo add-on.',
      photo: 'occBirthdayBigisland',
      body: [
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) is /catering. This URL is the birthday.`,
        'West-side radius: /kohala-corridor. East side: /east-side. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Hilo birthday?',
          a: 'Quote-only with dedicated staffing. See /east-side.',
        },
        {
          q: 'Ironman week birthday?',
          a: 'Flag the dates. Town compresses. See /ironman-weeks.',
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Hawaiʻi Island welcome dinners — first night, west side.',
      title: 'Hawaiʻi Island welcome dinners — first night of the villa week | myCHEF',
      description:
        'Arrival-night family-style in Kona and Kohala villas. Inquiry stage. Wedding-week stacks live on /weddings. Not a Hilo add-on.',
      lede:
        'KOA to the villa. Family-style fish. Hard sun still in the window. East side is a different day.',
      photo: 'occWelcomeBigisland',
      body: [
        'Kona town and Kohala resort residences. Stay Chef weeks: /vacation-chef. Event weeks: /ironman-weeks.',
        'Inquiry stage. Published starting prices from $125 a guest.',
      ],
      faqs: [
        {
          q: 'Landing and eating in Waikoloa that night?',
          a: 'If we have the crew. West-side radius, not a round trip from Hilo.',
        },
        {
          q: 'Wedding welcome instead?',
          a: 'That line lives on /weddings. This page is the villa-week arrival.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/kona', label: 'Kona' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Hawaiʻi Island retreat cooking — full-board west-side days.',
      title: 'Hawaiʻi Island retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Kona–Kohala villa offsites. Inquiry stage. Dietary designed in. East side is a different day.',
      lede:
        'Breakfast fish, a small offsite table, lava heat. Not the whole island. Not a ballroom.',
      photo: 'occRetreatBigisland',
      body: [
        'West-side first. Dietary is table stakes — /dietary. Multi-day: /vacation-chef. Coffee origin: /coffee-act-198.',
        'Hilo retreats are quote-only dedicated days. See /east-side.',
      ],
      faqs: [
        {
          q: 'Can you add a Volcano day onto a Waikoloa week?',
          a: 'As its own team day, quoted. Not as an unpaid errand.',
        },
        {
          q: 'Ironman week retreat?',
          a: 'Flag dates early. See /ironman-weeks.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.bigisland,
  ],
};

export function getOccasionPage(island: IslandId, slug: string): OccasionPage | undefined {
  return occasionPages[island].find((row) => row.slug === slug);
}
