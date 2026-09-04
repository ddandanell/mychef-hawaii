import Link from 'next/link';
import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import { LocationsBlock } from '@/components/LocationsBlock';
import { islandOrder, islands } from '@/data/islands';

const DESCRIPTION =
  'myCHEF Hawaii is a four-island villa chef team. We staff a brigade to the size of the house — chef, sous, service, bar, shopper. Request a quote.';

const faqs = [
  {
    q: 'How many people show up to cook?',
    a: 'As many as the house needs that night — and no more. A dinner for two is a chef and the shopping. A seated reception is chef, sous, service, and often a bartender. We write the crew on the quote before anyone drives to the villa.',
  },
  {
    q: 'Do you keep twenty-five staff living on every island?',
    a: 'No. That would be a payroll story, not an operating one. We staff an island crew to the booking: people who cook, serve, and shop on that island, sized to the guest list. The photographs on this page show that scale of work. They are not a headcount claim.',
  },
  {
    q: 'Is this a marketplace of named freelance chefs?',
    a: 'No. You book myCHEF Hawaii, not a profile. We assign the brigade. We do not sell chef names, bios, or a swipeable roster.',
  },
  {
    q: 'Do you have Hawaiʻi guest reviews yet?',
    a: 'Not yet. We will not invent them. Reviews publish after verified events. Until then the proof is published prices, a sample menu, cleanup, and a written quote. See /trust.',
  },
    {
      q: 'Which islands?',
      a: 'Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island. Each island host names its corridors as live URLs — Honolulu, Waikīkī, Wailea, Princeville, Kona, and the rest. Open the island site, then the corridor.',
    },
  {
    q: 'How do I reach you?',
    a: 'The quote form — island, dates, guests. Typical reply in Hawaii business hours. We do not publish a street office or a local phone number.',
  },
];

const roles = [
  {
    name: 'Chef',
    text: 'Owns the menu and the kitchen. Designs the night around the house you actually rented — cooktop, fridge, and table — not a restaurant line we wish you had.',
  },
  {
    name: 'Sous',
    text: 'The second pair of hands when the guest list grows. Prep, pass, and pacing so the chef is not plating sixty covers alone.',
  },
  {
    name: 'Service',
    text: 'Table, timing, water, wine you brought or we quoted. The room should feel staffed, not abandoned between courses.',
  },
  {
    name: 'Bar',
    text: 'A bartender when the terrace is the first room. Stacked with dinner or booked on its own. Starting prices live on /bar.',
  },
  {
    name: 'Shopper',
    text: 'Same-day market run for that island. Fish, produce, the things that do not survive a ferry. Groceries for Stay Chef days are billed at cost with receipts.',
  },
];

const islandPhotos: Record<(typeof islandOrder)[number], { src: string; position: string; alt: string }> = {
  oahu: {
    src: '/about/oahu-crew.png',
    position: 'center',
    alt: 'A villa-deck crew on Oʻahu at dusk — chefs and service around a long set table, ocean beyond.',
  },
  maui: {
    src: '/about/maui-crew.png',
    position: 'center',
    alt: 'A staffed Maui villa service — a brigade assembled on an open-air deck at sunset.',
  },
  kauai: {
    src: '/about/brigade-hero.png',
    position: '18% 45%',
    alt: 'Kitchen brigade at work in a Hawaiian villa — the same scale of crew we staff on Kauaʻi.',
  },
  bigisland: {
    src: '/about/brigade-hero.png',
    position: '82% 40%',
    alt: 'A villa kitchen brigade at twilight — the crew size we staff on the west side of Hawaiʻi Island.',
  },
};

const islandCopy: Record<(typeof islandOrder)[number], string> = {
  oahu: `Oʻahu is town and the short-stay villa belt. Honolulu residences, Waikīkī apartments that actually have a kitchen, Kahala dining rooms, Kailua weeks, Ko Olina villa stays. A Gold Coast dinner and a North Shore surcharge day are not the same drive; the quote says which. Personal-chef weeks for households sit next to visitor dinners. The crew in the photograph is the point: this is not one person with a tote bag and a hope.`,
  maui: `Maui is the villa dinner people picture when they say private chef — Wailea, West Maui, Kīhei, Kapalua, Makena, each with its own corridor page. Catering is the larger door on this island. The same team shops, cooks, and staffs the room. A reception on the lawn is a different crew than Date Night for two. We write that difference before the deposit.`,
  kauai: `Kauaʻi is both shores, inquiry-stage: Princeville and Hanalei on the north, Poʻipū and Kōloa on the south. The bridge and the weather are real; far-North inquiries inherit a written road clause instead of a shrug. We staff the estate to the guest list when a crew exists. We do not pretend Līhuʻe and Hāʻena are the same afternoon.`,
  bigisland: `Hawaiʻi Island is west-side first: Kona, Waikoloa, the Kohala Coast. Kona has its own page on this host. Hilo is a different day — we will not sell a same-day round trip. Ironman week compresses the calendar. Tell us the dates early. The crew size still follows the house.`,
};

