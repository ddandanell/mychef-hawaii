import { ConciergeBell, Flame, NotebookPen, ShoppingBasket, Sparkles } from 'lucide-react';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { getTiers, formatBand, formatOtherOffer, getOtherOffer } from '@/data/rateCard';
import { FaqSection, ZoneModule } from '@/pages/islands/shared';
import type { Faq } from '@/pages/islands/shared';
import { usePageIsland } from '@/pages/islands/utils';
import { BandChip, PlainChip, SectionIntro } from '@/pages/services/ServicePage';
import { InquiryHero, InquiryPageJsonLd } from '@/pages/expanded/shared';

/**
 * Kauaʻi — Private Chef subpage (planned `/kauai/private-chef`).
 * Inquiry-framed P2 page per island-kauai.md and research sec15 Table 15.4 /
 * sec23 Table 23.4: dual-node villa dinners (South Shore base + North Shore
 * pod), published zone honesty, dinner-for-two architecture. No Request a
 * Quote, no "now serving", no LocalBusiness schema.
 */

const islandName = 'Kauaʻi';
const path = '/kauai/private-chef';

const crumbs = [
  { label: 'Home', to: '/' },
  { label: islandName, to: '/kauai' },
  { label: 'Private Chef' },
];

const inclusions = [
  { icon: NotebookPen, title: 'Menu design', text: 'Designed with you, within 48 hours of your inquiry being picked up at launch.' },
  { icon: ShoppingBasket, title: 'Shopping', text: 'Sourced day-of, with substitution lists and 5–7-day order locks behind the scenes.' },
  { icon: Flame, title: 'Cooking', text: 'Cooked in your villa or estate kitchen, start to finish.' },
  { icon: ConciergeBell, title: 'Table service', text: 'Plated, paced and served.' },
  { icon: Sparkles, title: 'Cleanup', text: 'Left cleaner than we found it.' },
];

const faqs: Faq[] = [
  {
    q: 'Why can’t I book a Kauaʻi chef dinner yet?',
    a: 'Kauaʻi is inquiry-stage — the launch is gated on the inquiry list proving demand and on concierge referral agreements, because the island’s highest-value bookings are referred, not searched. Your dated inquiry is the evidence, on both counts.',
  },
  {
    q: 'What will a private chef dinner on Kauaʻi cost?',
    a: 'Market bands run $118–$250 per person (competitor-published, labeled); the local leader publishes $200–$250 per person and caps at 15 guests. Our published CORE band is $175–$250 per person — the transparent rate card nobody local published until now. Inquiry-stage until a staffed team launches.',
  },
  {
    q: 'North Shore or South Shore — does it change the dinner?',
    a: 'The plan is dual-node: a South Shore base plus a North Shore pod, which undercuts the incumbent flat driving fees on reliability. Princeville/Hanalei and Poʻipū carry a published surcharge; Haʻena and the far North are quote-only with 72-hour notice and a Hanalei-bridge weather clause — closures reschedule rather than forfeit.',
  },
  {
    q: 'Is island food more expensive on Kauaʻi?',
    a: 'Honestly, yes: the supplier bench is thin and shipped-in food carries a +10–15% cost posture (labeled). Menus are engineered around that with substitution lists and early order locks — and the posture is published, not buried.',
  },
  {
    q: 'Can you do a dinner for two — a proposal or elopement?',
    a: 'That format is a published fixed-price architecture at $650–$950, against a platform two-guest band of $210 per person (competitor-published, labeled). Beach-ceremony limits push celebrations into villas and estates — which is exactly where a private chef belongs.',
  },
];

