import type { IslandId } from './islands';
import { getTiers } from './rateCard';
import type { PhotoKey } from './photos';

/** DataForSEO Google Ads US — 2 Sep 2026. Do not invent volumes. */
export const SEARCH_VOLUMES = {
  'private chef maui': 260,
  'private chef kauai': 210,
  'private chef oahu': 90,
  'private chef honolulu': 70,
  'private chef big island': 70,
  'private chef kona': 70,
  'private chef hawaii': 50,
  'personal chef honolulu': 40,
  'personal chef maui': 20,
  'personal chef oahu': 20,
  'kauai catering': 210,
} as const;

/** Related searches (DataForSEO, 2 Sep 2026). Fold into titles/H1s/FAQs — do not invent volumes. */
export const RELATED_SEARCHES = {
  maui: [
    'best private chef maui',
    'female private chef maui',
    'private chef lahaina maui',
    'private chef wailea maui',
    'private sushi chef maui',
    'private chef maui cost',
    'private chef kihei maui',
  ],
  kauai: [
    'kauai catering',
    'private chef poipu kauai',
    'private chef princeville',
    'private chef hanalei',
    'kauai wedding catering',
    'kauai catering prices',
    'kauai catering menu',
  ],
} as const;

export interface MoneyNeighborhood {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  body: string[];
  zone: string;
  photo: PhotoKey;
  faqs: { q: string; a: string }[];
}

export interface IslandOffer {
  keyword: string;
  volume: number;
  h1: string;
  title: string;
  description: string;
  lede: string;
  fromPp: number;
  dayFrom: number;
  heroPhoto: PhotoKey;
  neighborhoods: { slug: string; name: string }[];
  faqs: { q: string; a: string }[];
}

function coreLow(id: IslandId): number {
  return getTiers(id).find((t) => t.tier === 'CORE')?.band[0] ?? 125;
}

