import { DualCta } from '@/components/DualCta';
import Reveal from '@/components/Reveal';
import { useIsland } from '@/context/IslandContext';

export default function QuoteTeaserBand({
  headline = "Tell us where you're dining.",
  note = 'WhatsApp or quote · typical reply in Hawaii business hours',
}: {
  headline?: string;
  note?: string;
}) {
  const { islandId } = useIsland();

  return (
    <section className="bg-ink py-16 lg:py-20">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ivory">
            {headline}
          </h2>
          <p className="mt-4 text-[12px] text-ivory/60">{note}</p>
          <div className="mt-8">
            <DualCta island={islandId ?? undefined} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
