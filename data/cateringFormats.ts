import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog CATERING_SLUGS as unique format documents.
 * Titles must never be “{island} catering {format}”.
 */

export const CATERING_FORMAT_SLUGS = ['bbq', 'plated', 'family-style', 'buffet', 'grazing', 'drop-off'] as const;
export type CateringFormatSlug = (typeof CATERING_FORMAT_SLUGS)[number];

export interface CateringFormatPage extends UniqueCell {
  slug: CateringFormatSlug;
}

export const cateringFormats: Record<IslandId, CateringFormatPage[]> = {
  oahu: [
    {
      slug: 'bbq',
      name: 'BBQ',
      h1: 'BBQ on an Oahu lawn — Ko Olina and Kahala.',
      title: 'BBQ on an Oahu lawn — Ko Olina and Kahala | myCHEF',
      description:
        'Staffed BBQ in Ko Olina villas and Kahala gardens. Grill as a format, not a keyword clone. The catering door stays on /catering.',
      lede:
        'Whole fish on the grill, a lawn, the trade wind. Not a restaurant patio. Staffing still sits on the quote.',
      photo: 'fmtBbqOahu',
      body: [
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) is /catering. This URL is the grill format so those titles do not collide.`,
        'Drop-off is a different product — /catering/drop-off. Guest counts: /guest-counts. Wet-weather backup is written for lawns.',
      ],
      faqs: [
        {
          q: 'Is this cheaper than plated?',
          a: 'Food band is still the island CORE card. Staffing changes. Quote in writing.',
        },
        {
          q: 'Hotel grill?',
          a: 'If the house has a grill we can work. Most suites do not.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/ko-olina', label: 'Ko Olina' },
        { path: '/catering/drop-off', label: 'Drop-off' },
      ],
    },
    {
      slug: 'plated',
      name: 'Plated',
      h1: 'Plated villa service on Oahu — a restaurant arc in the house.',
      title: 'Plated villa service on Oahu | myCHEF',
      description:
        'Coursed seated service in Kahala dining rooms and Ko Olina villas. Needs more servers than a buffet. Not the catering money keyword.',
      lede:
        'Courses paced to the table. The Gold Coast dining room is the usual room. Staffing is a different line from the food band.',
      photo: 'fmtPlatedOahu',
      body: [
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This URL is plated service.`,
        'Rehearsal dinners often run plated — /rehearsal-dinners. Family-style is /catering/family-style. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'How many servers?',
          a: 'More than a buffet for the same headcount. We write it on the quote.',
        },
        {
          q: 'Can two of us sit plated?',
          a: 'Yes. See /honeymoon-dinners — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/catering/family-style', label: 'Family-style' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service in Oahu houses — platters down the table.',
      title: 'Family-style service in Oahu houses | myCHEF',
      description:
        'Shared platters in Kahala dining rooms and Ko Olina villas. Usual estate night when the list is about 10–20. Not the catering keyword.',
      lede:
        'Platters, not a pass. Welcome dinners often run this way. The plated page is next door.',
      photo: 'fmtFamilyOahu',
      body: [
        'Welcome dinners: /events/welcome-dinners. Villa parties: /events/villa-parties. This URL is the format.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) remains /catering.`,
      ],
      faqs: [
        {
          q: 'Kids at a family-style table?',
          a: 'Yes — /kids-menus. Same platters, simpler plates beside.',
        },
        {
          q: 'Same as grazing?',
          a: 'Grazing is boards and pūpū — /catering/grazing. This page is seated platters.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/catering/grazing', label: 'Grazing' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'buffet',
      name: 'Buffet',
      h1: 'Buffet service in Oahu houses — stations that stay hot.',
      title: 'Buffet service in Oahu houses | myCHEF',
      description:
        'Staffed buffet in Kahala and Ko Olina houses. Best from about 20 guests. Not a hotel banquet. Not the catering money keyword.',
      lede:
        'Guests move. Stations stay hot. A hundred-guest lawn is still quoted, not promised from a Tuesday dinner.',
      photo: 'fmtBuffetOahu',
      body: [
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) is /catering. This URL is buffet as a format.`,
        'Retreat full-board: /retreat-catering. Guest counts: /guest-counts. Drop-off is not this product.',
      ],
      faqs: [
        {
          q: 'Is buffet cheaper?',
          a: 'Food band is the CORE card. Staffing is usually lighter than plated. Quote in writing.',
        },
        {
          q: 'Convention buffet?',
          a: 'No. HCC citywides are closed through 2027. See /conventions.',
        },
      ],
      related: [
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
        { path: '/conventions', label: 'Not MICE' },
      ],
    },
    {
      slug: 'grazing',
      name: 'Grazing',
      h1: 'Grazing boards in an Oahu villa — pūpū, not a seated dinner.',
      title: 'Grazing boards in an Oahu villa | myCHEF',
      description:
        'Styled boards and passed small plates in Ko Olina and Kahala. Cocktail hour or terrace welcome. Not the catering money keyword.',
      lede:
        'Boards, passed pieces, the room still landing. A seated dinner is a different format. Grazing tables are a market reference, labeled when we quote them.',
      photo: 'fmtGrazingOahu',
      body: [
        'Welcome dinners often start here — /events/welcome-dinners. Family-style is seated platters. This URL is the board format.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) remains /catering.`,
      ],
      faqs: [
        {
          q: 'Is grazing enough for dinner?',
          a: 'Say so on the brief. Grazing can be the night or the first hour. We write which.',
        },
        {
          q: 'Pūpū piece minimums?',
          a: 'Quoted. Market references are labeled. Not invented as a standing carte.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/catering/family-style', label: 'Family-style' },
        { path: '/bar', label: 'Bar add-on' },
      ],
    },
    {
      slug: 'drop-off',
      name: 'Drop-off',
      h1: 'Drop-off is not staffed service on Oahu.',
      title: 'Drop-off is not staffed service on Oahu | myCHEF',
      description:
        'Drop-off on Oahu is a different product from staffed catering. Inquiry only. We will not sell drop-off as if a chef stays.',
      lede:
        'Trays at the door, no pass, no cleanup crew. If you want a chef in the house, that is /catering or /. This page is the refusal to blur them.',
      photo: 'fmtDropoffOahu',
      body: [
        'Staffed catering is /catering. Private chef dinner is this host’s home. Drop-off stays gated until we publish a real drop-off bench — we do not have one as a standing SKU.',
        'If a night needs trays and no staff, ask. Do not expect the CORE dinner band. See /what-we-dont-do.',
      ],
      faqs: [
        {
          q: 'Can you leave trays and go?',
          a: 'Inquiry only. It is not the staffed product and it is not priced as one.',
        },
        {
          q: 'Is this cheaper catering?',
          a: 'It is a different product. We will not discount staffed service into drop-off language.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
  ],
  maui: [
    {
      slug: 'bbq',
      name: 'BBQ',
      h1: 'BBQ on a Maui lawn — Wailea and West Maui.',
      title: 'BBQ on a Maui lawn — Wailea and West Maui | myCHEF',
      description:
        'Staffed BBQ in Wailea, Kīhei and West Maui houses. Grill as a format. Wet-weather backup written. The catering door stays on /catering.',
      lede:
        'Grill, grass, identical plates. Saturday Honoapiʻilani traffic is planned into arrival. Not a hotel luau we do not run.',
      photo: 'fmtBbqMaui',
      body: [
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) is /catering. This URL is the grill format.`,
        'West Maui: /west-maui. South Maui: /south-maui. Drop-off is /catering/drop-off — a different product.',
      ],
      faqs: [
        {
          q: 'Luau on the lawn?',
          a: 'We grill. We do not sell a theatrical luau we do not staff.',
        },
        {
          q: 'Rain?',
          a: 'Backup is written. See /south-maui.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'plated',
      name: 'Plated',
      h1: 'Plated villa service on Maui — courses on a Wailea table.',
      title: 'Plated villa service on Maui | myCHEF',
      description:
        'Coursed seated service in Wailea dining rooms and Kapalua lanais. Needs more servers than a buffet. Not the catering money keyword.',
      lede:
        'A restaurant arc, off-site, to the table. Rehearsal dinners often run this way. Staffing is a separate line.',
      photo: 'fmtPlatedMaui',
      body: [
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This URL is plated service.`,
        'Rehearsal: /rehearsal-dinners. Family-style: /catering/family-style. Traffic: /west-maui.',
      ],
      faqs: [
        {
          q: 'Lawn plated in wind?',
          a: 'We write a backup. Plated wants a table that holds.',
        },
        {
          q: 'Two of us?',
          a: 'Yes. See /honeymoon-dinners — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/catering/family-style', label: 'Family-style' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service in Maui villas — platters on the lanai.',
      title: 'Family-style service in Maui villas | myCHEF',
      description:
        'Shared platters in Wailea, Kapalua and Kīhei. Usual villa night for about 10–20. Not the catering keyword.',
      lede:
        'Platters down the table. Welcome dinners often run this way. The plated page is next door.',
      photo: 'fmtFamilyMaui',
      body: [
        'Welcome: /events/welcome-dinners. Villa parties: /events/villa-parties. This URL is the format.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) remains /catering.`,
      ],
      faqs: [
        {
          q: 'Kids?',
          a: 'Yes — /kids-menus.',
        },
        {
          q: 'Same as grazing?',
          a: 'Grazing is boards — /catering/grazing. This is seated platters.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/catering/grazing', label: 'Grazing' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'buffet',
      name: 'Buffet',
      h1: 'Buffet service in Maui villas — stations on a South Maui lawn.',
      title: 'Buffet service in Maui villas | myCHEF',
      description:
        'Staffed buffet in Wailea, Kīhei and West Maui houses. Best from about 20 guests. Not a hotel banquet. Not the catering money keyword.',
      lede:
        'Guests move. Stations stay hot. Wet-weather backup is written. Ballrooms are not the product.',
      photo: 'fmtBuffetMaui',
      body: [
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) is /catering. This URL is buffet as a format.`,
        'Retreat kitchens: /retreat-catering. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Hotel conference buffet?',
          a: 'No. Residences and villas.',
        },
        {
          q: 'Cheaper than plated?',
          a: 'Food band is CORE. Staffing is usually lighter. Quote in writing.',
        },
      ],
      related: [
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'grazing',
      name: 'Grazing',
      h1: 'Grazing boards in a Maui villa — first hour on the lanai.',
      title: 'Grazing boards in a Maui villa | myCHEF',
      description:
        'Styled boards and passed small plates in Wailea and West Maui. Cocktail hour or arrival night. Not the catering money keyword.',
      lede:
        'Boards, travel clothes, the ice-breaker. A seated dinner is a different format.',
      photo: 'fmtGrazingMaui',
      body: [
        'Welcome dinners often start here — /events/welcome-dinners. Family-style is seated. This URL is the board format.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) remains /catering.`,
      ],
      faqs: [
        {
          q: 'Enough for dinner?',
          a: 'Say so on the brief. We write grazing-as-dinner or grazing-as-hour.',
        },
        {
          q: 'West Maui arrival grazing after OGG?',
          a: 'If we have the crew. Traffic is planned. See /west-maui.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/bar', label: 'Bar add-on' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'drop-off',
      name: 'Drop-off',
      h1: 'Drop-off is not staffed service on Maui.',
      title: 'Drop-off is not staffed service on Maui | myCHEF',
      description:
        'Drop-off on Maui is a different product from staffed catering. Inquiry only. We will not sell drop-off as if a chef stays in Wailea.',
      lede:
        'Trays at the villa door. No pass. No cleanup. If you want a chef, that is /catering or /. This page keeps the words honest.',
      photo: 'fmtDropoffMaui',
      body: [
        'Staffed catering is /catering. Stay Chef weeks are /vacation-chef. Drop-off is not a standing SKU and is not priced as the CORE dinner.',
        'See /what-we-dont-do. We will not discount staffed service into drop-off language.',
      ],
      faqs: [
        {
          q: 'Can you leave trays in Kīhei and go?',
          a: 'Inquiry only. Not the staffed product.',
        },
        {
          q: 'Is this cheaper catering?',
          a: 'It is a different product. Ask; do not expect the dinner band.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'bbq',
      name: 'BBQ',
      h1: 'BBQ on a Kauai estate lawn — inquiry, both shores.',
      title: 'BBQ on a Kauai estate lawn — inquiry | myCHEF',
      description:
        'Staffed BBQ in Princeville, Hanalei and Poʻipū. Inquiry stage. Grill as a format. Far-North inherits the bridge clause. Not the catering keyword.',
      lede:
        'Grill, kiawe, pale cliffs or misted mountains. Inquiry. We do not sell a theatrical luau we do not staff.',
      photo: 'fmtBbqKauai',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) is /catering. This URL is the grill format.`,
        'Far-North: /hanalei-bridge. Drop-off is a different product. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Luau?',
          a: 'We grill. We do not staff a theatrical luau.',
        },
        {
          q: 'Hanalei BBQ in surf season?',
          a: 'Bridge clause still applies. See /hanalei-bridge.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'plated',
      name: 'Plated',
      h1: 'Plated estate service on Kauai — inquiry, both shores.',
      title: 'Plated estate service on Kauai — inquiry | myCHEF',
      description:
        'Coursed seated service in Princeville and Poʻipū. Inquiry stage. Needs more servers than a buffet. Not the catering money keyword.',
      lede:
        'Courses on an estate table. North mist or South sun. Inquiry. Rehearsal dinners often run this way.',
      photo: 'fmtPlatedKauai',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This URL is plated service.`,
        'Rehearsal: /rehearsal-dinners. Far-North still inherits /hanalei-bridge.',
      ],
      faqs: [
        {
          q: 'Can I book plated this month?',
          a: 'Inquiry list with the shore. We will not fake a live roster.',
        },
        {
          q: 'Two of us?',
          a: 'Yes. See /honeymoon-dinners — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/princeville', label: 'Princeville' },
        { path: '/catering/family-style', label: 'Family-style' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service on Kauai estates — platters, both shores.',
      title: 'Family-style service on Kauai estates | myCHEF',
      description:
        'Shared platters in Princeville and Poʻipū. Inquiry stage. Usual estate night for about 10–20. Not the catering keyword.',
      lede:
        'Platters down the table. Welcome dinners often run this way. Inquiry.',
      photo: 'fmtFamilyKauai',
      body: [
        'Welcome: /events/welcome-dinners. This URL is the format. Far-North: /hanalei-bridge.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) remains /catering.`,
      ],
      faqs: [
        {
          q: 'Kids?',
          a: 'Yes — /kids-menus. Weather still applies on the North.',
        },
        {
          q: 'Same as grazing?',
          a: 'Grazing is boards. This is seated platters.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/catering/grazing', label: 'Grazing' },
      ],
    },
    {
      slug: 'buffet',
      name: 'Buffet',
      h1: 'Buffet service on Kauai estates — inquiry, stations that stay hot.',
      title: 'Buffet service on Kauai estates — inquiry | myCHEF',
      description:
        'Staffed buffet in Princeville and Poʻipū. Inquiry stage. Best from about 20 guests. Not a hotel banquet. Not the catering money keyword.',
      lede:
        'Guests move. Stations stay hot. Inquiry. Estate scale, not a ballroom.',
      photo: 'fmtBuffetKauai',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) is /catering. This URL is buffet as a format.`,
        'Retreat kitchens: /retreat-catering. Guest counts: /guest-counts. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Līhuʻe hotel buffet?',
          a: 'No. Estates and villas.',
        },
        {
          q: 'Far-North buffet?',
          a: 'Bridge clause still applies. See /hanalei-bridge.',
        },
      ],
      related: [
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'grazing',
      name: 'Grazing',
      h1: 'Grazing boards on a Kauai estate — first hour, both shores.',
      title: 'Grazing boards on a Kauai estate | myCHEF',
      description:
        'Styled boards and passed small plates in Poʻipū and Princeville. Inquiry stage. Arrival night or cocktail hour. Not the catering keyword.',
      lede:
        'Boards after Līhuʻe. Family-style may follow. Inquiry.',
      photo: 'fmtGrazingKauai',
      body: [
        'Welcome dinners often start here — /events/welcome-dinners. This URL is the board format.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) remains /catering.`,
      ],
      faqs: [
        {
          q: 'Enough for dinner?',
          a: 'Say so on the brief. We write which — Princeville kitchen at inquiry.',
        },
        {
          q: 'Same day as the flight?',
          a: 'If the crew exists and the shore is named. Inquiry.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/bar', label: 'Bar add-on' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'drop-off',
      name: 'Drop-off',
      h1: 'Drop-off is not staffed service on Kauai.',
      title: 'Drop-off is not staffed service on Kauai | myCHEF',
      description:
        'Drop-off on Kauai is a different product from staffed catering. Inquiry only. We will not sell drop-off as if a chef stays.',
      lede:
        'Trays at the estate door. No pass. Inquiry. If you want a chef, that is /catering. This page keeps the words honest.',
      photo: 'fmtDropoffKauai',
      body: [
        'Staffed catering is /catering. Stay Chef is /vacation-chef. Drop-off is not a standing SKU while this department is inquiry.',
        'Far-North still inherits /hanalei-bridge even for a conversation about trays. See /what-we-dont-do.',
      ],
      faqs: [
        {
          q: 'Leave trays in Poʻipū?',
          a: 'Inquiry only. Not the staffed product.',
        },
        {
          q: 'Is this cheaper catering?',
          a: 'It is a different product. We will not blur them.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'bbq',
      name: 'BBQ',
      h1: 'BBQ on a Kohala lava terrace — west side, inquiry.',
      title: 'BBQ on a Kohala lava terrace — west side | myCHEF',
      description:
        'Staffed BBQ on Kona–Kohala terraces. Inquiry stage. Grill as a format. East side is a different day. Not the catering keyword.',
      lede:
        'Grill on lava, hard sun, kanpachi. Not a Hilo add-on. We do not sell a theatrical luau we do not staff.',
      photo: 'fmtBbqBigisland',
      body: [
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) is /catering. This URL is the grill format.`,
        'West-side: /kohala-corridor. East side: /east-side. Ironman weeks: /ironman-weeks.',
      ],
      faqs: [
        {
          q: 'Luau on lava?',
          a: 'We grill. We do not staff a theatrical luau.',
        },
        {
          q: 'Hilo BBQ?',
          a: 'Quote-only dedicated staffing. See /east-side.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/waikoloa', label: 'Waikoloa' },
      ],
    },
    {
      slug: 'plated',
      name: 'Plated',
      h1: 'Plated villa service on the Kohala Coast — west-side courses.',
      title: 'Plated villa service on the Kohala Coast | myCHEF',
      description:
        'Coursed seated service in Kona and Kohala houses. Inquiry stage. Needs more servers than a buffet. East side is a different day. Not the catering keyword.',
      lede:
        'Courses on lava, Mauna Kea faint. Inquiry. Rehearsal dinners often run this way.',
      photo: 'fmtPlatedBigisland',
      body: [
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) is the dinner door. This URL is plated service.`,
        'Rehearsal: /rehearsal-dinners. East side: /east-side.',
      ],
      faqs: [
        {
          q: 'Hilo plated?',
          a: 'Quote-only dedicated day. See /east-side.',
        },
        {
          q: 'Two of us?',
          a: 'Yes. See /honeymoon-dinners — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/kona', label: 'Kona' },
        { path: '/catering/family-style', label: 'Family-style' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service on west-side Hawaiʻi Island — platters on lava.',
      title: 'Family-style service on west-side Hawaiʻi Island | myCHEF',
      description:
        'Shared platters in Kona and Kohala villas. Inquiry stage. Usual west-side night for about 10–20. East side is a different day.',
      lede:
        'Platters down the table. Welcome dinners often run this way. Hard sun still in the window.',
      photo: 'fmtFamilyBigisland',
      body: [
        'Welcome: /events/welcome-dinners. This URL is the format. West-side: /kohala-corridor.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) remains /catering.`,
      ],
      faqs: [
        {
          q: 'Kids on lava at noon?',
          a: 'Shade is the house. See /kids-menus.',
        },
        {
          q: 'Hilo family-style?',
          a: 'Quote-only east side. See /east-side.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/catering/grazing', label: 'Grazing' },
      ],
    },
    {
      slug: 'buffet',
      name: 'Buffet',
      h1: 'Buffet service on the Kohala Coast — west-side stations.',
      title: 'Buffet service on the Kohala Coast | myCHEF',
      description:
        'Staffed buffet in Kona and Kohala houses. Inquiry stage. Best from about 20 guests. East side is a different day. Not the catering money keyword.',
      lede:
        'Guests move. Stations stay hot in hard sun. Inquiry. Not a Hilo add-on.',
      photo: 'fmtBuffetBigisland',
      body: [
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) is /catering. This URL is buffet as a format.`,
        'Retreat kitchens: /retreat-catering. Ironman weeks pack town — /ironman-weeks. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Ironman week buffet?',
          a: 'Flag dates. Town compresses. See /ironman-weeks.',
        },
        {
          q: 'Hilo buffet?',
          a: 'Quote-only dedicated staffing. See /east-side.',
        },
      ],
      related: [
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
      ],
    },
    {
      slug: 'grazing',
      name: 'Grazing',
      h1: 'Grazing boards on a Kohala terrace — first hour, west side.',
      title: 'Grazing boards on a Kohala terrace | myCHEF',
      description:
        'Styled boards and passed small plates in Kona and Kohala. Inquiry stage. Arrival night after KOA. East side is a different day.',
      lede:
        'Boards, travel clothes, lava still hot. A seated dinner is a different format.',
      photo: 'fmtGrazingBigisland',
      body: [
        'Welcome dinners often start here — /events/welcome-dinners. This URL is the board format.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) remains /catering.`,
      ],
      faqs: [
        {
          q: 'Landing and grazing in Waikoloa that night?',
          a: 'If we have the crew. West-side radius, not a round trip from Hilo.',
        },
        {
          q: 'Enough for dinner?',
          a: 'Say so on the brief. We write which — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/kona', label: 'Kona' },
        { path: '/bar', label: 'Bar add-on' },
      ],
    },
    {
      slug: 'drop-off',
      name: 'Drop-off',
      h1: 'Drop-off is not staffed service on Hawaiʻi Island.',
      title: 'Drop-off is not staffed service on Hawaiʻi Island | myCHEF',
      description:
        'Drop-off on Hawaiʻi Island is a different product from staffed catering. Inquiry only. West-side first. We will not sell drop-off as if a chef stays.',
      lede:
        'Trays at the villa door. No pass. Inquiry. If you want a chef, that is /catering. East side is still a different day.',
      photo: 'fmtDropoffBigisland',
      body: [
        'Staffed catering is /catering. Stay Chef is /vacation-chef. Drop-off is not a standing SKU while this department is inquiry.',
        'East-side drop-off is not a west-side errand. See /east-side and /what-we-dont-do.',
      ],
      faqs: [
        {
          q: 'Leave trays in Waikoloa?',
          a: 'Inquiry only. Not the staffed product.',
        },
        {
          q: 'Hilo drop-off from a Kona kitchen?',
          a: 'No. East side is dedicated staffing even for dinners.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};

export function getCateringFormat(island: IslandId, slug: string): CateringFormatPage | undefined {
  return cateringFormats[island].find((row) => row.slug === slug);
}
