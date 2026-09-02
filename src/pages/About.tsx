import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { DualCta } from '@/components/DualCta';
import HeroMedia from '@/components/HeroMedia';
import HostLink from '@/components/HostLink';
import { SiblingCluster } from '@/components/Longform';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { islandOrder, islands } from '@/data/islands';

const TITLE = 'About myCHEF Hawaii | Island Chef Teams';
const DESCRIPTION =
  'myCHEF Hawaii is a four-island villa chef team. We staff a brigade to the size of the house — chef, sous, service, bar, shopper. Enquire for a written quote.';

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
    a: 'Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island. Honolulu is covered on the Oʻahu site. Kona is covered on the Big Island site. Neighborhood names belong in the quote, not as their own URLs.',
  },
  {
    q: 'How do I reach you?',
    a: 'The quote form. Five fields, two minutes. WhatsApp if you already have dates. Typical reply in Hawaii business hours. We do not publish a street office or an 808 number on this page.',
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
  maui: `Maui is the villa dinner people picture when they say private chef — Wailea, West Maui, Kīhei, Kapalua, Makena, named here as coverage, not as extra URLs. Catering is the larger door on this island. The same team shops, cooks, and staffs the room. A reception on the lawn is a different crew than Date Night for two. We write that difference before the deposit.`,
  kauai: `Kauaʻi is both shores: Princeville and Hanalei on the north, Poʻipū and Kōloa on the south. The bridge and the weather are real; far-North bookings inherit a written road clause instead of a shrug. Private chef and catering search at the same weight here. We staff the estate to the guest list, then drive home. We do not pretend Līhuʻe and Hāʻena are the same afternoon.`,
  bigisland: `Hawaiʻi Island is west-side first: Kona, Waikoloa, the Kohala Coast. Kona is a search people type; it lives on this island’s home, not on a /kona page. Hilo is a different day — we will not sell a same-day round trip. Ironman week compresses the calendar. Tell us the dates early. The crew size still follows the house.`,
};

export default function About() {
  return (
    <>
      <PageMeta title={TITLE} description={DESCRIPTION} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
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
          ]),
        }}
      />

      <section className="relative -mt-16 flex min-h-[100svh] min-h-[640px] items-end overflow-hidden">
        <HeroMedia
          src="/about/brigade-hero.png"
          alt="A full villa brigade at twilight — chefs plating, service moving, a long table beyond the pass."
        />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-24 pt-40 lg:px-10">
          <p className="text-[12px] text-white/75">About myCHEF Hawaii</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            A brigade in the villa.
          </h1>
          <p className="mt-5 max-w-[42ch] text-[17px] leading-[1.55] text-white/90">
            Four islands. We staff the crew to the size of the house — chef, sous, service, bar, shopper —
            not a marketplace freelancer with a tote bag.
          </p>
          <div className="mt-8">
            <Link
              to="/quote"
              className="inline-flex h-12 items-center bg-[#F6F1E8] px-6 text-sm font-medium text-ink"
            >
              Enquire
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container items-start gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-[12px] text-ink-soft">Who we are</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
              The serious four-island player.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-ink-soft">
              <p>
                myCHEF Hawaii cooks in villas, vacation rentals, and residences with a real cooktop — on Oʻahu,
                Maui, Kauaʻi, and Hawaiʻi Island. The product is private: your kitchen, your table, your guest
                list. We shop the day of service, cook, serve, and leave the kitchen clean.
              </p>
              <p>
                We are not a named-chef marketplace. You do not swipe a roster of invented biographies. You book
                a company, and we staff a brigade to that house. A dinner for six is not a wedding reception.
                The quote says who is coming, what they will cook, and what the night costs — per guest, service
                20%, Hawaiʻi GET up to 4.712%, each on its own line.
              </p>
              <p>
                Hawaii is launching. We do not invent guest reviews, chef names, an 808 phone, a street office,
                or a founding year to look older than the work. Proof today is published starting prices, sample
                menus, and a written quote. Reviews publish after verified events. That posture lives on{' '}
                <Link to="/trust" className="text-ink underline underline-offset-4">
                  /trust
                </Link>
                .
              </p>
              <p>
                The photographs on this page show the scale of a staffed night: more than one pair of hands at
                the pass, service in the room, a shopper’s crates, a bartender when the terrace is the first
                room. They illustrate how a booking is crewed. They are not a claim that twenty-five W-2
                employees live on every island.
              </p>
            </div>
          </div>
          <figure>
            <img
              src="/about/pass.png"
              alt="Two chefs plating seared ahi beside a bartender pouring a cocktail at a villa pass."
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 text-[12px] text-ink-soft">
              Craft at the pass — chef, sous, bar. The crew follows the house.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-stone bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">Island teams</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
            One company. Four island crews.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.7] text-ink-soft">
            Each island has its own kitchen realities, drives, and starting prices. Open the island site for
            menus and the rate card. This page is who shows up — and how large that “who” is allowed to be.
          </p>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {islandOrder.map((id) => {
              const photo = islandPhotos[id];
              const isl = islands[id];
              return (
                <article key={id}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: photo.position }}
                    />
                  </div>
                  <h3 className="mt-5 font-display text-[2rem] font-light text-ink">{isl.name}</h3>
                  <p className="mt-3 text-[17px] leading-[1.7] text-ink-soft">{islandCopy[id]}</p>
                  <HostLink island={id} className="mt-4 inline-block text-sm text-ink underline underline-offset-4">
                    {isl.shortName} site
                  </HostLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">How a booking is staffed</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
            Sized to the house, written on the quote.
          </h2>
          <p className="mt-5 max-w-[65ch] text-[17px] leading-[1.7] text-ink-soft">
            Tell us the island, the dates, the headcount, and the kitchen. We answer with a menu and a crew
            list. Hotel rooms without a cooktop are declined. Travel beyond the usual corridors is a published
            line, not a surprise. 50% deposit locks the date.
          </p>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {roles.map((r, i) => (
              <li key={r.name} className="border border-stone bg-ivory p-5">
                <p className="text-[12px] text-ink-soft">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 font-display text-[1.5rem] font-light text-ink">{r.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{r.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-[65ch] text-[17px] leading-[1.7] text-ink-soft">
            Signature dinner starts from $125 a guest on Oʻahu and $150 on Maui and Kauaʻi. Wedding-week and
            catering formats add staffing by the hour. The confirmed total is the written quote — never a
            verbal range in a chat window.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">Contact</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-ink">
            Start on the quote form.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.7] text-ink-soft">
            No walk-in shop. No published street address. Enquire with island, dates, and headcount. We reply
            in Hawaii business hours with a menu direction and a price you can hold.
          </p>
          <div className="mt-8">
            <DualCta intent="myCHEF Hawaii — about" />
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Direct link:{' '}
            <Link to="/quote" className="text-ink underline underline-offset-4">
              /quote
            </Link>
            . Prices live on{' '}
            <Link to="/pricing" className="text-ink underline underline-offset-4">
              /pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-stone bg-ivory py-20">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink lg:col-span-2">
            Questions
          </h2>
          <Accordion.Root type="single" collapsible className="lg:col-span-3">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`a-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.25rem] font-light text-ink">{f.q}</span>
                    <span className="text-[12px] text-ink-soft">+</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pb-6 text-[17px] leading-relaxed text-ink-soft">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <SiblingCluster />
      <QuoteTeaserBand headline="Enquire for dates. Quote in writing." />
    </>
  );
}
