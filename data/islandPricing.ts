import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /pricing documents — the rate card with unique stills and FAQs.
 * Distinct from /private-chef-cost (the fee-stack explainer).
 * Titles stay the published “What a night costs on …” set in pageMeta.
 */

export interface IslandPricingPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandPricing: Record<IslandId, IslandPricingPage> = {
  oahu: {
    h1: 'What a night costs on Oahu.',
    title: 'What a night costs on Oahu | myCHEF',
    description:
      'Oahu starting prices from the rate card: CORE $125–$190 a guest, Stay Chef from $850 a day, Date Night from $450. Service and GET print after the band. Distinct from /private-chef-cost.',
    lede:
      'USD. Line by line. CORE $125–$190 a guest. Stay Chef from $850 a day. The written quote is the confirmed total. How those lines stack: /private-chef-cost.',
    kicker: 'Oʻahu · Rate card',
    photo: 'pricingOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This page is the tariff so that title stays clean. Groceries sit inside the dinner band. Stay Chef groceries are billed at cost.`,
      'Kahala, Ko Olina, Kailua, and Waikīkī residences with kitchens are base. North Shore is a published surcharge — /coverage. After the band: 20% service, GET up to 4.712%, 50% deposit. Gratuity is voluntary.',
      'The fee-stack explainer is /private-chef-cost. The form is /quote. First-booking checklist: /help/getting-started.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is how service, GET, travel, and deposit print after the band. This page is the tariff itself.',
      },
      {
        q: 'Is North Shore inside CORE?',
        a: 'The food band holds. Travel is a published surcharge. See /coverage and /north-shore.',
      },
    ],
  },
  maui: {
    h1: 'What a night costs on Maui.',
    title: 'What a night costs on Maui | myCHEF',
    description:
      'Maui starting prices from the rate card: CORE $150–$250 a guest, Stay Chef from $1,050 a day. Upcountry and West Maui travel print as their own lines. Distinct from /private-chef-cost.',
    lede:
      'USD. Line by line. CORE $150–$250 a guest. Stay Chef from $1,050 a day. Saturday West Maui traffic is planned into arrival, not hidden in the band.',
    kicker: 'Maui · Rate card',
    photo: 'pricingMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. Private chef Maui cost is a related search (${SEARCH_VOLUMES['private chef maui cost']} monthly) — we do not invent a second volume. This page is the tariff.`,
      'Wailea, Kapalua, Kāʻanapali, and Makena are base. Upcountry is a published surcharge. West Maui timing: /west-maui. Lahaina is a town — /lahaina.',
      'After the band: 20% service, GET up to 4.712%, 50% deposit. The stack: /private-chef-cost. The form: /quote.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is the stack. This page is the tariff. Upcountry is the usual surcharge; Saturday West Maui is timing, not a mystery fee.',
      },
      {
        q: 'Is Wailea cheaper than Kāʻanapali?',
        a: 'Same CORE band. The Saturday drive is planned into arrival. See /west-maui.',
      },
    ],
  },
  kauai: {
    h1: 'What a night costs on Kauaʻi.',
    title: 'What a night costs on Kauai | myCHEF',
    description:
      'Kauai starting prices from the rate card at inquiry: CORE $150–$250 a guest, Stay Chef from $1,100 a day, Date Night $650–$950. Both-shore travel prints. Distinct from /private-chef-cost.',
    lede:
      'USD. Line by line. CORE $150–$250 a guest — Maui-class. Stay Chef from $1,100 a day. Inquiry: a band is not a live Book-now button. Far-North inherits /hanalei-bridge.',
    kicker: 'Kauaʻi · Rate card',
    photo: 'pricingKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This page is the tariff at inquiry. Līhuʻe and Kapaʻa are base. Both shores are a published surcharge.`,
      'Princeville, Hanalei, Poʻipū. Bridge weather reschedules rather than forfeits — /hanalei-bridge. After the band: 20% service, GET up to 4.712%. The stack: /private-chef-cost.',
      'The inquiry form is /quote. We will not hold a fake roster.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is the stack, including both-shore travel. This page is the tariff.',
      },
      {
        q: 'Does a closed bridge change the band?',
        a: 'The food band holds. We reschedule. See /hanalei-bridge.',
      },
    ],
  },
  bigisland: {
    h1: 'What a night costs on the Big Island.',
    title: 'What a night costs on the Big Island | myCHEF',
    description:
      'Hawaiʻi Island starting prices from the rate card: CORE $150–$225 a guest, Stay Chef from $950 a day, ENTRY from $110. West side first. East side is a dedicated day. Distinct from /private-chef-cost.',
    lede:
      'USD. Line by line. CORE $150–$225 a guest. Stay Chef from $950 a day. West-side first. Hilo is not a west-side round trip.',
    kicker: 'Hawaiʻi Island · Rate card',
    photo: 'pricingBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) stay dinner doors. This page is the west-side tariff at inquiry.`,
      'Kona–Kohala is base. Waimea and Hāmākua are a surcharge. East side: /east-side. Ironman weeks change lodging, not a hidden fee — /ironman-weeks.',
      'After the band: 20% service, GET up to 4.712%. The stack: /private-chef-cost. The inquiry form: /quote.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is the stack, including east-side days. This page is the west-side tariff.',
      },
      {
        q: 'Is Hilo inside CORE?',
        a: 'No. East side is a dedicated day with its own travel line. See /east-side.',
      },
    ],
  },
};
