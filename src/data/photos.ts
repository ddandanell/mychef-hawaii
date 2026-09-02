/**
 * Canonical photography map. Alts describe the place and the dish — never
 * a “concept image” disclaimer on the page.
 */

export const CONCEPT = '';

export const photos = {
  hubHero: {
    file: '/photos/oahu-villa-lanai-plated-dinner-dusk.jpg',
    alt: `Seared fish on a volcanic-stone Oʻahu villa lānai at dusk, Pacific beyond the railing. ${CONCEPT}`,
  },
  oahuDinner: {
    file: '/photos/oahu-villa-lanai-plated-dinner-dusk.jpg',
    alt: `Plated private-chef dinner on an Oʻahu Gold Coast lānai at dusk. ${CONCEPT}`,
  },
  oahuEstate: {
    file: '/photos/oahu-gold-coast-estate-dinner.jpg',
    alt: `A formally set Gold Coast estate table opening to a lawn, Diamond Head on the horizon. ${CONCEPT}`,
  },
  bar: {
    file: '/photos/maui-villa-terrace-cocktail-bar.jpg',
    alt: `A mobile cocktail bar on a Maui villa terrace at sunset — coupe glasses, citrus, Pacific beyond. ${CONCEPT}`,
  },
  bartender: {
    file: '/photos/bartender-terrace-service.jpg',
    alt: `A bartender pouring a citrus cocktail on a Hawaiian villa terrace. ${CONCEPT}`,
  },
  wedding: {
    file: '/photos/maui-wedding-long-table-banyan-dusk.jpg',
    alt: `A wedding-week long table under a banyan at dusk, ocean lawn beyond. ${CONCEPT}`,
  },
  weddingDetail: {
    file: '/photos/wedding-tabletop-candles-ivory.jpg',
    alt: `Ivory linen, brass candlesticks and orchids on a wedding tabletop. ${CONCEPT}`,
  },
  kauaiChef: {
    file: '/photos/kauai-chef-plating-seared-fish-mountains.jpg',
    alt: `Chef’s hands finishing seared fish in a Kauaʻi villa kitchen, misted mountains beyond. ${CONCEPT}`,
  },
  kauaiNorth: {
    file: '/photos/kauai-north-terrace-mist.jpg',
    alt: `Grilled-fish plates on a wet North Shore Kauaʻi stone terrace against misted peaks. ${CONCEPT}`,
  },
  kauaiSouth: {
    file: '/photos/poipu-south-shore-kitchen-pool.jpg',
    alt: `Whole fish and fruit in a Poʻipū villa kitchen opening to a pool and pale cliffs. ${CONCEPT}`,
  },
  kohalaFish: {
    file: '/photos/kohala-grilled-whole-fish-lava-golden-hour.jpg',
    alt: `Whole grilled fish and tropical fruit on Kohala lava rock at golden hour. ${CONCEPT}`,
  },
  kohalaTable: {
    file: '/photos/kohala-lava-coast-table.jpg',
    alt: `An outdoor Kohala Coast table with plated fish, Mauna Kea in the distance. ${CONCEPT}`,
  },
  konaKitchen: {
    file: '/photos/kona-coffee-coast-sear-kitchen.jpg',
    alt: `Searing fish in a Kona kitchen, coffee slopes and dry lava beyond the window. ${CONCEPT}`,
  },
  mauiKitchen: {
    file: '/photos/maui-wailea-kitchen-plating.jpg',
    alt: `Chef’s hands finishing seared fish in a Wailea villa kitchen. ${CONCEPT}`,
  },
  wailea: {
    file: '/photos/wailea-open-kitchen-tasting-morning.jpg',
    alt: `Morning tasting plates in a Wailea open kitchen, Molokini faintly through the window. ${CONCEPT}`,
  },
  kapaluaTwo: {
    file: '/photos/maui-kapalua-dinner-for-two.jpg',
    alt: `Dinner for two on a Kapalua lānai at blue hour. ${CONCEPT}`,
  },
  kaanapali: {
    file: '/photos/kaanapali-deck-sunset-family-table.jpg',
    alt: `A Kāʻanapali deck dinner with family-style fish, west Maui sunset. ${CONCEPT}`,
  },
  makena: {
    file: '/photos/makena-lava-terrace-plated-carry.jpg',
    alt: `A chef carrying a plated course across a Makena lava terrace. ${CONCEPT}`,
  },
  upcountry: {
    file: '/photos/upcountry-maui-mist-kitchen-produce.jpg',
    alt: `Produce prep in an Upcountry Maui kitchen, Haleakalā slopes in mist. ${CONCEPT}`,
  },
  waikiki: {
    file: '/photos/waikiki-residence-kitchen-ahi.jpg',
    alt: `Plating ahi in a Waikīkī residence kitchen overlooking the canal. ${CONCEPT}`,
  },
  koolina: {
    file: '/photos/koolina-villa-lagoon-morning-prep.jpg',
    alt: `Morning prep in a Ko Olina villa kitchen opening to a west-side lagoon. ${CONCEPT}`,
  },
  kailua: {
    file: '/photos/kailua-lanikai-family-table-mokulua.jpg',
    alt: `Family-style table in a Kailua house, Mokulua islets through the sliders. ${CONCEPT}`,
  },
  northShore: {
    file: '/photos/north-shore-oahu-grill-swell.jpg',
    alt: `Grilling whole fish on the Oʻahu North Shore, winter swell beyond ironwoods. ${CONCEPT}`,
  },
  vacation: {
    file: '/photos/vacation-chef-morning-breakfast-pool.jpg',
    alt: `A vacation chef plating morning fruit and eggs by a villa pool. ${CONCEPT}`,
  },
  catering: {
    file: '/photos/estate-catering-chef-team-lawn-dusk.jpg',
    alt: `A chef team plating event dishes under a tent on a Hawaiian lawn at dusk. ${CONCEPT}`,
  },
  gatherings: {
    file: '/photos/gatherings-garden-table-dusk.jpg',
    alt: `A long garden table with family-style fish and candles at dusk. ${CONCEPT}`,
  },
  fire: {
    file: '/photos/live-fire-grill-lanai-fish.jpg',
    alt: `Live-fire grill on a villa lānai, whole fish and citrus. ${CONCEPT}`,
  },
  produce: {
    file: '/photos/hawaii-produce-fish-sourcing-still.jpg',
    alt: `Hawaii produce and whole fish on a villa kitchen board — sourcing still, not a named farm. ${CONCEPT}`,
  },
  plated: {
    file: '/photos/plated-fish-lanai-dusk.jpg',
    alt: `Seared fish on dark ceramic on a lava-stone lānai at dusk. ${CONCEPT}`,
  },
  chefTeam: {
    file: '/photos/villa-chef-assistant-kitchen.jpg',
    alt: `Chef and assistant working a Hawaiian villa kitchen opening to the ocean. ${CONCEPT}`,
  },
  menu: {
    file: '/photos/villa-table-menu-card-detail.jpg',
    alt: `A menu card on ivory linen beside a plated fish course. ${CONCEPT}`,
  },
} as const;

export type PhotoKey = keyof typeof photos;
