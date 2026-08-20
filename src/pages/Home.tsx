import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Accordion from '@radix-ui/react-accordion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Contours from '@/components/Contours';
import HeroMedia from '@/components/HeroMedia';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import HostLink from '@/components/HostLink';
import { PRODUCTION_ROOT } from '@/config/site';
import { islandOrder, islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { getTiers, formatBand } from '@/data/rateCard';
import { homeTrustRows } from '@/data/proofRegister';

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Section 1 — Hero ---------------- */

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] min-h-[640px] items-end overflow-hidden">
      <HeroMedia
        src="/photos/home/hero.jpg"
        overlay="dusk"
        alt="Plated seared fish on a volcanic-stone villa lānai at dusk, Pacific beyond the railing."
      />
      <div className="relative mx-auto w-full max-w-spread px-5 pb-24 pt-40 lg:px-10">
        <div className="max-w-[640px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass"
          >
            Private Chefs · Catering · Events — Hawaii
          </motion.p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
            <WordMask text="A private chef, in your villa, on your island." delay={0.2} />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
              myCHEF brings its international private-chef team to Hawaiʻi — in-villa dinners, wedding weeks,
              catering and multi-day chef service across Oʻahu, Maui, Kauaʻi and Hawaiʻi Island.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-sm text-ivory/85">
                Part of the myCHEF family, operating since 2015 — internationally
              </span>
              <StatusChip kind="verified">Verified — International</StatusChip>
              <StatusChip kind="inquiry">Hawaii Launching Now</StatusChip>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/quote"
                className="inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay active:scale-[0.97]"
              >
                Request a Quote
              </Link>
              <a
                href="#islands"
                className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
              >
                Choose your island ↓
              </a>
            </div>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-14 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ivory/60"
        >
          All times HST · Indicative pricing — see /pricing
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 right-5 hidden flex-col items-center gap-3 lg:right-10 md:flex"
        aria-hidden="true"
      >
        <span className="scroll-cue-pulse font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ivory/70 [writing-mode:vertical-lr]">
          Where are you dining?
        </span>
        <span className="scroll-cue-pulse block h-12 w-px bg-ivory/50" />
      </motion.div>
    </section>
  );
}

/* ---------------- Section 2 — Island Selector ---------------- */

/** Homepage-only selector photos (dim12 §6.1 / P24-08 roles). Other routes keep their own assets. */
const homeIslandPhotos: Record<IslandId, { src: string; alt: string }> = {
  oahu: {
    src: '/photos/home/sel-oahu.jpg',
    alt: 'Oʻahu household table set for a fish lunch, Gold Coast garden and ocean through the sliders.',
  },
  maui: {
    src: '/photos/home/sel-maui.jpg',
    alt: 'Chef’s hands finishing seared fish on dark ceramic in a Maui villa kitchen.',
  },
  kauai: {
    src: '/photos/home/sel-kauai.jpg',
    alt: 'Two grilled-fish plates on a wet stone table against misted Kauaʻi mountains.',
  },
  bigisland: {
    src: '/photos/home/sel-bigisland.jpg',
    alt: 'Whole snapper and coffee cherries on lava rock with the Kohala Coast behind.',
  },
};

