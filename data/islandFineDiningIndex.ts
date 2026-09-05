import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /fine-dining indexes. Distinct from nested /fine-dining/:course
 * pages, from /honeymoon-dinners, /omakase-at-home, and /chefs-table.
 * Not a Michelin claim. Titles must not use money keywords.
 */

export const islandFineDiningIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu villa formats — romantic, tasting, chef’s table, celebration.',
    title: 'Oahu in-villa formats — not a Michelin claim | myCHEF',
    description:
      'Oahu in-villa formats: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Halo posture, not a star. Distinct from /honeymoon-dinners.',
    lede:
      '/honeymoon-dinners is the published two-top SKU. /chefs-table is the villa table product. This page is the format list — still a house, still a written quote.',
    kicker: 'Oʻahu · Fine dining',
    photo: 'fineIndexOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. These URLs are formats so that title stays clean. We do not claim stars we do not have.`,
      'Kahala dining rooms and Ko Olina villas are the usual rooms. Gold Coast houses: /gold-coast. Sourcing is written on the menu or it is not claimed.',
    ],
    faqs: [
      {
        q: 'Same as a restaurant?',
        a: 'No. The table is the house. If you want a room you do not have, book a restaurant.',
      },
      {
        q: 'Same as honeymoon dinner?',
        a: 'The Kahala two-top SKU is /honeymoon-dinners. This list’s romantic-dinner URL is the night as a format — still a Gold Coast house, still a written quote.',
      },
    ],
  },
  maui: {
    h1: 'Maui villa formats — romantic, tasting, chef’s table, celebration.',
    title: 'Maui in-villa formats — Wailea rooms, not a star | myCHEF',
    description:
      'Maui in-villa formats: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Halo posture, not a star. Distinct from /honeymoon-dinners.',
    lede:
      '/honeymoon-dinners is the published two-top SKU. This page is the format list — Wailea rooms, West Maui lanais, still a written quote.',
    kicker: 'Maui · Fine dining',
    photo: 'fineIndexMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. These URLs are formats so that title stays clean. We do not claim stars we do not have.`,
      'Wailea and Kapalua dining rooms are the usual rooms. South Maui corridor: /south-maui. Sourcing is written on the menu or it is not claimed.',
    ],
    faqs: [
      {
        q: 'Same as a restaurant?',
        a: 'No. The table is the villa. If you want a room you do not have, book a restaurant.',
      },
      {
        q: 'Same as honeymoon dinner?',
        a: 'The Wailea two-top SKU is /honeymoon-dinners. This list’s romantic-dinner URL is the night as a format — still a villa, still a written quote.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai estate formats — romantic, tasting, chef’s table, at inquiry.',
    title: 'Kauai in-villa formats — inquiry, not a star | myCHEF',
    description:
      'Kauai in-villa formats at inquiry: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Not a Michelin claim. Not a Book-now button.',
    lede:
      '/honeymoon-dinners is the two-top SKU at inquiry. This page is the format list — both shores, when we can staff, not a fake roster.',
    kicker: 'Kauaʻi · Fine dining',
    photo: 'fineIndexKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. These URLs are formats so that title stays clean. Inquiry stage. We do not claim stars we do not have.`,
      'A named shore is not a confirmation. Hanalei-bridge weather is a clause — /hanalei-bridge. Send dates on /quote.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. These formats exist when we can staff. They are not a Book-now button.',
      },
      {
        q: 'Same as honeymoon dinner?',
        a: 'The two-top SKU at inquiry is /honeymoon-dinners. This list’s romantic-dinner URL is the night as a format — both shores, when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'Kohala villa formats — romantic, tasting, chef’s table, at inquiry.',
    title: 'West-side in-villa formats — inquiry, not a star | myCHEF',
    description:
      'Hawaiʻi Island west-side in-villa formats at inquiry. Distinct from /honeymoon-dinners, /chefs-table, and /east-side. Not a Michelin claim.',
    lede:
      '/honeymoon-dinners is the two-top SKU at inquiry. This page is the west-side format list — Kona to Kohala, Hilo never implied.',
    kicker: 'Hawaiʻi Island · Fine dining',
    photo: 'fineIndexBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. These URLs are formats so that title stays clean. West side first. We do not claim stars we do not have.`,
      'East side is a dedicated day — /east-side. Named Kaʻū and Kona coffee follow Act 198 — /coffee-act-198. Send dates on /quote.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. These are west-side villa formats — Kona to Kohala. Hilo is a dedicated east-side day on /east-side.',
      },
      {
        q: 'Same as honeymoon dinner?',
        a: 'The west-side two-top SKU is /honeymoon-dinners. This list’s romantic-dinner URL is the night as a format. Hilo is never implied.',
      },
    ],
  },
};
