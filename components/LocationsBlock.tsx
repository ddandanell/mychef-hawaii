import HostLink from '@/components/HostLink';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { moneyNeighborhoods } from '@/data/offers';
import { LOCATIONS_LEDE, SERVICE_AREAS } from '@/data/serviceAreas';
import { cn } from '@/lib/utils';

export function LocationsBlock({
  tone = 'paper',
  anchorsFor,
  id,
}: {
  tone?: 'paper' | 'ink';
  /** Add home-page corridor anchors for this island (Areas nav). */
  anchorsFor?: IslandId | null;
  id?: string;
}) {
  const ink = tone === 'ink';

  return (
    <section id={id} className={cn(ink ? 'bg-ink text-paper' : 'border-t border-line bg-paper text-ink')}>
      <div className="mx-auto w-full max-w-container px-5 py-16 lg:px-10 lg:py-20">
        <p className={cn('text-[13px]', ink ? 'text-on-ink' : 'text-mute')}>Locations</p>
        <h2
          className={cn(
            'mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-light',
            ink ? 'text-paper' : 'text-ink',
          )}
        >
          Where we cook
        </h2>
        <p className={cn('mt-4 max-w-[62ch] text-[17px] leading-relaxed', ink ? 'text-on-ink' : 'text-mute')}>
          {LOCATIONS_LEDE}
        </p>
        <ul className="mt-10 space-y-8">
          {islandOrder.map((id) => {
            const area = SERVICE_AREAS[id];
            const anchored = anchorsFor === id;
            return (
              <li key={id} id={anchored ? 'areas' : undefined} className={anchored ? 'scroll-mt-24' : undefined}>
                <p className={cn('font-display text-[1.375rem] font-light', ink ? 'text-paper' : 'text-ink')}>
                  <HostLink island={id} className="underline-offset-4 hover:underline">
                    {islands[id].name}
                  </HostLink>
                </p>
                <p className={cn('mt-2 max-w-[70ch] text-[17px] leading-relaxed', ink ? 'text-on-ink' : 'text-mute')}>
                  {area.line}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {moneyNeighborhoods[id].map((hood) => (
                    <li key={hood.slug} id={anchored ? hood.slug : undefined} className="scroll-mt-24">
                      <HostLink
                        island={id}
                        path={`/${hood.slug}`}
                        className={cn(
                          'underline-offset-4 hover:underline',
                          ink ? 'text-paper' : 'text-ink',
                        )}
                      >
                        {hood.name}
                      </HostLink>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
