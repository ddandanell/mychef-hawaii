import type { IslandId } from './islands';
import type { PhotoKey } from './photos';

/**
 * Island /thank-you documents. noindex. Still unique per host so the
 * confirmation is not a cloned mahalo page.
 */

export interface IslandThanksPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  next: { path: string; label: string }[];
}

export const islandThanks: Record<IslandId, IslandThanksPage> = {
  oahu: {
    h1: 'We’ve got the Oahu enquiry.',
    title: 'Oahu enquiry received | myCHEF',
    description: 'The Oahu coordinator has the corridor, the kitchen note, and the dates. Reply in Hawaii business hours.',
    lede:
      'A coordinator reads the five fields in HST. Kahala, Ko Olina, Kailua, Waikīkī residences with kitchens, North Shore — we write back. No payment yet.',
    kicker: 'Oʻahu · Enquiry received',
    photo: 'thanksOahu',
    next: [
      { path: '/help/getting-started', label: 'First-booking checklist' },
      { path: '/pricing', label: 'Oahu rate card' },
      { path: '/private-chef-cost', label: 'Fee stack' },
      { path: '/how-it-works', label: 'How a night runs' },
    ],
  },
  maui: {
    h1: 'We’ve got the Maui enquiry.',
    title: 'Maui enquiry received | myCHEF',
    description: 'The Maui coordinator has the shore, the kitchen note, and the dates. Saturday West Maui traffic is planned into the reply.',
    lede:
      'A coordinator reads the five fields in HST. Wailea, West Maui, Kīhei — we write back. Lahaina is a town on the quote, not a surprise. No payment yet.',
    kicker: 'Maui · Enquiry received',
    photo: 'thanksMaui',
    next: [
      { path: '/help/getting-started', label: 'First-booking checklist' },
      { path: '/west-maui', label: 'West Maui timing' },
      { path: '/pricing', label: 'Maui rate card' },
      { path: '/private-chef-cost', label: 'Fee stack' },
    ],
  },
  kauai: {
    h1: 'The Kauai inquiry is in.',
    title: 'Kauai inquiry received | myCHEF',
    description: 'The Kauai inquiry list has the shore and the dates. We write back with what we can staff. Hanalei-bridge weather is a clause.',
    lede:
      'Inquiry, not Book now. We log the shore and write back. Closures on the Hanalei bridge reschedule rather than forfeit. No payment yet.',
    kicker: 'Kauaʻi · Inquiry received',
    photo: 'thanksKauai',
    next: [
      { path: '/help/getting-started', label: 'First-booking checklist' },
      { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      { path: '/pricing', label: 'Kauai rate card' },
      { path: '/quote', label: 'Inquiry form' },
    ],
  },
  bigisland: {
    h1: 'The west-side inquiry is in.',
    title: 'Hawaiʻi Island inquiry received | myCHEF',
    description: 'The west-side inquiry list has the address and the dates. East side is a different day. We write back with what we can staff.',
    lede:
      'Inquiry, west-side first. We log the Kona–Kohala address. Hilo is not implied. No payment yet.',
    kicker: 'Hawaiʻi Island · Inquiry received',
    photo: 'thanksBigisland',
    next: [
      { path: '/help/getting-started', label: 'First-booking checklist' },
      { path: '/east-side', label: 'East side' },
      { path: '/pricing', label: 'West-side rate card' },
      { path: '/quote', label: 'Inquiry form' },
    ],
  },
};
