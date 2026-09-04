import type { IslandId } from './islands';

export interface IslandAboutCopy {
  h1: string;
  title: string;
  description: string;
  lede: string;
  hero: { file: string; alt: string };
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandAbout: Record<IslandId, IslandAboutCopy> = {
  oahu: {
    h1: 'The Oahu crew — Honolulu to Ko Olina.',
    title: 'About myCHEF Oahu — Honolulu to Ko Olina crew | myCHEF',
    description:
      'myCHEF Oahu staffs a brigade to the house: chef, sous, service, bar, shopper. Honolulu, Waikīkī residences, Kahala, Kailua, Ko Olina. Request a quote.',
    lede:
      'Town and the short-stay villa belt. We staff the night to the guest list — not a marketplace freelancer with a tote bag.',
    hero: {
      file: '/about/oahu-crew.png',
      alt: 'A villa-deck crew on Oʻahu at dusk — chefs and service around a long set table, ocean beyond.',
    },
    body: [
      'Oʻahu is Honolulu residences, Waikīkī apartments that actually have a kitchen, Kahala dining rooms, Kailua weeks, Ko Olina villa stays. Named corridors on this host: /honolulu, /waikiki, /kahala, /kailua, /ko-olina, /north-shore.',
      'A Gold Coast dinner and a North Shore surcharge day are not the same drive; the quote says which. Personal-chef weeks for households sit next to visitor dinners. The crew in the photograph is the point: this is not one person with a tote bag and a hope.',
      'You book myCHEF Hawaii. We assign the brigade. We do not sell chef names, bios, or a swipeable roster. Proof today is published starting prices, a sample menu, cleanup, and a written quote. Reviews publish after verified events.',
    ],
    faqs: [
      {
        q: 'How many people show up to cook?',
        a: 'As many as the house needs that night. A dinner for two is a chef and the shopping. A seated reception is chef, sous, service, and often a bartender. The crew is written on the quote.',
      },
      {
        q: 'Do you have Oʻahu guest reviews yet?',
        a: 'Not yet. We will not invent them. Reviews publish after verified events. Until then the proof is published prices and a written quote. See /trust.',
      },
    ],
  },
  maui: {
    h1: 'The Maui crew — Wailea to West Maui.',
    title: 'About myCHEF Maui — Wailea to West Maui crew | myCHEF',
    description:
      'myCHEF Maui staffs villa dinners and lawn receptions. Wailea, Kīhei, Kāʻanapali, Kapalua, Makena. Catering is the larger door. Request a quote.',
    lede:
      'The villa dinner people picture when they say private chef. The same team shops, cooks, and staffs the room. A reception on the lawn is a different crew than Date Night for two.',
    hero: {
      file: '/about/maui-crew.png',
      alt: 'A staffed Maui villa service — a brigade assembled on an open-air deck at sunset.',
    },
    body: [
      'Maui is Wailea, West Maui, Kīhei, Kapalua, Makena — named here as live corridors, not as decoration. Open /wailea, /kaanapali, /lahaina, /kihei, /kapalua, /makena. Catering is the larger search on this island.',
      'A reception on the lawn is a different crew than Date Night for two. We write that difference before the deposit. Upcountry is a published surcharge. Pāʻia is quote-only with the menu.',
      'Hawaii is launching. We do not invent Maui guest reviews, chef names, or an 808 number. Proof is the published card on /pricing and the written total on /quote.',
    ],
    faqs: [
      {
        q: 'Is catering bigger than private chef on Maui?',
        a: 'Yes in search. Maui catering is 480 monthly searches; private chef Maui is 260. Both doors are live. This page is who shows up.',
      },
      {
        q: 'Do you market Lahaina luxury dining?',
        a: 'No. We cook West Maui residences with kitchens — Kāʻanapali, Nāpili, Kapalua. See /lahaina for how we name that.',
      },
    ],
  },
  kauai: {
    h1: 'The Kauai crew — both shores, inquiry.',
    title: 'About myCHEF Kauai — both-shore inquiry crew | myCHEF',
    description:
      'myCHEF Kauai is inquiry-stage on both shores: Princeville, Hanalei, Poʻipū. We staff the estate to the guest list when a crew exists.',
    lede:
      'Princeville and Hanalei on the north, Poʻipū and Kōloa on the south. The bridge and the weather are real. We staff the estate to the guest list when a crew exists.',
    hero: {
      file: '/about/about-kauai-crew.png',
      alt: 'A Kauaʻi villa brigade on a North Shore stone terrace at dusk — chef, sous, service, bartender, misted mountains.',
    },
    body: [
      'Kauaʻi is both shores, inquiry-stage. Live corridors on this host: /princeville, /poipu, /hanalei, /kapaa. Far-North inquiries inherit a written road clause instead of a shrug.',
      'We do not pretend Līhuʻe and Hāʻena are the same afternoon. Menu bands match Maui: CORE $150–$250 a guest. The zone map is a map, not a surprise.',
      'Join the inquiry list with the shore and the dates. We do not invent Kauaʻi reviews or a Book-now button on a calendar we have not staffed yet.',
    ],
    faqs: [
      {
        q: 'Is Kauaʻi a waitlist?',
        a: 'No. Inquiry-stage means tell us the dates. It is not a live Book-now island, and it is not a fake waitlist.',
      },
      {
        q: 'Hanalei road closures?',
        a: 'Far-North inherits the bridge clause. We reschedule rather than forfeit. That is on the quote before any deposit.',
      },
    ],
  },
  bigisland: {
    h1: 'The Hawaiʻi Island crew — Kona and Kohala first.',
    title: 'About myCHEF Big Island — Kona–Kohala crew | myCHEF',
    description:
      'myCHEF Hawaiʻi Island is west-side first: Kona, Waikoloa, the Kohala Coast. Inquiry stage. Hilo is a different day.',
    lede:
      'Seven resort communities in one west-side radius. The island is 4,000 square miles; we will not pretend to cover it in an afternoon.',
    hero: {
      file: '/about/about-bigisland-crew.png',
      alt: 'A west-side Hawaiʻi Island villa brigade on a Kohala lava terrace at twilight — chefs plating, service moving, Mauna Kea faint.',
    },
    body: [
      'Hawaiʻi Island is west-side first. Live corridors: /kona, /waikoloa, /waimea, /kohala. Kona is a search people type; it has its own page on this host.',
      'Hilo is a different day — 2.5–3 hours, dedicated staffing, never a same-day round trip. Ironman week compresses the calendar. Tell us the dates early. The crew size still follows the house.',
      'Inquiry stage. Proof is published starting prices and a written quote. We do not invent Big Island reviews, farm names, or an 808 number.',
    ],
    faqs: [
      {
        q: 'Big Island or Hawaiʻi Island?',
        a: 'Both names. Searchers say Big Island and Kona; the geography is Hawaiʻi Island. Hostname is bigisland.mychef-hawaii.com.',
      },
      {
        q: 'Can you cover Hilo from Kona?',
        a: 'Not in one day. East side is quote-only with its own team day.',
      },
    ],
  },
};
