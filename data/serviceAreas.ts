import type { IslandId } from './islands';
import { islandOrder } from './islands';

/** Corridors we cook — anchors on the island home, not doorway URLs. */
export interface Corridor {
  id: string;
  name: string;
}

export interface IslandServiceArea {
  island: IslandId;
  /** Lean coverage sentence. No street, suite, or phone. */
  line: string;
  corridors: Corridor[];
}

export const SERVICE_AREAS: Record<IslandId, IslandServiceArea> = {
  oahu: {
    island: 'oahu',
    line: 'We cook in Waikīkī resort residences, Kahala / Gold Coast, Ko Olina, Kailua–Lanikai, and North Shore / Turtle Bay (travel fee on North Shore).',
    corridors: [
      { id: 'waikiki', name: 'Waikīkī resort residences' },
      { id: 'kahala', name: 'Kahala / Gold Coast' },
      { id: 'ko-olina', name: 'Ko Olina' },
      { id: 'kailua-lanikai', name: 'Kailua–Lanikai' },
      { id: 'north-shore', name: 'North Shore / Turtle Bay' },
    ],
  },
  maui: {
    island: 'maui',
    line: 'Wailea, Kāʻanapali, Kapalua, Makena; Upcountry quoted.',
    corridors: [
      { id: 'wailea', name: 'Wailea' },
      { id: 'kaanapali', name: 'Kāʻanapali' },
      { id: 'kapalua', name: 'Kapalua' },
      { id: 'makena', name: 'Makena' },
      { id: 'upcountry', name: 'Upcountry (quoted)' },
    ],
  },
  kauai: {
    island: 'kauai',
    line: 'North Shore (Princeville, Hanalei) and South Shore (Poipū); inquiry.',
    corridors: [
      { id: 'north-shore', name: 'North Shore — Princeville, Hanalei' },
      { id: 'south-shore', name: 'South Shore — Poipū' },
    ],
  },
  bigisland: {
    island: 'bigisland',
    line: 'Kona–Kohala first; east side quoted; inquiry.',
    corridors: [
      { id: 'kona-kohala', name: 'Kona–Kohala' },
      { id: 'east-side', name: 'East side (quoted)' },
    ],
  },
};

export const SERVICE_AREA_ORDER = islandOrder;

export const LOCATIONS_LEDE =
  'We cook in the guest’s villa. This is a service-area kitchen, not a storefront — no published street office.';
