import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * First live journal article URLs. Distinct from /pricing, /private-chef-cost,
 * /quote, and /help/getting-started. Titles must not use money keywords.
 */

export const JOURNAL_ARTICLE_SLUGS = ['how-much-does-a-private-chef-cost', 'how-to-hire-a-private-chef'] as const;
export type JournalArticleSlug = (typeof JOURNAL_ARTICLE_SLUGS)[number];

export interface JournalArticle extends UniqueCell {
  slug: JournalArticleSlug;
}

export const journalArticles: Record<IslandId, JournalArticle[]> = {
  oahu: [
    {
      slug: 'how-much-does-a-private-chef-cost',
      name: 'How a quote is built',
      h1: 'How an Oahu quote is built — band, stack, corridor.',
      title: 'How an Oahu chef quote is built | myCHEF',
      description:
        'How an Oahu written quote is built: published dinner band, fee stack, North Shore travel if any. Distinct from /pricing and /private-chef-cost.',
      lede:
        '/pricing is the tariff. /private-chef-cost is the stack. This journal piece is how those two become a Kahala or Ko Olina total.',
      photo: 'jnlCostOahu',
      body: [
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This article does not steal that title.`,
        'CORE on this island is the published dinner band. Service 20% and GET up to 4.712% print as their own lines. North Shore is a surcharge day — /north-shore.',
        'The written quote is the contract. Indicative bands on /pricing are starting prices, not a verbal range in a chat window.',
      ],
      faqs: [
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is how the card, the stack, and the corridor become one total.',
        },
        {
          q: 'Same as /private-chef-cost?',
          a: 'That page is the stack. This piece is the journal note beside it.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Oahu rate card' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      name: 'How to hire',
      h1: 'Hiring a chef on Oahu, without a mystery invoice.',
      title: 'Hiring a chef on Oahu without a mystery invoice | myCHEF',
      description:
        'How to hire on Oahu: name the corridor, confirm the kitchen, send five fields. Distinct from /quote and /help/getting-started.',
      lede:
        '/help/getting-started is the first-booking checklist. /quote is the form. This journal piece is why those two exist — so the total is written, not guessed.',
      photo: 'jnlHireOahu',
      body: [
        'Live corridors: /honolulu, /waikiki, /kailua, /north-shore, /kahala, /ko-olina. Hotel suites without a cooktop are declined.',
        'Five fields. No account. No payment to ask. Fifty percent locks the date only after you accept the written total.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is how a dinner in the house gets hired.`,
      ],
      faqs: [
        {
          q: 'Same as /quote?',
          a: 'That URL is the form. This piece is the journal note on why we will not take a verbal yes.',
        },
        {
          q: 'Same as /help/getting-started?',
          a: 'That page is corridor and kitchen. This piece is the hire, in reading-list form.',
        },
      ],
      related: [
        { path: '/help/getting-started', label: 'First-booking checklist' },
        { path: '/quote', label: 'Quote form' },
        { path: '/locations', label: 'Corridor directory' },
      ],
    },
  ],
  maui: [
    {
      slug: 'how-much-does-a-private-chef-cost',
      name: 'How a quote is built',
      h1: 'How a Maui quote is built — band, stack, shore.',
      title: 'How a Maui chef quote is built | myCHEF',
      description:
        'How a Maui written quote is built: published dinner band, fee stack, Upcountry travel if any. Distinct from /pricing and /private-chef-cost.',
      lede:
        '/pricing is the tariff. /private-chef-cost is the stack. This journal piece is how those two become a Wailea or Kapalua total.',
      photo: 'jnlCostMaui',
      body: [
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This article does not steal that title.`,
        'CORE on this island is the published dinner band. Saturday West Maui arrival is planned, not hidden — /west-maui. Service and GET print as their own lines.',
        'The written quote is the contract. Moving from Wailea to Lahaina after a deposit can change the travel line.',
      ],
      faqs: [
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is how shore, stack, and band become one total.',
        },
        {
          q: 'Is Saturday traffic a fee?',
          a: 'It is a planned drive, not a surprise line. Open /west-maui.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Maui rate card' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/west-maui', label: 'West Maui timing' },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      name: 'How to hire',
      h1: 'Hiring a chef on Maui, without a mystery invoice.',
      title: 'Hiring a chef on Maui without a mystery invoice | myCHEF',
      description:
        'How to hire on Maui: name the shore, confirm the kitchen, send five fields. Distinct from /quote and /help/getting-started.',
      lede:
        '/help/getting-started is the first-booking checklist. /quote is the form. This journal piece is why the total is written before anyone shops Wailea.',
      photo: 'jnlHireMaui',
      body: [
        'Live corridors: /wailea, /kaanapali, /lahaina, /kihei, /kapalua, /makena. Name the shore. Name the kitchen.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is how a villa night gets hired.`,
        'Five fields. No payment to ask. Fifty percent locks the date only after you accept the written total.',
      ],
      faqs: [
        {
          q: 'Same as /quote?',
          a: 'That URL is the form. This piece is the journal note on why we will not take a verbal yes.',
        },
        {
          q: 'Lahaina after a Wailea deposit?',
          a: 'Write us. The travel line can change. Open /lahaina.',
        },
      ],
      related: [
        { path: '/help/getting-started', label: 'First-booking checklist' },
        { path: '/quote', label: 'Quote form' },
        { path: '/locations', label: 'Corridor directory' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'how-much-does-a-private-chef-cost',
      name: 'How a quote is built',
      h1: 'How a Kauai inquiry quote is built — band, stack, shore.',
      title: 'How a Kauai chef quote is built | myCHEF',
      description:
        'How a Kauai written quote is built at inquiry: published dinner band, both-shore travel, fee stack. Distinct from /pricing and /private-chef-cost.',
      lede:
        '/pricing is the tariff. /private-chef-cost is the stack. This journal piece is how those two become a Princeville or Poʻipū inquiry total — when we can staff.',
      photo: 'jnlCostKauai',
      body: [
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This article does not steal that title. Inquiry stage.`,
        'A band is not a Book-now button. When we can staff, the written quote itemises menu, staffing, shore travel, 20% service, GET.',
        'Hanalei-bridge weather reschedules rather than forfeits — /hanalei-bridge.',
      ],
      faqs: [
        {
          q: 'Are you live?',
          a: 'Inquiry. We crew when we can staff. The numbers on /pricing are still the published starting prices.',
        },
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is how an inquiry total is written.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Kauai rate card' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      name: 'How to hire',
      h1: 'Hiring a chef on Kauai — inquiry, not a fake roster.',
      title: 'Hiring a chef on Kauai without a mystery invoice | myCHEF',
      description:
        'How to enquire on Kauai: name the shore, send five fields, wait for a written reply. Distinct from /quote and /help/getting-started.',
      lede:
        '/help/getting-started is the first-booking checklist. /quote is the inquiry form. This journal piece is why we will not fake a live Book-now button.',
      photo: 'jnlHireKauai',
      body: [
        'Live names: /princeville, /poipu, /hanalei, /kapaa. Both shores. Inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is how an estate night gets enquired.`,
        'Five fields. We write back with what we can staff. A closed Hanalei bridge moves the night; it does not eat the deposit.',
      ],
      faqs: [
        {
          q: 'Same as /quote?',
          a: 'That URL is the form. This piece is the journal note on inquiry posture.',
        },
        {
          q: 'Do you staff every Saturday?',
          a: 'No. We will not hold a fake roster. Send the date.',
        },
      ],
      related: [
        { path: '/help/getting-started', label: 'First-booking checklist' },
        { path: '/quote', label: 'Inquiry form' },
        { path: '/locations', label: 'Corridor directory' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'how-much-does-a-private-chef-cost',
      name: 'How a quote is built',
      h1: 'How a west-side quote is built — band, stack, Kona–Kohala.',
      title: 'How a Hawaiʻi Island chef quote is built | myCHEF',
      description:
        'How a west-side Hawaiʻi Island written quote is built at inquiry. East side is a different day. Distinct from /pricing and /private-chef-cost.',
      lede:
        '/pricing is the tariff. /private-chef-cost is the stack. This journal piece is how those two become a Kona or Waikoloa inquiry total — when we can staff.',
      photo: 'jnlCostBigisland',
      body: [
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This article does not steal that title. Inquiry, west-side first.`,
        'East side is a dedicated day — /east-side. Never a west-side round trip. Service and GET print as their own lines.',
        'A band is not a Book-now button. When we can staff, the written quote is the contract.',
      ],
      faqs: [
        {
          q: 'Can a Kona total cover Hilo?',
          a: 'Not the same day. Open /east-side. We quote a dedicated crossing.',
        },
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is how a west-side inquiry total is written.',
        },
      ],
      related: [
        { path: '/pricing', label: 'West-side rate card' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      name: 'How to hire',
      h1: 'Hiring a west-side chef — inquiry, Hilo not implied.',
      title: 'Hiring a chef on Hawaiʻi Island without a mystery invoice | myCHEF',
      description:
        'How to enquire on Hawaiʻi Island: west-side address, five fields, written reply. East side is a different day. Distinct from /quote.',
      lede:
        '/help/getting-started is the first-booking checklist. /quote is the inquiry form. This journal piece is why Hilo is not implied.',
      photo: 'jnlHireBigisland',
      body: [
        'Live names: /kona, /waimea, /waikoloa, /kohala. West side first.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is how a west-side night gets enquired.`,
        'Five fields. We write back with what we can staff. Adding a Hilo lunch after a Kona dinner is a second day.',
      ],
      faqs: [
        {
          q: 'Same as /quote?',
          a: 'That URL is the form. This piece is the journal note on west-side inquiry posture.',
        },
        {
          q: 'Are you live on the west side?',
          a: 'Inquiry. We crew when we can staff. Send the address.',
        },
      ],
      related: [
        { path: '/help/getting-started', label: 'First-booking checklist' },
        { path: '/quote', label: 'Inquiry form' },
        { path: '/locations', label: 'Corridor directory' },
      ],
    },
  ],
};

export function getJournalArticle(islandId: IslandId, slug: string) {
  return journalArticles[islandId].find((row) => row.slug === slug);
}
