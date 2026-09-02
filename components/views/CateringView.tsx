import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import { HUB_CATERING, cateringOffers } from '@/data/catering';
import { hubCateringFaqs, hubCateringSections } from '@/data/longformHub';
import { cateringLongform } from '@/data/longformCatering';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { FEE_DISCLOSURE, STAFFING, formatFrom, formatOtherOffer, getOtherOffer, getTiers } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';

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

export function HubCateringView() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'FoodService',
            name: 'Hawaii catering — myCHEF',
            description: HUB_CATERING.description,
            areaServed: 'Hawaiʻi',
            serviceType: 'Catering',
            parentOrganization: { '@type': 'Organization', name: 'myCHEF Hawaii' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: HUB_CATERING.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />

      <section className="bg-paper pb-10 pt-16 lg:pt-24">
        <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-[12px] text-mute">Hawaii catering</p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] text-ink">
              {HUB_CATERING.h1}
            </h1>
            <p className="mt-5 max-w-[62ch] text-[1.125rem] leading-[1.65] text-mute">{HUB_CATERING.lede}</p>
            <p className="mt-4 max-w-[62ch] text-sm text-mute">
              Ten to seventy-five guests. Villa, wedding, retreat. From $125 a guest on Oʻahu.
            </p>
            <div className="mt-8">
              <QuoteCta service="catering" />
            </div>
          </div>
          <Photo src={photos.catering.file} alt={photos.catering.alt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Choose the island</h2>
          <p className="mt-4 max-w-[65ch] text-mute">
            Open the island where the house is. Each island page publishes its own starting prices and a sample menu.
            This page stays statewide.
          </p>
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {islandOrder.map((id) => {
              const c = cateringOffers[id];
              const isl = islands[id];
              return (
                <HostLink key={id} island={id} path="/catering" className="bg-paper p-5">
                  <p className="font-display text-2xl font-light text-ink">{isl.name}</p>
                  <p className="mt-2 font-display text-xl text-ink">from ${c.fromPp}</p>
                  <p className="mt-2 text-sm text-mute">Staffed villa events</p>
                </HostLink>
              );
            })}
          </div>
        </div>
      </section>

      <Formats />
      <PricesHub />
      <Sample />
      <Longform sections={hubCateringSections} />
      <SiblingCluster current="catering" />
      <LongFaq items={[...HUB_CATERING.faqs, ...hubCateringFaqs]} />
      <QuoteTeaser headline="Hawaii catering — from $125 a guest. Quote in writing." />
    </>
  );
}

export function IslandCateringView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const island = islands[islandId];
  const offer = cateringOffers[islandId];
  const long = cateringLongform[islandId];
  const core = getTiers(islandId).find((t) => t.tier === 'CORE');
  const wedding = getOtherOffer('wedding');
  const hero = photos[offer.photo];
  const href = (path: string) => islandHref(islandId, hostMode, path);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: offer.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={hero.file} alt={hero.alt}>
        <p className="text-[13px] text-mute">{island.name} catering</p>
        <LineReveal
          text={offer.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[54ch] text-[17px] leading-[1.65] text-ink">{offer.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="catering" />
        </div>
      </Hero>

      <Formats />

      <section id="prices" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">
            Published starting prices. Quote in writing.
          </h2>
          <p className="mt-4 max-w-[65ch] text-mute">{FEE_DISCLOSURE}</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="border border-ink bg-paper p-7">
              <p className="text-[12px] text-mute">Food — CORE</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                {core ? `$${core.band[0]}–$${core.band[1]}` : `from $${offer.fromPp}`}
                <span className="ml-2 font-sans text-base font-normal text-mute">per guest</span>
              </p>
              <p className="mt-3 text-sm text-mute">
                Menu design, shopping, cooking, service, cleanup. Same band as a private-chef dinner on this island.
              </p>
            </article>
            <article className="border border-line bg-paper p-7">
              <p className="text-[12px] text-mute">Wedding catering</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                {formatFrom(wedding.byIsland[islandId].from)}
                <span className="ml-2 font-sans text-base font-normal text-mute">per guest + staffing</span>
              </p>
              <p className="mt-3 text-sm text-mute">{formatOtherOffer(wedding, islandId)}</p>
            </article>
            <article className="border border-line bg-paper p-7">
              <p className="text-[12px] text-mute">Staffing</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                ${STAFFING.serverHourly}
                <span className="ml-2 font-sans text-base font-normal text-mute">/ hr server</span>
              </p>
              <p className="mt-3 text-sm text-mute">
                Sous-chef ${STAFFING.sousHourly}/hr · {STAFFING.minimumHours}–5 hour minimums.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Sample />
      <Longform sections={long.sections} />
      <SiblingCluster island={islandId} current="catering" href={href} />
      <LongFaq items={[...offer.faqs, ...long.faqs]} />
      <QuoteTeaser headline={`${offer.h1.split('—')[0].trim()} — quote in writing.`} island={islandId} />
    </>
  );
}

function Formats() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Buffet or plated</h2>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.65] text-mute">
          The food band is the island CORE card — from $125 a guest on Oʻahu, $150 on Maui and Kauaʻi. Staffing changes
          with the format.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {formats.map((f) => (
            <article key={f.title} className="border border-line bg-paper p-6">
              <h3 className="font-display text-[1.375rem] font-light text-ink">{f.title}</h3>
              <p className="mt-3 text-[17px] leading-[1.65] text-mute">{f.text}</p>
              <p className="mt-4 text-[12px] text-mute">{f.when}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricesHub() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Published starting prices.</h2>
        <p className="mt-4 max-w-[65ch] text-mute">{FEE_DISCLOSURE}</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="border border-ink bg-paper p-7">
            <p className="text-[12px] text-mute">Food — CORE</p>
            <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
              $125–$250
              <span className="ml-2 font-sans text-base font-normal text-mute">per guest</span>
            </p>
            <p className="mt-3 text-sm text-mute">
              Oʻahu $125–$190. Maui and Kauaʻi $150–$250. Big Island $150–$225.
            </p>
          </article>
          <article className="border border-line bg-paper p-7">
            <p className="text-[12px] text-mute">Wedding catering Hawaii</p>
            <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
              from $125
              <span className="ml-2 font-sans text-base font-normal text-mute">per guest + staffing</span>
            </p>
            <p className="mt-3 text-sm text-mute">Welcome dinner, rehearsal, reception, recovery brunch as separate lines.</p>
          </article>
          <article className="border border-line bg-paper p-7">
            <p className="text-[12px] text-mute">Staffing</p>
            <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
              ${STAFFING.serverHourly}
              <span className="ml-2 font-sans text-base font-normal text-mute">/ hr server</span>
            </p>
            <p className="mt-3 text-sm text-mute">
              Sous-chef ${STAFFING.sousHourly}/hr · {STAFFING.minimumHours}–5 hour minimums.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Sample() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
        <p className="text-[12px] text-mute">Hawaii catering menu</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
          A sample estate menu
        </h2>
        <ol className="mt-12 space-y-8">
          {sampleMenu.map((c) => (
            <li key={c.course} className="border-t border-line pt-6">
              <p className="text-[12px] text-mute">{c.course}</p>
              <h3 className="mt-1 font-display text-[1.625rem] font-light leading-[1.2] text-ink">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{c.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
