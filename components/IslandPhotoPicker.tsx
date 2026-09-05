import HostLink from '@/components/HostLink';
import Eyebrow from '@/components/Eyebrow';
import Photo from '@/components/Photo';
import { islandChooserCopy } from '@/data/chromeCopy';
import { islandOrder, islands, type IslandId } from '@/data/islands';

/** 4-up island stills that open a host document. Selector photos, not TypePanel tiles. */
export default function IslandPhotoPicker({
  path = '/',
  eyebrow = 'Where we cook',
  heading,
  intro,
  detailOf,
}: {
  path?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  detailOf?: (id: IslandId) => string;
}) {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
          {heading}
        </h2>
        {intro ? <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-mute">{intro}</p> : null}
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {islandOrder.map((id) => {
            const isl = islands[id];
            const chooser = islandChooserCopy[id];
            const detail = detailOf?.(id);
            return (
              <li key={id}>
                <HostLink island={id} path={path} className="group block">
                  <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                    <Photo
                      src={isl.selectorImage}
                      alt={isl.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                  </span>
                  <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{isl.name}</span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-mute">{chooser.line}</span>
                  <span className="mt-2 block text-[13px] text-mute">
                    {detail ?? chooser.price}
                    {isl.state === 'inquiry' && detail ? ' · Inquiry' : ''}
                  </span>
                </HostLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
