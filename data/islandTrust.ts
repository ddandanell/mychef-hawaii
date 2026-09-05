import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /trust documents. Distinct from /what-we-dont-do (claim list),
 * /legal (GET and clauses), and hub /trust. Titles must not use money keywords.
 */

export interface IslandTrustPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandTrust: Record<IslandId, IslandTrustPage> = {
  oahu: {
    h1: 'Oahu proof — published prices and a written quote. Reviews after verified events.',
    title: 'Oahu honesty register — published prices, no invented reviews | myCHEF',
    description:
      'Oahu honesty register: published starting prices, written quotes, no invented Honolulu reviews. Distinct from /what-we-dont-do and hub /trust.',
    lede:
      '/what-we-dont-do is the claim list. Hub /trust is statewide. This page is Oahu proof — prices we publish, reviews we will not invent, farm names only after writing.',
    kicker: 'Oʻahu · Trust',
    photo: 'trustOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This register does not steal that title.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events — never bought, never written in-house. Proof today is the rate card, the sample menu, cleanup, and a written quote.',
      'Named Kahuku or Waimānalo farms print only after written verification — /blog/named-farms. We do not invent an 808 number or a street office to look established.',
    ],
    faqs: [
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That page is the claim list. This page is the Oahu proof register — what we can show today.',
      },
      {
        q: 'Same as hub /trust?',
        a: 'The hub is statewide. This page is the Oahu register.',
      },
    ],
  },
  maui: {
    h1: 'Maui proof — published prices and a written quote. Reviews after verified events.',
    title: 'Maui honesty register — published prices, no invented reviews | myCHEF',
    description:
      'Maui honesty register: published starting prices, written quotes, no invented Wailea reviews. Distinct from /what-we-dont-do and hub /trust.',
    lede:
      '/what-we-dont-do is the claim list. Hub /trust is statewide. This page is Maui proof — prices we publish, reviews we will not invent, Upcountry farm names only after writing.',
    kicker: 'Maui · Trust',
    photo: 'trustMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This register does not steal that title.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events — never bought, never written in-house. Proof today is the rate card, the sample menu, cleanup, and a written quote.',
      'Named Kula or Hāna farms print only after written verification — /blog/named-farms. Lahaina is a town on this host, not a mystery fee.',
    ],
    faqs: [
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That page is the claim list. This page is the Maui proof register — what we can show today.',
      },
      {
        q: 'Same as hub /trust?',
        a: 'The hub is statewide. This page is the Maui register.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai proof at inquiry — published bands, no Book-now fiction, no invented reviews.',
    title: 'Kauai honesty register — inquiry proof, no invented reviews | myCHEF',
    description:
      'Kauai honesty register at inquiry: published bands, no Book-now button, no invented Princeville reviews. Distinct from /what-we-dont-do and hub /trust.',
    lede:
      '/what-we-dont-do is the claim list. Hub /trust is statewide. This page is Kauai proof at inquiry — bands we publish, a roster we will not fake, reviews we will not invent.',
    kicker: 'Kauaʻi · Trust',
    photo: 'trustKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This register does not steal that title. Inquiry stage.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events. Proof today is published starting prices and a written inquiry reply. A named shore is not a live Book-now button.',
      'Named Kīlauea or Kōloa farms print only after written verification — /blog/named-farms. Hanalei-bridge weather is a clause, not a shrug — /hanalei-bridge.',
    ],
    faqs: [
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That page is the claim list. This page is the Kauai proof register at inquiry.',
      },
      {
        q: 'Are you pretending to be live?',
        a: 'No. Inquiry. Send the dates on /quote. We write back when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side proof at inquiry — published bands, Hilo not implied, no invented reviews.',
    title: 'Hawaiʻi Island honesty register — west-side proof, no invented reviews | myCHEF',
    description:
      'Hawaiʻi Island honesty register at inquiry: west-side bands, Hilo not implied, no invented Kona reviews. Distinct from /what-we-dont-do, /coffee-act-198, and hub /trust.',
    lede:
      '/what-we-dont-do is the claim list. /coffee-act-198 is the origin rule. This page is west-side proof at inquiry — bands we publish, an east-side day we will not pretend is Kona.',
    kicker: 'Hawaiʻi Island · Trust',
    photo: 'trustBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This register does not steal that title. West side first.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events. Proof today is published starting prices and a written inquiry reply. Hilo is a dedicated day — /east-side — never a same-day round trip.',
      'Named coffee follows Act 198 — /coffee-act-198. Produce farm names print only after written verification — /blog/named-farms.',
    ],
    faqs: [
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That page is the claim list. This page is the west-side proof register at inquiry.',
      },
      {
        q: 'Same as /coffee-act-198?',
        a: 'That page is the coffee origin rule. This page is the broader honesty register.',
      },
    ],
  },
};
