import type { IslandId } from './islands';

/**
 * Canonical rate card — the single source of truth for every price band
 * shown anywhere on the site (anti-drift rule, design.md §3.1).
 *
 * Every record carries status 'BDE': figures are indicative planning
 * orientation pending final rate-card approval and must always render
 * with a BUSINESS DECISION REQUIRED chip adjacent.
 */

export type RateTier = 'ENTRY' | 'CORE' | 'PREMIUM' | 'ULTRA';
export type RateOffer =
  | 'signature-dinner'
  | 'dinner-for-two'
  | 'wedding'
  | 'vacation-chef'
  | 'weekly-meal-prep'
  | 'event-staffing'
  | 'travel-beyond-base';

export interface RateCardEntry {
  island: IslandId;
  offer: RateOffer;
  tier: RateTier;
  /** Per-person band in USD: [low, high]. `highPlus` flags an open-ended top (e.g. "$275–$400+"). */
  band: [number, number];
  highPlus?: boolean;
  /** Pricing model note, e.g. "per-person + minimum spend" */
  model: string;
  minimumParty: number;
  minimumSpendNote: string;
  status: 'BDE';
}

const PER_PERSON = 'per-person + minimum spend';
const MIN_PARTY = 'Minimum party 6 · neighbor-island ENTRY 8+';

export const rateCard: RateCardEntry[] = [
  // Oʻahu (live) — signature in-villa dinner tiers
  { island: 'oahu', offer: 'signature-dinner', tier: 'ENTRY', band: [95, 125], model: PER_PERSON, minimumParty: 8, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'oahu', offer: 'signature-dinner', tier: 'CORE', band: [125, 190], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'oahu', offer: 'signature-dinner', tier: 'PREMIUM', band: [190, 275], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'oahu', offer: 'signature-dinner', tier: 'ULTRA', band: [275, 400], highPlus: true, model: "per-person · chef's-table halo, quoted manually", minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },

  // Maui (live) — signature in-villa dinner tiers
  { island: 'maui', offer: 'signature-dinner', tier: 'ENTRY', band: [125, 150], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'maui', offer: 'signature-dinner', tier: 'CORE', band: [150, 250], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'maui', offer: 'signature-dinner', tier: 'PREMIUM', band: [250, 350], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'maui', offer: 'signature-dinner', tier: 'ULTRA', band: [300, 450], highPlus: true, model: 'per-person · private chef\'s table', minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },

  // Hawaiʻi Island (inquiry) — activates at launch
  { island: 'bigisland', offer: 'signature-dinner', tier: 'ENTRY', band: [110, 140], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'bigisland', offer: 'signature-dinner', tier: 'CORE', band: [150, 225], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'bigisland', offer: 'signature-dinner', tier: 'PREMIUM', band: [225, 325], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'bigisland', offer: 'signature-dinner', tier: 'ULTRA', band: [325, 325], highPlus: true, model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },

  // Kauaʻi (inquiry) — activates at launch
  { island: 'kauai', offer: 'signature-dinner', tier: 'ENTRY', band: [120, 150], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'kauai', offer: 'signature-dinner', tier: 'CORE', band: [175, 250], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'kauai', offer: 'signature-dinner', tier: 'PREMIUM', band: [250, 350], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
  { island: 'kauai', offer: 'signature-dinner', tier: 'ULTRA', band: [350, 350], highPlus: true, model: 'per-person · North Shore estate product', minimumParty: 6, minimumSpendNote: MIN_PARTY, status: 'BDE' },
];

export interface OtherOffer {
  offer: string;
  model: string;
  orientation: string;
  status: 'BDE';
}

/** Beyond-the-dinner pricing models (pricing.md §3). All labeled, competitor-sourced where noted. */
export const otherOffers: OtherOffer[] = [
  { offer: 'Dinner for two / elopement', model: 'Fixed per event', orientation: 'from $500+ Maui posture · $650–$950 Kauaʻi architecture', status: 'BDE' },
  { offer: 'Wedding reception / wedding week', model: 'Per-person + staffing', orientation: 'band per island tier + hourly staffing', status: 'BDE' },
  { offer: 'Vacation chef / multi-day', model: 'Per person per day + groceries at cost', orientation: '$179–$300+/pp/day verified market envelope — competitor-labeled', status: 'BDE' },
  { offer: 'Weekly meal prep (kamaʻāina line)', model: 'Fixed weekly + groceries', orientation: '$300–$1,200/week national structure — labeled', status: 'BDE' },
  { offer: 'Event staffing', model: 'Hourly, 4–5 hr minimums', orientation: '$55/hr server · $75/hr sous-chef — retail convention, labeled', status: 'BDE' },
  { offer: 'Travel beyond base zone', model: 'Published zone surcharge', orientation: 'Kauaʻi incumbent precedent $50–$75/day — competitor-labeled; our rates', status: 'BDE' },
];

export interface FeeStackRow {
  label: string;
  chip: 'BDE' | 'RPR — ATTORNEY' | 'RPR — CPA' | 'RPR' | 'VERIFIED — POLICY';
}

/** The canonical fee stack (pricing.md §4). */
export const feeStack: FeeStackRow[] = [
  { label: 'Menu price (per-person or fixed)', chip: 'BDE' },
  { label: 'Service charge — 20% market convention; distributed to staff or disclosed in writing (HRS §481B-14 posture)', chip: 'RPR — ATTORNEY' },
  { label: 'GET — up to 4.7120% incl. county surcharge, shown as its own line, valid through Dec 31, 2030', chip: 'RPR — CPA' },
  { label: 'Booking deposit — 50% market norm, locks your date', chip: 'RPR' },
  { label: 'Travel zone fee — only outside base zones, published per island', chip: 'BDE' },
  { label: 'Gratuity — always voluntary, never hidden in the bill', chip: 'VERIFIED — POLICY' },
];

export function getTiers(island: IslandId, offer: RateOffer = 'signature-dinner'): RateCardEntry[] {
  return rateCard.filter((e) => e.island === island && e.offer === offer);
}

export function formatBand(entry: RateCardEntry): string {
  if (entry.highPlus && entry.band[0] === entry.band[1]) return `$${entry.band[0]}+`;
  return `$${entry.band[0]}–$${entry.band[1]}${entry.highPlus ? '+' : ''}`;
}
