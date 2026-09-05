import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import { islandChooserCopy } from '@/data/chromeCopy';
import { HUB_CATERING, cateringOffers } from '@/data/catering';
import { hubCateringFaqs, hubCateringSections } from '@/data/longformHub';
import { cateringLongform } from '@/data/longformCatering';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { FEE_DISCLOSURE, STAFFING, formatFrom, formatOtherOffer, getOtherOffer, getTiers } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';
import { cateringFormats } from '@/data/cateringFormats';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import HubPhotoGrid from '@/components/HubPhotoGrid';
import { getHubDirectory } from '@/data/hubDirectories';
import { nestedHubDirectories } from '@/data/hubNestedDirectories';

/** Darker third of each island still — not a second catering frame, not a scrim. */
const CATERING_CROP: Record<IslandId, string> = {
  oahu: '72% 78%',
  maui: '78% 72%',
  kauai: '18% 62%',
  bigisland: '80% 68%',
};

const sampleMenu = [
  { course: 'Boards', name: 'Ahi poke, local crudités, mango', note: 'Grazing start — or skip straight to seated.' },
  { course: 'First', name: 'Kanpachi crudo or chilled cucumber-crab', note: 'Plated if the room sits; stationed if it mingles.' },
  { course: 'Main — buffet or plated', name: 'Wood-grilled catch, coconut rice, island greens', note: 'Plus a ranch or veg plate so the table is not one fish.' },
  { course: 'Close', name: 'Lilikoi cheesecake or coconut haupia', note: 'Or a fruit board if the night should stay light.' },
];

export function HubCateringView() {
  const events = getHubDirectory('/events');
  const staffing = getHubDirectory('/staffing');
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

      <Hero src={photos.cateringHero.file} alt={photos.cateringHero.alt}>
        <p className="text-[13px] text-mute">Hawaii catering</p>
        <LineReveal
          text={HUB_CATERING.h1}
          className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[54ch] text-[17px] leading-[1.65] text-ink">{HUB_CATERING.lede}</p>
        <p className="mt-4 text-[17px] text-ink">Ten to seventy-five guests. From $125 a guest on Oʻahu.</p>
        <div className="mt-8">
          <QuoteCta service="catering" variant="light" />
        </div>
      </Hero>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>Where we cook</Eyebrow>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
            Open the island catering document.
          </h2>
          <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-mute">
            Open the island where the house is. Each island page publishes its own starting prices and a sample menu.
            This page stays statewide.
          </p>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {islandOrder.map((id) => {
              const c = cateringOffers[id];
              const isl = islands[id];
              const chooser = islandChooserCopy[id];
              return (
                <li key={id}>
                  <HostLink island={id} path="/catering" className="group block">
                    <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                      <Photo
                        src={isl.selectorImage}
                        alt={isl.name}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                      />
                    </span>
                    <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{isl.name}</span>
                    <span className="mt-2 block text-[15px] leading-relaxed text-mute">{chooser.line}</span>
                    <span className="mt-2 block text-[13px] text-mute">from ${c.fromPp} a guest</span>
                  </HostLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Formats />
      <PricesHub />
      <Sample />
      <Longform sections={hubCateringSections} />
      <HubPhotoGrid
        eyebrow="Beside this catering document"
        heading="Open a related document."
        intro="Formats stay above. The wedding week, occasions, the form, and staffing are their own URLs. Island catering stays on the island host."
        columns={2}
        items={[
          {
            href: '/weddings',
            title: 'Wedding week',
            body: 'Welcome dinner to recovery brunch. Distinct from this catering document.',
            still: photos.weddingHero,
          },
          {
            href: '/events',
            title: events?.cardLabel ?? 'Occasions',
            body: events?.lede ?? 'Occasion documents live on the island host. This page is the picker.',
            still: photos.hubEvents,
          },
          {
            href: '/quote',
            title: 'The quote form',
            body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
            still: photos.quoteHub,
          },
          {
            href: '/staffing',
            title: staffing?.cardLabel ?? 'Staffing',
            body: staffing?.lede ?? 'Servers, bartenders, and butlers live on the island host.',
            still: photos.hubStaff,
          },
        ]}
      />
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
      <Hero src={hero.file} alt={hero.alt} objectPosition={CATERING_CROP[islandId]}>
        <p className="text-[13px] text-mute">{island.name} catering</p>
        <LineReveal
          text={offer.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[54ch] text-[17px] leading-[1.65] text-ink">{offer.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="catering" variant="light" />
        </div>
      </Hero>

      <Formats islandId={islandId} />

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
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${island.shortName} · Beside this catering document`}
        heading="Open a related document."
        intro="Formats stay above. The wedding week, occasions, the form, and staffing are their own URLs."
        columns={2}
        items={[
          { path: '/weddings', label: 'Wedding week', detail: '/weddings' },
          { path: '/events', label: 'Occasions', detail: '/events' },
          { path: '/quote', label: 'The quote form', detail: '/quote' },
          { path: '/staffing', label: 'Staffing', detail: '/staffing' },
        ]}
      />
      <SiblingCluster island={islandId} current="catering" href={href} />
      <LongFaq items={[...offer.faqs, ...long.faqs]} />
      <QuoteTeaser headline={`${offer.h1.split('—')[0].trim()} — quote in writing.`} island={islandId} />
    </>
  );
}

function Formats({ islandId }: { islandId?: IslandId }) {
  if (islandId) {
    return (
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].name} · Formats`}
        heading="Formats as their own documents."
        intro="Each format is its own URL so it cannot steal the catering title. Drop-off is not staffed service."
        items={cateringFormats[islandId].map((f) => ({
          path: `/catering/${f.slug}`,
          label: f.name,
          detail: f.lede,
        }))}
      />
    );
  }

  return (
    <HubPhotoGrid
      eyebrow="Statewide · Formats"
      heading="Open a format document."
      intro="The food band is the island CORE card. Staffing changes with the format. Each URL is a picker, not the catering money keyword."
      items={nestedHubDirectories('/catering').map((fmt) => ({
        href: fmt.path,
        title: fmt.cardLabel,
        body: fmt.lede,
        still: photos[fmt.photo],
      }))}
    />
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
