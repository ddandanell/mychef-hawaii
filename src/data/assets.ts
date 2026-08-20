/**
 * Researched photography asset library (expand-assets).
 *
 * These are licensed-pool research candidates converted to optimized
 * progressive JPEGs. They are placeholders for art direction and layout:
 * every entry must be replaced with owned/licensed final photography
 * before any paid public launch (see `licensePosture`).
 */

export interface AssetEntry {
  /** Path under /public */
  file: string;
  /** Accessible alt text */
  alt: string;
  /** Platform the research candidate was sourced from */
  source: string;
  /** Licensing posture — binding for launch */
  licensePosture: string;
  /** Cultural-veto (design.md §9.5) verification note */
  culturalCheck: string;
}

const LICENSE_POSTURE =
  'stock search result; replace with owned/licensed final photography before paid public launch';

export const assets: Record<string, AssetEntry> = {
  heroPrivateChef: {
    file: '/assets/hero-private-chef.jpg',
    alt: 'Private chef plating a dish in a villa kitchen, hands arranging garnish',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: working professional shown hands-first, no posed face; no tiki/hula/lei/sunset imagery; no sacred terminology.',
  },
  foodPlating: {
    file: '/assets/food-plating.jpg',
    alt: 'Close-up of chef hands tweezing a garnish onto a ceramic plate',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: editorial food photography, muted palette, hands as professionals; no tropical clichés.',
  },
  privateDiningRoom: {
    file: '/assets/private-dining-room.jpg',
    alt: 'Long private dining table set in a warm, wood-toned dining room',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: interior hospitality scene, no people, no cultural props or clichés.',
  },
  villaModern: {
    file: '/assets/villa-modern.jpg',
    alt: 'Modern luxury villa interior with open kitchen and ocean view',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: architecture/interior only; no venue named or implied as partner; no sunset cliché.',
  },
  beachTable: {
    file: '/assets/beach-table.jpg',
    alt: 'Dining table set on a quiet beach in soft daylight, calm water behind',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: no sunset silhouette, no tiki/torch/lei styling; simple table setting in natural light.',
  },
  weddingReception: {
    file: '/assets/wedding-reception.jpg',
    alt: 'Elegant wedding reception table with ivory florals and taper candles',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: elegant not tropical-kitsch; no leis or tiki décor; no identifiable guests facing camera.',
  },
  weddingGarden: {
    file: '/assets/wedding-garden.jpg',
    alt: 'Outdoor garden wedding table with florals and candle lanterns',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: private-estate garden feel, muted warm palette; no Hawaiian sacred-site or cultural imagery.',
  },
  weddingCandles: {
    file: '/assets/wedding-candles.jpg',
    alt: 'Taper candles and white flowers on a wedding dinner table',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: candlelit tabletop detail, no people, no cultural props.',
  },
  seafoodMarket: {
    file: '/assets/seafood-market.jpg',
    alt: 'Fresh fish and crabs on ice at a seafood market',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: sourcing/provenance subject matter; no vendor faces; no farm or producer named (§9.5 compliant).',
  },
  farmersMarket: {
    file: '/assets/farmers-market.jpg',
    alt: 'Colorful produce stand with tomatoes and vegetables at a farmers market',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: produce only, no identifiable people; no farm/producer names claimed.',
  },
  tropicalFruit: {
    file: '/assets/tropical-fruit.jpg',
    alt: 'Market stall displaying fresh tropical fruit',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: ingredient-focused editorial still; not used as generic "tropical paradise" décor.',
  },
  dinnerForTwo: {
    file: '/assets/dinner-for-two.jpg',
    alt: 'Intimate candlelit dinner table for two with wine, muted evening tones',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: no sunset silhouette; quiet refined evening scene without people facing camera.',
  },
  celebrationTable: {
    file: '/assets/celebration-table.jpg',
    alt: 'Long candlelit celebration dinner table set for a group',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: table setting only, no posed guests; no tropical-kitsch décor.',
  },
  menuCard: {
    file: '/assets/menu-card.jpg',
    alt: 'Printed menu card in a stand on a formally set dining table',
    source: 'Stock photo search result (research download)',
    licensePosture: LICENSE_POSTURE,
    culturalCheck:
      'Pass: paper-goods detail shot; menu text is generic placeholder, no venue or chef named.',
  },
};

export type AssetKey = keyof typeof assets;
