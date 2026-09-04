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
  ],
};

export function getBlogArticle(islandId: IslandId, slug: string) {
  return blogArticles[islandId].find((row) => row.slug === slug);
}
