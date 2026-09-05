import type { IslandId } from './islands';
import type { PhotoKey } from './photos';
import { SEARCH_VOLUMES } from './offers';
import { AREA_CELLS } from './areaCells';

/**
 * Island-only commercial cells from the catalog UNIQUE map.
 * Skip slugs that already live as money neighborhoods (Maui /lahaina).
 * Titles must not steal /catering or / money keywords.
 */

export interface UniqueCell {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
  related: { path: string; label: string }[];
}

export const uniqueCells: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'kamaaina',
      name: 'Kamaʻāina line',
      h1: 'Kamaʻāina household chefs — weekly, not a tourist SKU.',
      title: 'Kamaʻāina weekly household chefs — Oʻahu residents | myCHEF',
      description:
        'Weekly household service for Oʻahu residents. Frequency, not yield. Not a visitor dinner. Personal-chef weeks sit next to the villa line.',
      lede:
        'Resident kitchens. School nights. A fridge that actually gets used. This is not a one-off villa dinner dressed up as local.',
      photo: 'cellKamaaina',
      body: [
        `Personal chef Honolulu is a measured phrase (${SEARCH_VOLUMES['personal chef honolulu']} monthly). Personal chef Oahu is ${SEARCH_VOLUMES['personal chef oahu']}. Neither belongs in a tourist-dinner title. This page is the resident line.`,
        'The dinner door for visitors is this host’s home and /private-chef. Stay Chef weeks are /vacation-chef. Kamaʻāina is frequency: the same household, the same corridors, a standing shop-and-cook rhythm.',
        'Honolulu residences, Kailua households, town apartments with a real stove. We do not sell this as a yield product. If you are visiting, open / or /vacation-chef.',
      ],
      faqs: [
        {
          q: 'Is this private chef Oahu?',
          a: `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) is the visitor dinner door on /. This page is weekly service for people who live here.`,
        },
        {
          q: 'Do you need a 30-day estate?',
          a: 'Kailua weeks often are. Town apartments with a kitchen can be a standing Tuesday. Tell us the address.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/private-chef', label: 'What’s included' },
        { path: '/honolulu', label: 'Honolulu residences' },
      ],
    },
    {
      slug: 'conventions',
      name: 'Conventions',
      h1: 'HCC citywides are closed — we are not a MICE kitchen.',
      title: 'HCC citywides are closed — not a MICE kitchen | myCHEF Oahu',
      description:
        'Hawaiʻi Convention Center citywides are closed through 2027. myCHEF Oahu cooks residences and villas, not convention citywides.',
      lede:
        'We cook houses. We do not staff ballrooms for citywide conventions. That is a closed market through 2027, and it is not our product anyway.',
      photo: 'cellConventions',
      body: [
        'The Hawaiʻi Convention Center citywide calendar is closed through 2027. This department will not pretend to be a MICE play while that is true — or after, unless we staff that work for real.',
        'Offsites that actually happen in houses — 10–75 guests, a kitchen, a lawn — are /events and /catering. Film and production crews in residences are the same staffed-room product, not a convention overlay.',
        'January around the Sony Open week presses hospitality on this island. We name the calendar. We do not claim an affiliation.',
      ],
      faqs: [
        {
          q: 'Can you cater a convention lunch downtown?',
          a: 'No. We staff villa and residence events. Drop-off for a ballroom is a different company.',
        },
        {
          q: 'What about a board dinner in Kahala during a conference?',
          a: 'A house with a kitchen is our product. The conference across town is not. See /gold-coast.',
        },
      ],
      related: [
        { path: '/events', label: 'Villa events' },
        { path: '/catering', label: 'Staffed catering' },
        { path: '/about', label: 'The Oahu crew' },
      ],
    },
    {
      slug: 'gold-coast',
      name: 'Gold Coast',
      h1: 'Gold Coast estate dining rooms — Kahala to Diamond Head.',
      title: 'Gold Coast estate dining rooms — Kahala to Diamond Head | myCHEF',
      description:
        'Kahala and Diamond Head residences with real dining rooms. Base zone on Oahu. Estate entertaining, not a hotel suite.',
      lede:
        'The dining room is the point. Brass, koa, a lawn that opens to one Diamond Head cone. This is estate entertaining on the Gold Coast.',
      photo: 'cellGoldCoast',
      body: [
        'Kahala is a live corridor on /kahala. This cell is the estate belt as a whole — Gold Coast houses with dining rooms, not a Waikīkī kitchenette.',
        'Base zone. No North Shore surcharge. Wedding-weekend kitchens on this coast are /weddings. A Tuesday for eight is / or /private-chef.',
        'We staff the night to the guest list: chef and shopping for two; chef, sous, service, bar for a seated reception.',
      ],
      faqs: [
        {
          q: 'Is this the same as /kahala?',
          a: '/kahala is the neighborhood door. This page is the estate belt — Kahala through Diamond Head residences with dining rooms.',
        },
        {
          q: 'Hotel nearby — can you cook there instead?',
          a: 'If the suite has a kitchen. Most do not. The Gold Coast product is the house.',
        },
      ],
      related: [
        { path: '/kahala', label: 'Kahala corridor' },
        { path: '/weddings', label: 'Wedding weekends' },
        { path: '/honolulu', label: 'Honolulu residences' },
      ],
    },
    {
      slug: 'short-stay',
      name: 'Short-stay villas',
      h1: 'Legal short-stay villas in Ko Olina — the west-side pool.',
      title: 'Legal short-stay villas in Ko Olina | myCHEF Oahu',
      description:
        'Ko Olina holds the deepest legal short-stay villa pool on Oʻahu. Stay Chef weeks, arrival-night dinners, west-side provisioning.',
      lede:
        'We say legal because the law does. Ko Olina is where visitor villas actually sit on this island. Town apartments are a different product.',
      photo: 'cellShortStay',
      body: [
        'Ko Olina is a live corridor on /ko-olina. This cell is the legal short-stay fact: the west-side villa pool, not a wink at unpermitted town rentals.',
        'Stay Chef weeks and arrival-night dinners are the usual stack. Groceries at cost on multi-day. See /vacation-chef.',
        'West-side provisioning. We are on-site before the rush the same way we are in town — the corridor is just different.',
      ],
      faqs: [
        {
          q: 'Will you cook in an unpermitted Honolulu vacation rental?',
          a: 'We cook in kitchens. Permitting is the host’s problem; we will not advertise illegal short-stay as a product. Ko Olina is the legal pool we name.',
        },
        {
          q: 'Is this a tourist dinner?',
          a: 'It is a villa week for people staying legally on the west side. Resident weekly service is /kamaaina.',
        },
      ],
      related: [
        { path: '/ko-olina', label: 'Ko Olina corridor' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
      ],
    },
    ...AREA_CELLS.oahu,
  ],
  maui: [
    {
      slug: 'south-maui',
      name: 'South Maui',
      h1: 'South Maui corridor — Wailea, Makena, Kīhei logistics.',
      title: 'South Maui corridor — Wailea, Makena, Kīhei | myCHEF',
      description:
        'Three South Maui cells, three logistics stories, one team. Wailea resort residences, Makena lava terraces, Kīhei vacation homes.',
      lede:
        'Same south shore. Not the same driveway. Wailea, Makena, and Kīhei each have a live URL. This page is the corridor that holds them.',
      photo: 'cellSouthMaui',
      body: [
        'Open /wailea, /makena, /kihei. Resort residences, lava terraces, residential vacation homes. One South Maui team shops and staffs all three.',
        'Maui catering — the money search — lives on /catering. This page does not take that title. It names the south-shore drive.',
        'Upcountry is not South Maui. Pāʻia is quote-only. See /coverage.',
      ],
      faqs: [
        {
          q: 'Is Kīhei “less than” Wailea?',
          a: 'It is a different house. Family weeks and kids’ plates are common in Kīhei. Wailea is often the tasting table. Same crew standard.',
        },
        {
          q: 'Can you do Wailea and Kīhei on the same day?',
          a: 'Two services in one day is quoted as two nights or a day rate. We will not squeeze a tasting and a family dinner into one unpaid sprint.',
        },
      ],
      related: [
        { path: '/wailea', label: 'Wailea' },
        { path: '/makena', label: 'Makena' },
        { path: '/kihei', label: 'Kīhei' },
      ],
    },
    {
      slug: 'west-maui',
      name: 'West Maui',
      h1: 'West Maui corridor — Kāʻanapali to Kapalua.',
      title: 'West Maui corridor — Kāʻanapali to Kapalua | myCHEF',
      description:
        'West Maui residences with kitchens: Kāʻanapali, Nāpili, Kapalua. Traffic planned into arrival. Not marketed as Lahaina luxury dining.',
      lede:
        'The channel, the headland, the deck at west sunset. Kāʻanapali to Kapalua. We do not sell this corridor as a Lahaina dining brand.',
      photo: 'cellWestMaui',
      body: [
        'Live URLs: /kaanapali, /kapalua, /lahaina. /lahaina is how we name the geography honestly. This page is the west-side drive as a corridor.',
        'Traffic is planned into arrival, not discovered on the invoice. A Saturday in West Maui is not a South Maui Saturday.',
        `Private chef Lahaina Maui is a small related phrase (${SEARCH_VOLUMES['private chef lahaina maui']}). Neighborhood volume is not a title keyword. The address page is /lahaina.`,
      ],
      faqs: [
        {
          q: 'Do you cook “in Lahaina”?',
          a: 'We cook West Maui houses with kitchens. Tell us the address. /lahaina explains the naming. We will not run a luxury-Lahaina ad.',
        },
        {
          q: 'Kapalua vs Kāʻanapali?',
          a: 'Both base zone. Kapalua is often dinner for two. Kāʻanapali is often a family deck. See the neighborhood URLs.',
        },
      ],
      related: [
        { path: '/kaanapali', label: 'Kāʻanapali' },
        { path: '/kapalua', label: 'Kapalua' },
        { path: '/lahaina', label: 'How we name Lahaina' },
      ],
    },
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Maui wedding week — four lines, one kitchen.',
      title: 'Maui wedding week — welcome, rehearsal, reception, brunch | myCHEF',
      description:
        'Primary wedding island. Welcome dinner, rehearsal, reception, and recovery brunch as separate lines. The catering keyword stays on /weddings.',
      lede:
        'The week is the product. Each night is its own line so the reception does not swallow the welcome dinner. One culinary team.',
      photo: 'cellMauiWeddingWeek',
      body: [
        `Wedding catering Maui is a measured phrase (${SEARCH_VOLUMES['wedding catering maui']} monthly). /weddings holds that keyword. This page holds the week stack so those titles do not collide.`,
        'Welcome dinner. Rehearsal. Reception. Recovery brunch. Written as four lines — or however many nights you actually want. Guest counts we staff: receptions about 10–75.',
        'Wailea lawns, Kapalua houses, Makena terraces. Wet-weather backup is written for grass. See /south-maui and /west-maui for the drive.',
      ],
      faqs: [
        {
          q: 'Is this the wedding catering page?',
          a: `No. /weddings owns wedding catering Maui. This page is the week: welcome, rehearsal, reception, brunch as separate lines.`,
        },
        {
          q: 'Can we skip the reception and only do welcome + brunch?',
          a: 'Yes. Each night is a line. You do not buy a phantom reception to get a welcome dinner.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/events', label: 'Occasion nights' },
        { path: '/bar', label: 'Villa cocktails' },
      ],
    },
    ...AREA_CELLS.maui,
  ],
  kauai: [
    {
      slug: 'hanalei-bridge',
      name: 'Hanalei bridge',
      h1: 'Hanalei bridge clause — 72-hour notice, reschedule not forfeit.',
      title: 'Hanalei bridge weather clause — 72-hour notice | myCHEF Kauai',
      description:
        'Far-North Kauai events inherit a written road and weather clause. 72-hour notice. Closures reschedule rather than forfeit.',
      lede:
        'The road is the product constraint. We write it down instead of shrugging on the night. Inquiry stage, both shores.',
      photo: 'cellHanaleiBridge',
      body: [
        'Hāʻena and the far North are quote-only. Princeville and Hanalei already carry a shore surcharge. Past the bridge, weather and the one-lane road decide whether we arrive.',
        '72-hour notice. If the road closes, we reschedule rather than forfeit the food. The clause is on the quote.',
        'This is not a North Shore postcard. It is logistics. The estate dinner itself is /hanalei or /north-shore.',
      ],
      faqs: [
        {
          q: 'Does every Kauai booking get this clause?',
          a: 'No. Far-North addresses inherit it. Poʻipū does not. The quote names the shore.',
        },
        {
          q: 'What if we already flew in?',
          a: 'We move the night, not the island. Food that cannot be held is handled in writing on the quote — not as a surprise fee.',
        },
      ],
      related: [
        { path: '/hanalei', label: 'Hanalei corridor' },
        { path: '/north-shore', label: 'Kauaʻi North Shore' },
        { path: '/coverage', label: 'Coverage map' },
      ],
    },
    {
      slug: 'north-shore',
      name: 'North Shore',
      h1: 'Kauaʻi North Shore — Princeville, Hanalei, Hāʻena.',
      title: 'Kauaʻi North Shore — Princeville, Hanalei, Hāʻena | myCHEF',
      description:
        'Princeville, Hanalei, Hāʻena. Surf-season winters book early. Far-North inherits the bridge clause. Inquiry stage.',
      lede:
        'Misted mountains, wet stone, a covered lānai plan. The North is not the South. Winters book early because the weather is the calendar.',
      photo: 'cellKauaiNorth',
      body: [
        'Live corridors: /princeville, /hanalei. Hāʻena is quote-only with /hanalei-bridge. This page is the shore as a whole so those neighborhood titles stay specific.',
        `Private chef Poipu Kauai is a related South Shore phrase. This URL is the North. Starting prices from $150 a guest — published, not invented.`,
        'Inquiry stage. We staff the estate when a crew exists.',
      ],
      faqs: [
        {
          q: 'Is this private chef Kauai?',
          a: `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) is this host’s home. This page is the North Shore map.`,
        },
        {
          q: 'Winter swell — can you still cook?',
          a: 'In the kitchen and on a covered terrace, yes. Outdoor fire is a weather call. Far-North still inherits the bridge clause.',
        },
      ],
      related: [
        { path: '/princeville', label: 'Princeville' },
        { path: '/hanalei', label: 'Hanalei' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
      ],
    },
    {
      slug: 'south-shore',
      name: 'South Shore',
      h1: 'Kauaʻi South Shore — Poʻipū and Kōloa.',
      title: 'Kauaʻi South Shore — Poʻipū and Kōloa | myCHEF',
      description:
        'Poʻipū and Kōloa. Shorter drive from Līhuʻe than the North. Wood-grilled catch when the kitchen takes fire. Inquiry stage.',
      lede:
        'Kiawe, red dirt, pale cliffs, a pool kitchen in the morning. The South is sun and fire. It is still a published shore surcharge.',
      photo: 'cellKauaiSouth',
      body: [
        'Live corridor: /poipu. This cell is the South Shore as a whole — Poʻipū and Kōloa — so /poipu can stay the neighborhood door.',
        'Shorter drive from Līhuʻe than Princeville. Same starting prices. Wood-grilled catch when the kitchen can take fire.',
        `Related search “private chef poipu kauai” is a supporting phrase, not a second title. Home holds private chef Kauai.`,
      ],
      faqs: [
        {
          q: 'Is Poʻipū cheaper than Hanalei?',
          a: 'Same starting prices. Shorter drive. Both shores sit outside the Līhuʻe–Kapaʻa base, so both carry a surcharge — named on the quote.',
        },
        {
          q: 'South Shore chef as a brand?',
          a: 'No. One Kauaʻi department, two shores. See /about.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū corridor' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/menus', label: 'Menus' },
      ],
    },
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Kauaʻi wedding week — estate formats, inquiry.',
      title: 'Kauaʻi wedding week — estate formats, inquiry | myCHEF',
      description:
        'Estate wedding weeks on both shores to about 75 guests. Welcome, rehearsal, reception as separate lines. Inquiry stage. /weddings holds the catering keyword.',
      lede:
        'Not a ballroom. An estate table looking into a valley, or a South Shore lawn. Inquiry stage. Each night is a line.',
      photo: 'cellKauaiWeddingWeek',
      body: [
        `Kauai wedding catering is ${SEARCH_VOLUMES['kauai wedding catering']} monthly. /weddings holds that keyword. This page holds the week stack.`,
        'Welcome, rehearsal, reception as separate lines. Estate formats to about 75. Far-North weeks inherit /hanalei-bridge.',
        'From $175 a guest plus staffing — published. Inquiry list with the shore and the dates.',
      ],
      faqs: [
        {
          q: 'Can I book the reception only?',
          a: 'Yes. The week is optional. /weddings is the catering door; this page is how the nights stack.',
        },
        {
          q: 'Ballroom at a resort?',
          a: 'Not our product. Houses and estates with kitchens. Guest counts about 10–75.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/events', label: 'Estate events' },
        { path: '/hanalei-bridge', label: 'Far-North clause' },
      ],
    },
    ...AREA_CELLS.kauai,
  ],
  bigisland: [
    {
      slug: 'kohala-corridor',
      name: 'Kona–Kohala corridor',
      h1: 'Kona–Kohala west-side radius — seven communities, not the whole island.',
      title: 'Kona–Kohala west-side radius — seven communities | myCHEF',
      description:
        'Seven resort communities inside a 30-minute west-side radius. The island is 4,000 square miles; we will not pretend to cover it.',
      lede:
        'Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, the Mauna Kea resort belt, Kohala Coast houses. One radius. Hilo is a different day.',
      photo: 'cellKohalaCorridor',
      body: [
        'Live corridors: /kona, /waikoloa, /kohala. This page is the radius that holds them. /coverage is the zone map including Waimea and the east.',
        `Private chef Kona and private chef Big Island are both ${SEARCH_VOLUMES['private chef kona']} monthly. Those titles live on / and /private-chef. This URL is the map.`,
        'Hard sun, lava terraces, kitchens that range from a true pass to a galley. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Is Waimea in this radius?',
          a: 'Waimea is a surcharge zone inland — ranch country, not this lava coast. See /waimea.',
        },
        {
          q: 'How many “seven communities”?',
          a: 'The west-side resort and town belt we actually staff: Kona town, Keauhou, Waikoloa, Mauna Lani, Mauna Kea resort, Hualālai-area houses, North Kohala coast homes. Named so we cannot quietly add Hilo.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona' },
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/kohala', label: 'Kohala Coast' },
      ],
    },
    {
      slug: 'coffee-act-198',
      name: 'Coffee origin',
      h1: 'Coffee origin labeling — Act 198 from 2027.',
      title: 'Coffee origin labeling — Act 198 from 2027 | myCHEF Hawaiʻi Island',
      description:
        'Named Kaʻū and Kona coffee follow Act 198 from 2027. We do not invent farm names. Coffee on the crust is coffee until we can document origin.',
      lede:
        'The plate can still have coffee. The menu card cannot have a farm we do not have in writing. Origin law is the honesty register for this island.',
      photo: 'cellCoffeeAct',
      body: [
        'Act 198 tightens origin labeling for named Kona and Kaʻū coffee from 2027. We will not get ahead of it with decorative farm names.',
        'Coffee-rubbed catch is a west-side menu. Unlabeled cherries on the board are produce, not a claim. See /menus.',
        'This page exists so /kona can stay a place and not become a coffee-brand essay.',
      ],
      faqs: [
        {
          q: 'Will you print “Kona coffee” on the menu?',
          a: 'When the lot is documented. Otherwise it is coffee. We would rather under-claim than invent.',
        },
        {
          q: 'Do you tour farms?',
          a: 'We cook dinners. Farm visits are not a SKU we sell.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
        { path: '/kona', label: 'Kona corridor' },
        { path: '/about', label: 'The west-side crew' },
      ],
    },
    {
      slug: 'ironman-weeks',
      name: 'Event weeks',
      h1: 'Kailua-Kona event weeks — the calendar compresses.',
      title: 'Kailua-Kona event weeks — calendar honesty | myCHEF',
      description:
        'Event weeks in Kailua-Kona compress availability. Flag those dates early. We publish the pressure instead of overselling.',
      lede:
        'Town fills. Aliʻi Drive is not a quiet provisioning run. Villa breakfasts still happen — if we held the date. Inquiry stage.',
      photo: 'cellIronman',
      body: [
        'World Championship week and other pier-town events pack Kailua-Kona. We do not print event logos or claim an affiliation. We print the calendar fact: availability compresses.',
        'Flag those dates on the inquiry. A Waikoloa house is a different traffic story than a townhouse above Aliʻi — still west side, still /kohala-corridor.',
        'This is not a spectator-hospitality product. It is a warning so we do not oversell.',
      ],
      faqs: [
        {
          q: 'Are you an official caterer for the race?',
          a: 'No. We cook villa kitchens. No affiliation, no logos, no implied sponsorship.',
        },
        {
          q: 'Should I book a year out?',
          a: 'For those weeks, earlier is kinder. Ordinary west-side Tuesdays are a normal inquiry lead time.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona corridor' },
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/quote', label: 'Inquiry' },
      ],
    },
    {
      slug: 'east-side',
      name: 'East side',
      h1: 'Hilo and Volcano — quote-only, never a west-side round trip.',
      title: 'Hilo and Volcano — quote-only east side | myCHEF',
      description:
        '2.5–3 hours from Kona. Quote-only with dedicated staffing. We will not sell a same-day west-side round trip.',
      lede:
        'Rain, ʻōhiʻa, a different island climate. The east is not a Kohala add-on. If we staff it, it is its own team day.',
      photo: 'cellEastSide',
      body: [
        'The west-side radius is /kohala-corridor. This page exists so we cannot quietly claim Hilo on a Waikoloa brochure.',
        '2.5–3 hours. Dedicated staffing. Quoted with the menu. Inquiry stage — and more so than the west, because the bench has to exist on that side of the island.',
        'Volcano weather is its own plan. We will not promise outdoor fire we cannot keep.',
      ],
      faqs: [
        {
          q: 'Can you do breakfast in Hilo and dinner in Waikoloa?',
          a: 'Not as one unpaid day. That is two team days. We would rather decline than lie.',
        },
        {
          q: 'Is east side “coming soon”?',
          a: 'It is quote-only. When we have a crew, the quote says so. We will not publish “now serving Hilo” ahead of that.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/quote', label: 'Inquiry' },
      ],
    },
    ...AREA_CELLS.bigisland,
  ],
};

export function getUniqueCell(island: IslandId, slug: string): UniqueCell | undefined {
  return uniqueCells[island].find((cell) => cell.slug === slug);
}

export function uniqueCellSlugs(island: IslandId): string[] {
  return uniqueCells[island].map((cell) => cell.slug);
}
