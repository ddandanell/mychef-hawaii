import type { IslandId } from './islands';
import type { ZoneClass } from './zoneMap';

/**
 * Island location pages — unique corridor/shore documents, never cloned
 * island homepages. Bound to zoneMap classes. No partner, venue, or
 * license claims. Corridor heroes are campaign stills (concept, not documented events).
 */

export interface LocationRecord {
  island: IslandId;
  slug: string;
  name: string;
  /** Corridor / shore label used in eyebrows */
  area: string;
  zoneClass: ZoneClass;
  zoneCode: string;
  hero: string;
  heroAlt: string;
  h1: string;
  lede: string;
  body: string[];
  fit: string;
  logistics: string;
  quoteQuery: string;
  faqs: { q: string; a: string }[];
}

export const locations: LocationRecord[] = [
  /* ---------------- Oʻahu ---------------- */
  {
    island: 'oahu',
    slug: 'waikiki',
    name: 'Waikīkī',
    area: 'Resort residences',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-waikiki.jpg',
    heroAlt: 'A private chef plates seared fish in a Waikīkī high-rise residence kitchen overlooking the Ala Wai canal. Concept image, not a myCHEF event.',
    h1: 'A chef in a Waikīkī kitchen — when the suite actually has one.',
    lede:
      'Most Waikīkī hotel rooms cannot host a private chef. We cook in resort residences and apartments with real kitchens — and we design bring-equipment menus when the kitchen is a galley.',
    body: [
      'Waikīkī is Oʻahu’s volume corridor, not its estate corridor. The honest product here is celebration dinners and multi-day chef service in residences that have a cooktop, refrigeration and a table — not a room-service impersonation in a studio without a kitchen.',
      'Freight elevators, loading docks and building certificates of insurance are handled with the property in advance. If the kitchen cannot support the menu, we say so before you book — we do not discover that on the night.',
    ],
    fit: 'Visitor celebration dinners, 2–15 guests, residences with kitchens. Hotel rooms without kitchens are declined or redesigned, never forced.',
    logistics: 'Base zone — no travel surcharge. On-site roughly three hours before service to beat corridor traffic.',
    quoteQuery: '/quote?island=oahu&service=signature-dinner',
    faqs: [
      {
        q: 'Can you cook in a Waikīkī hotel room?',
        a: 'Only if it is a residence with a functioning kitchen. Standard hotel rooms are not a private-chef venue. Tell us the property type on the quote form and we confirm feasibility in writing.',
      },
      {
        q: 'What about building rules and COIs?',
        a: 'Common. We arrange freight-elevator windows, loading and certificates of insurance with the building before the event day.',
      },
    ],
  },
  {
    island: 'oahu',
    slug: 'kahala',
    name: 'Kahala / Gold Coast',
    area: 'Estate entertaining',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-kahala.jpg',
    heroAlt: 'A chef serves plated fish to a couple at dusk on a Kahala Gold Coast lawn, Diamond Head on the horizon. Concept image, not a myCHEF event.',
    h1: 'Estate evenings along the Gold Coast.',
    lede:
      'Kahala and the Gold Coast are Oʻahu’s household-entertaining belt: residents who host, and visitors in houses with real dining rooms. This is where the kamaʻāina weekly line and celebration dinners overlap.',
    body: [
      'The kitchens here are usually the real thing — which is why this corridor supports both a one-night celebration and a standing weekly chef. Groceries for the kamaʻāina line are billed at cost; the weekly fee is a planning-orientation figure labeled BUSINESS DECISION REQUIRED until the rate card is approved.',
      'We do not claim named-house partnerships. If you have a property manager or a household we should coordinate with, put that on the quote form.',
    ],
    fit: 'Resident households, celebration dinners, 4-week minimum posture on weekly service.',
    logistics: 'Base zone. Corridor timing still applies — your chef is on-site before the evening rush.',
    quoteQuery: '/quote?island=oahu&service=weekly-household',
    faqs: [
      {
        q: 'Do you do weekly service here?',
        a: 'Yes — this is the core of the kamaʻāina line: a standing chef night or weekly meal prep, fixed weekly fee plus groceries at cost, with a four-week minimum posture.',
      },
      {
        q: 'Can visitors in a rented house book a single dinner?',
        a: 'Yes. Celebration dinners in Gold Coast houses are a base-zone product, quoted the same way as any Oʻahu villa dinner.',
      },
    ],
  },
  {
    island: 'oahu',
    slug: 'ko-olina',
    name: 'Ko Olina',
    area: 'West-side villas',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-ko-olina.jpg',
    heroAlt: 'A private chef preps mango, tomatoes and a whole fish in a Ko Olina villa kitchen opening to a calm west-side lagoon. Concept image, not a myCHEF event.',
    h1: 'The west-side villa week, fully cheffed.',
    lede:
      'Ko Olina holds Oʻahu’s deepest legal short-stay villa pool. Multi-day packages — provisioning, full-board days, one team — are the product this corridor was built for.',
    body: [
      'West-side provisioning is its own run: we shop for the week rather than making town round-trips. Villa kitchens here are typically designed for cooking, which is why Ko Olina carries the multi-day package instead of one-off drop-ins as the lead offer.',
      'No property is implied as a partner. Availability is confirmed per address, per week, in writing.',
    ],
    fit: '3–7 day villa stays, families and celebration weeks, 2–15 at the table.',
    logistics: 'Base zone with west-side provisioning. Travel from town is planned into the chef day, not billed as a surprise.',
    quoteQuery: '/quote?island=oahu&service=vacation-chef',
    faqs: [
      {
        q: 'Is a one-night dinner possible, or only multi-day?',
        a: 'One-night dinners are possible. The corridor’s strength is the multi-day package, so that is what we lead with — your quote can still be a single evening.',
      },
      {
        q: 'Do you stock the fridge before we land?',
        a: 'Yes, when the stay includes provisioning. Arrival-night dinner plus a stocked fridge is the usual opening move for a Ko Olina week.',
      },
    ],
  },
  {
    island: 'oahu',
    slug: 'kailua',
    name: 'Kailua / Lanikai',
    area: 'Windward estates',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-kailua.jpg',
    heroAlt: 'A family shares a beach-house dinner in Kailua with the Mokulua islets offshore; a chef finishes plates at the pass. Concept image, not a myCHEF event.',
    h1: 'Windward stays are measured in weeks, not nights.',
    lede:
      'Kailua and Lanikai are a 30-day-estate market. That rule shapes the product: multi-day packages for longer stays, not one-off dinner drop-ins into a weekend rental that the law no longer allows.',
    body: [
      'If you are in a genuine 30-day estate, we build provisioning, full-board days and an event dinner around that stay. If the booking is a short illegal stay, we do not cook it — the 30-day rule is a logistics fact, not a slogan.',
      'Windward kitchens vary from estate-grade to beach-house galley. We confirm equipment on the quote, not on arrival.',
    ],
    fit: 'Multi-day estate stays, family weeks, 2–15 guests. Not a one-night tourist drop-in corridor.',
    logistics: 'Base zone. Drive time from town is planned; it is not a surcharge corridor.',
    quoteQuery: '/quote?island=oahu&service=vacation-chef',
    faqs: [
      {
        q: 'How does the 30-day rental rule change the menu?',
        a: 'It changes the product, not just the menu. We package chef days for stays that actually exist under the rule — provisioning and full-board — rather than selling a single dinner into a two-night rental.',
      },
      {
        q: 'Can we still do one celebration dinner during a month-long stay?',
        a: 'Yes. A celebration dinner sits inside the multi-day package, or it can be quoted as a single evening if that is all you want.',
      },
    ],
  },
  {
    island: 'oahu',
    slug: 'north-shore',
    name: 'North Shore / Turtle Bay',
    area: 'Surcharge corridor',
    zoneClass: 'surcharge',
    zoneCode: 'B',
    hero: '/photos/loc-north-shore.jpg',
    heroAlt: 'A chef grills fish on an Oʻahu North Shore lanai with winter swell and ironwood trees beyond. Concept image, not a myCHEF event.',
    h1: 'The North Shore fee is on the website, not the invoice.',
    lede:
      'Turtle Bay and the North Shore are 60–90+ minutes from town. That drive is a published surcharge — labeled BUSINESS DECISION REQUIRED until the rate card is approved — and surf-season dates book early.',
    body: [
      'This is the only Oʻahu corridor that is not a base zone. The surcharge exists because the chef day is a different shape: earlier departure, less same-day stacking, surf-season congestion.',
      'We would rather lose a booking than bury a travel fee. Your written quote shows the zone line before you commit.',
    ],
    fit: 'Villa dinners and multi-day packages that justify the drive. Far-zone events carry honest timing, not a squeezed town schedule.',
    logistics: 'Surcharge zone. 60–90+ minutes from town. Surf season (winter) dates should be enquired early.',
    quoteQuery: '/quote?island=oahu&service=signature-dinner',
    faqs: [
      {
        q: 'How much is the North Shore travel fee?',
        a: 'It is a published surcharge labeled BUSINESS DECISION REQUIRED until the rate card is approved. It appears as its own line on your written quote — never as a surprise on the night.',
      },
      {
        q: 'Can you do a same-day town dinner and a North Shore dinner?',
        a: 'No. The drive makes stacking dishonest. North Shore days are dedicated.',
      },
    ],
  },

  /* ---------------- Maui ---------------- */
  {
    island: 'maui',
    slug: 'wailea',
    name: 'Wailea',
    area: 'Resort-residence corridor',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-wailea.jpg',
    heroAlt: 'A chef finishes a tasting-menu plate at a Wailea villa counter while guests watch; Molokini sits on the south Maui horizon. Concept image, not a myCHEF event.',
    h1: 'The private chef’s table — in a Wailea villa.',
    lede:
      'Wailea is Maui’s signature corridor: hotel-zoned resort residences with kitchens, December peaks, and the dinner format we built the island around. We cook at your table, not at a communal resort chef’s table.',
    body: [
      'The lead product is the signature in-villa dinner, with the chef’s-table tasting as the halo and dinners-for-two as the romance SKU. Multi-day packages sit underneath for villa weeks.',
      'We serve hotel-zoned resort residences and estates — venues with stable long-term status. We do not market apartment-zoned condo corridors as luxury inventory.',
    ],
    fit: 'Couples to 15 for dinners; villa weeks; wedding-week events nearby. Peak: December–March.',
    logistics: 'Base zone. December–March dates book early — enquire as soon as you have them.',
    quoteQuery: '/quote?island=maui&service=signature-dinner',
    faqs: [
      {
        q: 'Is this the same as a resort chef’s table?',
        a: 'No. Resort communal tables are a different product. Ours is private, in your villa, with a menu designed for your table.',
      },
      {
        q: 'How tight is December–March?',
        a: 'It is our peak on Maui. Early enquiries get the dates. We would rather say that now than apologise later.',
      },
    ],
  },
  {
    island: 'maui',
    slug: 'kaanapali',
    name: 'Kāʻanapali',
    area: 'West Maui resort residences',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-kaanapali.jpg',
    heroAlt: 'Friends share a sunset dinner on a Kāʻanapali villa deck while a chef plates nearby; west Maui light and a lava headland. Concept image, not a myCHEF event.',
    h1: 'West Maui, named honestly: Kāʻanapali.',
    lede:
      'Kāʻanapali is a base-zone resort-residence corridor. We market West Maui as Kāʻanapali, Nāpili and Kapalua — never as a Lahaina luxury-dining destination.',
    body: [
      'The product mix matches the rest of the resort corridor: signature dinners, wedding-week support, and multi-day chef days in residences with kitchens.',
      'That naming discipline is a policy, not a slogan. If a request is framed as Lahaina luxury dining, we re-route it to the actual corridor we serve, or we decline it.',
    ],
    fit: 'Villa dinners, family weeks, wedding-week satellite events.',
    logistics: 'Base zone. West Maui traffic is planned into arrival times, especially in peak season.',
    quoteQuery: '/quote?island=maui&service=signature-dinner',
    faqs: [
      {
        q: 'Do you serve Lahaina?',
        a: 'We do not market Lahaina as a luxury-dining destination. West Maui service is expressed as Kāʻanapali, Nāpili and Kapalua — hotel-zoned residences and estates.',
      },
      {
        q: 'Can a wedding week span Wailea and Kāʻanapali?',
        a: 'Yes, as separately zoned days with travel planned. We do not pretend it is one neighbourhood.',
      },
    ],
  },
  {
    island: 'maui',
    slug: 'kapalua',
    name: 'Kapalua',
    area: 'Northwest estates',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-kapalua.jpg',
    heroAlt: 'A couple at a twilight dinner-for-two in Kapalua, ironwoods and a rocky northwest Maui bay beyond. Concept image, not a myCHEF event.',
    h1: 'Kapalua tables, cooked in-house.',
    lede:
      'Kapalua is base-zone Maui at the northwest end of the resort belt: estates and residences where the chef’s table is the point of the evening, not an add-on to a restaurant reservation.',
    body: [
      'This corridor books dinners-for-two, family celebrations and wedding-week satellite dinners. Wine pairings and staffing add-ons are quoted as their own lines; alcohol is never buried in a menu price.',
      'December–March tightness applies here the same as Wailea. Peak wedding months (September, October, May) also move first.',
    ],
    fit: 'Romance dinners, 4–15 celebration tables, wedding-week support.',
    logistics: 'Base zone. Northwest drive time is included, not surcharged.',
    quoteQuery: '/quote?island=maui&service=dinner-for-two',
    faqs: [
      {
        q: 'Can you do a dinner-for-two here?',
        a: 'Yes — it is a fixed-price intimacy product, planning-orientation from $500+ on Maui, labeled BUSINESS DECISION REQUIRED until the rate card is approved.',
      },
      {
        q: 'Do you handle wine?',
        a: 'Pairing suggestions and service, yes. Alcohol itself is purchased by you or quoted separately.',
      },
    ],
  },
  {
    island: 'maui',
    slug: 'makena',
    name: 'Makena',
    area: 'South of Wailea',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-makena.jpg',
    heroAlt: 'A chef carries plated dishes to a lava-stone table in Makena, with Puʻu Ōlaʻi cinder cone behind. Concept image, not a myCHEF event.',
    h1: 'South of Wailea, still a base zone.',
    lede:
      'Makena sits just south of the Wailea resort-residence belt. Same base-zone rules, quieter inventory, same signature-dinner product.',
    body: [
      'If you are in Makena, you are not in a surcharge zone and you are not Upcountry. The chef day looks like Wailea: on-site early, cook, serve, leave the kitchen cleaner than we found it.',
      'Outdoor setups always have a wet-weather backup — covered lanai, revised timing, or an indoor reset — confirmed before the event day.',
    ],
    fit: 'Villa dinners and family weeks. Quieter than Wailea; same service standard.',
    logistics: 'Base zone. Weather backups are planned, not improvised.',
    quoteQuery: '/quote?island=maui&service=signature-dinner',
    faqs: [
      {
        q: 'Is Makena cheaper than Wailea?',
        a: 'The corridor is base-zone, so there is no travel surcharge. Menu tiers are the Maui rate card, not a discount geography.',
      },
      {
        q: 'Can you set an outdoor table?',
        a: 'Yes, with a published wet-weather backup. We confirm the backup with you before the day, not during the rain.',
      },
    ],
  },
  {
    island: 'maui',
    slug: 'upcountry',
    name: 'Upcountry',
    area: 'Elevation surcharge',
    zoneClass: 'surcharge',
    zoneCode: 'B',
    hero: '/photos/loc-upcountry.jpg',
    heroAlt: 'A chef cuts island vegetables in a misty Upcountry Maui kitchen, Haleakalā pasture and jacaranda beyond. Concept image, not a myCHEF event.',
    h1: 'Upcountry is a map, not a surprise fee.',
    lede:
      'Elevation and drive time make Upcountry a surcharge zone. The fee is labeled BUSINESS DECISION REQUIRED and it appears on the quote. Farm names appear on menus only after written verification — Hawaiʻi still imports most of its food.',
    body: [
      'Paia and Haiku are a further North Shore module: quote-only, rendered on the island homepage rather than as their own destination page. If that is where you are, say so on the form and we quote the drive with the menu.',
      'Sourcing honesty is the Upcountry story: island produce where it is genuinely better, named farms only with verification, no “everything is local” theatre.',
    ],
    fit: 'Estate dinners and retreat days that justify the drive. Not a hidden add-on to a Wailea quote.',
    logistics: 'Surcharge zone. Paia/Haiku (North Shore) is quote-only and quoted with the menu.',
    quoteQuery: '/quote?island=maui&service=signature-dinner',
    faqs: [
      {
        q: 'Do you name Upcountry farms on the menu?',
        a: 'Only after written verification. Until then the sourcing line stays general, with a PENDING — WRITTEN VERIFICATION label.',
      },
      {
        q: 'Is Paia its own page?',
        a: 'No. Paia/Haiku is an on-page North Shore zone module, quote-only. A standalone page would be a doorway we do not need.',
      },
    ],
  },

  /* ---------------- Kauaʻi (inquiry) ---------------- */
  {
    island: 'kauai',
    slug: 'north-shore',
    name: 'Princeville / Hanalei',
    area: 'North Shore estates',
    zoneClass: 'surcharge',
    zoneCode: 'B',
    hero: '/photos/loc-kauai-north.jpg',
    heroAlt: 'A chef plates fish on a rainy Princeville terrace above the Hanalei valley. Concept image for an inquiry-stage corridor, not a myCHEF event.',
    h1: 'North Shore estates — on the inquiry list.',
    lede:
      'Princeville and Hanalei are Kauaʻi’s signature villa and estate inventory. myCHEF is not booking here yet. Dated inquiries — with your shore named — are the evidence that sets the launch sequence.',
    body: [
      'Winter is surf season: demand and weather exposure both rise, and far-North events (Haʻena) carry a 72-hour notice plus a Hanalei-bridge weather clause. Road closures reschedule rather than forfeit.',
      'There is no LocalBusiness claim, no “now serving Kauaʻi,” and no booking button. A booking button is a promise of a staffed, insured island team.',
    ],
    fit: 'Estate weddings, retreat weeks, villa dinners — planned for launch. Inquiry only.',
    logistics: 'Surcharge zone at launch. Haʻena and the far North are quote-only with 72-hour notice.',
    quoteQuery: '/quote?island=kauai&shore=north',
    faqs: [
      {
        q: 'Can I book a date on the North Shore now?',
        a: 'Not yet. Join the inquiry list with your dates and shore. When a staffed team exists, dated inquiries move first.',
      },
      {
        q: 'What is the Hanalei-bridge clause?',
        a: 'Far-North weather and road closures reschedule rather than forfeit. We publish that before anyone puts a deposit down.',
      },
    ],
  },
  {
    island: 'kauai',
    slug: 'south-shore',
    name: 'Poʻipū / Kōloa',
    area: 'South Shore retreats',
    zoneClass: 'surcharge',
    zoneCode: 'B',
    hero: '/photos/loc-kauai-south.jpg',
    heroAlt: 'A chef prepares a whole fish and tropical fruit in a Poʻipū villa kitchen, kiawe and pale south-shore cliffs beyond. Concept image, not a myCHEF event.',
    h1: 'South Shore weeks, closer to the Līhuʻe base.',
    lede:
      'Poʻipū and Kōloa are sunnier, steadier, and closer to Līhuʻe than the North Shore. Arrival-night dinners and provisioning for week-long stays are the planned lead — still inquiry-framed until we launch.',
    body: [
      'Incumbent operators on Kauaʻi often publish a flat daily driving fee. We think zone pricing should be a map: Līhuʻe/Kapaʻa as base, both shores as surcharge, Haʻena quote-only. Our own zone fees remain BUSINESS DECISION REQUIRED.',
      'Concierge and villa-agency referrals are welcome through the partner intake on the quote form. Commission terms will be labeled at launch, never hidden.',
    ],
    fit: 'Retreat houses, arrival-night dinners, wedding-week events to about 75 guests — planned.',
    logistics: 'Surcharge zone at launch, closer to the Līhuʻe base than the North Shore. Year-round weather is the South Shore’s advantage.',
    quoteQuery: '/quote?island=kauai&shore=south',
    faqs: [
      {
        q: 'Is the South Shore cheaper than the North?',
        a: 'It is closer to the planned Līhuʻe base, which is why the zone map exists. Final shore fees are BUSINESS DECISION REQUIRED until launch.',
      },
      {
        q: 'Can our concierge send guests?',
        a: 'Yes — use the quote form with source=concierge. Referral terms are set at launch and labeled; they are not informal handshake rates.',
      },
    ],
  },

  /* ---------------- Hawaiʻi Island (inquiry) ---------------- */
  {
    island: 'bigisland',
    slug: 'kona',
    name: 'Kailua-Kona / Keauhou',
    area: 'West-side town corridor',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-kona.jpg',
    heroAlt: 'A chef sears fish in a Kona villa kitchen looking over dry lava coast and coffee slopes. Concept image for an inquiry-stage corridor, not a myCHEF event.',
    h1: 'Kona first — when the west-side team exists.',
    lede:
      'Kailua-Kona and Keauhou sit at the south end of the planned base corridor. Hawaiʻi Island (the Big Island) is inquiry-stage: tell us your dates. There is no booking button, and no local-entity claim.',
    body: [
      'The island is 4,000 square miles. We will not pretend to cover all of it. Launch concentrates on the Kona–Kohala corridor — seven luxury resort communities within about 30 minutes of each other.',
      'Coffee origin labeling (Act 198, from 1 July 2027) will apply to how menus name Kona and Kaʻū coffee. Producer names publish only with written verification.',
    ],
    fit: 'Villa dinners and multi-day stays in the west-side town and resort belt — planned.',
    logistics: 'Planned base zone. Event weeks (including Ironman) compress availability — flag dates early.',
    quoteQuery: '/quote?island=bigisland',
    faqs: [
      {
        q: 'Can you cover Hilo from Kona in one day?',
        a: 'No. Hilo/Volcano is 2.5–3 hours from the west side and is quote-only at launch, with dedicated staffing. A same-day Kona–Hilo round trip is a logistics fantasy.',
      },
      {
        q: 'When do you launch?',
        a: 'When the inquiry list and hiring say so. We publish launch news when there is a staffed, insured team behind it.',
      },
    ],
  },
  {
    island: 'bigisland',
    slug: 'kohala',
    name: 'Kohala Coast',
    area: 'Resort communities',
    zoneClass: 'base',
    zoneCode: 'A',
    hero: '/photos/loc-kohala.jpg',
    heroAlt: 'Guests dine at a Kohala lava-stone table while a chef works the pass; Mauna Kea inland, white sand and ocean beside. Concept image, not a myCHEF event.',
    h1: 'The Kohala corridor is the whole opening move.',
    lede:
      'Seven resort communities, one 30-minute service radius, the island’s highest villa ADRs. If myCHEF launches on Hawaiʻi Island, it launches here — and your dated inquiry is the evidence.',
    body: [
      'Waimea/Hāmākua is a surcharge at launch; Kaʻū/South an extended surcharge; Hilo/Volcano quote-only. The zone map is published before we take a deposit, not after.',
      'Sourcing is this island’s honest differentiator — kanpachi, ranch beef, Hāmākua mushrooms, two coffee origins — with every producer name gated on written verification. We do not print a farm we have not confirmed.',
    ],
    fit: 'Kohala villa dinners, sourcing-led tastings, estate wedding weeks — all planned, all inquiry.',
    logistics: 'Planned base zone. East side is never squeezed into a west-side day.',
    quoteQuery: '/quote?island=bigisland',
    faqs: [
      {
        q: 'Is this the Big Island or Hawaiʻi Island?',
        a: 'Both names are on the page. “Hawaiʻi Island” is the geographic name; “Big Island” is the search language. The hostname follows the family rule: bigisland.{root}.',
      },
      {
        q: 'Do you have a Google Business Profile here?',
        a: 'No. Inquiry-stage islands do not publish local-entity claims. GBP and LocalBusiness markup wait until a staffed west-side unit exists.',
      },
    ],
  },
];

export function locationsFor(island: IslandId): LocationRecord[] {
  return locations.filter((l) => l.island === island);
}

export function getLocation(island: IslandId, slug: string): LocationRecord | undefined {
  return locations.find((l) => l.island === island && l.slug === slug);
}
