import { DualCta } from '@/components/DualCta';
import { useIsland } from '@/context/IslandContext';

export default function QuoteTeaserBand({
  headline = 'Tell us where you’re dining.',
}: {
  headline?: string;
  note?: string;
}) {
  const { islandId } = useIsland();
  return (
    <section className="bg-ink py-16 lg:py-20">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,2.75rem)] font-light leading-[1.1] text-ivory">
          {headline}
        </h2>
        <div className="mt-8">
          <DualCta island={islandId ?? undefined} onDark />
        </div>
      </div>
    </section>
  );
}
