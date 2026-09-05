import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog HELP_SLUGS — first-booking documents, not money-keyword doors.
 * Distinct from /faq, /how-it-works, /weddings, /corporate-catering,
 * /events/corporate-events, and /quote.
 */

export const HELP_SLUGS = [
  'getting-started',
  'menu-guide',
  'wedding-guide',
  'corporate-guide',
  'managing-booking',
] as const;
export type HelpSlug = (typeof HELP_SLUGS)[number];

export interface HelpArticle extends UniqueCell {
  slug: HelpSlug;
}

export const helpArticles: Record<IslandId, HelpArticle[]> = {
  oahu: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Oahu booking — name the corridor, then the kitchen.',
      title: 'First Oahu booking — corridor, kitchen, written quote | myCHEF',
      description:
        'How a first Oahu booking starts: Honolulu, Waikīkī, Kailua, North Shore, Kahala, or Ko Olina; a working kitchen; a written quote. Distinct from /how-it-works and /faq.',
      lede:
        '/how-it-works is the night. This page is the first ask: which published corridor, whether the stove works, and what we need on /quote.',
      photo: 'helpStartOahu',
      body: [
        'Live corridors on this host: /honolulu, /waikiki, /kailua, /north-shore, /kahala, /ko-olina. Coverage map: /coverage. We do not invent a statewide Oahu kitchen.',
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) and Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stay on / and /catering. This URL is the first-booking document so those titles stay clean.`,
        'Send dates, headcount, dietary, and the address type on /quote. Hotel suites without a cooktop are declined. Residences and villas are the product.',
      ],
      faqs: [
        {
          q: 'Same as /how-it-works?',
          a: 'That page is quote-to-empty-dishwasher. This page is which corridor and whether the kitchen can hold the night.',
        },
        {
          q: 'I am in Waikīkī.',
          a: 'Open /waikiki. High-rise suites without a stove are not a kitchen.',
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read an Oahu menu draft — Honolulu fish, 48 hours.',
      title: 'How to read an Oahu menu draft | myCHEF',
      description:
        'How an Oahu menu draft arrives: 48 hours, Honolulu fish market, designed per table. Distinct from /menus as a process page and from /menus/three-course as a SKU.',
      lede:
        '/menus is how we design. /menus/three-course is the three-course as a SKU. This URL is how to read the draft that lands after you send the table.',
      photo: 'helpMenuOahu',
      body: [
        'The sample on /menus is an example, not a standing carte. Dietary is designed in — /dietary. Kids’ plates: /kids-menus. We do not print farm names we have not verified.',
        'Kahala dining rooms and Ko Olina villas are the usual rooms. Gold Coast houses: /gold-coast. The draft names the catch and the fire, not a theatrical luau.',
      ],
      faqs: [
        {
          q: 'When does the draft arrive?',
          a: 'About 48 hours after a complete /quote. Then we refine in writing.',
        },
        {
          q: 'Can I pick from a printed carte?',
          a: 'No. Every table is designed. SKUs live under /menus/three-course and siblings.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/menus/three-course', label: 'Three-course' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning an Oahu wedding week — welcome through brunch as lines.',
      title: 'Planning an Oahu wedding week | myCHEF',
      description:
        'Planner checklist for an Oahu wedding week: welcome, rehearsal, reception, recovery brunch as separate lines. Distinct from /weddings as the commercial door.',
      lede:
        '/weddings holds the Gold Coast commercial door. This URL is the checklist so welcome, rehearsal, reception, and brunch do not collapse into one fake SKU.',
      photo: 'helpWeddingOahu',
      body: [
        `Wedding catering Oahu (${SEARCH_VOLUMES['wedding catering oahu']}) lives on /weddings. This page does not steal that title. Welcome: /events/welcome-dinners. Rehearsal: /rehearsal-dinners. Brunch: /events/brunch.`,
        'Kahala dining rooms and Ko Olina villas. Guest counts: /guest-counts. We do not staff HCC citywides — /conventions.',
      ],
      faqs: [
        {
          q: 'Is this the wedding product?',
          a: 'The product door is /weddings. This page is the planner sequence — Kahala kitchen.',
        },
        {
          q: 'Can you do the lawn and the dinner for two?',
          a: 'Different lines. Date night: /honeymoon-dinners. Reception: /weddings.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding door' },
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
      ],
    },
    {
      slug: 'corporate-guide',
      name: 'Corporate guide',
      h1: 'Planning an Oahu house offsite — not a convention floor.',
      title: 'Planning an Oahu house offsite | myCHEF',
      description:
        'How to brief an Oahu executive dinner or house offsite. Not HCC citywides. Distinct from /corporate-catering and /events/corporate-events.',
      lede:
        '/corporate-catering is the SKU. /events/corporate-events is the occasion. This URL is what to send so we do not pretend a Kahala dining room is a ballroom.',
      photo: 'helpCorporateOahu',
      body: [
        'HCC citywides are closed through 2027 and are not our product — /conventions. House offsites: /events/corporate-events. Executive dinners: /corporate-catering.',
        'Kahala and Ko Olina houses. Guest counts we staff: /guest-counts. Larger than about seventy-five is quoted or declined.',
      ],
      faqs: [
        {
          q: 'Can you cater a citywide?',
          a: 'No. See /conventions. Residences and villas only.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That page is the SKU. This page is the briefing checklist — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'House offsites' },
        { path: '/conventions', label: 'Not MICE' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the Oahu quote — deposit, date lock, changes in writing.',
      title: 'After the Oahu quote — deposit and date lock | myCHEF',
      description:
        'How an Oahu booking is held: 50% deposit, written changes, GET and service as their own lines. Distinct from /quote as the form and /pricing as the card.',
      lede:
        '/quote is the form. /pricing is the rate card. This URL is what happens after you accept the written total — and how we change a Kahala night without a chat window.',
      photo: 'helpBookingOahu',
      body: [
        'Fifty percent locks the date. Service 20% and GET up to 4.712% print as their own lines — /private-chef-cost. Gratuity is voluntary.',
        'Headcount and dietary changes go in writing. Gold Coast houses: /gold-coast. Short-stay villas: /short-stay. We do not hold a date on a verbal yes.',
      ],
      faqs: [
        {
          q: 'Can I change the guest count the day of?',
          a: 'Write us as soon as you know. The quote is the contract, not the chat.',
        },
        {
          q: 'Where is the fee stack?',
          a: '/private-chef-cost. The tariff itself is /pricing — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
  ],
  maui: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Maui booking — name the shore, then the kitchen.',
      title: 'First Maui booking — shore, kitchen, written quote | myCHEF',
      description:
        'How a first Maui booking starts: Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, or Makena; a working kitchen; Saturday West Maui traffic planned in. Distinct from /how-it-works.',
      lede:
        '/how-it-works is the night. This page is the first ask: South or West, whether the stove works, and that we write Lahaina as a town — not a second island.',
      photo: 'helpStartMaui',
      body: [
        'Live corridors: /wailea, /kaanapali, /lahaina, /kihei, /kapalua, /makena. West Maui traffic: /west-maui. South Maui logistics: /south-maui. Coverage: /coverage.',
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) and Maui catering (${SEARCH_VOLUMES['maui catering']}) stay on / and /catering. This URL is the first-booking document.`,
        'Lahaina is a named town on this host — /lahaina — not a find-and-replace of Wailea. Send the address type on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /how-it-works?',
          a: 'That page is quote-to-empty-dishwasher. This page is shore, kitchen, and West Maui timing.',
        },
        {
          q: 'Saturday in Kāʻanapali.',
          a: 'We plan the drive. See /west-maui. It is not a hidden fee.',
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/quote', label: 'Quote' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a Maui menu draft — Wailea kitchens, 48 hours.',
      title: 'How to read a Maui menu draft | myCHEF',
      description:
        'How a Maui menu draft arrives: 48 hours, Wailea and Kapalua kitchens, designed per table. Distinct from /menus and from /menus/three-course.',
      lede:
        '/menus is how we design. This URL is how to read the draft — South Maui produce, West Maui timing, not a standing carte.',
      photo: 'helpMenuMaui',
      body: [
        'The sample on /menus is an example. Dietary: /dietary. We do not print a fake luau menu. Upcountry is a surcharge zone even when the draft looks simple — /coverage.',
        'Wailea and Kapalua are the usual rooms. Kīhei houses: /kihei. Wedding-week stacks: /wedding-week.',
      ],
      faqs: [
        {
          q: 'When does the draft arrive?',
          a: 'About 48 hours after a complete /quote. Saturday West Maui nights still need the same window.',
        },
        {
          q: 'Can we run a printed steak-and-fish carte?',
          a: 'No. Every table is designed. SKUs live under /menus/.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/menus/three-course', label: 'Three-course' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning a Maui wedding week — Wailea lawns and West Maui houses.',
      title: 'Planning a Maui wedding week | myCHEF',
      description:
        'Planner checklist for a Maui wedding week: welcome, rehearsal, reception, recovery brunch as separate lines. Distinct from /weddings. Lahaina stays a town name, not a wedding SKU.',
      lede:
        '/weddings holds the commercial door. This URL is the checklist. West Maui Saturday traffic is a logistics line, not a surprise.',
      photo: 'helpWeddingMaui',
      body: [
        `Wedding catering Maui (${SEARCH_VOLUMES['wedding catering maui']}) lives on /weddings. This page does not steal that title. Welcome: /events/welcome-dinners. Rehearsal: /rehearsal-dinners. Week stack: /wedding-week.`,
        'Lahaina naming stays on /lahaina. We do not sell a theatrical luau reception we do not run.',
      ],
      faqs: [
        {
          q: 'Is this the wedding product?',
          a: 'The product door is /weddings. This page is the planner sequence — Wailea kitchen.',
        },
        {
          q: 'West Maui Saturday ceremony?',
          a: 'We plan arrival. See /west-maui. Staffing hours still print as their own lines.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding door' },
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'corporate-guide',
      name: 'Corporate guide',
      h1: 'Planning a Maui villa offsite — South and West houses, not a ballroom.',
      title: 'Planning a Maui villa offsite | myCHEF',
      description:
        'How to brief a Maui executive dinner or villa offsite. Distinct from /corporate-catering and /events/corporate-events. Not a hotel ballroom.',
      lede:
        '/corporate-catering is the SKU. /events/corporate-events is the occasion. This URL is what to send so a Wailea dining room is not sold as a convention.',
      photo: 'helpCorporateMaui',
      body: [
        'Villa offsites: /events/corporate-events. Executive dinners: /corporate-catering. Guest counts: /guest-counts. Upcountry is still a surcharge — /coverage.',
        'South Maui: /south-maui. West Maui timing: /west-maui. We do not staff a Maui Convention Center floor we do not run.',
      ],
      faqs: [
        {
          q: 'Can you do a hotel ballroom?',
          a: 'No. Residences and villas. See /what-we-dont-do.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That page is the SKU. This page is the briefing checklist — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'Villa offsites' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the Maui quote — deposit, date lock, West Maui changes in writing.',
      title: 'After the Maui quote — deposit and date lock | myCHEF',
      description:
        'How a Maui booking is held: 50% deposit, written changes, GET and service as their own lines. Distinct from /quote and /pricing. West Maui traffic is planned, not hidden.',
      lede:
        '/quote is the form. /pricing is the rate card. This URL is what happens after you accept the written total — including a Saturday Kāʻanapali change.',
      photo: 'helpBookingMaui',
      body: [
        'Fifty percent locks the date. Service 20% and GET up to 4.712% print as their own lines — /private-chef-cost. Gratuity is voluntary.',
        'Shore and headcount changes go in writing. West Maui: /west-maui. Wedding-week stacks: /wedding-week. We do not hold a date on a verbal yes.',
      ],
      faqs: [
        {
          q: 'Can I move from Wailea to Lahaina after the deposit?',
          a: 'Write us. Lahaina is a different town — /lahaina — and the travel line may change.',
        },
        {
          q: 'Where is the fee stack?',
          a: '/private-chef-cost. The tariff itself is /pricing — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Kauai booking — name the shore, then ask if the road is open.',
      title: 'First Kauai booking — shore, inquiry, written quote | myCHEF',
      description:
        'How a first Kauai booking starts: Princeville, Poʻipū, Hanalei, or Kapaʻa; inquiry stage; Hanalei-bridge weather. Distinct from /how-it-works and /faq.',
      lede:
        '/how-it-works is the night. This page is the first ask: North or South, inquiry, and whether /hanalei-bridge applies before we pretend the night is live.',
      photo: 'helpStartKauai',
      body: [
        'Live corridors: /princeville, /poipu, /hanalei, /kapaa. Far-North weather: /hanalei-bridge. North Shore vs South Shore: /north-shore, /south-shore. Coverage: /coverage.',
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) and Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stay on / and /catering. This host is inquiry. We will not fake a live roster.`,
        'Send the shore and the address type on /quote. Closures reschedule rather than forfeit.',
      ],
      faqs: [
        {
          q: 'Are you live on Kauaʻi?',
          a: 'Inquiry. We crew when we can staff. We will not invent a now-serving line. See /about.',
        },
        {
          q: 'Hanalei this weekend?',
          a: 'Read /hanalei-bridge. Weather can close the road. We reschedule; we do not pretend.',
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Quote' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a Kauai menu draft — both shores, inquiry, 48 hours.',
      title: 'How to read a Kauai menu draft | myCHEF',
      description:
        'How a Kauai menu draft arrives: 48 hours, North Shore handshake or South Shore fire, inquiry stage. Distinct from /menus and from /menus/three-course.',
      lede:
        '/menus is how we design. This URL is how to read the draft — Princeville mist or Poʻipū kiawe — without a fake standing carte.',
      photo: 'helpMenuKauai',
      body: [
        'The sample on /menus is an example. Dietary: /dietary. Far-North drafts still inherit /hanalei-bridge. We do not print a theatrical luau.',
        'Princeville and Poʻipū are the usual rooms. Kapaʻa is closer to base — /kapaa — and still a real table, inquiry.',
      ],
      faqs: [
        {
          q: 'When does the draft arrive?',
          a: 'About 48 hours after a complete /quote, if we can staff the shore.',
        },
        {
          q: 'North Shore fish on a South Shore night?',
          a: 'We write what we can source. Origin-honest. See /menus.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning a Kauai wedding week — both shores, inquiry, the bridge.',
      title: 'Planning a Kauai wedding week | myCHEF',
      description:
        'Planner checklist for a Kauai wedding week at inquiry: welcome, rehearsal, reception, brunch as separate lines. Distinct from /weddings. Hanalei-bridge weather is a clause.',
      lede:
        '/weddings holds the commercial door. This URL is the checklist. Far-North weekends inherit /hanalei-bridge. We will not fake a live wedding roster.',
      photo: 'helpWeddingKauai',
      body: [
        `Kauai wedding catering (${SEARCH_VOLUMES['kauai wedding catering']}) is a measured long-tail. The commercial door is /weddings. This page does not steal it. Week stack: /wedding-week.`,
        'Princeville, Hanalei, Poʻipū. Welcome: /events/welcome-dinners. Rehearsal: /rehearsal-dinners. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Is this the wedding product?',
          a: 'The product door is /weddings. This page is the planner sequence at inquiry.',
        },
        {
          q: 'Hāʻena ceremony?',
          a: 'Quote-only with the bridge clause. See /hanalei-bridge.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding door' },
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      ],
    },
    {
      slug: 'corporate-guide',
      name: 'Corporate guide',
      h1: 'Planning a Kauai estate offsite — inquiry, not a convention.',
      title: 'Planning a Kauai estate offsite | myCHEF',
      description:
        'How to brief a Kauai executive dinner or estate offsite at inquiry. Distinct from /corporate-catering and /events/corporate-events. Not a convention floor.',
      lede:
        '/corporate-catering is the SKU. /events/corporate-events is the occasion. This URL is what to send so a Princeville dining room is not sold as a ballroom.',
      photo: 'helpCorporateKauai',
      body: [
        'Estate offsites: /events/corporate-events. Executive dinners: /corporate-catering. Guest counts: /guest-counts. Inquiry. Far-North still inherits /hanalei-bridge.',
        'We do not staff a Kauaʻi convention we do not run. Both shores are published — /coverage.',
      ],
      faqs: [
        {
          q: 'Are corporate nights live?',
          a: 'Inquiry. We crew when we can staff. See /about.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That page is the SKU. This page is the briefing checklist — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'Estate offsites' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the Kauai quote — deposit, inquiry hold, bridge weather in writing.',
      title: 'After the Kauai quote — deposit and inquiry hold | myCHEF',
      description:
        'How a Kauai booking is held at inquiry: 50% deposit when we can staff, written changes, GET and service as their own lines. Distinct from /quote and /pricing.',
      lede:
        '/quote is the form. /pricing is the rate card. This URL is what happens after a written total — including a Hanalei-bridge closure that reschedules rather than forfeits.',
      photo: 'helpBookingKauai',
      body: [
        'Fifty percent locks a staffed date. Service 20% and GET up to 4.712% print as their own lines — /private-chef-cost. Inquiry: we will not hold a fake roster.',
        'Shore and weather changes go in writing. Bridge: /hanalei-bridge. We do not keep a deposit because the road closed.',
      ],
      faqs: [
        {
          q: 'Road closed the morning of?',
          a: 'We reschedule. See /hanalei-bridge. The deposit follows the night, not the calendar.',
        },
        {
          q: 'Where is the fee stack?',
          a: '/private-chef-cost. The tariff itself is /pricing — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Hawaiʻi Island booking — west side first, then the kitchen.',
      title: 'First Hawaiʻi Island booking — west side, written quote | myCHEF',
      description:
        'How a first Hawaiʻi Island booking starts: Kona, Waimea, Waikoloa, Kohala; west side first; east side is a different day. Inquiry. Distinct from /how-it-works.',
      lede:
        '/how-it-works is the night. This page is the first ask: west-side address, whether the stove works, and that Hilo is not implied.',
      photo: 'helpStartBigisland',
      body: [
        'Live corridors: /kona, /waimea, /waikoloa, /kohala. West-side radius: /kohala-corridor. East side: /east-side. Ironman weeks: /ironman-weeks. Coverage: /coverage.',
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) stay dinner doors. Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This URL is the first-booking document.`,
        'Inquiry. Send the west-side address on /quote. East side is a dedicated day — not a west-side round trip.',
      ],
      faqs: [
        {
          q: 'Can you cook in Hilo the same day as Waikoloa?',
          a: 'No. See /east-side. Crossing the island is a different day.',
        },
        {
          q: 'Are you live on the west side?',
          a: 'Inquiry. We crew when we can staff. See /about.',
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/east-side', label: 'East side' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a Hawaiʻi Island menu draft — kanpachi, west side, 48 hours.',
      title: 'How to read a Hawaiʻi Island menu draft | myCHEF',
      description:
        'How a Hawaiʻi Island menu draft arrives: 48 hours, kanpachi and coffee crust, west-side kitchens. Distinct from /menus and from /menus/three-course. Origin-honest.',
      lede:
        '/menus is how we design. This URL is how to read the draft — Kona fire, Kohala lava terrace — without a fake standing carte or an east-side implication.',
      photo: 'helpMenuBigisland',
      body: [
        'The sample on /menus is an example. Dietary: /dietary. Coffee Act origin claims stay honest — /coffee-act-198. We do not print a theatrical luau.',
        'Kona and Waikoloa are the usual rooms. Waimea is inland — /waimea. East-side drafts are a different day — /east-side.',
      ],
      faqs: [
        {
          q: 'When does the draft arrive?',
          a: 'About 48 hours after a complete /quote, if we can staff the west side.',
        },
        {
          q: 'Kona coffee on every plate?',
          a: 'Only when it is true. See /coffee-act-198.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning a Hawaiʻi Island wedding week — Kohala first, not a Hilo SKU.',
      title: 'Planning a Hawaiʻi Island wedding week | myCHEF',
      description:
        'Planner checklist for a west-side wedding week at inquiry: welcome, rehearsal, reception, brunch as separate lines. Distinct from /weddings. East side is a different day.',
      lede:
        '/weddings holds the commercial door. This URL is the checklist. Ironman weeks are a calendar, not a wedding SKU. Hilo is not implied.',
      photo: 'helpWeddingBigisland',
      body: [
        `Wedding catering Hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) lives on /weddings. This page does not steal that title. Welcome: /events/welcome-dinners. Rehearsal: /rehearsal-dinners. Ironman: /ironman-weeks.`,
        'Kohala Coast and Kona. East side: /east-side. Inquiry. We will not fake a live wedding roster.',
      ],
      faqs: [
        {
          q: 'Is this the wedding product?',
          a: 'The product door is /weddings. This page is the planner sequence on the west side.',
        },
        {
          q: 'Volcano ceremony?',
          a: 'Quote-only east side. See /east-side. Not a west-side round trip.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding door' },
        { path: '/kohala', label: 'Kohala' },
        { path: '/east-side', label: 'East side' },
      ],
    },
    {
      slug: 'corporate-guide',
      name: 'Corporate guide',
      h1: 'Planning a west-side villa offsite — Kohala, not a Hilo convention.',
      title: 'Planning a west-side villa offsite | myCHEF',
      description:
        'How to brief a Hawaiʻi Island executive dinner or villa offsite at inquiry. West side first. Distinct from /corporate-catering and /events/corporate-events.',
      lede:
        '/corporate-catering is the SKU. /events/corporate-events is the occasion. This URL is what to send so a Waikoloa dining room is not sold as a Hilo ballroom.',
      photo: 'helpCorporateBigisland',
      body: [
        'West-side offsites: /events/corporate-events. Executive dinners: /corporate-catering. Guest counts: /guest-counts. Ironman weeks change lodging, not our kitchen promise — /ironman-weeks.',
        'East side is a dedicated day — /east-side. Inquiry. We do not staff a Hilo convention we do not run.',
      ],
      faqs: [
        {
          q: 'Hilo offsite same week as Waikoloa?',
          a: 'Different days. See /east-side.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That page is the SKU. This page is the briefing checklist — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'Villa offsites' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the west-side quote — deposit, inquiry hold, east-side days in writing.',
      title: 'After the west-side quote — deposit and inquiry hold | myCHEF',
      description:
        'How a Hawaiʻi Island booking is held at inquiry: 50% deposit when we can staff, written changes, GET and service as their own lines. East side is a different day.',
      lede:
        '/quote is the form. /pricing is the rate card. This URL is what happens after a written total — including an east-side add that cannot ride in a west-side van.',
      photo: 'helpBookingBigisland',
      body: [
        'Fifty percent locks a staffed west-side date. Service 20% and GET up to 4.712% print as their own lines — /private-chef-cost. Inquiry: we will not hold a fake roster.',
        'Address and Ironman-week changes go in writing. East side: /east-side. Ironman: /ironman-weeks. We do not hold a date on a verbal yes.',
      ],
      faqs: [
        {
          q: 'Can I add a Hilo lunch after a Kona dinner?',
          a: 'Not the same day. See /east-side. Write us and we quote a dedicated crossing.',
        },
        {
          q: 'Where is the fee stack?',
          a: '/private-chef-cost. The tariff itself is /pricing — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};

export function getHelpArticle(island: IslandId, slug: string): HelpArticle | undefined {
  return helpArticles[island].find((row) => row.slug === slug);
}
