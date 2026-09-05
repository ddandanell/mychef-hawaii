import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { islandAbout } from '@/data/islandAbout';
import { islands, type IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

export function IslandAboutView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = islandAbout[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const island = islands[islandId];

  return (
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
      <Hero src={copy.hero.file} alt={copy.hero.alt}>
        <p className="text-[13px] text-mute">About myCHEF {island.name}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} variant="light" />
        </div>
      </Hero>

      <section className="border-t border-line bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-3xl space-y-6 px-5 lg:px-10">
          {copy.body.map((p) => (
            <p key={p.slice(0, 40)} className="text-[17px] leading-[1.7] text-mute">
              {p}
            </p>
          ))}
        </div>
      </section>

      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${island.shortName} · Beside this department`}
        heading="Open a related document."
        intro="This page is who cooks here. Honesty, booking notes, the desk, and how a night runs are their own URLs."
        columns={2}
        items={[
          { path: '/trust', label: 'Honesty register', detail: '/trust' },
          { path: '/legal', label: 'Booking notes', detail: '/legal' },
          { path: '/contact', label: 'The desk', detail: '/contact' },
          { path: '/how-it-works', label: 'How it works', detail: '/how-it-works' },
        ]}
      />

      <SiblingCluster island={islandId} href={href} />
      <LongFaq items={copy.faqs} title={`The ${island.shortName} department.`} />
      <QuoteTeaser headline="Request a quote. Quote in writing." island={islandId} />
    </>
  );
}
