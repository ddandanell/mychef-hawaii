import { useIsland } from '@/context/IslandContext';
import type { IslandId, IslandMeta } from '@/data/islands';
import { islands } from '@/data/islands';
import { getTiers, formatBand } from '@/data/rateCard';
import type { RateTier } from '@/data/rateCard';

/**
 * Non-component helpers for the island homepages (kept separate from
 * shared.tsx so that file only exports components — react-refresh rule).
 */

/** Resolve the current island from context, falling back to the page's own id. */
export function usePageIsland(id: IslandId): { island: IslandMeta; href: (path: string) => string } {
  const ctx = useIsland();
  const island = ctx.island ?? islands[id];
  return { island, href: ctx.href };
}

/** Formatted band for one island tier, straight from the rate card. */
export function tierBand(islandId: IslandId, tier: RateTier): string {
  const entry = getTiers(islandId).find((t) => t.tier === tier);
  return entry ? formatBand(entry) : '';
}
