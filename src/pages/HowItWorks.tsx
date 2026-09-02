import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ChevronDown } from 'lucide-react';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { islandOrder, islands } from '@/data/islands';
import { zoneMap } from '@/data/zoneMap';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

/**
 * /how-it-works — the canonical process explainer for the whole network
 * (how-it-works.md). Sets operational expectations honestly: arrival times,
 * zone travel, kitchen realities. Schema: HowTo (5 steps) + FAQPage
 * (AI-extraction only).
 */

/* ---------------- Section 1 — Header ---------------- */

function Header() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">The Process</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          <WordMask text="From enquiry to empty dishwasher." delay={0.15} />
        </h1>
        <Reveal delay={0.6} y={24}>
          <p className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink">
            One process on every island. The only things that change are the drive times — and we publish
            those too.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — The five steps ---------------- */

const steps = [
  {
    n: '01',
    title: 'Enquire — two minutes.',
    body: 'Five fields: island, dates, party size, service, and how to reach you. Every field tells you why we ask it. No account, no phone-tag obligation.',
    chips: [] as { kind: 'published' | 'rpr'; label: string }[],
  },
  {
    n: '02',
    title: 'Menu design — 48 hours.',
    body: 'A real human replies with one or two menu directions and an indicative per-person range. You refine together — dietary needs, allergies, kids\u2019 plates, pacing.',
    chips: [],
  },
  {
    n: '03',
    title: 'The written quote.',
    body: 'Itemised: per-person or fixed price, minimums, staffing, travel-zone fees if any, service charge and tax — starting prices are published; the quote confirms the night.',
    chips: [
      { kind: 'published' as const, label: 'Published' },
      { kind: 'rpr' as const, label: 'RPR' },
    ],
  },
  {
    n: '04',
    title: 'The event.',
    body: 'We shop that day, arrive about three hours before service, cook, serve, and pace the evening around you. Rentals, florals and wine pairing coordinated if you want them.',
    chips: [],
  },
  {
    n: '05',
    title: 'Cleanup & follow-up.',
    body: 'The kitchen is left cleaner than we found it. Later, one honest review request — never incentivized, never gated. FTC rules, and our own.',
    chips: [],
  },
];

function FiveSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      // Step activation — low-frequency state changes only.
      section.querySelectorAll<HTMLElement>('[data-step]').forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 60%',
          end: 'bottom 60%',
          onToggle: (self) => {
            if (self.isActive) setActive(Number(el.dataset.step));
          },
        });
      });
      // Progress rail fills as steps advance (scrub).
      if (railRef.current && !reduced) {
        gsap.fromTo(
          railRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top',
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'top 60%', end: 'bottom 80%', scrub: true },
          },
        );
      } else if (railRef.current) {
        gsap.set(railRef.current, { scaleY: 1 });
      }
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Sticky step number (desktop pin column) */}
        <div className="hidden lg:block">
          <div className="sticky top-32 self-start">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Five Steps</p>
            <div className="relative mt-6 h-[11rem] overflow-hidden" aria-live="polite">
              <motion.span
                key={active}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block font-display text-[10rem] font-semibold leading-none text-brass"
              >
                {steps[active].n}
              </motion.span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft">
              One process, every island — the variables are drive times and zone fees, and those are
              published.
            </p>
          </div>
        </div>

        {/* Steps column with progress rail */}
        <div className="relative">
          <span aria-hidden="true" className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-stone" />
          <span
            ref={railRef}
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-brass"
          />
          <div className="space-y-16 lg:space-y-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                data-step={i}
                className="relative pl-10 lg:flex lg:min-h-[55vh] lg:flex-col lg:justify-center"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 bg-sand transition-colors duration-300',
                    i <= active ? 'border-brass' : 'border-stone',
                  )}
                />
                <Reveal>
                  <p className="font-display text-2xl font-semibold text-brass lg:hidden">{s.n}</p>
                  <h2 className="mt-2 font-display text-[clamp(1.625rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.015em] text-ink lg:mt-0">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">{s.body}</p>
                  {s.chips.length > 0 ? (
                    <span className="mt-4 flex flex-wrap gap-2">
                      {s.chips.map((c) => (
                        <StatusChip key={c.label} kind={c.kind}>
                          {c.label}
                        </StatusChip>
                      ))}
                    </span>
                  ) : null}
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 2b — The setting (editorial imagery) ---------------- */

const settingImages = [
  {
    src: '/photos/plated-fish-lanai-dusk.jpg',
    alt: 'Seared fish on dark ceramic on a lava-stone lānai at dusk',
  },
  {
    src: '/photos/gatherings-garden-table-dusk.jpg',
    alt: 'A long garden table with family-style fish and candles at dusk',
  },
];

