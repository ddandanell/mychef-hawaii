/**
 * Canonical proof register — every proof claim on the site renders from
 * this object with a visible status label (design.md §3.3). This is the
 * honesty system: no unlabeled claim ships.
 */

export type ProofStatus = 'VERIFIED' | 'PENDING' | 'NOT_AVAILABLE' | 'PROHIBITED';

export interface ProofClaim {
  claim: string;
  status: ProofStatus;
  /** Full chip label, e.g. "VERIFIED — INTERNATIONAL" */
  label: string;
}

export const proofRegister: ProofClaim[] = [
  {
    claim: 'Operating internationally since 2015 — Bali, Dubai, Cape Town.',
    status: 'VERIFIED',
    label: 'VERIFIED — INTERNATIONAL',
  },
  {
    claim: "Hawaiʻi client reviews: none yet. They'll publish here after verified events — never bought, never incentivized.",
    status: 'NOT_AVAILABLE',
    label: 'NOT AVAILABLE — BY DESIGN',
  },
  {
    claim: 'Every price on this site is labeled planning orientation until our rate card is approved.',
    status: 'PENDING',
    label: 'BUSINESS DECISION REQUIRED',
  },
  {
    claim: 'Hawaiʻi operating history, local awards or local press.',
    status: 'PROHIBITED',
    label: 'PROHIBITED — LAUNCH GATE',
  },
  {
    claim: 'Named farm and producer relationships (printed only with written verification).',
    status: 'PENDING',
    label: 'PENDING — WRITTEN VERIFICATION',
  },
  {
    claim: 'Every fee on your quote itemised — service charge, GET, zone fees.',
    status: 'VERIFIED',
    label: 'VERIFIED — POLICY',
  },
];

/** Homepage trust-strip rows (home.md §4), order preserved. */
export const homeTrustRows: ProofClaim[] = [
  proofRegister[0],
  proofRegister[1],
  proofRegister[2],
];
