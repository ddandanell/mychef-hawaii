import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Live journal article URLs. Distinct from /pricing, /private-chef-cost,
 * /quote, /help/getting-started, /dietary, /private-chef, and /coverage.
 * Titles must not use money keywords.
 */

export const JOURNAL_ARTICLE_SLUGS = [
  'how-much-does-a-private-chef-cost',
  'how-to-hire-a-private-chef',
  'villa-kitchens',
  'dietary-needs',
  'what-is-included',
  'how-far-ahead-to-book',
] as const;
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
    {
      slug: 'villa-kitchens',
      name: 'Villa kitchens',
      h1: 'Oahu villa kitchens — Gold Coast cooktops, not hotel suites.',
      title: 'Oahu villa kitchens — Gold Coast cooktops, not hotel suites | myCHEF',
      description:
        'What an Oahu villa kitchen can hold: Kahala and Ko Olina cooktops, Waikīkī suites we decline. Distinct from /private-chef and /short-stay.',
      lede:
        '/private-chef is what a night includes. /short-stay is the rental that still has to cook. This journal piece is the room itself — the constraint we write before anyone shops.',
      photo: 'jnlKitchenOahu',
      body: [
        'Hotel suites without a cooktop are declined. Gold Coast houses on /gold-coast and short-stay villas on /short-stay are the product. We design the menu around the range, not a brochure photo.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is why a Kahala cooktop and a Waikīkī suite are not the same night.`,
        'Freight elevators and COIs are handled in advance on towers. If the kitchen cannot support the draft, that is on the quote — not discovered at 4 p.m.',
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is what a night includes. This piece is the kitchen constraint that decides whether we even quote.',
        },
        {
          q: 'Will you cook in a Waikīkī suite?',
          a: 'Not without a functioning cooktop. Open /short-stay. We decline rooms that impersonate room service.',
        },
      ],
      related: [
        { path: '/gold-coast', label: 'Gold Coast houses' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dietary-needs',
      name: 'Dietary needs',
      h1: 'How allergies land on an Oahu menu draft.',
      title: 'How allergies land on an Oahu menu draft | myCHEF',
      description:
        'How an Oahu allergy note becomes a written course, not an improvisation. Distinct from the /dietary service page.',
      lede:
        '/dietary is the service document — designed in, not theatre. This journal piece is how that note actually lands on a Kahala or Kailua draft.',
      photo: 'jnlDietOahu',
      body: [
        'Tell us in the five fields. The proposal names the constraint. We do not invent a “we can do anything” claim for a Gold Coast kitchen we have not seen.',
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This article does not steal that title, and it does not steal /dietary’s.`,
        'Cross-contact limits are stated if the room cannot hold them. Kids’ plates sit on /kids-menus. The sample on /menus is an example, not a standing carte.',
      ],
      faqs: [
        {
          q: 'Same as /dietary?',
          a: 'That URL is the service page. This piece is the journal note on how the allergy reaches the draft.',
        },
        {
          q: 'Can you invent it on the night?',
          a: 'No. Designed ahead, or we decline the seat. Open /dietary.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary service' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'what-is-included',
      name: 'What is included',
      h1: 'What an Oahu night includes — and what prints as its own line.',
      title: 'What an Oahu night includes — and what prints as its own line | myCHEF',
      description:
        'Shop, cook, serve, clean on Oahu. Alcohol, rentals, and GET print as their own lines. Distinct from /private-chef and /pricing.',
      lede:
        '/private-chef is the inclusion page. /pricing is the tariff. This journal piece is the written split — what is in, and what never hides inside the band.',
      photo: 'jnlInclOahu',
      body: [
        'Shopping, cooking, service, and cleanup are in. Alcohol, rentals, and venue fees are out — always their own lines on a Kahala or Ko Olina quote.',
        'Service 20% and GET up to 4.712% print beside the dinner band. North Shore travel is a surcharge day — /north-shore — not a surprise in the stack.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article is one dinner in the house, itemised.`,
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is the inclusion document. This piece is the journal note on why exclusions print as lines.',
        },
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is what the card does and does not swallow.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/pricing', label: 'Oahu rate card' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'how-far-ahead-to-book',
      name: 'How far ahead',
      h1: 'How far ahead to book an Oahu night.',
      title: 'How far ahead to book an Oahu night | myCHEF',
      description:
        'Peak months and notice on Oahu: December–March, wedding peaks, convention-week access. Distinct from /coverage and /quote.',
      lede:
        '/coverage is the zone map. /quote is the form. This journal piece is when those two fill — so we would rather say the calendar now than invent a last-minute yes.',
      photo: 'jnlBookOahu',
      body: [
        'December–March and wedding peaks (September, October, May) move first on this island. January around the Sony Open week presses hospitality even when HCC citywides are closed — /conventions.',
        'Gold Coast houses book earlier than a Kailua Tuesday. North Shore is a surcharge day with its own clock — /north-shore. We do not hold a date on a verbal yes.',
        'Five fields. Fifty percent locks the date only after you accept the written total. Far-notice is honesty, not a scarcity stunt.',
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is when those corridors fill.',
        },
        {
          q: 'Can you take next Saturday?',
          a: 'Sometimes. Send the date on /quote. We will not invent a roster.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/conventions', label: 'Convention weeks' },
        { path: '/quote', label: 'Quote form' },
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
    {
      slug: 'villa-kitchens',
      name: 'Villa kitchens',
      h1: 'Maui villa kitchens — Wailea cooktops, not hotel suites.',
      title: 'Maui villa kitchens — Wailea cooktops, not hotel suites | myCHEF',
      description:
        'What a Maui villa kitchen can hold: Wailea and Kapalua cooktops, walk-up suites we decline. Distinct from /private-chef and /west-maui.',
      lede:
        '/private-chef is what a night includes. /west-maui is Saturday timing. This journal piece is the room itself — the range that decides the draft.',
      photo: 'jnlKitchenMaui',
      body: [
        'Hotel suites without a cooktop are declined. South Maui houses on /south-maui and West Maui estates on /west-maui are the product. We design around the range, not a listing photo.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is why a Wailea cooktop and a Kāʻanapali walk-up are not the same night.`,
        'Moving from Wailea to Lahaina after a deposit can change the travel line. If the kitchen cannot support the draft, that is on the quote — not discovered at 4 p.m.',
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is what a night includes. This piece is the kitchen constraint that decides whether we even quote.',
        },
        {
          q: 'Will you cook in a resort suite?',
          a: 'Not without a functioning cooktop. We decline rooms that impersonate room service.',
        },
      ],
      related: [
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui timing' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dietary-needs',
      name: 'Dietary needs',
      h1: 'How allergies land on a Maui menu draft.',
      title: 'How allergies land on a Maui menu draft | myCHEF',
      description:
        'How a Maui allergy note becomes a written course, not an improvisation. Distinct from the /dietary service page.',
      lede:
        '/dietary is the service document — designed in Wailea and West Maui kitchens. This journal piece is how that note actually lands on the draft.',
      photo: 'jnlDietMaui',
      body: [
        'Tell us in the five fields. The proposal names the constraint. We do not invent a “we can do anything” claim for a Kapalua kitchen we have not seen.',
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This article does not steal that title, and it does not steal /dietary’s.`,
        'Identical event plates can carry one dietary note on the quote. Cross-contact limits are stated if the room cannot hold them. Kids’ plates: /kids-menus.',
      ],
      faqs: [
        {
          q: 'Same as /dietary?',
          a: 'That URL is the service page. This piece is the journal note on how the allergy reaches the draft.',
        },
        {
          q: 'Can you invent it on the night?',
          a: 'No. Designed ahead, or we decline the seat. Open /dietary.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary service' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'what-is-included',
      name: 'What is included',
      h1: 'What a Maui night includes — and what prints as its own line.',
      title: 'What a Maui night includes — and what prints as its own line | myCHEF',
      description:
        'Shop, cook, serve, clean on Maui. Alcohol, rentals, and GET print as their own lines. Distinct from /private-chef and /pricing.',
      lede:
        '/private-chef is the inclusion page. /pricing is the tariff. This journal piece is the written split — what is in, and what never hides inside the band.',
      photo: 'jnlInclMaui',
      body: [
        'Shopping, cooking, service, and cleanup are in. Alcohol, rentals, and venue fees are out — always their own lines on a Wailea or Kapalua quote.',
        'Service and GET print beside the dinner band. Saturday West Maui arrival is planned, not hidden — /west-maui — not a surprise in the stack.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article is one villa night, itemised.`,
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is the inclusion document. This piece is the journal note on why exclusions print as lines.',
        },
        {
          q: 'Same as /pricing?',
          a: 'That page is the rate card. This piece is what the card does and does not swallow.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/pricing', label: 'Maui rate card' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'how-far-ahead-to-book',
      name: 'How far ahead',
      h1: 'How far ahead to book a Maui night.',
      title: 'How far ahead to book a Maui night | myCHEF',
      description:
        'Peak months and notice on Maui: December–March, wedding-week houses, Saturday West Maui drives. Distinct from /coverage and /quote.',
      lede:
        '/coverage is the zone map. /quote is the form. This journal piece is when Wailea and West Maui fill — so we would rather say the calendar now.',
      photo: 'jnlBookMaui',
      body: [
        'December–March and wedding peaks (September, October, May) move first. Wedding-week houses on /wedding-week are several nights, not one verbal yes.',
        'Saturday West Maui arrival is a planned drive — /west-maui. Upcountry is a surcharge zone even when the draft looks simple. We do not hold a date on a chat window.',
        'Five fields. Fifty percent locks the date only after you accept the written total. Far-notice is honesty, not a scarcity stunt.',
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is when those shores fill.',
        },
        {
          q: 'Can you take next Saturday in Lahaina?',
          a: 'Sometimes. Send the date on /quote. Saturday West Maui is planned, not assumed.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/wedding-week', label: 'Wedding-week houses' },
        { path: '/quote', label: 'Quote form' },
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
    {
      slug: 'villa-kitchens',
      name: 'Villa kitchens',
      h1: 'Kauai estate kitchens — both shores, not hotel suites.',
      title: 'Kauai estate kitchens — both shores, not hotel suites | myCHEF',
      description:
        'What a Kauai estate kitchen can hold at inquiry: Princeville and Poʻipū cooktops, hotel suites we decline. Distinct from /private-chef and /hanalei-bridge.',
      lede:
        '/private-chef is what a night includes — when we can staff. /hanalei-bridge is weather. This journal piece is the room itself on either shore.',
      photo: 'jnlKitchenKauai',
      body: [
        'Hotel suites without a cooktop are declined. North Shore estates on /north-shore and south-shore houses on /south-shore are the product. Inquiry stage does not mean we impersonate room service.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is why a Princeville range and a hotel galley are not the same night.`,
        'A closed Hanalei bridge can move the night — /hanalei-bridge. If the kitchen cannot support the draft, that is on the inquiry quote, not discovered at 4 p.m.',
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is what a night includes. This piece is the kitchen constraint that decides whether we even enquire a draft.',
        },
        {
          q: 'Are you live on both shores?',
          a: 'Inquiry. We crew when we can staff. Send the address and the cooktop.',
        },
      ],
      related: [
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/south-shore', label: 'South Shore kitchens' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dietary-needs',
      name: 'Dietary needs',
      h1: 'How allergies land on a Kauai inquiry draft.',
      title: 'How allergies land on a Kauai inquiry draft | myCHEF',
      description:
        'How a Kauai allergy note becomes a written course at inquiry, not an improvisation. Distinct from the /dietary service page.',
      lede:
        '/dietary is the service document — designed for the shore you are on. This journal piece is how that note lands on an inquiry draft.',
      photo: 'jnlDietKauai',
      body: [
        'Tell us in the five fields. When we can staff, the proposal names the constraint. Inquiry stage does not mean a fake dietary promise.',
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This article does not steal that title, and it does not steal /dietary’s.`,
        'Far-North drafts still inherit /hanalei-bridge. Cross-contact limits are stated if the room cannot hold them. Kids’ plates: /kids-menus.',
      ],
      faqs: [
        {
          q: 'Same as /dietary?',
          a: 'That URL is the service page. This piece is the journal note on how the allergy reaches an inquiry draft.',
        },
        {
          q: 'Can you invent it on the night?',
          a: 'No. Designed ahead, or we decline the seat. Open /dietary.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary service' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'what-is-included',
      name: 'What is included',
      h1: 'What a Kauai inquiry night includes — and what prints as its own line.',
      title: 'What a Kauai inquiry night includes — and what prints as its own line | myCHEF',
      description:
        'Shop, cook, serve, clean on Kauai when we can staff. Alcohol, rentals, shore travel, and GET print as their own lines. Distinct from /private-chef.',
      lede:
        '/private-chef is the inclusion page. /pricing is the tariff. This journal piece is the written split on an inquiry quote — what is in, and what never hides inside the band.',
      photo: 'jnlInclKauai',
      body: [
        'When we can staff: shopping, cooking, service, and cleanup are in. Alcohol, rentals, and venue fees are out — always their own lines on a Princeville or Poʻipū quote.',
        'Both-shore travel, service, and GET print beside the dinner band. A band is not a Book-now button. Hanalei-bridge weather reschedules rather than forfeits.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article is one estate night, itemised at inquiry.`,
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is the inclusion document. This piece is the journal note on why exclusions print as lines — even at inquiry.',
        },
        {
          q: 'Are the numbers live?',
          a: 'The published starting prices on /pricing are live. Staffing a Saturday is not assumed. Send the date.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/pricing', label: 'Kauai rate card' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'how-far-ahead-to-book',
      name: 'How far ahead',
      h1: 'How far ahead to enquire a Kauai night.',
      title: 'How far ahead to enquire a Kauai night | myCHEF',
      description:
        'Peak months and notice on Kauai at inquiry: December–March, wedding peaks, Far-North weather. Distinct from /coverage and /quote.',
      lede:
        '/coverage is the zone map. /quote is the inquiry form. This journal piece is when both shores fill — and why we will not fake a last-minute roster.',
      photo: 'jnlBookKauai',
      body: [
        'December–March and wedding peaks (September, October, May) move first when we can staff. Far-North Kauaʻi carries a published 72-hour weather window — /hanalei-bridge.',
        'Wedding-week houses on /wedding-week are several nights. We do not hold a fake Book-now button. Five fields. We write back with what we can staff.',
        'A closed Hanalei bridge moves the night; it does not eat the deposit. Far-notice is honesty, not a scarcity stunt.',
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is when those shores fill — at inquiry.',
        },
        {
          q: 'Do you staff every Saturday?',
          a: 'No. Send the date on /quote. We will not invent a roster.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
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
    {
      slug: 'villa-kitchens',
      name: 'Villa kitchens',
      h1: 'West-side villa kitchens — Kona cooktops, not hotel suites.',
      title: 'Hawaiʻi Island villa kitchens — Kona cooktops, not hotel suites | myCHEF',
      description:
        'What a west-side villa kitchen can hold at inquiry: Kona and Waikoloa cooktops, hotel suites we decline. East side is a different day. Distinct from /private-chef.',
      lede:
        '/private-chef is what a night includes — when we can staff. /east-side is a dedicated crossing. This journal piece is the west-side room itself.',
      photo: 'jnlKitchenBigisland',
      body: [
        'Hotel suites without a cooktop are declined. Kohala houses on /kohala-corridor and Kona villas on /kona are the product. Inquiry stage does not mean we impersonate room service.',
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This article does not steal that title. A Hilo kitchen is a different day — /east-side.`,
        'If the kitchen cannot support the draft, that is on the inquiry quote — not discovered at 4 p.m. West-side first.',
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is what a night includes. This piece is the kitchen constraint that decides whether we even enquire a draft.',
        },
        {
          q: 'Can a Kona cooktop cover Hilo?',
          a: 'Not the same day. Open /east-side. We quote a dedicated crossing.',
        },
      ],
      related: [
        { path: '/kohala-corridor', label: 'Kohala corridor' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dietary-needs',
      name: 'Dietary needs',
      h1: 'How allergies land on a west-side menu draft.',
      title: 'How allergies land on a Hawaiʻi Island menu draft | myCHEF',
      description:
        'How a west-side allergy note becomes a written course at inquiry, not an improvisation. East side is a different day. Distinct from /dietary.',
      lede:
        '/dietary is the service document — designed west-side first. This journal piece is how that note lands on a Kona or Waikoloa inquiry draft.',
      photo: 'jnlDietBigisland',
      body: [
        'Tell us in the five fields. When we can staff, the proposal names the constraint. West-side provisioning for west-side nights.',
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This article does not steal that title, and it does not steal /dietary’s.`,
        'East-side dietary is its own team day — /east-side. Coffee Act origin claims stay honest — /coffee-act-198. Kids’ plates: /kids-menus.',
      ],
      faqs: [
        {
          q: 'Same as /dietary?',
          a: 'That URL is the service page. This piece is the journal note on how the allergy reaches a west-side inquiry draft.',
        },
        {
          q: 'Can a Kona draft cover a Hilo allergy table?',
          a: 'Not the same day. Open /east-side.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary service' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'what-is-included',
      name: 'What is included',
      h1: 'What a west-side night includes — and what prints as its own line.',
      title: 'What a Hawaiʻi Island night includes — and what prints as its own line | myCHEF',
      description:
        'Shop, cook, serve, clean on the west side when we can staff. Alcohol, rentals, GET, and east-side days print as their own lines. Distinct from /private-chef.',
      lede:
        '/private-chef is the inclusion page. /pricing is the tariff. This journal piece is the written split on a west-side inquiry quote — Hilo is never implied.',
      photo: 'jnlInclBigisland',
      body: [
        'When we can staff: shopping, cooking, service, and cleanup are in. Alcohol, rentals, and venue fees are out — always their own lines on a Kona or Waikoloa quote.',
        'Service and GET print beside the dinner band. East side is a dedicated day — /east-side — never a west-side round trip hidden in the stack.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article is one west-side night, itemised at inquiry.`,
      ],
      faqs: [
        {
          q: 'Same as /private-chef?',
          a: 'That page is the inclusion document. This piece is the journal note on why exclusions — including Hilo — print as lines.',
        },
        {
          q: 'Does the CORE band cover the east side?',
          a: 'No. Open /east-side. We quote a dedicated crossing.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/pricing', label: 'West-side rate card' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'how-far-ahead-to-book',
      name: 'How far ahead',
      h1: 'How far ahead to enquire a west-side night.',
      title: 'How far ahead to enquire a Hawaiʻi Island night | myCHEF',
      description:
        'Peak months and notice on Hawaiʻi Island at inquiry: December–March, Ironman weeks, east-side dedicated days. Distinct from /coverage and /quote.',
      lede:
        '/coverage is the zone map. /quote is the inquiry form. This journal piece is when the west side fills — and why Hilo is never a same-day add-on.',
      photo: 'jnlBookBigisland',
      body: [
        'December–March and wedding peaks (September, October, May) move first when we can staff. Ironman weeks change access — /ironman-weeks — not a marketing slogan.',
        'East side is a dedicated day, not a same-day Kona–Hilo fantasy — /east-side. Five fields. We write back with what we can staff. We do not hold a fake Book-now button.',
        'Far-notice is honesty, not a scarcity stunt. Adding a Hilo lunch after a Kona dinner is a second day.',
      ],
      faqs: [
        {
          q: 'Same as /coverage?',
          a: 'That page is where we cook. This piece is when the west side fills — at inquiry.',
        },
        {
          q: 'Can you take next Saturday in Hilo after Kona?',
          a: 'Not the same day. Open /east-side. Send both dates on /quote.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
};

export function getJournalArticle(islandId: IslandId, slug: string) {
  return journalArticles[islandId].find((row) => row.slug === slug);
}
