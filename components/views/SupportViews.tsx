import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import Eyebrow from '@/components/Eyebrow';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import { LongFaq, Longform } from '@/components/Longform';
import IslandPhotoPicker from '@/components/IslandPhotoPicker';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import HubPhotoGrid from '@/components/HubPhotoGrid';
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
import { getHubDirectory, getHubDirectoryById } from '@/data/hubDirectories';
import { nestedHubDirectories } from '@/data/hubNestedDirectories';
import { nestedHubEditorials } from '@/data/hubEditorialDirectories';

export function HowItWorksView() {
  const still = photos.hubHow;
  const faq = getHubDirectory('/faq');
  const coverage = getHubDirectory('/coverage');
  const steps = [
    { n: '01', title: 'Enquire — two minutes.', body: 'Five fields: island, dates, party size, service, and how to reach you. No account.' },
    { n: '02', title: 'Menu design — 48 hours.', body: 'A real human replies with menu directions and an indicative range. You refine together.' },
    { n: '03', title: 'The written quote.', body: 'Itemised: food, staffing, travel if any, service charge and tax. The quote confirms the night.' },
    { n: '04', title: 'The event.', body: 'We shop that day, arrive about three hours before service, cook, serve, and pace the evening around you.' },
    { n: '05', title: 'Cleanup & follow-up.', body: 'The kitchen is left cleaner than we found it. Later, one honest review request — never incentivized.' },
  ];
  return (
    <>
      <Hero src={still.file} alt={still.alt}>
        <p className="text-[13px] text-mute">The Process</p>
        <LineReveal
          text="From enquiry to empty dishwasher."
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
          One process on every island. The only things that change are the drive times — and we publish those too.
        </p>
        <div className="mt-8">
          <QuoteCta variant="light" />
        </div>
      </Hero>
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
      <HubPhotoGrid
        eyebrow="Beside this process"
        heading="Open a related document."
        intro="The five steps stay on this page. Questions, drive times, the quote form, and the rate card are their own URLs. Help articles stay on /help."
        columns={2}
        items={[
          {
            href: '/faq',
            title: faq?.cardLabel ?? 'Questions',
            body: faq?.lede ?? 'Booking questions live on the island host.',
            still: faq ? photos[faq.photo] : still,
          },
          {
            href: '/coverage',
            title: coverage?.cardLabel ?? 'Coverage map',
            body: coverage?.lede ?? 'Drive times live on the island host.',
            still: coverage ? photos[coverage.photo] : still,
          },
          {
            href: '/quote',
            title: 'The quote form',
            body: 'Five fields. A written total follows. Not a booking.',
            still: photos.quoteHub,
          },
          {
            href: '/pricing',
            title: 'What a night costs',
            body: 'The published rate card. Distinct from the fee-stack explainer.',
            still: photos.hubPricing,
          },
        ]}
      />
      <IslandPhotoPicker
        path="/how-it-works"
        heading="Open the island process document."
        detailOf={() => 'How a night runs'}
      />
      <QuoteTeaser />
    </>
  );
}

