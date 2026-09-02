/**
 * Unique titles and descriptions per route. Location pages compose their own
 * from `locations.ts`. Root never targets island-modified transactional terms.
 */

export interface PageMetaRecord {
  title: string;
  description: string;
}

const DEFAULT: PageMetaRecord = {
  title: 'Private chef & catering in Hawaii — myCHEF',
  description:
    'Private chefs, in-villa catering, wedding weeks and mobile bar across Oʻahu, Maui, Kauaʻi and Hawaiʻi Island. Published starting prices. Two islands booking now.',
};

export const PAGE_META: Record<string, PageMetaRecord> = {
  '/': DEFAULT,
  '/islands': {
    title: 'Choose your island — myCHEF Hawaii',
    description:
      'Four island operations under one Hawaii standard. Oʻahu and Maui are booking now; Kauaʻi and Hawaiʻi Island are inquiry-stage.',
  },
  '/services': {
    title: 'Private chef, catering, weddings & mobile bar | myCHEF Hawaii',
    description:
      'Private chef dinners, vacation chef stays, wedding catering and mobile bar across Hawaii. Island pages publish starting prices and booking.',
  },
  '/how-it-works': {
    title: 'How a private chef booking works in Hawaii | myCHEF',
    description:
      'Enquire, design the menu, get a written quote. Private chef and catering service with published travel zones instead of surprise fees.',
  },
  '/pricing': {
    title: 'Private chef prices in Hawaii — published starting rates | myCHEF',
    description:
      'Villa chef day rates, signature dinner bands, mobile bar and wedding starting prices for Oʻahu, Maui, Kauaʻi and Hawaiʻi Island. Quote confirmed in writing.',
  },
  '/bar': {
    title: 'Mobile bar & villa cocktails — Hawaii | myCHEF',
    description:
      'A bartender on your terrace. Published starting prices per island — stack with a private chef or book the hour. Oʻahu and Maui booking now.',
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
      'Published starting prices, tax and service-charge notes pending professional review, and the Hawaii launch posture.',
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
      'Staffed private chef catering for 10–75 guests: villa retreats, production crews and private gatherings. Not a convention-centre play while HCC citywides are closed.',
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
  '/kauai/private-chef': {
    title: 'Kauaʻi private chef — Planned, inquiry-stage | myCHEF',
    description: 'In-villa dinners on both Kauaʻi shores. Inquiry-framed until a staffed island team launches.',
  },
  '/kauai/vacation-chef': {
    title: 'Kauaʻi vacation chef — Planned, inquiry-stage | myCHEF',
    description: 'Arrival-night dinners, provisioning and retreat full-board — joining the Kauaʻi inquiry list.',
  },
  '/kauai/events': {
    title: 'Kauaʻi events and estate weddings — Princeville & Poʻipū | myCHEF',
    description: 'Estate formats to about 75 guests on both shores. Inquiry-stage. Starting prices published.',
  },
  '/kauai/wedding-catering': {
    title: 'Kauaʻi wedding catering — Princeville, Hanalei, Poʻipū | myCHEF',
    description:
      'Estate weddings on both Kauaʻi shores. Inquiry-stage. Published starting prices so you can plan the week.',
  },
  '/kauai/weddings': {
    title: 'Kauaʻi estate weddings — inquiry list | myCHEF',
    description: 'Princeville, Hanalei and Poʻipū wedding weeks. Dated inquiries. Starting prices published.',
  },
  '/kauai/bar': {
    title: 'Kauaʻi mobile bar — Princeville & Poʻipū estates | myCHEF',
    description: 'Terrace cocktails on both Kauaʻi shores. Inquiry-stage. Published starting prices.',
  },
  '/kauai/mobile-bar': {
    title: 'Kauaʻi mobile bar — estate cocktails | myCHEF',
    description: 'Mobile bar for Princeville, Hanalei and Poʻipū. Inquiry-stage. Starting prices published.',
  },
  '/kauai/pricing': {
    title: 'Kauaʻi private chef prices — published starting rates | myCHEF',
    description: 'Day rate, dinner bands, bar and wedding starting prices for Kauaʻi. Activates with the island launch.',
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
    title: 'Hawaiʻi Island catering — Kohala Coast & Kona | myCHEF',
    description: 'Kohala estate weddings and event catering. Inquiry-stage. Starting prices published.',
  },
  '/bigisland/wedding-catering': {
    title: 'Hawaiʻi Island wedding catering — Kohala Coast estates | myCHEF',
    description:
      'Kohala and Kona wedding weeks when the west-side team launches. Published starting prices. Inquiry list now.',
  },
  '/bigisland/weddings': {
    title: 'Hawaiʻi Island estate weddings — Kohala | myCHEF',
    description: 'Kohala Coast wedding weeks. Inquiry-stage. Starting prices published.',
  },
  '/bigisland/bar': {
    title: 'Hawaiʻi Island mobile bar — Kohala Coast cocktails | myCHEF',
    description: 'Sunset pours on Kona–Kohala terraces. Inquiry-stage. Published starting prices.',
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
  const clean = pathname.replace(/\/$/, '') || '/';
  if (hostMode && islandId) {
    const prefixed = clean === '/' ? `/${islandId}` : `/${islandId}${clean}`;
    return PAGE_META[prefixed] ?? PAGE_META[clean] ?? DEFAULT;
  }
  return PAGE_META[clean] ?? DEFAULT;
}
