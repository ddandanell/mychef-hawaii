import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /legal documents. Statewide GET and service-charge law stays the same.
 * Weather, travel, and kitchen clauses are island-specific.
 * Titles must not use money keywords.
 */

export interface IslandLegalPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  sections: { num: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const islandLegal: Record<IslandId, IslandLegalPage> = {
  oahu: {
    h1: 'Oahu booking notes — what prints on the quote, and what does not.',
    title: 'Oahu booking notes — quotes, GET, Gold Coast kitchens | myCHEF',
    description:
      'Oahu booking notes: written quote, 50% deposit, 20% service, GET up to 4.712%. Gold Coast kitchens are the product. Hotel suites without a cooktop are declined.',
    lede:
      'Statewide GET and service-charge law. Oahu kitchens, corridors, and North Shore travel are local. The written quote is the contract.',
    kicker: 'Oʻahu · Booking notes',
    photo: 'legalOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This page does not steal that title. It is how a Kahala night is held in writing.`,
      'Fee stack: /private-chef-cost. Tariff: /pricing. After you accept a total: /help/managing-booking.',
    ],
    sections: [
      {
        num: '01',
        title: 'Quotes & booking',
        body: 'Every Oahu booking is confirmed by an itemised written quote: menu price, staffing, North Shore travel if any, 20% service, GET. Indicative bands on /pricing are starting prices. The quote confirms the night. Kahala, Ko Olina, Kailua, and Waikīkī residences with kitchens are base.',
      },
      {
        num: '02',
        title: 'Deposits',
        body: 'Fifty percent locks the date after you accept the written total. Final balance 7–14 days before. Headcount lock 14–21 days. We do not hold a Gold Coast Saturday on a verbal yes.',
      },
      {
        num: '03',
        title: 'Cancellation & weather',
        body: 'Proposed tiers pending attorney review: 28+ days partial refund posture; 14–28 days deposit retained; under 7 days full balance posture. North Shore swell and road closures reschedule rather than forfeit, where safe. Hotel suites without a cooktop are declined before a deposit — /waikiki.',
      },
      {
        num: '04',
        title: 'Taxes (GET)',
        body: 'Hawaiʻi GET is a tax on our gross income. If passed on visibly, the maximum rate is 4.7120% including county surcharge — identical on all four islands, valid through December 31, 2030 — always its own line. We will never display the obsolete 4.166% figure.',
      },
      {
        num: '05',
        title: 'Service charge & gratuity',
        body: 'Where a service charge applies (20% is the market convention), Hawaiʻi law (HRS §481B-14 posture) requires it be distributed to employees as tip income or its retention clearly disclosed. Gratuity beyond that is always voluntary.',
      },
      {
        num: '06',
        title: 'Licensing, insurance & food safety',
        body: 'Operating structure, food-handler certification, and insurance certificates publish here when issued and verifiable. We do not display license numbers we do not hold. We do not invent Oahu guest reviews. See /what-we-dont-do.',
      },
      {
        num: '07',
        title: 'Privacy & accessibility',
        body: 'We collect only what the quote form asks, use it only to serve the enquiry, never sell it. Built to WCAG 2.2 AA.',
      },
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is how the stack prints. This page is the booking notes around it — kitchens, deposits, North Shore weather.',
      },
      {
        q: 'Waikīkī suite without a stove?',
        a: 'Declined before a deposit. See /waikiki.',
      },
    ],
  },
  maui: {
    h1: 'Maui booking notes — the tariff, the stack, West Maui timing.',
    title: 'Maui booking notes — quotes, GET, West Maui travel | myCHEF',
    description:
      'Maui booking notes: written quote, 50% deposit, 20% service, GET up to 4.712%. Saturday West Maui traffic is planned into arrival. Lahaina is a town, not a mystery fee.',
    lede:
      'Statewide GET and service-charge law. Maui shores, Upcountry travel, and Saturday West Maui timing are local. The written quote is the contract.',
    kicker: 'Maui · Booking notes',
    photo: 'legalMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This page does not steal that title.`,
      'West Maui: /west-maui. Lahaina: /lahaina. Fee stack: /private-chef-cost. Tariff: /pricing.',
    ],
    sections: [
      {
        num: '01',
        title: 'Quotes & booking',
        body: 'Every Maui booking is confirmed by an itemised written quote: menu price, staffing, Upcountry travel if any, 20% service, GET. Wailea, Kapalua, Kāʻanapali, and Makena are base. Saturday West Maui arrival is planned, not hidden.',
      },
      {
        num: '02',
        title: 'Deposits',
        body: 'Fifty percent locks the date after you accept the written total. Moving from Wailea to Lahaina after the deposit can change the travel line — write us. /lahaina is a different town.',
      },
      {
        num: '03',
        title: 'Cancellation & weather',
        body: 'Proposed tiers pending attorney review: 28+ days partial refund posture; 14–28 days deposit retained; under 7 days full balance posture. Wind and road closures reschedule rather than forfeit, where safe. Saturday traffic is not force majeure.',
      },
      {
        num: '04',
        title: 'Taxes (GET)',
        body: 'Hawaiʻi GET is a tax on our gross income. If passed on visibly, the maximum rate is 4.7120% including county surcharge — identical on all four islands, valid through December 31, 2030 — always its own line. We will never display the obsolete 4.166% figure.',
      },
      {
        num: '05',
        title: 'Service charge & gratuity',
        body: 'Where a service charge applies (20% is the market convention), Hawaiʻi law (HRS §481B-14 posture) requires it be distributed to employees as tip income or its retention clearly disclosed. Gratuity beyond that is always voluntary.',
      },
      {
        num: '06',
        title: 'Licensing, insurance & food safety',
        body: 'Certificates publish when issued and verifiable. We do not invent Maui guest reviews. See /what-we-dont-do.',
      },
      {
        num: '07',
        title: 'Privacy & accessibility',
        body: 'We collect only what the quote form asks, use it only to serve the enquiry, never sell it. Built to WCAG 2.2 AA.',
      },
    ],
    faqs: [
      {
        q: 'Is Saturday West Maui a cancellation?',
        a: 'No. We plan the drive. See /west-maui. Traffic is not force majeure.',
      },
      {
        q: 'Same as /pricing?',
        a: 'That page is the tariff. This page is the booking notes. The stack is /private-chef-cost.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai booking notes — inquiry hold, the bridge, GET as its own line.',
    title: 'Kauai booking notes — quotes, GET, Hanalei-bridge weather | myCHEF',
    description:
      'Kauai booking notes at inquiry: written quote when we can staff, 50% deposit, GET up to 4.712%. Hanalei-bridge closures reschedule rather than forfeit. We will not fake a live roster.',
    lede:
      'Statewide GET and service-charge law. Both shores and the Hanalei bridge are local. Inquiry: a band is not a Book-now button.',
    kicker: 'Kauaʻi · Booking notes',
    photo: 'legalKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This page does not steal that title. Inquiry stage.`,
      'Bridge: /hanalei-bridge. Fee stack: /private-chef-cost. Tariff: /pricing. Inquiry form: /quote.',
    ],
    sections: [
      {
        num: '01',
        title: 'Quotes & booking',
        body: 'Kauai is inquiry. When we can staff, the written quote itemises menu, staffing, both-shore travel, 20% service, GET. Līhuʻe and Kapaʻa are base. Princeville and Poʻipū print a zone line. The button is not Book now.',
      },
      {
        num: '02',
        title: 'Deposits',
        body: 'Fifty percent locks a staffed date after you accept the written total. We will not hold a fake roster. A closed Hanalei bridge does not forfeit the deposit — we reschedule.',
      },
      {
        num: '03',
        title: 'Cancellation & weather',
        body: 'Proposed tiers pending attorney review. Force-majeure includes Hanalei-bridge closures, flood advisories, and road closures — reschedule rather than forfeit, where safe. See /hanalei-bridge. Far-North events inherit 72-hour notice.',
      },
      {
        num: '04',
        title: 'Taxes (GET)',
        body: 'Hawaiʻi GET is a tax on our gross income. If passed on visibly, the maximum rate is 4.7120% including county surcharge — identical on all four islands, valid through December 31, 2030 — always its own line. We will never display the obsolete 4.166% figure.',
      },
      {
        num: '05',
        title: 'Service charge & gratuity',
        body: 'Where a service charge applies (20% is the market convention), Hawaiʻi law (HRS §481B-14 posture) requires it be distributed to employees as tip income or its retention clearly disclosed. Gratuity beyond that is always voluntary.',
      },
      {
        num: '06',
        title: 'Licensing, insurance & food safety',
        body: 'Certificates publish when issued and verifiable. We do not invent Kauai guest reviews or a now-serving line. See /what-we-dont-do.',
      },
      {
        num: '07',
        title: 'Privacy & accessibility',
        body: 'We collect only what the inquiry form asks, use it only to serve the enquiry, never sell it. Built to WCAG 2.2 AA.',
      },
    ],
    faqs: [
      {
        q: 'Road closed the morning of?',
        a: 'We reschedule. The deposit follows the night, not the calendar. See /hanalei-bridge.',
      },
      {
        q: 'Are you live on Kauaʻi?',
        a: 'Inquiry. We crew when we can staff. See /about.',
      },
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island booking notes — west-side quotes, east-side days.',
    title: 'Hawaiʻi Island booking notes — quotes, GET, east-side days | myCHEF',
    description:
      'Hawaiʻi Island booking notes at inquiry: written quote when we can staff, 50% deposit, GET up to 4.712%. West side first. East side is a dedicated day, never a west-side round trip.',
    lede:
      'Statewide GET and service-charge law. Kona–Kohala is base. Hilo is not implied. Inquiry: a band is not a Book-now button.',
    kicker: 'Hawaiʻi Island · Booking notes',
    photo: 'legalBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) stay dinner doors. This page is the booking notes.`,
      'East side: /east-side. Ironman weeks: /ironman-weeks. Fee stack: /private-chef-cost. Inquiry form: /quote.',
    ],
    sections: [
      {
        num: '01',
        title: 'Quotes & booking',
        body: 'Hawaiʻi Island is inquiry, west-side first. When we can staff, the written quote itemises menu, staffing, Waimea travel if any, 20% service, GET. Kona, Waikoloa, and Kohala are base. East side is a dedicated day — /east-side.',
      },
      {
        num: '02',
        title: 'Deposits',
        body: 'Fifty percent locks a staffed west-side date after you accept the written total. Adding a Hilo lunch after a Kona dinner is a second day, not a van ride. Write us.',
      },
      {
        num: '03',
        title: 'Cancellation & weather',
        body: 'Proposed tiers pending attorney review. Force-majeure includes west-side road closures and volcanic-air advisories that make the drive unsafe — reschedule rather than forfeit, where safe. Crossing the island is never squeezed into a west-side day.',
      },
      {
        num: '04',
        title: 'Taxes (GET)',
        body: 'Hawaiʻi GET is a tax on our gross income. If passed on visibly, the maximum rate is 4.7120% including county surcharge — identical on all four islands, valid through December 31, 2030 — always its own line. We will never display the obsolete 4.166% figure.',
      },
      {
        num: '05',
        title: 'Service charge & gratuity',
        body: 'Where a service charge applies (20% is the market convention), Hawaiʻi law (HRS §481B-14 posture) requires it be distributed to employees as tip income or its retention clearly disclosed. Gratuity beyond that is always voluntary.',
      },
      {
        num: '06',
        title: 'Licensing, insurance & food safety',
        body: 'Certificates publish when issued and verifiable. We do not invent Kona guest reviews or a now-serving line. Coffee origin claims stay honest — /coffee-act-198. See /what-we-dont-do.',
      },
      {
        num: '07',
        title: 'Privacy & accessibility',
        body: 'We collect only what the inquiry form asks, use it only to serve the enquiry, never sell it. Built to WCAG 2.2 AA.',
      },
    ],
    faqs: [
      {
        q: 'Can a Kona deposit cover a Hilo add-on?',
        a: 'Not the same day. See /east-side. We quote a dedicated crossing.',
      },
      {
        q: 'Are you live on the west side?',
        a: 'Inquiry. We crew when we can staff. See /about.',
      },
    ],
  },
};
