import Contours from '@/components/Contours';
import HostLink from '@/components/HostLink';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';

/** Custom 404 with island-aware recovery links (design.md §2). Real 404 semantics — no soft redirect. */
export default function NotFound() {
  const { island } = useIsland();
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <Contours className="absolute -left-24 -bottom-16 h-96 w-[520px] opacity-[0.06]" stroke="#A34A28" />
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">404 — Page not found</p>
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
            className="inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97]"
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
