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
    selectorCta: 'Enter the Oʻahu site',
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
    selectorCta: 'Enter the Maui site',
    stateLabel: 'Booking now',
  },
  kauai: {
    id: 'kauai',
    name: 'Kauaʻi',
    shortName: 'Kauaʻi',
    state: 'inquiry',
    hue: '#2C5248',
    role: 'North Shore estates and South Shore retreats.',
    basePath: '/kauai',
    selectorImage: '/photos/kauai-chef-plating-seared-fish-mountains.jpg',
    selectorCta: 'Enter the Kauaʻi site',
    stateLabel: 'Inquiry stage',
  },
  bigisland: {
    id: 'bigisland',
    name: 'Hawaiʻi Island',
    shortName: 'Hawaiʻi Island',
    state: 'inquiry',
    hue: '#6B3A28',
    role: 'The Kohala Coast corridor — Kona side first.',
    basePath: '/bigisland',
    selectorImage: '/photos/kohala-grilled-whole-fish-lava-golden-hour.jpg',
    selectorCta: 'Enter the Hawaiʻi Island site',
    stateLabel: 'Inquiry stage',
  },
};

export const islandOrder: IslandId[] = ['oahu', 'maui', 'kauai', 'bigisland'];
