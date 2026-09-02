import { Link } from 'react-router';
import {
  CalendarRange,
  CloudRain,
  Handshake,
  UtensilsCrossed,
  Users,
  Wine,
} from 'lucide-react';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { useIsland } from '@/context/IslandContext';
import type { IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import {
  FEE_DISCLOSURE,
  STAFFING,
  feeStack,
  formatBand,
  formatFrom,
  formatOtherOffer,
  getOtherOffer,
  getTiers,
} from '@/data/rateCard';
import { usePageIsland } from '@/pages/islands/utils';
import {
  BandChip,
  JsonLd,
  PlainChip,
  SectionIntro,
  ServiceFaq,
  ServiceHero,
  serviceJsonLd,
  useHashScroll,
} from '@/pages/services/ServicePage';
import type { ServiceFaqItem } from '@/pages/services/ServicePage';
import { InquiryHero } from '@/pages/expanded/shared';

const weekEvents = [
  { day: 'Welcome dinner', text: 'The ice-breaker: family-style or grazing, relaxed by design.', chips: ['Grazing tables', 'Family-style'] },
  { day: 'Rehearsal', text: 'A coursed dinner for the inner circle.', chips: ['Coursed seated'] },
  { day: 'The reception', text: '10–75 guests, staffed service, published staffing ratios, wet-weather plan in writing.', chips: ['Staffed service', 'Bar available'] },
  { day: 'Recovery brunch', text: 'The morning after, done gently.', chips: ['Brunch stations'] },
];

const COPY: Record<
  IslandId,
  { h1: string; lede: string; eyebrow: string; places: string; peak: string; hero: { file: string; alt: string } }
> = {
  maui: {
    h1: 'The whole wedding week, beautifully fed.',
    lede:
      'One culinary team from the welcome dinner to the recovery brunch — private estate formats for 10 to 75 guests across Wailea, Kāʻanapali, Kapalua, Makena and Upcountry.',
    eyebrow: 'myCHEF Maui — Wedding weeks',
    places: 'Wailea, Kapalua, Kāʻanapali, Makena, Upcountry',
    peak: 'Peak months — Sep · Oct · May',
    hero: photos.wedding,
  },
  oahu: {
    h1: 'A wedding weekend on the Gold Coast — one kitchen.',
    lede:
      'Celebration dinners and weekend stacks in Kahala, Ko Olina and windward estates. Not a convention-centre product. One team, written quote, published starting prices.',
    eyebrow: 'myCHEF Oʻahu — Wedding weekends',
    places: 'Kahala / Gold Coast, Ko Olina, Kailua estates, Waikīkī residences',
    peak: 'Year-round · December–March pressure',
    hero: photos.oahuEstate,
  },
  kauai: {
    h1: 'Kauai wedding catering — both shores.',
    lede:
      'Kauai wedding catering in Princeville, Hanalei and Poʻipū — formats to about 75 guests. Welcome dinner, rehearsal, reception as separate lines. From $175/pp plus staffing. Book now.',
    eyebrow: 'myCHEF Kauaʻi — Estate weddings',
    places: 'Princeville, Hanalei, Poʻipū, Kōloa',
    peak: 'North Shore winters book early',
    hero: photos.kauaiNorth,
  },
  bigisland: {
    h1: 'Kohala estate wedding weeks.',
    lede:
      'Kona–Kohala corridor: Mauna Kea resort belt, Waikoloa, the lava coast. One culinary team for the week. Published starting prices. WhatsApp the date.',
    eyebrow: 'myCHEF Hawaiʻi Island — Estate weeks',
    places: 'Kohala Coast, Waikoloa, Mauna Kea, Kona',
    peak: 'West side first · Ironman weeks flag early',
    hero: photos.kohalaTable,
  },
};

export default function IslandWeddingPage() {
  useHashScroll();
  const { islandId, href } = useIsland();
  const id = (islandId ?? 'maui') as IslandId;
  const { island } = usePageIsland(id);
  const copy = COPY[id];
  const core = getTiers(id).find((t) => t.tier === 'CORE');
  const wedding = getOtherOffer('wedding');
  const two = getOtherOffer('dinner-for-two');
  const inquiry = island.state === 'inquiry';
  const crumbs = [
    { label: 'Home', to: href('/') },
    { label: island.name, to: href('/') },
    { label: 'Weddings' },
  ];

  const faqs: ServiceFaqItem[] = [
    {
      q: 'What guest counts do you staff?',
      a: 'Private-estate formats run 10 to 75 guests. Dinners-for-two and elopements are a separate fixed-price product. Larger rooms are quoted as exceptions, never implied as standard.',
    },
    {
      q: 'How is a wedding week priced?',
      a: `Receptions start ${formatOtherOffer(wedding, id)}. The week stack (welcome, rehearsal, reception, brunch) is one proposal. ${FEE_DISCLOSURE}`,
    },
    {
      q: 'Can we add a mobile bar?',
      a: 'Yes. The bar is a first-class line on the same quote — starting prices live on the island bar page.',
    },
    {
      q: inquiry ? 'When can we book?' : 'How early should we ask?',
      a: inquiry
        ? `${island.name} is inquiry-stage. Dated inquiries help set the launch. There is no booking button until a staffed, insured team exists.`
        : `${copy.peak}. One team can only hold one wedding week at a time. Ask as early as you have a date.`,
    },
  ];

  const chips = (
    <>
      {core ? <BandChip label={`Reception from ${formatBand(core)}/pp`} onDark /> : null}
      <PlainChip onDark>{copy.peak}</PlainChip>
    </>
  );

  return (
    <>
      {inquiry ? (
        <InquiryHero
          island={island}
          crumbs={crumbs}
          service="Wedding week — planned"
          title={copy.h1}
          lede={copy.lede}
          image={copy.hero.file}
          imageAlt={copy.hero.alt}
          chips={chips}
          primaryTo={`/quote?island=${id}&service=wedding-week`}
          secondary={{ label: 'The week ↓', to: '#the-week' }}
        />
      ) : (
        <ServiceHero
          fullHeight
          crumbs={crumbs}
          eyebrow={copy.eyebrow}
          title={copy.h1}
          lede={copy.lede}
          image={copy.hero.file}
          imageAlt={copy.hero.alt}
          chips={chips}
          island={id}
          whatsappIntent="a wedding week"
          primary={{ label: 'Get a wedding quote', to: `/quote?island=${id}&service=wedding-week` }}
          secondary={{ label: 'See the week ↓', to: '#the-week' }}
        />
      )}

      <section id="the-week" className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro eyebrow="The wedding week" title="One team, four events, no hand-offs." />
          <Reveal stagger staggerDelay={0.09} className="mt-14 space-y-8">
            {weekEvents.map((e) => (
              <div key={e.day} className="rounded-[18px] border border-stone bg-white p-6 shadow-soft lg:p-8">
                <h3 className="font-display text-[1.625rem] font-medium leading-[1.2] text-brass">{e.day}</h3>
                <p className="mt-2 max-w-[60ch] text-[1.0625rem] leading-[1.65] text-ink-soft">{e.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.chips.map((chip) => (
                    <PlainChip key={chip}>{chip}</PlainChip>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:gap-6">
            <img src={photos.wedding.file} alt={photos.wedding.alt} className="aspect-[4/3] w-full rounded-[18px] object-cover shadow-soft" />
            <img src={photos.weddingDetail.file} alt={photos.weddingDetail.alt} className="aspect-[4/3] w-full rounded-[18px] object-cover shadow-soft" />
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="Published starting prices"
            title="Reception, week stack, elopement — real numbers."
            body={FEE_DISCLOSURE}
          />
          <Reveal stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[18px] border-2 border-clay bg-white p-7 shadow-soft lg:p-8">
              <h3 className="font-display text-[1.375rem] font-medium text-ink">Reception</h3>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
                {core ? formatFrom(core.band[0]) : ''}
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">/ person</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                {formatOtherOffer(wedding, id)} · servers from ${STAFFING.serverHourly}/hr
              </p>
            </article>
            <article className="rounded-[18px] border border-stone bg-white p-7 shadow-soft lg:p-8">
              <h3 className="font-display text-[1.375rem] font-medium text-ink">Week stack</h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">
                Welcome through recovery brunch, one proposal — one team, one invoice.
              </p>
              <p className="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-ink-soft">{copy.places}</p>
            </article>
            <article className="rounded-[18px] border border-stone bg-white p-7 shadow-soft lg:p-8">
              <h3 className="font-display text-[1.375rem] font-medium text-ink">Elopements</h3>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
                {formatFrom(two.byIsland[id].from, two.byIsland[id].highPlus)}
              </p>
              <p className="mt-3 text-sm text-ink-soft">{formatOtherOffer(two, id)}</p>
            </article>
          </Reveal>
          <div className="mt-10 space-y-3">
            {feeStack
              .filter((r) => r.chip === 'RPR — ATTORNEY' || r.chip === 'RPR — CPA' || r.label.startsWith('Booking'))
              .map((row) => (
                <p key={row.label} className="flex flex-wrap items-center gap-2 text-sm text-ink">
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em]">{row.label}</span>
                  <StatusChip kind={row.chip.startsWith('RPR') ? 'rpr' : 'policy'}>{row.chip}</StatusChip>
                </p>
              ))}
          </div>
          <Link to={href('/bar')} className="mt-8 inline-flex text-sm font-medium text-clay underline underline-offset-4">
            Add the mobile bar →
          </Link>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro eyebrow="Planner-friendly" title="What we handle." />
          <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: UtensilsCrossed, title: 'Rentals & tabletop', text: 'Tables, linen, tabletop — coordinated before guests arrive.' },
              { icon: Users, title: 'Staffing', text: `Servers from $${STAFFING.serverHourly}/hr · sous-chef $${STAFFING.sousHourly}/hr.` },
              { icon: Wine, title: 'Bar', text: 'Mobile bar on the same quote. Licensing posture in writing.' },
              { icon: CloudRain, title: 'Weather', text: 'Every outdoor event carries a written backup plan.' },
              { icon: Handshake, title: 'Vendors', text: 'We slot into your planner’s team — timelines and COIs handled.' },
              { icon: CalendarRange, title: 'The week', text: 'Four events, one culinary team, one plan.' },
            ].map((t) => (
              <div key={t.title} className="rounded-[18px] border border-stone bg-white p-6 shadow-soft">
                <t.icon aria-hidden="true" className="h-6 w-6 text-clay" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-[1.375rem] font-medium text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ServiceFaq items={faqs} title={`Asked before a ${island.name} wedding week.`} />
        </div>
      </section>

      <QuoteTeaserBand headline="The date goes first. Ask early." />
      <JsonLd
        data={serviceJsonLd({
          name: `Wedding catering — ${island.name}`,
          description: copy.lede,
          islandName: island.name,
          path: `/${id}/wedding-catering`,
          crumbs: crumbs.map((c) => c.label),
        })}
      />
    </>
  );
}
