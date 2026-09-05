import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog STAFF_SLUGS — quoted add-ons, never buried in a menu price.
 * Distinct from /bar (bartender add-on product) and /mobile-bar (4-hour package).
 */

export const STAFFING_SLUGS = ['servers', 'bartenders', 'butlers'] as const;
export type StaffingSlug = (typeof STAFFING_SLUGS)[number];

export interface StaffingPage extends UniqueCell {
  slug: StaffingSlug;
}

export const staffingPages: Record<IslandId, StaffingPage[]> = {
  oahu: [
    {
      slug: 'servers',
      name: 'Servers',
      h1: 'Servers on Oahu — quoted hourly, never buried in the plate.',
      title: 'Servers on Oahu — quoted hourly | myCHEF',
      description:
        'Server add-ons for Kahala dining rooms and Ko Olina villas. Hourly, itemised. Not folded into the food band. Guest counts decide the crew.',
      lede:
        'A plated twelve needs more hands than a family-style eight. We write the hours. We do not hide them in the catch.',
      photo: 'staffServersOahu',
      body: [
        'Staffing minimums live on /pricing. This URL is the server line so /catering/plated and /bar stay distinct.',
        'Gold Coast dining rooms: /gold-coast. Guest counts: /guest-counts. The food band does not change because a server is on the quote.',
      ],
      faqs: [
        {
          q: 'How many servers for twelve plated?',
          a: 'More than a buffet for the same headcount. We write it on the quote.',
        },
        {
          q: 'Is this the bartender?',
          a: 'Bartenders: /staffing/bartenders. Bar product: /bar. This page is floor service.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
    {
      slug: 'bartenders',
      name: 'Bartenders',
      h1: 'Bartenders on Oahu — an hourly line, not the 4-hour package.',
      title: 'Bartenders on Oahu — an hourly line | myCHEF',
      description:
        'Bartender add-ons for Oahu houses. Hourly, itemised. Distinct from /bar and the 4-hour /mobile-bar package. No theatrical tiki service.',
      lede:
        'Citrus, glassware, the lanai. /bar is the product door. /mobile-bar is four hours. This URL is the hourly bartender so those titles do not collide.',
      photo: 'staffBartendersOahu',
      body: [
        'The bartender add-on product is /bar. The 4-hour package is /mobile-bar. This page is how we quote the person.',
        'We do not sell a theatrical luau bar. Ko Olina and Kahala houses. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: '/bar is the product. This page is the hourly line. /mobile-bar is the four-hour package.',
        },
        {
          q: 'Tiki drinks?',
          a: 'We mix what the house wants. We do not staff a theatrical tiki bar we do not run.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/mobile-bar', label: '4-hour package' },
        { path: '/staffing/servers', label: 'Servers' },
      ],
    },
    {
      slug: 'butlers',
      name: 'Butlers',
      h1: 'Butlers on Oahu — quoted only when a bench exists.',
      title: 'Butlers on Oahu — quoted only when a bench exists | myCHEF',
      description:
        'Butler add-ons for Oahu houses. Quoted as a line, never assumed. We will not sell a butler we cannot staff.',
      lede:
        'Water poured, the table set, the pass left to the chef. If we do not have the person, this page stays a quote — not a fake roster.',
      photo: 'staffButlersOahu',
      body: [
        'Servers: /staffing/servers. This URL is butler service so we do not bury a hotel-style promise in a dinner price.',
        'See /what-we-dont-do. Gold Coast houses with real dining rooms are the usual rooms — /gold-coast.',
      ],
      faqs: [
        {
          q: 'Do you always send a butler?',
          a: 'No. It is a quoted add-on. If the bench is empty we say so.',
        },
        {
          q: 'Is this a hotel butler?',
          a: 'No. Residences and villas. We do not impersonate a hotel department.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/gold-coast', label: 'Gold Coast' },
      ],
    },
  ],
  maui: [
    {
      slug: 'servers',
      name: 'Servers',
      h1: 'Servers on Maui — quoted hourly for Wailea and West Maui houses.',
      title: 'Servers on Maui — quoted hourly | myCHEF',
      description:
        'Server add-ons for Wailea, Kapalua and Kīhei. Hourly, itemised. Not folded into the food band. Lawn service is a different count than a dining room.',
      lede:
        'A plated lawn needs more hands than family-style on the lanai. We write the hours. Saturday West Maui traffic is planned into arrival, not into a hidden fee.',
      photo: 'staffServersMaui',
      body: [
        'Staffing minimums: /pricing. Plated: /catering/plated. Guest counts: /guest-counts. Traffic: /west-maui.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This URL is the server line.`,
      ],
      faqs: [
        {
          q: 'Servers on a wet Wailea lawn?',
          a: 'Backup is written. We still quote the hours.',
        },
        {
          q: 'Bartender instead?',
          a: '/staffing/bartenders and /bar. This page is floor service.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
      ],
    },
    {
      slug: 'bartenders',
      name: 'Bartenders',
      h1: 'Bartenders on Maui — hourly on the lanai, not the 4-hour package.',
      title: 'Bartenders on Maui — hourly on the lanai | myCHEF',
      description:
        'Bartender add-ons for Wailea and West Maui. Hourly, itemised. Distinct from /bar and /mobile-bar. No theatrical tiki service.',
      lede:
        'Citrus, the Pacific, the lanai. /bar is the product. /mobile-bar is four hours. This URL is the hourly bartender.',
      photo: 'staffBartendersMaui',
      body: [
        'Product door: /bar. Four-hour package: /mobile-bar. This page is how the person is quoted.',
        'We do not staff a luau bar we do not run. See /what-we-dont-do.',
      ],
      faqs: [
        {
          q: 'Same as /mobile-bar?',
          a: 'That is the four-hour package. This page is the hourly line.',
        },
        {
          q: 'West Maui Saturday bartender?',
          a: 'Arrival is planned. See /west-maui.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/mobile-bar', label: '4-hour package' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'butlers',
      name: 'Butlers',
      h1: 'Butlers on Maui — quoted only when a bench exists.',
      title: 'Butlers on Maui — quoted only when a bench exists | myCHEF',
      description:
        'Butler add-ons for Maui houses. Quoted as a line, never assumed. We will not sell a butler we cannot staff in Wailea or West Maui.',
      lede:
        'The table set, water poured, the chef left at the pass. If the person does not exist, this page stays a quote.',
      photo: 'staffButlersMaui',
      body: [
        'Servers: /staffing/servers. This URL is butler service. We do not impersonate a resort butler department.',
        'See /what-we-dont-do. South Maui houses: /south-maui.',
      ],
      faqs: [
        {
          q: 'Always a butler on a Wailea night?',
          a: 'No. Quoted add-on. Empty Wailea bench means we say so.',
        },
        {
          q: 'Hotel butler?',
          a: 'No. Residences and villas.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'servers',
      name: 'Servers',
      h1: 'Servers on Kauai — quoted hourly, inquiry, both shores.',
      title: 'Servers on Kauai — quoted hourly, inquiry | myCHEF',
      description:
        'Server add-ons for Princeville and Poʻipū. Inquiry stage. Hourly, itemised. Far-North inherits the bridge clause.',
      lede:
        'An estate table needs hands. Inquiry. We write the hours when the crew exists. We will not fake a roster.',
      photo: 'staffServersKauai',
      body: [
        'Staffing minimums: /pricing. Far-North: /hanalei-bridge. Guest counts: /guest-counts.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This URL is the server line.`,
      ],
      faqs: [
        {
          q: 'Can I book servers this month?',
          a: 'Inquiry list with the shore. We will not fake instant confirm.',
        },
        {
          q: 'Hanalei in surf season?',
          a: 'Bridge clause still applies. See /hanalei-bridge.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
      ],
    },
    {
      slug: 'bartenders',
      name: 'Bartenders',
      h1: 'Bartenders on Kauai — hourly, inquiry, not the 4-hour package.',
      title: 'Bartenders on Kauai — hourly, inquiry | myCHEF',
      description:
        'Bartender add-ons for Kauai estates. Inquiry stage. Distinct from /bar and /mobile-bar. No theatrical tiki service.',
      lede:
        'Citrus on a wet terrace or a South Shore counter. Inquiry. /bar is the product. This URL is the hourly line.',
      photo: 'staffBartendersKauai',
      body: [
        'Product: /bar. Package: /mobile-bar. This page is the person. Inquiry stage.',
        'Far-North still inherits /hanalei-bridge.',
      ],
      faqs: [
        {
          q: 'Same as /mobile-bar?',
          a: 'That is four hours. This page is the hourly line. Inquiry.',
        },
        {
          q: 'Tiki bar on the North?',
          a: 'We do not staff a theatrical tiki bar. See /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/mobile-bar', label: '4-hour package' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'butlers',
      name: 'Butlers',
      h1: 'Butlers on Kauai — quoted only when a bench exists, inquiry.',
      title: 'Butlers on Kauai — quoted only when a bench exists | myCHEF',
      description:
        'Butler add-ons for Kauai estates. Inquiry stage. Quoted as a line. We will not sell a butler we cannot staff.',
      lede:
        'An empty Princeville table being set. If the person does not exist, this page stays a quote. Inquiry.',
      photo: 'staffButlersKauai',
      body: [
        'Servers: /staffing/servers. Inquiry stage. We do not impersonate a resort butler department.',
        'See /what-we-dont-do. Both shores. Far-North: /hanalei-bridge.',
      ],
      faqs: [
        {
          q: 'Always a butler?',
          a: 'No. Quoted add-on. Empty Princeville bench means we say so. Inquiry.',
        },
        {
          q: 'Can I book a butler now?',
          a: 'Inquiry. We will not fake a live roster.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'servers',
      name: 'Servers',
      h1: 'Servers on the Kohala Coast — quoted hourly, west side, inquiry.',
      title: 'Servers on the Kohala Coast — quoted hourly | myCHEF',
      description:
        'Server add-ons for Kona and Kohala houses. Inquiry stage. Hourly, itemised. East side is a different day.',
      lede:
        'Lava, plated kanpachi, extra hands. Inquiry. We write the hours. We will not send a west-side crew to Hilo as an errand.',
      photo: 'staffServersBigisland',
      body: [
        'Staffing minimums: /pricing. West-side: /kohala-corridor. East side: /east-side. Ironman weeks: /ironman-weeks.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This URL is the server line.`,
      ],
      faqs: [
        {
          q: 'Hilo servers from Kona?',
          a: 'No. East side is dedicated staffing. See /east-side.',
        },
        {
          q: 'Ironman week?',
          a: 'Flag dates. Town compresses. See /ironman-weeks.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
      ],
    },
    {
      slug: 'bartenders',
      name: 'Bartenders',
      h1: 'Bartenders on the Kohala Coast — hourly, west side, inquiry.',
      title: 'Bartenders on the Kohala Coast — hourly, inquiry | myCHEF',
      description:
        'Bartender add-ons for Kona and Kohala. Inquiry stage. Distinct from /bar and /mobile-bar. East side is a different day. No theatrical tiki service.',
      lede:
        'Citrus on lava, hard sun. /bar is the product. This URL is the hourly line. Not Hilo.',
      photo: 'staffBartendersBigisland',
      body: [
        'Product: /bar. Package: /mobile-bar. This page is the person. Inquiry stage. West-side first.',
        'We do not staff a theatrical tiki bar. See /what-we-dont-do.',
      ],
      faqs: [
        {
          q: 'Same as /mobile-bar?',
          a: 'That is four hours. This page is the hourly line.',
        },
        {
          q: 'Hilo bartender?',
          a: 'Quote-only dedicated staffing. See /east-side.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/mobile-bar', label: '4-hour package' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'butlers',
      name: 'Butlers',
      h1: 'Butlers on Hawaiʻi Island — quoted only when a bench exists.',
      title: 'Butlers on Hawaiʻi Island — quoted only when a bench exists | myCHEF',
      description:
        'Butler add-ons for Kona and Kohala houses. Inquiry stage. Quoted as a line. East side is a different day. We will not sell a butler we cannot staff.',
      lede:
        'A lava terrace table being set. If the person does not exist, this page stays a quote. Not a resort butler department.',
      photo: 'staffButlersBigisland',
      body: [
        'Servers: /staffing/servers. West-side first. See /what-we-dont-do. East side: /east-side.',
        'Inquiry stage. We do not impersonate a hotel butler line.',
      ],
      faqs: [
        {
          q: 'Always a butler in Waikoloa?',
          a: 'No. Quoted add-on. Empty Waikoloa bench means we say so.',
        },
        {
          q: 'Hilo butler?',
          a: 'Quote-only east side even for dinners. See /east-side.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};

export function getStaffingPage(island: IslandId, slug: string): StaffingPage | undefined {
  return staffingPages[island].find((row) => row.slug === slug);
}
