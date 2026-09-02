import { Link } from 'react-router';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { DualCta } from '@/components/DualCta';
import { DualCtaLight } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import HeroMedia from '@/components/HeroMedia';
import { HowItWorksBlock } from '@/components/PackageGrid';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import { islandOrder, islands } from '@/data/islands';
import { islandOffers, SEARCH_VOLUMES } from '@/data/offers';
import { photos } from '@/data/photos';
import { namedPackages } from '@/data/packages';

const hubFaqs = [
  {
    q: 'Which islands do you cook?',
    a: 'Oʻahu, Maui, Kauaʻi and Hawaiʻi Island (Kona / Kohala). Each island is its own site with published starting prices. Kauaʻi is a real bookable market — not a waitlist.',
  },
  {
    q: 'How much does a private chef cost in Hawaii?',
    a: 'Oʻahu CORE $125–$190/pp (private chef oahu 90/mo). Oahu catering is the larger door at 720/mo. Maui chef $150–$250/pp (260/mo) with Maui catering at 480/mo. Kauaʻi chef and Kauai catering both 210/mo. Big Island CORE $150–$225. 20% service + Hawaiʻi GET up to 4.712% once on the quote. Groceries at cost on Stay Chef.',
  },
  {
    q: "What's included?",
    a: 'Menu design, shopping, cooking in your villa, table service and a clean kitchen. Groceries for Stay Chef billed at cost. Drinks BYO or quoted. Bartender add-on on /bar.',
  },
  {
    q: 'Do you have Hawaii guest reviews?',
    a: 'Not yet — and we will not invent them. Proof here is published prices, sample menus, cleanup, and a written quote.',
  },
  {
    q: 'Airbnb / vacation rental kitchens?',
    a: 'Yes, when there is a real cooktop. Hotel rooms without kitchens are declined. WhatsApp the property type.',
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
                'Private chef Hawaii from $125/pp. In-villa dinners, catering, weddings and mobile bar on Oʻahu, Maui, Kauaʻi and Hawaiʻi Island.',
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

      <section className="relative flex min-h-[100svh] min-h-[640px] items-end overflow-hidden">
        <HeroMedia src={photos.hubHero.file} overlay="dusk" alt={photos.hubHero.alt} />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-24 pt-40 lg:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass"
          >
            Private chef Hawaii · {SEARCH_VOLUMES['private chef hawaii']}/mo
          </motion.p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,7vw,5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-white">
            A private chef in your villa — four islands, published prices.
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="mt-6 max-w-[60ch] text-[1.125rem] leading-[1.6] text-ivory/90">
              We shop, cook, serve and clean. WhatsApp for a quote — typical
              reply in Hawaii business hours.
            </p>
            <div className="mt-8">
              <DualCta intent="a private chef in Hawaii" size="lg" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="islands" className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Four island doors</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-ink">Where are you dining?</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {islandOrder.map((id) => {
              const isl = islands[id];
              const o = islandOffers[id];
              return (
                <HostLink
                  key={id}
                  island={id}
                  className="group flex flex-col overflow-hidden rounded-[14px] border border-stone bg-white shadow-soft transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={isl.selectorImage}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-[1.375rem] font-medium text-ink">{o.h1}</h3>
                    <p className="mt-2 text-clay">from ${o.fromPp}/pp</p>
                    <p className="mt-2 flex-1 text-sm text-ink-soft">{isl.role}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-clay">
                      {isl.selectorCta}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </HostLink>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">Two doors</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">
            Private chef and Hawaii catering.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Link to="/private-chef" className="border border-stone bg-white p-6">
              <p className="font-display text-2xl font-medium text-ink">Private chef Hawaii</p>
              <p className="mt-2 text-ink-soft">from $125 per guest · villa dinner · 50/mo</p>
            </Link>
            <Link to="/catering" className="border border-ink bg-white p-6">
              <p className="font-display text-2xl font-medium text-ink">Hawaii catering</p>
              <p className="mt-2 text-ink-soft">
                210/mo statewide. Oahu catering 720 · Maui catering 480 · Kauai catering 210. Buffet or plated.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Named packages</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-ink">Date Night to wedding week</h2>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            Starting from each island’s CORE band. 20% service + GET up to 4.712% called out once on the quote.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {namedPackages.map((p) => (
              <Link
                key={p.id}
                to="/pricing"
                className="rounded-[14px] border border-stone bg-white p-4 hover:border-clay/50"
              >
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-soft">{p.guests}</p>
                <p className="mt-1 font-display text-lg font-medium text-ink">{p.name}</p>
                <p className="mt-1 text-sm text-clay">from {p.price('maui')}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <DualCtaLight intent="a named package in Hawaii" />
          </div>
        </div>
      </section>

      <HowItWorksBlock />

      <section className="bg-ivory py-20">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
          <Reveal className="lg:col-span-2">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Questions</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-ink">Statewide, then an island.</h2>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <Accordion.Root type="single" collapsible>
              {hubFaqs.map((f, i) => (
                <Accordion.Item key={f.q} value={`h-${i}`} className="border-b border-stone">
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                      <span className="font-display text-[1.25rem] font-medium text-ink">{f.q}</span>
                      <ChevronDown className="h-5 w-5 text-clay group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className="pb-6 text-ink-soft">{f.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </section>

      <QuoteTeaserBand headline="Private chef Hawaii — from $125/pp." />
    </>
  );
}
