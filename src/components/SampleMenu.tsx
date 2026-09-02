import type { IslandId } from '../data/islands';
import { sampleMenus } from '../data/menus';

export function SampleMenu({ island }: { island: IslandId }) {
  const menu = sampleMenus[island];
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">A sample three-course</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
          {menu.title}
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">{menu.intro}</p>
        <ol className="mt-12 space-y-8">
          {menu.courses.map((c) => (
            <li key={c.course} className="border-t border-stone pt-6">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-clay">{c.course}</p>
              <h3 className="mt-1 font-display text-[1.625rem] font-medium leading-[1.2] text-ink">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
