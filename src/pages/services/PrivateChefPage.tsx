import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ConciergeBell, Flame, NotebookPen, ShoppingBasket, Sparkles } from 'lucide-react';
import Contours from '@/components/Contours';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { formatBand, getTiers, otherOffers } from '@/data/rateCard';
import type { RateTier } from '@/data/rateCard';
import {
  BandChip,
  JsonLd,
  SectionIntro,
  ServiceFaq,
  ServiceHero,
  ZoneStrip,
  serviceJsonLd,
  useHashScroll,
} from '@/pages/services/ServicePage';
import type { LiveIslandId, ServiceFaqItem } from '@/pages/services/ServicePage';

gsap.registerPlugin(ScrollTrigger);

/**
 * Private Chef — the flagship money page and canonical service template
 * (service-private-chef.md). The same component tree serves
 * /maui/private-chef and /oahu/private-chef with island-bound data.
 */

interface PrivateChefContent {
  islandName: string;
  path: string;
  h1: string;
  heroImage: string;
  heroAlt: string;
  bandTiers: { tier: RateTier; label: string }[];
  faqs: ServiceFaqItem[];
}

const content: Record<LiveIslandId, PrivateChefContent> = {
  maui: {
    islandName: 'Maui',
    path: '/maui/private-chef',
    h1: 'Your private chef on Maui.',
    heroImage: '/photos/svc-private-chef-maui.jpg',
    heroAlt: 'A private chef finishes seared fish with herbs in a Maui villa kitchen, ocean in the window. Concept image, not a myCHEF event.',
    bandTiers: [
      { tier: 'CORE', label: 'Core myCHEF' },
      { tier: 'ULTRA', label: "Chef's table" },
    ],
    faqs: [
      {
        q: 'We’re staying outside Wailea and Kāʻanapali — will you still come?',
        a: 'Yes, with honest zoning. Wailea, Kāʻanapali, Kapalua and Makena are base zones with travel included. Upcountry carries a published surcharge, and Pāʻia or Haʻikū are quoted with the menu — every fee is published before it is ever on an invoice.',
      },
      {
        q: 'What happens if it rains on the night?',
        a: 'Every villa dinner carries a wet-weather plan in writing before confirmation — service moves indoors or under cover, and the pacing adjusts with it. If weather truly defeats the evening, the rescheduling posture on /legal applies.',
      },
      {
        q: 'How far can you go with dietary needs?',
        a: 'Vegan, gluten-free, dairy-free, nut-aware, pescatarian and kids’ plates are routine — designed into the menu, not substituted at the pass. Severe allergies are discussed directly with your chef before confirmation, never assumed from a form field.',
      },
      {
        q: 'How early should we book for December through March?',
        a: 'Peak-season dates go first. As a launch-season kitchen our calendar is still open, but the holidays and spring break book weeks out — ask early, and we hold confirmed dates in writing.',
      },
    ],
  },
  oahu: {
    islandName: 'Oʻahu',
    path: '/oahu/private-chef',
    h1: 'Your private chef on Oʻahu.',
    heroImage: '/photos/svc-private-chef-oahu.jpg',
    heroAlt: 'A private chef cooks fish and greens at an Oʻahu estate range while the dining table is set beyond. Concept image, not a myCHEF event.',
    bandTiers: [
      { tier: 'ENTRY', label: 'Entry' },
      { tier: 'CORE', label: 'Core myCHEF' },
    ],
    faqs: [
      {
        q: 'Our condo kitchen is small — does a private chef still work?',
        a: 'Yes. We design bring-equipment menus for compact condo kitchens, schedule around freight-elevator windows, and handle COI requirements with building management before the date. The kitchen size changes the plan, not the standard.',
      },
      {
        q: 'We’re on the North Shore — what does the surcharge look like?',
        a: 'The North Shore and Turtle Bay are a published surcharge zone, 60–90+ minutes from town. The fee is published with your quote and itemised on it — never discovered on the invoice after the fact.',
      },
      {
        q: 'We’re staying 30 days — is a single dinner the right fit?',
        a: 'A signature dinner is a great first night. Across a 30-day stay, the multi-day and weekly formats on the vacation chef page usually price better than stacking single dinners — we’ll tell you honestly which fits.',
      },
      {
        q: 'Do you serve residents, not just visitors?',
        a: 'Yes — the kamaʻāina weekly line is a standing weekly chef service for Oʻahu households, from Kahala to Hawaiʻi Kai. It has its own anchor on the vacation chef page, under #weekly.',
      },
    ],
  },
};

