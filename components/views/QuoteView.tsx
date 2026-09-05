import { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import HubPhotoGrid from '@/components/HubPhotoGrid';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import { quoteTrustSections } from '@/data/longformHub';
import { islandQuote } from '@/data/islandQuote';
import { getHubDirectory } from '@/data/hubDirectories';
import { photos } from '@/data/photos';
import { islands, type IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

export default function QuoteView({ islandId, hostMode }: { islandId: IslandId | null; hostMode: boolean }) {
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const copy = islandId ? islandQuote[islandId] : null;
  const photo = copy ? photos[copy.photo] : photos.quoteHub;
  const contact = getHubDirectory('/contact');
  const faq = getHubDirectory('/faq');

  return (
    <>
      {copy ? (
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
      ) : null}
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy?.kicker ?? 'Four islands'}</p>
        <LineReveal
          text={copy?.h1 ?? 'Tell us where you’re dining.'}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
          {copy?.lede ?? 'Five fields. A human reply. Typical response in Hawaii business hours.'}
        </p>
      </Hero>

      <section className="bg-paper">
        <Suspense fallback={<div className="min-h-[60vh] bg-paper" />}>
          <QuoteForm hidePageHeading asidePhoto={photo} />
        </Suspense>
      </section>

      {copy && islandId ? (
        <>
          <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
          <DocumentPhotoGrid
            islandId={islandId}
            eyebrow={`${islands[islandId].shortName} · Beside this form`}
            heading="Open a related document."
            intro="The five fields stay on this page. The desk, the rate card, the process, and getting started are their own URLs."
            columns={2}
            items={[
              { path: '/contact', label: 'The desk', detail: '/contact' },
              { path: '/pricing', label: 'What a night costs', detail: '/pricing' },
              { path: '/how-it-works', label: 'How it works', detail: '/how-it-works' },
              { path: '/help/getting-started', label: 'Getting started', detail: '/help/getting-started' },
            ]}
          />
          <LongFaq items={copy.faqs} title="Before you send it." />
        </>
      ) : (
        <>
          <Longform sections={quoteTrustSections} />
          <HubPhotoGrid
            eyebrow="Beside this form"
            heading="Open a related document."
            intro="The five fields stay on this page. The desk, the rate card, the process, and the FAQ are their own URLs. Island forms stay on the island host."
            columns={2}
            items={[
              {
                href: '/contact',
                title: contact?.cardLabel ?? 'The desk',
                body: contact?.lede ?? 'Quotes and inquiry replies run in Hawaii Standard Time on the island host.',
                still: contact ? photos[contact.photo] : photos.quoteHub,
              },
              {
                href: '/pricing',
                title: 'What a night costs',
                body: 'The published rate card. Distinct from the fee-stack explainer.',
                still: photos.hubPricing,
              },
              {
                href: '/how-it-works',
                title: 'How a booking works',
                body: 'One process on every island. Drive times live on the island host.',
                still: photos.hubHow,
              },
              {
                href: '/faq',
                title: faq?.cardLabel ?? 'Questions',
                body: faq?.lede ?? 'Booking questions live on the island host.',
                still: faq ? photos[faq.photo] : photos.hubFaq,
              },
            ]}
          />
        </>
      )}
      <SiblingCluster island={islandId} current="quote" href={href} />
    </>
  );
}
