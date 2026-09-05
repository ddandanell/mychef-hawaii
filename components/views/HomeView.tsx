import Link from 'next/link';
import { CtaLink, QuoteCta } from '@/components/Cta';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import IslandChooser from '@/components/IslandChooser';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import Reveal, { MaskReveal } from '@/components/Reveal';
import { hubChrome, heroFocal, processSteps } from '@/data/chromeCopy';
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

export default function HomeView() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'FoodService',
            name: 'Private chef Hawaii — myCHEF',
            description: hubChrome.lede,
            areaServed: 'Hawaiʻi',
            serviceType: 'Private chef',
            parentOrganization: { '@type': 'Organization', name: 'myCHEF Hawaii' },
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
        ]}
      />

      <Hero src={photos.hubHero.file} alt={photos.hubHero.alt} objectPosition={heroFocal.hub}>
        <Eyebrow tone="paper">{hubChrome.kicker}</Eyebrow>
        <LineReveal
          text={hubChrome.h1}
          className="mt-6 font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-light leading-[1.02] tracking-[-0.02em] text-paper"
        />
        <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-paper lg:text-[19px]">{hubChrome.lede}</p>
        <p className="mt-4 text-[15px] text-paper">{hubChrome.price}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <QuoteCta variant="light">{hubChrome.primaryCta}</QuoteCta>
          <CtaLink href="#islands" variant="ghost">
            {hubChrome.secondaryCta}
          </CtaLink>
        </div>
      </Hero>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>Private chef & catering</Eyebrow>
          <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
            {hubChrome.coresH2}
          </h2>
        </div>
        <div className="mx-auto mt-16 grid w-full max-w-spread gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Reveal>
            <Link href="/private-chef" className="group block">
              <MaskReveal>
                <div className="relative min-h-[52vh] overflow-hidden lg:min-h-[64vh]">
                  <Photo
                    src={photos.hubChef.file}
                    alt={photos.hubChef.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                </div>
              </MaskReveal>
              <p className="mt-6 font-display text-[1.375rem] font-light text-brass">01</p>
              <h3 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Private chef</h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-mute">{hubChrome.chefLine}</p>
              <p className="mt-2 text-[15px] text-mute">{hubChrome.chefPrice}</p>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/catering" className="group block">
              <MaskReveal>
                <div className="relative min-h-[52vh] overflow-hidden lg:min-h-[64vh]">
                  <Photo
                    src={photos.cateringHero.file}
                    alt={photos.cateringHero.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                </div>
              </MaskReveal>
              <p className="mt-6 font-display text-[1.375rem] font-light text-brass">02</p>
              <h3 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Catering</h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-mute">{hubChrome.cateringLine}</p>
              <p className="mt-2 text-[15px] text-mute">{hubChrome.cateringPrice}</p>
            </Link>
          </Reveal>
        </div>
      </section>

      <IslandChooser />

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
            {hubChrome.howH2}
          </h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.n}>
                <p className="font-display text-[1.75rem] font-light text-brass">{step.n}</p>
                <h3 className="mt-4 font-display text-[1.5rem] font-light text-ink">{step.title}</h3>
                <p className="mt-3 max-w-[32ch] text-[17px] leading-relaxed text-mute">{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>Published prices</Eyebrow>
          <p className="mt-6 max-w-[24ch] font-display text-[clamp(2rem,4.2vw,3.5rem)] font-light leading-[1.08] text-ink">
            Signature dinner from $125 a guest on Oʻahu, $150 on Maui and Kauaʻi.
          </p>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-mute">
            Stay Chef from $850 a day on Oʻahu and $1,050 on Maui. Service 20% and Hawaiʻi GET up to 4.712% appear as
            separate lines on the written quote.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-block text-sm font-medium text-ink underline decoration-brass underline-offset-[6px]"
          >
            The line-by-line card
          </Link>
        </div>
      </section>

      <Longform sections={hubHomeSections} />
      <LongFaq items={[...hubFaqs, ...hubHomeFaqs]} title="Cost, cleanup, kitchens." />
      <QuoteTeaser headline={hubChrome.closer} />
    </>
  );
}
