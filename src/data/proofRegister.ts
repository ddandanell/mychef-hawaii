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
    claim: 'Hawaiʻi guest reviews: none yet. They publish after verified events — never bought, never invented.',
    status: 'NOT_AVAILABLE',
    label: 'NOT AVAILABLE — YET',
  },
  {
    claim: "Hawaiʻi client reviews: none yet. They'll publish here after verified events — never bought, never incentivized.",
    status: 'NOT_AVAILABLE',
    label: 'NOT AVAILABLE — BY DESIGN',
  },
  {
    claim: 'Starting prices are published. Your written quote is the confirmed, itemised total.',
    status: 'VERIFIED',
    label: 'PUBLISHED — STARTING PRICES',
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
