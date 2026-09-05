import Link from 'next/link';
import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import Eyebrow from '@/components/Eyebrow';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import { LongFaq, Longform } from '@/components/Longform';
import { islandChooserCopy } from '@/data/chromeCopy';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { feeStack } from '@/data/rateCard';
import { proofRegister } from '@/data/proofRegister';
import { articlesFor } from '@/data/editorial';
import { MASTER_MAP, masterHostName } from '@/data/commercialGraph';
import { HUB_ALL_PICKER_PATHS } from '@/data/hubDirectories';
import { moneyNeighborhoods } from '@/data/offers';
import { uniqueCells } from '@/data/uniqueCells';
import { areas } from '@/data/areas';
import { islandServices } from '@/data/islandServices';
import { occasionPages } from '@/data/occasionPages';
import { cateringFormats } from '@/data/cateringFormats';
import { fineDiningPages } from '@/data/fineDining';
import { staffingPages } from '@/data/staffingPages';
import { menuSkuPages } from '@/data/menuSkus';
import { helpArticles } from '@/data/helpArticles';
import { SUPPORT_PATHS } from '@/data/islandSupport';
import { islandLegal } from '@/data/islandLegal';
import { islandJournal } from '@/data/islandJournal';
import { islandBlog } from '@/data/islandBlog';
import { islandLocations } from '@/data/islandLocations';
import { islandAreas } from '@/data/islandAreas';
import { islandContact } from '@/data/islandContact';
import { islandTrust } from '@/data/islandTrust';
import { islandServiceIndex, SERVICE_INDEX_LINKS } from '@/data/islandServiceIndex';
import { islandHelpIndex } from '@/data/islandHelpIndex';
import { islandFineDiningIndex } from '@/data/islandFineDiningIndex';
import { islandStaffingIndex } from '@/data/islandStaffingIndex';
import { islandCorporate, CORPORATE_INDEX_LINKS } from '@/data/islandCorporate';
import { islandGatherings, GATHERINGS_INDEX_LINKS } from '@/data/islandGatherings';
import { islandIslands } from '@/data/islandIslands';
import { islandSitemap } from '@/data/islandSitemap';
import { journalArticles } from '@/data/journalArticles';
import { blogArticles } from '@/data/blogArticles';
import { photos, type PhotoKey } from '@/data/photos';
import { getHubDirectoryById } from '@/data/hubDirectories';

