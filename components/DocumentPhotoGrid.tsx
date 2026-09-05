import HostLink from '@/components/HostLink';
import Eyebrow from '@/components/Eyebrow';
import Photo from '@/components/Photo';
import { islands, type IslandId } from '@/data/islands';
import { stillForPath } from '@/lib/documentStill';

/** Island-host document list as photography, not paper tiles. */
export default function DocumentPhotoGrid({
  islandId,
  eyebrow,
  heading,
  intro,
  items,
}: {
  islandId: IslandId;
  eyebrow: string;
  heading: string;
  intro?: string;
  items: { path: string; label: string; detail?: string; id?: string }[];
}) {
  const fallback = islands[islandId].selectorImage;
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
          {heading}
        </h2>
        {intro ? <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-mute">{intro}</p> : null}
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const still = stillForPath(islandId, item.path);
            return (
              <li key={item.path} id={item.id} className={item.id ? 'scroll-mt-24' : undefined}>
                <HostLink island={islandId} path={item.path} className="group block">
                  <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                    <Photo
                      src={still?.file ?? fallback}
                      alt={still?.alt ?? item.label}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                  </span>
                  <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{item.label}</span>
                  <span className="mt-2 block text-[13px] text-mute">{item.detail ?? item.path}</span>
                </HostLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
