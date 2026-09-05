import { QuoteCta } from '@/components/Cta';
import type { IslandId } from '@/data/islands';

export default function QuoteTeaser({
  headline = 'Tell us where you’re dining.',
  island,
}: {
  headline?: string;
  island?: IslandId | null;
}) {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <h2 className="max-w-[18ch] font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.08] text-paper">
          {headline}
        </h2>
        <div className="mt-10">
          <QuoteCta island={island} variant="light" />
        </div>
      </div>
    </section>
  );
}
