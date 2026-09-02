import { Link } from 'react-router';
import { islandPackages, type PricedPackage } from '../data/packages';
import { HOW_IT_WORKS } from '../data/menus';
import type { IslandId } from '../data/islands';
import { DualCtaLight } from './DualCta';

export function PackageGrid({
  island,
  heading = 'Named packages',
}: {
  island: IslandId;
  heading?: string;
}) {
  const packs = islandPackages(island);
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Book the shape of the night</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
          {heading}
        </h2>
        <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
          Starting prices from our published CORE dinner band. Groceries billed at cost. Service 20% and Hawaiʻi GET
          up to 4.712% are added once on the quote — not hidden in the per-person number.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {packs.map((p) => (
            <PackageCard key={p.id} pack={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PackageCard({ pack }: { pack: PricedPackage }) {
  return (
    <article className="flex flex-col rounded-[14px] border border-stone bg-white p-6 shadow-soft">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">{pack.guests}</p>
      <h3 className="mt-1 font-display text-[1.625rem] font-medium leading-[1.15] text-ink">{pack.name}</h3>
      <p className="mt-2 text-clay">{pack.fromLabel}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{pack.blurb}</p>
      <p className="mt-3 font-mono text-[0.625rem] uppercase leading-4 tracking-[0.08em] text-ink-soft">{pack.includes}</p>
      <Link to={pack.path} className="mt-5 text-sm font-medium text-clay underline underline-offset-4">
        {pack.name} details →
      </Link>
    </article>
  );
}

export function PackageStrip({ island }: { island: IslandId }) {
  const packs = islandPackages(island);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {packs.map((p) => (
        <Link
          key={p.id}
          to="/pricing"
          className="rounded-[14px] border border-stone bg-white p-4 transition-colors hover:border-clay/50"
        >
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-soft">{p.guests}</p>
          <p className="mt-1 font-display text-lg font-medium text-ink">{p.name}</p>
          <p className="mt-1 text-sm text-clay">{p.fromLabel}</p>
        </Link>
      ))}
    </div>
  );
}

export function HowItWorksBlock({ island }: { island?: IslandId }) {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Four steps</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
          How a myCHEF night works
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {HOW_IT_WORKS.map((s) => (
            <div key={s.n}>
              <p className="font-display text-3xl font-semibold text-brass">{s.n}</p>
              <h3 className="mt-2 font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <DualCtaLight island={island} intent="how it works" />
        </div>
      </div>
    </section>
  );
}
