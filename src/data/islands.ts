export type IslandId = 'oahu' | 'maui' | 'bigisland' | 'kauai';
export type IslandState = 'live' | 'inquiry';

export interface IslandMeta {
  id: IslandId;
  /** Display name with correct diacritics */
  name: string;
  /** Short name used in switchers */
  shortName: string;
  state: IslandState;
  /** Island identity hue (small accents only) */
  hue: string;
  role: string;
  basePath: string;
  selectorImage: string;
  selectorCta: string;
  stateLabel: string;
}

export const islands: Record<IslandId, IslandMeta> = {
  oahu: {
    id: 'oahu',
    name: 'Oʻahu',
    shortName: 'Oʻahu',
    state: 'live',
    hue: '#6E7C86',
    role: 'Oahu catering and private chef Oahu. Honolulu to Ko Olina.',
    basePath: '/oahu',
    selectorImage: '/photos/oahu-villa-lanai-plated-dinner-dusk.jpg',
    selectorCta: 'Private chef Oahu — from $125/pp',
    stateLabel: 'Booking now',
  },
  maui: {
    id: 'maui',
    name: 'Maui',
    shortName: 'Maui',
    state: 'live',
    hue: '#9A6B4A',
    role: 'Private chef Maui and Maui catering. Wailea to West Maui.',
    basePath: '/maui',
    selectorImage: '/photos/maui-wailea-kitchen-plating.jpg',
    selectorCta: 'Private chef Maui — from $150/pp',
    stateLabel: 'Booking now',
  },
  kauai: {
    id: 'kauai',
    name: 'Kauaʻi',
    shortName: 'Kauaʻi',
    state: 'live',
    hue: '#4F5E52',
    role: 'Private chef and Kauai catering. Princeville, Poʻipū, Hanalei.',
    basePath: '/kauai',
    selectorImage: '/photos/kauai-chef-plating-seared-fish-mountains.jpg',
    selectorCta: 'Private chef Kauai — from $150/pp',
    stateLabel: 'Booking now',
  },
  bigisland: {
    id: 'bigisland',
    name: 'Hawaiʻi Island',
    shortName: 'Hawaiʻi Island',
    state: 'live',
    hue: '#5A4034',
    role: 'Kona and the Kohala Coast — west-side villas first.',
    basePath: '/bigisland',
    selectorImage: '/photos/kohala-grilled-whole-fish-lava-golden-hour.jpg',
    selectorCta: 'Private chef Big Island — from $125/pp',
    stateLabel: 'Booking now',
  },
};

export const islandOrder: IslandId[] = ['oahu', 'maui', 'kauai', 'bigisland'];
