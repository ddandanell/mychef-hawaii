import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/** DataForSEO Google Ads US — 2 Sep 2026. Do not invent. Catering > chef on Oʻahu and Maui. */
export const CATERING_VOLUMES = {
  'oahu catering': 720,
  'maui catering': 480,
  'kauai catering': 210,
  'hawaii catering': 210,
  'wedding catering oahu': 140,
  'wedding catering maui': 30,
  'wedding catering hawaii': 30,
} as const;

export interface CateringOffer {
  keyword: string;
  volume: number;
  h1: string;
  title: string;
  description: string;
  lede: string;
  fromPp: number;
  weddingFrom: number;
  places: string;
  photo: PhotoKey;
  faqs: { q: string; a: string }[];
}

export const cateringOffers: Record<IslandId, CateringOffer> = {
  oahu: {
    keyword: 'oahu catering',
    volume: CATERING_VOLUMES['oahu catering'],
    h1: 'Oahu catering.',
    title: 'Oahu Catering | Staffed Villa Events — myCHEF',
    description:
      'Oahu catering from $125 a guest. Buffet or plated, villa and wedding catering, Honolulu to Ko Olina. WhatsApp for a quote.',
    lede:
      'Oahu catering is the staffed-event door: buffet or plated, villa, retreat, wedding. Published prices and a written menu. Honolulu to Ko Olina.',
    fromPp: 125,
    weddingFrom: 125,
    places: 'Honolulu, Waikīkī residences, Kahala, Kailua, Ko Olina',
    photo: 'catering',
    faqs: [
      {
        q: 'How much is Oahu catering?',
        a: 'CORE food from $125–$190 per person. Wedding catering Oahu from $125/pp plus staffing ($55/hr server, $75/hr sous-chef, 4–5 hour minimums). 20% service and Hawaiʻi GET up to 4.712% on their own lines, once.',
      },
      {
        q: 'Buffet vs plated?',
        a: 'Buffet is the volume format. Plated is the restaurant arc. Family-style sits between. The food band does not change; the staffing line does.',
      },
      {
        q: 'Do you publish an Oahu catering menu?',
        a: 'A sample estate menu is on this page. Your written menu is designed for that house and that guest list — not a laminated carte.',
      },
      {
        q: 'Wedding catering Oahu?',
        a: 'Yes — 140 searches a month. Estate and residence formats to about 75 guests. Welcome dinner, rehearsal, reception as separate lines. See /weddings.',
      },
    ],
  },
  maui: {
    keyword: 'maui catering',
    volume: CATERING_VOLUMES['maui catering'],
    h1: 'Maui catering.',
    title: 'Maui Catering | Staffed Villa Events — myCHEF',
    description:
      'Maui catering from $150 a guest. Buffet or plated, villa and wedding catering in Wailea, West Maui and Kīhei. Published prices and menus. WhatsApp for a quote.',
    lede:
      'Maui catering is the staffed-room door on this island. Same team as a villa dinner. Buffet or plated. Published $150–$250 a guest. Not a named-chef marketplace.',
    fromPp: 150,
    weddingFrom: 150,
    places: 'Wailea, Kāʻanapali, Lahaina / West Maui, Kīhei, Kapalua',
    photo: 'catering',
    faqs: [
      {
        q: 'How much is Maui catering?',
        a: 'CORE $150–$250 per person. Wedding catering Maui from $150/pp plus staffing. Groceries at cost on multi-day. 20% service and GET up to 4.712% as their own lines.',
      },
      {
        q: 'Buffet vs plated on Maui?',
        a: 'Buffet for a room that moves. Plated for a seated night. We will not upsell plated if a buffet feeds the house better.',
      },
      {
        q: 'Wailea, Lahaina or Kīhei?',
        a: 'Same Maui food band. We cater villa and estate kitchens — not hotel rooms without a cooktop. WhatsApp the address.',
      },
      {
        q: 'Sushi-forward catering?',
        a: 'We can arrange a sushi-forward menu as a direction — nigiri, sashimi, hand rolls. Not a separate brand.',
      },
    ],
  },
  kauai: {
    keyword: 'kauai catering',
    volume: SEARCH_VOLUMES['kauai catering'],
    h1: 'Kauai catering.',
    title: 'Kauai Catering | Staffed Villa Events — myCHEF',
    description:
      'Kauai catering from $150 a guest. Buffet vs plated, published menu, wedding catering from $175 a guest. Princeville, Poʻipū, Hanalei.',
    lede:
      'Kauai catering is the staffed-event door on this island — published prices, a sample menu, buffet or plated. Villa dinners live on the home.',
    fromPp: 150,
    weddingFrom: 175,
    places: 'Princeville, Poʻipū, Hanalei, Kapaʻa',
    photo: 'catering',
    faqs: [
      {
        q: 'How much is Kauai catering?',
        a: 'CORE $150–$250 per person. Kauai wedding catering from $175/pp plus staffing. A local competitor publishes $200–$250/pp — we publish the band and a written quote, not a mystery total.',
      },
      {
        q: 'Buffet vs plated?',
        a: 'Buffet is volume. Plated is paced. Family-style for 10–20. Staffing is itemised.',
      },
      {
        q: 'Kauai catering menu?',
        a: 'Sample estate menu on this page. Your written menu is designed that week.',
      },
      {
        q: 'Kauai wedding catering?',
        a: 'Estate formats to about 75 guests. Welcome through recovery brunch as separate lines. Far-North inherits the Hanalei-bridge clause.',
      },
    ],
  },
  bigisland: {
    keyword: 'hawaii catering',
    volume: 70,
    h1: 'Big Island catering',
    title: 'Big Island catering — Kona & Kohala from $125/pp | myCHEF',
    description:
      'Catering on Hawaiʻi Island from $125/pp. Kohala Coast and Kona villa receptions, buffet or plated. WhatsApp for a written quote.',
    lede:
      'West-side first: Kohala and Kona estates. Buffet or plated. Published starting prices. Hilo is quote-only — we will not fake a same-day round trip.',
    fromPp: 125,
    weddingFrom: 150,
    places: 'Kohala Coast, Waikoloa, Kailua-Kona',
    photo: 'kohalaTable',
    faqs: [
      {
        q: 'How much is catering on the Big Island?',
        a: 'CORE $150–$225 per person, ENTRY from $110. Wedding from $150/pp plus staffing. Same fee stack as every myCHEF Hawaii quote.',
      },
      {
        q: 'Hilo from Kona?',
        a: 'Not in one day. East side is dedicated staffing, quoted honestly.',
      },
    ],
  },
};