export const islandOffers: Record<IslandId, IslandOffer> = {
  maui: {
    keyword: 'private chef maui',
    volume: 260,
    h1: 'Private chef Maui',
    title: 'Private chef Maui — from $150/pp | myCHEF',
    description:
      'Best private chef Maui from $150/pp. Wailea, Kīhei, Lahaina / West Maui. Published prices and menus — not a named-chef marketplace. WhatsApp for a quote.',
    lede:
      'A chef in your Wailea, Kapalua or Kāʻanapali villa. Published prices and a written menu beat a named-chef SERP. We shop, cook, serve and clean.',
    fromPp: 150,
    dayFrom: 1050,
    heroPhoto: 'mauiKitchen',
    neighborhoods: [
      { slug: 'wailea', name: 'Wailea' },
      { slug: 'kaanapali', name: 'Kāʻanapali' },
      { slug: 'lahaina', name: 'Lahaina / West Maui' },
      { slug: 'kihei', name: 'Kīhei' },
      { slug: 'kapalua', name: 'Kapalua' },
      { slug: 'makena', name: 'Makena' },
    ],
    faqs: [
      {
        q: 'How much does a private chef cost on Maui?',
        a: 'Signature dinners start at $150–$250 per person (CORE). Date Night for two starts from $500+. Stay Chef day rate from $1,050. 20% service and Hawaiʻi GET up to 4.712% are added as their own lines — once, on the written quote.',
      },
      {
        q: 'What is included?',
        a: 'Menu design, same-day shopping, cooking in your villa, table service and a clean kitchen. Groceries for multi-day stays are billed at cost. Drinks are BYO or quoted separately.',
      },
      {
        q: 'Do you cook in an Airbnb or vacation rental?',
        a: 'Yes, when there is a real kitchen. Hotel rooms without kitchens are declined or redesigned. Tell us the property type on WhatsApp or the quote form.',
      },
      {
        q: 'Can you do kids’ plates and allergies?',
        a: 'Yes. Kids eat with the adults, not off a hidden menu. Vegan, gluten-free and nut-aware are designed in advance — not swapped at the pass.',
      },
      {
        q: 'Private chef Maui cost — what do I actually pay?',
        a: 'Per person: CORE $150–$250. Groceries for Stay Chef are billed at cost with receipts. Service 20% and Hawaiʻi GET up to 4.712% sit on their own lines — once. See /pricing.',
      },
      {
        q: 'Do you do a private sushi chef on Maui?',
        a: 'We can arrange a sushi-forward menu — nigiri, sashimi, hand rolls — cooked in your villa. It is a menu direction, not a separate brand. Ask on WhatsApp.',
      },
      {
        q: 'Can I request a female private chef on Maui?',
        a: 'Chefs are assigned to the booking, not sold as a gender marketplace. If you have a preference, say so — we will match when the calendar allows. We do not invent chef names or bios.',
      },
    ],
  },
  oahu: {
    keyword: 'private chef oahu',
    volume: 90,
    h1: 'Private chef Oʻahu',
    title: 'Private chef Oahu — from $125/pp | myCHEF',
    description:
      'Private chef Oahu and Honolulu from $125/pp. Villa dinners, personal chef weeks and catering in Waikīkī, Kailua, Ko Olina and the North Shore. WhatsApp for a quote.',
    lede:
      'Honolulu to Ko Olina, Kailua to the North Shore. Celebration dinners for visitors, weekly personal chef for households who live here. From $125/pp.',
    fromPp: 125,
    dayFrom: 850,
    heroPhoto: 'oahuDinner',
    neighborhoods: [
      { slug: 'honolulu', name: 'Honolulu' },
      { slug: 'waikiki', name: 'Waikīkī' },
      { slug: 'kailua', name: 'Kailua' },
      { slug: 'north-shore', name: 'North Shore' },
      { slug: 'kahala', name: 'Kahala' },
      { slug: 'ko-olina', name: 'Ko Olina' },
    ],
    faqs: [
      {
        q: 'How much is a private chef in Honolulu or on Oʻahu?',
        a: 'CORE dinners start at $125–$190 per person. Personal chef / weekly meal prep from $300/week plus groceries at cost. Day rate from $850. Written quote before you commit.',
      },
      {
        q: 'Our condo kitchen is small — does that work?',
        a: 'Yes. We design bring-equipment menus for Waikīkī and Kakaʻako galleys, and we handle freight elevators and building COIs before the night.',
      },
      {
        q: 'Do you cook for residents, not just visitors?',
        a: 'Yes. The kamaʻāina line is a standing weekly chef — frequency, not a tourist one-off.',
      },
      {
        q: 'North Shore — is travel extra?',
        a: 'Turtle Bay and the North Shore are a published surcharge for the drive. It appears on the quote, never as a surprise on the bill.',
      },
    ],
  },
  kauai: {
    keyword: 'private chef kauai',
    volume: 210,
    h1: 'Private chef Kauaʻi',
    title: 'Private chef Kauai — from $150/pp | myCHEF',
    description:
      'Private chef Kauai from $150/pp. Kauai catering is an equal door (210/mo) — menu, prices, wedding, buffet or plated. Princeville, Poʻipū, Hanalei. WhatsApp for a quote.',
    lede:
      'Private chef Kauai and Kauai catering search at the same volume — 210 a month each. Two money doors, one team: villa dinners and staffed events in Princeville, Poʻipū and Hanalei. From $150/pp.',
    fromPp: 150,
    dayFrom: 1100,
    heroPhoto: 'kauaiChef',
    neighborhoods: [
      { slug: 'princeville', name: 'Princeville' },
      { slug: 'poipu', name: 'Poʻipū' },
      { slug: 'hanalei', name: 'Hanalei' },
      { slug: 'kapaa', name: 'Kapaʻa' },
    ],
    faqs: [
      {
        q: 'How much does a private chef cost on Kauaʻi?',
        a: 'Starting $150–$250 per person for a signature dinner — the same band as Maui. Date Night from $650. Stay Chef from $1,100/day. Quote in writing.',
      },
      {
        q: 'Do you actually book Kauaʻi, or is this a waitlist?',
        a: 'We book Kauaʻi. Tell us the shore and the dates. Far-North (Hāʻena) needs 72-hour notice and a weather/road clause — we publish that instead of pretending the Hanalei bridge never closes.',
      },
      {
        q: 'Princeville or Poʻipū — does the price change?',
        a: 'Menu bands are the Kauaʻi card. Drive time is a published zone line, not a hidden markup on the fish.',
      },
      {
        q: 'Can you staff a small wedding?',
        a: 'Yes — Kauai wedding catering for estate formats to about 75 guests. Welcome dinner, rehearsal, reception as separate lines. From $175/pp plus staffing. WhatsApp the week.',
      },
      {
        q: 'Kauai catering prices — buffet or plated?',
        a: 'Same Kauaʻi CORE band as a private-chef dinner: $150–$250 per person. Buffet is the volume format; plated (coursed seated) is the restaurant arc. Staffing is itemised. Full menu and fee stack on /catering and /pricing.',
      },
      {
        q: 'Do you publish a Kauai catering menu?',
        a: 'Yes — a sample estate menu on the Kauai catering page. Your written menu is designed for that house and that guest list. We do not laminate a fake carte.',
      },
    ],
  },
  bigisland: {
    keyword: 'private chef big island',
    volume: 70,
    h1: 'Private chef Big Island',
    title: 'Private chef Big Island & Kona — from $125/pp | myCHEF',
    description:
      'Private chef Big Island and Kona from $125/pp. Kohala Coast, Waikoloa, Waimea and Kailua-Kona villa dinners. WhatsApp for a written quote.',
    lede:
      'Kona and the Kohala Coast first — seven resort communities in one west-side radius. Hilo and Volcano are quote-only; we will not fake a same-day round trip.',
    fromPp: 125,
    dayFrom: 950,
    heroPhoto: 'kohalaFish',
    neighborhoods: [
      { slug: 'kona', name: 'Kona' },
      { slug: 'waimea', name: 'Waimea' },
      { slug: 'waikoloa', name: 'Waikoloa' },
      { slug: 'kohala', name: 'Kohala Coast' },
    ],
    faqs: [
      {
        q: 'How much is a private chef in Kona or on the Big Island?',
        a: 'CORE dinners start at $150–$225 per person. ENTRY from $110. Stay Chef from $950/day. Same fee stack as every myCHEF Hawaii quote.',
      },
      {
        q: 'Can you cover Hilo from Kona?',
        a: 'Not in one day. East side is 2.5–3 hours — dedicated staffing, quoted honestly. West-side villas are the default.',
      },
      {
        q: 'Do you take Ironman week?',
        a: 'Yes, with compressed availability. Flag those dates early.',
      },
      {
        q: 'Is this Hawaiʻi Island or the Big Island?',
        a: 'Both. Searchers say Big Island and Kona; the geography is Hawaiʻi Island. The chef is the same.',
      },
    ],
  },
};