export function TrustView() {
  const still = photos.hubTrust;
  const honesty = getHubDirectory('/what-we-dont-do');
  const reviews = getHubDirectory('/blog/no-fake-reviews');
  const faq = getHubDirectory('/faq');
  return (
    <>
      <Hero src={still.file} alt={still.alt}>
        <p className="text-[13px] text-mute">Trust</p>
        <LineReveal
          text="New to Hawaiʻi. Not new at this."
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
          We do not yet have Hawaiʻi guest reviews. They publish here after verified events — never bought, never
          invented. Published prices and a written quote are what we can prove today.
        </p>
        <div className="mt-8">
          <QuoteCta variant="light" />
        </div>
      </Hero>
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
      <HubPhotoGrid
        eyebrow="Beside this register"
        heading="Open a related document."
        intro="The proof list stays on this page. The claim list, the zero-review note, legal notes, and the FAQ are their own URLs. Island honesty registers stay on the island host."
        columns={2}
        items={[
          {
            href: '/what-we-dont-do',
            title: honesty?.cardLabel ?? 'Claim list',
            body: honesty?.lede ?? 'No invented reviews, no fake licenses. Each island writes that in its own words.',
            still: honesty ? photos[honesty.photo] : photos.hubHonesty,
          },
          {
            href: '/blog/no-fake-reviews',
            title: reviews?.cardLabel ?? 'Why the count is zero',
            body: reviews?.lede ?? 'We do not invent Hawaiʻi star ratings.',
            still: reviews ? photos[reviews.photo] : photos.hubBlogReviews,
          },
          {
            href: '/legal',
            title: 'Legal notes',
            body: 'GET, service charge, cancellation, and weather posture. Distinct from this register.',
            still: photos.hubLegal,
          },
          {
            href: '/faq',
            title: faq?.cardLabel ?? 'Questions',
            body: faq?.lede ?? 'Booking questions live on the island host.',
            still: faq ? photos[faq.photo] : photos.hubFaq,
          },
        ]}
      />
      <IslandPhotoPicker path="/trust" heading="Open the island honesty register." detailOf={() => 'Honesty register'} />
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
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].shortName} · Beside this register`}
        heading="Open a related document."
        intro="The proof list stays on this page. The claim list, the zero-review note, legal notes, and the FAQ are their own URLs."
        columns={2}
        items={[
          { path: '/what-we-dont-do', label: 'Claim list', detail: '/what-we-dont-do' },
          { path: '/blog/no-fake-reviews', label: 'Why the count is zero', detail: '/blog/no-fake-reviews' },
          { path: '/legal', label: 'Legal notes', detail: '/legal' },
          { path: '/faq', label: 'FAQ', detail: '/faq' },
        ]}
      />
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
        <Hero src={photos.hubLegal.file} alt={photos.hubLegal.alt}>
          <p className="text-[13px] text-mute">Policies</p>
          <LineReveal
            text="The fine print, in large type."
            className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
          />
          <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
            Everything that governs a myCHEF Hawaii booking, written to be read.
          </p>
          <div className="mt-8">
            <QuoteCta variant="light" />
          </div>
        </Hero>
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
      {copy ? <LongFaq items={copy.faqs} title="Before you deposit." /> : (
        <IslandPhotoPicker path="/legal" heading="Open the island legal notes." detailOf={() => 'Legal notes'} />
      )}
    </>
  );
}

export function CorporateView({ kind = 'corporate' }: { kind?: 'corporate' | 'gatherings' }) {
  const still = kind === 'gatherings' ? photos.hubGatherings : photos.hubCorporate;
  const doors =
    kind === 'gatherings'
      ? [
          { path: '/events/birthdays', title: 'Birthdays and reunions', body: 'A staffed table in the house. Guest lists we hold: about ten to seventy-five.' },
          { path: '/rehearsal-dinners', title: 'Rehearsal dinners', body: 'The night before, as its own line — not swallowed by a reception quote.' },
          { path: '/events/villa-parties', title: 'Family villa weeks', body: 'Not a wedding stack. Groceries and dinners for the people already in the house.' },
        ]
      : [
          { path: '/events/retreats', title: 'Villa retreats', body: 'Full-board chef days for offsites that actually happen in houses — not ballrooms.' },
          { path: '/corporate-catering', title: 'Production and crew catering', body: 'Call-time breakfasts and wrap dinners, 10–75, zoned honestly.' },
          { path: '/events/corporate-events', title: 'Board dinners', body: 'A Kahala dining room during a conference week is still a house, not a citywide.' },
        ];
  const h1 =
    kind === 'gatherings' ? 'Private gatherings — the house, not the ballroom.' : 'Retreats, crews, private rooms — not citywides.';
  const lede =
    kind === 'gatherings'
      ? 'Birthdays, reunions, and rehearsal dinners in villas. Staffed 10–75. Wedding-week stacks live on /weddings.'
      : 'Staffed chef catering for villa offsites and production crews of 10–75. HCC citywides are closed through 2027 — and they are not our product.';
  return (
    <>
      <Hero src={still.file} alt={still.alt} min="short">
        <p className="text-[13px] text-mute">{kind === 'gatherings' ? 'Statewide · Gatherings' : 'Statewide · Offsites'}</p>
        <LineReveal
          text={h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">{lede}</p>
        <div className="mt-8">
          <QuoteCta service="catering-events" variant="light" />
        </div>
      </Hero>
      <HubPhotoGrid
        eyebrow={kind === 'gatherings' ? 'House gatherings' : 'Villa offsites'}
        heading="Open a statewide document."
        intro={
          kind === 'gatherings'
            ? 'Each door is an existing picker. Wedding-week stacks stay on /weddings.'
            : 'Each door is an existing picker. HCC citywides are not the product.'
        }
        items={doors.map((d) => {
          const dir = getHubDirectory(d.path);
          return {
            href: d.path,
            title: d.title,
            body: d.body,
            still: dir ? photos[dir.photo] : still,
          };
        })}
      />
      <IslandPhotoPicker
        path={kind === 'gatherings' ? '/gatherings' : '/corporate'}
        heading={kind === 'gatherings' ? 'Open the island gatherings document.' : 'Open the island offsite document.'}
        detailOf={() => (kind === 'gatherings' ? 'House gatherings' : 'Villa offsites')}
      />
      <QuoteTeaser />
    </>
  );
}

export function HubAreasView() {
  const still = photos.hubAreas;
  const locations = getHubDirectory('/locations');
  return (
    <>
      <Hero src={still.file} alt={still.alt}>
        <p className="text-[13px] text-mute">Statewide directory</p>
        <LineReveal
          text="Where we cook, by island."
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
          Each island host has two geography pages. /locations is the live dinner-door list. /areas is the map notes —
          corridors plus the rest of the named places. /islands is the island picker, not this page.
        </p>
      </Hero>
      <HubPhotoGrid
        eyebrow="Statewide geography"
        heading="Open a geography document."
        intro="/locations is the corridor picker. /islands is the host picker. This page stays the map-notes directory."
        columns={2}
        items={[
          {
            href: '/locations',
            title: locations?.cardLabel ?? 'Live dinner doors',
            body: locations?.lede ?? 'Named towns are live URLs on the island host.',
            still: locations ? photos[locations.photo] : still,
          },
          {
            href: '/islands',
            title: 'Four island hosts',
            body: 'Each island is its own host — its own chefs, zones and pricing. This is not the map-notes page.',
            still: photos.hubIslands,
          },
        ]}
      />
      <IslandPhotoPicker path="/areas" heading="Open the island map notes." detailOf={() => 'Map notes'} />
    </>
  );
}

export function HubDirectoryView({ id }: { id: string }) {
  const copy = getHubDirectoryById(id);
  if (!copy) return null;
  const photo = photos[copy.photo];
  const nested = nestedHubDirectories(copy.path);
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
          <QuoteCta variant="light" />
        </div>
      </Hero>
      <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      {nested.length ? (
        <HubPhotoGrid
          eyebrow={copy.kicker}
          heading="Open a nested document."
          intro="Each nested URL is its own picker so it cannot steal this directory’s title."
          items={nested.map((row) => ({
            href: row.path,
            title: row.cardLabel,
            body: row.lede,
            still: photos[row.photo],
          }))}
        />
      ) : null}
      <IslandPhotoPicker
        path={copy.path}
        heading="Open the island document."
        detailOf={() => copy.cardLabel}
      />
      <LongFaq items={copy.faqs} title="Before you open an island." />
    </>
  );
}

function IslandBleedRows({ currentIsland }: { currentIsland?: IslandId } = {}) {
  return (
    <section className="bg-paper">
      {islandOrder.map((id) => {
        const isl = islands[id];
        const chooser = islandChooserCopy[id];
        const here = currentIsland === id;
        return (
          <HostLink key={id} island={id} className="group relative block min-h-[70svh] overflow-hidden">
            <Photo src={isl.selectorImage} alt={isl.name} fill sizes="100vw" />
            <span aria-hidden className="absolute inset-0 bg-ink/35 lg:bg-ink/20" />
            <span aria-hidden className="absolute inset-0 hero-scrim-bottom" />
            <div className="hero-copy relative mx-auto flex min-h-[70svh] w-full max-w-spread items-end px-5 py-12 lg:px-10">
              <div className="hero-type-shadow max-w-[40rem] text-paper">
                <Eyebrow tone="paper">{here ? 'This host' : isl.stateLabel}</Eyebrow>
                <span className="mt-4 block font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-paper">
                  {here ? `${isl.name} — this host` : isl.name}
                </span>
                <span className="mt-4 block text-[17px] leading-[1.65] text-paper">{chooser.line}</span>
                <span className="mt-4 block text-[15px] text-paper">
                  {chooser.price}
                  {isl.state === 'inquiry' ? ' · Inquiry' : ''}
                </span>
              </div>
            </div>
          </HostLink>
        );
      })}
    </section>
  );
}

export function IslandsView() {
  const still = photos.hubIslands;
  return (
    <>
      <Hero src={still.file} alt={still.alt}>
        <p className="text-[13px] text-mute">Four Islands</p>
        <LineReveal
          text="Choose your island."
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
          Four island departments. Each island is its own host — its own chefs, zones and pricing. Oʻahu and Maui take
          quotes. Kauaʻi and Hawaiʻi Island are inquiry-stage. Each island host also keeps an other-islands list at
          /islands.
        </p>
      </Hero>
      <IslandBleedRows />
      <HubPhotoGrid
        eyebrow="Statewide geography"
        heading="Open a geography document."
        intro="/locations is the corridor picker. /areas is the map-notes directory. This page stays the host picker."
        columns={2}
        items={[
          {
            href: '/locations',
            title: 'Live dinner doors',
            body: 'Named towns are live URLs on the island host. The hub page is the corridor picker.',
            still: photos.hubLocations,
          },
          {
            href: '/areas',
            title: 'Map notes',
            body: 'Corridors plus the rest of the named places. Not the live dinner-door list.',
            still: photos.hubAreas,
          },
        ]}
      />
      <IslandPhotoPicker
        path="/islands"
        heading="Open the other-islands list."
        detailOf={() => 'Other hosts'}
      />
    </>
  );
}

export function EditorialView({ kind }: { kind: 'journal' | 'blog' }) {
  const still = kind === 'journal' ? photos.hubJournal : photos.hubBlog;
  const title = kind === 'journal' ? 'The journal, by island.' : 'Guides and notes, by island.';
  const notes = nestedHubEditorials(kind);
  return (
    <>
      <Hero src={still.file} alt={still.alt}>
        <p className="text-[13px] text-mute">Statewide directory</p>
        <LineReveal
          text={title}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
          Each island department publishes its own {kind}. The hub does not rank for “private chef Maui” — that page
          lives on the Maui host.
        </p>
      </Hero>
      <HubPhotoGrid
        eyebrow={kind === 'journal' ? 'Statewide notes' : 'Kitchen notes'}
        heading={kind === 'journal' ? 'Open a journal note.' : 'Open a kitchen note.'}
        intro="Each URL is a picker so it cannot steal an island title. Open the island document below for the host that actually cooks."
        items={notes.map((row) => ({
          href: row.path,
          title: row.cardLabel,
          body: row.lede,
          still: photos[row.photo],
        }))}
      />
      <IslandPhotoPicker
        path={`/${kind}`}
        heading={kind === 'journal' ? 'Open the island journal.' : 'Open the island guides.'}
        detailOf={(id) => {
          const n = articlesFor(id).filter((a) => a.kind === kind).length;
          return `${n} ${kind} pieces`;
        }}
      />
    </>
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
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={islands[islandId].name}
        heading={kind === 'journal' ? 'Open a journal note.' : 'Open a kitchen note.'}
        items={
          kind === 'journal'
            ? journalArticles[islandId].map((a) => ({
                path: `/journal/${a.slug}`,
                label: a.h1,
                detail: `/journal/${a.slug}`,
              }))
            : blogArticles[islandId].map((a) => ({
                path: `/blog/${a.slug}`,
                label: a.h1,
                detail: `/blog/${a.slug}`,
              }))
        }
      />
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
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow="Live dinner doors"
        heading="Open a place on this island."
        items={[
          ...hoods.map((hood) => ({ path: `/${hood.slug}`, label: hood.name, detail: `/${hood.slug}` })),
          ...supportingDoors.map((cell) => ({ path: `/${cell.slug}`, label: cell.name, detail: `/${cell.slug}` })),
        ]}
      />
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow="Kitchen notes"
        heading="The dining-in notes beside those doors."
        items={notes.map((place) => ({
          path: `/blog/dining-in-${place.slug}`,
          label: place.name,
          detail: `/blog/dining-in-${place.slug}`,
        }))}
      />
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
          <QuoteCta island={islandId} variant="light" />
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
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={islands[islandId].name}
        heading="Open a live dinner door."
        items={hoods.map((hood) => ({ path: `/${hood.slug}`, label: hood.name, detail: `/${hood.slug}` }))}
      />
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
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={islands[islandId].name}
        heading="Open a service on this host."
        items={SERVICE_INDEX_LINKS.map((row) => ({ path: row.path, label: row.label, detail: row.path }))}
      />
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
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={islands[islandId].name}
        heading="Open a document on this host."
        items={links.map((row) => ({ path: row.path, label: row.label, detail: row.path }))}
      />
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
      <IslandBleedRows currentIsland={islandId} />
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow="On this host"
        heading="Open a geography document."
        intro="/locations is the live dinner-door list. /areas is the map — corridors plus the rest of the named places. Coverage stays the zone list."
        columns={2}
        items={[
          { path: '/locations', label: 'Live dinner doors', detail: '/locations' },
          { path: '/areas', label: 'Map notes', detail: '/areas' },
        ]}
      />
      <LongFaq items={copy.faqs} title="Before you switch hosts." />
    </>
  );
}

export function ServicesView() {
  const still = photos.hubServices;
  return (
    <>
      <Hero src={still.file} alt={still.alt}>
        <p className="text-[13px] text-mute">Services</p>
        <LineReveal
          text="Private dining, four ways."
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
          Private chef dinners from $125 a guest, Stay Chef day rates, wedding catering and the bartender add-on.
          The four-hour cart lives on /mobile-bar. Each island host also keeps its own service list.
        </p>
        <div className="mt-8">
          <QuoteCta variant="light" />
        </div>
      </Hero>
      <HubPhotoGrid
        eyebrow="Four doors"
        heading="Open a statewide document."
        columns={4}
        items={[
          {
            href: '/private-chef',
            title: 'Private chef',
            body: 'A dinner in the villa. Shop, cook, serve, clean.',
            still: photos.chefMaui,
          },
          {
            href: '/catering',
            title: 'Catering',
            body: 'Staffed events, 10–75. Buffet or plated.',
            still: photos.cateringHero,
          },
          {
            href: '/weddings',
            title: 'Weddings',
            body: 'One team for the week.',
            still: photos.weddingHero,
          },
          {
            href: '/bar',
            title: 'Bar',
            body: 'Terrace cocktails, stacked or alone.',
            still: photos.barHero,
          },
        ]}
      />
      <IslandPhotoPicker path="/services" heading="Open the island service list." detailOf={() => 'Service list'} />
      <div className="mx-auto max-w-container px-5 pb-16 lg:px-10">
        <QuoteCta />
      </div>
    </>
  );
}
