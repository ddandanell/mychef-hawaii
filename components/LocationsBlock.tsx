import HostLink from '@/components/HostLink';
import { islandOrder, islands, type IslandId } from '@/data/islands';
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
        <p className={cn('text-[12px]', ink ? 'text-paper/50' : 'text-mute')}>Locations</p>
        <h2
          className={cn(
            'mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-light',
            ink ? 'text-paper' : 'text-ink',
          )}
        >
          Where we cook
        </h2>
        <p className={cn('mt-4 max-w-[62ch] text-[17px] leading-relaxed', ink ? 'text-paper/75' : 'text-mute')}>
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
                <p className={cn('mt-2 max-w-[70ch] text-[17px] leading-relaxed', ink ? 'text-paper/75' : 'text-mute')}>
                  {area.line}
                </p>
                {anchored ? (
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {area.corridors.map((c) => (
                      <li key={c.id} id={c.id} className={cn('scroll-mt-24', ink ? 'text-paper/80' : 'text-ink')}>
                        {c.name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