const inclusions = [
  { icon: NotebookPen, title: 'Menu design', text: 'Designed with you, within 48 hours of enquiry.' },
  { icon: ShoppingBasket, title: 'Shopping', text: 'Sourced the same day as your dinner.' },
  { icon: Flame, title: 'Cooking', text: 'Cooked in your kitchen, start to finish.' },
  { icon: ConciergeBell, title: 'Table service', text: 'Plated, paced and served.' },
  { icon: Sparkles, title: 'Cleanup', text: 'Left cleaner than we found it.' },
];

const timeline = [
  { t: 'T-3:00', text: 'Arrival & setup — rentals set, mise en place.' },
  { t: 'T-0:00', text: 'First course — paced to your evening, not a seatings chart.' },
  { t: 'T+2:00', text: 'Mains, wine, the long middle of a good night.' },
  { t: 'T+3:30', text: 'Dessert, cleanup, quiet exit.' },
];

const dietaryChips = ['Vegan', 'Gluten-free', 'Dairy-free', 'Nut-aware', 'Pescatarian', 'Kids’ plates'];

/* ---------------- Section 2 — What's included ---------------- */

function Inclusions() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="What’s included"
          title="Everything but the alcohol."
          body="One team, one evening, five jobs — all inside the per-person band."
        />
        <Reveal stagger staggerDelay={0.07} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {inclusions.map((tile) => (
            <div
              key={tile.title}
              className="rounded-[14px] border border-stone bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <tile.icon aria-hidden="true" className="h-6 w-6 text-clay" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-[1.125rem] font-medium leading-[1.2] text-ink">{tile.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-soft">{tile.text}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Not included: alcohol, rentals, venue fees — coordinated as add-ons if you want them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — The evening, hour by hour (GSAP rail scrub, isolated) ---------------- */

function EveningTimeline() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tween = gsap.fromTo(
      rail,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top',
        scrollTrigger: { trigger: rail.parentElement, start: 'top 80%', end: 'bottom 55%', scrub: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="The evening, hour by hour"
          title="Paced to your night, not ours."
        />
        <div className="relative mt-12 max-w-3xl">
          <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-stone" />
          <div
            ref={railRef}
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-clay"
          />
          <Reveal stagger staggerDelay={0.09} className="space-y-10">
            {timeline.map((block) => (
              <div key={block.t} className="relative pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.45rem] h-[15px] w-[15px] rounded-full border-2 border-clay bg-sand"
                />
                <p className="font-display text-[1.375rem] font-medium leading-[1.2] text-brass">{block.t}</p>
                <p className="mt-1 max-w-[55ch] text-[1.0625rem] leading-[1.65] text-ink-soft">{block.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Menus & dietary ---------------- */

function MenusDietary() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Menus & dietary</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            How menus work.
          </h2>
          <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            Within 48 hours of your enquiry, your chef proposes one or two menu directions — built around your
            group, your kitchen and what’s good that week. You refine it together until it’s exactly the dinner
            you had in mind.
          </p>
        </Reveal>
        <Reveal stagger staggerDelay={0.04}>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-ink-soft">Dietary capability</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {dietaryChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full border border-stone bg-white px-3.5 py-1.5 text-sm text-ink"
              >
                {chip}
              </span>
            ))}
          </div>
          <p className="mt-6 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Severe allergies discussed directly with your chef before confirmation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Island extras ---------------- */

function MauiExtras() {
  const ultra = getTiers('maui').find((t) => t.tier === 'ULTRA');
  const dinnerTwo = otherOffers.find((o) => o.offer === 'Dinner for two / elopement');
  const mauiPosture =
    dinnerTwo?.orientation
      .split('·')
      .map((s) => s.trim())
      .find((s) => /maui/i.test(s)) ?? dinnerTwo?.orientation ?? '';

  return (
    <>
      <section id="chefs-table" className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
        <Contours
          stroke="#9C7A33"
          strokeWidth={1}
          className="absolute -left-32 top-1/2 h-[520px] w-[700px] -translate-y-1/2 opacity-25"
        />
        <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            dark
            eyebrow="Maui — the halo format"
            title="The private chef’s table."
            body="A full chef’s-table tasting in your own villa — counter pacing, course-by-course storytelling, and not a stranger in sight."
          />
          <Reveal delay={0.15} className="mt-8 flex flex-col gap-4">
            {ultra ? (
              <BandChip onDark label={`Chef’s table ${formatBand(ultra)}/pp — ${ultra.model}`} />
            ) : null}
            <p className="flex flex-wrap items-center gap-2 text-sm leading-[1.65] text-ivory/75">
              <span>The resort version seats you with strangers at $150/pp.</span>
              <StatusChip kind="pending" onDark>
                Published anchor — labeled
              </StatusChip>
            </p>
          </Reveal>
        </div>
      </section>

      <section id="for-two" className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <figure>
              <div className="overflow-hidden rounded-[14px]">
                <img
                  src="/photos/dinner-for-two.jpg"
                  alt="A candlelit table set for two — the fixed-price private dinner-for-two format"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-soft">
                Concept image — not a myCHEF Hawaiʻi event. Final photography pending.
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <SectionIntro
              eyebrow="Maui — for two"
              title="Dinner for two."
              body="A fixed-price private dinner built for two — proposals, anniversaries, the quiet night that matters most of all."
            />
            <Reveal delay={0.15} className="mt-6">
              {mauiPosture ? <BandChip label={`Fixed price — ${mauiPosture}`} /> : null}
              <ul className="mt-6 space-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                <li>+ Florals — quoted</li>
                <li>+ Photography — quoted</li>
                <li>+ Wine pairing — quoted</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function OahuExtras() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-10 px-5 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Oʻahu — condo kitchens</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Small kitchen? No problem.
          </h2>
          <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            Most resort condos weren’t built for restaurant service — ours are planned for it. Bring-equipment
            menus, freight-elevator windows scheduled with building management, and COI paperwork handled before
            the date.
          </p>
          <ul className="mt-6 space-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
            <li>— Bring-equipment menus for compact kitchens</li>
            <li>— Freight-elevator scheduling handled</li>
            <li>— COI requirements managed with the building</li>
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="flex items-center">
          <Link
            to="/oahu/vacation-chef#weekly"
            className="group block w-full rounded-[14px] border border-stone bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(34,29,21,.06),0_20px_44px_-12px_rgba(34,29,21,.2)]"
          >
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-moss">For residents</p>
            <h3 className="mt-3 font-display text-[1.375rem] font-medium leading-[1.2] text-ink">
              Live here? The kamaʻāina weekly line.
            </h3>
            <p className="mt-3 max-w-[55ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
              A standing weekly chef for Oʻahu households — set menus, groceries at cost, one fixed weekly fee.
            </p>
            <span className="mt-5 inline-flex items-center text-sm font-medium text-clay transition-transform duration-300 group-hover:translate-x-1">
              See the weekly service →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function PrivateChefPage({ island }: { island: LiveIslandId }) {
  useHashScroll();
  const c = content[island];
  const tiers = getTiers(island);
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: c.islandName, to: `/${island}` },
    { label: 'Private Chef' },
  ];

  return (
    <>
      <ServiceHero
        crumbs={crumbs}
        eyebrow={`Private Chef — ${c.islandName}`}
        title={c.h1}
        lede="Your chef designs the menu with you, shops that day, arrives three hours before service, cooks, serves, and leaves the kitchen cleaner than they found it."
        image={c.heroImage}
        imageAlt={c.heroAlt}
        chips={c.bandTiers.map(({ tier, label }) => {
          const entry = tiers.find((t) => t.tier === tier);
          return entry ? (
            <BandChip key={tier} onDark label={`${label} ${formatBand(entry)}/pp`} />
          ) : null;
        })}
        primary={{ label: 'Request a Quote', to: `/quote?island=${island}&service=private-chef` }}
        secondary={{ label: 'See pricing orientation →', to: '/pricing' }}
      />
      <Inclusions />
      <EveningTimeline />
      <MenusDietary />
      {island === 'maui' ? <MauiExtras /> : <OahuExtras />}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ZoneStrip islandId={island} />
        </div>
      </section>
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ServiceFaq
            items={c.faqs}
            intro={`Island-specific answers for ${c.islandName} — statewide answers live on the homepage.`}
          />
        </div>
      </section>
      <QuoteTeaserBand
        headline="Dinner at your place, done properly."
        note={`Quote opens with ${c.islandName} pre-selected · All times HST`}
      />
      <JsonLd
        data={serviceJsonLd({
          name: `Private chef — ${c.islandName}`,
          description: c.h1,
          islandName: c.islandName,
          path: c.path,
          crumbs: crumbs.map((x) => x.label),
        })}
      />
    </>
  );
}
