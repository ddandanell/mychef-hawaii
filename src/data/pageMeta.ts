/**
 * Unique titles and descriptions per route. Location pages compose their own
 * from `locations.ts`. Root never targets island-modified transactional terms.
 */

export interface PageMetaRecord {
  title: string;
  description: string;
}

const DEFAULT: PageMetaRecord = {
  title: 'myCHEF Hawaii — Private Chefs, Catering & Events',
  description:
    'Private chefs, private dining, catering and events across Oʻahu, Maui, Kauaʻi and Hawaiʻi Island. Two islands booking now; two on the inquiry list.',
};

export const PAGE_META: Record<string, PageMetaRecord> = {
  '/': DEFAULT,
  '/islands': {
    title: 'Choose your island — myCHEF Hawaii',
    description:
      'Four island operations under one Hawaii standard. Oʻahu and Maui are booking now; Kauaʻi and Hawaiʻi Island are inquiry-stage.',
  },
  '/services': {
    title: 'Services — Private chefs, dining, catering, vacation chef | myCHEF Hawaii',
    description:
      'Four statewide service lines: private chef, private dining, catering and events, and vacation chef. Island pages hold pricing and booking.',
  },
  '/how-it-works': {
    title: 'How it works — From enquiry to empty dishwasher | myCHEF Hawaii',
    description:
      'Menu design, shopping, cooking, service and cleanup. One process on every island; published travel zones instead of surprise fees.',
  },
  '/pricing': {
    title: 'Pricing orientation — Indicative private chef bands | myCHEF Hawaii',
    description:
      'Planning-orientation bands for Oʻahu, Maui, Kauaʻi and Hawaiʻi Island. Every figure is labeled BUSINESS DECISION REQUIRED until the rate card is approved.',
  },
  '/trust': {
    title: 'Trust standards — Honesty register | myCHEF Hawaii',
    description:
      'Hawaii is launching. Reviews publish only after verified events. International history is labeled. No fabricated local proof.',
  },
  '/legal': {
    title: 'Legal & planning notes | myCHEF Hawaii',
    description:
      'Planning-orientation terms, tax and service-charge notes pending professional review, and the Hawaii launch posture.',
  },
  '/quote': {
    title: 'Request a quote — myCHEF Hawaii',
    description:
      'Five fields, two minutes, no account. Live islands receive a quote request; Kauaʻi and Hawaiʻi Island join the inquiry list.',
  },
  '/thank-you': {
    title: 'Enquiry received — myCHEF Hawaii',
    description: 'Your enquiry is in. A coordinator replies in Hawaii Standard Time, typically within one business day.',
  },
  '/weddings': {
    title: 'Wedding catering & wedding-week chefs — Hawaii | myCHEF',
    description:
      'Welcome dinner to recovery brunch. Maui is the primary wedding island; Oʻahu hosts wedding weekends; Kauaʻi and Hawaiʻi Island take dated inquiries.',
  },
  '/corporate': {
    title: 'Private catering for retreats, productions and gatherings | myCHEF Hawaii',
    description:
      'Staffed catering for 10–75 guests: villa retreats, production crews and private gatherings. Not a convention-centre play while HCC citywides are closed.',
  },
  '/oahu': {
    title: 'Private chef Oʻahu — Villa dinners and household service | myCHEF',
    description:
      'Private chefs across Waikīkī, Kahala, Ko Olina, Kailua and the North Shore — celebration weeks for visitors and weekly service for residents.',
  },
  '/maui': {
    title: 'Private chef Maui — In-villa dinners and wedding weeks | myCHEF',
    description:
      'Signature in-villa dinners, dinners-for-two and wedding-week service in Wailea, Kāʻanapali, Kapalua, Makena and Upcountry.',
  },
  '/kauai': {
    title: 'Private chef Kauaʻi — Inquiry list | myCHEF',
    description:
      'North Shore estates and South Shore retreats. myCHEF Kauaʻi is inquiry-stage — tell us your dates and shore. No booking button until a staffed team exists.',
  },
  '/bigisland': {
    title: 'Private chef Hawaiʻi Island (Big Island) — Inquiry list | myCHEF',
    description:
      'Kona–Kohala corridor first. Hawaiʻi Island is inquiry-stage — dated inquiries set the launch sequence. East side is quote-only.',
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
    title: 'Oʻahu catering and events — 10 to 75 guests | myCHEF',
    description: 'Receptions, retreats and production catering on Oʻahu, staffed and zoned honestly.',
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
    title: 'Maui wedding catering — Wedding-week chefs | myCHEF',
    description: 'Welcome dinner, rehearsal, reception and recovery brunch with one Maui team.',
  },
  '/kauai/private-chef': {
    title: 'Kauaʻi private chef — Planned, inquiry-stage | myCHEF',
    description: 'In-villa dinners on both Kauaʻi shores. Inquiry-framed until a staffed island team launches.',
  },
  '/kauai/vacation-chef': {
    title: 'Kauaʻi vacation chef — Planned, inquiry-stage | myCHEF',
    description: 'Arrival-night dinners, provisioning and retreat full-board — joining the Kauaʻi inquiry list.',
  },
  '/kauai/events': {
    title: 'Kauaʻi events and estate weddings — Inquiry-stage | myCHEF',
    description: 'Estate formats to about 75 guests. Dated inquiries help set the Kauaʻi launch sequence.',
  },
  '/bigisland/private-chef': {
    title: 'Hawaiʻi Island private chef — Kohala corridor, inquiry-stage | myCHEF',
    description: 'Kona–Kohala villa dinners and sourcing-led tasting menus, planned for launch. Inquiry list only.',
  },
  '/bigisland/vacation-chef': {
    title: 'Hawaiʻi Island vacation chef — Inquiry-stage | myCHEF',
    description: 'Multi-day chef residencies for Kohala and Waimea weeks. Dated inquiries; no booking button yet.',
  },
  '/bigisland/catering': {
    title: 'Hawaiʻi Island catering and estate weddings — Inquiry-stage | myCHEF',
    description: 'Kohala estate weddings and event catering, gated until a staffed west-side team exists.',
  },
};

export function metaForPath(
  pathname: string,
  islandId?: string | null,
  hostMode?: boolean,
): PageMetaRecord {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (hostMode && islandId) {
    const prefixed = clean === '/' ? `/${islandId}` : `/${islandId}${clean}`;
    return PAGE_META[prefixed] ?? PAGE_META[clean] ?? DEFAULT;
  }
  return PAGE_META[clean] ?? DEFAULT;
}
