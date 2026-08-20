import type { IslandId } from './islands';
import type { ZoneClass } from './zoneMap';

/** Area cells for location + private-chef/{area} pages. Unique logistics per cell. */
export interface AreaRecord {
  slug: string;
  name: string;
  zoneClass: ZoneClass;
  blurb: string;
  logistics: string;
  fit: string;
}

export const areas: Record<IslandId, AreaRecord[]> = {
  oahu: [
    { slug: 'waikiki', name: 'Waikīkī', zoneClass: 'base', blurb: 'Resort residences with kitchens — most hotel rooms cannot host a chef.', logistics: 'High-rise load-in, freight elevators, COIs. Base zone.', fit: 'Celebration dinners in residences, not standard hotel rooms.' },
    { slug: 'kahala', name: 'Kahala', zoneClass: 'base', blurb: 'Gold Coast estate entertaining and resident households.', logistics: 'Base zone. Corridor timing — on-site before the evening rush.', fit: 'Weekly kamaʻāina line and celebration dinners.' },
    { slug: 'ko-olina', name: 'Ko Olina', zoneClass: 'base', blurb: 'West-side legal short-stay villa pool; multi-day packages lead.', logistics: 'Base zone with west-side provisioning, not town round-trips.', fit: '3–7 day villa weeks, families, celebration stays.' },
    { slug: 'kailua', name: 'Kailua', zoneClass: 'base', blurb: 'Windward 30-day-estate market. Multi-day packages, not weekend drop-ins.', logistics: 'Base zone. Equipment confirmed before arrival.', fit: 'Month-long estate stays and family weeks.' },
    { slug: 'lanikai', name: 'Lanikai', zoneClass: 'base', blurb: 'Same 30-day-estate rule as Kailua, quieter beach-house inventory.', logistics: 'Base zone. Galley kitchens are common — bring-equipment menus.', fit: 'Long-stay households, not one-night tourist dinners.' },
    { slug: 'north-shore', name: 'North Shore', zoneClass: 'surcharge', blurb: 'Turtle Bay corridor. Drive time is published, not discovered on the invoice.', logistics: 'Surcharge zone. 60–90+ minutes from town. Dedicated chef days.', fit: 'Villa dinners that justify the drive. Surf season books early.' },
    { slug: 'hawaii-kai', name: 'Hawaiʻi Kai', zoneClass: 'base', blurb: 'East Honolulu households — resident entertaining more than tourist villas.', logistics: 'Base-adjacent. Traffic planned into the chef day.', fit: 'Kamaʻāina dinners and weekly service.' },
    { slug: 'diamond-head', name: 'Diamond Head', zoneClass: 'base', blurb: 'Gold Coast adjacent estates and residences with real dining rooms.', logistics: 'Base zone. Building rules vary — we confirm load-in in writing.', fit: 'Celebration tables of 4–15.' },
    { slug: 'kakaako', name: 'Kakaʻako', zoneClass: 'base', blurb: 'Tower residences. Kitchens are often compact; menus adapt.', logistics: 'Freight elevators and quiet hours. Base zone.', fit: 'In-residence dinners, not rooftop clichés we do not control.' },
    { slug: 'downtown', name: 'Downtown Honolulu', zoneClass: 'base', blurb: 'Pied-à-terre kitchens and private dining rooms — not restaurant takeovers.', logistics: 'Base zone. Parking and loading are the constraint, not distance.', fit: 'Small celebrations, executive dinners off HCC (closed to citywides through 2027).' },
    { slug: 'kaneohe', name: 'Kāneʻohe', zoneClass: 'surcharge', blurb: 'Windward town — quieter than Kailua, still a drive from town.', logistics: 'Surcharge posture labeled BDE. Quoted with the menu.', fit: 'Household dinners and multi-day stays.' },
    { slug: 'ewa', name: 'ʻEwa / Kapolei', zoneClass: 'base', blurb: 'Leeward residential. Closer to Ko Olina provisioning than to Waikīkī.', logistics: 'West-side base. No town surcharge.', fit: 'Resident households and west-side villa overflow.' },
  ],
  maui: [
    { slug: 'wailea', name: 'Wailea', zoneClass: 'base', blurb: 'Signature resort-residence corridor. The private chef’s table in the villa.', logistics: 'Base zone. December–March books early.', fit: 'Signature dinners, chef’s table, villa weeks.' },
    { slug: 'kaanapali', name: 'Kāʻanapali', zoneClass: 'base', blurb: 'West Maui named honestly — not marketed as Lahaina luxury dining.', logistics: 'Base zone. West Maui traffic planned into arrival.', fit: 'Villa dinners and wedding-week satellite events.' },
    { slug: 'kapalua', name: 'Kapalua', zoneClass: 'base', blurb: 'Northwest estates. Dinners-for-two and family celebrations.', logistics: 'Base zone. Northwest drive included.', fit: 'Romance dinners and wedding-week support.' },
    { slug: 'makena', name: 'Makena', zoneClass: 'base', blurb: 'South of Wailea, still base zone, quieter inventory.', logistics: 'Base zone. Outdoor setups always have a wet-weather backup.', fit: 'Villa dinners and family weeks.' },
    { slug: 'upcountry', name: 'Upcountry', zoneClass: 'surcharge', blurb: 'Elevation and drive time. Farm names only after written verification.', logistics: 'Surcharge zone, labeled BDE. Quoted with the menu.', fit: 'Estate dinners and retreat days that justify the drive.' },
    { slug: 'kihei', name: 'Kīhei', zoneClass: 'base', blurb: 'Service-led, not luxury-led. Condos and vacation homes with kitchens.', logistics: 'Base-adjacent South Maui. Kitchen constraints stated on the quote.', fit: 'Family dinners and multi-day stays — not a Wailea clone page.' },
    { slug: 'napili', name: 'Nāpili', zoneClass: 'base', blurb: 'West Maui with Kāʻanapali/Kapalua — never a Lahaina destination page.', logistics: 'Base zone. Same West Maui timing rules.', fit: 'Villa weeks and small celebrations.' },
    { slug: 'paia', name: 'Pāʻia / Haiku', zoneClass: 'quote-only', blurb: 'North Shore module — quoted with the menu, not a doorway destination page.', logistics: 'Quote-only. Extended drive.', fit: 'Estate dinners when the drive is planned, not stacked with Wailea.' },
    { slug: 'makawao', name: 'Makawao', zoneClass: 'surcharge', blurb: 'Upcountry town. Elevation surcharge applies.', logistics: 'Surcharge. Weather can turn on outdoor setups.', fit: 'Retreat houses and estate tables.' },
    { slug: 'honokowai', name: 'Honokōwai', zoneClass: 'base', blurb: 'West Maui residential strip between Kāʻanapali and Kapalua.', logistics: 'Base zone. Condo kitchens common.', fit: 'Multi-day chef days more than one-off halos.' },
    { slug: 'waikapu', name: 'Waikapū', zoneClass: 'surcharge', blurb: 'Central valley — not a resort corridor.', logistics: 'Surcharge for drive time from Wailea/West.', fit: 'Private estates, not visitor condos.' },
    { slug: 'haleakala', name: 'Haleakalā / Kula', zoneClass: 'surcharge', blurb: 'High elevation. Named farms only with verification.', logistics: 'Surcharge. Temperature and drive both change the chef day.', fit: 'Retreat and estate dinners.' },
  ],
  kauai: [
    { slug: 'princeville', name: 'Princeville', zoneClass: 'surcharge', blurb: 'North Shore estate inventory. Inquiry-stage until a staffed team exists.', logistics: 'Surcharge at launch. Surf-season winters book early.', fit: 'Estate weeks and villa dinners — inquiry only.' },
    { slug: 'hanalei', name: 'Hanalei', zoneClass: 'surcharge', blurb: 'North Shore town. Weather and road reality published up front.', logistics: 'Surcharge. Far-North events inherit the bridge clause.', fit: 'Estate dinners. Inquiry-stage.' },
    { slug: 'haena', name: 'Hāʻena', zoneClass: 'quote-only', blurb: 'Far North. 72-hour notice. Road closures reschedule rather than forfeit.', logistics: 'Quote-only. Hanalei-bridge weather clause.', fit: 'Planned events only, never same-day.' },
    { slug: 'poipu', name: 'Poʻipū', zoneClass: 'surcharge', blurb: 'South Shore. Sunnier, closer to the Līhuʻe base.', logistics: 'Surcharge at launch, shorter drive than the North.', fit: 'Arrival-night dinners and retreat weeks. Inquiry-stage.' },
    { slug: 'koloa', name: 'Kōloa', zoneClass: 'surcharge', blurb: 'South Shore town adjacent to Poʻipū.', logistics: 'Same South Shore surcharge map.', fit: 'Retreat houses and small weddings to ~75. Inquiry-stage.' },
    { slug: 'lihue', name: 'Līhuʻe', zoneClass: 'base', blurb: 'Planned base. Airport-adjacent, not the villa inventory.', logistics: 'Base zone when we launch. Included.', fit: 'In-town households and staging, not the hero product.' },
    { slug: 'kapaa', name: 'Kapaʻa', zoneClass: 'base', blurb: 'East side town. Lower priority than the two shores.', logistics: 'Base zone at launch.', fit: 'Household dinners. Inquiry-stage.' },
    { slug: 'kalaheo', name: 'Kalāheo', zoneClass: 'surcharge', blurb: 'South-west residential. Between Līhuʻe and the South Shore villas.', logistics: 'Surcharge. Quoted with the menu.', fit: 'Residential tables. Inquiry-stage.' },
    { slug: 'waimea', name: 'Waimea', zoneClass: 'surcharge', blurb: 'West side. Distance from Līhuʻe is the story.', logistics: 'Extended surcharge. Advance notice.', fit: 'West-side estates. Inquiry-stage.' },
    { slug: 'hanapepe', name: 'Hanapēpē', zoneClass: 'surcharge', blurb: 'West-side town. Not a visitor-villa cluster.', logistics: 'Surcharge. Quoted.', fit: 'Private houses. Inquiry-stage.' },
    { slug: 'anahola', name: 'Anahola', zoneClass: 'surcharge', blurb: 'East-north coast. Quieter than Kapaʻa, still a drive from Līhuʻe staging.', logistics: 'Surcharge at launch. Quoted with the menu.', fit: 'Household dinners. Inquiry-stage.' },
    { slug: 'eleele', name: 'ʻEleʻele', zoneClass: 'surcharge', blurb: 'South-west residential. Between Kalāheo and the west side.', logistics: 'Surcharge. Advance notice.', fit: 'Private houses. Inquiry-stage.' },
  ],
  bigisland: [
    { slug: 'kailua-kona', name: 'Kailua-Kona', zoneClass: 'base', blurb: 'West-side town at the south end of the planned corridor.', logistics: 'Planned base zone. Event weeks (Ironman) compress availability.', fit: 'Villa dinners. Inquiry-stage until staffed.' },
    { slug: 'keauhou', name: 'Keauhou', zoneClass: 'base', blurb: 'South of town, still the Kona–Kohala corridor.', logistics: 'Base zone at launch.', fit: 'Resort-residence dinners. Inquiry-stage.' },
    { slug: 'waikoloa', name: 'Waikoloa', zoneClass: 'base', blurb: 'Kohala resort community inside the 30-minute corridor.', logistics: 'Base zone. Seven resort communities share this radius.', fit: 'Villa weeks. Inquiry-stage.' },
    { slug: 'mauna-lani', name: 'Mauna Lani', zoneClass: 'base', blurb: 'Kohala resort community. Same corridor, not a separate island claim.', logistics: 'Base zone.', fit: 'Estate and resort-residence dinners. Inquiry-stage.' },
    { slug: 'mauna-kea', name: 'Mauna Kea resort', zoneClass: 'base', blurb: 'North Kohala resort belt. Corridor, not the mountain.', logistics: 'Base zone. Named for the resort community, not the summit.', fit: 'Villa dinners. Inquiry-stage.' },
    { slug: 'waimea', name: 'Waimea / Kamuela', zoneClass: 'surcharge', blurb: 'Upcountry. Ranch country. Surcharge at launch.', logistics: 'Surcharge. Cooler elevation.', fit: 'Estate and ranch houses. Inquiry-stage.' },
    { slug: 'hilo', name: 'Hilo', zoneClass: 'quote-only', blurb: 'East side. 2.5–3 hours from Kona. Never a same-day round trip.', logistics: 'Quote-only. Dedicated staffing.', fit: 'East-side events with their own team day. Inquiry-stage.' },
    { slug: 'volcano', name: 'Volcano', zoneClass: 'quote-only', blurb: 'East side with Hilo. Quote-only, never squeezed into a west-side day.', logistics: 'Quote-only. 2.5–3 hours from Kona.', fit: 'Lodge and estate dinners with dedicated staffing.' },
    { slug: 'kau', name: 'Kaʻū / South', zoneClass: 'surcharge', blurb: 'South point direction. Extended surcharge, advance notice.', logistics: 'Zone C surcharge. Coffee-origin labeling (Act 198 from 2027) applies to named Kaʻū coffee.', fit: 'South-side estates. Inquiry-stage.' },
    { slug: 'honokaa', name: 'Honokaʻa / Hāmākua', zoneClass: 'surcharge', blurb: 'Hāmākua coast. Surcharge. Mushrooms are a sourcing story, not a farm claim without verification.', logistics: 'Surcharge. Named producers only after written verification.', fit: 'Estate dinners. Inquiry-stage.' },
    { slug: 'holualoa', name: 'Hōlualoa', zoneClass: 'base', blurb: 'Mauka of Kailua-Kona. Coffee-country elevation, still the west-side corridor.', logistics: 'Base-adjacent. Cooler evenings. Named coffee only with origin labeling.', fit: 'Estate dinners. Inquiry-stage.' },
    { slug: 'puako', name: 'Puakō', zoneClass: 'base', blurb: 'Kohala coast residential between Waikoloa and Mauna Lani.', logistics: 'Base zone inside the 30-minute corridor.', fit: 'Villa weeks. Inquiry-stage.' },
  ],
};

export function areasFor(island: IslandId): AreaRecord[] {
  return areas[island];
}

export function getArea(island: IslandId, slug: string): AreaRecord | undefined {
  return areas[island].find((a) => a.slug === slug);
}