export const HUB_CATERING = {
  keyword: 'hawaii catering',
  volume: CATERING_VOLUMES['hawaii catering'],
  h1: 'Hawaii catering.',
  title: 'Hawaii Catering | Staffed Villa Events — myCHEF',
  description:
    'Hawaii catering for villa and estate events. Buffet or plated. Oahu, Maui, Kauaʻi, Big Island. Published starting prices. WhatsApp for a quote.',
  lede:
    'Staffed villa events on four islands. Buffet or plated. Published starting prices. Open the island page for the house you booked.',
  faqs: [
    {
      q: 'How much is Hawaii catering?',
      a: 'Signature food from $125 a guest on Oʻahu, $150 on Maui and Kauaʻi. Wedding catering from $125–$175 a guest plus staffing, depending on the island. 20% service and Hawaiʻi GET up to 4.712% sit on their own lines, once.',
    },
    {
      q: 'Buffet or plated?',
      a: 'Buffet is the volume format. Plated is the restaurant arc. Family-style sits between. The food band is the island CORE card; staffing is itemised.',
    },
    {
      q: 'Which island should I open?',
      a: 'Open the island where the villa is. Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island each publish starting prices and a sample menu. West-side first on Hawaiʻi Island — Kona and Kohala.',
    },
    {
      q: 'Do you publish a Hawaii catering menu?',
      a: 'A sample estate menu is on this page. Your written menu is designed for that house and that guest list — not a laminated carte.',
    },
  ],
} as const;
