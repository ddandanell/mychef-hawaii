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
    <section className="bg-ink py-16 lg:py-20">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,2.75rem)] font-light leading-[1.1] text-paper">
          {headline}
        </h2>
        <div className="mt-8">
          <QuoteCta island={island} variant="secondary" />
        </div>
      </div>
    </section>
  );
}
