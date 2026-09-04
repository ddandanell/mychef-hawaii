import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog /personal-chef — resident household line, not the tourist dinner door.
 * Must not steal /private-chef titles or “private chef {island}” money keywords.
 * Oʻahu already has /kamaaina; this page is the Honolulu household phrasing beside it.
 */

export const residentLine: Record<IslandId, UniqueCell> = {
  oahu: {
    slug: 'personal-chef',
    name: 'Personal chef',
    h1: 'Honolulu school-night households — not a villa one-off.',
    title: 'Honolulu school-night households — not a villa one-off | myCHEF',
    description:
      'Weekly household cooking for Honolulu and Kailua residents. Distinct from /kamaaina and from the tourist dinner door. Personal chef Honolulu is a measured phrase; it does not unlock a villa SKU.',
    lede:
      'A used fridge. School nights. /kamaaina is the resident frequency line. This URL is the Honolulu household phrasing so /private-chef keeps the visitor dinner.',
    photo: 'svcPersonalOahu',
    body: [
      `Personal chef Honolulu is measured (${SEARCH_VOLUMES['personal chef honolulu']} monthly). Personal chef Oahu is ${SEARCH_VOLUMES['personal chef oahu']}. Neither belongs in a tourist-dinner title. Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home.`,
      'Kamaʻāina weekly service: /kamaaina. Stay Chef weeks for visitors: /vacation-chef. This page is the Honolulu household so those titles do not collide.',
    ],
    faqs: [
      {
        q: 'Same as /kamaaina?',
        a: 'That page is the resident frequency product. This page is the Honolulu household phrasing. Visitors open / or /vacation-chef.',
      },
      {
        q: 'Same as /private-chef?',
        a: 'That door is the visitor dinner. This URL is weekly household cooking.',
      },
    ],
    related: [
      { path: '/kamaaina', label: 'Kamaʻāina line' },
      { path: '/vacation-chef', label: 'Vacation chef' },
      { path: '/private-chef', label: 'Visitor dinner' },
    ],
  },
  maui: {
    slug: 'personal-chef',
    name: 'Personal chef',
    h1: 'Maui resident household cooking — weekly, not a Wailea SKU.',
    title: 'Maui resident household cooking — weekly, not a Wailea SKU | myCHEF',
    description:
      'Weekly household cooking for Maui residents. Not a visitor dinner. Personal chef Maui is a measured phrase with low volume; it does not steal the private-chef door.',
    lede:
      'A Kīhei fridge that actually gets used. Not a Wailea one-off dressed up as local. Visitors open / or /vacation-chef.',
    photo: 'svcPersonalMaui',
    body: [
      `Personal chef Maui is measured (${SEARCH_VOLUMES['personal chef maui']} monthly). Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This URL is the resident line.`,
      'Stay Chef weeks for visitors: /vacation-chef. South Maui logistics: /south-maui. We do not sell this as yield.',
    ],
    faqs: [
      {
        q: 'I am visiting Wailea for a week.',
        a: 'Open / or /vacation-chef. This page is residents.',
      },
      {
        q: 'Upcountry household?',
        a: 'Surcharge zone even for dinners. See /coverage. Resident weekly is still quoted, not assumed.',
      },
    ],
    related: [
      { path: '/vacation-chef', label: 'Vacation chef' },
      { path: '/south-maui', label: 'South Maui' },
      { path: '/private-chef', label: 'Visitor dinner' },
    ],
  },
  kauai: {
    slug: 'personal-chef',
    name: 'Personal chef',
    h1: 'Kauai resident household cooking — inquiry, both shores.',
    title: 'Kauai resident household cooking — inquiry, both shores | myCHEF',
    description:
      'Weekly household cooking for Kauai residents. Inquiry stage. Not a visitor dinner. Not the private-chef keyword.',
    lede:
      'East-side Kapaʻa weeknights, or a South Shore household. Inquiry. Visitors open / or /vacation-chef. We will not fake a live resident roster.',
    photo: 'svcPersonalKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This URL is the resident line. Inquiry stage.`,
      'Stay Chef for visitors: /vacation-chef. Kapaʻa: /kapaa. Far-North households still inherit /hanalei-bridge.',
    ],
    faqs: [
      {
        q: 'I am visiting Princeville.',
        a: 'Open / or /vacation-chef. This page is residents. Inquiry.',
      },
      {
        q: 'Can I start weekly service this month?',
        a: 'Join the inquiry. We will not fake a live roster.',
      },
    ],
    related: [
      { path: '/vacation-chef', label: 'Vacation chef' },
      { path: '/kapaa', label: 'Kapaʻa' },
      { path: '/private-chef', label: 'Visitor dinner' },
    ],
  },
  bigisland: {
    slug: 'personal-chef',
    name: 'Personal chef',
    h1: 'Hawaiʻi Island resident household cooking — west side, inquiry.',
    title: 'Hawaiʻi Island resident household cooking — west side | myCHEF',
    description:
      'Weekly household cooking for Kona-side residents. Inquiry stage. Not a Waikoloa tourist SKU. East side is a different day. Not the private-chef keyword.',
    lede:
      'A Kona town fridge. Weeknights. Not a resort villa one-off. Visitors open / or /vacation-chef. East side is not implied.',
    photo: 'svcPersonalBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) stay dinner doors. This URL is the resident line.`,
      'Stay Chef for visitors: /vacation-chef. West-side: /kohala-corridor. East side: /east-side. Inquiry stage.',
    ],
    faqs: [
      {
        q: 'I am visiting Waikoloa.',
        a: 'Open / or /vacation-chef. This page is residents.',
      },
      {
        q: 'Hilo household weekly?',
        a: 'Quote-only east side. See /east-side. Not a west-side round trip.',
      },
    ],
    related: [
      { path: '/vacation-chef', label: 'Vacation chef' },
      { path: '/kohala-corridor', label: 'West-side radius' },
      { path: '/east-side', label: 'East side' },
    ],
  },
};

export const residentLineList: Record<IslandId, UniqueCell[]> = {
  oahu: [residentLine.oahu],
  maui: [residentLine.maui],
  kauai: [residentLine.kauai],
  bigisland: [residentLine.bigisland],
};
