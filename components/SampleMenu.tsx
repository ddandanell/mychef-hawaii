import type { IslandId } from '@/data/islands';
import { sampleMenus } from '@/data/menus';

export function SampleMenu({ island }: { island: IslandId }) {
  const menu = sampleMenus[island];
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
        <p className="text-[12px] text-mute">A sample three-course</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
          {menu.title}
        </h2>
        <p className="mt-4 text-[17px] leading-[1.65] text-mute">{menu.intro}</p>
        <ol className="mt-12 space-y-8">
          {menu.courses.map((c) => (
            <li key={c.course} className="border-t border-line pt-6">
              <p className="text-[12px] text-mute">{c.course}</p>
              <h3 className="mt-1 font-display text-[1.625rem] font-light leading-[1.2] text-ink">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{c.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
