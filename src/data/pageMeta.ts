/**
 * Unique titles and descriptions per master-map URL.
 * One primary keyword per URL. Neighborhood doorway titles stay unused —
 * those slugs 301 to the island home.
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
    title: 'Mobile bar & villa cocktails — Hawaii | myCHEF',
    description:
      'Cocktail packages for Hawaiian villas. Starting prices published per island; quote confirmed in writing.',
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
  '/thank-you': {
    title: 'Enquiry received — myCHEF Hawaii',
    description: 'Your enquiry is in. A coordinator replies in Hawaii Standard Time, typically within one business day.',
  },
  '/corporate': {
    title: 'Private catering for retreats, productions and gatherings | myCHEF Hawaii',
    description:
      'Staffed private chef catering for 10–75 guests: villa retreats, production crews and private gatherings. Not a convention-centre play while HCC citywides are closed.',
  },
  '/gatherings': {
    title: 'Private catering for retreats, productions and gatherings | myCHEF Hawaii',
    description:
      'Staffed private chef catering for 10–75 guests: villa retreats, production crews and private gatherings.',
  },
  '/oahu': {
    title: 'Private Chef Oahu | Villa and Household Chefs | myCHEF',
    description:
      'Private chef Oahu from $125 a guest. Honolulu and personal chef on this same page — no /honolulu. Villa dinners and household chefs. Request a quote.',
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
      'Private chef Big Island from $125 a guest. Kona–Kohala first — no /kona. Inquiry stage. WhatsApp the dates.',
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
    title: 'Oʻahu mobile bar — villa cocktails from Waikīkī to Ko Olina | myCHEF',
    description:
      'A bartender on your lānai. Published starting prices. Stack with a private chef in Waikīkī, Kahala, Ko Olina or Kailua.',
  },
  '/oahu/mobile-bar': {
    title: 'Oʻahu mobile bar — villa cocktails | myCHEF',
    description: 'Cocktail hour on Oʻahu villas. Starting prices published; quote in writing.',
  },
  '/oahu/pricing': {
    title: 'What a night costs on Oahu | myCHEF',
    description: 'Published starting prices for Oʻahu: villa chef day rate, signature dinners, mobile bar and weekly household service.',
  },
  '/oahu/quote': {
    title: 'Get a quote — private chef & catering Oahu | myCHEF',
    description: 'Five fields, two minutes. Oahu villa dinner or catering. WhatsApp or this form. Typical reply in Hawaii business hours.',
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
    title: 'Maui mobile bar — villa cocktails in Wailea & Kapalua | myCHEF',
    description:
      'Terrace cocktail packages for Maui villas and wedding weeks. Published starting prices. Stack with the chef.',
  },
  '/maui/mobile-bar': {
    title: 'Maui mobile bar — villa cocktails | myCHEF',
    description: 'Mobile bar for Wailea, Kapalua, Kāʻanapali and Makena. Starting prices published.',
  },
  '/maui/pricing': {
    title: 'What a night costs on Maui | myCHEF',
    description:
      'Maui starting prices: $150–$250 a guest CORE, groceries at cost on Stay Chef, 20% service, GET up to 4.712%. Published, line by line.',
  },
  '/maui/quote': {
    title: 'Get a quote — private chef & catering Maui | myCHEF',
    description: 'Five fields, two minutes. Maui villa dinner or catering. WhatsApp or this form. Typical reply in Hawaii business hours.',
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
    title: 'Kauai estate events — buffet or plated | myCHEF',
    description:
      'Staffed villa events on Kauaʻi. Buffet or plated, published menu. Princeville, Poʻipū, Hanalei. The catering door is /catering.',
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
    title: 'Kauaʻi mobile bar — Princeville & Poʻipū estates | myCHEF',
    description: 'Terrace cocktails on both Kauaʻi shores. Bartender add-on or 4-hour package. Inquiry stage.',
  },
  '/kauai/mobile-bar': {
    title: 'Kauaʻi mobile bar — estate cocktails | myCHEF',
    description: 'Mobile bar for Princeville, Hanalei and Poʻipū. Starting prices published.',
  },
  '/kauai/pricing': {
    title: 'What a night costs on Kauai | myCHEF',
    description:
      'Kauai starting prices $150–$250 a guest. Wedding from $175 a guest plus staffing. Groceries, 20% service, GET — published.',
  },
  '/kauai/quote': {
    title: 'Get a quote — private chef & catering Kauai | myCHEF',
    description: 'Five fields, two minutes. Kauai villa dinner or catering. Join the inquiry list.',
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
    title: 'Hawaiʻi Island mobile bar — Kohala Coast cocktails | myCHEF',
    description: 'Sunset pours on Kona–Kohala terraces. Bartender add-on or 4-hour package.',
  },
  '/bigisland/mobile-bar': {
    title: 'Hawaiʻi Island mobile bar — Kohala | myCHEF',
    description: 'Mobile bar for the Kohala Coast and Kona. Inquiry-stage. Starting prices published.',
  },
  '/bigisland/pricing': {
    title: 'What a night costs on the Big Island | myCHEF',
    description: 'Published starting prices for Big Island villa chefs, dinners, bar and estate weddings. West side first.',
  },
  '/bigisland/quote': {
    title: 'Get a quote — private chef & catering Big Island | myCHEF',
    description: 'Five fields, two minutes. Big Island and Kona villa dinner or catering. WhatsApp or this form.',
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
