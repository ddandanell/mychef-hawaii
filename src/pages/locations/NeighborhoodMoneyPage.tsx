import { Link, useParams } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { DualCta, DualCtaLight } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import { PackageStrip } from '@/components/PackageGrid';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { islandOrder, islands } from '@/data/islands';
import { getMoneyNeighborhood, islandOffers } from '@/data/offers';
import { photos } from '@/data/photos';
import NotFound from '@/pages/NotFound';
import { useIsland } from '@/context/IslandContext';

export default function NeighborhoodMoneyPage() {
  const { slug } = useParams();
  const { islandId, href, island } = useIsland();
  if (!islandId || !island || !slug) return <NotFound />;
  const page = getMoneyNeighborhood(islandId, slug);
  if (!page) return <NotFound />;
  const offer = islandOffers[islandId];
  const hero = photos[page.photo];

  return (
    <>
      <PageMeta title={page.title} description={page.description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FoodService',
              name: `myCHEF ${page.h1}`,
              description: page.description,
              areaServed: { '@type': 'Place', name: `${page.name}, ${island.name}, Hawaiʻi` },
              serviceType: 'Private chef',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: page.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]),
        }}
      />

      <section className="relative flex min-h-[70svh] min-h-[480px] items-end overflow-hidden">
        <img src={hero.file} alt={hero.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(26,21,16,0.15) 0%, rgba(26,21,16,0.55) 45%, rgba(26,21,16,0.88) 100%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-16 pt-32 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
            {island.name} · {page.zone}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] text-white">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-[62ch] text-[1.125rem] leading-[1.6] text-ivory/90">{page.lede}</p>
          <div className="mt-8">
            <DualCta island={islandId} intent={`a private chef in ${page.name}`} />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-container gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            {page.body.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">
                {p}
              </p>
            ))}
            <p className="mt-6 text-sm text-ink-soft">
              Same company as myCHEF Bali and Dubai. Hawaii prices. We shop, cook, serve and clean. Villa / Airbnb /
              vacation-rental kitchens with a real cooktop.
            </p>
            <div className="mt-8">
              <DualCtaLight island={islandId} intent={`a private chef in ${page.name}`} />
            </div>
          </div>
          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Also on {island.name}</p>
            <div className="mt-4 flex flex-col gap-2">
              {offer.neighborhoods
                .filter((n) => n.slug !== slug)
                .map((n) => (
                  <Link key={n.slug} to={href(`/${n.slug}`)} className="text-sm text-clay underline underline-offset-4">
                    Private chef {n.name}
                  </Link>
                ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={href('/private-chef')} className="text-sm text-ink underline underline-offset-4">
                Private chef
              </Link>
              <Link to={href('/catering')} className="text-sm text-ink underline underline-offset-4">
                {islandId === 'kauai' ? 'Kauai catering' : 'Catering'}
              </Link>
              <Link to={href('/pricing')} className="text-sm text-ink underline underline-offset-4">
                Packages &amp; prices
              </Link>
              <Link to={href('/quote')} className="text-sm text-ink underline underline-offset-4">
                Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <PackageStrip island={islandId} />
        </div>
      </section>

      {page.faqs.length ? (
        <section className="bg-ivory py-16">
          <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
            <Accordion.Root type="single" collapsible>
              {page.faqs.map((f, i) => (
                <Accordion.Item key={f.q} value={`n-${i}`} className="border-b border-stone">
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                      <span className="font-display text-xl font-medium text-ink">{f.q}</span>
                      <ChevronDown className="h-5 w-5 text-clay group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className="pb-6 text-ink-soft">{f.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </section>
      ) : null}

      <section className="bg-sand py-12">
        <div className="mx-auto flex w-full max-w-container flex-wrap gap-3 px-5 lg:px-10">
          {islandOrder
            .filter((id) => id !== islandId)
            .map((id) => (
              <HostLink
                key={id}
                island={id}
                className="rounded-full border border-stone bg-white px-4 py-2 text-sm hover:border-clay/50"
              >
                Private chef {islands[id].shortName}
              </HostLink>
            ))}
        </div>
      </section>

      <QuoteTeaserBand headline={`${page.h1} — from $${offer.fromPp}/pp.`} />
    </>
  );
}
