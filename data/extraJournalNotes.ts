import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Remaining journal kitchen notes beside live SKUs and unique cells.
 * Distinct from /weddings, Maui/Kauaʻi /wedding-week, /vacation-chef, and /coverage.
 * Titles must not use money keywords.
 */

export const EXTRA_JOURNAL_NOTES: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Oahu wedding-week kitchen notes — each night is a line beside /weddings.',
      title: 'Oahu wedding-week kitchen notes — lines beside /weddings | myCHEF',
      description:
        'Short Oahu wedding-week kitchen notes. Distinct from /weddings and /help/wedding-guide. Oahu has no /wedding-week cell.',
      lede:
        '/weddings owns the catering keyword. /help/wedding-guide is the planner checklist. This journal piece is how a Kahala week actually stacks — welcome, rehearsal, reception, brunch as lines.',
      photo: 'jnlWeddingOahu',
      body: [
        'Oahu does not keep a /wedding-week commercial cell. The week still exists as kitchen timing: arrival night, rehearsal, reception, recovery brunch. Each night prints, or you skip it.',
        '/rehearsal-dinners and /events/welcome-dinners stay SKUs. This piece is why we will not bury those nights under one reception total.',
        `Wedding catering Oahu (${SEARCH_VOLUMES['wedding catering oahu']}) stays on /weddings. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /weddings?',
          a: 'That URL owns the catering keyword. This piece is the week-stack kitchen note beside it.',
        },
        {
          q: 'Same as /help/wedding-guide?',
          a: 'That URL is the planner checklist. This piece is how the nights stack in a Kahala house.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/help/wedding-guide', label: 'Wedding-week help' },
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'vacation-chef-week',
      name: 'Vacation chef weeks',
      h1: 'Oahu Stay Chef week notes — the SKU is /vacation-chef.',
      title: 'Oahu Stay Chef week notes — beside /vacation-chef | myCHEF',
      description:
        'Short Oahu Stay Chef week kitchen notes. Distinct from /vacation-chef and from /personal-chef.',
      lede:
        '/vacation-chef is the villa-week SKU. This journal piece is how a Kahala or Ko Olina week actually runs — grocery crates, stacked plates, one team, groceries at cost.',
      photo: 'jnlVacweekOahu',
      body: [
        'A week is not seven copies of one dinner. Breakfast, lunch, and dinner print as lines, or a written day rate. Groceries stay at cost — /blog/grocery-at-cost.',
        '/personal-chef and /kamaaina are the resident line. This piece is the visitor week beside /vacation-chef.',
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /vacation-chef?',
          a: 'That URL is the SKU. This piece is the week-stack kitchen note beside it — Kahala kitchen.',
        },
        {
          q: 'Same as /personal-chef?',
          a: 'That URL is the resident household line. This piece is a visitor villa week — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef SKU' },
        { path: '/personal-chef', label: 'Household line' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'travel-zones',
      name: 'Travel zones',
      h1: 'Oahu travel-zone kitchen notes — Kahala is not the North Shore.',
      title: 'Oahu travel-zone kitchen notes — beside /coverage | myCHEF',
      description:
        'Short Oahu travel-zone kitchen notes. Distinct from /coverage and from /locations.',
      lede:
        '/coverage is the published map. This journal piece is why a Kahala night and a North Shore surcharge day are not the same cooler load.',
      photo: 'jnlZonesOahu',
      body: [
        'Base corridors sit on /honolulu, /waikiki, /kailua, /kahala, /ko-olina. /north-shore is a surcharge day — we write the drive, we do not hide it in the menu.',
        '/locations lists dinner doors. This piece is the cooler in the courtyard: how far, how long, whether the night is still the same call.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That URL is the zone map. This piece is the kitchen note on why two corridors are not one cooler.',
        },
        {
          q: 'Same as /locations?',
          a: 'That URL lists live dinner doors. This piece is the travel honesty beside them.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/locations', label: 'Dinner doors' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  maui: [
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Maui wedding-week kitchen notes — the cell is /wedding-week.',
      title: 'Maui wedding-week kitchen notes — beside the week cell | myCHEF',
      description:
        'Short Maui wedding-week kitchen notes. Distinct from /wedding-week, /weddings, and /help/wedding-guide.',
      lede:
        '/wedding-week is the commercial cell. /weddings owns the catering keyword. This journal piece is the Wailea kitchen — how those four lines actually leave the pass.',
      photo: 'jnlWeddingMaui',
      body: [
        'Welcome, rehearsal, reception, recovery brunch. The cell states the stack. This piece is the timing: a lawn that needs a wet-weather line, a kitchen that cannot run four nights as one unpaid blur.',
        '/south-maui and /west-maui change arrival, not the menu adjective. Guest counts we staff stay dinners 2–15, receptions about 10–75.',
        `Wedding catering Maui (${SEARCH_VOLUMES['wedding catering maui']}) stays on /weddings. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /wedding-week?',
          a: 'That URL is the commercial cell. This piece is the kitchen note beside it.',
        },
        {
          q: 'Same as /weddings?',
          a: 'That URL owns the catering keyword. This piece is how the week leaves the Wailea pass.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding-week cell' },
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/help/wedding-guide', label: 'Wedding-week help' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'vacation-chef-week',
      name: 'Vacation chef weeks',
      h1: 'Maui Stay Chef week notes — the SKU is /vacation-chef.',
      title: 'Maui Stay Chef week notes — beside /vacation-chef | myCHEF',
      description:
        'Short Maui Stay Chef week kitchen notes. Distinct from /vacation-chef and from /personal-chef.',
      lede:
        '/vacation-chef is the villa-week SKU. This journal piece is how a Wailea or Kapalua week actually runs — crates, stacked plates, one team, groceries at cost.',
      photo: 'jnlVacweekMaui',
      body: [
        'A Wailea week is not seven plated copies. West Maui Saturday arrival is planned — /west-maui — not discovered on the invoice. Groceries stay at cost.',
        '/personal-chef is the resident line. This piece is the visitor week beside /vacation-chef.',
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /vacation-chef?',
          a: 'That URL is the SKU. This piece is the week-stack kitchen note beside it — Wailea kitchen.',
        },
        {
          q: 'Same as /personal-chef?',
          a: 'That URL is the resident household line. This piece is a visitor villa week — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef SKU' },
        { path: '/west-maui', label: 'West Maui drive' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'travel-zones',
      name: 'Travel zones',
      h1: 'Maui travel-zone kitchen notes — Wailea is not Kāʻanapali.',
      title: 'Maui travel-zone kitchen notes — beside /coverage | myCHEF',
      description:
        'Short Maui travel-zone kitchen notes. Distinct from /coverage, /south-maui, and /west-maui.',
      lede:
        '/coverage is the published map. /south-maui and /west-maui are corridor essays. This journal piece is why a Wailea cooler is not a Kāʻanapali cooler.',
      photo: 'jnlZonesMaui',
      body: [
        'South Maui and West Maui are different arrival stories. Upcountry is elevation and a different kit. We write the drive; we do not hide it in the plate price.',
        '/locations lists dinner doors. This piece is the cooler at the gate: which shore, how long, whether the night is still one call.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That URL is the zone map. This piece is the kitchen note on two shores.',
        },
        {
          q: 'Same as /west-maui?',
          a: 'That URL is the corridor essay. This piece is the travel honesty beside it.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Kauai wedding-week kitchen notes — the cell is /wedding-week, at inquiry.',
      title: 'Kauai wedding-week kitchen notes — beside the week cell | myCHEF',
      description:
        'Short Kauai wedding-week kitchen notes at inquiry. Distinct from /wedding-week, /weddings, and /help/wedding-guide.',
      lede:
        '/wedding-week is the commercial cell. /weddings owns the catering keyword. This journal piece is the Princeville kitchen at inquiry — how those lines would leave the pass if we can staff.',
      photo: 'jnlWeddingKauai',
      body: [
        'Estate formats to about 75 guests. Welcome, rehearsal, reception as separate lines. Far-North nights inherit /hanalei-bridge. We do not hold a fake Book-now button.',
        '/help/wedding-guide is the planner checklist. This piece is the kitchen timing beside the cell — still inquiry.',
        `Kauai wedding catering (${SEARCH_VOLUMES['kauai wedding catering']}) stays on /weddings. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /wedding-week?',
          a: 'That URL is the commercial cell at inquiry. This piece is the kitchen note beside it.',
        },
        {
          q: 'Same as /weddings?',
          a: 'That URL owns the catering keyword. This piece is how a week would leave the pass if we can staff.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding-week cell' },
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'vacation-chef-week',
      name: 'Vacation chef weeks',
      h1: 'Kauai Stay Chef week notes — the SKU is /vacation-chef, at inquiry.',
      title: 'Kauai Stay Chef week notes — beside /vacation-chef | myCHEF',
      description:
        'Short Kauai Stay Chef week kitchen notes at inquiry. Distinct from /vacation-chef and from /personal-chef.',
      lede:
        '/vacation-chef is the villa-week SKU. This journal piece is how a Princeville or Poʻipū week would run if we can staff — crates, stacked plates, groceries at cost.',
      photo: 'jnlVacweekKauai',
      body: [
        'North Shore winters and the Hanalei road change whether a week is even quotable — /hanalei-bridge. South Shore is a shorter drive from Līhuʻe, still inquiry.',
        '/personal-chef is the resident line. This piece is the visitor week beside /vacation-chef. We do not hold a fake Book-now button.',
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /vacation-chef?',
          a: 'That URL is the SKU at inquiry. This piece is the week-stack kitchen note beside it — Princeville kitchen at inquiry.',
        },
        {
          q: 'Same as /personal-chef?',
          a: 'That URL is the resident household line. This piece is a visitor villa week — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef SKU' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'travel-zones',
      name: 'Travel zones',
      h1: 'Kauai travel-zone kitchen notes — both shores, and the bridge.',
      title: 'Kauai travel-zone kitchen notes — beside /coverage | myCHEF',
      description:
        'Short Kauai travel-zone kitchen notes at inquiry. Distinct from /coverage, /north-shore, and /hanalei-bridge.',
      lede:
        '/coverage is the published map. /hanalei-bridge is the weather clause. This journal piece is why a Poʻipū cooler is not a Hāʻena cooler.',
      photo: 'jnlZonesKauai',
      body: [
        'South Shore is the shorter drive from Līhuʻe. Far-North events inherit 72-hour notice. We reschedule rather than forfeit when the road closes.',
        '/locations lists dinner doors. This piece is the cooler on wet stone: which shore, whether the night is still one call. Inquiry stage.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That URL is the zone map. This piece is the kitchen note on two shores and the bridge.',
        },
        {
          q: 'Same as /hanalei-bridge?',
          a: 'That URL is the weather clause. This piece is the travel honesty beside it.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Hawaiʻi Island wedding-week kitchen notes — lines beside /weddings, at inquiry.',
      title: 'Hawaiʻi Island wedding-week kitchen notes — lines beside /weddings | myCHEF',
      description:
        'Short Hawaiʻi Island wedding-week kitchen notes at inquiry. Distinct from /weddings and /help/wedding-guide. No /wedding-week cell on this host.',
      lede:
        '/weddings owns the catering keyword. /help/wedding-guide is the planner checklist. This journal piece is how a Waikoloa week would stack if we can staff — each night a line.',
      photo: 'jnlWeddingBigisland',
      body: [
        'Hawaiʻi Island does not keep a /wedding-week commercial cell. The week still exists as kitchen timing on the west side. East side is a dedicated day — /east-side — never a same-day Kona round trip.',
        'Welcome, rehearsal, reception, brunch print as lines, or you skip them. We do not hold a fake Book-now button.',
        `Wedding catering Hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) stays on /weddings. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /weddings?',
          a: 'That URL owns the catering keyword. This piece is the week-stack kitchen note beside it, at inquiry.',
        },
        {
          q: 'Can the reception sit in Hilo after a Kona welcome?',
          a: 'Not the same day. Open /east-side. Send both dates on /quote.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/east-side', label: 'East side' },
        { path: '/help/wedding-guide', label: 'Wedding-week help' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'vacation-chef-week',
      name: 'Vacation chef weeks',
      h1: 'Hawaiʻi Island Stay Chef week notes — the SKU is /vacation-chef, at inquiry.',
      title: 'Hawaiʻi Island Stay Chef week notes — beside /vacation-chef | myCHEF',
      description:
        'Short Hawaiʻi Island Stay Chef week kitchen notes at inquiry. Distinct from /vacation-chef and from /personal-chef.',
      lede:
        '/vacation-chef is the villa-week SKU. This journal piece is how a Waikoloa or Kona week would run if we can staff — crates, stacked plates, groceries at cost. East side is another day.',
      photo: 'jnlVacweekBigisland',
      body: [
        'West side first. Ironman weeks compress availability — /ironman-weeks. A Hilo week is a dedicated staffing day, not a Kona add-on.',
        '/personal-chef is the resident line. This piece is the visitor week beside /vacation-chef. We do not hold a fake Book-now button.',
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays on this host’s home. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /vacation-chef?',
          a: 'That URL is the SKU at inquiry. This piece is the week-stack kitchen note beside it — Waikoloa kitchen. Hilo is never implied.',
        },
        {
          q: 'Same as /personal-chef?',
          a: 'That URL is the resident household line. This piece is a visitor villa week — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef SKU' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'travel-zones',
      name: 'Travel zones',
      h1: 'Hawaiʻi Island travel-zone kitchen notes — west side first, Hilo another day.',
      title: 'Hawaiʻi Island travel-zone kitchen notes — beside /coverage | myCHEF',
      description:
        'Short Hawaiʻi Island travel-zone kitchen notes at inquiry. Distinct from /coverage, /kohala-corridor, and /east-side.',
      lede:
        '/coverage is the published map. /east-side is the dedicated-day clause. This journal piece is why a Waikoloa cooler is not a Hilo cooler.',
      photo: 'jnlZonesBigisland',
      body: [
        'The island is 4,000 square miles. Kona–Kohala is the staffed radius when we can staff. Hilo, Volcano, and Kaʻū are quote-only dedicated days — never a same-day west-side round trip.',
        '/locations lists dinner doors. This piece is the cooler on lava stone: west side first, east side another day. Inquiry stage.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That URL is the zone map. This piece is the kitchen note on west side versus a dedicated east-side day.',
        },
        {
          q: 'Same as /east-side?',
          a: 'That URL is the dedicated-day clause. This piece is the travel honesty beside it.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/kohala-corridor', label: 'Kona–Kohala' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
};
