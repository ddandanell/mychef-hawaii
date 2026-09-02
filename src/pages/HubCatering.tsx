import { DualCtaLight } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { HUB_CATERING, cateringOffers } from '@/data/catering';
import { hubCateringFaqs, hubCateringSections } from '@/data/longformHub';
import { islandOrder, islands } from '@/data/islands';
import { photos } from '@/data/photos';
import { FEE_DISCLOSURE, STAFFING } from '@/data/rateCard';

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

/**
 * Hub /catering — locked keyword hawaii catering (210/mo).
 * Island hosts carry the larger volumes (Oahu 720, Maui 480, Kauai 210).
 */
export default function HubCatering() {
  return (
    <>
      <PageMeta title={HUB_CATERING.title} description={HUB_CATERING.description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
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
          ]),
        }}
      />

      <section className="bg-ivory pb-10 pt-16 lg:pt-24">
        <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-[12px] text-ink-soft">Hawaii catering</p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] text-ink">
              {HUB_CATERING.h1}
            </h1>
            <p className="mt-5 max-w-[62ch] text-[1.125rem] leading-[1.65] text-ink-soft">{HUB_CATERING.lede}</p>
            <p className="mt-4 max-w-[62ch] text-sm text-ink-soft">
              Ten to seventy-five guests. Villa, wedding, retreat. From $125 a guest on Oʻahu. WhatsApp for a quote.
            </p>
            <div className="mt-8">
              <DualCtaLight intent="Hawaii catering" service="catering" />
            </div>
          </div>
          <img src={photos.catering.file} alt={photos.catering.alt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">Choose the island</h2>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            Open the island where the house is. Each island page publishes its own starting prices and a sample
            menu. This page stays statewide.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {islandOrder.map((id) => {
              const c = cateringOffers[id];
              const isl = islands[id];
              return (
                <HostLink
                  key={id}
                  island={id}
                  path="/catering"
                  className="border border-stone bg-white p-5 transition-colors hover:border-ink/40"
                >
                  <p className="font-display text-2xl font-medium text-ink">{isl.name}</p>
                  <p className="mt-2 text-ink-soft">from ${c.fromPp} per guest</p>
                  <p className="mt-2 text-sm text-ink-soft">Staffed villa events</p>
                </HostLink>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">Buffet or plated</h2>
          <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            The food band is the island CORE card — from $125 a guest on Oʻahu, $150 on Maui and Kauaʻi. Staffing
            changes with the format. We will not upsell plated if a buffet feeds the night better.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {formats.map((f) => (
              <article key={f.title} className="border border-stone bg-white p-6">
                <h3 className="font-display text-[1.375rem] font-medium text-ink">{f.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">{f.text}</p>
                <p className="mt-4 text-[12px] text-ink-soft">{f.when}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">
            Published starting prices.
          </h2>
          <p className="mt-4 max-w-[65ch] text-ink-soft">{FEE_DISCLOSURE}</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="border border-ink bg-white p-7">
              <p className="text-[12px] text-ink-soft">Food — CORE</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                $125–$250
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">per guest</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Oʻahu $125–$190. Maui and Kauaʻi $150–$250. Big Island $150–$225. Menu design, shopping, cooking,
                service, cleanup.
              </p>
            </article>
            <article className="border border-stone bg-white p-7">
              <p className="text-[12px] text-ink-soft">Wedding catering Hawaii</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                from $125
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">per guest + staffing</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Welcome dinner, rehearsal, reception, recovery brunch as separate lines. Estate formats to about 75
                guests.
              </p>
            </article>
            <article className="border border-stone bg-white p-7">
              <p className="text-[12px] text-ink-soft">Staffing</p>
              <p className="mt-4 font-display text-4xl font-light tracking-tight text-ink">
                ${STAFFING.serverHourly}
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">/ hr server</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Sous-chef ${STAFFING.sousHourly}/hr · {STAFFING.minimumHours}–5 hour minimums · itemised, never folded
                into a mystery fee.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">Hawaii catering menu</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] text-ink">
            A sample estate menu
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">
            Built for a villa kitchen — not a laminated carte. You edit until it is yours. Island pages publish the
            same sample against that island’s prices.
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

      <Longform sections={hubCateringSections} />
      <SiblingCluster current="catering" />
      <LongFaq items={[...HUB_CATERING.faqs, ...hubCateringFaqs]} />
      <QuoteTeaserBand headline="Hawaii catering — from $125 a guest. Quote in writing." />
    </>
  );
}
