import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /contact documents. Distinct from /quote (the form) and from
 * /help/getting-started. No second form. Titles must not use money keywords.
 */

export interface IslandContactPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandContact: Record<IslandId, IslandContactPage> = {
  oahu: {
    h1: 'Reach the Oahu desk — the quote form, Hawaii business hours, no street office.',
    title: 'How to reach the Oahu desk — quote form, HST hours | myCHEF',
    description:
      'How to reach the Oahu desk: the /quote form, Hawaii business hours, no street office, no published phone. Distinct from /quote and /help/getting-started.',
    lede:
      '/quote is the form. This page is how to reach the desk — one URL, Hawaii business hours, no 808 number, no street office in Honolulu.',
    kicker: 'Oʻahu · Contact',
    photo: 'contactOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This page does not steal that title. It is how a Kahala or Ko Olina enquiry reaches a person.`,
      'Use /quote. Five fields. Typical reply in Hawaii business hours. We do not publish a local phone or a walk-in office. WhatsApp is available from the quote page when you choose it.',
      'Live corridors: /honolulu, /waikiki, /kailua, /north-shore, /kahala, /ko-olina. If the kitchen cannot host a chef, we decline in writing — not after a deposit.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the form. This page is how to reach the Oahu desk: hours, no street office, no published phone.',
      },
      {
        q: 'Do you have an Honolulu office or an 808 number?',
        a: 'No. We will not invent either. Send /quote.',
      },
    ],
  },
  maui: {
    h1: 'Reach the Maui desk — the quote form, Hawaii business hours, no street office.',
    title: 'How to reach the Maui desk — quote form, HST hours | myCHEF',
    description:
      'How to reach the Maui desk: the /quote form, Hawaii business hours, no street office, no published phone. Distinct from /quote and /help/getting-started.',
    lede:
      '/quote is the form. This page is how to reach the desk — one URL, Hawaii business hours, no 808 number, no street office in Wailea.',
    kicker: 'Maui · Contact',
    photo: 'contactMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This page does not steal that title. It is how a Wailea or Kapalua enquiry reaches a person.`,
      'Use /quote. Five fields. Typical reply in Hawaii business hours. We do not publish a local phone or a walk-in office. Saturday West Maui traffic is planned on the quote, not discovered by calling a number we do not list.',
      'Live corridors: /wailea, /kaanapali, /lahaina, /kihei, /kapalua, /makena. Lahaina is a town — /lahaina — not a second island.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the form. This page is how to reach the Maui desk: hours, no street office, no published phone.',
      },
      {
        q: 'Do you have a Wailea office or an 808 number?',
        a: 'No. We will not invent either. Send /quote.',
      },
    ],
  },
  kauai: {
    h1: 'Reach the Kauai inquiry desk — the form, Hawaii business hours, no street office.',
    title: 'How to reach the Kauai inquiry desk — form, HST hours | myCHEF',
    description:
      'How to reach the Kauai inquiry desk: the /quote form, Hawaii business hours, no street office. Inquiry, not a Book-now button. Distinct from /quote.',
    lede:
      '/quote is the inquiry form. This page is how to reach the desk — Hawaii business hours, no 808 number, no street office in Līhuʻe. Inquiry is not a live roster.',
    kicker: 'Kauaʻi · Contact',
    photo: 'contactKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This page does not steal that title. Inquiry stage.`,
      'Use /quote. Five fields. Typical reply in Hawaii business hours when we can staff. We do not publish a local phone or a walk-in office. Hanalei-bridge weather is a clause — /hanalei-bridge — not a voicemail tree.',
      'Live corridors at inquiry: /princeville, /poipu, /hanalei, /kapaa. A named shore is not a Book-now button.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the inquiry form. This page is how to reach the Kauai desk: hours, no street office, no published phone.',
      },
      {
        q: 'Can I call a Princeville office?',
        a: 'There is none. Send /quote. We write back when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'Reach the west-side inquiry desk — the form, Hawaii business hours, no street office.',
    title: 'How to reach the west-side inquiry desk — form, HST hours | myCHEF',
    description:
      'How to reach the Hawaiʻi Island west-side inquiry desk: the /quote form, Hawaii business hours, no street office. Hilo is a different day. Distinct from /quote.',
    lede:
      '/quote is the inquiry form. This page is how to reach the west-side desk — Hawaii business hours, no 808 number, no street office in Kona. East side is never implied.',
    kicker: 'Hawaiʻi Island · Contact',
    photo: 'contactBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This page does not steal that title. Inquiry, west side first.`,
      'Use /quote. Five fields. Typical reply in Hawaii business hours when we can staff. We do not publish a local phone or a walk-in office. Hilo is a dedicated day — /east-side — not a same-day Kona call.',
      'Live corridors at inquiry: /kona, /waimea, /waikoloa, /kohala. Ironman weeks compress the calendar — /ironman-weeks.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the inquiry form. This page is how to reach the west-side desk: hours, no street office, no published phone.',
      },
      {
        q: 'Can I call a Kona office about Hilo?',
        a: 'There is no office. East side is a dedicated day — /east-side. Send /quote with the town.',
      },
    ],
  },
};
