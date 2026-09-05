import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog /private-chef-cost — fee-stack explainer, not the rate-card page.
 * Must not steal /pricing titles (“What a night costs on …”) or money keywords.
 */

export const feeStackPages: Record<IslandId, UniqueCell> = {
  oahu: {
    slug: 'private-chef-cost',
    name: 'Fee stack',
    h1: 'Oahu fee stack — what prints after the dinner band.',
    title: 'Oahu fee stack — service, GET, travel | myCHEF',
    description:
      'How an Oahu quote is stacked: CORE $125–$190 a guest, Stay Chef from $850 a day, 20% service, GET up to 4.712%, travel outside published corridors. Distinct from /pricing.',
    lede:
      '/pricing is the tariff. This URL is the stack: food band, service, GET, travel, deposit. Kahala and Ko Olina are base. North Shore is a published surcharge.',
    photo: 'svcCostOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This page does not steal that title. CORE is $125–$190 a guest. Stay Chef from $850 a day, groceries at cost. Date night from $450 as a fixed event.`,
      'Every written quote adds 20% service and Hawaiʻi GET up to 4.712% as their own lines — once. Fifty percent locks the date. Gratuity is voluntary. North Shore travel is a published zone line; Kahala, Ko Olina, Kailua, and Waikīkī residences with kitchens are base.',
      'The card itself is /pricing. After you accept a total: /help/managing-booking. First booking: /help/getting-started.',
    ],
    faqs: [
      {
        q: 'Same as /pricing?',
        a: 'That page is the rate card. This page is how service, GET, travel, and deposit print after the band.',
      },
      {
        q: 'Is travel folded into CORE?',
        a: 'No. Base corridors are included. North Shore is a published surcharge. See /coverage.',
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/help/managing-booking', label: 'After the quote' },
      { path: '/coverage', label: 'Coverage' },
    ],
  },
  maui: {
    slug: 'private-chef-cost',
    name: 'Fee stack',
    h1: 'Maui fee stack — what prints after the Wailea dinner band.',
    title: 'Maui fee stack — service, GET, West Maui travel | myCHEF',
    description:
      'How a Maui quote is stacked: CORE $150–$250 a guest, Stay Chef from $1,050 a day, 20% service, GET up to 4.712%, Upcountry and West Maui travel as their own lines. Distinct from /pricing.',
    lede:
      '/pricing is the tariff. This URL is the stack. Wailea, Kapalua, Kāʻanapali, and Makena are base. Upcountry is a published surcharge. Saturday West Maui traffic is planned, not hidden.',
    photo: 'svcCostMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. Private chef Maui cost is a related search (${SEARCH_VOLUMES['private chef maui cost']} monthly) — we do not invent a second volume. CORE is $150–$250 a guest. Stay Chef from $1,050 a day, groceries at cost.`,
      'Every written quote adds 20% service and GET up to 4.712% as their own lines. Fifty percent locks the date. Gratuity is voluntary. Upcountry from $75 as a zone line. West Maui timing: /west-maui. Lahaina is a town — /lahaina — not a mystery hospitality fee.',
      'The card itself is /pricing. After you accept a total: /help/managing-booking.',
    ],
    faqs: [
      {
        q: 'Same as /pricing?',
        a: 'That page is the rate card. This page is how service, GET, and travel print after the band.',
      },
      {
        q: 'Is West Maui a surcharge?',
        a: 'Kāʻanapali, Lahaina, and Kapalua are base. The Saturday drive is planned into arrival. Upcountry is the published surcharge. See /coverage.',
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/west-maui', label: 'West Maui' },
      { path: '/help/managing-booking', label: 'After the quote' },
    ],
  },
  kauai: {
    slug: 'private-chef-cost',
    name: 'Fee stack',
    h1: 'Kauai fee stack — what prints after the inquiry dinner band.',
    title: 'Kauai fee stack — service, GET, both-shore travel | myCHEF',
    description:
      'How a Kauai quote is stacked at inquiry: CORE $150–$250 a guest, Stay Chef from $1,100 a day, 20% service, GET up to 4.712%, both-shore travel. Distinct from /pricing.',
    lede:
      '/pricing is the tariff. This URL is the stack. Līhuʻe and Kapaʻa are base. Both shores are a published surcharge. Far-North inherits /hanalei-bridge. Inquiry.',
    photo: 'svcCostKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This page does not steal that title. CORE is $150–$250 a guest. Stay Chef from $1,100 a day, groceries at cost. Date night $650–$950 as a fixed event.`,
      'Every written quote adds 20% service and GET up to 4.712% as their own lines. Fifty percent locks a staffed date. Gratuity is voluntary. Princeville and Poʻipū travel prints. Hāʻena is quote-only with the bridge clause — /hanalei-bridge.',
      'The card itself is /pricing. Inquiry: we will not hold a fake roster. After a written total: /help/managing-booking.',
    ],
    faqs: [
      {
        q: 'Same as /pricing?',
        a: 'That page is the rate card. This page is how service, GET, and both-shore travel print after the band.',
      },
      {
        q: 'Does a closed bridge forfeit the deposit?',
        a: 'No. We reschedule. See /hanalei-bridge.',
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      { path: '/help/managing-booking', label: 'After the quote' },
    ],
  },
  bigisland: {
    slug: 'private-chef-cost',
    name: 'Fee stack',
    h1: 'Hawaiʻi Island fee stack — what prints after the west-side dinner band.',
    title: 'Hawaiʻi Island fee stack — service, GET, west-side travel | myCHEF',
    description:
      'How a Hawaiʻi Island quote is stacked: CORE $150–$225 a guest, Stay Chef from $950 a day, 20% service, GET up to 4.712%, west-side travel. East side is a dedicated day. Distinct from /pricing.',
    lede:
      '/pricing is the tariff. This URL is the stack. Kona–Kohala is base. Waimea and Hāmākua are a surcharge. East side is not a west-side round trip.',
    photo: 'svcCostBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) stay dinner doors. Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. CORE is $150–$225 a guest. Stay Chef from $950 a day, groceries at cost.`,
      'Every written quote adds 20% service and GET up to 4.712% as their own lines. Fifty percent locks a staffed west-side date. Gratuity is voluntary. East side: /east-side. Ironman weeks change lodging, not a hidden fee — /ironman-weeks.',
      'The card itself is /pricing. Inquiry. After a written total: /help/managing-booking.',
    ],
    faqs: [
      {
        q: 'Same as /pricing?',
        a: 'That page is the rate card. This page is how service, GET, and west-side travel print after the band.',
      },
      {
        q: 'Is Hilo in the CORE band?',
        a: 'No. East side is a dedicated day with its own travel line. See /east-side.',
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/east-side', label: 'East side' },
      { path: '/help/managing-booking', label: 'After the quote' },
    ],
  },
};

export const feeStackList: Record<IslandId, UniqueCell[]> = {
  oahu: [feeStackPages.oahu],
  maui: [feeStackPages.maui],
  kauai: [feeStackPages.kauai],
  bigisland: [feeStackPages.bigisland],
};
