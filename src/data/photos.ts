/**
 * Canonical photography map. Alts describe the place and the dish.
 */

export const photos = {
  hubHero: {
    file: '/photos/oahu-villa-lanai-plated-dinner-dusk.jpg',
    alt: `Seared fish on a volcanic-stone Oʻahu villa lānai at dusk, Pacific beyond the railing.`,
  },
  oahuDinner: {
    file: '/photos/oahu-villa-lanai-plated-dinner-dusk.jpg',
    alt: `Plated private-chef dinner on an Oʻahu Gold Coast lānai at dusk.`,
  },
  oahuEstate: {
    file: '/photos/oahu-gold-coast-estate-dinner.jpg',
    alt: `A formally set Gold Coast estate table opening to a lawn, Diamond Head on the horizon.`,
  },
  bar: {
    file: '/photos/maui-villa-terrace-cocktail-bar.jpg',
    alt: `A mobile cocktail bar on a Maui villa terrace at sunset — coupe glasses, citrus, Pacific beyond.`,
  },
  bartender: {
    file: '/photos/bartender-terrace-service.jpg',
    alt: `A bartender pouring a citrus cocktail on a Hawaiian villa terrace.`,
  },
  wedding: {
    file: '/photos/maui-wedding-long-table-banyan-dusk.jpg',
    alt: `A wedding-week long table under a banyan at dusk, ocean lawn beyond.`,
  },
  weddingDetail: {
    file: '/photos/wedding-tabletop-candles-ivory.jpg',
    alt: `Ivory linen, brass candlesticks and orchids on a wedding tabletop.`,
  },
  kauaiChef: {
    file: '/photos/kauai-chef-plating-seared-fish-mountains.jpg',
    alt: `Chef’s hands finishing seared fish in a Kauaʻi villa kitchen, misted mountains beyond.`,
  },
  kauaiNorth: {
    file: '/photos/kauai-north-terrace-mist.jpg',
    alt: `Grilled-fish plates on a wet North Shore Kauaʻi stone terrace against misted peaks.`,
  },
  kauaiSouth: {
    file: '/photos/poipu-south-shore-kitchen-pool.jpg',
    alt: `Whole fish and fruit in a Poʻipū villa kitchen opening to a pool and pale cliffs.`,
  },
  kohalaFish: {
    file: '/photos/kohala-grilled-whole-fish-lava-golden-hour.jpg',
    alt: `Whole grilled fish and tropical fruit on Kohala lava rock at golden hour.`,
  },
  kohalaTable: {
    file: '/photos/kohala-lava-coast-table.jpg',
    alt: `An outdoor Kohala Coast table with plated fish, Mauna Kea in the distance.`,
  },
  konaKitchen: {
    file: '/photos/kona-coffee-coast-sear-kitchen.jpg',
    alt: `Searing fish in a Kona kitchen, coffee slopes and dry lava beyond the window.`,
  },
  mauiKitchen: {
    file: '/photos/maui-wailea-kitchen-plating.jpg',
    alt: `Chef’s hands finishing seared fish in a Wailea villa kitchen.`,
  },
  wailea: {
    file: '/photos/wailea-open-kitchen-tasting-morning.jpg',
    alt: `Morning tasting plates in a Wailea open kitchen, Molokini faintly through the window.`,
  },
  kapaluaTwo: {
    file: '/photos/maui-kapalua-dinner-for-two.jpg',
    alt: `Dinner for two on a Kapalua lānai at blue hour.`,
  },
  kaanapali: {
    file: '/photos/kaanapali-deck-sunset-family-table.jpg',
    alt: `A Kāʻanapali deck dinner with family-style fish, west Maui sunset.`,
  },
  makena: {
    file: '/photos/makena-lava-terrace-plated-carry.jpg',
    alt: `A chef carrying a plated course across a Makena lava terrace.`,
  },
  upcountry: {
    file: '/photos/upcountry-maui-mist-kitchen-produce.jpg',
    alt: `Produce prep in an Upcountry Maui kitchen, Haleakalā slopes in mist.`,
  },
  waikiki: {
    file: '/photos/waikiki-residence-kitchen-ahi.jpg',
    alt: `Plating ahi in a Waikīkī residence kitchen overlooking the canal.`,
  },
  koolina: {
    file: '/photos/koolina-villa-lagoon-morning-prep.jpg',
    alt: `Morning prep in a Ko Olina villa kitchen opening to a west-side lagoon.`,
  },
  kailua: {
    file: '/photos/kailua-lanikai-family-table-mokulua.jpg',
    alt: `Family-style table in a Kailua house, Mokulua islets through the sliders.`,
  },
  northShore: {
    file: '/photos/north-shore-oahu-grill-swell.jpg',
    alt: `Grilling whole fish on the Oʻahu North Shore, winter swell beyond ironwoods.`,
  },
  vacation: {
    file: '/photos/vacation-chef-morning-breakfast-pool.jpg',
    alt: `A vacation chef plating morning fruit and eggs by a villa pool.`,
  },
  catering: {
    file: '/photos/estate-catering-chef-team-lawn-dusk.jpg',
    alt: `A chef team plating event dishes under a tent on a Hawaiian lawn at dusk.`,
  },
  gatherings: {
    file: '/photos/gatherings-garden-table-dusk.jpg',
    alt: `A long garden table with family-style fish and candles at dusk.`,
  },
  fire: {
    file: '/photos/live-fire-grill-lanai-fish.jpg',
    alt: `Live-fire grill on a villa lānai, whole fish and citrus.`,
  },
  produce: {
    file: '/photos/hawaii-produce-fish-sourcing-still.jpg',
    alt: `Hawaii produce and whole fish on a villa kitchen board — sourcing still, not a named farm.`,
  },
  plated: {
    file: '/photos/plated-fish-lanai-dusk.jpg',
    alt: `Seared fish on dark ceramic on a lava-stone lānai at dusk.`,
  },
  chefTeam: {
    file: '/photos/villa-chef-assistant-kitchen.jpg',
    alt: `Chef and assistant working a Hawaiian villa kitchen opening to the ocean.`,
  },
  menu: {
    file: '/photos/villa-table-menu-card-detail.jpg',
    alt: `A menu card on ivory linen beside a plated fish course.`,
  },
} as const;

export type PhotoKey = keyof typeof photos;
