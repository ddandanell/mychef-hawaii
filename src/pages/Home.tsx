import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { DualCta } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import HeroMedia from '@/components/HeroMedia';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { islandOrder, islands } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import { photos } from '@/data/photos';

const hubFaqs = [
  {
    q: 'Which islands do you cook?',
    a: 'Oʻahu, Maui, Kauaʻi and Hawaiʻi Island. Each island has published starting prices.',
  },
  {
    q: 'How much does a private chef cost in Hawaii?',
    a: 'Signature dinner from $125 a guest on Oʻahu, $150 on Maui and Kauaʻi. Stay Chef day rates from $850. Service 20% and Hawaiʻi GET are added once on the written quote.',
  },
  {
    q: "What's included?",
    a: 'Menu design, shopping, cooking in your villa, table service and a clean kitchen. Drinks BYO or quoted. Bartender add-on on the bar page.',
  },
  {
    q: 'Do you have Hawaii guest reviews?',
    a: 'Not yet — and we will not invent them. Proof here is published prices, sample menus, cleanup, and a written quote.',
  },
  {
    q: 'Airbnb / vacation rental kitchens?',
    a: 'Yes, when there is a real cooktop. Hotel rooms without kitchens are declined.',
  },
];

const CHAPTERS = [
  {
    to: '/private-chef',
    title: 'Private chef',
    line: 'A dinner in your villa. We shop, cook, serve and clean.',
    img: photos.mauiKitchen.file,
    alt: photos.mauiKitchen.alt,
  },
  {
    to: '/catering',
    title: 'Hawaii catering',
    line: 'Staffed villa events. Buffet or plated. Ten to seventy-five guests.',
    img: photos.catering.file,
    alt: photos.catering.alt,
  },
  {
    to: '/weddings',
    title: 'Wedding week',
    line: 'Welcome dinner to recovery brunch. One team for the week.',
    img: '/photos/maui-wedding-long-table-banyan-dusk.jpg',
    alt: 'A wedding-week long table under a banyan at dusk, ocean lawn beyond.',
  },
  {
    to: '/bar',
    title: 'Bar',
    line: 'Cocktails on the terrace, stacked with dinner or on its own.',
    img: photos.bar.file,
    alt: photos.bar.alt,
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FoodService',
              name: 'myCHEF Hawaii',
              description:
                'Private chef Hawaii from $125 a guest. In-villa dinners, catering, weddings and bar on Oʻahu, Maui, Kauaʻi and Hawaiʻi Island.',
              areaServed: 'Hawaiʻi',
              parentOrganization: { '@type': 'Organization', name: 'myCHEF' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: hubFaqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]),
        }}
      />

      <section className="relative -mt-16 flex min-h-[100svh] min-h-[640px] items-end overflow-hidden">
        <HeroMedia src={photos.hubHero.file} alt={photos.hubHero.alt} />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-24 pt-40 lg:px-10">
          <h1 className="max-w-3xl font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            A private chef, in your villa, on your island.
          </h1>
          <p className="mt-5 max-w-[40ch] text-[17px] leading-[1.55] text-white/90">
            We shop, cook, serve and clean on Oʻahu, Maui, Kauaʻi and Hawaiʻi Island.
          </p>
          <p className="mt-4 text-[17px] text-white/80">Signature dinner from $125 a guest, Oʻahu.</p>
          <div className="mt-8">
            <DualCta intent="a private chef in Hawaii" size="lg" />
          </div>
        </div>
      </section>

      <section id="islands" className="bg-ivory">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {islandOrder.map((id) => {
            const isl = islands[id];
            const o = islandOffers[id];
            return (
              <HostLink key={id} island={id} className="group relative block min-h-[420px] overflow-hidden">
                <img src={isl.selectorImage} alt={isl.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="relative flex min-h-[420px] flex-col justify-end p-6">
                  <h2 className="font-display text-[1.75rem] font-light text-white">{isl.name}</h2>
                  <p className="mt-1 text-[15px] text-white/85">
                    {isl.state === 'inquiry' ? 'Opening. ' : ''}
                    From ${o.fromPp} a guest.
                  </p>
                </div>
              </HostLink>
            );
          })}
        </div>
      </section>

      <section className="bg-ivory">
        {CHAPTERS.map((c) => (
          <Link key={c.to} to={c.to} className="grid border-t border-stone lg:grid-cols-2">
            <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
              <img src={c.img} alt={c.alt} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center px-5 py-12 lg:px-12">
              <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink">{c.title}</h2>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-ink-soft">{c.line}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="border-t border-stone bg-ivory py-20">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="max-w-[50ch] font-display text-[clamp(1.75rem,3vw,2.25rem)] font-light leading-[1.25] text-ink">
            Signature dinner from $125 a guest on Oʻahu, $150 on Maui and Kauaʻi. The written quote is the confirmed
            total.
          </p>
          <Link to="/pricing" className="mt-6 inline-block text-sm text-ink underline underline-offset-4">
            What a night costs
          </Link>
        </div>
      </section>

      <section className="border-t border-stone bg-ivory py-20">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink lg:col-span-2">
            Questions
          </h2>
          <Accordion.Root type="single" collapsible className="lg:col-span-3">
            {hubFaqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`h-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.25rem] font-light text-ink">{f.q}</span>
                    <span className="text-[12px] text-ink-soft">+</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pb-6 text-[17px] leading-relaxed text-ink-soft">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <QuoteTeaserBand headline="Enquire for dates." />
    </>
  );
}
