/**
 * Unique titles and descriptions per master-map URL.
 * One primary keyword per URL. Neighborhood doorway titles live on
 * moneyNeighborhoods (data/offers.ts) and win in resolveDocumentSeo.
 */

export interface PageMetaRecord {
  title: string;
  description: string;
}

const DEFAULT: PageMetaRecord = {
  title: 'Private Chef Hawaii | Four Island Villa Chefs | myCHEF',
  description:
    'Private chef Hawaii for villa dinner and in-home service. Oahu from $125 a guest. Maui, Kauaʻi, and the Big Island. Request a quote.',
};

export const PAGE_META: Record<string, PageMetaRecord> = {
  '/': DEFAULT,
  '/islands': {
    title: 'Private chef Oahu, Maui, Kauai & Big Island | myCHEF',
    description:
      'Four island sites. Private chef Maui from $150 a guest. Private chef Kauai from $150 a guest. Oahu from $125 a guest. Big Island from $125 a guest.',
  },
  '/areas': {
    title: 'Private chef Oahu, Maui, Kauai & Big Island | myCHEF',
    description: 'Choose your island. Neighborhood pages live on each island host.',
  },
  '/services': {
    title: 'Private chef, catering, weddings & mobile bar | myCHEF Hawaii',
    description:
      'Private chef dinners from $125/pp, Stay Chef day rates, wedding catering and mobile bar across Hawaii. WhatsApp for a quote.',
  },
  '/private-chef': {
    title: 'Personal chef for Hawaii villas & vacation rentals | myCHEF',
    description:
      'Personal chef and vacation-rental chef in Hawaii. Villa dinner, in-home service, no restaurant. Enquire on WhatsApp.',
  },
  '/catering': {
    title: 'Hawaii Catering | Staffed Villa Events 10–75 | myCHEF',
    description:
      'Hawaii catering for villa and estate events of 10–75 guests. Buffet or plated. Oahu, Maui, Kauaʻi, Big Island. Not ballrooms. Request a quote.',
  },
  '/vacation-chef': {
    title: 'Vacation chef Hawaii — Stay Chef from $850/day | myCHEF',
    description: 'A chef for the villa week. Day rates from $850 Oʻahu / $1,050 Maui. Groceries at cost.',
  },
  '/how-it-works': {
    title: 'How a private chef booking works in Hawaii | myCHEF',
    description:
      'WhatsApp or quote, menu in 48 hours, written price, we cook and leave it clean. Typical reply in Hawaii business hours.',
  },
  '/pricing': {
    title: 'What a night costs | myCHEF Hawaii',
    description:
      'Published starting prices, line by line: per guest, what’s included, groceries at cost, 20% service, GET. Quote in writing.',
  },
  '/quote': {
    title: 'Get a quote — myCHEF Hawaii',
    description: 'Five fields, two minutes. WhatsApp or this form. Typical reply in Hawaii business hours.',
  },
  '/about': {
    title: 'About myCHEF Hawaii | Island Chef Teams',
    description:
      'myCHEF Hawaii is a four-island villa chef team. We staff a brigade to the size of the house — chef, sous, service, bar, shopper. Request a quote.',
  },
  '/weddings': {
    title: 'Wedding Catering Hawaii | Wedding-Week Chefs | myCHEF',
    description:
      'Wedding catering Hawaii: one team for the whole week. Welcome dinner, ceremony, and the days after. Request a quote.',
  },
  '/bar': {
    title: 'Mobile bar & villa cocktails — Hawaii | myCHEF',
    description:
      'Bartender add-on or a 4-hour mobile-bar package. Published starting prices on every island. Stack with the chef.',
  },
  '/mobile-bar': {
    title: '4-hour mobile bar package — Hawaii | myCHEF',
    description:
      'A four-hour mobile bar cart for Hawaiian villas. The cocktail-hour add-on lives on /bar. Starting prices published per island.',
  },
  '/trust': {
    title: 'Trust standards — Honesty register | myCHEF Hawaii',
    description:
      'Hawaii is launching. Reviews publish only after verified events. No fabricated local proof.',
  },
  '/legal': {
    title: 'Legal notes for private chef & catering bookings | myCHEF Hawaii',
    description:
      'Published starting prices, service 20% and GET up to 4.712%, 50% deposit. Written quote is the confirmed total.',
  },
  '/journal': {
    title: 'The journal, by island | myCHEF Hawaii',
    description:
      'Each island department publishes its own journal. The hub does not rank for private chef Maui — that page lives on the Maui host.',
  },
  '/blog': {
    title: 'Guides and notes, by island | myCHEF Hawaii',
    description:
      'Each island department publishes its own blog. Statewide Hawaii catering stays on the hub catering page, not this directory.',
  },
  '/thank-you': {
    title: 'Enquiry received — myCHEF Hawaii',
    description: 'Your enquiry is in. A coordinator replies in Hawaii Standard Time, typically within one business day.',
  },
  '/corporate': {
    title: 'Corporate catering for Hawaii villa offsites | myCHEF Hawaii',
    description:
      'Staffed chef catering for villa offsites and production crews of 10–75. Not a convention-centre play while HCC citywides are closed through 2027.',
  },
  '/gatherings': {
    title: 'Private gatherings and family villa dinners | myCHEF Hawaii',
    description:
      'Birthdays, reunions, and rehearsal dinners in Hawaiian villas. Staffed 10–75. Not a wedding-week stack — that lives on /weddings.',
  },
  '/oahu': {
    title: 'Private Chef Oahu | Villa and Household Chefs | myCHEF',
    description:
      'Private chef Oahu from $125 a guest. Named corridors — Honolulu, Waikīkī, Kahala, Kailua, Ko Olina, North Shore. Villa dinners and household chefs. Request a quote.',
  },
  '/maui': {
    title: 'Private Chef Maui | In-Villa Dinners and Weeks | myCHEF',
    description:
      'Private chef Maui from $150 a guest. In-villa dinners and weeks in Wailea, Kīhei and West Maui. Maui catering is the larger door on /catering. Request a quote.',
  },
  '/kauai': {
    title: 'Private Chef Kauai | Both Shores — Inquiry | myCHEF',
    description:
      'Private chef Kauai from $150 a guest. Princeville, Poʻipū, Hanalei named in coverage. Both shores, inquiry stage.',
  },
  '/bigisland': {
    title: 'Private Chef Big Island | Kona–Kohala Inquiry | myCHEF',
    description:
      'Private chef Big Island from $125 a guest. Named corridors — Kona, Waikoloa, Waimea, Kohala Coast. Inquiry stage. WhatsApp the dates.',
  },
  '/oahu/private-chef': {
    title: 'Personal chef Oahu villas & vacation rentals | myCHEF',
    description:
      'Personal chef for Oahu villas and vacation rentals. In-home dinner, weekly household line. WhatsApp for a quote.',
  },
  '/oahu/vacation-chef': {
    title: 'Oʻahu vacation chef and weekly household service | myCHEF',
    description: 'Multi-day villa chef packages and the kamaʻāina weekly line for resident households.',
  },
  '/oahu/catering': {
    title: 'Oahu Catering | Honolulu to Ko Olina Events | myCHEF',
    description:
      'Oahu catering from $125 a guest. Staffed events from Honolulu to Ko Olina. Buffet or plated. Request a quote.',
  },
  '/oahu/weddings': {
    title: 'Wedding Catering Oahu | Gold Coast Weekends | myCHEF',
    description:
      'Wedding catering Oahu — one kitchen for the weekend. Kahala, Ko Olina and Kailua estates. Starting prices published.',
  },
  '/oahu/wedding-catering': {
    title: 'Wedding catering Oahu — Gold Coast weekend chefs | myCHEF',
    description:
      'Wedding catering Oahu from $125/pp plus staffing. Kahala, Ko Olina and windward estates. One culinary team.',
  },
  '/oahu/bar': {
    title: 'Oʻahu villa cocktails — bartender on the lānai | myCHEF',
    description:
      'A bartender on your lānai. Published starting prices. Stack with a private chef in Waikīkī, Kahala, Ko Olina or Kailua.',
  },
  '/oahu/mobile-bar': {
    title: 'Oʻahu 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart — ice, citrus, glassware, bartender — from Waikīkī to Ko Olina. Quote in writing.',
  },
  '/oahu/events': {
    title: 'Oahu villa events — birthdays, retreats, welcome nights | myCHEF',
    description:
      'Staffed villa events on Oahu: birthdays, retreats and welcome nights from Honolulu to Ko Olina. The catering door is /catering. Request a quote.',
  },
  '/oahu/about': {
    title: 'About myCHEF Oahu — Honolulu to Ko Olina crew | myCHEF',
    description:
      'myCHEF Oahu staffs a brigade to the house: chef, sous, service, bar, shopper. Honolulu, Waikīkī residences, Kahala, Kailua, Ko Olina. Request a quote.',
  },
  '/oahu/pricing': {
    title: 'What a night costs on Oahu | myCHEF',
    description: 'Published starting prices for Oʻahu: villa chef day rate, signature dinners, mobile bar and weekly household service.',
  },
  '/oahu/quote': {
    title: 'Oahu quote form — corridor, kitchen, written total | myCHEF',
    description:
      'Five fields for an Oahu villa dinner or staffed room. Name the corridor and the kitchen. A written quote follows.',
  },
  '/oahu/legal': {
    title: 'Oahu booking notes — quotes, GET, Gold Coast kitchens | myCHEF',
    description:
      'Oahu booking notes: written quote, 50% deposit, 20% service, GET up to 4.712%. Gold Coast kitchens are the product. Hotel suites without a cooktop are declined.',
  },
  '/oahu/thank-you': {
    title: 'Oahu enquiry received | myCHEF',
    description: 'The Oahu coordinator has the corridor, the kitchen note, and the dates. Reply in Hawaii business hours.',
  },
  '/oahu/journal': {
    title: 'Oahu private chef journal | myCHEF',
    description:
      'Oahu host journal: Honolulu, Waikīkī, Kailua, North Shore, Kahala, Ko Olina. Not the hub digest. Statewide Hawaii catering stays off this title.',
  },
  '/oahu/blog': {
    title: 'Oahu private chef blog | myCHEF',
    description:
      'Shorter Oahu host posts for Honolulu kitchens and booking questions. Not the journal. Not a statewide feed.',
  },
  '/oahu/locations': {
    title: 'Oahu corridors we cook — Honolulu to Ko Olina | myCHEF',
    description:
      'Live Oahu corridor URLs: Honolulu, Waikīkī, Kailua, North Shore, Kahala, Ko Olina. /coverage is the zone map. This page is the directory.',
  },
  '/oahu/sitemap': {
    title: 'Oahu HTML sitemap — live URLs on this host | myCHEF',
    description: 'HTML sitemap for the Oahu host: corridors, services, occasions, and supporting documents. Not the hub sitemap.',
  },
  '/maui/private-chef': {
    title: 'Personal chef Maui villas & vacation rentals | myCHEF',
    description:
      'Personal chef for Maui villas and vacation rentals. In-home dinner in Wailea, West Maui and Kīhei. WhatsApp for a quote.',
  },
  '/maui/vacation-chef': {
    title: 'Maui vacation chef — Multi-day villa service | myCHEF',
    description: 'A chef for the whole Maui stay — provisioning, full-board days and retreat service.',
  },
  '/maui/wedding-catering': {
    title: 'Maui wedding catering — Wailea, Kapalua, Makena | myCHEF',
    description:
      'Welcome dinner, rehearsal, reception and recovery brunch in Wailea, Kapalua, Kāʻanapali and Makena. Published starting prices.',
  },
  '/maui/weddings': {
    title: 'Wedding Catering Maui | Wedding-Week Chefs | myCHEF',
    description:
      'Wedding catering Maui — one team for the week. Welcome dinner through recovery brunch. Starting prices published. Request a quote.',
  },
  '/maui/bar': {
    title: 'Maui villa cocktails — Wailea and Kapalua terraces | myCHEF',
    description:
      'Terrace cocktail add-on for Maui villas and wedding weeks. Published starting prices. Stack with the chef.',
  },
  '/maui/mobile-bar': {
    title: 'Maui 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for Wailea, Kapalua, Kāʻanapali and Makena. Starting prices published.',
  },
  '/maui/events': {
    title: 'Maui villa events — Wailea lawns and West Maui houses | myCHEF',
    description:
      'Staffed villa events on Maui: birthdays, retreats and welcome nights in Wailea, Kīhei and West Maui. Catering is the larger door on /catering.',
  },
  '/maui/about': {
    title: 'About myCHEF Maui — Wailea to West Maui crew | myCHEF',
    description:
      'myCHEF Maui staffs villa dinners and lawn receptions. Wailea, Kīhei, Kāʻanapali, Kapalua, Makena. Catering is the larger door. Request a quote.',
  },
  '/maui/pricing': {
    title: 'What a night costs on Maui | myCHEF',
    description:
      'Maui starting prices: $150–$250 a guest CORE, groceries at cost on Stay Chef, 20% service, GET up to 4.712%. Published, line by line.',
  },
  '/maui/quote': {
    title: 'Maui quote form — shore, kitchen, written total | myCHEF',
    description:
      'Five fields for a Maui villa dinner or staffed room. Name the shore and the kitchen. Saturday West Maui traffic is planned in.',
  },
  '/maui/legal': {
    title: 'Maui booking notes — quotes, GET, West Maui travel | myCHEF',
    description:
      'Maui booking notes: written quote, 50% deposit, 20% service, GET up to 4.712%. Saturday West Maui traffic is planned into arrival. Lahaina is a town, not a mystery fee.',
  },
  '/maui/thank-you': {
    title: 'Maui enquiry received | myCHEF',
    description: 'The Maui coordinator has the shore, the kitchen note, and the dates. Saturday West Maui traffic is planned into the reply.',
  },
  '/maui/journal': {
    title: 'Maui private chef journal | myCHEF',
    description:
      'Maui host journal: South Maui, West Maui, wedding-week houses. Not Oahu, Kauaʻi, or Hawaiʻi Island. Not the hub directory.',
  },
  '/maui/blog': {
    title: 'Maui private chef blog | myCHEF',
    description:
      'Shorter Maui host posts beside Wailea and Kāʻanapali nights. Not the journal. Not a statewide feed.',
  },
  '/maui/locations': {
    title: 'Maui corridors we cook — Wailea to Kapalua | myCHEF',
    description:
      'Live Maui corridor URLs: Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, Makena. /coverage is the zone map. This page is the directory.',
  },
  '/maui/sitemap': {
    title: 'Maui HTML sitemap — live URLs on this host | myCHEF',
    description: 'HTML sitemap for the Maui host: corridors, services, occasions, and supporting documents. Not the hub sitemap.',
  },
  '/maui/catering': {
    title: 'Maui Catering | Villa Receptions and Events | myCHEF',
    description:
      'Maui catering from $150 a guest. Staffed villa events, not drop-off. Buffet or plated. Request a quote.',
  },
  '/kauai/private-chef': {
    title: 'Personal chef Kauai villas & vacation rentals | myCHEF',
    description:
      'Personal chef for Kauai villas and vacation rentals. Princeville, Poʻipū, Hanalei. Inquiry stage.',
  },
  '/kauai/vacation-chef': {
    title: 'Vacation chef Kauai — Stay Chef from $1,100/day | myCHEF',
    description: 'A chef for your Kauaʻi week. Arrival-night dinner, provisioning, retreat full-board. Inquiry stage.',
  },
  '/kauai/events': {
    title: 'Kauai estate events — both shores, inquiry | myCHEF',
    description:
      'Staffed estate events on Kauai: Princeville, Hanalei and Poʻipū. Inquiry stage. The catering door is /catering.',
  },
  '/kauai/about': {
    title: 'About myCHEF Kauai — both-shore inquiry crew | myCHEF',
    description:
      'myCHEF Kauai is inquiry-stage on both shores: Princeville, Hanalei, Poʻipū. We staff the estate to the guest list when a crew exists.',
  },
  '/kauai/catering': {
    title: 'Kauai Catering | Estate Events — Inquiry | myCHEF',
    description:
      'Kauai catering from $150 a guest. Estate events on both shores. Inquiry stage. Buffet or plated.',
  },
  '/kauai/wedding-catering': {
    title: 'Kauai wedding catering — Princeville, Hanalei, Poʻipū | myCHEF',
    description:
      'Kauai wedding catering from $175/pp plus staffing. Estate formats on both shores. Published starting prices. WhatsApp the week.',
  },
  '/kauai/weddings': {
    title: 'Wedding catering Kauai | myCHEF',
    description: 'Wedding catering Kauai from $175/pp plus staffing. Princeville, Hanalei and Poʻipū. Inquiry stage.',
  },
  '/kauai/bar': {
    title: 'Kauaʻi villa cocktails — Princeville and Poʻipū | myCHEF',
    description: 'Terrace cocktail add-on on both Kauaʻi shores. Inquiry stage. The 4-hour package lives on /mobile-bar.',
  },
  '/kauai/mobile-bar': {
    title: 'Kauaʻi 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for Princeville, Hanalei and Poʻipū. Starting prices published. Inquiry stage.',
  },
  '/kauai/pricing': {
    title: 'What a night costs on Kauai | myCHEF',
    description:
      'Kauai starting prices $150–$250 a guest. Wedding from $175 a guest plus staffing. Groceries, 20% service, GET — published.',
  },
  '/kauai/quote': {
    title: 'Kauai inquiry form — both shores, written reply | myCHEF',
    description:
      'Inquiry form for Kauai estate dinners. Name the shore. Hanalei-bridge weather is a clause. We will not fake a live Book-now button.',
  },
  '/kauai/legal': {
    title: 'Kauai booking notes — quotes, GET, Hanalei-bridge weather | myCHEF',
    description:
      'Kauai booking notes at inquiry: written quote when we can staff, 50% deposit, GET up to 4.712%. Hanalei-bridge closures reschedule rather than forfeit. We will not fake a live roster.',
  },
  '/kauai/thank-you': {
    title: 'Kauai inquiry received | myCHEF',
    description: 'The Kauai inquiry list has the shore and the dates. We write back with what we can staff. Hanalei-bridge weather is a clause.',
  },
  '/kauai/journal': {
    title: 'Kauai private chef journal | myCHEF',
    description:
      'Kauai host journal at inquiry: Princeville, Hanalei, Kapaʻa, Poʻipū. Not a staffed calendar. Not the hub directory.',
  },
  '/kauai/blog': {
    title: 'Kauai private chef blog | myCHEF',
    description:
      'Shorter Kauai host posts at inquiry. Princeville and Poʻipū named. Not a live roster. Not the journal.',
  },
  '/kauai/locations': {
    title: 'Kauai corridors we cook — both shores | myCHEF',
    description:
      'Live Kauai corridor URLs: Princeville, Poʻipū, Hanalei, Kapaʻa. Inquiry. /coverage is the zone map. This page is the directory.',
  },
  '/kauai/sitemap': {
    title: 'Kauai HTML sitemap — live URLs on this host | myCHEF',
    description:
      'HTML sitemap for the Kauai host at inquiry: both shores, supporting documents, and the cells we will quote.',
  },
  '/bigisland/private-chef': {
    title: 'Personal chef Big Island villas & vacation rentals | myCHEF',
    description: 'Personal chef for Big Island and Kona villas. In-home dinner, Stay Chef weeks. WhatsApp for a quote.',
  },
  '/bigisland/vacation-chef': {
    title: 'Vacation chef Big Island — Stay Chef from $950/day | myCHEF',
    description: 'Multi-day chef residencies for Kohala and Waimea weeks. Groceries at cost. Inquiry stage.',
  },
  '/bigisland/catering': {
    title: 'Hawaiʻi Island catering — Kohala Coast & Kona | myCHEF',
    description: 'Kohala estate weddings and event catering. Published starting prices. Inquiry stage.',
  },
  '/bigisland/wedding-catering': {
    title: 'Hawaiʻi Island wedding catering — Kohala Coast estates | myCHEF',
    description:
      'Kohala and Kona wedding weeks. Published starting prices. WhatsApp the date.',
  },
  '/bigisland/weddings': {
    title: 'Wedding catering Big Island | myCHEF',
    description: 'Wedding catering Big Island — Kohala and Kona estate weeks. Starting prices published. Inquiry stage.',
  },
  '/bigisland/bar': {
    title: 'Hawaiʻi Island villa cocktails — Kohala terraces | myCHEF',
    description: 'Sunset pours on Kona–Kohala terraces. Bartender add-on. The 4-hour package lives on /mobile-bar.',
  },
  '/bigisland/mobile-bar': {
    title: 'Hawaiʻi Island 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for the Kohala Coast and Kona. Inquiry-stage. Starting prices published.',
  },
  '/bigisland/events': {
    title: 'Big Island villa events — Kohala and Kona | myCHEF',
    description:
      'Staffed villa events on Hawaiʻi Island: Kohala Coast and Kona. Inquiry stage. East side is quote-only. Catering lives on /catering.',
  },
  '/bigisland/about': {
    title: 'About myCHEF Big Island — Kona–Kohala crew | myCHEF',
    description:
      'myCHEF Hawaiʻi Island is west-side first: Kona, Waikoloa, the Kohala Coast. Inquiry stage. Hilo is a different day.',
  },
  '/bigisland/pricing': {
    title: 'What a night costs on the Big Island | myCHEF',
    description: 'Published starting prices for Big Island villa chefs, dinners, bar and estate weddings. West side first.',
  },
  '/bigisland/quote': {
    title: 'Hawaiʻi Island inquiry form — west side, written reply | myCHEF',
    description:
      'Inquiry form for west-side Hawaiʻi Island dinners. East side is a different day. We will not fake a live Book-now button.',
  },
  '/bigisland/legal': {
    title: 'Hawaiʻi Island booking notes — quotes, GET, east-side days | myCHEF',
    description:
      'Hawaiʻi Island booking notes at inquiry: written quote when we can staff, 50% deposit, GET up to 4.712%. West side first. East side is a dedicated day, never a west-side round trip.',
  },
  '/bigisland/thank-you': {
    title: 'Hawaiʻi Island inquiry received | myCHEF',
    description: 'The west-side inquiry list has the address and the dates. East side is a different day. We write back with what we can staff.',
  },
  '/bigisland/journal': {
    title: 'Hawaiʻi Island private chef journal | myCHEF',
    description:
      'Hawaiʻi Island host journal: Kona, Waikoloa, Waimea, Kohala. West side first. Hilo is a different day. Not the hub directory.',
  },
  '/bigisland/blog': {
    title: 'Hawaiʻi Island private chef blog | myCHEF',
    description:
      'Shorter Hawaiʻi Island host posts. West side first. East side is a different day. Not the journal.',
  },
  '/bigisland/locations': {
    title: 'Hawaiʻi Island corridors we cook — Kona to Kohala | myCHEF',
    description:
      'Live Hawaiʻi Island corridor URLs: Kona, Waimea, Waikoloa, Kohala. West side first. /east-side is a different day. This page is the directory.',
  },
  '/bigisland/sitemap': {
    title: 'Hawaiʻi Island HTML sitemap — live URLs on this host | myCHEF',
    description:
      'HTML sitemap for the Hawaiʻi Island host: west-side corridors, supporting documents, and east-side as its own cell.',
  },
};

export function metaForPath(
  pathname: string,
  islandId?: string | null,
  hostMode?: boolean,
): PageMetaRecord {
  return lookupPageMeta(pathname, islandId, hostMode) ?? DEFAULT;
}

/** Explicit title/description if we wrote one — does not fall back to DEFAULT. */
export function lookupPageMeta(
  pathname: string,
  islandId?: string | null,
  hostMode?: boolean,
): PageMetaRecord | undefined {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (hostMode && islandId) {
    const prefixed = clean === '/' ? `/${islandId}` : `/${islandId}${clean}`;
    return PAGE_META[prefixed] ?? PAGE_META[clean];
  }
  return PAGE_META[clean];
}
