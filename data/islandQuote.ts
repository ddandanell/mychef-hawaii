import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /quote documents. Distinct from /help/getting-started (first-booking
 * checklist) and from the hub form. Titles must not use money keywords.
 */

export interface IslandQuotePage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandQuote: Record<IslandId, IslandQuotePage> = {
  oahu: {
    h1: 'Send the Oahu quote — corridor, kitchen, a written total.',
    title: 'Oahu quote form — corridor, kitchen, written total | myCHEF',
    description:
      'Five fields for an Oahu villa dinner or staffed room. Name Honolulu, Waikīkī, Kailua, North Shore, Kahala, or Ko Olina. A written quote follows. Distinct from /help/getting-started.',
    lede:
      '/help/getting-started is the first-booking checklist. This URL is the form. Live corridors, a working stove, dates. We reply in writing.',
    kicker: 'Oʻahu · Quote',
    photo: 'quoteOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) and Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stay on / and /catering. This page does not steal those titles. It is how a Kahala or Ko Olina night becomes a written total.`,
      'Live corridors: /honolulu, /waikiki, /kailua, /north-shore, /kahala, /ko-olina. Hotel suites without a cooktop are declined. The fee stack after the band: /private-chef-cost. The tariff: /pricing.',
      'Five fields. No account. No payment to ask. Fifty percent locks the date only after you accept the written total — /help/managing-booking.',
    ],
    faqs: [
      {
        q: 'Same as /help/getting-started?',
        a: 'That page is which corridor and whether the kitchen works. This page is the form that starts the written quote.',
      },
      {
        q: 'Waikīkī hotel room?',
        a: 'If there is no stove, we decline. Open /waikiki. Residences and villas are the product.',
      },
    ],
  },
  maui: {
    h1: 'Send the Maui quote — shore, kitchen, a written total.',
    title: 'Maui quote form — shore, kitchen, written total | myCHEF',
    description:
      'Five fields for a Maui villa dinner or staffed room. Name Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, or Makena. Saturday West Maui traffic is planned in. Distinct from /help/getting-started.',
    lede:
      '/help/getting-started is the first-booking checklist. This URL is the form. South or West, a working stove, dates. Lahaina is a town — not a second island.',
    kicker: 'Maui · Quote',
    photo: 'quoteMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) and Maui catering (${SEARCH_VOLUMES['maui catering']}) stay on / and /catering. This page does not steal those titles.`,
      'Live corridors: /wailea, /kaanapali, /lahaina, /kihei, /kapalua, /makena. West Maui timing: /west-maui. South Maui: /south-maui. The fee stack: /private-chef-cost. The tariff: /pricing.',
      'Five fields. No account. Saturday Kāʻanapali nights still need the same window. After you accept a total: /help/managing-booking.',
    ],
    faqs: [
      {
        q: 'Same as /help/getting-started?',
        a: 'That page is shore, kitchen, and West Maui timing. This page is the form.',
      },
      {
        q: 'Can I move from Wailea to Lahaina after I submit?',
        a: 'Write us. Lahaina is a different town — /lahaina — and the travel line may change.',
      },
    ],
  },
  kauai: {
    h1: 'Send the Kauai inquiry — shore, dates, we write back.',
    title: 'Kauai inquiry form — both shores, written reply | myCHEF',
    description:
      'Inquiry form for Kauai estate dinners. Name Princeville, Poʻipū, Hanalei, or Kapaʻa. Hanalei-bridge weather is a clause. We will not fake a live Book-now button.',
    lede:
      '/help/getting-started is the first-booking checklist. This URL is the inquiry form. North or South, a working stove, dates. Closures reschedule rather than forfeit.',
    kicker: 'Kauaʻi · Inquiry',
    photo: 'quoteKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) and Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stay on / and /catering. This host is inquiry. The form is the same five fields. The button is not Book now.`,
      'Live corridors: /princeville, /poipu, /hanalei, /kapaa. Far-North: /hanalei-bridge. The fee stack: /private-chef-cost. The tariff: /pricing.',
      'We log the shore and the dates and write back with what we can staff. No fake roster. After a written total: /help/managing-booking.',
    ],
    faqs: [
      {
        q: 'Are you live on Kauaʻi?',
        a: 'Inquiry. We crew when we can staff. We will not invent a now-serving line. See /about.',
      },
      {
        q: 'Hanalei this weekend?',
        a: 'Read /hanalei-bridge. Weather can close the road. We reschedule; we do not pretend.',
      },
    ],
  },
  bigisland: {
    h1: 'Send the west-side inquiry — Kona–Kohala address, dates.',
    title: 'Hawaiʻi Island inquiry form — west side, written reply | myCHEF',
    description:
      'Inquiry form for west-side Hawaiʻi Island dinners. Name Kona, Waimea, Waikoloa, or Kohala. East side is a different day. We will not fake a live Book-now button.',
    lede:
      '/help/getting-started is the first-booking checklist. This URL is the inquiry form. West-side address, a working stove, dates. Hilo is not implied.',
    kicker: 'Hawaiʻi Island · Inquiry',
    photo: 'quoteBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) stay dinner doors. Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This host is inquiry.`,
      'Live corridors: /kona, /waimea, /waikoloa, /kohala. East side: /east-side. Ironman weeks: /ironman-weeks. The fee stack: /private-chef-cost. The tariff: /pricing.',
      'We log the west-side address and write back with what we can staff. Crossing the island is a dedicated day. After a written total: /help/managing-booking.',
    ],
    faqs: [
      {
        q: 'Can you cook in Hilo the same day as Waikoloa?',
        a: 'No. See /east-side. Crossing the island is a different day.',
      },
      {
        q: 'Are you live on the west side?',
        a: 'Inquiry. We crew when we can staff. See /about.',
      },
    ],
  },
};
