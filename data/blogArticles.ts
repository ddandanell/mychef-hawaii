import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Live blog article URLs. First slice: dining-in notes for money corridors.
 * Distinct from /{slug} neighborhood pages, /locations, and /coverage.
 * Titles must not use money keywords or steal corridor titles.
 */

export interface BlogArticle extends UniqueCell {
  slug: string;
}

export const blogArticles: Record<IslandId, BlogArticle[]> = {
  oahu: [
    {
      slug: 'dining-in-honolulu',
      name: 'Dining in Honolulu',
      h1: 'A Honolulu table — kitchen notes, not the dinner door.',
      title: 'Honolulu kitchen notes — a table, not the corridor page | myCHEF',
      description:
        'Short Honolulu kitchen notes: town apartments and Gold Coast-adjacent houses. Distinct from /honolulu.',
      lede:
        '/honolulu is the dinner door. This blog note is the room — a cooktop in town, not a second corridor page.',
      photo: 'dinHonolulu',
      body: [
        `Private chef Honolulu (${SEARCH_VOLUMES['private chef honolulu']}) stays on /honolulu. This article does not steal that title.`,
        'Town apartments with a real stove, and houses that actually cook. Hotel rooms without a cooktop are declined. Load-in and quiet hours go on the quote.',
        'The corridor directory is /locations. Send the address type on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /honolulu?',
          a: 'That URL is the dinner door. This piece is a short kitchen note beside it.',
        },
        {
          q: 'Will you cook in a hotel room?',
          a: 'Not without a functioning cooktop. Open /honolulu.',
        },
      ],
      related: [
        { path: '/honolulu', label: 'Honolulu dinner door' },
        { path: '/locations', label: 'Corridor directory' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-waikiki',
      name: 'Dining in Waikīkī',
      h1: 'Waikiki notes — residences with a cooktop, not a hotel room.',
      title: 'Waikiki residence notes — cooktop required | myCHEF',
      description:
        'Short Waikīkī notes: tower residences, freight elevators, cooktops. Distinct from /waikiki.',
      lede:
        '/waikiki is the dinner door. This blog note is why a tower residence and a hotel room are not the same night.',
      photo: 'dinWaikiki',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in advance. Compact kitchens get a menu that fits the range — not a brochure photo.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one residence table in the tower.`,
        'If there is no cooktop, we decline. Open /waikiki for the corridor page.',
      ],
      faqs: [
        {
          q: 'Same as /waikiki?',
          a: 'That URL is the dinner door. This piece is the short note on residences versus hotel rooms.',
        },
        {
          q: 'Can you impersonate room service?',
          a: 'No. We decline rooms without a functioning kitchen.',
        },
      ],
      related: [
        { path: '/waikiki', label: 'Waikīkī dinner door' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kailua',
      name: 'Dining in Kailua',
      h1: 'Kailua notes — 30-day houses, not a weekend drop-in.',
      title: 'Kailua kitchen notes — 30-day houses, not a weekend drop-in | myCHEF',
      description:
        'Short Kailua notes: windward 30-day estates, family weeks. Distinct from /kailua.',
      lede:
        '/kailua is the dinner door. This blog note is the 30-day house — equipment confirmed before anyone drives windward.',
      photo: 'dinKailua',
      body: [
        'Windward 30-day-estate market. Multi-day packages, not weekend tourist drop-ins. Galley kitchens are common; we say so on the quote.',
        'Kamaʻāina weeks sit on /kamaaina. Visitor dinners that actually have a stove sit on /kailua.',
        'Send the address and the stay length on /quote. A one-night tourist dinner in a house without a range is declined.',
      ],
      faqs: [
        {
          q: 'Same as /kailua?',
          a: 'That URL is the dinner door. This piece is the short note on 30-day houses.',
        },
        {
          q: 'Can you drop in for Saturday only?',
          a: 'Sometimes, if the kitchen holds it. Month-long estates are the usual fit. Send the dates.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua dinner door' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-north-shore',
      name: 'Dining on the North Shore',
      h1: 'North Shore notes — Turtle Bay drive, written on the quote.',
      title: 'North Shore kitchen notes — Turtle Bay drive, written | myCHEF',
      description:
        'Short Oahu North Shore notes: surcharge drive, dedicated chef days. Distinct from /north-shore.',
      lede:
        '/north-shore is the dinner door. This blog note is why the drive is a line, not a surprise at 4 p.m.',
      photo: 'dinNorthShore',
      body: [
        'Surcharge zone. Sixty to ninety minutes from town. Dedicated chef days — not stacked with a Kahala lunch.',
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This article does not steal that title.`,
        'Surf season books early. We still need a cooktop. Open /north-shore for the corridor page.',
      ],
      faqs: [
        {
          q: 'Same as /north-shore?',
          a: 'That URL is the dinner door. This piece is the short note on the published drive.',
        },
        {
          q: 'Is the drive hidden in the menu?',
          a: 'No. It prints as its own line. Open /north-shore.',
        },
      ],
      related: [
        { path: '/north-shore', label: 'North Shore dinner door' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kahala',
      name: 'Dining in Kahala',
      h1: 'Kahala notes — Gold Coast dining rooms that actually cook.',
      title: 'Kahala kitchen notes — Gold Coast dining rooms | myCHEF',
      description:
        'Short Kahala notes: Gold Coast dining rooms, resident and celebration tables. Distinct from /kahala and /gold-coast.',
      lede:
        '/kahala is the dinner door. /gold-coast is the estate cell. This blog note is the dining room itself.',
      photo: 'dinKahala',
      body: [
        'Gold Coast houses with real dining rooms. Weekly kamaʻāina tables and celebration dinners of 4–15. Hotel suites without a cooktop stay declined.',
        'Load-in is confirmed in writing. The corridor page is /kahala. The estate cell is /gold-coast.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one Gold Coast table.`,
      ],
      faqs: [
        {
          q: 'Same as /kahala?',
          a: 'That URL is the dinner door. This piece is the short dining-room note.',
        },
        {
          q: 'Same as /gold-coast?',
          a: 'That page is the estate cell. This piece is the shorter kitchen note beside it.',
        },
      ],
      related: [
        { path: '/kahala', label: 'Kahala dinner door' },
        { path: '/gold-coast', label: 'Gold Coast estates' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-ko-olina',
      name: 'Dining in Ko Olina',
      h1: 'Ko Olina notes — villa weeks, not a one-off tourist dinner.',
      title: 'Ko Olina kitchen notes — villa weeks, not a one-off | myCHEF',
      description:
        'Short Ko Olina notes: legal short-stay villa weeks, west-side provisioning. Distinct from /ko-olina and /short-stay.',
      lede:
        '/ko-olina is the dinner door. /short-stay is the legal villa pool. This blog note is the week in the house.',
      photo: 'dinKoOlina',
      body: [
        'West-side legal short-stay villas. Multi-day packages lead. Provisioning stays west-side — not a town round-trip dressed up as a week.',
        '3–7 day villa weeks, families, celebration stays. A one-off tourist dinner in a house without a range is the wrong product.',
        'Open /ko-olina for the corridor page. Open /vacation-chef if the week is the product.',
      ],
      faqs: [
        {
          q: 'Same as /ko-olina?',
          a: 'That URL is the dinner door. This piece is the short note on villa weeks.',
        },
        {
          q: 'Same as /short-stay?',
          a: 'That page is the legal villa pool. This piece is the shorter kitchen note.',
        },
      ],
      related: [
        { path: '/ko-olina', label: 'Ko Olina dinner door' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
      ],
    },
    {
      slug: 'grocery-at-cost',
      name: 'Groceries at cost',
      h1: 'Oahu grocery line — shopped the day of, billed at cost.',
      title: 'Oahu groceries billed at cost — receipts on the quote | myCHEF',
      description:
        'Oahu groceries print at cost with receipts. Distinct from /pricing and /journal/what-is-included.',
      lede:
        '/pricing is the tariff. /journal/what-is-included is the written split. This blog note is the grocery line — shopped that day, billed at cost, never a hidden markup.',
      photo: 'blogGroceryOahu',
      body: [
        'We shop the day of service. Groceries print at cost with receipts. They are not swallowed by the CORE band on a Kahala or Ko Olina night.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one dinner’s shop, itemised.`,
        'Alcohol is a different line — /blog/wine-and-alcohol. The written quote is the contract.',
      ],
      faqs: [
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is how groceries print beside it.',
        },
        {
          q: 'Is there a grocery markup?',
          a: 'No. Cost plus receipts. Open /quote.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Oahu rate card' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'wine-and-alcohol',
      name: 'Wine and alcohol',
      h1: 'Oahu wine and spirits — Kahala pours as their own line.',
      title: 'Oahu wine and spirits — Kahala pours as their own line | myCHEF',
      description:
        'Oahu wine, beer, and spirits never hide inside the dinner band. Distinct from /bar and /private-chef.',
      lede:
        '/bar is the bartender add-on. /mobile-bar is the 4-hour package. This blog note is the bottle line — yours, or quoted separately.',
      photo: 'blogWineOahu',
      body: [
        'Bring your own, or we quote a separate pour. Wine, beer, and spirits never hide inside the CORE band on a Gold Coast night.',
        'A bartender is /staffing/bartenders or /bar. This piece is the alcohol line on the quote, not the person pouring it.',
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: 'That URL is the bartender add-on. This piece is why the bottles print as their own line.',
        },
        {
          q: 'Can you bury wine in the menu price?',
          a: 'No. Open /journal/what-is-included.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'weather-backup',
      name: 'Wet-weather backup',
      h1: 'Oahu lawn tables get a covered backup in writing.',
      title: 'Oahu lawn tables get a covered backup in writing | myCHEF',
      description:
        'Oahu outdoor tables get a written wet-weather backup before the day. Distinct from /coverage and /legal.',
      lede:
        '/coverage is the zone map. /legal holds the weather clause. This blog note is the covered room we name before anyone sets a Kahala lawn table.',
      photo: 'blogWeatherOahu',
      body: [
        'Outdoor tables on the Gold Coast and Ko Olina lawns always have a written indoor backup. We do not discover rain at 4 p.m.',
        'North Shore wind is part of the dedicated-day plan — /north-shore. The backup is a room, not a tent we do not own.',
        'Send the address type on /quote. If the house has no covered fallback, we say so before a deposit.',
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is the short outdoor-backup note.',
        },
        {
          q: 'Same as /legal?',
          a: 'That page is the booking notes. This piece is the kitchen note beside it.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/gold-coast', label: 'Gold Coast houses' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'sourcing-honesty',
      name: 'Sourcing honesty',
      h1: 'Oahu sourcing — most food still arrives by ship. We say so.',
      title: 'Oahu sourcing honesty — most food still arrives by ship | myCHEF',
      description:
        'Oahu sourcing honesty: Hawaiʻi still imports most of its food. Named farms only after written verification. Distinct from /what-we-dont-do.',
      lede:
        '/what-we-dont-do is the claim list. /menus is the process. This blog note is why we will not print a farm name we have not verified.',
      photo: 'blogSourceOahu',
      body: [
        'Hawaiʻi still imports most of its food. We cook what the shop and the boat actually hold that day. We do not invent a “farm-to-table” brand.',
        'Named farms only after written verification. Fish is named as food, not décor. The sample on /menus is an example, not a standing carte.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is how an Oahu draft stays honest.`,
      ],
      faqs: [
        {
          q: 'Same as /what-we-dont-do?',
          a: 'That page is the claim list. This piece is the shorter sourcing note.',
        },
        {
          q: 'Will you print a farm name on the menu?',
          a: 'Only after written verification. Otherwise the ingredient is named as food.',
        },
      ],
      related: [
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'cleanup-standard',
      name: 'Cleanup standard',
      h1: 'Oahu cleanup — Kahala kitchens left cleaner than we found them.',
      title: 'Oahu cleanup — Kahala kitchens left cleaner than we found them | myCHEF',
      description:
        'Oahu cleanup standard: shop, cook, serve, leave the kitchen cleaner. Distinct from /private-chef and /journal/what-is-included.',
      lede:
        '/private-chef is what a night includes. This blog note is the last hour — the Kahala sink, the Ko Olina island, left cleaner than we found them.',
      photo: 'blogCleanupOahu',
      body: [
        'Cleanup is in. We do not leave a Gold Coast kitchen as we found it. That is the standard, not an add-on.',
        'Rentals and venue fees still print as their own lines. Cleanup is not a rental. Open /journal/what-is-included for the split.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one dinner’s last hour.`,
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is the inclusion document. This piece is the shorter cleanup note.',
        },
        {
          q: 'Is cleanup extra?',
          a: 'No. It is in. Open /quote.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'condo-load-in',
      name: 'Condo load-in',
      h1: 'Oahu condo load-in — freight elevators and quiet hours in writing.',
      title: 'Oahu condo load-in — freight elevators and quiet hours in writing | myCHEF',
      description:
        'Oahu condo load-in: freight elevators, COIs, quiet hours. Distinct from /waikiki and /blog/dining-in-waikiki.',
      lede:
        '/waikiki is the dinner door. /blog/dining-in-waikiki is the cooktop note. This blog note is the load-in — written before anyone rolls a kit through a tower.',
      photo: 'blogCondoOahu',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in advance on towers. We do not discover building rules at 4 p.m.',
        'Hotel rooms without a cooktop are still declined. A tower residence with a range is the product. Send the building type on /quote.',
        'Kakaʻako and downtown pied-à-terres inherit the same load-in honesty. Compact kitchens get a menu that fits the range.',
      ],
      faqs: [
        {
          q: 'Same as /waikiki?',
          a: 'That URL is the dinner door. This piece is the short load-in note.',
        },
        {
          q: 'Do you need a COI?',
          a: 'When the building requires one, we handle it in writing before the night.',
        },
      ],
      related: [
        { path: '/waikiki', label: 'Waikīkī dinner door' },
        { path: '/blog/dining-in-waikiki', label: 'Waikīkī kitchen notes' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'family-reunions',
      name: 'Family reunions',
      h1: 'Oahu family reunions — Gold Coast houses, not a ballroom.',
      title: 'Oahu family reunions — Gold Coast houses, not a ballroom | myCHEF',
      description:
        'Oahu family reunions in houses we actually staff. Distinct from /events, /guest-counts, and /conventions.',
      lede:
        '/events is the occasion door. /guest-counts is the honesty page. This blog note is a family week in a Kahala or Ko Olina house — not HCC, not a ballroom.',
      photo: 'blogReunionOahu',
      body: [
        'Dinners 2–15, receptions about 10–75. Larger formats are quoted, not promised. HCC citywides are closed and are not our product — /conventions.',
        'Kids’ plates are planned with the adults’ menu — /kids-menus. Multi-day weeks sit on /vacation-chef.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one family table in the house.`,
      ],
      faqs: [
        {
          q: 'Same as /events?',
          a: 'That page is the occasion door. This piece is the shorter family-reunion note.',
        },
        {
          q: 'Can you staff a ballroom reunion?',
          a: 'No. We staff houses. Open /guest-counts.',
        },
      ],
      related: [
        { path: '/events', label: 'Events' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'photoshoot-catering',
      name: 'Production meals',
      h1: 'Oahu production meals — residences, not a craft-service tent.',
      title: 'Oahu production meals — residences, not a craft-service tent | myCHEF',
      description:
        'Oahu crew and production meals in residences with kitchens. Distinct from /catering and /conventions.',
      lede:
        '/catering is the staffed-room product. /conventions says HCC is closed. This blog note is crew meals in a house — identical plates, a kitchen, not a tent.',
      photo: 'blogShootOahu',
      body: [
        'Film and stills crews in residences are the same staffed-room product as a villa event. We do not staff craft-service tents or convention holds.',
        'Identical plates, one dietary note on the quote — /dietary. Guest counts we staff stay published — /guest-counts.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is production food in a Kahala kitchen.`,
      ],
      faqs: [
        {
          q: 'Same as /catering?',
          a: 'That page is the staffed-room door. This piece is the shorter production-meal note.',
        },
        {
          q: 'Can you run craft service on a lot?',
          a: 'No. Residences with kitchens. Open /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/catering', label: 'Catering' },
        { path: '/conventions', label: 'Conventions' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'proposal-dinners',
      name: 'Proposal dinners',
      h1: 'Oahu proposal dinners — Kahala tables for two, not a restaurant hold.',
      title: 'Oahu proposal dinners — Kahala tables for two, not a restaurant hold | myCHEF',
      description:
        'Oahu proposal dinners in a house kitchen. Distinct from /honeymoon-dinners and /fine-dining/romantic-dinner.',
      lede:
        '/honeymoon-dinners is two seats after the wedding. /fine-dining/romantic-dinner is the course stack. This blog note is the ask — in a Kahala dining room, not a restaurant hold.',
      photo: 'blogProposalOahu',
      body: [
        'A proposal is two seats in a kitchen we can actually staff. We do not hold a restaurant table. We do not stage a public ask on a Waikīkī lawn.',
        'Honeymoon nights sit on /honeymoon-dinners. The romantic-dinner SKU is /fine-dining/romantic-dinner. This article is the shorter proposal note beside them.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one table for two in the house.`,
      ],
      faqs: [
        {
          q: 'Same as /honeymoon-dinners?',
          a: 'That page is two seats after the wedding. This piece is the shorter proposal note.',
        },
        {
          q: 'Can you hold a restaurant table?',
          a: 'No. We cook in the house. Open /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Honeymoon dinners' },
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner SKU' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'estate-logistics',
      name: 'Estate logistics',
      h1: 'Oahu estate logistics — Gold Coast driveways, generators, and the gate.',
      title: 'Oahu estate logistics — Gold Coast driveways, generators, and the gate | myCHEF',
      description:
        'Oahu estate logistics: driveways, generators, gates. Distinct from /blog/condo-load-in and /coverage.',
      lede:
        '/blog/condo-load-in is the tower. /coverage is the zone map. This blog note is the house — the Gold Coast driveway, the generator, the gate code in writing.',
      photo: 'blogEstateOahu',
      body: [
        'Estate nights need a driveway we can actually use, a gate code, and whether a generator will run the range. We do not discover those at 4 p.m.',
        'Towers sit on /blog/condo-load-in. Gold Coast rooms sit on /gold-coast. Send the access packet on /quote.',
        'A house without a functioning cooktop is still declined. Logistics do not invent a kitchen.',
      ],
      faqs: [
        {
          q: 'Same as /blog/condo-load-in?',
          a: 'That note is the tower. This piece is the shorter estate-driveway note.',
        },
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is how we reach the house.',
        },
      ],
      related: [
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/gold-coast', label: 'Gold Coast houses' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'shoulder-season',
      name: 'Shoulder season',
      h1: 'Oahu shoulder dates — April and November still need a written kitchen.',
      title: 'Oahu shoulder dates — April and November still need a written kitchen | myCHEF',
      description:
        'Oahu shoulder dates are not automatic availability. Distinct from /journal/how-far-ahead-to-book.',
      lede:
        '/journal/how-far-ahead-to-book is the peak calendar. This blog note is April and November — quieter months that still need a Gold Coast kitchen in writing, not a last-minute yes.',
      photo: 'blogShoulderOahu',
      body: [
        'Shoulder months are quieter, not empty. A Kahala house in April still needs a cooktop, a count, and a written quote. We do not invent a last-minute roster because the calendar looks open.',
        'Peak months stay on /journal/how-far-ahead-to-book. Convention weeks stay on /conventions. This article is the quieter window beside them.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is why a shoulder night is still a written kitchen.`,
      ],
      faqs: [
        {
          q: 'Same as /journal/how-far-ahead-to-book?',
          a: 'That piece is the peak calendar. This note is the shorter shoulder-month note.',
        },
        {
          q: 'Are April nights walk-in?',
          a: 'No. Send /quote. We still write the kitchen.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-lanikai',
      name: 'Dining in Lanikai',
      h1: 'Lanikai notes — 30-day houses, quieter than Kailua.',
      title: 'Lanikai kitchen notes — 30-day houses, quieter than Kailua | myCHEF',
      description:
        'Short Lanikai notes: quieter 30-day beach houses. Not a live corridor URL. Distinct from /kailua and /blog/dining-in-kailua.',
      lede:
        '/kailua is the nearest live dinner door. This blog note is Lanikai — the same 30-day rule, quieter inventory, not a second corridor page.',
      photo: 'dinLanikai',
      body: [
        'Same 30-day-estate rule as Kailua, quieter beach-house inventory. Galley kitchens are common; we say so on the quote. Weekend tourist drop-ins are declined.',
        'There is no /lanikai corridor URL. /kailua stays the windward dinner door. Kamaʻāina weeks sit on /kamaaina.',
        'Send the address and the stay length on /quote. A one-night tourist dinner without a range is still declined.',
      ],
      faqs: [
        {
          q: 'Is /lanikai a dinner door?',
          a: 'No. Open /kailua. This piece is the short Lanikai kitchen note.',
        },
        {
          q: 'Same as /blog/dining-in-kailua?',
          a: 'That note is Kailua. This piece is the quieter house next door.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua dinner door' },
        { path: '/blog/dining-in-kailua', label: 'Kailua kitchen notes' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-hawaii-kai',
      name: 'Dining in Hawaiʻi Kai',
      h1: 'Hawaiʻi Kai notes — east Honolulu households, not a villa SKU.',
      title: 'Hawaiʻi Kai kitchen notes — east Honolulu households | myCHEF',
      description:
        'Short Hawaiʻi Kai notes: resident entertaining more than tourist villas. Distinct from /honolulu and /kamaaina.',
      lede:
        '/honolulu is the town dinner door. /kamaaina is the resident line. This blog note is East Honolulu — traffic planned into the chef day, not a tourist villa SKU.',
      photo: 'dinHawaiiKai',
      body: [
        'East Honolulu households. Resident entertaining more than tourist villas. Traffic is planned into the chef day. A cooktop is still required.',
        'There is no /hawaii-kai corridor URL. Town dinners stay on /honolulu. Weekly resident service stays on /kamaaina.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one East Honolulu table.`,
      ],
      faqs: [
        {
          q: 'Is /hawaii-kai a dinner door?',
          a: 'No. Open /honolulu. This piece is the short East Honolulu kitchen note.',
        },
        {
          q: 'Same as /kamaaina?',
          a: 'That page is the resident line. This piece is the shorter Hawaiʻi Kai note beside it.',
        },
      ],
      related: [
        { path: '/honolulu', label: 'Honolulu dinner door' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-diamond-head',
      name: 'Dining at Diamond Head',
      h1: 'Diamond Head notes — Gold Coast-adjacent rooms, not /gold-coast.',
      title: 'Diamond Head kitchen notes — Gold Coast-adjacent rooms | myCHEF',
      description:
        'Short Diamond Head notes: adjacent estates with real dining rooms. Distinct from /kahala and /gold-coast.',
      lede:
        '/kahala is the dinner door. /gold-coast is the estate cell. This blog note is Diamond Head-adjacent houses — load-in in writing, not a second Gold Coast page.',
      photo: 'dinDiamondHead',
      body: [
        'Gold Coast-adjacent estates and residences with real dining rooms. Building rules vary; we confirm load-in in writing. Celebration tables of 4–15.',
        'There is no /diamond-head corridor URL. /kahala stays the dinner door. /gold-coast stays the estate cell.',
        'Hotel suites without a cooktop stay declined. Send the building type on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /gold-coast?',
          a: 'That page is the estate cell. This piece is the shorter Diamond Head kitchen note.',
        },
        {
          q: 'Same as /kahala?',
          a: 'That URL is the dinner door. This piece sits next to it, not on it.',
        },
      ],
      related: [
        { path: '/kahala', label: 'Kahala dinner door' },
        { path: '/gold-coast', label: 'Gold Coast estates' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kakaako',
      name: 'Dining in Kakaʻako',
      h1: 'Kakaʻako notes — compact tower ranges, not a rooftop we do not own.',
      title: 'Kakaʻako kitchen notes — compact tower ranges | myCHEF',
      description:
        'Short Kakaʻako notes: tower residences, compact kitchens. Distinct from /honolulu and /blog/condo-load-in.',
      lede:
        '/honolulu is the town dinner door. /blog/condo-load-in is the freight elevator. This blog note is the compact Kakaʻako range — not a rooftop we do not control.',
      photo: 'dinKakaako',
      body: [
        'Tower residences. Kitchens are often compact; menus adapt. Freight elevators and quiet hours are handled in writing before the night.',
        'There is no /kakaako corridor URL. We do not sell a rooftop we do not control. Load-in sits on /blog/condo-load-in.',
        'A unit without a functioning cooktop is declined. Send the building packet on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /blog/condo-load-in?',
          a: 'That note is the dock. This piece is the shorter Kakaʻako kitchen note.',
        },
        {
          q: 'Can you cook on a rooftop?',
          a: 'Not a rooftop we do not own. A tower residence with a range. Open /quote.',
        },
      ],
      related: [
        { path: '/honolulu', label: 'Honolulu dinner door' },
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-downtown',
      name: 'Dining downtown',
      h1: 'Downtown notes — pied-à-terre ranges, not an HCC takeover.',
      title: 'Downtown Honolulu kitchen notes — pied-à-terre ranges, not HCC | myCHEF',
      description:
        'Short downtown Honolulu notes: compact kitchens, loading, not restaurant takeovers. Distinct from /honolulu and /conventions.',
      lede:
        '/honolulu is the town dinner door. /conventions says HCC citywides are closed. This blog note is the pied-à-terre range — parking and loading, not a restaurant we do not own.',
      photo: 'dinDowntown',
      body: [
        'Pied-à-terre kitchens and private dining rooms — not restaurant takeovers. Parking and loading are the constraint, not distance. Small celebrations and executive dinners off HCC.',
        'There is no /downtown corridor URL. HCC citywides stay closed through 2027 — /conventions. A unit without a cooktop is declined.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one downtown table in the house.`,
      ],
      faqs: [
        {
          q: 'Same as /honolulu?',
          a: 'That URL is the dinner door. This piece is the shorter downtown kitchen note.',
        },
        {
          q: 'Can you take over a restaurant?',
          a: 'No. Open /conventions and /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/honolulu', label: 'Honolulu dinner door' },
        { path: '/conventions', label: 'Conventions' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kaneohe',
      name: 'Dining in Kāneʻohe',
      h1: 'Kāneʻohe notes — quieter windward town, published surcharge.',
      title: 'Kāneʻohe kitchen notes — quieter windward town, published surcharge | myCHEF',
      description:
        'Short Kāneʻohe notes: quieter than Kailua, still a drive. Distinct from /kailua and /blog/dining-in-kailua.',
      lede:
        '/kailua is the windward dinner door. This blog note is Kāneʻohe — quieter town, published surcharge, not a second 30-day beach-house page.',
      photo: 'dinKaneohe',
      body: [
        'Windward town — quieter than Kailua, still a drive from town. Published surcharge, quoted with the menu. Household dinners and multi-day stays.',
        'There is no /kaneohe corridor URL. /kailua stays the 30-day dinner door. A cooktop is still required.',
        'Send the address on /quote. We will not hide the drive inside the menu.',
      ],
      faqs: [
        {
          q: 'Same as /kailua?',
          a: 'That URL is the dinner door. This piece is the quieter town next to it.',
        },
        {
          q: 'Is the drive included?',
          a: 'No. It prints as a surcharge line. Open /coverage.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua dinner door' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-ewa',
      name: 'Dining in ʻEwa',
      h1: 'ʻEwa notes — leeward households, Ko Olina provisioning.',
      title: 'ʻEwa kitchen notes — leeward households, Ko Olina provisioning | myCHEF',
      description:
        'Short ʻEwa / Kapolei notes: leeward residential, west-side base. Distinct from /ko-olina.',
      lede:
        '/ko-olina is the villa dinner door. This blog note is ʻEwa and Kapolei — resident households and west-side overflow, not a resort-residence clone.',
      photo: 'dinEwa',
      body: [
        'Leeward residential. Closer to Ko Olina provisioning than to Waikīkī. West-side base. No town surcharge. Resident households and west-side villa overflow.',
        'There is no /ewa corridor URL. /ko-olina stays the short-stay villa door. A cooktop is still required.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one leeward household table.`,
      ],
      faqs: [
        {
          q: 'Same as /ko-olina?',
          a: 'That URL is the villa dinner door. This piece is the shorter leeward household note.',
        },
        {
          q: 'Is /ewa a dinner door?',
          a: 'No. Open /ko-olina or /quote.',
        },
      ],
      related: [
        { path: '/ko-olina', label: 'Ko Olina dinner door' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  maui: [
    {
      slug: 'dining-in-wailea',
      name: 'Dining in Wailea',
      h1: 'A Wailea table — kitchen notes, not the corridor page.',
      title: 'Wailea kitchen notes — villa table, not the corridor page | myCHEF',
      description:
        'Short Wailea kitchen notes: resort residences with real kitchens. Distinct from /wailea.',
      lede:
        '/wailea is the dinner door. This blog note is the villa table — private, in the house, not a resort communal seating.',
      photo: 'dinWailea',
      body: [
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This article does not steal that title.`,
        'Hotel-zoned residences with kitchens. December–March books early. We shop South Maui the day of service when the kitchen holds the draft.',
        'The corridor page is /wailea. The directory is /locations. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /wailea?',
          a: 'That URL is the dinner door. This piece is a short kitchen note beside it.',
        },
        {
          q: 'Is this a resort chef’s table?',
          a: 'No. Those seat you with strangers. Ours is private, in your kitchen.',
        },
      ],
      related: [
        { path: '/wailea', label: 'Wailea dinner door' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kaanapali',
      name: 'Dining in Kāʻanapali',
      h1: 'Kaanapali notes — West Maui timing written before arrival.',
      title: 'Kaanapali kitchen notes — West Maui timing on paper | myCHEF',
      description:
        'Short Kāʻanapali notes: West Maui traffic planned into arrival. Distinct from /kaanapali and /west-maui.',
      lede:
        '/kaanapali is the dinner door. /west-maui is Saturday timing. This blog note is why the drive is planned, not discovered.',
      photo: 'dinKaanapali',
      body: [
        'West Maui, named honestly. Same CORE band as Wailea. Traffic is planned into arrival — /west-maui — not a surprise line.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one West Maui residence table.`,
        'Resort residences with kitchens. Family Feast and the bar add-on stack on the same quote when the room holds them.',
      ],
      faqs: [
        {
          q: 'Same as /kaanapali?',
          a: 'That URL is the dinner door. This piece is the short timing note.',
        },
        {
          q: 'Same as /west-maui?',
          a: 'That page is the corridor cell. This piece is the shorter kitchen note beside it.',
        },
      ],
      related: [
        { path: '/kaanapali', label: 'Kāʻanapali dinner door' },
        { path: '/west-maui', label: 'West Maui timing' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-lahaina',
      name: 'Dining near Lahaina',
      h1: 'Lahaina search notes — we cook next door, in kitchens that work.',
      title: 'Lahaina search notes — we cook next door | myCHEF',
      description:
        'Short Lahaina-search notes: West Maui residences with kitchens. Distinct from /lahaina.',
      lede:
        '/lahaina is the dinner door that tells the geography honestly. This blog note is the same sentence in short form.',
      photo: 'dinLahaina',
      body: [
        'People search Lahaina. We cook in Kāʻanapali, Nāpili, and Kapalua residences with kitchens. We do not market a luxury-dining destination the town is not.',
        'If the kitchen works, we book it. If it does not, we say so before a deposit. Moving from Wailea to Lahaina after a deposit can change the travel line.',
        'Open /lahaina for the corridor page. Open /west-maui for Saturday timing.',
      ],
      faqs: [
        {
          q: 'Same as /lahaina?',
          a: 'That URL is the dinner door. This piece is the short geography note.',
        },
        {
          q: 'Can you come to a Lahaina address?',
          a: 'Tell us the exact property. We serve West Maui residences with kitchens.',
        },
      ],
      related: [
        { path: '/lahaina', label: 'Lahaina dinner door' },
        { path: '/west-maui', label: 'West Maui timing' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kihei',
      name: 'Dining in Kīhei',
      h1: 'Kihei notes — family tables, not a Wailea clone page.',
      title: 'Kihei kitchen notes — family tables, not a Wailea clone | myCHEF',
      description:
        'Short Kīhei notes: condos and vacation homes with kitchens. Distinct from /kihei.',
      lede:
        '/kihei is the dinner door. This blog note is why a Kīhei condo is not a Wailea estate copy.',
      photo: 'dinKihei',
      body: [
        'Service-led, not luxury-led. Condos and vacation homes with kitchens. Kids’ plates are normal here — /kids-menus.',
        'The menu band is the Maui rate card. There is no “discount geography.” Kitchen constraints are stated on the quote.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one South Maui family table.`,
      ],
      faqs: [
        {
          q: 'Same as /kihei?',
          a: 'That URL is the dinner door. This piece is the short family-table note.',
        },
        {
          q: 'Is Kīhei cheaper than Wailea?',
          a: 'The band is the Maui rate card. The kitchen is the constraint. Open /kihei.',
        },
      ],
      related: [
        { path: '/kihei', label: 'Kīhei dinner door' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kapalua',
      name: 'Dining in Kapalua',
      h1: 'Kapalua notes — dinners for two in the house.',
      title: 'Kapalua kitchen notes — dinners for two in the house | myCHEF',
      description:
        'Short Kapalua notes: northwest estates, dinners for two. Distinct from /kapalua.',
      lede:
        '/kapalua is the dinner door. This blog note is the two-person table in the house — wine as its own line.',
      photo: 'dinKapalua',
      body: [
        'Northwest Maui estates. Date Night is the product this bay was built for. Wine is yours or quoted separately — never buried.',
        'Wedding-week satellite dinners sit on /wedding-week. This piece is one evening in the house.',
        'Florals and photography are add-on lines. Open /kapalua for the corridor page.',
      ],
      faqs: [
        {
          q: 'Same as /kapalua?',
          a: 'That URL is the dinner door. This piece is the short two-person note.',
        },
        {
          q: 'Dinner for two?',
          a: 'Yes — cooked in the villa. Open /kapalua.',
        },
      ],
      related: [
        { path: '/kapalua', label: 'Kapalua dinner door' },
        { path: '/west-maui', label: 'West Maui timing' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-makena',
      name: 'Dining in Makena',
      h1: 'Makena notes — quieter South Maui, wet-weather backup written.',
      title: 'Makena kitchen notes — quieter South Maui inventory | myCHEF',
      description:
        'Short Makena notes: south of Wailea, still base zone, outdoor backup. Distinct from /makena.',
      lede:
        '/makena is the dinner door. This blog note is the quieter inventory — and the covered backup before anyone sets an outdoor table.',
      photo: 'dinMakena',
      body: [
        'South of Wailea, still base zone. Same CORE band. Outdoor tables always have a written wet-weather plan.',
        'Family weeks and celebration dinners. Not a surcharge corridor. Not a Wailea clone.',
        'Open /makena for the corridor page. Open /south-maui for the corridor cell.',
      ],
      faqs: [
        {
          q: 'Same as /makena?',
          a: 'That URL is the dinner door. This piece is the short outdoor-backup note.',
        },
        {
          q: 'Outdoor dinner?',
          a: 'Yes, with a written wet-weather plan before the day.',
        },
      ],
      related: [
        { path: '/makena', label: 'Makena dinner door' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'grocery-at-cost',
      name: 'Groceries at cost',
      h1: 'Maui grocery line — South Maui shop, billed at cost.',
      title: 'Maui groceries billed at cost — receipts on the quote | myCHEF',
      description:
        'Maui groceries print at cost with receipts. Distinct from /pricing and /journal/what-is-included.',
      lede:
        '/pricing is the tariff. /journal/what-is-included is the written split. This blog note is the grocery line — shopped that day in Kihei or Wailea, billed at cost.',
      photo: 'blogGroceryMaui',
      body: [
        'We shop the day of service. Groceries print at cost with receipts. They are not swallowed by the CORE band on a Wailea or Kapalua night.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one villa shop, itemised.`,
        'Alcohol is a different line — /blog/wine-and-alcohol. Saturday West Maui arrival is planned, not hidden — /west-maui.',
      ],
      faqs: [
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is how groceries print beside it.',
        },
        {
          q: 'Is there a grocery markup?',
          a: 'No. Cost plus receipts. Open /quote.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Maui rate card' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'wine-and-alcohol',
      name: 'Wine and alcohol',
      h1: 'Maui wine and spirits — Wailea pours as their own line.',
      title: 'Maui wine and spirits — Wailea pours as their own line | myCHEF',
      description:
        'Maui wine, beer, and spirits never hide inside the dinner band. Distinct from /bar and /private-chef.',
      lede:
        '/bar is the bartender add-on. /mobile-bar is the 4-hour package. This blog note is the bottle line — yours, or quoted separately.',
      photo: 'blogWineMaui',
      body: [
        'Bring your own, or we quote a separate pour. Wine, beer, and spirits never hide inside the CORE band on a Wailea night.',
        'A bartender is /staffing/bartenders or /bar. This piece is the alcohol line on the quote, not the person pouring it.',
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: 'That URL is the bartender add-on. This piece is why the bottles print as their own line.',
        },
        {
          q: 'Can you bury wine in the menu price?',
          a: 'No. Open /journal/what-is-included.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'weather-backup',
      name: 'Wet-weather backup',
      h1: 'Maui lānai tables get a covered backup in writing.',
      title: 'Maui lānai tables get a covered backup in writing | myCHEF',
      description:
        'Maui outdoor tables get a written wet-weather backup before the day. Distinct from /coverage and /makena.',
      lede:
        '/coverage is the zone map. /makena names the quieter inventory. This blog note is the covered room we write before anyone sets a Wailea lawn table.',
      photo: 'blogWeatherMaui',
      body: [
        'Outdoor tables on South Maui and West Maui always have a written indoor backup. We do not discover rain at 4 p.m.',
        'Makena outdoor setups inherit the same rule — /makena. The backup is a room, not a tent we do not own.',
        'Send the address type on /quote. If the house has no covered fallback, we say so before a deposit.',
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is the short outdoor-backup note.',
        },
        {
          q: 'Same as /makena?',
          a: 'That page is the corridor. This piece is the shorter weather note beside it.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/makena', label: 'Makena dinner door' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'sourcing-honesty',
      name: 'Sourcing honesty',
      h1: 'Maui sourcing — most food still arrives by ship. We say so.',
      title: 'Maui sourcing honesty — most food still arrives by ship | myCHEF',
      description:
        'Maui sourcing honesty: Hawaiʻi still imports most of its food. Named farms only after written verification. Distinct from /what-we-dont-do.',
      lede:
        '/what-we-dont-do is the claim list. /menus is the process. This blog note is why we will not print a Upcountry farm name we have not verified.',
      photo: 'blogSourceMaui',
      body: [
        'Hawaiʻi still imports most of its food. We cook what the shop and the boat actually hold that day. We do not invent a “farm-to-table” brand for Wailea.',
        'Named farms only after written verification. Fish is named as food, not décor. Upcountry is a surcharge zone even when the draft names a producer — /coverage.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is how a Maui draft stays honest.`,
      ],
      faqs: [
        {
          q: 'Same as /what-we-dont-do?',
          a: 'That page is the claim list. This piece is the shorter sourcing note.',
        },
        {
          q: 'Will you print a farm name on the menu?',
          a: 'Only after written verification. Otherwise the ingredient is named as food.',
        },
      ],
      related: [
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'cleanup-standard',
      name: 'Cleanup standard',
      h1: 'Maui cleanup — Wailea kitchens left cleaner than we found them.',
      title: 'Maui cleanup — Wailea kitchens left cleaner than we found them | myCHEF',
      description:
        'Maui cleanup standard: shop, cook, serve, leave the kitchen cleaner. Distinct from /private-chef and /journal/what-is-included.',
      lede:
        '/private-chef is what a night includes. This blog note is the last hour — the Wailea island, the Kapalua galley, left cleaner than we found them.',
      photo: 'blogCleanupMaui',
      body: [
        'Cleanup is in. We do not leave a South Maui kitchen as we found it. That is the standard, not an add-on.',
        'Rentals and venue fees still print as their own lines. Cleanup is not a rental. Open /journal/what-is-included for the split.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one dinner’s last hour.`,
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is the inclusion document. This piece is the shorter cleanup note.',
        },
        {
          q: 'Is cleanup extra?',
          a: 'No. It is in. Open /quote.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'condo-load-in',
      name: 'Condo load-in',
      h1: 'Maui condo load-in — South Maui quiet hours in writing.',
      title: 'Maui condo load-in — South Maui quiet hours in writing | myCHEF',
      description:
        'Maui condo load-in: freight elevators, COIs, quiet hours. Distinct from /kihei, /wailea, and /blog/dining-in-kihei.',
      lede:
        '/kihei is the dinner door. /blog/dining-in-kihei is the cooktop note. This blog note is the load-in — written before anyone rolls a kit through a South Maui tower.',
      photo: 'blogCondoMaui',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in advance on towers. We do not discover building rules at 4 p.m.',
        'Hotel rooms without a cooktop are still declined. A tower residence with a range is the product. Send the building type on /quote.',
        'West Maui stacks inherit the same load-in honesty — /west-maui. Compact kitchens get a menu that fits the range.',
      ],
      faqs: [
        {
          q: 'Same as /kihei?',
          a: 'That URL is the dinner door. This piece is the short load-in note.',
        },
        {
          q: 'Do you need a COI?',
          a: 'When the building requires one, we handle it in writing before the night.',
        },
      ],
      related: [
        { path: '/kihei', label: 'Kīhei dinner door' },
        { path: '/blog/dining-in-kihei', label: 'Kīhei kitchen notes' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'family-reunions',
      name: 'Family reunions',
      h1: 'Maui family reunions — South Maui houses, not a ballroom.',
      title: 'Maui family reunions — South Maui houses, not a ballroom | myCHEF',
      description:
        'Maui family reunions in houses we actually staff. Distinct from /events, /guest-counts, and /south-maui.',
      lede:
        '/events is the occasion door. /guest-counts is the honesty page. This blog note is a family week in a Wailea or Kīhei house — not a resort ballroom.',
      photo: 'blogReunionMaui',
      body: [
        'Dinners 2–15, receptions about 10–75. Larger formats are quoted, not promised. Resort ballrooms are not our product — /south-maui.',
        'Kids’ plates are planned with the adults’ menu — /kids-menus. Multi-day weeks sit on /vacation-chef.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one family table in the house.`,
      ],
      faqs: [
        {
          q: 'Same as /events?',
          a: 'That page is the occasion door. This piece is the shorter family-reunion note.',
        },
        {
          q: 'Can you staff a ballroom reunion?',
          a: 'No. We staff houses. Open /guest-counts.',
        },
      ],
      related: [
        { path: '/events', label: 'Events' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'photoshoot-catering',
      name: 'Production meals',
      h1: 'Maui production meals — villas, not a craft-service tent.',
      title: 'Maui production meals — villas, not a craft-service tent | myCHEF',
      description:
        'Maui crew and production meals in villas with kitchens. Distinct from /catering and /south-maui.',
      lede:
        '/catering is the staffed-room product. This blog note is crew meals in a Wailea villa — identical plates, a kitchen, not a tent on the lawn.',
      photo: 'blogShootMaui',
      body: [
        'Film and stills crews in villas are the same staffed-room product as a family event. We do not staff craft-service tents or resort holds.',
        'Identical plates, one dietary note on the quote — /dietary. Guest counts we staff stay published — /guest-counts.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is production food in a Wailea kitchen.`,
      ],
      faqs: [
        {
          q: 'Same as /catering?',
          a: 'That page is the staffed-room door. This piece is the shorter production-meal note.',
        },
        {
          q: 'Can you run craft service on a lot?',
          a: 'No. Villas with kitchens. Open /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/catering', label: 'Catering' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'proposal-dinners',
      name: 'Proposal dinners',
      h1: 'Maui proposal dinners — Wailea tables for two, not a restaurant hold.',
      title: 'Maui proposal dinners — Wailea tables for two, not a restaurant hold | myCHEF',
      description:
        'Maui proposal dinners in a villa kitchen. Distinct from /honeymoon-dinners and /fine-dining/romantic-dinner.',
      lede:
        '/honeymoon-dinners is two seats after the wedding. /fine-dining/romantic-dinner is the course stack. This blog note is the ask — on a Wailea lānai, not a restaurant hold.',
      photo: 'blogProposalMaui',
      body: [
        'A proposal is two seats in a kitchen we can actually staff. We do not hold a restaurant table. We do not stage a public ask on a resort lawn.',
        'Honeymoon nights sit on /honeymoon-dinners. The romantic-dinner SKU is /fine-dining/romantic-dinner. This article is the shorter proposal note beside them.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one table for two in the house.`,
      ],
      faqs: [
        {
          q: 'Same as /honeymoon-dinners?',
          a: 'That page is two seats after the wedding. This piece is the shorter proposal note.',
        },
        {
          q: 'Can you hold a restaurant table?',
          a: 'No. We cook in the house. Open /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Honeymoon dinners' },
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner SKU' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'estate-logistics',
      name: 'Estate logistics',
      h1: 'Maui estate logistics — Wailea driveways, generators, and the gate.',
      title: 'Maui estate logistics — Wailea driveways, generators, and the gate | myCHEF',
      description:
        'Maui estate logistics: driveways, generators, gates. Distinct from /blog/condo-load-in and /coverage.',
      lede:
        '/blog/condo-load-in is the tower. /coverage is the zone map. This blog note is the house — the Wailea driveway, the generator, the gate code in writing.',
      photo: 'blogEstateMaui',
      body: [
        'Estate nights need a driveway we can actually use, a gate code, and whether a generator will run the range. We do not discover those at 4 p.m.',
        'Towers sit on /blog/condo-load-in. South Maui rooms sit on /south-maui. Send the access packet on /quote.',
        'A house without a functioning cooktop is still declined. Logistics do not invent a kitchen.',
      ],
      faqs: [
        {
          q: 'Same as /blog/condo-load-in?',
          a: 'That note is the tower. This piece is the shorter estate-driveway note.',
        },
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is how we reach the house.',
        },
      ],
      related: [
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'shoulder-season',
      name: 'Shoulder season',
      h1: 'Maui shoulder dates — April and November still need a written kitchen.',
      title: 'Maui shoulder dates — April and November still need a written kitchen | myCHEF',
      description:
        'Maui shoulder dates are not automatic availability. Distinct from /journal/how-far-ahead-to-book.',
      lede:
        '/journal/how-far-ahead-to-book is the peak calendar. This blog note is April and November — quieter months that still need a Wailea kitchen in writing, not a last-minute yes.',
      photo: 'blogShoulderMaui',
      body: [
        'Shoulder months are quieter, not empty. A Wailea house in April still needs a cooktop, a count, and a written quote. We do not invent a last-minute roster because the calendar looks open.',
        'Peak months stay on /journal/how-far-ahead-to-book. Wedding-week houses stay on /wedding-week. This article is the quieter window beside them.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is why a shoulder night is still a written kitchen.`,
      ],
      faqs: [
        {
          q: 'Same as /journal/how-far-ahead-to-book?',
          a: 'That piece is the peak calendar. This note is the shorter shoulder-month note.',
        },
        {
          q: 'Are April nights walk-in?',
          a: 'No. Send /quote. We still write the kitchen.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-upcountry',
      name: 'Dining Upcountry',
      h1: 'Upcountry notes — elevation surcharge, farms only after verification.',
      title: 'Upcountry kitchen notes — elevation surcharge, verified farms | myCHEF',
      description:
        'Short Upcountry Maui notes: published surcharge, named farms only after written verification. Distinct from /coverage and /blog/sourcing-honesty.',
      lede:
        '/coverage is the zone map. /blog/sourcing-honesty is why we will not print a farm name we have not verified. This blog note is the elevation drive itself.',
      photo: 'dinUpcountry',
      body: [
        'Elevation and drive time. Published surcharge, quoted with the menu. Named farms only after written verification. Outdoor setups inherit a wet-weather backup.',
        'There is no /upcountry corridor URL. Wailea stays the South Maui dinner door — /wailea. This article is why the drive is a line.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one Upcountry table that justifies the drive.`,
      ],
      faqs: [
        {
          q: 'Is /upcountry a dinner door?',
          a: 'No. Open /coverage. This piece is the short elevation note.',
        },
        {
          q: 'Will you print a farm name?',
          a: 'Only after written verification. Open /blog/sourcing-honesty.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-napili',
      name: 'Dining in Nāpili',
      h1: 'Nāpili notes — West Maui houses, never a Lahaina clone.',
      title: 'Nāpili kitchen notes — West Maui houses, never a Lahaina clone | myCHEF',
      description:
        'Short Nāpili notes: West Maui with Kāʻanapali and Kapalua. Distinct from /lahaina, /kaanapali, and /west-maui.',
      lede:
        '/kaanapali and /kapalua are the live West Maui dinner doors. /west-maui is the corridor cell. This blog note is Nāpili — never marketed as a Lahaina destination page.',
      photo: 'dinNapili',
      body: [
        'West Maui with Kāʻanapali and Kapalua — never a Lahaina destination page. Same West Maui timing rules. Villa weeks and small celebrations.',
        'There is no /napili corridor URL. /lahaina stays its own dinner door and is not copied here. Saturday West Maui arrival is planned, not assumed.',
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Is this a Lahaina page?',
          a: 'No. Open /lahaina for that corridor. This piece is Nāpili.',
        },
        {
          q: 'Same as /west-maui?',
          a: 'That page is the corridor cell. This piece is the shorter Nāpili kitchen note.',
        },
      ],
      related: [
        { path: '/kapalua', label: 'Kapalua dinner door' },
        { path: '/west-maui', label: 'West Maui corridor' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-paia',
      name: 'Dining in Pāʻia',
      h1: 'Pāʻia notes — quote-only North Shore, not a doorway.',
      title: 'Pāʻia kitchen notes — quote-only North Shore, not a doorway | myCHEF',
      description:
        'Short Pāʻia / Haiku notes: quote-only, extended drive. Distinct from /coverage and /wailea.',
      lede:
        '/coverage is the zone map. /wailea is the South Maui dinner door. This blog note is Pāʻia and Haiku — quoted with the menu, not a doorway destination page.',
      photo: 'dinPaia',
      body: [
        'North Shore module — quoted with the menu, not a doorway destination page. Extended drive. Estate dinners when the drive is planned, not stacked with Wailea.',
        'There is no /paia corridor URL. We will not publish a flat fee for this cell. Send the address on /quote.',
        'A cooktop is still required. We do not invent a same-day Wailea-plus-Pāʻia chef day.',
      ],
      faqs: [
        {
          q: 'Is /paia a dinner door?',
          a: 'No. Quote-only. Open /coverage, then /quote.',
        },
        {
          q: 'Can you stack this with Wailea the same day?',
          a: 'No. The drive is planned, not stacked. Open /quote.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/wailea', label: 'Wailea dinner door' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-honokowai',
      name: 'Dining in Honokōwai',
      h1: 'Honokōwai notes — West Maui condos, not a Kapalua clone.',
      title: 'Honokōwai kitchen notes — West Maui condos, not a Kapalua clone | myCHEF',
      description:
        'Short Honokōwai notes: residential strip, condo kitchens. Distinct from /kapalua, /kaanapali, and /blog/condo-load-in.',
      lede:
        '/kaanapali and /kapalua are the live dinner doors. /blog/condo-load-in is the freight elevator. This blog note is the Honokōwai strip — multi-day chef days more than one-off halos.',
      photo: 'dinHonokowai',
      body: [
        'West Maui residential strip between Kāʻanapali and Kapalua. Condo kitchens common. Multi-day chef days more than one-off halo dinners.',
        'There is no /honokowai corridor URL. Compact kitchens get a menu that fits the range. Load-in honesty sits on /blog/condo-load-in.',
        'Hotel rooms without a cooktop are still declined. Send the building type on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /kapalua?',
          a: 'That URL is the dinner door. This piece is the shorter condo-strip note.',
        },
        {
          q: 'Same as /blog/condo-load-in?',
          a: 'That note is the dock. This piece is the Honokōwai kitchen.',
        },
      ],
      related: [
        { path: '/kaanapali', label: 'Kāʻanapali dinner door' },
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-makawao',
      name: 'Dining in Makawao',
      h1: 'Makawao notes — Upcountry town, not the elevation cell.',
      title: 'Makawao kitchen notes — Upcountry town, not the elevation cell | myCHEF',
      description:
        'Short Makawao notes: Upcountry town, elevation surcharge. Distinct from /blog/dining-in-upcountry.',
      lede:
        '/blog/dining-in-upcountry is the elevation drive. This blog note is Makawao town — retreat houses and estate tables, weather that can turn on outdoor setups.',
      photo: 'dinMakawao',
      body: [
        'Upcountry town. Elevation surcharge applies. Weather can turn on outdoor setups. Retreat houses and estate tables that justify the drive.',
        'There is no /makawao corridor URL. Named farms only after written verification. A cooktop is still required.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one Makawao table.`,
      ],
      faqs: [
        {
          q: 'Same as /blog/dining-in-upcountry?',
          a: 'That note is the elevation cell. This piece is the town kitchen.',
        },
        {
          q: 'Is /makawao a dinner door?',
          a: 'No. Open /coverage, then /quote.',
        },
      ],
      related: [
        { path: '/blog/dining-in-upcountry', label: 'Upcountry kitchen notes' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-waikapu',
      name: 'Dining in Waikapū',
      h1: 'Waikapū notes — central valley estates, not a resort corridor.',
      title: 'Waikapū kitchen notes — central valley estates, not a resort corridor | myCHEF',
      description:
        'Short Waikapū notes: central valley, surcharge from Wailea/West. Distinct from /wailea.',
      lede:
        '/wailea is the South Maui dinner door. This blog note is Waikapū — private estates, not visitor condos, drive time printed as a line.',
      photo: 'dinWaikapu',
      body: [
        'Central valley — not a resort corridor. Surcharge for drive time from Wailea or West Maui. Private estates, not visitor condos.',
        'There is no /waikapu corridor URL. We will not stack a Wailea lunch with a Waikapū dinner as one chef day without writing it.',
        'A cooktop is still required. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Is /waikapu a dinner door?',
          a: 'No. Open /wailea for South Maui, then /quote for the valley.',
        },
        {
          q: 'Is the drive included?',
          a: 'No. It prints as a surcharge. Open /coverage.',
        },
      ],
      related: [
        { path: '/wailea', label: 'Wailea dinner door' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-haleakala',
      name: 'Dining in Kula',
      h1: 'Haleakalā notes — Kula elevation, temperature changes the chef day.',
      title: 'Haleakalā kitchen notes — Kula elevation, temperature changes the chef day | myCHEF',
      description:
        'Short Haleakalā / Kula notes: high elevation, surcharge. Distinct from /blog/dining-in-upcountry.',
      lede:
        '/blog/dining-in-upcountry is the broader elevation cell. This blog note is Kula — temperature and drive both change the chef day, named farms only after verification.',
      photo: 'dinHaleakala',
      body: [
        'High elevation. Surcharge. Temperature and drive both change the chef day. Retreat and estate dinners. Named farms only with verification.',
        'There is no /haleakala corridor URL. We will not print a farm name we have not verified — /blog/sourcing-honesty.',
        'A cooktop is still required. Outdoor setups inherit a wet-weather backup. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /blog/dining-in-upcountry?',
          a: 'That note is the elevation cell. This piece is the Kula kitchen.',
        },
        {
          q: 'Is /haleakala a dinner door?',
          a: 'No. Open /coverage, then /quote.',
        },
      ],
      related: [
        { path: '/blog/dining-in-upcountry', label: 'Upcountry kitchen notes' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'dining-in-princeville',
      name: 'Dining in Princeville',
      h1: 'Princeville notes — inquiry, North Shore estates, cooktop required.',
      title: 'Princeville kitchen notes — inquiry, North Shore estates | myCHEF',
      description:
        'Short Princeville notes at inquiry: North Shore estates, cooktops. Distinct from /princeville.',
      lede:
        '/princeville is the dinner door at inquiry. This blog note is the estate kitchen — when we can staff, not a fake roster.',
      photo: 'dinPrinceville',
      body: [
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This article does not steal that title. Inquiry stage.`,
        'North Shore estate inventory. Surf-season winters book early. Hotel suites without a cooktop are declined even at inquiry.',
        'A band is not a Book-now button. Send the address on /quote. We write back with what we can staff.',
      ],
      faqs: [
        {
          q: 'Same as /princeville?',
          a: 'That URL is the dinner door. This piece is the short inquiry kitchen note.',
        },
        {
          q: 'Are you live?',
          a: 'Inquiry. We crew when we can staff. Send the date.',
        },
      ],
      related: [
        { path: '/princeville', label: 'Princeville dinner door' },
        { path: '/north-shore', label: 'Kauaʻi North Shore' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-poipu',
      name: 'Dining in Poʻipū',
      h1: 'Poipu notes — South Shore inquiry tables, shorter drive.',
      title: 'Poipu kitchen notes — South Shore inquiry tables | myCHEF',
      description:
        'Short Poʻipū notes at inquiry: South Shore kitchens, shorter drive from Līhuʻe. Distinct from /poipu.',
      lede:
        '/poipu is the dinner door at inquiry. This blog note is the South Shore kitchen — sunnier, closer to staging, still not a Book-now button.',
      photo: 'dinPoipu',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one South Shore inquiry table.`,
        'Sunnier than the North. Shorter drive from Līhuʻe. Same honesty: a cooktop, a written draft, inquiry until we can staff.',
        'Open /poipu for the corridor page. Open /south-shore for the corridor cell.',
      ],
      faqs: [
        {
          q: 'Same as /poipu?',
          a: 'That URL is the dinner door. This piece is the short South Shore kitchen note.',
        },
        {
          q: 'Is the South cheaper than the North?',
          a: 'The published band is the Kauai rate card. Drive time is the difference. Open /poipu.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū dinner door' },
        { path: '/south-shore', label: 'South Shore kitchens' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-hanalei',
      name: 'Dining in Hanalei',
      h1: 'Hanalei notes — bridge weather on the draft, not the night.',
      title: 'Hanalei kitchen notes — bridge weather on the draft | myCHEF',
      description:
        'Short Hanalei notes at inquiry: bridge weather, 72-hour window. Distinct from /hanalei and /hanalei-bridge.',
      lede:
        '/hanalei is the dinner door. /hanalei-bridge is the weather clause. This blog note is why that clause is on the draft before anyone shops.',
      photo: 'dinHanalei',
      body: [
        'North Shore town. Weather and road reality published up front. Far-North events inherit the bridge clause — 72-hour notice. Reschedule rather than forfeit.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one Hanalei inquiry table.`,
        'A closed bridge moves the night; it does not eat the deposit. Open /hanalei-bridge for the full clause.',
      ],
      faqs: [
        {
          q: 'Same as /hanalei?',
          a: 'That URL is the dinner door. This piece is the short weather note.',
        },
        {
          q: 'Same as /hanalei-bridge?',
          a: 'That page is the clause. This piece is the shorter kitchen note beside it.',
        },
      ],
      related: [
        { path: '/hanalei', label: 'Hanalei dinner door' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kapaa',
      name: 'Dining in Kapaʻa',
      h1: 'Kapaa notes — east-side inquiry tables, not a shore clone.',
      title: 'Kapaa kitchen notes — east-side inquiry tables | myCHEF',
      description:
        'Short Kapaʻa notes at inquiry: east-side households, lower priority than the two shores. Distinct from /kapaa.',
      lede:
        '/kapaa is the dinner door at inquiry. This blog note is the east-side house — not a Princeville copy, not a Poʻipū copy.',
      photo: 'dinKapaa',
      body: [
        'East side town. Lower priority than the two shores. Household dinners at inquiry. A cooktop is still required.',
        'We will not pretend Kapaʻa is a North Shore estate page. Send the address. We write back with what we can staff.',
        'Open /kapaa for the corridor page. Open /locations for the directory.',
      ],
      faqs: [
        {
          q: 'Same as /kapaa?',
          a: 'That URL is the dinner door. This piece is the short east-side kitchen note.',
        },
        {
          q: 'Do you staff every Saturday in Kapaʻa?',
          a: 'No. Inquiry. Send the date on /quote.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa dinner door' },
        { path: '/locations', label: 'Corridor directory' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'grocery-at-cost',
      name: 'Groceries at cost',
      h1: 'Kauai grocery line — both shores, billed at cost when we staff.',
      title: 'Kauai groceries billed at cost — inquiry receipts | myCHEF',
      description:
        'Kauai groceries print at cost with receipts when we can staff. Distinct from /pricing and /journal/what-is-included.',
      lede:
        '/pricing is the tariff. /journal/what-is-included is the written split. This blog note is the grocery line on an inquiry quote — billed at cost, never a hidden markup.',
      photo: 'blogGroceryKauai',
      body: [
        'When we can staff, we shop the day of service. Groceries print at cost with receipts. They are not swallowed by the band on a Princeville or Poʻipū night.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one inquiry shop, itemised.`,
        'A closed Hanalei bridge can move the shop as well as the night — /hanalei-bridge. Alcohol is a different line — /blog/wine-and-alcohol.',
      ],
      faqs: [
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is how groceries print beside it — at inquiry.',
        },
        {
          q: 'Are the receipts live if you cannot staff?',
          a: 'No shop until we can staff. Send the date on /quote.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Kauai rate card' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'wine-and-alcohol',
      name: 'Wine and alcohol',
      h1: 'Kauai wine and spirits — inquiry pours as their own line.',
      title: 'Kauai wine and spirits — inquiry pours as their own line | myCHEF',
      description:
        'Kauai wine, beer, and spirits never hide inside the dinner band. Distinct from /bar and /private-chef.',
      lede:
        '/bar is the bartender add-on. /mobile-bar is the 4-hour package. This blog note is the bottle line on an inquiry quote.',
      photo: 'blogWineKauai',
      body: [
        'Bring your own, or we quote a separate pour when we can staff. Wine, beer, and spirits never hide inside the band on a Princeville night.',
        'A bartender is /staffing/bartenders or /bar. This piece is the alcohol line, not the person pouring it. Inquiry stage.',
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: 'That URL is the bartender add-on. This piece is why the bottles print as their own line — even at inquiry.',
        },
        {
          q: 'Can you bury wine in the menu price?',
          a: 'No. Open /journal/what-is-included.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'weather-backup',
      name: 'Wet-weather backup',
      h1: 'Kauai outdoor tables get a covered backup — and the bridge clause.',
      title: 'Kauai outdoor tables get a covered backup in writing | myCHEF',
      description:
        'Kauai outdoor tables get a written wet-weather backup. Far-North inherits the bridge clause. Distinct from /hanalei-bridge and /coverage.',
      lede:
        '/coverage is the zone map. /hanalei-bridge is the 72-hour clause. This blog note is the covered room we name before anyone sets an estate table.',
      photo: 'blogWeatherKauai',
      body: [
        'Outdoor tables on both shores always have a written indoor backup. Far-North events also inherit /hanalei-bridge — reschedule rather than forfeit.',
        'We do not discover rain at 4 p.m. A closed bridge moves the night; it does not eat the deposit. Inquiry until we can staff.',
        'Send the address type on /quote. If the house has no covered fallback, we say so in the inquiry reply.',
      ],
      faqs: [
        {
          q: 'Same as /hanalei-bridge?',
          a: 'That page is the road clause. This piece is the shorter outdoor-backup note.',
        },
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is the weather backup beside it.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'sourcing-honesty',
      name: 'Sourcing honesty',
      h1: 'Kauai sourcing — most food still arrives by ship. We say so.',
      title: 'Kauai sourcing honesty — most food still arrives by ship | myCHEF',
      description:
        'Kauai sourcing honesty at inquiry: Hawaiʻi still imports most of its food. Named farms only after written verification. Distinct from /what-we-dont-do.',
      lede:
        '/what-we-dont-do is the claim list. /menus is the process. This blog note is why an inquiry draft will not print a farm name we have not verified.',
      photo: 'blogSourceKauai',
      body: [
        'Hawaiʻi still imports most of its food. We cook what the shop and the boat actually hold that day — when we can staff. We do not invent a “farm-to-table” brand for Princeville.',
        'Named farms only after written verification. Fish is named as food, not décor. A theatrical luau menu is declined.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is how a Kauai inquiry draft stays honest.`,
      ],
      faqs: [
        {
          q: 'Same as /what-we-dont-do?',
          a: 'That page is the claim list. This piece is the shorter sourcing note — at inquiry.',
        },
        {
          q: 'Will you print a farm name on the menu?',
          a: 'Only after written verification. Otherwise the ingredient is named as food.',
        },
      ],
      related: [
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'cleanup-standard',
      name: 'Cleanup standard',
      h1: 'Kauai cleanup — inquiry kitchens left cleaner than we found them.',
      title: 'Kauai cleanup — inquiry kitchens left cleaner than we found them | myCHEF',
      description:
        'Kauai cleanup standard at inquiry: shop, cook, serve, leave the kitchen cleaner. Distinct from /private-chef and /journal/what-is-included.',
      lede:
        '/private-chef is what a night includes — when we can staff. This blog note is the last hour in a Princeville or Poʻipū kitchen, left cleaner than we found it.',
      photo: 'blogCleanupKauai',
      body: [
        'Cleanup is in. We do not leave an inquiry kitchen as we found it. That is the standard, not an add-on. Inquiry until we can staff.',
        'Rentals and venue fees still print as their own lines. Cleanup is not a rental. Open /journal/what-is-included for the split.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one dinner’s last hour — at inquiry.`,
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is the inclusion document. This piece is the shorter cleanup note — at inquiry.',
        },
        {
          q: 'Is cleanup extra?',
          a: 'No. It is in, when we can staff. Open /quote.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'condo-load-in',
      name: 'Condo load-in',
      h1: 'Kauai condo load-in — inquiry towers, quiet hours in writing.',
      title: 'Kauai condo load-in — inquiry towers, quiet hours in writing | myCHEF',
      description:
        'Kauai condo load-in at inquiry: freight elevators, COIs, quiet hours. Distinct from /poipu and /blog/dining-in-poipu.',
      lede:
        '/poipu is the dinner door at inquiry. /blog/dining-in-poipu is the cooktop note. This blog note is the load-in — written before anyone rolls a kit through a South Shore tower.',
      photo: 'blogCondoKauai',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in the inquiry reply. We do not discover building rules at 4 p.m. A band is not a Book-now button.',
        'Hotel rooms without a cooktop are still declined. A tower residence with a range is the product. Send the building type on /quote.',
        'North Shore stacks inherit the same load-in honesty — /princeville. Compact kitchens get a menu that fits the range.',
      ],
      faqs: [
        {
          q: 'Same as /poipu?',
          a: 'That URL is the dinner door. This piece is the short load-in note — at inquiry.',
        },
        {
          q: 'Do you need a COI?',
          a: 'When the building requires one, we handle it in writing before we can staff.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū dinner door' },
        { path: '/blog/dining-in-poipu', label: 'Poʻipū kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'family-reunions',
      name: 'Family reunions',
      h1: 'Kauai family reunions — inquiry estates, not a ballroom.',
      title: 'Kauai family reunions — inquiry estates, not a ballroom | myCHEF',
      description:
        'Kauai family reunions in estates we can actually staff. Distinct from /events, /guest-counts, and /wedding-week.',
      lede:
        '/events is the occasion door at inquiry. /guest-counts is the honesty page. This blog note is a family week in a Princeville or Poʻipū house — not a resort ballroom.',
      photo: 'blogReunionKauai',
      body: [
        'Dinners 2–15, receptions about 10–75. Larger formats are quoted, not promised. Inquiry until we can staff. Resort ballrooms are not our product.',
        'Kids’ plates are planned with the adults’ menu — /kids-menus. Multi-day weeks sit on /vacation-chef. Far-North weeks inherit /hanalei-bridge.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one family table in the house — at inquiry.`,
      ],
      faqs: [
        {
          q: 'Same as /events?',
          a: 'That page is the occasion door. This piece is the shorter family-reunion note — at inquiry.',
        },
        {
          q: 'Can you staff a ballroom reunion?',
          a: 'No. We staff houses, when we can staff. Open /guest-counts.',
        },
      ],
      related: [
        { path: '/events', label: 'Events' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'photoshoot-catering',
      name: 'Production meals',
      h1: 'Kauai production meals — inquiry estates, not a craft-service tent.',
      title: 'Kauai production meals — inquiry estates, not a craft-service tent | myCHEF',
      description:
        'Kauai crew and production meals in estates with kitchens, at inquiry. Distinct from /catering.',
      lede:
        '/catering is the staffed-room product at inquiry. This blog note is crew meals in a Princeville estate — identical plates, a kitchen, not a tent.',
      photo: 'blogShootKauai',
      body: [
        'Film and stills crews in estates are the same staffed-room product as a family event — when we can staff. We do not staff craft-service tents.',
        'Identical plates, one dietary note on the quote — /dietary. Guest counts we staff stay published — /guest-counts. A band is not a Book-now button.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is production food in an inquiry kitchen.`,
      ],
      faqs: [
        {
          q: 'Same as /catering?',
          a: 'That page is the staffed-room door. This piece is the shorter production-meal note — at inquiry.',
        },
        {
          q: 'Can you run craft service on a lot?',
          a: 'No. Estates with kitchens, when we can staff. Open /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/catering', label: 'Catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'proposal-dinners',
      name: 'Proposal dinners',
      h1: 'Kauai proposal dinners — inquiry tables for two, not a restaurant hold.',
      title: 'Kauai proposal dinners — inquiry tables for two, not a restaurant hold | myCHEF',
      description:
        'Kauai proposal dinners in an estate kitchen, at inquiry. Distinct from /honeymoon-dinners and /fine-dining/romantic-dinner.',
      lede:
        '/honeymoon-dinners is two seats after the wedding — when we can staff. /fine-dining/romantic-dinner is the course stack. This blog note is the ask — on a Princeville terrace, not a restaurant hold.',
      photo: 'blogProposalKauai',
      body: [
        'A proposal is two seats in a kitchen we can actually staff. Inquiry until we can. We do not hold a restaurant table. We do not stage a public ask on a resort lawn.',
        'Honeymoon nights sit on /honeymoon-dinners. The romantic-dinner SKU is /fine-dining/romantic-dinner. This article is the shorter proposal note beside them — at inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one table for two in the house — when we can staff.`,
      ],
      faqs: [
        {
          q: 'Same as /honeymoon-dinners?',
          a: 'That page is two seats after the wedding. This piece is the shorter proposal note — at inquiry.',
        },
        {
          q: 'Can you hold a restaurant table?',
          a: 'No. We cook in the house, when we can staff. Open /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Honeymoon dinners' },
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner SKU' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'estate-logistics',
      name: 'Estate logistics',
      h1: 'Kauai estate logistics — inquiry gates, generators, and the driveway.',
      title: 'Kauai estate logistics — inquiry gates, generators, and the driveway | myCHEF',
      description:
        'Kauai estate logistics at inquiry: driveways, generators, gates. Distinct from /blog/condo-load-in and /coverage.',
      lede:
        '/blog/condo-load-in is the tower. /coverage is the zone map. This blog note is the house — the Princeville driveway, the generator, the gate code in the inquiry reply.',
      photo: 'blogEstateKauai',
      body: [
        'Estate nights need a driveway we can actually use, a gate code, and whether a generator will run the range. We write those in the inquiry reply. A band is not a Book-now button.',
        'Towers sit on /blog/condo-load-in. Far-North nights inherit /hanalei-bridge. Send the access packet on /quote.',
        'A house without a functioning cooktop is still declined. Logistics do not invent a kitchen.',
      ],
      faqs: [
        {
          q: 'Same as /blog/condo-load-in?',
          a: 'That note is the tower. This piece is the shorter estate-driveway note — at inquiry.',
        },
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is how we reach the house.',
        },
      ],
      related: [
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'shoulder-season',
      name: 'Shoulder season',
      h1: 'Kauai shoulder dates — inquiry months still need a written kitchen.',
      title: 'Kauai shoulder dates — inquiry months still need a written kitchen | myCHEF',
      description:
        'Kauai shoulder dates are not automatic availability. Distinct from /journal/how-far-ahead-to-book.',
      lede:
        '/journal/how-far-ahead-to-book is the peak calendar at inquiry. This blog note is the quieter months — they still need a Princeville kitchen in writing, not a last-minute yes.',
      photo: 'blogShoulderKauai',
      body: [
        'Shoulder months are quieter, not empty. A Princeville house in April still needs a cooktop, a count, and an inquiry reply. We do not invent a last-minute roster because the calendar looks open.',
        'Peak months stay on /journal/how-far-ahead-to-book. Far-North weather stays on /hanalei-bridge. This article is the quieter window beside them — at inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is why a shoulder night is still a written kitchen.`,
      ],
      faqs: [
        {
          q: 'Same as /journal/how-far-ahead-to-book?',
          a: 'That piece is the peak calendar. This note is the shorter shoulder-month note — at inquiry.',
        },
        {
          q: 'Are April nights walk-in?',
          a: 'No. Send /quote. We still write the kitchen, when we can staff.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-haena',
      name: 'Dining in Hāʻena',
      h1: 'Hāʻena notes — Far-North inquiry, 72-hour road clause.',
      title: 'Hāʻena kitchen notes — Far-North inquiry, 72-hour road clause | myCHEF',
      description:
        'Short Hāʻena notes at inquiry: quote-only Far North, 72-hour notice. Distinct from /hanalei and /hanalei-bridge.',
      lede:
        '/hanalei is the nearest live dinner door at inquiry. /hanalei-bridge is the weather clause. This blog note is Hāʻena — planned events only, never same-day.',
      photo: 'dinHaena',
      body: [
        'Far North. Quote-only. Seventy-two-hour notice. Road closures reschedule rather than forfeit. Inquiry until we can staff.',
        'There is no /haena corridor URL. A closed bridge moves the night; it does not eat the deposit. Open /hanalei-bridge for the full clause.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one Far-North inquiry table.`,
      ],
      faqs: [
        {
          q: 'Is /haena a dinner door?',
          a: 'No. Quote-only. Open /hanalei and /hanalei-bridge.',
        },
        {
          q: 'Can you take same-day Hāʻena?',
          a: 'No. Planned events only. Send the date on /quote.',
        },
      ],
      related: [
        { path: '/hanalei', label: 'Hanalei dinner door' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-koloa',
      name: 'Dining in Kōloa',
      h1: 'Kōloa notes — South Shore town, inquiry, not a Poʻipū clone.',
      title: 'Kōloa kitchen notes — South Shore town, inquiry, not a Poʻipū clone | myCHEF',
      description:
        'Short Kōloa notes at inquiry: South Shore town adjacent to Poʻipū. Distinct from /poipu and /blog/dining-in-poipu.',
      lede:
        '/poipu is the dinner door at inquiry. This blog note is Kōloa town — retreat houses and small weddings to about 75, not a Poʻipū copy.',
      photo: 'dinKoloa',
      body: [
        'South Shore town adjacent to Poʻipū. Same South Shore surcharge map. Retreat houses and small weddings to about 75. Inquiry until we can staff.',
        'There is no /koloa corridor URL. We will not pretend Kōloa is a resort-residence page. A cooktop is still required.',
        'Open /poipu for the corridor. Send the address on /quote. A band is not a Book-now button.',
      ],
      faqs: [
        {
          q: 'Same as /poipu?',
          a: 'That URL is the dinner door. This piece is the shorter town kitchen note — at inquiry.',
        },
        {
          q: 'Is /koloa live?',
          a: 'No corridor URL. This blog note is the kitchen. Open /quote.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū dinner door' },
        { path: '/blog/dining-in-poipu', label: 'Poʻipū kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-lihue',
      name: 'Dining in Līhuʻe',
      h1: 'Līhuʻe notes — staging town, not the villa product.',
      title: 'Līhuʻe kitchen notes — staging town, not the villa product | myCHEF',
      description:
        'Short Līhuʻe notes at inquiry: airport-adjacent households, not villa inventory. Distinct from /coverage.',
      lede:
        '/coverage is the zone map at inquiry. This blog note is Līhuʻe — the planned base, in-town households and staging, not the hero villa product.',
      photo: 'dinLihue',
      body: [
        'Planned base. Airport-adjacent, not the villa inventory. In-town households and staging. Included when we launch. Inquiry until we can staff.',
        'There is no /lihue corridor URL. Princeville and Poʻipū stay the estate dinner doors. A cooktop is still required.',
        'We will not sell Līhuʻe as a North Shore estate page. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Is Līhuʻe the villa product?',
          a: 'No. Staging and in-town households. Open /princeville or /poipu for estates.',
        },
        {
          q: 'Is /lihue a dinner door?',
          a: 'No. This piece is the short staging-town note — at inquiry.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/poipu', label: 'Poʻipū dinner door' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kalaheo',
      name: 'Dining in Kalāheo',
      h1: 'Kalāheo notes — south-west houses, inquiry.',
      title: 'Kalāheo kitchen notes — south-west houses, inquiry | myCHEF',
      description:
        'Short Kalāheo notes at inquiry: south-west residential tables. Distinct from /poipu.',
      lede:
        '/poipu is the South Shore dinner door at inquiry. This blog note is Kalāheo — between Līhuʻe and the South Shore villas, quoted with the menu.',
      photo: 'dinKalaheo',
      body: [
        'South-west residential. Between Līhuʻe and the South Shore villas. Surcharge, quoted with the menu. Inquiry until we can staff.',
        'There is no /kalaheo corridor URL. Residential tables, not visitor-villa inventory. A cooktop is still required.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one south-west inquiry table.`,
      ],
      faqs: [
        {
          q: 'Is /kalaheo a dinner door?',
          a: 'No. Open /poipu. This piece is the shorter south-west kitchen note.',
        },
        {
          q: 'Are you live?',
          a: 'Inquiry until we can staff. Send /quote.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū dinner door' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-waimea',
      name: 'Dining in Waimea, Kauaʻi',
      h1: 'Kauai Waimea notes — west-side distance from Līhuʻe, inquiry.',
      title: 'Kauai Waimea kitchen notes — west-side distance from Līhuʻe, inquiry | myCHEF',
      description:
        'Short Kauai Waimea notes at inquiry: west-side distance, extended surcharge. Distinct from Hawaiʻi Island /blog/dining-in-waimea.',
      lede:
        '/coverage is the zone map at inquiry. This blog note is west Kauaʻi Waimea — distance from Līhuʻe is the story, not Kamuela ranch country.',
      photo: 'dinKauaiWaimea',
      body: [
        'West side. Distance from Līhuʻe is the story. Extended surcharge. Advance notice. West-side estates. Inquiry until we can staff.',
        'There is no /waimea corridor URL on this host. This is not the Hawaiʻi Island ranch note. A cooktop is still required.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one west-side inquiry table.`,
      ],
      faqs: [
        {
          q: 'Same as the Hawaiʻi Island Waimea note?',
          a: 'No. That host is ranch elevation. This piece is west Kauaʻi distance from Līhuʻe.',
        },
        {
          q: 'Is /waimea a dinner door here?',
          a: 'No. Open /coverage, then /quote.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/poipu', label: 'Poʻipū dinner door' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-hanapepe',
      name: 'Dining in Hanapēpē',
      h1: 'Hanapēpē notes — west-side town houses, inquiry.',
      title: 'Hanapēpē kitchen notes — west-side town houses, inquiry | myCHEF',
      description:
        'Short Hanapēpē notes at inquiry: west-side town, not a visitor-villa cluster. Distinct from /blog/dining-in-waimea on this host.',
      lede:
        'This blog note is Hanapēpē — a west-side town, private houses, quoted surcharge. Not a visitor-villa cluster. Inquiry until we can staff.',
      photo: 'dinHanapepe',
      body: [
        'West-side town. Not a visitor-villa cluster. Surcharge, quoted. Private houses. Inquiry until we can staff.',
        'There is no /hanapepe corridor URL. We will not sell this as a North Shore estate page. A cooktop is still required.',
        'Send the address on /quote. A band is not a Book-now button.',
      ],
      faqs: [
        {
          q: 'Is /hanapepe a dinner door?',
          a: 'No. Open /coverage, then /quote.',
        },
        {
          q: 'Same as Kauai Waimea notes?',
          a: 'That piece is west-side distance. This piece is the town house.',
        },
      ],
      related: [
        { path: '/blog/dining-in-waimea', label: 'Kauai Waimea notes' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-anahola',
      name: 'Dining in Anahola',
      h1: 'Anahola notes — east-north coast, quieter than Kapaʻa.',
      title: 'Anahola kitchen notes — east-north coast, quieter than Kapaʻa | myCHEF',
      description:
        'Short Anahola notes at inquiry: quieter than Kapaʻa, still a drive. Distinct from /kapaa.',
      lede:
        '/kapaa is the east-side dinner door at inquiry. This blog note is Anahola — quieter coast, surcharge, household dinners when we can staff.',
      photo: 'dinAnahola',
      body: [
        'East-north coast. Quieter than Kapaʻa, still a drive from Līhuʻe staging. Surcharge at launch, quoted with the menu. Household dinners. Inquiry until we can staff.',
        'There is no /anahola corridor URL. /kapaa stays the east-side dinner door. A cooktop is still required.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one east-north inquiry table.`,
      ],
      faqs: [
        {
          q: 'Same as /kapaa?',
          a: 'That URL is the dinner door. This piece is the quieter coast next to it.',
        },
        {
          q: 'Is /anahola live?',
          a: 'No corridor URL. Inquiry. Open /quote.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa dinner door' },
        { path: '/blog/dining-in-kapaa', label: 'Kapaʻa kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-eleele',
      name: 'Dining in ʻEleʻele',
      h1: 'ʻEleʻele notes — between Kalāheo and the west side, inquiry.',
      title: 'ʻEleʻele kitchen notes — between Kalāheo and the west side, inquiry | myCHEF',
      description:
        'Short ʻEleʻele notes at inquiry: south-west residential. Distinct from /blog/dining-in-kalaheo.',
      lede:
        '/blog/dining-in-kalaheo is the south-west town note. This blog note is ʻEleʻele — further toward the west side, surcharge, advance notice.',
      photo: 'dinEleele',
      body: [
        'South-west residential. Between Kalāheo and the west side. Surcharge. Advance notice. Private houses. Inquiry until we can staff.',
        'There is no /eleele corridor URL. We will not pretend this is a South Shore villa page. A cooktop is still required.',
        'Send the address on /quote. A band is not a Book-now button.',
      ],
      faqs: [
        {
          q: 'Same as /blog/dining-in-kalaheo?',
          a: 'That note is Kalāheo. This piece is further west.',
        },
        {
          q: 'Is /eleele a dinner door?',
          a: 'No. Open /coverage, then /quote.',
        },
      ],
      related: [
        { path: '/blog/dining-in-kalaheo', label: 'Kalāheo kitchen notes' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'dining-in-kona',
      name: 'Dining in Kona',
      h1: 'Kona notes — west-side inquiry tables, Hilo not implied.',
      title: 'Kona kitchen notes — west-side inquiry tables | myCHEF',
      description:
        'Short Kona notes at inquiry: west-side kitchens, Ironman weeks. Distinct from /kona. East side is a different day.',
      lede:
        '/kona is the dinner door at inquiry. This blog note is the west-side room — Hilo is never a same-day add-on.',
      photo: 'dinKona',
      body: [
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This article does not steal that title. Inquiry, west-side first.`,
        'Event weeks compress availability — /ironman-weeks. A cooktop is still required. A band is not a Book-now button.',
        'East side is a dedicated day — /east-side. Open /kona for the corridor page.',
      ],
      faqs: [
        {
          q: 'Same as /kona?',
          a: 'That URL is the dinner door. This piece is the short west-side kitchen note.',
        },
        {
          q: 'Can a Kona table cover Hilo?',
          a: 'Not the same day. Open /east-side.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona dinner door' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-waimea',
      name: 'Dining in Waimea',
      h1: 'Waimea notes — ranch elevation, still west-side first.',
      title: 'Waimea kitchen notes — ranch elevation, west-side first | myCHEF',
      description:
        'Short Waimea / Kamuela notes at inquiry: cooler elevation, ranch houses. Distinct from /waimea.',
      lede:
        '/waimea is the dinner door at inquiry. This blog note is the ranch kitchen — cooler elevation, still not a Hilo day.',
      photo: 'dinWaimea',
      body: [
        'Upcountry. Ranch country. Surcharge at launch. Cooler evenings change the draft more than a brochure photo does.',
        'Estate and ranch houses. Inquiry. Named farms only after written verification — we will not invent a producer.',
        'Open /waimea for the corridor page. East side remains /east-side, a different day.',
      ],
      faqs: [
        {
          q: 'Same as /waimea?',
          a: 'That URL is the dinner door. This piece is the short elevation note.',
        },
        {
          q: 'Is Waimea the east side?',
          a: 'No. Ranch country on the west-side map. Hilo is /east-side.',
        },
      ],
      related: [
        { path: '/waimea', label: 'Waimea dinner door' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-waikoloa',
      name: 'Dining in Waikoloa',
      h1: 'Waikoloa notes — Kohala corridor inquiry, 30-minute radius.',
      title: 'Waikoloa kitchen notes — Kohala corridor inquiry | myCHEF',
      description:
        'Short Waikoloa notes at inquiry: Kohala resort residences inside the west-side radius. Distinct from /waikoloa.',
      lede:
        '/waikoloa is the dinner door at inquiry. This blog note is the resort-residence kitchen inside the 30-minute corridor.',
      photo: 'dinWaikoloa',
      body: [
        'Kohala resort community. Seven resort communities share this radius — /kohala-corridor. We will not pretend the island is 4,000 square miles of same-day coverage.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one Waikoloa inquiry table.`,
        'Villa weeks when we can staff. A cooktop is required. Open /waikoloa for the corridor page.',
      ],
      faqs: [
        {
          q: 'Same as /waikoloa?',
          a: 'That URL is the dinner door. This piece is the short corridor kitchen note.',
        },
        {
          q: 'Same as /kohala-corridor?',
          a: 'That page is the corridor cell. This piece is the shorter kitchen note beside it.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa dinner door' },
        { path: '/kohala-corridor', label: 'Kohala corridor' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kohala',
      name: 'Dining in Kohala',
      h1: 'Kohala notes — 30-minute west-side radius, not the mountain.',
      title: 'Kohala kitchen notes — 30-minute west-side radius | myCHEF',
      description:
        'Short Kohala Coast notes at inquiry: west-side radius, not the summit. Distinct from /kohala and /kohala-corridor.',
      lede:
        '/kohala is the dinner door at inquiry. This blog note is the coast kitchen — named for the corridor, not the mountain.',
      photo: 'dinKohala',
      body: [
        'West-side first. Thirty-minute radius. The island is 4,000 square miles; we will not pretend to cover it in a day.',
        'Estate and resort-residence dinners when we can staff. East side is a dedicated crossing — /east-side.',
        'Open /kohala for the corridor page. Open /kohala-corridor for the cell.',
      ],
      faqs: [
        {
          q: 'Same as /kohala?',
          a: 'That URL is the dinner door. This piece is the short radius note.',
        },
        {
          q: 'Is this the mountain?',
          a: 'No. The resort belt. Open /kohala.',
        },
      ],
      related: [
        { path: '/kohala', label: 'Kohala dinner door' },
        { path: '/kohala-corridor', label: 'Kohala corridor' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'grocery-at-cost',
      name: 'Groceries at cost',
      h1: 'West-side grocery line — Kona shop, billed at cost.',
      title: 'Hawaiʻi Island groceries billed at cost — west-side receipts | myCHEF',
      description:
        'West-side groceries print at cost with receipts when we can staff. East side is a different day. Distinct from /pricing.',
      lede:
        '/pricing is the tariff. /journal/what-is-included is the written split. This blog note is the grocery line on a west-side inquiry quote — Hilo is never implied.',
      photo: 'blogGroceryBigisland',
      body: [
        'When we can staff, we shop the day of service on the west side. Groceries print at cost with receipts. They are not swallowed by the band on a Kona or Waikoloa night.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one west-side shop, itemised.`,
        'East-side provisioning is a dedicated day — /east-side. Alcohol is a different line — /blog/wine-and-alcohol.',
      ],
      faqs: [
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is how west-side groceries print beside it.',
        },
        {
          q: 'Can a Kona shop cover Hilo?',
          a: 'Not the same day. Open /east-side.',
        },
      ],
      related: [
        { path: '/pricing', label: 'West-side rate card' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'wine-and-alcohol',
      name: 'Wine and alcohol',
      h1: 'West-side wine and spirits — Kona pours as their own line.',
      title: 'Hawaiʻi Island wine and spirits — west-side pours as their own line | myCHEF',
      description:
        'West-side wine, beer, and spirits never hide inside the dinner band. Distinct from /bar and /private-chef.',
      lede:
        '/bar is the bartender add-on. /mobile-bar is the 4-hour package. This blog note is the bottle line on a west-side inquiry quote.',
      photo: 'blogWineBigisland',
      body: [
        'Bring your own, or we quote a separate pour when we can staff. Wine, beer, and spirits never hide inside the band on a Kona night.',
        'A bartender is /staffing/bartenders or /bar. This piece is the alcohol line, not the person pouring it. Inquiry, west-side first.',
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: 'That URL is the bartender add-on. This piece is why the bottles print as their own line — even at inquiry.',
        },
        {
          q: 'Can you bury wine in the menu price?',
          a: 'No. Open /journal/what-is-included.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'weather-backup',
      name: 'Wet-weather backup',
      h1: 'West-side outdoor tables get a covered backup in writing.',
      title: 'Hawaiʻi Island outdoor tables get a covered backup in writing | myCHEF',
      description:
        'West-side outdoor tables get a written wind and sun backup. East side is a different day. Distinct from /coverage.',
      lede:
        '/coverage is the zone map. /east-side is a dedicated crossing. This blog note is the covered room we name before anyone sets a Kohala lava-terrace table.',
      photo: 'blogWeatherBigisland',
      body: [
        'Outdoor tables on the west side always have a written indoor backup. Hard sun and afternoon wind are the usual reason — not a surprise at 4 p.m.',
        'East side is a dedicated day, not a same-day Kona–Hilo fantasy — /east-side. The backup is a room, not a tent we do not own.',
        'Send the address type on /quote. If the house has no covered fallback, we say so in the inquiry reply.',
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is the short outdoor-backup note.',
        },
        {
          q: 'Does a Kona backup cover Hilo weather?',
          a: 'No. Open /east-side. We quote a dedicated crossing.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'sourcing-honesty',
      name: 'Sourcing honesty',
      h1: 'West-side sourcing — most food still arrives by ship. We say so.',
      title: 'Hawaiʻi Island sourcing honesty — most food still arrives by ship | myCHEF',
      description:
        'West-side sourcing honesty: Hawaiʻi still imports most of its food. Named Kona coffee follows Act 198. Distinct from /coffee-act-198.',
      lede:
        '/what-we-dont-do is the claim list. /coffee-act-198 is the origin rule. This blog note is why an inquiry draft will not print a farm name we have not verified.',
      photo: 'blogSourceBigisland',
      body: [
        'Hawaiʻi still imports most of its food. We cook what the west-side shop actually holds that day — when we can staff. We do not invent a “farm-to-table” brand for Waikoloa.',
        'Named Kona and Kaʻū coffee follow Act 198 from 2027 — /coffee-act-198. Fish is named as food, not décor.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is how a west-side inquiry draft stays honest.`,
      ],
      faqs: [
        {
          q: 'Same as /coffee-act-198?',
          a: 'That page is the origin rule. This piece is the shorter sourcing note beside it.',
        },
        {
          q: 'Will you print a farm name on the menu?',
          a: 'Only after written verification. Otherwise the ingredient is named as food.',
        },
      ],
      related: [
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/coffee-act-198', label: 'Coffee Act 198' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'cleanup-standard',
      name: 'Cleanup standard',
      h1: 'Hawaiʻi Island cleanup — west-side kitchens left cleaner than we found them.',
      title: 'Hawaiʻi Island cleanup — west-side kitchens left cleaner than we found them | myCHEF',
      description:
        'West-side cleanup standard at inquiry: shop, cook, serve, leave the kitchen cleaner. Distinct from /private-chef and /journal/what-is-included.',
      lede:
        '/private-chef is what a night includes — when we can staff. This blog note is the last hour in a Kona or Waikoloa kitchen, left cleaner than we found it.',
      photo: 'blogCleanupBigisland',
      body: [
        'Cleanup is in. We do not leave a west-side kitchen as we found it. That is the standard, not an add-on. Inquiry until we can staff.',
        'Rentals and venue fees still print as their own lines. Cleanup is not a rental. Open /journal/what-is-included for the split. East side is a different day — /east-side.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one dinner’s last hour — at inquiry.`,
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is the inclusion document. This piece is the shorter cleanup note — at inquiry.',
        },
        {
          q: 'Is cleanup extra?',
          a: 'No. It is in, when we can staff. Open /quote.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'condo-load-in',
      name: 'Condo load-in',
      h1: 'Hawaiʻi Island condo load-in — west-side towers, quiet hours in writing.',
      title: 'Hawaiʻi Island condo load-in — west-side towers, quiet hours in writing | myCHEF',
      description:
        'West-side condo load-in at inquiry: freight elevators, COIs, quiet hours. Distinct from /waikoloa and /blog/dining-in-waikoloa.',
      lede:
        '/waikoloa is the dinner door at inquiry. /blog/dining-in-waikoloa is the cooktop note. This blog note is the load-in — written before anyone rolls a kit through a west-side tower.',
      photo: 'blogCondoBigisland',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in the inquiry reply. We do not discover building rules at 4 p.m. A band is not a Book-now button.',
        'Hotel rooms without a cooktop are still declined. A tower residence with a range is the product. Send the building type on /quote.',
        'Kona stacks inherit the same load-in honesty — /kona. Compact kitchens get a menu that fits the range. East side is a dedicated crossing — /east-side.',
      ],
      faqs: [
        {
          q: 'Same as /waikoloa?',
          a: 'That URL is the dinner door. This piece is the short load-in note — at inquiry.',
        },
        {
          q: 'Do you need a COI?',
          a: 'When the building requires one, we handle it in writing before we can staff.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa dinner door' },
        { path: '/blog/dining-in-waikoloa', label: 'Waikoloa kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'family-reunions',
      name: 'Family reunions',
      h1: 'Hawaiʻi Island family reunions — west-side houses, not a ballroom.',
      title: 'Hawaiʻi Island family reunions — west-side houses, not a ballroom | myCHEF',
      description:
        'West-side family reunions in houses we can actually staff. Distinct from /events, /guest-counts, and /east-side.',
      lede:
        '/events is the occasion door at inquiry. /guest-counts is the honesty page. This blog note is a family week in a Kona or Waikoloa house — not a resort ballroom, not a same-day Hilo add-on.',
      photo: 'blogReunionBigisland',
      body: [
        'Dinners 2–15, receptions about 10–75. Larger formats are quoted, not promised. Inquiry until we can staff. Resort ballrooms are not our product.',
        'Kids’ plates are planned with the adults’ menu — /kids-menus. Multi-day weeks sit on /vacation-chef. Event weeks compress availability — /ironman-weeks.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one family table in the house — at inquiry.`,
      ],
      faqs: [
        {
          q: 'Same as /events?',
          a: 'That page is the occasion door. This piece is the shorter family-reunion note — at inquiry.',
        },
        {
          q: 'Can you staff a ballroom reunion?',
          a: 'No. We staff houses, when we can staff. Open /guest-counts.',
        },
      ],
      related: [
        { path: '/events', label: 'Events' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'photoshoot-catering',
      name: 'Production meals',
      h1: 'Hawaiʻi Island production meals — west-side houses, not a craft-service tent.',
      title: 'Hawaiʻi Island production meals — west-side houses, not a craft-service tent | myCHEF',
      description:
        'West-side crew and production meals in houses with kitchens, at inquiry. Distinct from /catering and /east-side.',
      lede:
        '/catering is the staffed-room product at inquiry. This blog note is crew meals in a Kona house — identical plates, a kitchen, not a tent on lava.',
      photo: 'blogShootBigisland',
      body: [
        'Film and stills crews in west-side houses are the same staffed-room product as a family event — when we can staff. We do not staff craft-service tents.',
        'Identical plates, one dietary note on the quote — /dietary. Guest counts we staff stay published — /guest-counts. East side is a dedicated day — /east-side.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is production food in a west-side kitchen — at inquiry.`,
      ],
      faqs: [
        {
          q: 'Same as /catering?',
          a: 'That page is the staffed-room door. This piece is the shorter production-meal note — at inquiry.',
        },
        {
          q: 'Can you run craft service on a lot?',
          a: 'No. Houses with kitchens, when we can staff. Open /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/catering', label: 'Catering' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'proposal-dinners',
      name: 'Proposal dinners',
      h1: 'Hawaiʻi Island proposal dinners — west-side tables for two, not a restaurant hold.',
      title: 'Hawaiʻi Island proposal dinners — west-side tables for two, not a restaurant hold | myCHEF',
      description:
        'West-side proposal dinners in a house kitchen, at inquiry. Distinct from /honeymoon-dinners and /fine-dining/romantic-dinner.',
      lede:
        '/honeymoon-dinners is two seats after the wedding — when we can staff. /fine-dining/romantic-dinner is the course stack. This blog note is the ask — on a Kohala lava terrace, not a restaurant hold.',
      photo: 'blogProposalBigisland',
      body: [
        'A proposal is two seats in a kitchen we can actually staff. Inquiry until we can. We do not hold a restaurant table. East side is a dedicated day — /east-side.',
        'Honeymoon nights sit on /honeymoon-dinners. The romantic-dinner SKU is /fine-dining/romantic-dinner. This article is the shorter proposal note beside them — at inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one table for two in a west-side house — when we can staff.`,
      ],
      faqs: [
        {
          q: 'Same as /honeymoon-dinners?',
          a: 'That page is two seats after the wedding. This piece is the shorter proposal note — at inquiry.',
        },
        {
          q: 'Can you hold a restaurant table?',
          a: 'No. We cook in the house, when we can staff. Open /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Honeymoon dinners' },
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner SKU' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'estate-logistics',
      name: 'Estate logistics',
      h1: 'Hawaiʻi Island estate logistics — west-side gates, generators, and the driveway.',
      title: 'Hawaiʻi Island estate logistics — west-side gates, generators, and the driveway | myCHEF',
      description:
        'West-side estate logistics at inquiry: driveways, generators, gates. Distinct from /blog/condo-load-in and /coverage.',
      lede:
        '/blog/condo-load-in is the tower. /coverage is the zone map. This blog note is the house — the Kona driveway, the generator, the gate code in the inquiry reply.',
      photo: 'blogEstateBigisland',
      body: [
        'Estate nights need a driveway we can actually use, a gate code, and whether a generator will run the range. We write those in the inquiry reply. A band is not a Book-now button.',
        'Towers sit on /blog/condo-load-in. East side is a dedicated crossing — /east-side. Send the access packet on /quote.',
        'A house without a functioning cooktop is still declined. Logistics do not invent a kitchen.',
      ],
      faqs: [
        {
          q: 'Same as /blog/condo-load-in?',
          a: 'That note is the tower. This piece is the shorter estate-driveway note — at inquiry.',
        },
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is how we reach the house.',
        },
      ],
      related: [
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'shoulder-season',
      name: 'Shoulder season',
      h1: 'Hawaiʻi Island shoulder dates — west-side months still need a written kitchen.',
      title: 'Hawaiʻi Island shoulder dates — west-side months still need a written kitchen | myCHEF',
      description:
        'West-side shoulder dates are not automatic availability. Distinct from /journal/how-far-ahead-to-book.',
      lede:
        '/journal/how-far-ahead-to-book is the peak calendar at inquiry. This blog note is the quieter months — they still need a Kona kitchen in writing, not a last-minute yes.',
      photo: 'blogShoulderBigisland',
      body: [
        'Shoulder months are quieter, not empty. A Kona house in April still needs a cooktop, a count, and an inquiry reply. We do not invent a last-minute roster because the calendar looks open.',
        'Peak months stay on /journal/how-far-ahead-to-book. Ironman weeks stay on /ironman-weeks. East side stays a dedicated day — /east-side.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is why a shoulder night is still a written kitchen.`,
      ],
      faqs: [
        {
          q: 'Same as /journal/how-far-ahead-to-book?',
          a: 'That piece is the peak calendar. This note is the shorter shoulder-month note — at inquiry.',
        },
        {
          q: 'Are April nights walk-in?',
          a: 'No. Send /quote. We still write the kitchen, when we can staff.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-hilo',
      name: 'Dining in Hilo',
      h1: 'Hilo notes — east-side dedicated day, not a Kona add-on.',
      title: 'Hilo kitchen notes — east-side dedicated day, not a Kona add-on | myCHEF',
      description:
        'Short Hilo notes at inquiry: quote-only east side, dedicated staffing. Distinct from /kona and /east-side.',
      lede:
        '/east-side is the crossing document. /kona is the west-side dinner door at inquiry. This blog note is Hilo — 2.5–3 hours from Kona, never a same-day round trip.',
      photo: 'dinHilo',
      body: [
        'East side. Quote-only. Dedicated staffing. Two and a half to three hours from Kona. Inquiry until we can staff. Never squeezed into a west-side day.',
        'There is no /hilo corridor URL. /east-side stays the honesty page. A cooktop is still required.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one Hilo inquiry table with its own team day.`,
      ],
      faqs: [
        {
          q: 'Same as /east-side?',
          a: 'That page is the crossing rule. This piece is the shorter Hilo kitchen note — at inquiry.',
        },
        {
          q: 'Can a Kona table cover Hilo the same day?',
          a: 'No. Open /east-side. We quote a dedicated crossing.',
        },
      ],
      related: [
        { path: '/east-side', label: 'East side' },
        { path: '/kona', label: 'Kona dinner door' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-volcano',
      name: 'Dining in Volcano',
      h1: 'Volcano notes — east-side lodges, dedicated staffing.',
      title: 'Volcano kitchen notes — east-side lodges, dedicated staffing | myCHEF',
      description:
        'Short Volcano notes at inquiry: quote-only with Hilo, dedicated staffing. Distinct from /east-side.',
      lede:
        '/east-side is the crossing document. This blog note is Volcano — lodge and estate dinners with their own team day, never squeezed into a Kona morning.',
      photo: 'dinVolcano',
      body: [
        'East side with Hilo. Quote-only, never squeezed into a west-side day. Lodge and estate dinners with dedicated staffing. Inquiry until we can staff.',
        'There is no /volcano corridor URL. The drive is 2.5–3 hours from Kona. A cooktop is still required.',
        'Open /east-side for the crossing. Send both dates on /quote if you also want a west-side night.',
      ],
      faqs: [
        {
          q: 'Same as /east-side?',
          a: 'That page is the rule. This piece is the shorter Volcano kitchen note — at inquiry.',
        },
        {
          q: 'Same as /blog/dining-in-hilo?',
          a: 'That note is Hilo. This piece is the lodge elevation beside it.',
        },
      ],
      related: [
        { path: '/east-side', label: 'East side' },
        { path: '/blog/dining-in-hilo', label: 'Hilo kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-keauhou',
      name: 'Dining in Keauhou',
      h1: 'Keauhou notes — south of town, still the west-side corridor.',
      title: 'Keauhou kitchen notes — south of town, still the west-side corridor | myCHEF',
      description:
        'Short Keauhou notes at inquiry: south of Kailua-Kona, still the corridor. Distinct from /kona.',
      lede:
        '/kona is the dinner door at inquiry. This blog note is Keauhou — south of town, still the Kona–Kohala corridor, not a Hilo add-on.',
      photo: 'dinKeauhou',
      body: [
        'South of town, still the Kona–Kohala corridor. Base zone at launch. Resort-residence dinners. Inquiry until we can staff. Event weeks compress availability — /ironman-weeks.',
        'There is no /keauhou corridor URL. /kona stays the dinner door. East side stays a dedicated day — /east-side.',
        'A cooktop is still required. A band is not a Book-now button. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /kona?',
          a: 'That URL is the dinner door. This piece is the shorter south-of-town kitchen note.',
        },
        {
          q: 'Can Keauhou cover Hilo?',
          a: 'No. Open /east-side.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona dinner door' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-holualoa',
      name: 'Dining in Hōlualoa',
      h1: 'Hōlualoa notes — mauka of Kona, named coffee only with origin.',
      title: 'Hōlualoa kitchen notes — mauka of Kona, named coffee only with origin | myCHEF',
      description:
        'Short Hōlualoa notes at inquiry: coffee-country elevation. Distinct from /kona and /coffee-act-198.',
      lede:
        '/kona is the dinner door at inquiry. /coffee-act-198 is the origin rule. This blog note is Hōlualoa — mauka, cooler evenings, named coffee only with origin labeling.',
      photo: 'dinHolualoa',
      body: [
        'Mauka of Kailua-Kona. Coffee-country elevation, still the west-side corridor. Cooler evenings. Named coffee only with origin labeling. Inquiry until we can staff.',
        'There is no /holualoa corridor URL. Act 198 from 2027 stays on /coffee-act-198. We do not invent a farm brand for the hillside.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one mauka inquiry table.`,
      ],
      faqs: [
        {
          q: 'Same as /coffee-act-198?',
          a: 'That page is the origin rule. This piece is the shorter Hōlualoa kitchen note.',
        },
        {
          q: 'Same as /kona?',
          a: 'That URL is the dinner door. This piece is mauka of town.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona dinner door' },
        { path: '/coffee-act-198', label: 'Coffee Act 198' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kailua-kona',
      name: 'Dining in Kailua-Kona',
      h1: 'Kailua-Kona notes — town at the south end of the corridor, inquiry.',
      title: 'Kailua-Kona kitchen notes — town at the south end of the corridor | myCHEF',
      description:
        'Short Kailua-Kona town notes at inquiry. Distinct from /kona and /blog/dining-in-kona.',
      lede:
        '/kona is the dinner door at inquiry. /blog/dining-in-kona is the west-side room. This blog note is town itself — south end of the planned corridor, Ironman weeks compress availability.',
      photo: 'dinKailuaKona',
      body: [
        'West-side town at the south end of the planned corridor. Planned base zone. Event weeks compress availability — /ironman-weeks. Inquiry until we can staff.',
        'There is no /kailua-kona corridor URL. /kona stays the dinner door. East side stays a dedicated day — /east-side.',
        'A cooktop is still required. A band is not a Book-now button. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /kona?',
          a: 'That URL is the dinner door. This piece is the shorter town kitchen note.',
        },
        {
          q: 'Same as /blog/dining-in-kona?',
          a: 'That note is the west-side room. This piece is town at the south end.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona dinner door' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-mauna-lani',
      name: 'Dining at Mauna Lani',
      h1: 'Mauna Lani notes — Kohala community, not a second island.',
      title: 'Mauna Lani kitchen notes — Kohala community, not a second island | myCHEF',
      description:
        'Short Mauna Lani notes at inquiry: same corridor, not a separate island claim. Distinct from /waikoloa and /blog/dining-in-kohala.',
      lede:
        '/waikoloa is a live dinner door at inquiry. /blog/dining-in-kohala is the 30-minute radius. This blog note is Mauna Lani — same west-side corridor, not a second island.',
      photo: 'dinMaunaLani',
      body: [
        'Kohala resort community. Same corridor, not a separate island claim. Base zone. Estate and resort-residence dinners. Inquiry until we can staff.',
        'There is no /mauna-lani corridor URL. /kohala stays the named dinner door. East side stays /east-side.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one Mauna Lani inquiry table.`,
      ],
      faqs: [
        {
          q: 'Same as /waikoloa?',
          a: 'That URL is a dinner door. This piece is the neighbouring community kitchen note.',
        },
        {
          q: 'Is this a different island?',
          a: 'No. Same west-side corridor. Open /kohala-corridor.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa dinner door' },
        { path: '/blog/dining-in-kohala', label: 'Kohala kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-mauna-kea',
      name: 'Dining at Mauna Kea resort',
      h1: 'Mauna Kea resort notes — the belt, not the summit.',
      title: 'Mauna Kea resort kitchen notes — the belt, not the summit | myCHEF',
      description:
        'Short Mauna Kea resort notes at inquiry: North Kohala belt, not the mountain. Distinct from /kohala.',
      lede:
        '/kohala is the dinner door at inquiry. This blog note is the Mauna Kea resort community — named for the belt, not the summit. We do not cook at the peak.',
      photo: 'dinMaunaKea',
      body: [
        'North Kohala resort belt. Corridor, not the mountain. Base zone. Villa dinners. Inquiry until we can staff.',
        'There is no /mauna-kea corridor URL. We will not sell a summit dinner. /kohala stays the named door.',
        'A cooktop is still required. East side is a different day — /east-side.',
      ],
      faqs: [
        {
          q: 'Do you cook at the summit?',
          a: 'No. The resort belt. Open /kohala.',
        },
        {
          q: 'Same as /blog/dining-in-kohala?',
          a: 'That note is the radius. This piece is the named resort community.',
        },
      ],
      related: [
        { path: '/kohala', label: 'Kohala dinner door' },
        { path: '/blog/dining-in-kohala', label: 'Kohala kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kau',
      name: 'Dining in Kaʻū',
      h1: 'Kaʻū notes — south-side estates, named coffee follows Act 198.',
      title: 'Kaʻū kitchen notes — south-side estates, named coffee follows Act 198 | myCHEF',
      description:
        'Short Kaʻū / South notes at inquiry: extended surcharge. Distinct from /coffee-act-198 and /blog/dining-in-holualoa.',
      lede:
        '/coffee-act-198 is the origin rule. /blog/dining-in-holualoa is mauka of Kona. This blog note is Kaʻū — south point direction, named coffee only with origin labeling.',
      photo: 'dinKau',
      body: [
        'South point direction. Extended surcharge, advance notice. South-side estates. Named Kaʻū coffee follows Act 198 from 2027. Inquiry until we can staff.',
        'There is no /kau corridor URL. We do not invent a farm brand for the south. Open /coffee-act-198 for the rule.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one south-side inquiry table.`,
      ],
      faqs: [
        {
          q: 'Same as /coffee-act-198?',
          a: 'That page is the origin rule. This piece is the shorter Kaʻū kitchen note.',
        },
        {
          q: 'Same as /blog/dining-in-holualoa?',
          a: 'That note is mauka of Kona. This piece is the south.',
        },
      ],
      related: [
        { path: '/coffee-act-198', label: 'Coffee Act 198' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-honokaa',
      name: 'Dining in Honokaʻa',
      h1: 'Honokaʻa notes — Hāmākua coast, named producers only after verification.',
      title: 'Honokaʻa kitchen notes — Hāmākua coast, verified producers only | myCHEF',
      description:
        'Short Honokaʻa / Hāmākua notes at inquiry: surcharge, named producers only after verification. Distinct from /east-side.',
      lede:
        '/east-side is the Hilo crossing. This blog note is Honokaʻa — Hāmākua coast, surcharge, mushrooms as a sourcing story not a farm claim without verification.',
      photo: 'dinHonokaa',
      body: [
        'Hāmākua coast. Surcharge. Named producers only after written verification. Estate dinners. Inquiry until we can staff.',
        'There is no /honokaa corridor URL. This is not a same-day Kona add-on and not a Hilo day unless we quote it that way — /east-side.',
        'A cooktop is still required. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /east-side?',
          a: 'That page is the Hilo crossing. This piece is the Hāmākua kitchen note.',
        },
        {
          q: 'Will you print a farm name?',
          a: 'Only after written verification. Open /blog/sourcing-honesty.',
        },
      ],
      related: [
        { path: '/east-side', label: 'East side' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-puako',
      name: 'Dining in Puakō',
      h1: 'Puakō notes — between Waikoloa and Mauna Lani, inquiry.',
      title: 'Puakō kitchen notes — between Waikoloa and Mauna Lani, inquiry | myCHEF',
      description:
        'Short Puakō notes at inquiry: Kohala coast residential. Distinct from /waikoloa and /blog/dining-in-mauna-lani.',
      lede:
        '/waikoloa is a live dinner door at inquiry. This blog note is Puakō — residential between Waikoloa and Mauna Lani, still inside the 30-minute corridor.',
      photo: 'dinPuako',
      body: [
        'Kohala coast residential between Waikoloa and Mauna Lani. Base zone inside the 30-minute corridor. Villa weeks. Inquiry until we can staff.',
        'There is no /puako corridor URL. /waikoloa stays a dinner door. East side stays a dedicated day — /east-side.',
        'A cooktop is still required. A band is not a Book-now button. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /waikoloa?',
          a: 'That URL is a dinner door. This piece is the residential stretch next to it.',
        },
        {
          q: 'Is /puako a dinner door?',
          a: 'No. Open /waikoloa or /quote.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa dinner door' },
        { path: '/kohala', label: 'Kohala dinner door' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
};

export function getBlogArticle(islandId: IslandId, slug: string) {
  return blogArticles[islandId].find((row) => row.slug === slug);
}
