/**
 * Unique titles and descriptions per route. Location pages compose their own
 * from `locations.ts`. Root never targets island-modified transactional terms.
 */

export interface PageMetaRecord {
  title: string;
  description: string;
}

const DEFAULT: PageMetaRecord = {
  title: 'Private chef Hawaii — from $125/pp | myCHEF',
  description:
    'Private chef Hawaii from $125/pp. In-villa dinners, catering, weddings and mobile bar on Oʻahu, Maui, Kauaʻi and Hawaiʻi Island. WhatsApp for a quote.',
};

export const PAGE_META: Record<string, PageMetaRecord> = {
  '/': DEFAULT,
  '/islands': {
    title: 'Private chef Oahu, Maui, Kauai & Big Island | myCHEF',
    description:
      'Four island sites. Private chef Maui from $150/pp (260/mo). Private chef Kauai from $150/pp (210/mo). Oahu from $125/pp. Big Island from $125/pp.',
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
    title: 'Private chef Hawaii — from $125/pp | myCHEF',
    description:
      'Private chef Hawaii on Oʻahu, Maui, Kauaʻi and the Big Island. Published starting prices. Villa kitchens. WhatsApp for a quote.',
  },
  '/catering': {
    title: 'Private catering Hawaii — 10–75 guests | myCHEF',
    description: 'Staffed catering for villa receptions, retreats and celebrations across four islands. Published starting prices.',
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
    title: 'Private chef prices in Hawaii — from $125/pp | myCHEF',
    description:
      'Date Night, Family Feast, Celebration, Stay Chef, Wedding week. Oʻahu $125–$190/pp, Maui & Kauaʻi $150–$250/pp. Quote in writing.',
  },
  '/quote': {
    title: 'Get a quote — myCHEF Hawaii',
    description: 'Five fields, two minutes. WhatsApp or this form. Typical reply in Hawaii business hours.',
  },
  '/weddings': {
    title: 'Wedding catering & wedding-week chefs — Hawaii | myCHEF',
    description:
      'Welcome dinner to recovery brunch on Maui, Oʻahu, Kauaʻi and Hawaiʻi Island. Published starting prices. WhatsApp the date.',
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
      'Hawaii is launching. Reviews publish only after verified events. International history is labeled. No fabricated local proof.',
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
    title: 'Private chef Oahu — from $125/pp | myCHEF',
    description:
      'Private chef Oahu and Honolulu from $125/pp. Villa dinners, personal chef weeks and catering in Waikīkī, Kailua, Ko Olina and the North Shore.',
  },
  '/maui': {
    title: 'Private chef Maui — from $150/pp | myCHEF',
    description:
      'Private chef Maui from $150/pp. In-villa dinners, family weeks and wedding catering in Wailea, Kāʻanapali, Kapalua and Kīhei.',
  },
  '/kauai': {
    title: 'Private chef Kauai — from $150/pp | myCHEF',
    description:
      'Private chef Kauai from $150/pp. Princeville, Hanalei and Poʻipū villa dinners. Book now — WhatsApp for a quote.',
  },
  '/bigisland': {
    title: 'Private chef Big Island & Kona — from $125/pp | myCHEF',
    description:
      'Private chef Big Island and Kona from $125/pp. Kohala Coast, Waikoloa, Waimea and Kailua-Kona villa dinners.',
  },
  '/oahu/private-chef': {
    title: 'Oʻahu private chef — In-villa dinners | myCHEF',
    description: 'Coursed in-villa dinners across Oʻahu’s five corridors. Menu design, shopping, cooking, service and cleanup.',
  },
  '/oahu/vacation-chef': {
    title: 'Oʻahu vacation chef and weekly household service | myCHEF',
    description: 'Multi-day villa chef packages and the kamaʻāina weekly line for resident households.',
  },
  '/oahu/catering': {
    title: 'Oʻahu catering and events — Honolulu to Ko Olina | myCHEF',
    description: 'Receptions, retreats and production catering in Waikīkī, Kahala, Ko Olina and Kailua, 10 to 75 guests.',
  },
  '/oahu/wedding-catering': {
    title: 'Oʻahu wedding catering — Gold Coast weekend chefs | myCHEF',
    description:
      'Wedding weekends in Kahala, Ko Olina and windward estates. Published starting prices. One culinary team.',
  },
  '/oahu/weddings': {
    title: 'Oʻahu wedding catering — Gold Coast weekend chefs | myCHEF',
    description: 'Wedding weekends in Kahala, Ko Olina and Kailua estates. Starting prices published.',
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
    title: 'Oʻahu private chef prices — day rate, dinner bands, bar | myCHEF',
    description: 'Published starting prices for Oʻahu: villa chef day rate, signature dinners, mobile bar and weekly household service.',
  },
  '/maui/private-chef': {
    title: 'Maui private chef — Signature in-villa dinners | myCHEF',
    description: 'The private chef’s table in your Wailea, Kapalua or Kāʻanapali villa. Signature dinners, chef’s table and dinners-for-two.',
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
    title: 'Maui wedding catering — wedding-week chefs | myCHEF',
    description: 'One Maui team for the wedding week. Starting prices published. Quote confirmed in writing.',
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
    title: 'Maui private chef prices — day rate, dinners, wedding, bar | myCHEF',
    description: 'Published starting prices for Maui villa chefs, signature dinners, wedding weeks and mobile bar.',
  },
  '/maui/catering': {
    title: 'Maui catering — villa receptions & retreats | myCHEF',
    description: 'Staffed catering on Maui for 10–75 guests. Grazing, coursed, wedding week. From $150/pp.',
  },
  '/kauai/private-chef': {
    title: 'Private chef Kauai — from $150/pp | myCHEF',
    description: 'In-villa dinners on both Kauaʻi shores from $150/pp. Princeville and Poʻipū. Book now.',
  },
  '/kauai/vacation-chef': {
    title: 'Vacation chef Kauai — Stay Chef from $1,100/day | myCHEF',
    description: 'A chef for your Kauaʻi week. Arrival-night dinner, provisioning, retreat full-board. Book now.',
  },
  '/kauai/events': {
    title: 'Kauaʻi catering and estate weddings — Princeville & Poʻipū | myCHEF',
    description: 'Estate formats to about 75 guests on both shores. Published starting prices. WhatsApp to book.',
  },
  '/kauai/catering': {
    title: 'Kauaʻi catering and estate events | myCHEF',
    description: 'Staffed catering on Kauaʻi. Grazing, coursed, retreats. From $150/pp. Book now.',
  },
  '/kauai/wedding-catering': {
    title: 'Kauaʻi wedding catering — Princeville, Hanalei, Poʻipū | myCHEF',
    description:
      'Estate weddings on both Kauaʻi shores. Published starting prices. WhatsApp the week.',
  },
  '/kauai/weddings': {
    title: 'Kauaʻi estate weddings — from $150/pp | myCHEF',
    description: 'Princeville, Hanalei and Poʻipū wedding weeks. Book now. Starting prices published.',
  },
  '/kauai/bar': {
    title: 'Kauaʻi mobile bar — Princeville & Poʻipū estates | myCHEF',
    description: 'Terrace cocktails on both Kauaʻi shores. Bartender add-on or 4-hour package. Book now.',
  },
  '/kauai/mobile-bar': {
    title: 'Kauaʻi mobile bar — estate cocktails | myCHEF',
    description: 'Mobile bar for Princeville, Hanalei and Poʻipū. Starting prices published.',
  },
  '/kauai/pricing': {
    title: 'Kauaʻi private chef prices — from $150/pp | myCHEF',
    description: 'Day rate, dinner bands, named packages, bar and wedding starting prices for Kauaʻi. Book now.',
  },
  '/bigisland/private-chef': {
    title: 'Private chef Big Island & Kona — from $125/pp | myCHEF',
    description: 'Kona–Kohala villa dinners from $125/pp. WhatsApp for a written quote.',
  },
  '/bigisland/vacation-chef': {
    title: 'Vacation chef Big Island — Stay Chef from $950/day | myCHEF',
    description: 'Multi-day chef residencies for Kohala and Waimea weeks. Groceries at cost. Book now.',
  },
  '/bigisland/catering': {
    title: 'Hawaiʻi Island catering — Kohala Coast & Kona | myCHEF',
    description: 'Kohala estate weddings and event catering. Published starting prices. WhatsApp to book.',
  },
  '/bigisland/wedding-catering': {
    title: 'Hawaiʻi Island wedding catering — Kohala Coast estates | myCHEF',
    description:
      'Kohala and Kona wedding weeks. Published starting prices. WhatsApp the date.',
  },
  '/bigisland/weddings': {
    title: 'Hawaiʻi Island estate weddings — Kohala | myCHEF',
    description: 'Kohala Coast wedding weeks. Starting prices published. Book now.',
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
    title: 'Hawaiʻi Island private chef prices — Kohala & Kona | myCHEF',
    description: 'Published starting prices for Big Island villa chefs, dinners, bar and estate weddings. West side first.',
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
