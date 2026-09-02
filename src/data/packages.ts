import type { IslandId } from './islands';
import {
  formatFrom,
  formatIslandAmount,
  getDayRate,
  getOtherOffer,
  getTiers,
} from './rateCard';

export type PackageId = 'date-night' | 'family-feast' | 'celebration' | 'stay-chef' | 'wedding-week';

export interface NamedPackage {
  id: PackageId;
  name: string;
  guests: string;
  blurb: string;
  path: string;
  price: (island: IslandId) => string;
}

function coreFrom(island: IslandId): number {
  return getTiers(island).find((t) => t.tier === 'CORE')?.band[0] ?? 125;
}

export const namedPackages: NamedPackage[] = [
  {
    id: 'date-night',
    name: 'Date Night',
    guests: '2 guests',
    blurb: 'Ahi poke, fresh catch, lilikoi dessert — cooked in your villa kitchen. Cleanup included.',
    path: '/private-chef',
    price: (island) => {
      const o = getOtherOffer('dinner-for-two').byIsland[island];
      return `${formatIslandAmount(o)}`;
    },
  },
  {
    id: 'family-feast',
    name: 'Family Feast',
    guests: '6–8 guests',
    blurb: 'The weeknight-in-a-villa dinner. Shared plates, kids’ plates on request, one chef team.',
    path: '/private-chef',
    price: (island) => `${formatFrom(coreFrom(island))} / person`,
  },
  {
    id: 'celebration',
    name: 'Celebration',
    guests: '8–12 guests',
    blurb: 'Birthdays, welcome dinners, the night you actually remember. Coursed or family-style.',
    path: '/catering',
    price: (island) => `${formatFrom(coreFrom(island))} / person`,
  },
  {
    id: 'stay-chef',
    name: 'Stay Chef',
    guests: 'Multi-day',
    blurb: 'A chef for the villa week — breakfast through dinner, groceries at cost, one team.',
    path: '/vacation-chef',
    price: (island) => `${formatFrom(getDayRate(island).from)} / day`,
  },
  {
    id: 'wedding-week',
    name: 'Wedding week',
    guests: 'Welcome → brunch',
    blurb: 'Rehearsal, reception and recovery brunch as separate lines — one culinary team all week.',
    path: '/weddings',
    price: (island) => {
      const o = getOtherOffer('wedding').byIsland[island];
      return `${formatFrom(o.from)} / person + staffing`;
    },
  },
];

export interface PricedPackage extends NamedPackage {
  fromLabel: string;
  includes: string;
}

export function islandPackages(island: IslandId): PricedPackage[] {
  return namedPackages.map((p) => ({
    ...p,
    fromLabel: `from ${p.price(island)}`,
    includes: 'Chef team · shop · cook · serve · cleanup. Groceries at cost on Stay Chef.',
  }));
}
