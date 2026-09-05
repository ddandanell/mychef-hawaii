import Link from 'next/link';
import { CtaLink, QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import IslandChooser from '@/components/IslandChooser';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform } from '@/components/Longform';
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

const STEPS = [
  {
    n: '01',
    title: 'Tell us the house',
    line: 'The island, the address type, the date, and how many you are feeding.',
  },
  {
    n: '02',
    title: 'A written menu and a total',
    line: 'No chat estimates. The quote is the confirmed number, with service and GET as their own lines.',
  },
  {
    n: '03',
    title: 'We cook. You sit down.',
    line: 'Same-day shopping, service at the table, kitchen left as we found it.',
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
        <p className="text-[12px] uppercase tracking-[0.2em] text-paper/80">myCHEF Hawaii</p>
        <LineReveal
          text="Private Chef Hawaii — in your villa, on your island."
          className="mt-5 font-display text-[clamp(2.75rem,6.4vw,5rem)] font-light leading-[1.04] tracking-[-0.03em] text-paper"
        />
        <p className="mt-6 max-w-[38ch] text-[17px] leading-[1.6] text-paper/90">
          A chef who shops, cooks, serves and leaves the kitchen as it was. Oʻahu, Maui, Kauaʻi and Hawaiʻi Island.
        </p>
        <p className="mt-4 text-[15px] tracking-[0.01em] text-paper/80">
          Signature dinner from $125 a guest on Oʻahu.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <QuoteCta variant="light" />
          <CtaLink href="/pricing" variant="ghost">
            What a night costs
          </CtaLink>
        </div>
      </Hero>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.18em] text-mute">Two ways in</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
            A chef for the house, or catering for the event.
          </h2>
        </div>
        <div className="mx-auto mt-16 grid w-full max-w-spread gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Reveal>
            <Link href="/private-chef" className="group block">
              <MaskReveal>
                <div className="relative min-h-[52vh] overflow-hidden lg:min-h-[64vh]">
                  <Photo
                    src={photos.mauiKitchen.file}
                    alt={photos.mauiKitchen.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
              </MaskReveal>
              <p className="mt-6 text-[12px] uppercase tracking-[0.16em] text-mute">01</p>
              <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">
                Private chef
              </h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-mute">
                One evening or a villa week. We shop, cook, serve and leave the kitchen as we found it.
              </p>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/catering" className="group block">
              <MaskReveal>
                <div className="relative min-h-[52vh] overflow-hidden lg:min-h-[64vh]">
                  <Photo
                    src={photos.catering.file}
                    alt={photos.catering.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
              </MaskReveal>
              <p className="mt-6 text-[12px] uppercase tracking-[0.16em] text-mute">02</p>
              <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Catering</h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-mute">
                Staffed villa events. Buffet or plated. About ten to seventy-five guests.
              </p>
            </Link>
          </Reveal>
        </div>
      </section>

      <IslandChooser />

      <section className="bg-sand/60 py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.18em] text-mute">How it works</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
            Tell us about the evening. We build the rest around it.
          </h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-3">
            {STEPS.map((step) => (
              <li key={step.n}>
                <p className="text-[12px] uppercase tracking-[0.16em] text-brass">{step.n}</p>
                <h3 className="mt-4 font-display text-[1.75rem] font-light text-ink">{step.title}</h3>
                <p className="mt-3 max-w-[32ch] text-[17px] leading-relaxed text-mute">{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.18em] text-mute">Published prices</p>
          <p className="mt-6 max-w-[22ch] font-display text-[clamp(2rem,4.2vw,3.5rem)] font-light leading-[1.08] text-ink">
            Signature dinner from $125 a guest on Oʻahu, $150 on Maui and Kauaʻi.
          </p>
          <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-mute">
            The written quote is the confirmed total. Service 20% and Hawaiʻi GET sit on their own lines — once.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-block text-sm font-medium text-ink underline underline-offset-4"
          >
            The line-by-line card
          </Link>
        </div>
      </section>

      <Longform sections={hubHomeSections} />
      <LongFaq items={[...hubFaqs, ...hubHomeFaqs]} title="Cost, cleanup, kitchens." />
      <QuoteTeaser headline="Date, guest count, and the house. That is enough to start." />
    </>
  );
}
