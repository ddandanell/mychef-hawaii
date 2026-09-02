import { Link, useParams } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { DualCta } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import { PackageStrip } from '@/components/PackageGrid';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { islandOrder, islands } from '@/data/islands';
import { getMoneyNeighborhood, islandOffers } from '@/data/offers';
import { photos } from '@/data/photos';
import NotFound from '@/pages/NotFound';
import { useIsland } from '@/context/IslandContext';

export default function NeighborhoodMoneyPage({ slug: slugProp }: { slug?: string }) {
  const { slug: paramSlug } = useParams();
  const { islandId, href, island, localPath } = useIsland();
  const slug = slugProp || paramSlug || localPath.replace(/^\//, '').split('/')[0];
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
        <img src={hero.file} alt={page.name} className="absolute inset-0 h-full w-full object-cover" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(28,25,22,0.08) 0%, rgba(28,25,22,0.22) 50%, rgba(28,25,22,0.42) 100%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-16 pt-32 lg:px-10">
          <p className="text-[12px] text-ivory/80">{page.name}</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] text-white">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-[54ch] text-[17px] leading-[1.65] text-ivory/90">{page.lede}</p>
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
              Hawaii prices. We shop, cook, serve and clean. Villa / Airbnb / vacation-rental kitchens with a real
              cooktop. Hawaiʻi guest reviews: none yet.
            </p>
          </div>
          <div>
            <p className="text-[12px] text-ink-soft">Also on {island.name}</p>
            <div className="mt-4 flex flex-col gap-2">
              <Link to={href('/private-chef')} className="text-sm text-ink underline underline-offset-4">
                Private chef
              </Link>
              <Link to={href('/catering')} className="text-sm text-ink underline underline-offset-4">
                Catering
              </Link>
              <Link to={href('/weddings')} className="text-sm text-ink underline underline-offset-4">
                Weddings
              </Link>
              <Link to={href('/pricing')} className="text-sm text-ink underline underline-offset-4">
                Pricing
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
                      <span className="font-display text-xl font-light text-ink">{f.q}</span>
                      <span className="text-[18px] text-ink-soft group-data-[state=open]:hidden">+</span>
                      <span className="hidden text-[18px] text-ink-soft group-data-[state=open]:inline">–</span>
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
              <HostLink key={id} island={id} className="text-sm text-ink underline underline-offset-4">
                {islands[id].name}
              </HostLink>
            ))}
        </div>
      </section>

      <QuoteTeaserBand headline={`${page.name} — from $${offer.fromPp} a guest.`} />
    </>
  );
}
