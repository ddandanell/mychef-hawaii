import { ConciergeBell, Flame, NotebookPen, ShoppingBasket, Sparkles } from 'lucide-react';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { getTiers, formatBand } from '@/data/rateCard';
import { FaqSection, SectionHead, ZoneModule } from '@/pages/islands/shared';
import type { Faq } from '@/pages/islands/shared';
import { usePageIsland } from '@/pages/islands/utils';
import { BandChip, PlainChip, SectionIntro } from '@/pages/services/ServicePage';
import { InquiryHero, InquiryPageJsonLd } from '@/pages/expanded/shared';

/**
 * Hawaiʻi Island (Big Island) — Private Chef subpage (planned
 * `/bigisland/private-chef`). Inquiry-framed P2 page per island-bigisland.md
 * and research sec15 Table 15.3 / sec23 Table 23.3: no Request a Quote, no
 * "now serving", no LocalBusiness schema. CTA = Join the Inquiry List.
 */

const islandName = 'Hawaiʻi Island';
const path = '/bigisland/private-chef';

const crumbs = [
  { label: 'Home', to: '/' },
  { label: islandName, to: '/bigisland' },
  { label: 'Private Chef' },
];

const inclusions = [
  { icon: NotebookPen, title: 'Menu design', text: 'Designed with you around the west-side sourcing bench, within 48 hours of your inquiry being picked up at launch.' },
  { icon: ShoppingBasket, title: 'Shopping', text: 'Sourced the same day as your dinner — Kona-side suppliers, Waimea market runs batched with corridor jobs.' },
  { icon: Flame, title: 'Cooking', text: 'Cooked in your villa kitchen, start to finish.' },
  { icon: ConciergeBell, title: 'Table service', text: 'Plated, paced and served.' },
  { icon: Sparkles, title: 'Cleanup', text: 'Left cleaner than we found it.' },
];

const faqs: Faq[] = [
  {
    q: 'Why can’t I book a date yet?',
    a: 'Hawaiʻi Island is inquiry-stage: there is no staffed west-side unit yet, so there is no booking button on this page. Dated inquiries are the evidence that sets the launch sequence — tell us your dates and you directly move the launch clock.',
  },
  {
    q: 'What will a private chef dinner on the Big Island cost?',
    a: 'Two honest reference points: the platform-published band on the island runs roughly $106–$169 per person (competitor-published, labeled), and our indicative core posture is $150–$225 per person, labeled BUSINESS DECISION REQUIRED until the rate card activates at launch. We publish numbers as orientation before we ever put them on an invoice.',
  },
  {
    q: 'We’re staying in Hilo or Volcano — will a chef come to us?',
    a: 'At launch, the east side is quote-only. Hilo/Volcano is 2.5–3 hours from the west side, so east-side events are quoted with dedicated staffing and an overnight model — never squeezed into a west-side day. A same-day Kona–Hilo round trip is a logistics fantasy, and we publish that instead of discovering it on your event night.',
  },
  {
    q: 'Can the menu feature Kona coffee and island producers?',
    a: 'Yes — under strict claim rules. Producer names are printed only after written verification, claims are made per ingredient (never a blanket “locally sourced”), and from July 1, 2027 Act 198 requires origin-named coffee to be at least 51% that origin: we serve and label 100% Kona or Kaʻū, or we don’t use the regional name at all.',
  },
  {
    q: 'What about Ironman or Kona coffee festival weeks?',
    a: 'Big event weeks compress corridor availability, so we plan around them: flag your dates early in your inquiry and feasibility is confirmed in writing. We don’t publish fabricated availability calendars.',
  },
];

