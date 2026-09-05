import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import Photo from '@/components/Photo';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { hubWeddingsFaqs, hubWeddingsSections } from '@/data/longformHub';
import { weddingLongform } from '@/data/longformWeddings';
import type { IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { formatOtherOffer, getOtherOffer } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';

const islandsWeddings: { id: IslandId; title: string; body: string; img: string; alt: string }[] = [
  {
    id: 'maui',
    title: 'Maui',
    body: 'Welcome dinner, rehearsal, reception and recovery brunch with one team. Peak months September, October and May.',
    img: '/photos/maui-wedding-long-table-banyan-dusk.jpg',
    alt: 'A wedding-week long table under a banyan at dusk, ocean lawn beyond.',
  },
  {
    id: 'oahu',
    title: 'Oʻahu',
    body: 'Celebration dinners and weekend stacks in Ko Olina, Kahala and windward estates.',
    img: '/photos/oahu-gold-coast-estate-dinner.jpg',
    alt: 'A formally set Gold Coast estate table opening to a lawn, Diamond Head on the horizon.',
  },
  {
    id: 'kauai',
    title: 'Kauaʻi',
    body: 'Estate formats on both shores. Welcome dinner, rehearsal and reception as separate lines.',
    img: '/photos/kauai-north-terrace-mist.jpg',
    alt: 'Grilled-fish plates on a wet North Shore Kauaʻi stone terrace against misted peaks.',
  },
  {
    id: 'bigisland',
    title: 'Hawaiʻi Island',
    body: 'Kohala estates, wedding-week format, west side first.',
    img: '/photos/kohala-lava-coast-table.jpg',
    alt: 'An outdoor Kohala Coast table with plated fish, Mauna Kea in the distance.',
  },
];

const ISLAND_COPY: Record<
  IslandId,
  { h1: string; lede: string; eyebrow: string; hero: { file: string; alt: string } }
> = {
  maui: {
    h1: 'Wedding catering Maui — one team for the week.',
    lede:
      'One culinary team from the welcome dinner to the recovery brunch — private estate formats for 10 to 75 guests across Wailea, Kāʻanapali, Kapalua, Makena and Upcountry.',
    eyebrow: 'myCHEF Maui — Wedding weeks',
    hero: photos.weddingMaui,
  },
  oahu: {
    h1: 'Wedding catering Oahu — one kitchen for the weekend.',
    lede:
      'Wedding catering Oahu: celebration dinners and weekend stacks in Kahala, Ko Olina and windward estates. One kitchen, written quote, published starting prices.',
    eyebrow: 'myCHEF Oʻahu — Wedding weekends',
    hero: photos.weddingOahu,
  },
  kauai: {
    h1: 'Kauai wedding catering — both shores.',
    lede:
      'Kauai wedding catering in Princeville, Hanalei and Poʻipū — formats to about 75 guests. Welcome dinner, rehearsal, reception as separate lines. From $175 a guest plus staffing. Inquiry stage.',
    eyebrow: 'myCHEF Kauaʻi — Estate weddings',
    hero: photos.weddingKauai,
  },
  bigisland: {
    h1: 'Wedding catering Big Island.',
    lede:
      'Kona–Kohala corridor: Mauna Kea resort belt, Waikoloa, the lava coast. One culinary team for the week. Published starting prices.',
    eyebrow: 'myCHEF Hawaiʻi Island — Estate weeks',
    hero: photos.weddingBigisland,
  },
};

export function HubWeddingsView() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FoodService',
          name: 'Wedding catering Hawaii — myCHEF',
          description: 'Wedding catering Hawaii: welcome dinner, ceremony, and the days after. One chef, one conversation.',
          areaServed: 'Hawaiʻi',
          serviceType: 'Wedding catering',
          parentOrganization: { '@type': 'Organization', name: 'myCHEF Hawaii' },
        }}
      />
      <Hero src={photos.weddingHero.file} alt={photos.weddingHero.alt} min="short">
        <p className="text-[13px] text-mute">Wedding week</p>
        <LineReveal
          text="Wedding catering Hawaii — one team for the whole week."
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">
          Welcome dinner to recovery brunch. Guest lists we staff: dinners for two to fifteen, receptions about ten to
          seventy-five.
        </p>
        <div className="mt-8">
          <QuoteCta service="wedding-week" variant="light" />
        </div>
      </Hero>

      <section className="bg-paper">
        {islandsWeddings.map((row) => (
          <HostLink
            key={row.id}
            island={row.id}
            path="/weddings"
            className="group relative block min-h-[70svh] overflow-hidden"
          >
            <Photo src={row.img} alt={row.alt} fill sizes="100vw" />
            <span aria-hidden className="absolute inset-0 bg-ink/35 lg:bg-ink/20" />
            <span aria-hidden className="absolute inset-0 hero-scrim-bottom" />
            <span className="hero-copy relative mx-auto flex min-h-[70svh] w-full max-w-spread items-end px-5 py-12 lg:px-10">
              <span className="hero-type-shadow max-w-[40rem] text-paper">
                <span className="block font-display text-[clamp(2rem,4vw,2.75rem)] font-light leading-[1.1] text-paper">
                  {row.title}
                </span>
                <span className="mt-3 block text-[17px] leading-[1.65] text-paper">{row.body}</span>
                <span className="mt-4 block text-[17px] text-paper">
                  Wedding catering {formatOtherOffer(getOtherOffer('wedding'), row.id)}
                </span>
              </span>
            </span>
          </HostLink>
        ))}
      </section>

      <Longform sections={hubWeddingsSections} />
      <SiblingCluster current="weddings" />
      <LongFaq items={hubWeddingsFaqs} />
      <QuoteTeaser headline="Tell us the island, the dates, the headcount." />
    </>
  );
}

export function IslandWeddingView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = ISLAND_COPY[islandId];
  const long = weddingLongform[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);

  return (
    <>
      <Hero src={copy.hero.file} alt={copy.hero.alt} min="short">
        <p className="text-[13px] text-mute">{copy.eyebrow}</p>
        <LineReveal
          text={copy.h1}
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">{copy.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="wedding-week" />
        </div>
      </Hero>
      <Longform sections={long.sections} />
      <SiblingCluster island={islandId} current="weddings" href={href} />
      <LongFaq items={long.faqs} />
      <QuoteTeaser headline="Tell us the dates and the headcount." island={islandId} />
    </>
  );
}