function IslandSelector() {
  return (
    <section id="islands" className="relative overflow-hidden bg-ivory py-20 lg:py-28">
      <Contours className="absolute -right-24 -top-16 h-96 w-[520px] opacity-[0.06]" stroke="#A34A28" />
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">One hub · four island sites</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Where in Hawaiʻi are you dining?
          </h2>
          <p className="mx-auto mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            This is {PRODUCTION_ROOT}. Each island is its own department on a subdomain — own chefs, zones,
            journal and pricing.
          </p>
        </Reveal>
        <Reveal stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {islandOrder.map((id) => {
            const isl = islands[id];
            return (
              <HostLink
                key={id}
                island={id}
                className="group flex flex-col overflow-hidden rounded-[14px] border border-stone bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(34,29,21,.06),0_20px_44px_-12px_rgba(34,29,21,.2)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={homeIslandPhotos[id].src}
                    alt={homeIslandPhotos[id].alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 lg:p-5">
                  <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{isl.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{isl.role}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={`dot-pop inline-block h-2 w-2 rounded-full ${isl.state === 'live' ? 'bg-moss' : 'bg-brass'}`}
                    />
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
                      {isl.stateLabel}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
                    {isl.selectorCta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-soft">
                    {id}.{PRODUCTION_ROOT}
                  </span>
                </div>
              </HostLink>
            );
          })}
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Two islands are booking now. Two open as demand confirms — we publish coverage honestly, never
            aspirationally.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Services Strip ---------------- */

const services = [
  {
    title: 'Private Chef',
    desc: 'A chef designs, shops, cooks, serves and cleans — in your villa or home.',
    img: '/photos/home/svc-chef.jpg',
    alt: 'Private chef searing fish in a villa kitchen.',
    to: '/services#private-chef',
  },
  {
    title: 'Private Dining',
    desc: 'Celebration dinners and dinners-for-two, coursed and served.',
    img: '/photos/home/svc-dining.jpg',
    alt: 'Two plated fish courses on linen with candlelight and a dusk ocean window.',
    to: '/services#private-dining',
  },
  {
    title: 'Catering & Events',
    desc: 'Receptions, retreats and gatherings from 10 to 75 guests.',
    img: '/photos/home/svc-catering.jpg',
    alt: 'A chef team plates identical event dishes under a tent beside a Hawaiian lawn and ocean. Concept image, not a myCHEF event.',
    to: '/corporate',
  },
  {
    title: 'Vacation Chef',
    desc: 'Multi-day and weekly chef service for villa stays and households.',
    img: '/photos/home/svc-vacation.jpg',
    alt: 'A vacation chef plates morning fruit and eggs while a family breakfasts by the pool. Concept image, not a myCHEF event.',
    to: '/services#vacation-chef',
  },
];

function ServicesStrip() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">What We Do</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Four ways to dine privately.
          </h2>
        </Reveal>
        <Reveal stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative flex flex-col overflow-hidden rounded-[14px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(34,29,21,.06),0_20px_44px_-12px_rgba(34,29,21,.2)]"
            >
              <Contours
                stroke="#E3D9C8"
                strokeWidth={1}
                className="absolute -right-10 -top-10 z-10 h-40 w-52 opacity-40"
              />
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 lg:p-5">
                <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{s.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <p className="mt-3 border-t border-stone pt-3 font-mono text-[0.625rem] uppercase leading-4 tracking-[0.08em] text-ink-soft">
                  Available on Oʻahu &amp; Maui · Inquiry on Kauaʻi &amp; Hawaiʻi Island
                </p>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Statewide hubs — weddings + gatherings ---------------- */

function StatewideHubs() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Statewide hubs</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Two more ways in — then we send you to an island.
          </h2>
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-6 lg:grid-cols-2">
          <Link
            to="/weddings"
            className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[14px] shadow-soft"
          >
            <img
              src="/photos/home/hub-weddings.jpg"
              alt="A wedding-week long table under a banyan at dusk, guests eating while chefs plate. Concept image, not a myCHEF event."
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(26,21,16,0.15) 0%, rgba(26,21,16,0.72) 55%, rgba(26,21,16,0.88) 100%)',
              }}
            />
            <div className="relative p-6 lg:p-8">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Weddings</p>
              <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-[1.15] text-ivory">
                One team for the wedding week.
              </h3>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ivory/80">
                Welcome dinner to recovery brunch. Maui leads; Oʻahu hosts weekends; Kauaʻi and Hawaiʻi Island take dated
                inquiries.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brass">
                Wedding hub
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          <Link
            to="/corporate"
            className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[14px] shadow-soft"
          >
            <img
              src="/photos/home/hub-gatherings.jpg"
              alt="Long outdoor Hawaiian garden table with family-style fish, vegetables and candles at dusk."
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(26,21,16,0.1) 0%, rgba(26,21,16,0.55) 50%, rgba(26,21,16,0.82) 100%)',
              }}
            />
            <div className="relative p-6 lg:p-8">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Gatherings</p>
              <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-[1.15] text-ivory">
                Retreats, crews, private rooms.
              </h3>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ivory/85">
                Not a convention-centre play while citywides are closed. We staff 10–75 in villas and production days.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brass">
                Gatherings hub
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Trust Strip / Honesty Register ---------------- */

