import type { IslandId } from './islands';

/**
 * Canonical zone map — per-island base / surcharge / quote-only zones with
 * drive-time notes (design.md §3.2). No page may claim flat statewide
 * coverage; all logistics language renders from this object.
 */

export type ZoneClass = 'base' | 'surcharge' | 'quote-only';

export interface Zone {
  name: string;
  class: ZoneClass;
  /** Mono short code used on the diagram (A/B/C/D) */
  code: string;
  note: string;
  driveTime?: string;
  /** Surcharge values are always BDE-labeled */
  feeChip?: 'BDE';
}

export interface IslandZones {
  island: IslandId;
  headline: string;
  zones: Zone[];
  honestyLine: string;
}

export const zoneMap: Record<IslandId, IslandZones> = {
  oahu: {
    island: 'oahu',
    headline: 'Five corridors, drive times included.',
    zones: [
      { name: 'Waikīkī', class: 'base', code: 'A', note: 'Resort residences with kitchens — base zone; most hotel suites lack kitchens, we adapt.' },
      { name: 'Kahala / Gold Coast', class: 'base', code: 'A', note: 'Estate entertaining — base zone.' },
      { name: 'Ko Olina', class: 'base', code: 'A', note: "The island's deepest legal short-stay villa pool — base zone, west-side provisioning." },
      { name: 'Kailua / Lanikai', class: 'base', code: 'A', note: '30-day-estate market — built for multi-day packages, not one-off dinners.' },
      { name: 'North Shore / Turtle Bay', class: 'surcharge', code: 'B', note: 'Surcharge zone — 60–90+ min from town; surf-season dates book early.', driveTime: '60–90+ min', feeChip: 'BDE' },
    ],
    honestyLine: 'We schedule around the corridor — on-site before the rush, ~3 hours pre-service.',
  },
  maui: {
    island: 'maui',
    headline: 'Five areas, honestly zoned.',
    zones: [
      { name: 'Wailea', class: 'base', code: 'A', note: 'Resort-residence corridor — base zone.' },
      { name: 'Kāʻanapali', class: 'base', code: 'A', note: 'Base zone.' },
      { name: 'Kapalua', class: 'base', code: 'A', note: 'Base zone.' },
      { name: 'Makena', class: 'base', code: 'A', note: 'Base zone.' },
      { name: 'Upcountry', class: 'surcharge', code: 'B', note: 'Surcharge zone — elevation and drive time.', feeChip: 'BDE' },
      { name: 'Paia / Haiku (North Shore)', class: 'quote-only', code: 'C', note: 'Extended drive — quoted with the menu.' },
    ],
    honestyLine: 'Travel fees are published with your quote — never discovered on the invoice.',
  },
  kauai: {
    island: 'kauai',
    headline: 'We publish the driving fees. That’s the ad.',
    zones: [
      { name: 'Līhuʻe & Kapaʻa', class: 'base', code: 'A', note: 'Base zone — included.' },
      { name: 'Princeville / Hanalei & Poʻipū', class: 'surcharge', code: 'B', note: 'Published surcharge.', feeChip: 'BDE' },
      { name: 'Haʻena & the far North', class: 'quote-only', code: 'C', note: 'Quote-only with 72-hour notice and a Hanalei-bridge weather clause — road closures reschedule rather than forfeit.', driveTime: '72-hr notice' },
    ],
    honestyLine: 'Incumbent norm: flat $50–$75/day driving fee (competitor-published, labeled). We think zone pricing should be a map, not a surprise.',
  },
  bigisland: {
    island: 'bigisland',
    headline: 'Four zones, published before we launch.',
    zones: [
      { name: 'Kona–Kohala corridor', class: 'base', code: 'A', note: 'Base zone — Kailua-Kona, Keauhou, Kohala resorts, Waikōloa.' },
      { name: 'Waimea / Hāmākua', class: 'surcharge', code: 'B', note: 'Surcharge zone.', feeChip: 'BDE' },
      { name: 'Kaʻū / South', class: 'surcharge', code: 'C', note: 'Extended surcharge, advance notice.', feeChip: 'BDE' },
      { name: 'Hilo / Volcano (east side)', class: 'quote-only', code: 'D', note: 'Quote-only — 2.5–3 hours from the west side; quoted with dedicated staffing, never squeezed into a west-side day.', driveTime: '2.5–3 hrs' },
    ],
    honestyLine: 'A same-day Kona–Hilo round trip is a logistics fantasy. We publish that instead of discovering it on your event night.',
  },
};
