import Link from 'next/link';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import IslandScroll from '@/components/IslandScroll';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import Reveal, { MaskReveal } from '@/components/Reveal';
import { hubHomeFaqs, hubHomeSections } from '@/data/longformHub';
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
    title: 'Catering',
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
];

export default function HomeView() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: hubFaqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />

      <Hero src={photos.hubHero.file} alt={photos.hubHero.alt}>
        <LineReveal
          text="Private Chef Hawaii — in your villa, on your island."
          className="font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-paper"
        />
        <p className="mt-5 max-w-[40ch] text-[17px] leading-[1.55] text-paper">
          We shop, cook, serve and clean on Oʻahu, Maui, Kauaʻi and Hawaiʻi Island.
        </p>
        <p className="mt-4 text-[17px] text-paper">Signature dinner from $125 a guest, Oʻahu.</p>
        <div className="mt-8">
          <QuoteCta inverse />
        </div>
      </Hero>

      <IslandScroll />

      <section className="bg-paper">
        {CHAPTERS.map((c, i) => (
          <Link key={c.to} href={c.to} className="grid border-t border-line lg:grid-cols-2">
            <MaskReveal className={i % 2 === 1 ? 'lg:order-2' : undefined}>
              <div className="relative min-h-[52vh] lg:min-h-[70vh]">
                <Photo src={c.img} alt={c.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
            </MaskReveal>
            <div className="flex flex-col justify-center px-5 py-16 lg:px-16">
              <Reveal>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-ink">{c.title}</h2>
                <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-mute">{c.line}</p>
              </Reveal>
            </div>
          </Link>
        ))}
      </section>

      <section className="border-t border-line bg-paper py-20">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="max-w-[50ch] font-display text-[clamp(1.75rem,3vw,2.25rem)] font-light leading-[1.25] text-ink">
            Signature dinner from $125 a guest on Oʻahu, $150 on Maui and Kauaʻi. The written quote is the confirmed
            total.
          </p>
          <Link href="/pricing" className="mt-6 inline-block text-sm font-medium text-ink underline underline-offset-4">
            What a night costs
          </Link>
        </div>
      </section>

      <Longform sections={hubHomeSections} />
      <SiblingCluster current="home" />
      <LongFaq items={[...hubFaqs, ...hubHomeFaqs]} />
      <QuoteTeaser headline="Request a quote." />
    </>
  );
}