export default function BigIslandPrivateChef() {
  const { island } = usePageIsland('bigisland');
  const core = getTiers('bigisland').find((t) => t.tier === 'CORE');

  return (
    <>
      <InquiryHero
        island={island}
        alias="Big Island"
        crumbs={crumbs}
        service="Private Chef — planned service, activates at launch"
        title="A private chef for the Kona–Kohala coast."
        lede="The signature dinner, planned for the island’s luxury corridor: your chef designs the menu with you, shops the west-side supply bench that day, cooks in your villa kitchen, serves, and leaves it cleaner than they found it. It activates with the Kona–Kohala launch — and dated inquiries set the launch clock."
        image="/photos/loc-kona.jpg"
        imageAlt="Close-up of chef hands tweezing a garnish onto a muted ceramic plate"
        chips={
          <>
            {core ? (
              <BandChip onDark label={`Indicative core ${formatBand(core)}/pp — activates at launch`} />
            ) : null}
            <PlainChip onDark>Platform band ~$106–$169/pp — competitor-labeled</PlainChip>
            <StatusChip kind="planned" onDark>
              Planned
            </StatusChip>
          </>
        }
        primaryTo="/quote?island=bigisland&service=private-chef"
        secondary={{ label: 'See the zones ↓', to: '#zones' }}
      />

      {/* Service fit — what's included */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="What’s included"
            title="Everything but the alcohol."
            body="One team, one evening, five jobs — all inside the per-person band. Every element is provisional until launch: published before it is promised."
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

      {/* Sourcing-led menus */}
      <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="relative mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <SectionHead
              dark
              eyebrow="The sourcing story"
              title="Menus written around the state’s deepest bench."
              intro="Kanpachi raised off the Kona coast. Ranch beef from the island’s upcountry. Mushrooms from the Hāmākua side. Two famous coffee origins. When we launch here, menus will be written around this bench — with every producer name verified before it’s printed."
            />
            <Reveal delay={0.1} className="mt-6 flex flex-wrap items-center gap-2">
              <StatusChip kind="pending" onDark>
                Pending — written verification
              </StatusChip>
              <StatusChip kind="rpr" onDark>
                Compliance — Act 198 labeling from Jul 1, 2027
              </StatusChip>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.12em] text-brass">
                Producer names publish only with written verification.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="overflow-hidden rounded-[14px]">
            <img
              src="/assets/farmers-market.jpg"
              alt="Island produce — avocado, citrus, greens and fish on ice — styled on a wooden table"
              loading="lazy"
              className="aspect-[16/10] h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Venue logic */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="Where this service fits"
            title="Seven resort communities, one 30-minute radius."
            body="The island’s luxury villas cluster along one west-side corridor — Hualālai, Kūkiʻo, Kohanaiki, Waikōloa, Mauna Lani, the Mauna Kea area and the Kona Village stretch — which is exactly why the launch starts there. One service radius, no pretending to cover 4,000 square miles."
          />
          <Reveal stagger staggerDelay={0.07} className="mt-12 grid gap-4 md:grid-cols-3 lg:gap-6">
            <div className="rounded-[14px] border border-stone bg-white p-6 shadow-soft">
              <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">Corridor villas</h3>
              <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">
                Kailua-Kona, Keauhou and the Kohala resorts are the base zone — travel included, the highest job
                density, and the deepest short-stay villa supply on the island.
              </p>
            </div>
            <div className="rounded-[14px] border border-stone bg-white p-6 shadow-soft">
              <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">Venue verification</h3>
              <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">
                Partner properties must be registered, resort-zoned or NUC-holding under Hawaiʻi County’s
                short-term-rental rules — verification is a channel gate, not a courtesy.
              </p>
            </div>
            <div className="rounded-[14px] border border-stone bg-white p-6 shadow-soft">
              <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">The club tier</h3>
              <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">
                Hualālai, Kūkiʻo and Kohanaiki full-stay residencies are referral-gated — reached through
                concierge and club channels, with confidentiality and multi-day staffing depth. See the vacation
                chef page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Zones */}
      <div id="zones">
        <ZoneModule
          islandId="bigisland"
          reverse
          eyebrow="Coverage — honestly zoned"
          intro="Zone pricing is market-validated on this island — an incumbent Kona caterer publishes location-based delivery fees of $100–$500 island-wide (competitor-published, labeled). We publish our zones the same way: a map, not a surprise."
        />
      </div>

      <FaqSection
        heading="Asked before the first dinner."
        intro="Inquiry-stage answers for the Big Island — we publish constraints instead of discovering them on your event night."
        faqs={faqs}
        bg="bg-ivory"
      />

      <QuoteTeaserBand
        headline="Tell us your dates — they set the launch clock."
        note="Hawaiʻi Island (Big Island) — inquiry stage · private chef, Kona–Kohala first"
      />
      <InquiryPageJsonLd
        island={island}
        name="Private chef — Hawaiʻi Island (Big Island)"
        description="Inquiry-stage private chef service planned for the Kona–Kohala corridor of Hawaiʻi Island — zones, sourcing rules and launch posture published."
        path={path}
        crumbs={crumbs.map((c) => c.label)}
      />
    </>
  );
}
