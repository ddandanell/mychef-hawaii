import { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import { quoteTrustSections } from '@/data/longformHub';
import { islandQuote } from '@/data/islandQuote';
import { photos } from '@/data/photos';
import type { IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

export default function QuoteView({ islandId, hostMode }: { islandId: IslandId | null; hostMode: boolean }) {
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const copy = islandId ? islandQuote[islandId] : null;
  const photo = copy ? photos[copy.photo] : null;

  return (
    <>
      {copy && photo ? (
        <>
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: copy.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }}
          />
          <Hero src={photo.file} alt={photo.alt}>
            <p className="text-[13px] text-mute">{copy.kicker}</p>
            <LineReveal
              text={copy.h1}
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
            />
            <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
          </Hero>
        </>
      ) : null}

      <section className="bg-paper">
        <Suspense fallback={<div className="min-h-[60vh] bg-paper" />}>
          <QuoteForm hidePageHeading={Boolean(copy)} asidePhoto={photo ?? undefined} />
        </Suspense>
      </section>

      {copy ? (
        <>
          <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
          <LongFaq items={copy.faqs} title="Before you send it." />
        </>
      ) : (
        <Longform sections={quoteTrustSections} />
      )}
      <SiblingCluster island={islandId} current="quote" href={href} />
    </>
  );
}