function TrustStrip() {
  const contourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contourRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const paths = el.querySelectorAll('path');
    paths.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    const tween = gsap.to(paths, {
      strokeDashoffset: 0,
      ease: 'none',
      stagger: 0.04,
      scrollTrigger: { trigger: el, start: 'top 85%', end: '+=150%', scrub: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const chipKind = (label: string) =>
    label.startsWith('VERIFIED') ? 'verified' : label.startsWith('NOT AVAILABLE') ? 'not-available' : 'bde';

  return (
    <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
      <div ref={contourRef} aria-hidden="true" className="absolute inset-0">
        <Contours stroke="#9C7A33" strokeWidth={1} className="absolute -left-40 top-0 h-[640px] w-[860px] opacity-25" />
      </div>
      <div className="relative mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Our Proof Policy</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ivory">
            New to Hawaiʻi. Honest about it.
          </h2>
          <Link
            to="/trust"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brass transition-colors hover:text-ivory"
          >
            Read our trust standards
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal stagger className="space-y-6">
          {homeTrustRows.map((row) => (
            <div key={row.label} className="border-b border-white/10 pb-6">
              <p className="text-[1.0625rem] leading-[1.65] text-ivory/85">{row.claim}</p>
              <div className="mt-3">
                <StatusChip kind={chipKind(row.label)} onDark>
                  {row.label}
                </StatusChip>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — How It Works (teaser) ---------------- */

const steps = [
  { n: '01', title: 'Enquire', desc: 'Five fields, two minutes, no account.' },
  { n: '02', title: 'Menu design', desc: 'Your chef proposes menus around your tastes and dietary needs.' },
  {
    n: '03',
    title: 'The event',
    desc: 'We shop, arrive early, cook, serve — and leave the kitchen cleaner than we found it.',
  },
  { n: '04', title: 'Follow-up', desc: "One honest, unincentivized review request. That's all we'll ever ask." },
];

function HowItWorksTeaser() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            From enquiry to empty dishwasher.
          </h2>
        </Reveal>
        <Reveal stagger staggerDelay={0.12} className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-stone md:left-0 md:top-[7px] md:h-px md:w-full"
          />
          {steps.map((s) => (
            <div key={s.n} className="relative pl-8 md:pl-0 md:pt-8">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-brass bg-ivory md:left-0 md:top-0"
              />
              <p className="font-display text-3xl font-semibold text-brass">{s.n}</p>
              <h3 className="mt-2 font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-deep"
          >
            The full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 6 — Pricing Orientation ---------------- */

function PricingOrientation() {
  const cards = (['oahu', 'maui'] as const).map((id) => {
    const core = getTiers(id).find((t) => t.tier === 'CORE')!;
    return { island: islands[id], core };
  });

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Indicative Pricing</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            What a private chef costs in Hawaiʻi.
          </h2>
        </Reveal>
        <Reveal stagger staggerDelay={0.1} className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map(({ island, core }) => (
            <div key={island.id} className="rounded-[14px] border-2 border-clay/60 bg-white p-6 shadow-soft lg:p-8">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">
                {island.name} · Signature in-villa dinner — CORE
              </p>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <span className="font-display text-5xl font-semibold tracking-tight text-ink">
                  {formatBand(core)}
                </span>
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-ink-soft">/person</span>
                <StatusChip kind="bde">BDE</StatusChip>
              </div>
              {/* brass range bar drawing under the price */}
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-stone">
                <div className="h-full w-2/3 rounded-full bg-brass" />
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                Minimums apply · {island.name} zones
              </p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
          <span className="inline-flex items-center gap-2">
            20% service charge — convention <StatusChip kind="rpr">RPR</StatusChip>
          </span>
          <span className="inline-flex items-center gap-2">
            GET up to 4.7120% <StatusChip kind="rpr">CPA Review</StatusChip>
          </span>
          <span className="inline-flex items-center gap-2">
            50% deposit — market norm <StatusChip kind="rpr">RPR</StatusChip>
          </span>
        </Reveal>
        <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="text-sm italic text-ink-soft">
            Planning orientation only — final quotes are itemised and confirmed in writing.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-deep"
          >
            See pricing orientation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 7 — FAQ ---------------- */

const faqs = [
  {
    q: 'Which islands do you serve?',
    a: 'We are live on Oʻahu and Maui. Kauaʻi and Hawaiʻi Island are inquiry-stage — tell us your dates and your inquiry helps set the launch sequence. We do not claim flat statewide coverage.',
  },
  {
    q: 'How much does a private chef cost in Hawaiʻi?',
    a: 'Indicative planning bands: Oʻahu $95–$190+ per person, Maui $125–$250+ per person, by tier. Every band is labeled BUSINESS DECISION REQUIRED until our rate card is approved; your final quote is itemised in writing.',
  },
  {
    q: "What's included?",
    a: 'Menu design, shopping, cooking, table service and cleanup. Alcohol, rentals and venue fees are excluded and always quoted separately.',
  },
  {
    q: 'Do you have reviews?',
    a: 'Not yet in Hawaiʻi — and we say so. Reviews publish only after verified events, are never bought and never incentivized. Our international family history (Bali, Dubai, Cape Town, since 2015) is labeled VERIFIED — INTERNATIONAL.',
  },
  {
    q: 'How far ahead should I book?',
    a: 'December–March and wedding peaks (September/October/May) book early — enquire as soon as you have dates. Far-zone events carry a 72-hour minimum notice.',
  },
];

function FaqSection() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
        <Reveal className="lg:col-span-2">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Questions</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Asked everywhere we launch.
          </h2>
          <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            Statewide answers — island-specific detail lives on each island page.
          </p>
        </Reveal>
        <Reveal stagger staggerDelay={0.07} className="lg:col-span-3">
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.25rem] font-medium leading-[1.2] text-ink">
                      {f.q}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-clay transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-6 pr-8 text-[1.0625rem] leading-[1.65] text-ink-soft">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': '#org',
              name: 'myCHEF Hawaii',
              description:
                'Private chefs, private dining, catering and events across Oʻahu, Maui, Kauaʻi and Hawaiʻi Island. Part of the international myCHEF family.',
              parentOrganization: { '@type': 'Organization', name: 'myCHEF (international)' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'myCHEF Hawaii',
            },
          ]),
        }}
      />
      <Hero />
      <IslandSelector />
      <ServicesStrip />
      <StatewideHubs />
      <TrustStrip />
      <HowItWorksTeaser />
      <PricingOrientation />
      <FaqSection />
      <QuoteTeaserBand />
    </>
  );
}