export default function KauaiPrivateChef() {
  const { island } = usePageIsland('kauai');
  const core = getTiers('kauai').find((t) => t.tier === 'CORE');
  const dinnerTwo = getOtherOffer('dinner-for-two');
  const dinnerTwoKauai = formatOtherOffer(dinnerTwo, 'kauai');

  return (
    <>
      <InquiryHero
        island={island}
        crumbs={crumbs}
        service="Private Chef — planned service, activates at launch"
        title="A private chef on your shore."
        lede="Signature in-villa dinners planned as a dual-node service — a South Shore base around Poʻipū and Kōloa, a North Shore pod for Princeville and Hanalei estates. It activates when the inquiry list proves the demand. Tell us your dates and your shore."
        image="/photos/kauai-chef-plating-seared-fish-mountains.jpg"
        imageAlt="Chef’s hands finishing seared fish in a Kauaʻi villa kitchen, misted mountains beyond."
        chips={
          <>
            {core ? (
              <BandChip onDark label={`Our posture ${formatBand(core)} a guest — activates at launch`} />
            ) : null}
            <PlainChip onDark>Market bands $118–$250 a guest — competitor-labeled</PlainChip>
            <StatusChip kind="planned" onDark>
              Planned
            </StatusChip>
          </>
        }
        primaryTo="/quote?island=kauai&service=private-chef"
        secondary={{ label: 'The zone map ↓', to: '#zones' }}
      />

      {/* What's included */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="What’s included"
            title="Everything but the alcohol."
            body="One team, one evening, five jobs — all inside the per-person band. Provisional until launch: published before it is promised."
          />
          <Reveal stagger staggerDelay={0.07} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {inclusions.map((tile) => (
              <div
                key={tile.title}
                className="border border-stone bg-white p-5 transition-all duration-300 "
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

      {/* Dinner for two */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <Reveal className="overflow-hidden ">
            <img
              src="/photos/maui-kapalua-dinner-for-two.jpg"
              alt="Dinner for two on a Kapalua lānai at blue hour."
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionIntro
              eyebrow="Kauaʻi — for two"
              title="Dinner for two."
              body="A fixed-price private dinner built for two — proposals, elopements, the quiet night the whole trip was for. Beach-ceremony limits push the celebration into your villa or estate; the chef makes it the best room on the island."
            />
            <Reveal delay={0.15} className="mt-6 flex flex-col gap-4">
              {dinnerTwoKauai ? <BandChip label={`Fixed price — ${dinnerTwoKauai}`} /> : null}
              <ul className="space-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                <li>+ Florals — quoted</li>
                <li>+ Photography — quoted</li>
                <li>+ Wine pairing — quoted</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Zone map as a trust feature */}
      <div id="zones">
        <ZoneModule
          islandId="kauai"
          dark
          flip
          eyebrow="The zone map, published"
          intro="The incumbent norm on Kauaʻi is a flat $50–$75/day driving fee and a five-person South Shore minimum (competitor-published, labeled). We think zone pricing should be a map, not a surprise: Līhuʻe and Kapaʻa are the included base, Princeville/Hanalei and Poʻipū carry a published surcharge, and Haʻena and the far North are quote-only with 72-hour notice and a Hanalei-bridge weather clause — road closures reschedule rather than forfeit."
          chipRow={
            <>
              <StatusChip kind="pending" onDark>
                Incumbent fees — competitor-labeled
              </StatusChip>
              <span className="inline-flex items-center gap-2 text-[0.8125rem] text-ivory/85">
                Our zone fees <StatusChip kind="published" onDark>Published</StatusChip>
              </span>
              <span className="inline-flex items-center gap-2 text-[0.8125rem] text-ivory/85">
                Bridge/weather clause{' '}
                <StatusChip kind="policy" onDark className="border-[#6E8F7F] bg-transparent text-[#9DBFB0]">
                  POLICY
                </StatusChip>
              </span>
            </>
          }
        />
      </div>

      {/* Kitchen economics honesty */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[720px] px-5 text-center lg:px-10">
          <Reveal>
            <p className="text-[12px] text-ink-soft">The honest answer</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              Why no booking button?
            </h2>
            <p className="mx-auto mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft lg:text-[1.125rem]">
              A booking button is a promise of a staffed, insured island team. Kauaʻi’s supplier bench is thin and
              shipped-in food costs more (+10–15% posture, labeled) — we launch when we can do it properly, not
              quickly. Your dates are the business case.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection
        heading="Asked before the first dinner."
        intro="Two-shore answers — the zone map above is the policy, published."
        faqs={faqs}
        bg="bg-sand"
      />

      <QuoteTeaserBand
        headline="Your dates are our business case."
        note="Kauaʻi — inquiry stage · private chef, dual-node: South Shore base + North Shore pod"
      />
      <InquiryPageJsonLd
        island={island}
        name="Private chef — Kauaʻi"
        description="Inquiry-stage private chef dinners planned as a dual-node Kauaʻi service — South Shore base, North Shore pod, published zone map and dinner-for-two architecture."
        path={path}
        crumbs={crumbs.map((c) => c.label)}
      />
    </>
  );
}
