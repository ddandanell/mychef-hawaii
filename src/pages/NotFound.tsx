import HostLink from '@/components/HostLink';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';

/** Custom 404 with island-aware recovery links (design.md §2). Real 404 semantics — no soft redirect. */
export default function NotFound() {
  const { island } = useIsland();
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="text-[12px] text-ink-soft">404 — Page not found</p>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          This table isn&apos;t set.
        </h1>
        <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
          The page you asked for doesn&apos;t exist{island ? ` in the ${island.name} section` : ''}. Here&apos;s
          the way back:
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <HostLink
            island={island ? island.id : 'root'}
            className="inline-flex h-12 items-center bg-ink px-6 text-sm font-medium text-[#F6F1E8]"
          >
            {island ? `${island.name} home` : 'Home'}
          </HostLink>
          {islandOrder.map((id) => (
            <HostLink
              key={id}
              island={id}
              className="inline-flex items-center rounded-full border border-stone bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-clay/50"
            >
              {islands[id].name}
            </HostLink>
          ))}
        </div>
      </div>
    </section>
  );
}
