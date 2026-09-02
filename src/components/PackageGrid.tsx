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
        <p className="text-[12px] text-ink-soft">Book the shape of the night</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1] text-ink">
          {heading}
        </h2>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.65] text-ink-soft">
          Starting prices from our published Signature dinner band. Groceries billed at cost. Service and GET
          are added once on the written quote.
        </p>
        <div className="mt-12 grid gap-px bg-stone md:grid-cols-2 lg:grid-cols-3">
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
    <article className="flex flex-col bg-ivory p-6 lg:p-8">
      <p className="text-[12px] text-ink-soft">{pack.guests}</p>
      <h3 className="mt-1 font-display text-[1.625rem] font-light leading-[1.15] text-ink">{pack.name}</h3>
      <p className="mt-2 text-[17px] text-ink">{pack.fromLabel}</p>
      <p className="mt-3 flex-1 text-[17px] leading-relaxed text-ink-soft">{pack.blurb}</p>
      <p className="mt-3 text-[12px] leading-4 text-ink-soft">{pack.includes}</p>
      <Link to={pack.path} className="mt-5 text-sm text-ink underline underline-offset-4">
        {pack.name} details
      </Link>
    </article>
  );
}

export function PackageStrip({ island }: { island: IslandId }) {
  const packs = islandPackages(island);
  return (
    <div className="grid gap-px bg-stone sm:grid-cols-2 lg:grid-cols-5">
      {packs.map((p) => (
        <Link key={p.id} to="/pricing" className="bg-ivory p-4">
          <p className="text-[12px] text-ink-soft">{p.guests}</p>
          <p className="mt-1 font-display text-lg font-light text-ink">{p.name}</p>
          <p className="mt-1 text-sm text-ink">{p.fromLabel}</p>
        </Link>
      ))}
    </div>
  );
}

export function HowItWorksBlock({ island }: { island?: IslandId }) {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="text-[12px] text-ink-soft">Four steps</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1] text-ink">
          How a myCHEF night works
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {HOW_IT_WORKS.map((s) => (
            <div key={s.n}>
              <p className="font-display text-3xl font-light text-ink">{s.n}</p>
              <h3 className="mt-2 font-display text-[1.375rem] font-light leading-[1.2] text-ink">{s.title}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-ink-soft">{s.body}</p>
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
