import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Contours from '@/components/Contours';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import HostLink from '@/components/HostLink';
import { originFor } from '@/config/site';
import { islandOrder, islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

/**
 * /islands — the full island-chooser page (islands.md). A routing page:
 * four island profile bands with role, coverage posture and honest launch
 * state. No pricing tables, no FAQs. Schema: ItemList of the four island
 * destinations (no LocalBusiness — that markup lives on island homepages).
 */

/* ---------------- Clip-reveal image (GSAP, isolated) ---------------- */

function ClipImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tween = gsap.fromTo(
      el,
      { clipPath: 'inset(12% 12% 12% 12%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.9,
        ease: 'power3.out',
        once: true,
        scrollTrigger: { trigger: el, start: 'top 75%', once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className={cn('overflow-hidden rounded-[14px]', className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

/* ---------------- Section 1 — Header ---------------- */

function Header() {
  const live = islandOrder.filter((id) => islands[id].state === 'live').map((id) => islands[id].name);
  const inquiry = islandOrder.filter((id) => islands[id].state === 'inquiry').map((id) => islands[id].name);

  return (
    <section className="relative overflow-hidden bg-ivory py-20 lg:py-28">
      <Contours className="absolute -right-24 -top-16 h-96 w-[520px] opacity-[0.06]" stroke="#A34A28" />
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Four Islands</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          <WordMask text="Choose your island." delay={0.15} />
        </h1>
        <Reveal delay={0.5} y={24}>
          <p className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink">
            Four island departments under mychef-hawaii.com. Each island is its own host — its own chefs,
            zones, journal, blog and pricing. Two are booking now; two are building their inquiry lists.
          </p>
        </Reveal>
        <Reveal delay={0.65} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-stone bg-white/70 px-3.5 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-moss" />
            Booking now — {live.join(' & ')}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-brass/60 bg-transparent px-3.5 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-brass">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-brass" />
            Inquiry stage — {inquiry.join(' & ')}
          </span>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — Island profile bands ---------------- */

interface Band {
  id: IslandId;
  eyebrow: string;
  role: string;
  coverage: string;
  stats?: string[];
  honestLine?: string;
  cta: string;
  alt: string;
}

const bands: Band[] = [
  {
    id: 'maui',
    eyebrow: 'Maui — Booking now',
    role:
      "The state's highest-value visitor market and our primary island: signature in-villa dinners, private chef's tables and full wedding-week service.",
    coverage: 'Wailea · Kāʻanapali · Kapalua · Makena · Upcountry — plus travel-zone honesty beyond base zones.',
    stats: ['$305 per-visitor-per-day spend — CY2025, preliminary', '2,500 destination weddings — 2024, official'],
    cta: 'Explore Maui',
    alt: 'A mobile cocktail bar on a Maui villa terrace at sunset. Campaign still, not a documented event.',
  },
  {
    id: 'oahu',
    eyebrow: 'Oʻahu — Booking now',
    role:
      'Our scale island: resort-corridor villa dining for visitors, and weekly chef service for resident households — year-round.',
    coverage: 'Waikīkī · Kahala & the Gold Coast · Ko Olina · Kailua/Lanikai · North Shore (surcharge zone)',
    stats: ['5.68M visitors — CY2025, preliminary', '5,154 destination weddings — 2024, official'],
    cta: 'Explore Oʻahu',
    alt: 'Plated private-chef dinner on an Oʻahu villa lānai at dusk. Campaign still, not a documented event.',
  },
  {
    id: 'kauai',
    eyebrow: 'Kauaʻi — Inquiry stage',
    role:
      'Second-highest visitor wallet in the state on the smallest base: North Shore estates, Poʻipū retreats, weddings to ~75 guests.',
    coverage: 'Princeville/Hanalei (North) · Poʻipū/Kōloa (South) · Līhuʻe base · Haʻena quote-only',
    honestLine:
      'We open Kauaʻi when its inquiry list proves demand. Tell us your dates and shore — it directly shapes the launch.',
    cta: 'Join the Kauaʻi inquiry list',
    alt: 'Chef’s hands finishing seared fish in a Kauaʻi kitchen, misted mountains beyond. Campaign still, not a documented event.',
  },
  {
    id: 'bigisland',
    eyebrow: 'Hawaiʻi Island (Big Island) — Inquiry stage',
    role:
      "The Kohala Coast corridor first — seven luxury resort communities within a 30-minute service radius, and the state's strongest farm-and-ranch sourcing story.",
    coverage: 'Zones A–D published · Kona–Kohala base · Hilo/Volcano quote-only (2.5–3 hr drive)',
    honestLine:
      "The island is 4,000 square miles; we won't pretend to cover it. Kona–Kohala first, east side quote-only, when we launch.",
    cta: 'Join the Hawaiʻi Island inquiry list',
    alt: 'Whole grilled fish and tropical fruit on Kohala lava rock at golden hour. Campaign still, not a documented event.',
  },
];

function IslandBand({ band, index }: { band: Band; index: number }) {
  const isl = islands[band.id];
  const liveIsland = isl.state === 'live';
  const flip = index % 2 === 1;

  return (
    <section
      className={cn('py-20 lg:py-28', index % 2 === 0 ? 'bg-ivory' : 'bg-sand')}
      style={{ backgroundImage: `linear-gradient(${isl.hue}0a, ${isl.hue}0a)` }}
    >
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <HostLink
          island={band.id}
          className="group grid items-center gap-10 lg:grid-cols-5 lg:gap-16"
          aria-label={`${isl.name} — ${isl.stateLabel}`}
        >
          <ClipImage
            src={isl.selectorImage}
            alt={band.alt}
            className={cn('aspect-[4/3] shadow-soft', flip ? 'lg:order-2 lg:col-span-2' : 'lg:col-span-2')}
          />
          <Reveal stagger staggerDelay={0.08} className={cn(flip ? 'lg:order-1 lg:col-span-3' : 'lg:col-span-3')}>
            <p className="flex flex-wrap items-center gap-2.5 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-ink-soft">
              <span
                aria-hidden="true"
                className={cn('inline-block h-1.5 w-1.5 rounded-full', liveIsland ? 'bg-moss' : 'bg-brass')}
              />
              {band.eyebrow}
              {!liveIsland && <StatusChip kind="inquiry">Inquiry stage</StatusChip>}
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              {isl.name}
            </h2>
            <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft lg:text-[1.125rem]">
              {band.role}
            </p>
            {band.honestLine ? (
              <p className="mt-3 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink">{band.honestLine}</p>
            ) : null}
            <p className="mt-5 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
              {band.coverage}
            </p>
            {band.stats ? (
              <span className="mt-5 flex flex-wrap gap-2">
                {band.stats.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-stone bg-white/70 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </span>
            ) : null}
            <span
              className={cn(
                'mt-7 inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200',
                liveIsland
                  ? 'bg-clay text-white group-hover:-translate-y-px group-hover:bg-clay-deep'
                  : 'border border-brass text-brass group-hover:bg-brass/10',
              )}
            >
              {band.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Reveal>
        </HostLink>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Why the asymmetry ---------------- */

function AsymmetryExplainer() {
  return (
    <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
      <Contours stroke="#9C7A33" strokeWidth={1} className="absolute -left-32 bottom-0 h-[480px] w-[640px] opacity-20" />
      <div className="relative mx-auto w-full max-w-[720px] px-5 text-center lg:px-0">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ivory">
            Why aren&apos;t all four islands live?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-[1.0625rem] leading-[1.65] text-ivory/85 lg:text-[1.125rem]">
            Because a booking button is a promise. myCHEF lists an island as &apos;booking now&apos; only when a
            staffed, insured island team exists behind it. Kauaʻi and Hawaiʻi Island open when their inquiry
            lists — and our hiring — say it&apos;s time. We&apos;d rather tell you the truth on a webpage than
            improvise it on your event night.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <Link
            to="/trust"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brass transition-colors hover:text-ivory"
          >
            Our trust standards
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function Islands() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'myCHEF Hawaii island destinations',
            itemListElement: (['maui', 'oahu', 'kauai', 'bigisland'] as IslandId[]).map((id, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: islands[id].name,
              url: typeof window !== 'undefined' ? originFor(id) : `https://${id}.mychef-hawaii.com`,
            })),
          }),
        }}
      />
      <Header />
      {bands.map((band, i) => (
        <IslandBand key={band.id} band={band} index={i} />
      ))}
      <AsymmetryExplainer />
      <QuoteTeaserBand note="Request a Quote — or join an inquiry list · Kauaʻi & Hawaiʻi Island" />
    </>
  );
}
