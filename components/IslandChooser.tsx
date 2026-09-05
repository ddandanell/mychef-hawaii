import HostLink from '@/components/HostLink';
import Photo from '@/components/Photo';
import { islandOrder, islands } from '@/data/islands';
import { islandOffers } from '@/data/offers';

export default function IslandChooser() {
  return (
    <section id="islands" aria-label="Choose an island" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <p className="text-[12px] uppercase tracking-[0.18em] text-mute">Where we cook</p>
        <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
          Four islands. Stay on one.
        </h2>
        <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-mute">
          Open the island that matches the house. Changing island is a single action — not a jump inside every menu.
        </p>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {islandOrder.map((id) => {
            const isl = islands[id];
            const offer = islandOffers[id];
            return (
              <li key={id}>
                <HostLink island={id} className="group block">
                  <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                    <Photo
                      src={isl.selectorImage}
                      alt={isl.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 p-5 text-paper">
                      <span className="block font-display text-[1.75rem] font-light leading-none">{isl.name}</span>
                      <span className="mt-2 block text-[13px] tracking-[0.02em] text-paper/85">
                        {isl.state === 'inquiry' ? 'Inquiry · ' : ''}From ${offer.fromPp} a guest
                      </span>
                    </span>
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