export const moneyNeighborhoods: Record<IslandId, MoneyNeighborhood[]> = {
  maui: [
    {
      slug: 'wailea',
      name: 'Wailea',
      h1: 'Private chef Wailea Maui',
      title: 'Private chef Wailea Maui — from $150/pp | myCHEF',
      description:
        'Private chef Wailea Maui from $150/pp. Published prices and menus — villa dinners and wedding-week catering in resort residences. WhatsApp for a quote.',
      lede:
        'Private chef Wailea Maui is the search. Hotel-zoned residences with real kitchens, published $150–$250/pp CORE, a written menu — not a named-chef marketplace.',
      body: [
        'This is not a resort communal chef’s table. It is your villa, your guest list, a menu designed that week.',
        'Starting CORE $150–$250 per person. Date Night, Family Feast and Wedding week sit on the same rate card. We shop in Kihei / Wailea the day of service.',
      ],
      zone: 'Base zone — travel included',
      photo: 'wailea',
      faqs: [
        {
          q: 'Is this the same as a Wailea resort chef’s table?',
          a: 'No. Those seat you with strangers. Ours is private, in your kitchen, paced to your night.',
        },
        {
          q: 'Can you do a wedding week in Wailea?',
          a: 'Yes — welcome dinner through recovery brunch. Starting from $150/pp plus staffing.',
        },
        {
          q: 'Private chef Maui cost in Wailea?',
          a: 'CORE $150–$250 per person. Groceries for Stay Chef at cost. 20% service and GET up to 4.712% as their own lines. See /pricing.',
        },
      ],
    },
    {
      slug: 'kaanapali',
      name: 'Kāʻanapali',
      h1: 'Private chef in Kāʻanapali, Maui',
      title: 'Private chef Kaanapali Maui — from $150/pp | myCHEF',
      description:
        'Private chef in Kāʻanapali and West Maui from $150/pp. Villa dinners and wedding-week satellite events. WhatsApp to book.',
      lede:
        'West Maui, named honestly: Kāʻanapali, Nāpili, Kapalua. Same CORE band as Wailea. Traffic is planned into arrival, not discovered on the invoice.',
      body: [
        'Resort residences with kitchens — not a hotel-room impersonation. Family Feast and mobile bar stack on the same quote.',
      ],
      zone: 'Base zone — West Maui',
      photo: 'kaanapali',
      faqs: [
        {
          q: 'Do you serve Lahaina?',
          a: 'Lahaina searches come here. We cook in Kāʻanapali, Nāpili and Kapalua residences — West Maui villas with kitchens. See the Lahaina page for how we name that.',
        },
      ],
    },
    {
      slug: 'lahaina',
      name: 'Lahaina / West Maui',
      h1: 'Private chef Lahaina Maui',
      title: 'Private chef Lahaina Maui — West Maui from $150/pp | myCHEF',
      description:
        'Private chef Lahaina Maui — we cook West Maui: Kāʻanapali, Nāpili and Kapalua villas from $150/pp. Honest geography, published prices and menus.',
      lede:
        'People search “private chef Lahaina Maui.” We answer with the kitchens we actually enter: Kāʻanapali, Nāpili, Kapalua. West Maui service, published Maui prices.',
      body: [
        'We do not market a luxury-dining destination that the town is not. We do cook next door, in hotel-zoned residences, at the same $150–$250/pp CORE band.',
        'WhatsApp the address. If the kitchen works, we book it. If it does not, we say so before you put a deposit down.',
      ],
      zone: 'West Maui — Kāʻanapali / Nāpili / Kapalua',
      photo: 'kaanapali',
      faqs: [
        {
          q: 'Can you come to a Lahaina address?',
          a: 'Tell us the exact property. We serve West Maui residences with kitchens. We will not pretend a room without a cooktop is a chef’s table.',
        },
        {
          q: 'Is the price different from Wailea?',
          a: 'Same Maui CORE band. Drive time inside West Maui is included. Upcountry is the surcharge zone, not Kāʻanapali.',
        },
      ],
    },
    {
      slug: 'kihei',
      name: 'Kīhei',
      h1: 'Private chef Kihei Maui',
      title: 'Private chef Kihei Maui — from $150/pp | myCHEF',
      description:
        'Private chef Kihei Maui. Family dinners and multi-day villa chefs from $150/pp. South Maui kitchens, published prices.',
      lede:
        'Private chef Kihei Maui is a related search we actually serve — condos and vacation homes with kitchens, not a Wailea clone page. Same $150–$250/pp CORE. Kids’ plates are normal here.',
      body: [
        'Family Feast is the usual order: 6–8 people, fresh catch, a clean kitchen. Stay Chef if you are in for the week.',
      ],
      zone: 'South Maui — base-adjacent',
      photo: 'makena',
      faqs: [
        {
          q: 'Is Kīhei cheaper than Wailea?',
          a: 'The menu band is the Maui rate card. There is no “discount geography.” Kitchen constraints are stated on the quote.',
        },
        {
          q: 'Sushi-forward menu in Kīhei?',
          a: 'Yes — we can arrange nigiri, sashimi and hand rolls as a menu direction. Ask on WhatsApp. Not a separate “sushi chef” brand.',
        },
      ],
    },
    {
      slug: 'kapalua',
      name: 'Kapalua',
      h1: 'Private chef in Kapalua, Maui',
      title: 'Private chef Kapalua Maui — Date Night from $500+ | myCHEF',
      description: 'Private chef in Kapalua — dinners for two, family tables and wedding-week satellite dinners. From $150/pp.',
      lede: 'Northwest Maui estates. Date Night is the product this bay was built for. CORE dinners from $150/pp.',
      body: ['Wine is yours or quoted separately. Florals and photography are add-on lines, never buried.'],
      zone: 'Base zone',
      photo: 'kapaluaTwo',
      faqs: [{ q: 'Dinner for two?', a: 'Yes — Date Night from $500+ on Maui, cooked in the villa.' }],
    },
    {
      slug: 'makena',
      name: 'Makena',
      h1: 'Private chef in Makena, Maui',
      title: 'Private chef Makena Maui — from $150/pp | myCHEF',
      description: 'Private chef south of Wailea in Makena. Same Maui starting prices, quieter inventory, wet-weather backup.',
      lede: 'South of Wailea, still base zone. Same CORE band. Outdoor tables always have a covered backup.',
      body: ['Family weeks and celebration dinners. Not a surcharge corridor.'],
      zone: 'Base zone',
      photo: 'makena',
      faqs: [{ q: 'Outdoor dinner?', a: 'Yes, with a written wet-weather plan before the day.' }],
    },
  ],
  oahu: [
    {
      slug: 'honolulu',
      name: 'Honolulu',
      h1: 'Private chef in Honolulu, Oʻahu',
      title: 'Private chef Honolulu — from $125/pp | myCHEF',
      description:
        'Private chef Honolulu and personal chef Honolulu from $125/pp. In-residence dinners from Waikīkī to Kahala. Weekly household service for kamaʻāina.',
      lede:
        'Honolulu is the search: private chef Honolulu (70/mo) and personal chef Honolulu (40/mo). We cook in residences with kitchens — Gold Coast, Waikīkī towers, town apartments.',
      body: [
        'Visitors book celebration dinners. Residents book the weekly line from $300/week plus groceries at cost.',
        'Standard hotel rooms without kitchens are not a chef venue. Residences, yes.',
      ],
      zone: 'Base zone — town',
      photo: 'oahuEstate',
      faqs: [
        {
          q: 'Personal chef vs private chef?',
          a: 'Private chef is the one-night dinner. Personal chef is the weekly Honolulu household line. Same team, different rhythm.',
        },
      ],
    },
    {
      slug: 'waikiki',
      name: 'Waikīkī',
      h1: 'Private chef in Waikīkī, Oʻahu',
      title: 'Private chef Waikiki — residences with kitchens | myCHEF',
      description: 'Private chef in Waikīkī from $125/pp — resort residences and apartments with real kitchens, not hotel rooms.',
      lede: 'Most Waikīkī hotel rooms cannot host a chef. We cook in residences with a cooktop and a table — and we say no when they do not.',
      body: ['Freight elevators, loading docks and COIs are arranged with the building. CORE from $125/pp.'],
      zone: 'Base zone',
      photo: 'waikiki',
      faqs: [
        {
          q: 'Can you cook in a Waikīkī hotel room?',
          a: 'Only if it is a residence with a functioning kitchen. Tell us the property type first.',
        },
      ],
    },
    {
      slug: 'kailua',
      name: 'Kailua',
      h1: 'Private chef in Kailua, Oʻahu',
      title: 'Private chef Kailua & Lanikai — from $125/pp | myCHEF',
      description: 'Private chef in Kailua and Lanikai. Windward estate weeks and family dinners from $125/pp.',
      lede: 'Windward stays run in weeks, not weekends. Multi-day Stay Chef is the honest product under the 30-day rental rule.',
      body: ['Family Feast for a celebration night inside a longer stay. Base zone from town.'],
      zone: 'Base zone — windward',
      photo: 'kailua',
      faqs: [
        {
          q: 'One-night tourist dinner?',
          a: 'If you are in a genuine stay with a kitchen, yes. We do not force a chef into an illegal two-night rental.',
        },
      ],
    },
    {
      slug: 'north-shore',
      name: 'North Shore',
      h1: 'Private chef in North Shore, Oʻahu',
      title: 'Private chef North Shore Oahu — Turtle Bay villas | myCHEF',
      description: 'Private chef North Shore Oahu. Turtle Bay and North Shore villas — published drive surcharge, CORE from $125/pp.',
      lede: 'The drive is 60–90+ minutes. The surcharge is on the quote. Surf season books early.',
      body: ['Dedicated chef days — we do not stack a town dinner and a North Shore dinner on the same calendar.'],
      zone: 'Surcharge zone',
      photo: 'northShore',
      faqs: [
        { q: 'How much is the travel fee?', a: 'Published on your written quote as its own line. Ask on WhatsApp and we send the zone with the menu.' },
      ],
    },
    {
      slug: 'kahala',
      name: 'Kahala',
      h1: 'Private chef in Kahala, Oʻahu',
      title: 'Private chef Kahala & Gold Coast — from $125/pp | myCHEF',
      description: 'Private chef in Kahala and the Gold Coast. Estate dinners and weekly household service from $125/pp.',
      lede: 'Honolulu’s household-entertaining belt. Celebration dinners and the kamaʻāina weekly line overlap here.',
      body: ['Real dining rooms. CORE $125–$190/pp. Weekly from $300 plus groceries at cost.'],
      zone: 'Base zone',
      photo: 'oahuEstate',
      faqs: [{ q: 'Weekly service?', a: 'Yes — this is the core of personal chef Honolulu.' }],
    },
    {
      slug: 'ko-olina',
      name: 'Ko Olina',
      h1: 'Private chef in Ko Olina, Oʻahu',
      title: 'Private chef Ko Olina — villa weeks from $850/day | myCHEF',
      description: 'Private chef in Ko Olina. Legal short-stay villas, Stay Chef from $850/day, dinners from $125/pp.',
      lede: 'The west-side villa week. Provisioning for the stay, arrival-night dinner, a stocked fridge.',
      body: ['Stay Chef is the lead. One-night dinners still book. Base zone with west-side shopping.'],
      zone: 'Base zone',
      photo: 'koolina',
      faqs: [{ q: 'Stock the fridge before we land?', a: 'Yes, when the stay includes provisioning.' }],
    },
  ],
  kauai: [
    {
      slug: 'princeville',
      name: 'Princeville',
      h1: 'Private chef Princeville Kauai',
      title: 'Private chef Princeville Kauai — from $150/pp | myCHEF',
      description:
        'Private chef Princeville Kauai from $150/pp. North Shore estate dinners, villa weeks and Kauai catering. Book now.',
      lede:
        'Private chef Princeville is the North Shore search. We book it. CORE $150–$250/pp — Maui-class prices. Kauai catering for the same estates.',
      body: [
        'Winter surf season: ask early. Far-North (Hāʻena) inherits the Hanalei-bridge weather clause — reschedule rather than forfeit.',
        'Need a reception, not a dinner? Kauai catering — buffet or plated, wedding week, published prices — is a peer door on this host.',
      ],
      zone: 'North Shore — published zone',
      photo: 'kauaiNorth',
      faqs: [
        { q: 'Can I book a date now?', a: 'Yes. WhatsApp the dates and the house. This is not a waitlist island.' },
        {
          q: 'Princeville catering or a private chef?',
          a: 'Dinner for the house is private chef. Ten to seventy-five guests is Kauai catering — same team, staffed. See /catering.',
        },
      ],
    },
    {
      slug: 'poipu',
      name: 'Poʻipū',
      h1: 'Private chef Poipu Kauai',
      title: 'Private chef Poipu Kauai — from $150/pp | myCHEF',
      description:
        'Private chef Poipu Kauai from $150/pp. South Shore arrival-night dinners, retreat weeks and Kauai catering in Poʻipū and Kōloa.',
      lede:
        'Private chef Poipu Kauai is a related search we book. Sunnier, steadier, closer to Līhuʻe. Arrival-night dinner plus Stay Chef — or Kauai catering for the house.',
      body: [
        'Same Kauaʻi CORE band as Princeville. Shorter drive — the zone map is a map, not a surprise.',
        'Retreat catering and wedding-week satellite dinners sit on /catering with published starting prices.',
      ],
      zone: 'South Shore',
      photo: 'kauaiSouth',
      faqs: [
        { q: 'Retreat catering?', a: 'Full-board days for houses that actually cook. Dietary is designed in, not promised as theatre.' },
        {
          q: 'Kauai catering menu in Poʻipū?',
          a: 'Sample estate menu on the Kauai catering page. Your written menu is designed that week. Buffet or plated.',
        },
      ],
    },
    {
      slug: 'hanalei',
      name: 'Hanalei',
      h1: 'Private chef Hanalei Kauai',
      title: 'Private chef Hanalei Kauai — from $150/pp | myCHEF',
      description:
        'Private chef Hanalei Kauai from $150/pp. North Shore dinners and Kauai catering. Weather and road honesty published up front.',
      lede:
        'Private chef Hanalei is the valley search. The bridge is real. We plan around it instead of arguing with it. CORE from $150/pp.',
      body: [
        'Estate dinners and Kauai wedding catering when the guest list grows. 72-hour notice for far-North. CORE from $150/pp.',
      ],
      zone: 'North Shore',
      photo: 'kauaiNorth',
      faqs: [
        { q: 'Road closure?', a: 'We reschedule rather than forfeit. That is on the quote before any deposit.' },
        {
          q: 'Can you cater a Hanalei wedding?',
          a: 'Estate formats, quoted with staffing. Far-North inherits the weather clause. See Kauai catering.',
        },
      ],
    },
    {
      slug: 'kapaa',
      name: 'Kapaʻa',
      h1: 'Private chef in Kapaʻa, Kauaʻi',
      title: 'Private chef Kapaa Kauai — from $150/pp | myCHEF',
      description: 'Private chef in Kapaʻa and the east side. Household dinners from $150/pp.',
      lede: 'East-side town, closer to the Līhuʻe base than either shore villa belt. Honest, not the hero product — still a real booking.',
      body: ['Family Feast and weekly-style nights. Same Kauaʻi starting prices.'],
      zone: 'East side — included',
      photo: 'kauaiChef',
      faqs: [{ q: 'Is this cheaper?', a: 'Closer drive. Menu band is still the Kauaʻi card.' }],
    },
  ],
  bigisland: [
    {
      slug: 'kona',
      name: 'Kona',
      h1: 'Private chef in Kona, Hawaiʻi Island',
      title: 'Private chef Kona Hawaii — from $125/pp | myCHEF',
      description:
        'Private chef Kona and Kailua-Kona from $125/pp. West-side villa dinners, Stay Chef weeks, Ironman-week honesty.',
      lede: 'Private chef Kona is a 70/month search. We cook Kailua-Kona, Keauhou and the south end of the Kohala corridor.',
      body: [
        'CORE $150–$225/pp. Event weeks (including Ironman) compress the calendar — flag dates on WhatsApp.',
        'Named Kona coffee follows origin-labeling rules. We do not invent farm names.',
      ],
      zone: 'West-side base',
      photo: 'konaKitchen',
      faqs: [
        { q: 'Hilo same day?', a: 'No. East side is quote-only with its own team day.' },
      ],
    },
    {
      slug: 'waimea',
      name: 'Waimea',
      h1: 'Private chef in Waimea, Hawaiʻi Island',
      title: 'Private chef Waimea / Kamuela — ranch country | myCHEF',
      description: 'Private chef in Waimea (Kamuela). Upcountry ranch houses, cooler elevation, published surcharge.',
      lede: 'Ranch country above the Kohala resorts. The surcharge is the drive and the elevation — published, not hidden.',
      body: ['Estate and ranch tables. CORE band plus the Waimea zone line on the quote.'],
      zone: 'Surcharge — Waimea / Hāmākua',
      photo: 'kohalaTable',
      faqs: [{ q: 'Can you do a ranch wedding?', a: 'Estate formats, quoted with staffing. WhatsApp the headcount.' }],
    },
    {
      slug: 'waikoloa',
      name: 'Waikoloa',
      h1: 'Private chef in Waikoloa, Hawaiʻi Island',
      title: 'Private chef Waikoloa — Kohala Coast from $125/pp | myCHEF',
      description: 'Private chef in Waikoloa and the Kohala resort corridor. Villa weeks and dinners from $125/pp.',
      lede: 'Inside the 30-minute west-side radius. Same Kona–Kohala team. Stay Chef for the villa week.',
      body: ['Seven resort communities share this corridor. We will not pretend to cover Hilo from here in an afternoon.'],
      zone: 'Base — Kohala corridor',
      photo: 'kohalaFish',
      faqs: [{ q: 'Mauna Lani / Mauna Kea resort too?', a: 'Yes — same corridor, same quote.' }],
    },
    {
      slug: 'kohala',
      name: 'Kohala Coast',
      h1: 'Private chef on the Kohala Coast',
      title: 'Private chef Kohala Coast — from $125/pp | myCHEF',
      description: 'Private chef Kohala Coast. Waikoloa, Mauna Lani, Mauna Kea resort belt. Published starting prices.',
      lede: 'The opening move on Hawaiʻi Island: one 30-minute service radius, the island’s highest villa ADRs.',
      body: ['Sourcing-led dinners. Producer names only with written verification.'],
      zone: 'Base zone',
      photo: 'kohalaTable',
      faqs: [{ q: 'Big Island or Hawaiʻi Island?', a: 'Both names. Hostname is bigisland.mychef-hawaii.com.' }],
    },
  ],
};

export function getMoneyNeighborhood(island: IslandId, slug: string): MoneyNeighborhood | undefined {
  return moneyNeighborhoods[island].find((n) => n.slug === slug);
}

export function coreFromPrice(island: IslandId): string {
  const t = getTiers(island).find((x) => x.tier === 'CORE');
  return t ? `from $${t.band[0]}/pp` : '';
}

export { coreLow };
