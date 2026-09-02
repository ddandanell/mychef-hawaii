import { Link } from 'react-router';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import { useIsland } from '@/context/IslandContext';
import type { IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import {
  FEE_DISCLOSURE,
  STAFFING,
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
    h1: 'Wedding catering Maui.',
    lede:
      'One culinary team from the welcome dinner to the recovery brunch — private estate formats for 10 to 75 guests across Wailea, Kāʻanapali, Kapalua, Makena and Upcountry.',
    eyebrow: 'myCHEF Maui — Wedding weeks',
    places: 'Wailea, Kapalua, Kāʻanapali, Makena, Upcountry',
    peak: 'Peak months — Sep · Oct · May',
    hero: photos.wedding,
  },
  oahu: {
    h1: 'Wedding catering Oahu.',
    lede:
      'Wedding catering Oahu (140/mo). Celebration dinners and weekend stacks in Kahala, Ko Olina and windward estates. One team, written quote, published starting prices.',
    eyebrow: 'myCHEF Oʻahu — Wedding weekends',
    places: 'Kahala / Gold Coast, Ko Olina, Kailua estates, Waikīkī residences',
    peak: 'Year-round · December–March pressure',
    hero: photos.oahuEstate,
  },
  kauai: {
    h1: 'Kauai wedding catering — both shores.',
    lede:
      'Kauai wedding catering in Princeville, Hanalei and Poʻipū — formats to about 75 guests. Welcome dinner, rehearsal, reception as separate lines. From $175 a guest plus staffing. Book now.',
    eyebrow: 'myCHEF Kauaʻi — Estate weddings',
    places: 'Princeville, Hanalei, Poʻipū, Kōloa',
    peak: 'North Shore winters book early',
    hero: photos.kauaiNorth,
  },
  bigisland: {
    h1: 'Wedding catering Big Island.',
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
      {core ? <BandChip label={`Reception from ${formatBand(core)} a guest`} onDark /> : null}
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
              <div key={e.day} className="border-b border-stone py-6">
                <h3 className="font-display text-[1.625rem] font-light leading-[1.2] text-ink">{e.day}</h3>
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
            <img src={photos.wedding.file} alt="Wailea" className="aspect-[4/3] w-full object-cover" />
            <img src={photos.weddingDetail.file} alt="Wailea" className="aspect-[4/3] w-full object-cover" />
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
          <div className="mt-14">
            <div className="grid gap-2 border-b border-stone py-6 md:grid-cols-[1fr_auto] md:items-baseline">
              <h3 className="font-display text-[1.375rem] font-light text-ink">Reception</h3>
              <p className="font-display text-[2.5rem] font-light text-ink">
                {core ? formatFrom(core.band[0]) : ''} <span className="text-[17px] text-ink-soft">a guest</span>
              </p>
              <p className="text-[17px] text-ink-soft md:col-span-2">
                {formatOtherOffer(wedding, id)} · servers from ${STAFFING.serverHourly}/hr
              </p>
            </div>
            <div className="grid gap-2 border-b border-stone py-6">
              <h3 className="font-display text-[1.375rem] font-light text-ink">Week stack</h3>
              <p className="text-[17px] leading-relaxed text-ink-soft">
                Welcome through recovery brunch, one proposal — one team, one invoice. {copy.places}
              </p>
            </div>
            <div className="grid gap-2 border-b border-stone py-6 md:grid-cols-[1fr_auto] md:items-baseline">
              <h3 className="font-display text-[1.375rem] font-light text-ink">Elopements</h3>
              <p className="font-display text-[2.5rem] font-light text-ink">
                {formatFrom(two.byIsland[id].from, two.byIsland[id].highPlus)}
              </p>
              <p className="text-[17px] text-ink-soft md:col-span-2">{formatOtherOffer(two, id)}</p>
            </div>
          </div>
          <p className="mt-8 max-w-[65ch] text-[17px] leading-[1.65] text-ink-soft">
            Service 20% and Hawaiʻi GET are added as their own lines.{' '}
            <Link to="/legal" className="text-ink underline underline-offset-4">
              Legal
            </Link>
            .
          </p>
          <Link to={href('/bar')} className="mt-6 inline-flex text-sm text-ink underline underline-offset-4">
            Add the mobile bar
          </Link>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro eyebrow="Planner-friendly" title="What we handle." />
          <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Rentals & tabletop', text: 'Tables, linen, tabletop — coordinated before guests arrive.' },
              { title: 'Staffing', text: `Servers from $${STAFFING.serverHourly}/hr · sous-chef $${STAFFING.sousHourly}/hr.` },
              { title: 'Bar', text: 'Mobile bar on the same quote. Licensing posture in writing.' },
              { title: 'Weather', text: 'Every outdoor event carries a written backup plan.' },
              { title: 'Vendors', text: 'We slot into your planner’s team — timelines and COIs handled.' },
              { title: 'The week', text: 'Four events, one culinary team, one plan.' },
            ].map((t) => (
              <div key={t.title} className="border-b border-stone py-6">
                <h3 className="font-display text-[1.375rem] font-light text-ink">{t.title}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-ink-soft">{t.text}</p>
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