export default function AboutView() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'myCHEF Hawaii',
            url: 'https://mychef-hawaii.com/about',
            areaServed: 'Hawaiʻi',
            description: DESCRIPTION,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />

      <Hero
        src="/about/brigade-hero.png"
        alt="A full villa brigade at twilight — chefs plating, service moving, a long table beyond the pass."
      >
        <p className="text-[13px] text-mute">About myCHEF Hawaii</p>
        <LineReveal
          text="A brigade in the villa."
          className="mt-4 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[42ch] text-[17px] leading-[1.55] text-ink">
          Four islands. We staff the crew to the size of the house — chef, sous, service, bar, shopper — not a
          marketplace freelancer with a tote bag.
        </p>
        <div className="mt-8">
          <QuoteCta />
        </div>
      </Hero>

      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container items-start gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-[12px] text-mute">Who we are</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
              The serious four-island player.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-mute">
              <p>
                myCHEF Hawaii cooks in villas, vacation rentals, and residences with a real cooktop — on Oʻahu, Maui,
                Kauaʻi, and Hawaiʻi Island. The product is private: your kitchen, your table, your guest list. We shop
                the day of service, cook, serve, and leave the kitchen clean.
              </p>
              <p>
                We are not a named-chef marketplace. You do not swipe a roster of invented biographies. You book a
                company, and we staff a brigade to that house. A dinner for six is not a wedding reception. The quote
                says who is coming, what they will cook, and what the night costs — per guest, service 20%, Hawaiʻi GET
                up to 4.712%, each on its own line.
              </p>
              <p>
                Hawaii is launching. We do not invent guest reviews, chef names, an 808 phone, a street office, or a
                founding year to look older than the work. Proof today is published starting prices, sample menus, and a
                written quote. Reviews publish after verified events. That posture lives on{' '}
                <Link href="/trust" className="text-ink underline underline-offset-4">
                  /trust
                </Link>
                .
              </p>
              <p>
                The photographs on this page show the scale of a staffed night: more than one pair of hands at the pass,
                service in the room, a shopper’s crates, a bartender when the terrace is the first room. They illustrate
                how a booking is crewed. They are not a claim that twenty-five W-2 employees live on every island.
              </p>
            </div>
          </div>
          <figure>
            <Photo
              src="/about/pass.png"
              alt="Two chefs plating seared ahi beside a bartender pouring a cocktail at a villa pass."
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">Island teams</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
            One company. Four island crews.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.7] text-mute">
            Each island has its own kitchen realities, drives, and starting prices. Open the island site for menus and
            the rate card. This page is who shows up — and how large that “who” is allowed to be.
          </p>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {islandOrder.map((id) => {
              const photo = islandPhotos[id];
              const isl = islands[id];
              return (
                <article key={id}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Photo src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <h3 className="mt-5 font-display text-[2rem] font-light text-ink">{isl.name}</h3>
                  <p className="mt-3 text-[17px] leading-[1.7] text-mute">{islandCopy[id]}</p>
                  <HostLink island={id} className="mt-4 inline-block text-sm text-ink underline underline-offset-4">
                    {isl.shortName} site
                  </HostLink>
                  <HostLink
                    island={id}
                    path="/about"
                    className="ml-4 mt-4 inline-block text-sm text-ink underline underline-offset-4"
                  >
                    About {isl.shortName}
                  </HostLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">How a booking is staffed</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
            Sized to the house, written on the quote.
          </h2>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {roles.map((r, i) => (
              <li key={r.name} className="border border-line bg-paper p-5">
                <p className="text-[12px] text-mute">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 font-display text-[1.5rem] font-light text-ink">{r.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{r.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-[65ch] text-[17px] leading-[1.7] text-mute">
            Signature dinner starts from $125 a guest on Oʻahu and $150 on Maui and Kauaʻi. Wedding-week and catering
            formats add staffing by the hour. The confirmed total is the written quote.
          </p>
        </div>
      </section>

      <LocationsBlock id="locations" />

      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">Contact</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
            Start on the quote form.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.7] text-mute">
            No walk-in shop. No published street address. Enquire with island, dates, and guests. We reply in Hawaii
            business hours with a menu direction and a price you can hold.
          </p>
          <div className="mt-8">
            <QuoteCta />
          </div>
        </div>
      </section>

      <LongFaq items={faqs} />
      <SiblingCluster />
      <QuoteTeaser headline="Request a quote. Quote in writing." />
    </>
  );
}