export function HowItWorksView() {
  const steps = [
    { n: '01', title: 'Enquire — two minutes.', body: 'Five fields: island, dates, party size, service, and how to reach you. No account.' },
    { n: '02', title: 'Menu design — 48 hours.', body: 'A real human replies with menu directions and an indicative range. You refine together.' },
    { n: '03', title: 'The written quote.', body: 'Itemised: food, staffing, travel if any, service charge and tax. The quote confirms the night.' },
    { n: '04', title: 'The event.', body: 'We shop that day, arrive about three hours before service, cook, serve, and pace the evening around you.' },
    { n: '05', title: 'Cleanup & follow-up.', body: 'The kitchen is left cleaner than we found it. Later, one honest review request — never incentivized.' },
  ];
  return (
    <>
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">The Process</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-ink">
            From enquiry to empty dishwasher.
          </h1>
          <p className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink">
            One process on every island. The only things that change are the drive times — and we publish those too.
          </p>
        </div>
      </section>
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-container space-y-16 px-5 lg:px-10">
          {steps.map((s) => (
            <article key={s.n}>
              <p className="font-display text-2xl font-light text-ink">{s.n}</p>
              <h2 className="mt-2 font-display text-[clamp(1.625rem,3vw,2.25rem)] font-light text-ink">{s.title}</h2>
              <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.65] text-mute">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
      <QuoteTeaser />
    </>
  );
}

export function TrustView() {
  return (
    <>
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">Trust</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-ink">
            New to Hawaiʻi. Not new at this.
          </h1>
          <p className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink">
            We do not yet have Hawaiʻi guest reviews. They publish here after verified events — never bought, never
            invented. Published prices and a written quote are what we can prove today.
          </p>
          <ul className="mt-12 max-w-3xl space-y-8">
            {proofRegister.map((row) => (
              <li key={row.claim} className="border-b border-line pb-6">
                <p className="text-[17px] leading-[1.65] text-ink">{row.claim}</p>
                <p className="mt-2 text-[12px] text-mute">{row.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteTeaser />
    </>
  );
}

export function IslandTrustView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  const copy = islandTrust[islandId];
  const photo = photos[copy.photo];
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">What we can show today</p>
          <ul className="mt-12 max-w-3xl space-y-8">
            {proofRegister.map((row) => (
              <li key={row.claim} className="border-b border-line pb-6">
                <p className="text-[17px] leading-[1.65] text-ink">{row.claim}</p>
                <p className="mt-2 text-[12px] text-mute">{row.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <LongFaq items={copy.faqs} title="Before you read the register as a review page." />
      <QuoteTeaser />
    </>
  );
}

const HUB_LEGAL_SECTIONS = [
  {
    num: '01',
    title: 'Quotes & booking',
    body: 'Every booking is confirmed by an itemised written quote: menu price, staffing, travel-zone fees, service charge and tax posture — each on its own line. Indicative website bands are published starting prices. Your written quote confirms the night.',
  },
  {
    num: '02',
    title: 'Deposits',
    body: 'A deposit locks your date; the Hawaiʻi market norm is 50%, with final balance due 7–14 days before the event and headcount lock at 14–21 days. Deposit windows are proposed until counsel drafts the booking terms.',
  },
  {
    num: '03',
    title: 'Cancellation & weather',
    body: 'Proposed tiers: 28+ days partial refund posture; 14–28 days deposit retained; under 7 days full balance posture. Force-majeure (road closures, flood advisories, Hanalei bridge) reschedules rather than forfeits, where safe. Pending attorney review.',
  },
  {
    num: '04',
    title: 'Taxes (GET)',
    body: 'Hawaiʻi’s General Excise Tax is a tax on our gross income. If passed on visibly, the maximum rate is 4.7120% including county surcharge — identical on all four islands, valid through December 31, 2030 — always shown as its own line. We will never display the obsolete 4.166% figure.',
  },
  {
    num: '05',
    title: 'Service charge & gratuity',
    body: 'Where a service charge applies (20% is the market convention), Hawaiʻi law (HRS §481B-14 posture) requires it be distributed to employees as tip income or its retention clearly disclosed. Gratuity beyond that is always voluntary.',
  },
  {
    num: '06',
    title: 'Licensing, insurance & food safety',
    body: 'Operating structure, food-handler certification pathway and insurance certificates publish here when issued and verifiable. We do not display license numbers or certificates we don’t hold.',
  },
  {
    num: '07',
    title: 'Privacy & accessibility',
    body: 'We collect only what the quote form asks, use it only to serve your enquiry, never sell it. Built to WCAG 2.2 AA: contrast-checked, keyboard-navigable, reduced-motion respected.',
  },
];

export function LegalView({ islandId }: { islandId?: IslandId | null } = {}) {
  const copy = islandId ? islandLegal[islandId] : null;
  const photo = copy ? photos[copy.photo] : null;
  const sections = copy?.sections ?? HUB_LEGAL_SECTIONS;
  return (
    <>
      {copy && photo ? (
        <>
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: copy.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }}
          />
          <Hero src={photo.file} alt={photo.alt}>
            <p className="text-[13px] text-mute">{copy.kicker}</p>
            <LineReveal
              text={copy.h1}
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
            />
            <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
          </Hero>
        </>
      ) : (
        <section className="bg-paper pt-20 lg:pt-28">
          <div className="mx-auto max-w-container px-5 lg:px-10">
            <p className="text-[12px] text-mute">Policies</p>
            <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink">
              The fine print, in large type.
            </h1>
            <p className="mt-6 max-w-[68ch] text-[1.25rem] leading-[1.55] text-ink">
              Everything that governs a myCHEF Hawaii booking, written to be read.
            </p>
          </div>
        </section>
      )}
      {copy ? <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} /> : null}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl space-y-16 px-5 lg:px-10">
          {sections.map((s) => (
            <article key={s.num} id={`s${s.num}`}>
              <p className="text-[12px] text-mute">{s.num}</p>
              <h2 className="mt-2 font-display text-[1.75rem] font-light text-ink">{s.title}</h2>
              <p className="mt-4 text-[17px] leading-[1.7] text-mute">{s.body}</p>
              {s.num === '01' ? (
                <ul className="mt-6 divide-y divide-line border-t border-line">
                  {feeStack.map((row) => (
                    <li key={row.label} className="py-3 text-sm leading-relaxed text-mute">
                      {row.label}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      {copy ? <LongFaq items={copy.faqs} title="Before you deposit." /> : null}
    </>
  );
}

export function CorporateView({ kind = 'corporate' }: { kind?: 'corporate' | 'gatherings' }) {
  const uses =
    kind === 'gatherings'
      ? [
          { title: 'Birthdays and reunions', body: 'A staffed table in the house. Guest lists we hold: about ten to seventy-five.' },
          { title: 'Rehearsal dinners', body: 'The night before, as its own line — not swallowed by a reception quote.' },
          { title: 'Family villa weeks', body: 'Not a wedding stack. Groceries and dinners for the people already in the house.' },
        ]
      : [
          { title: 'Villa retreats', body: 'Full-board chef days for offsites that actually happen in houses — not ballrooms.' },
          { title: 'Production and crew catering', body: 'Call-time breakfasts and wrap dinners, 10–75, zoned honestly.' },
          { title: 'Board dinners', body: 'A Kahala dining room during a conference week is still a house, not a citywide.' },
        ];
  const h1 =
    kind === 'gatherings' ? 'Private gatherings — the house, not the ballroom.' : 'Retreats, crews, private rooms — not citywides.';
  const lede =
    kind === 'gatherings'
      ? 'Birthdays, reunions, and rehearsal dinners in villas. Staffed 10–75. Wedding-week stacks live on /weddings.'
      : 'Staffed chef catering for villa offsites and production crews of 10–75. HCC citywides are closed through 2027 — and they are not our product.';
  return (
    <>
      <Hero src="/photos/live-fire-grill-lanai-fish.jpg" alt="Live-fire grill on a villa lānai, whole fish and citrus." min="short">
        <LineReveal
          text={h1}
          className="font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.65] text-mute">
          {lede}
        </p>
        <div className="mt-8">
          <QuoteCta service="catering-events" />
        </div>
      </Hero>
      <section className="bg-paper py-20">
        <div className="mx-auto grid max-w-container gap-8 px-5 md:grid-cols-3 lg:px-10">
          {uses.map((u) => (
            <article key={u.title} className="border-t border-line pt-6">
              <h2 className="font-display text-2xl font-light text-ink">{u.title}</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-mute">{u.body}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">By island</p>
          <ul className="mt-6 grid gap-px bg-line md:grid-cols-2">
            {islandOrder.map((id) => (
              <li key={id} className="bg-paper">
                <HostLink island={id} path={kind === 'gatherings' ? '/gatherings' : '/corporate'} className="block p-5">
                  <p className="text-[12px] text-mute">{islands[id].name}</p>
                  <h2 className="mt-2 font-display text-xl font-light text-ink">
                    {kind === 'gatherings' ? 'House gatherings' : 'Villa offsites'}
                  </h2>
                  <p className="mt-2 text-sm text-mute">{kind === 'gatherings' ? '/gatherings' : '/corporate'}</p>
                </HostLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteTeaser />
    </>
  );
}

export function HubAreasView() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-container px-5 lg:px-10">
        <p className="text-[12px] text-mute">Statewide directory</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light text-ink">
          Where we cook, by island.
        </h1>
        <p className="mt-4 max-w-[65ch] text-mute">
          Each island host has two geography pages. /locations is the live dinner-door list. /areas is the map notes —
          corridors plus the rest of the named places. /islands is the island picker, not this page.
        </p>
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {islandOrder.map((id) => (
            <HostLink key={id} island={id} path="/areas" className="bg-paper p-5">
              <p className="text-[12px] text-mute">{islands[id].name}</p>
              <h2 className="mt-2 font-display text-xl font-light text-ink">Map notes</h2>
              <p className="mt-2 text-sm text-mute">/areas</p>
            </HostLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HubDirectoryView({ id }: { id: string }) {
  const copy = getHubDirectoryById(id);
  if (!copy) return null;
  const photo = photos[copy.photo];
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
        <div className="mt-8">
          <QuoteCta />
        </div>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">By island</p>
          <ul className="mt-6 grid gap-px bg-line md:grid-cols-2">
            {islandOrder.map((id) => (
              <li key={id} className="bg-paper">
                <HostLink island={id} path={copy.path} className="block p-5">
                  <p className="text-[12px] text-mute">{islands[id].name}</p>
                  <h2 className="mt-2 font-display text-xl font-light text-ink">{copy.cardLabel}</h2>
                  <p className="mt-2 text-sm text-mute">
                    {copy.path}
                    {islands[id].state === 'inquiry' ? ' · Inquiry' : ''}
                  </p>
                </HostLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <LongFaq items={copy.faqs} title="Before you open an island." />
    </>
  );
}

export function IslandsView() {
  return (
    <>
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">Four Islands</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-ink">
            Choose your island.
          </h1>
          <p className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink">
            Four island departments. Each island is its own host — its own chefs, zones and pricing. Oʻahu and Maui take
            quotes. Kauaʻi and Hawaiʻi Island are inquiry-stage. Each island host also keeps an other-islands list at
            /islands.
          </p>
        </div>
      </section>
      <section className="bg-paper">
        {islandOrder.map((id) => {
          const isl = islands[id];
          const chooser = islandChooserCopy[id];
          return (
            <HostLink
              key={id}
              island={id}
              className="group relative block min-h-[70svh] overflow-hidden"
            >
              <Photo src={isl.selectorImage} alt={isl.name} fill sizes="100vw" />
              <span aria-hidden className="absolute inset-0 bg-ink/35 lg:bg-ink/20" />
              <span aria-hidden className="absolute inset-0 hero-scrim-bottom" />
              <div className="hero-copy relative mx-auto flex min-h-[70svh] w-full max-w-spread items-end px-5 py-12 lg:px-10">
                <div className="hero-type-shadow max-w-[40rem] text-paper">
                  <Eyebrow tone="paper">{isl.stateLabel}</Eyebrow>
                  <span className="mt-4 block font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-paper">
                    {isl.name}
                  </span>
                  <span className="mt-4 block text-[17px] leading-[1.65] text-paper">{chooser.line}</span>
                  <span className="mt-4 block text-[15px] text-paper">{chooser.price}</span>
                </div>
              </div>
            </HostLink>
          );
        })}
      </section>
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">By island</p>
          <ul className="mt-6 grid gap-px bg-line md:grid-cols-2">
            {islandOrder.map((id) => (
              <li key={id} className="bg-paper">
                <HostLink island={id} path="/islands" className="block p-5">
                  <p className="text-[12px] text-mute">{islands[id].name}</p>
                  <h2 className="mt-2 font-display text-xl font-light text-ink">Other islands</h2>
                  <p className="mt-2 text-sm text-mute">/islands</p>
                </HostLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function EditorialView({ kind }: { kind: 'journal' | 'blog' }) {
  const title = kind === 'journal' ? 'The journal, by island.' : 'Guides and notes, by island.';
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-container px-5 lg:px-10">
        <p className="text-[12px] text-mute">Statewide directory</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light text-ink">{title}</h1>
        <p className="mt-4 max-w-[65ch] text-mute">
          Each island department publishes its own {kind}. The hub does not rank for “private chef Maui” — that page
          lives on the Maui host.
        </p>
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {islandOrder.map((id) => {
            const list = articlesFor(id).filter((a) => a.kind === kind);
            return (
              <HostLink key={id} island={id} path={`/${kind}`} className="bg-paper p-5">
                <p className="text-[12px] text-mute">{islands[id].name}</p>
                <h2 className="mt-2 font-display text-xl font-light text-ink">
                  {list.length} {kind} pieces
                </h2>
              </HostLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IslandEditorialView({
  islandId,
  kind,
}: {
  islandId: (typeof islandOrder)[number];
  kind: 'journal' | 'blog';
}) {
  const copy = kind === 'journal' ? islandJournal[islandId] : islandBlog[islandId];
  const photo = photos[copy.photo];
  return (
    <>
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">{islands[islandId].name}</p>
          <ul className="mt-10 space-y-6">
            {kind === 'journal'
              ? journalArticles[islandId].map((a) => (
                  <li key={a.slug} className="border-t border-line pt-6">
                    <HostLink island={islandId} path={`/journal/${a.slug}`} className="block">
                      <h2 className="font-display text-2xl font-light text-ink">{a.h1}</h2>
                      <p className="mt-2 text-mute">{a.description}</p>
                    </HostLink>
                  </li>
                ))
              : blogArticles[islandId].map((a) => (
                  <li key={a.slug} className="border-t border-line pt-6">
                    <HostLink island={islandId} path={`/blog/${a.slug}`} className="block">
                      <h2 className="font-display text-2xl font-light text-ink">{a.h1}</h2>
                      <p className="mt-2 text-mute">{a.description}</p>
                    </HostLink>
                  </li>
                ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function HtmlSitemapView({ islandId }: { islandId?: (typeof islandOrder)[number] | null }) {
  const hosts = islandId ? [islandId] : islandOrder;
  const copy = islandId ? islandSitemap[islandId] : null;
  const photo = copy ? photos[copy.photo] : null;
  const rows = [
    ...(islandId ? MASTER_MAP.filter((r) => r.host === islandId) : MASTER_MAP),
    ...(islandId
      ? []
      : HUB_ALL_PICKER_PATHS.map((path) => ({ host: 'hub' as const, path }))),
    ...hosts.flatMap((id) => [
      ...moneyNeighborhoods[id].map((hood) => ({ host: id, path: `/${hood.slug}` as const })),
      ...SUPPORT_PATHS.map((path) => ({ host: id, path })),
      ...(['/about', '/events', '/legal', '/journal', '/blog', '/locations', '/areas', '/contact', '/trust', '/services', '/help', '/fine-dining', '/staffing', '/corporate', '/gatherings', '/islands', '/sitemap'] as const).map((path) => ({
        host: id,
        path,
      })),
      ...uniqueCells[id].map((cell) => ({ host: id, path: `/${cell.slug}` as const })),
      ...islandServices[id].map((cell) => ({ host: id, path: `/${cell.slug}` as const })),
      ...occasionPages[id].map((cell) => ({ host: id, path: `/events/${cell.slug}` as const })),
      ...cateringFormats[id].map((cell) => ({ host: id, path: `/catering/${cell.slug}` as const })),
      ...fineDiningPages[id].map((cell) => ({ host: id, path: `/fine-dining/${cell.slug}` as const })),
      ...staffingPages[id].map((cell) => ({ host: id, path: `/staffing/${cell.slug}` as const })),
      ...menuSkuPages[id].map((cell) => ({ host: id, path: `/menus/${cell.slug}` as const })),
      ...helpArticles[id].map((cell) => ({ host: id, path: `/help/${cell.slug}` as const })),
      ...journalArticles[id].map((cell) => ({ host: id, path: `/journal/${cell.slug}` as const })),
      ...blogArticles[id].map((cell) => ({ host: id, path: `/blog/${cell.slug}` as const })),
    ]),
  ];
  return (
    <>
      {copy && photo ? (
        <Hero src={photo.file} alt={photo.alt}>
          <p className="text-[13px] text-mute">{copy.kicker}</p>
          <LineReveal
            text={copy.h1}
            className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
          />
          <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
        </Hero>
      ) : (
        <section className="bg-paper py-20">
          <div className="mx-auto max-w-container px-5 lg:px-10">
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-ink">Sitemap</h1>
          </div>
        </section>
      )}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <ul className="space-y-3">
            {rows.map((r) => {
              const href = `https://${masterHostName(r.host)}${r.path === '/' ? '/' : r.path}`;
              return (
                <li key={`${r.host}${r.path}`}>
                  <a href={href} className="text-ink underline underline-offset-4">
                    {href}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export function AreasIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  const copy = islandAreas[islandId];
  const photo = photos[copy.photo];
  const hoods = moneyNeighborhoods[islandId];
  const hoodSlugs = new Set(hoods.map((h) => h.slug));
  const supportingDoors = uniqueCells[islandId].filter((cell) =>
    areas[islandId].some((place) => place.slug === cell.slug),
  );
  const notes = areas[islandId].filter((place) => !hoodSlugs.has(place.slug));
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">Live dinner doors</p>
          <ul className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {hoods.map((hood) => (
              <li key={hood.slug} className="bg-paper">
                <HostLink island={islandId} path={`/${hood.slug}`} className="block p-6">
                  <h2 className="font-display text-2xl font-light text-ink">{hood.name}</h2>
                  <p className="mt-2 text-sm text-mute">/{hood.slug}</p>
                </HostLink>
              </li>
            ))}
            {supportingDoors.map((cell) => (
              <li key={cell.slug} className="bg-paper">
                <HostLink island={islandId} path={`/${cell.slug}`} className="block p-6">
                  <h2 className="font-display text-2xl font-light text-ink">{cell.name}</h2>
                  <p className="mt-2 text-sm text-mute">/{cell.slug}</p>
                </HostLink>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-[12px] text-mute">Kitchen notes</p>
          <ul className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {notes.map((place) => (
              <li key={place.slug} className="bg-paper">
                <HostLink island={islandId} path={`/blog/dining-in-${place.slug}`} className="block p-6">
                  <h2 className="font-display text-2xl font-light text-ink">{place.name}</h2>
                  <p className="mt-2 text-sm text-mute">/blog/dining-in-{place.slug}</p>
                </HostLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <LongFaq items={copy.faqs} title="Before you pick a place." />
    </>
  );
}

export function ContactIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  const copy = islandContact[islandId];
  const photo = photos[copy.photo];
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} />
        </div>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <LongFaq items={copy.faqs} title="Before you look for a phone number." />
    </>
  );
}

export function LocationsIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  const copy = islandLocations[islandId];
  const photo = photos[copy.photo];
  const hoods = moneyNeighborhoods[islandId];
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">{islands[islandId].name}</p>
          <ul className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {hoods.map((hood) => (
              <li key={hood.slug} className="bg-paper">
                <HostLink island={islandId} path={`/${hood.slug}`} className="block p-6">
                  <h2 className="font-display text-2xl font-light text-ink">{hood.name}</h2>
                  <p className="mt-2 text-sm text-mute">/{hood.slug}</p>
                </HostLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <LongFaq items={copy.faqs} title="Before you pick a corridor." />
    </>
  );
}

export function ServicesIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  const copy = islandServiceIndex[islandId];
  const photo = photos[copy.photo];
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">{islands[islandId].name}</p>
          <ul className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {SERVICE_INDEX_LINKS.map((row) => (
              <li key={row.path} className="bg-paper">
                <HostLink island={islandId} path={row.path} className="block p-6">
                  <h2 className="font-display text-2xl font-light text-ink">{row.label}</h2>
                  <p className="mt-2 text-sm text-mute">{row.path}</p>
                </HostLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <LongFaq items={copy.faqs} title="Before you pick a door." />
    </>
  );
}

function NestedIndexView({
  islandId,
  copy,
  links,
  faqTitle,
}: {
  islandId: (typeof islandOrder)[number];
  copy: { h1: string; lede: string; kicker: string; photo: PhotoKey; body: string[]; faqs: { q: string; a: string }[] };
  links: { path: string; label: string }[];
  faqTitle: string;
}) {
  const photo = photos[copy.photo];
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">{islands[islandId].name}</p>
          <ul className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {links.map((row) => (
              <li key={row.path} className="bg-paper">
                <HostLink island={islandId} path={row.path} className="block p-6">
                  <h2 className="font-display text-2xl font-light text-ink">{row.label}</h2>
                  <p className="mt-2 text-sm text-mute">{row.path}</p>
                </HostLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <LongFaq items={copy.faqs} title={faqTitle} />
    </>
  );
}

export function HelpIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  return (
    <NestedIndexView
      islandId={islandId}
      copy={islandHelpIndex[islandId]}
      links={helpArticles[islandId].map((row) => ({ path: `/help/${row.slug}`, label: row.name }))}
      faqTitle="Before you open a document."
    />
  );
}

export function FineDiningIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  return (
    <NestedIndexView
      islandId={islandId}
      copy={islandFineDiningIndex[islandId]}
      links={fineDiningPages[islandId].map((row) => ({ path: `/fine-dining/${row.slug}`, label: row.name }))}
      faqTitle="Before you pick a format."
    />
  );
}

export function StaffingIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  return (
    <NestedIndexView
      islandId={islandId}
      copy={islandStaffingIndex[islandId]}
      links={staffingPages[islandId].map((row) => ({ path: `/staffing/${row.slug}`, label: row.name }))}
      faqTitle="Before you add a line."
    />
  );
}

export function CorporateIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  const links =
    islandId === 'oahu'
      ? [{ path: '/conventions', label: 'HCC citywides' }, ...CORPORATE_INDEX_LINKS]
      : CORPORATE_INDEX_LINKS;
  return (
    <NestedIndexView
      islandId={islandId}
      copy={islandCorporate[islandId]}
      links={links}
      faqTitle="Before you brief a house."
    />
  );
}

export function GatheringsIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  return (
    <NestedIndexView
      islandId={islandId}
      copy={islandGatherings[islandId]}
      links={GATHERINGS_INDEX_LINKS}
      faqTitle="Before you pick an occasion."
    />
  );
}

export function IslandsIndexView({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  const copy = islandIslands[islandId];
  const photo = photos[copy.photo];
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">{islands[islandId].name}</p>
          <ul className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {islandOrder.map((id) => (
              <li key={id} className="bg-paper">
                <HostLink island={id} path="/" className="block p-6">
                  <h2 className="font-display text-2xl font-light text-ink">
                    {id === islandId ? `${islands[id].name} — this host` : islands[id].name}
                  </h2>
                  <p className="mt-2 text-sm text-mute">
                    {islands[id].state === 'inquiry' ? 'Inquiry' : 'Live quotes'} · {id === islandId ? '/' : `${id}.mychef-hawaii.com`}
                  </p>
                </HostLink>
              </li>
            ))}
            <li className="bg-paper">
              <HostLink island={islandId} path="/areas" className="block p-6">
                <h2 className="font-display text-2xl font-light text-ink">Map notes on this host</h2>
                <p className="mt-2 text-sm text-mute">/areas</p>
              </HostLink>
            </li>
          </ul>
        </div>
      </section>
      <LongFaq items={copy.faqs} title="Before you switch hosts." />
    </>
  );
}

export function ServicesView() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-container px-5 lg:px-10">
        <p className="text-[12px] text-mute">Services</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light text-ink">Private dining, four ways.</h1>
        <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.65] text-mute">
          Private chef dinners from $125 a guest, Stay Chef day rates, wedding catering and mobile bar across Hawaii.
          Each island host also keeps its own service list.
        </p>
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            { href: '/private-chef', title: 'Private chef', body: 'A dinner in the villa. Shop, cook, serve, clean.' },
            { href: '/catering', title: 'Catering', body: 'Staffed events, 10–75. Buffet or plated.' },
            { href: '/weddings', title: 'Weddings', body: 'One team for the week.' },
            { href: '/bar', title: 'Bar', body: 'Terrace cocktails, stacked or alone.' },
          ].map((s) => (
            <li key={s.href} className="border-t border-line pt-6">
              <Link href={s.href} className="font-display text-2xl font-light text-ink">
                {s.title}
              </Link>
              <p className="mt-2 text-mute">{s.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-[12px] text-mute">By island</p>
        <ul className="mt-6 grid gap-px bg-line md:grid-cols-2">
          {islandOrder.map((id) => (
            <li key={id} className="bg-paper">
              <HostLink island={id} path="/services" className="block p-5">
                <p className="text-[12px] text-mute">{islands[id].name}</p>
                <h2 className="mt-2 font-display text-xl font-light text-ink">Service list</h2>
                <p className="mt-2 text-sm text-mute">/services</p>
              </HostLink>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <QuoteCta />
        </div>
      </div>
    </section>
  );
}
