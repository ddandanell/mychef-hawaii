/**
 * Canonical photography map — seven campaign stills.
 * Public ships each file once. Keys below alias those URLs; alts stay honest:
 * concept images, not documented events.
 */

export const CONCEPT =
  'Campaign still — concept image, not a documented myCHEF Hawaiʻi event.';

const OAHU = '/photos/oahu-villa-lanai-plated-dinner-dusk.jpg';
const BAR = '/photos/maui-villa-terrace-cocktail-bar.jpg';
const WEDDING = '/photos/maui-wedding-long-table-banyan-dusk.jpg';
const KAUAI = '/photos/kauai-chef-plating-seared-fish-mountains.jpg';
const KOHALA = '/photos/kohala-grilled-whole-fish-lava-golden-hour.jpg';
const BREAKFAST = '/photos/oahu-vacation-chef-pool-breakfast.jpg';
const TENT = '/photos/hawaii-plated-catering-tent-sunset.jpg';

export const photos = {
  hubHero: {
    file: OAHU,
    alt: `Seared fish on a volcanic-stone villa lānai at dusk, Pacific beyond the railing. ${CONCEPT}`,
  },
  oahuDinner: {
    file: OAHU,
    alt: `Plated private-chef dinner on an Oʻahu villa lānai at dusk. ${CONCEPT}`,
  },
  oahuEstate: {
    file: OAHU,
    alt: `Intimate villa table at dusk — seared fish, orchid, candlelight, ocean horizon. ${CONCEPT}`,
  },
  bar: {
    file: BAR,
    alt: `A mobile cocktail bar on a Maui villa terrace at sunset — coupe glasses, citrus, Pacific beyond. ${CONCEPT}`,
  },
  bartender: {
    file: BAR,
    alt: `Copper bar tools, citrus and orchid-garnished coupes on a Hawaiian terrace at sunset. ${CONCEPT}`,
  },
  wedding: {
    file: WEDDING,
    alt: `A wedding-week long table under a banyan at dusk, ocean lawn beyond. ${CONCEPT}`,
  },
  weddingDetail: {
    file: TENT,
    alt: `Plated seared fish at a candlelit long table under a tent on a Hawaiian lawn at sunset. ${CONCEPT}`,
  },
  kauaiChef: {
    file: KAUAI,
    alt: `Chef’s hands finishing seared fish in a Kauaʻi villa kitchen, misted mountains beyond. ${CONCEPT}`,
  },
  kauaiNorth: {
    file: KAUAI,
    alt: `Seared fish plated in an open kitchen against misted Hawaiian mountains. ${CONCEPT}`,
  },
  kauaiSouth: {
    file: BREAKFAST,
    alt: `Poolside tropical breakfast — fruit, omelette and croissants, palms and mountains beyond. ${CONCEPT}`,
  },
  kohalaFish: {
    file: KOHALA,
    alt: `Whole grilled fish and tropical fruit on Kohala lava rock at golden hour. ${CONCEPT}`,
  },
  kohalaTable: {
    file: KOHALA,
    alt: `Grilled whole fish on lava rock, Pacific sunset and palms beyond. ${CONCEPT}`,
  },
  konaKitchen: {
    file: KOHALA,
    alt: `Ocean-to-table grill still — whole fish, papaya and mango on volcanic rock. ${CONCEPT}`,
  },
  mauiKitchen: {
    file: BAR,
    alt: `Maui villa terrace at sunset with a stocked cocktail bar overlooking the Pacific. ${CONCEPT}`,
  },
  wailea: {
    file: BAR,
    alt: `Sunset cocktail service on a west-Maui villa terrace. ${CONCEPT}`,
  },
  kapaluaTwo: {
    file: OAHU,
    alt: `Dinner for two on a villa lānai at dusk — seared fish, wine, candlelight. ${CONCEPT}`,
  },
  kaanapali: {
    file: BAR,
    alt: `West-Maui sunset bar setup with citrus, copper tools and coupe glasses. ${CONCEPT}`,
  },
  makena: {
    file: KOHALA,
    alt: `Grilled whole fish on lava rock at golden hour. ${CONCEPT}`,
  },
  upcountry: {
    file: KAUAI,
    alt: `Chef plating seared fish with misted mountain slopes beyond the pass. ${CONCEPT}`,
  },
  waikiki: {
    file: OAHU,
    alt: `Plated villa dinner at dusk — the in-residence private-chef setting. ${CONCEPT}`,
  },
  koolina: {
    file: BREAKFAST,
    alt: `Vacation-chef breakfast by a villa pool — tropical fruit, omelette, croissants. ${CONCEPT}`,
  },
  kailua: {
    file: BREAKFAST,
    alt: `Poolside morning table with tropical fruit and a folded omelette. ${CONCEPT}`,
  },
  northShore: {
    file: KOHALA,
    alt: `Whole grilled fish on a rocky Hawaiian shore at sunset. ${CONCEPT}`,
  },
  vacation: {
    file: BREAKFAST,
    alt: `Oʻahu vacation-chef breakfast by the pool — dragon fruit, papaya, omelette, croissants. ${CONCEPT}`,
  },
  catering: {
    file: TENT,
    alt: `Plated catering long table under a tent on a Hawaiian lawn at sunset. ${CONCEPT}`,
  },
  gatherings: {
    file: TENT,
    alt: `Candlelit plated-fish service under a white tent, ocean sunset beyond. ${CONCEPT}`,
  },
  fire: {
    file: KOHALA,
    alt: `Live-fire whole fish on lava rock at golden hour. ${CONCEPT}`,
  },
  produce: {
    file: BREAKFAST,
    alt: `Tropical fruit plate — dragon fruit, papaya, mango, kiwi — on a villa breakfast table. ${CONCEPT}`,
  },
  plated: {
    file: OAHU,
    alt: `Seared fish on dark ceramic on a villa lānai at dusk. ${CONCEPT}`,
  },
  chefTeam: {
    file: KAUAI,
    alt: `A chef finishing a seared-fish course in an open Hawaiian kitchen. ${CONCEPT}`,
  },
  menu: {
    file: TENT,
    alt: `Plated seared fish at a formally set outdoor table — linen, glassware, candlelight. ${CONCEPT}`,
  },
} as const;

export type PhotoKey = keyof typeof photos;