function Setting() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">The Setting</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Your dining room, wherever you&apos;re staying.
          </h2>
          <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft lg:text-[1.125rem]">
            The venue is yours — a villa lanai, a condo with a view, an estate garden. Ours is everything that
            happens around the table: the menu, the pacing, the service, and the kitchen left cleaner than we
            found it.
          </p>
        </Reveal>
        <Reveal stagger staggerDelay={0.09} className="grid grid-cols-2 gap-4 lg:gap-6">
          {settingImages.map((img) => (
            <figure key={img.src}>
              <div className="overflow-hidden rounded-[14px] shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[12px] text-ink-soft">
                Villa table.
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Logistics we publish (zone honesty) ---------------- */

const logisticsFacts: { text: string }[] = [
  { text: 'Team arrives ~3 hrs pre-service' },
  { text: 'Farther kitchens carry a published travel surcharge or are quote-only' },
  { text: '72-hr minimum notice for far kitchens' },
  { text: 'No flat statewide coverage — inter-island is quote-only' },
];

function Logistics() {
  const zoneSummaries = islandOrder.map((id) => {
    const z = zoneMap[id];
    const count = (cls: string) => z.zones.filter((zone) => zone.class === cls).length;
    return {
      name: islands[id].name,
      summary: `${count('base')} included · ${count('surcharge')} travel surcharge · ${count('quote-only')} quote-only`,
    };
  });

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Travel</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              Drive times are real costs. We publish them.
            </h2>
          </Reveal>
          <Reveal stagger staggerDelay={0.09} className="mt-10 grid gap-5 sm:grid-cols-2">
            {logisticsFacts.map((f) => (
              <div key={f.text} className="border border-stone bg-white p-5">
                <p className="text-[1.0625rem] leading-6 text-ink">{f.text}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-8 space-y-2">
            {zoneSummaries.map((z) => (
              <p key={z.name} className="text-sm text-ink-soft">
                <span className="text-ink">{z.name}</span> — {z.summary}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — What we bring vs. what we need ---------------- */

const weBring = [
  'Chefs and servers',
  'Knives and kit',
  "That day's ingredients",
  'Rentals coordination',
];

const weNeed = [
  'A working kitchen (we adapt to condo kitchens with bring-equipment menus)',
  'Access ~3 hours ahead',
  'Parking/building access notes for condos and resorts',
];

function BringVsNeed() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            What we bring. What we need.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal stagger staggerDelay={0.06}>
            <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">We bring</h3>
            <ul className="mt-6 space-y-4">
              {weBring.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                  <span className="text-[1.0625rem] leading-[1.65] text-ink-soft">{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                <span className="text-[1.0625rem] leading-[1.65] text-ink-soft">
                  Insurance posture published at{' '}
                  <Link to="/legal" className="font-medium text-clay underline-offset-2 hover:underline">
                    /legal
                  </Link>{' '}
                  <StatusChip kind="pending">Pending — publish only if verifiable</StatusChip>
                </span>
              </li>
            </ul>
          </Reveal>
          <Reveal stagger staggerDelay={0.06}>
            <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">We need from you</h3>
            <ul className="mt-6 space-y-4">
              {weNeed.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                  <span className="text-[1.0625rem] leading-[1.65] text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Mini FAQ ---------------- */

const faqs = [
  {
    q: 'Do condo kitchens actually work?',
    a: 'Yes. We adapt menus to condo kitchens and bring equipment where needed — tell us what you have and we design around it. Access about three hours before service is all we ask.',
    chip: null as { kind: 'rpr'; label: string } | null,
  },
  {
    q: 'How do you handle dietary needs and allergies?',
    a: 'During menu design we capture dietary needs, allergies, kids\u2019 plates and pacing. Your chef shops that day with your requirements in hand, and severe allergies get a written prep plan agreed before the event.',
    chip: null,
  },
  {
    q: 'What if weather or road closures hit a far-zone event?',
    a: 'Force-majeure posture: road closures, flood advisories and bridge closures (e.g., Hanalei) reschedule rather than forfeit, where safe and feasible. Final terms are attorney-drafted.',
    chip: { kind: 'rpr' as const, label: 'RPR' },
  },
  {
    q: 'Should we tip?',
    a: 'Voluntary only. Any mandatory charge — like a service charge — is disclosed in writing on your itemised quote, never discovered on the bill.',
    chip: { kind: 'rpr' as const, label: 'Attorney review — RPR' },
  },
];

function MiniFaq() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
        <Reveal className="lg:col-span-2">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Quick Answers</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            The practical questions.
          </h2>
          <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            Island-specific detail lives on each island page; policies live on{' '}
            <Link to="/legal" className="font-medium text-clay underline-offset-2 hover:underline">
              /legal
            </Link>
            .
          </p>
        </Reveal>
        <Reveal stagger staggerDelay={0.07} className="lg:col-span-3">
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.25rem] font-medium leading-[1.2] text-ink">{f.q}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-clay transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-6 pr-8 text-[1.0625rem] leading-[1.65] text-ink-soft">
                    {f.a}
                    {f.chip ? (
                      <>
                        {' '}
                        <StatusChip kind={f.chip.kind}>{f.chip.label}</StatusChip>
                      </>
                    ) : null}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function HowItWorks() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How booking a myCHEF Hawaii private chef works',
              step: steps.map((s, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: s.title,
                text: s.body,
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]),
        }}
      />
      <Header />
      <FiveSteps />
      <Setting />
      <Logistics />
      <BringVsNeed />
      <MiniFaq />
      <QuoteTeaserBand />
    </>
  );
}
