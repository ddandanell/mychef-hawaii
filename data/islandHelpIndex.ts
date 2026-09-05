import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /help indexes. Distinct from nested /help/:slug articles, from
 * /faq, /how-it-works, and /quote. Titles must not use money keywords.
 */

export interface IslandNestedIndexPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandHelpIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu help — the first ask, then the draft, then the hold.',
    title: 'Oahu help desk — first booking, menu draft, after the quote | myCHEF',
    description:
      'Oahu help desk: first booking, how to read a menu draft, wedding week, house offsite, after the quote. Distinct from /faq and /how-it-works.',
    lede:
      '/faq is questions. /how-it-works is the night. /quote is the form. This page is the list of first-booking documents on this host.',
    kicker: 'Oʻahu · Help',
    photo: 'helpIndexOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. These help URLs do not steal those titles.`,
      'Open a document below. Getting started names the corridor. The menu guide is how to read the draft. Managing a booking is after the written quote.',
    ],
    faqs: [
      {
        q: 'Same as /faq?',
        a: 'FAQ is the question list. This page is the first-booking documents beside it.',
      },
      {
        q: 'Same as /quote?',
        a: 'The form is /quote. These pages tell you what to send, then what happens after.',
      },
    ],
  },
  maui: {
    h1: 'Maui help — shore, kitchen, written quote, then the hold.',
    title: 'Maui help desk — first booking, menu draft, after the quote | myCHEF',
    description:
      'Maui help desk: first booking, menu draft, wedding week, villa offsite, after the quote. Distinct from /faq and /how-it-works.',
    lede:
      '/faq is questions. /how-it-works is the night. /quote is the form. This page is the list of first-booking documents on this host.',
    kicker: 'Maui · Help',
    photo: 'helpIndexMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. These help URLs do not steal those titles.`,
      'Open a document below. Getting started names the shore. The menu guide is how to read the draft. West Maui traffic is planned on /west-maui, not discovered on the invoice.',
    ],
    faqs: [
      {
        q: 'Same as /faq?',
        a: 'FAQ is the question list. This page is the first-booking documents beside it.',
      },
      {
        q: 'Same as /quote?',
        a: 'The form is /quote. These pages tell you what to send, then what happens after.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai help — both-shore inquiry, then the draft.',
    title: 'Kauai help desk — first inquiry, menu draft, after the quote | myCHEF',
    description:
      'Kauai help desk at inquiry: first booking, menu draft, wedding week, estate offsite, after the quote. Not a Book-now button.',
    lede:
      '/faq is questions at inquiry. /how-it-works is the night when we can staff. This page is the list of first-inquiry documents — both shores, not a fake roster.',
    kicker: 'Kauaʻi · Help',
    photo: 'helpIndexKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. These help URLs do not steal those titles. Inquiry stage.`,
      'A named shore is not a Book-now button. Hanalei-bridge weather is a clause — /hanalei-bridge. Send dates on /quote. We write back when we can staff.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. These documents explain the ask. They are not a confirmation.',
      },
      {
        q: 'Same as /faq?',
        a: 'FAQ is the question list. This page is the first-inquiry documents beside it.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side help — Kona first, then the draft. Hilo not implied.',
    title: 'West-side help desk — first inquiry, menu draft, after the quote | myCHEF',
    description:
      'Hawaiʻi Island west-side help desk at inquiry. Distinct from /faq, /how-it-works, and /east-side.',
    lede:
      '/faq is questions at inquiry. /how-it-works is the night when we can staff. This page is the west-side list — Kona to Kohala, Hilo never implied.',
    kicker: 'Hawaiʻi Island · Help',
    photo: 'helpIndexBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. These help URLs do not steal those titles. West side first.`,
      'East side is a dedicated day — /east-side. Ironman weeks compress the calendar — /ironman-weeks. Send dates on /quote.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. Open /east-side. It is a different chef day.',
      },
      {
        q: 'Same as /faq?',
        a: 'FAQ is the question list. This page is the first-inquiry documents beside it.',
      },
    ],
  },
};
