import { Link } from 'react-router';
import { DualCtaLight } from '@/components/DualCta';
import { Longform, SiblingCluster } from '@/components/Longform';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { cateringLongform } from '@/data/longformCatering';
import Reveal from '@/components/Reveal';
import { useIsland } from '@/context/IslandContext';
import { cateringOffers } from '@/data/catering';
import { primaryCtaLabel, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import {
  FEE_DISCLOSURE,
  STAFFING,
  formatFrom,
  formatOtherOffer,
  getOtherOffer,
  getTiers,
} from '@/data/rateCard';
import { usePageIsland } from '@/pages/islands/utils';
import {
  JsonLd,
  SectionIntro,
  ServiceFaq,
  ServiceHero,
  serviceJsonLd,
  useHashScroll,
} from '@/pages/services/ServicePage';

const formats = [
  {
    title: 'Buffet',
    text: 'High-volume service for a room that wants to move. Stations stay hot; guests serve themselves. Best from about 20 guests up.',
    when: 'Retreats · family weeks · informal receptions',
  },
  {
    title: 'Plated (coursed seated)',
    text: 'A restaurant arc, off-site, to the table. Courses paced. Needs more servers than a buffet for the same headcount.',
    when: 'Rehearsal dinners · seated celebrations',
  },
  {
    title: 'Family-style',
    text: 'Shared platters down the table — the usual estate night when the guest list is 10–20.',
    when: 'Welcome dinners · villa celebrations',
  },
  {
    title: 'Grazing & pūpū',
    text: 'Styled boards and passed small plates. Grazing tables $750–$950 (market reference, labeled). Pūpū $5–$7 per piece, 20-pc minimums.',
    when: 'Cocktail hour · terrace welcome',
  },
];

const sampleMenu = [
  { course: 'Boards', name: 'Ahi poke, local crudités, mango', note: 'Grazing start — or skip straight to seated.' },
  { course: 'First', name: 'Kanpachi crudo or chilled cucumber-crab', note: 'Plated if the room sits; stationed if it mingles.' },
  { course: 'Main — buffet or plated', name: 'Wood-grilled catch, coconut rice, island greens', note: 'Plus a ranch or veg plate so the table is not one fish.' },
  { course: 'Close', name: 'Lilikoi cheesecake or coconut haupia', note: 'Or a fruit board if the night should stay light.' },
];

/** Island catering money page — Oahu 720/mo, Maui 480, Kauai 210. Not a stub. */
export default function CateringMoneyPage() {
  useHashScroll();
  const { islandId } = useIsland();
  const id = (islandId ?? 'oahu') as IslandId;
  const { island, href } = usePageIsland(id);
  const offer = cateringOffers[id];
  const long = cateringLongform[id];
  const core = getTiers(id).find((t) => t.tier === 'CORE');
  const wedding = getOtherOffer('wedding');
  const hero = photos[offer.photo];
  const crumbs = [
    { label: 'Home', to: href('/') },
    { label: island.name, to: href('/') },
    { label: 'Catering' },
  ];

  return (
    <>
      <PageMeta title={offer.title} description={offer.description} />
      <ServiceHero
        crumbs={crumbs}
        eyebrow={offer.h1}
        title={offer.h1}
        lede={offer.lede}
        image={hero.file}
        imageAlt={hero.alt}
        island={id}
        whatsappIntent={offer.h1}
        chips={
          <>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ivory/80">10–75 guests</span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ivory/80">
              Food {core ? formatFrom(core.band[0]) : `from $${offer.fromPp}`} a guest
            </span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ivory/80">
              Buffet · plated · wedding
            </span>
          </>
        }
        primary={{ label: primaryCtaLabel(id), to: `/quote?island=${id}&service=catering` }}
        secondary={{ label: 'Prices & menu ↓', to: '#prices' }}
      />

      <section id="formats" className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="Buffet vs plated"
            title="Pick the room, then the format."
            body="The food band is the island CORE card. Staffing changes with the format. We will not upsell plated if a buffet feeds the night better."
          />
          <Reveal stagger staggerDelay={0.07} className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
            {formats.map((f) => (
              <article key={f.title} className="border border-stone bg-white p-6">
                <h3 className="font-display text-[1.375rem] font-medium text-ink">{f.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">{f.text}</p>
                <p className="mt-4 text-[12px] text-ink-soft">{f.when}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="prices" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow={`${offer.h1} prices`}
            title="Published starting prices. Quote in writing."
            body={FEE_DISCLOSURE}
          />
          <Reveal stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="border border-ink bg-white p-7">
              <p className="text-[12px] text-ink-soft">Food — CORE</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                {core ? `$${core.band[0]}–$${core.band[1]}` : `from $${offer.fromPp}`}
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">per guest</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Menu design, shopping, cooking, service, cleanup. Same band as a private-chef dinner on this island.
                {id === 'kauai'
                  ? ' A Kauaʻi incumbent publishes $200–$250 per guest; we publish $150–$250 and a written quote.'
                  : id === 'maui'
                    ? ' Published $150–$250 per guest — not a named-chef marketplace.'
                    : ''}
              </p>
            </article>
            <article className="border border-stone bg-white p-7">
              <p className="text-[12px] text-ink-soft">Wedding catering</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                {formatFrom(wedding.byIsland[id].from)}
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">per guest + staffing</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">{formatOtherOffer(wedding, id)}</p>
              <Link to={href('/weddings')} className="mt-4 inline-flex text-sm font-medium text-ink underline underline-offset-4">
                Wedding week →
              </Link>
            </article>
            <article className="border border-stone bg-white p-7">
              <p className="text-[12px] text-ink-soft">Staffing</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                ${STAFFING.serverHourly}
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">/ hr server</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Sous-chef ${STAFFING.sousHourly}/hr · {STAFFING.minimumHours}–5 hour minimums · itemised, never folded into a mystery fee.
              </p>
            </article>
          </Reveal>
          <p className="mt-8 max-w-[65ch] text-sm text-ink-soft">
            Groceries for multi-day retreat catering are billed at cost with receipts. Drinks are BYO or the mobile bar
            on a separate line. 50% deposit locks the date.
          </p>
          <div className="mt-8">
            <DualCtaLight island={id} intent={offer.h1} service="catering" />
          </div>
        </div>
      </section>

      <section id="menu" className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">{offer.h1} menu</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] text-ink">
            A sample estate menu
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">
            Built for a villa kitchen on {island.name} — not a laminated carte. You edit until it is yours. {offer.places}.
          </p>
          <ol className="mt-12 space-y-8">
            {sampleMenu.map((c) => (
              <li key={c.course} className="border-t border-stone pt-6">
                <p className="text-[12px] text-ink-soft">{c.course}</p>
                <h3 className="mt-1 font-display text-[1.625rem] font-medium leading-[1.2] text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <SectionIntro
            eyebrow="Wedding catering"
            title="Welcome dinner to recovery brunch."
            body={`One culinary team for the week. Estate formats to about 75 guests in ${offer.places}. Reception from $${offer.weddingFrom} a guest plus staffing. Wet-weather plan in writing.`}
          />
          <Reveal>
            <img
              src={photos.wedding.file}
              alt={photos.wedding.alt}
              className="aspect-[4/3] w-full object-cover"
            />
            <Link to={href('/weddings')} className="mt-5 inline-flex text-sm font-medium text-ink underline underline-offset-4">
              Full wedding-week page →
            </Link>
          </Reveal>
        </div>
      </section>

      <Longform sections={long.sections} />
      <SiblingCluster island={id} current="catering" />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ServiceFaq
            items={[...offer.faqs, ...long.faqs]}
            title={`${island.name} catering — prices, menu, wedding.`}
            intro="Real answers — then WhatsApp."
          />
        </div>
      </section>

      <QuoteTeaserBand
        headline={island.state === 'inquiry' ? 'Join the inquiry list.' : 'Request a quote.'}
        note={`WhatsApp or quote · ${island.name} · typical reply in Hawaii business hours`}
      />
      <JsonLd
        data={serviceJsonLd({
          name: offer.h1,
          description: offer.description,
          islandName: island.name,
          path: `/${id}/catering`,
          crumbs: crumbs.map((c) => c.label),
        })}
      />
    </>
  );
}
