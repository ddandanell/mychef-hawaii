import Link from 'next/link';
import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import LineReveal from '@/components/LineReveal';
import Photo from '@/components/Photo';
import TypePanel from '@/components/TypePanel';
import QuoteTeaser from '@/components/QuoteTeaser';
import { islandOrder, islands } from '@/data/islands';
import { feeStack } from '@/data/rateCard';
import { proofRegister } from '@/data/proofRegister';
import { articlesFor } from '@/data/editorial';
import { MASTER_MAP, masterHostName } from '@/data/commercialGraph';
import { moneyNeighborhoods } from '@/data/offers';
import { uniqueCells } from '@/data/uniqueCells';
import { islandServices } from '@/data/islandServices';
import { occasionPages } from '@/data/occasionPages';
import { SUPPORT_PATHS } from '@/data/islandSupport';

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

export function LegalView() {
  const sections = [
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
  return (
    <>
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
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink">
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
      </section>
      <QuoteTeaser />
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
            quotes. Kauaʻi and Hawaiʻi Island are inquiry-stage.
          </p>
        </div>
      </section>
      <section className="bg-paper">
        {islandOrder.map((id) => {
          const isl = islands[id];
          return (
            <HostLink key={id} island={id} className="relative block min-h-[70vh] overflow-hidden">
              <Photo src={isl.selectorImage} alt={isl.name} fill sizes="100vw" />
              <span className="relative flex min-h-[70vh] items-end px-5 py-12 lg:px-10">
                <TypePanel className="max-w-xl">
                  <span className="block font-display text-[clamp(2.5rem,6vw,4rem)] font-light text-ink">{isl.name}</span>
                  <span className="mt-3 block text-[17px] text-ink">{isl.role}</span>
                </TypePanel>
              </span>
            </HostLink>
          );
        })}
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
  const list = articlesFor(islandId).filter((a) => a.kind === kind);
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-container px-5 lg:px-10">
        <p className="text-[12px] text-mute">{islands[islandId].name}</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-light text-ink">
          {kind === 'journal' ? 'Journal' : 'Blog'}
        </h1>
        <ul className="mt-10 space-y-6">
          {list.map((a) => (
            <li key={a.slug} className="border-t border-line pt-6">
              <h2 className="font-display text-2xl font-light text-ink">{a.h1}</h2>
              <p className="mt-2 text-mute">{a.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HtmlSitemapView({ islandId }: { islandId?: (typeof islandOrder)[number] | null }) {
  const hosts = islandId ? [islandId] : islandOrder;
  const rows = [
    ...(islandId ? MASTER_MAP.filter((r) => r.host === islandId) : MASTER_MAP),
    ...hosts.flatMap((id) => [
      ...moneyNeighborhoods[id].map((hood) => ({ host: id, path: `/${hood.slug}` as const })),
      ...SUPPORT_PATHS.map((path) => ({ host: id, path })),
      ...(['/about', '/events'] as const).map((path) => ({ host: id, path })),
      ...uniqueCells[id].map((cell) => ({ host: id, path: `/${cell.slug}` as const })),
      ...islandServices[id].map((cell) => ({ host: id, path: `/${cell.slug}` as const })),
      ...occasionPages[id].map((cell) => ({ host: id, path: `/events/${cell.slug}` as const })),
    ]),
  ];
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-container px-5 lg:px-10">
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-ink">Sitemap</h1>
        <ul className="mt-10 space-y-3">
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
        <div className="mt-10">
          <QuoteCta />
        </div>
      </div>
    </section>
  );
}
