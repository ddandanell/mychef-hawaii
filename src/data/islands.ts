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
    hue: '#B34828',
    role: 'Resort-corridor villas and resident households — our scale island.',
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
    hue: '#C4A056',
    role: 'Luxury villa dining and wedding weeks — our primary island.',
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
    hue: '#2C5248',
    role: 'Princeville estates and Poʻipū retreats — a real bookable market.',
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
    hue: '#6B3A28',
    role: 'Kona and the Kohala Coast — west-side villas first.',
    basePath: '/bigisland',
    selectorImage: '/photos/kohala-grilled-whole-fish-lava-golden-hour.jpg',
    selectorCta: 'Private chef Big Island — from $125/pp',
    stateLabel: 'Booking now',
  },
};

export const islandOrder: IslandId[] = ['oahu', 'maui', 'kauai', 'bigisland'];
