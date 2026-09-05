import type { CopyFaq, CopySection } from '@/components/Longform';
import type { IslandId } from '@/data/islands';

export const islandHomeLongform: Record<IslandId, { sections: CopySection[]; faqs: CopyFaq[] }> = {
  oahu: {
    sections: [
      {
        h2: 'Private chef Honolulu',
        paras: [
          'Private chef Honolulu is a cook in a residence that actually has a kitchen — a Gold Coast apartment, a townhouse dining room, a tower with a cooktop — not a restaurant table moved three blocks. We design the menu for that galley, buy at the Honolulu fish markets the morning of service, cook on your range, pace the table, and pack out so the dishwasher is empty. The guest list is yours. The night ends when you say it ends.',
          'Signature dinners on this island sit at $125–$190 a guest. That band holds menu design, same-day shopping, cooking, table service, and cleanup. Date Night for two starts from $450 as a fixed evening. Small parties under six are often quoted as a night, not a per-head stack. Twenty percent service and Hawaiʻi GET up to 4.712% print as their own lines on the written total. A 50% deposit locks the date. A tip is never required on an Oʻahu quote.',
          'You book myCHEF Hawaii, not a swipeable roster of named cooks. We crew the night to the house: six at a Honolulu table is not sixty on a lawn. Staffed rooms of about ten to seventy-five live on /catering. Wedding-week formats — welcome dinner, rehearsal, reception, recovery brunch — live on /weddings. Line-by-line numbers live on /pricing. Start on /quote with the island set to Oʻahu.',
        ],
      },
      {
        h2: 'Personal chef Oahu',
        paras: [
          'Personal chef Oahu is the standing household rhythm, not a one-night halo. Residents book a weekly cook day: groceries billed at cost with receipts, kids’ plates designed in, leftovers labeled. The kamaʻāina line starts from $300 a week plus those groceries. Frequency is the product. Visitors still book a first-night dinner; the weekly line is for people who already live here.',
          'Tell us the property type on /quote. Freight elevators, loading docks, quiet hours, and building COIs are arranged before anyone shops — not discovered in a driveway on Kalākaua. Compact Kakaʻako and downtown galleys get bring-equipment menus. A Waikīkī suite with only a coffee maker is declined; we will not pretend that is a pass. Hawaiʻi Kai and Diamond Head households sit in the same town timing as Kahala. North Shore and Turtle Bay are a published drive surcharge, 60–90+ minutes from town, and we do not stack a town dinner on the same calendar.',
        ],
      },
      {
        h2: 'Waikīkī',
        paras: [
          'Most Waikīkī hotel rooms cannot host a chef. We cook in resort residences and apartments that have a functioning cooktop, a fridge, and a table that fits the list. If the listing is a standard suite with a minibar, we decline before a deposit. That honesty is the product: a celebration dinner in a residence, not a hallway cart and a fire alarm.',
          'High-rise load-in is the constraint, not distance. We schedule freight windows with the building, carry COI paperwork, and design a menu that fits a galley. CORE still starts at $125 a guest. Stay Chef — a chef day from $850, groceries at cost — makes more sense than stacking single dinners across a long stay. Waikīkī residences with kitchens live on /waikiki. Honolulu and Kahala are their own corridor URLs. This home still owns private chef Oahu.',
        ],
      },
      {
        h2: 'Kahala',
        paras: [
          'Kahala and the Gold Coast are Honolulu’s household-entertaining belt. Real dining rooms. Estate tables of four to fifteen. Celebration nights and the weekly personal-chef line overlap here more than anywhere else on the island. We time arrival before the evening corridor rush — on site about three hours before first course — so the kitchen is ours before traffic locks the Pali and the H-1. Service at 20% and GET to 4.712% still print separately here, same as every Oʻahu quote.',
          'The food band does not change because the zip code is prettier. Signature $125–$190 a guest. Weekly from $300 plus groceries at cost. If the list grows past a household dinner, /catering is the staffed-room door and /weddings holds the week stack. Ask on /quote; we reply in Hawaii business hours. No account. No payment to enquire.',
        ],
      },
      {
        h2: 'Ko Olina',
        paras: [
          'Ko Olina holds Oʻahu’s deepest legal short-stay villa pool. West-side provisioning is its own run: we shop for the week rather than making town round-trips. Villa kitchens here are usually designed for cooking, which is why a multi-day package leads and a one-off drop-in is the exception. Arrival-night dinner plus a stocked fridge is the usual opening move.',
          'Stay Chef from $850 a day is the honest product for a three-to-seven-day villa week. Extra meals on the same day are quoted, not assumed. ʻEwa and Kapolei households sit closer to this west-side shop than to Waikīkī; there is no town surcharge for that corridor. One-night dinners still book when the kitchen works. Landing-night service plus groceries already in the fridge is how most Ko Olina weeks open. See /pricing for the day-rate line and /quote to put dates on a written total.',
        ],
      },
      {
        h2: 'Kailua',
        paras: [
          'Kailua and Lanikai run in weeks, not weekends. Windward estate inventory sits under a thirty-day rental reality; a two-night tourist drop-in is the wrong product. Stay Chef and a Family Feast inside a longer stay are what we actually cook. Galley kitchens are common. Bring-equipment menus are normal. Base zone from town — the drive is planned into the chef day, not added after.',
          'If you are in a genuine stay with a cooktop, we book it. If the house cannot host a chef, we say so before money moves. Wedding-week satellite dinners on the windward side sit on /weddings. Larger guest lists sit on /catering. The confirmed number is always the written quote from /quote — never a chat estimate. Tips stay optional; we do not bury them in the food band.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a private chef in Honolulu?',
        a: 'Signature $125–$190 a guest. Date Night from $450. Stay Chef from $850 a day. Weekly personal-chef service from $300 plus groceries at cost. On Oʻahu the add-ons are 20% service and GET to 4.712%, each as its own line. See /pricing.',
      },
      {
        q: 'Personal chef or a one-night dinner?',
        a: 'A one-night dinner is private chef Honolulu. A standing weekly cook day is personal chef Oahu. Same team, different rhythm. Tell us which on /quote.',
      },
      {
        q: 'Our Waikīkī kitchen is a galley — does that work?',
        a: 'A Waikīkī galley works when the cooktop is real. We design bring-equipment menus and handle freight elevators and building COIs before the night. Standard hotel rooms without kitchens are declined.',
      },
      {
        q: 'Is North Shore travel extra?',
        a: 'Turtle Bay and the North Shore are a published surcharge for the 60–90+ minute drive. It appears on the quote as its own line. We do not stack a town dinner on the same day.',
      },
      {
        q: 'Do you invent guest reviews?',
        a: 'No. Hawaiʻi reviews publish after verified events. Until then the proof is published prices, a sample menu, cleanup, and a written quote.',
      },
      {
        q: 'How do I start?',
        a: 'Five fields on /quote — island, dates, headcount, service, how to reach you — or WhatsApp. Coordinators answer in Hawaii Standard Time on working days. No account. Enquiry is free.',
      },
    ],
  },
  maui: {
    sections: [
      {
        h2: 'Wailea',
        paras: [
          'Wailea is Maui’s signature resort-residence corridor: hotel-zoned villas with kitchens, December-through-March tightness, and the dinner we built the island around. This is not a communal resort chef’s table that seats you with strangers. It is your villa, your guest list, a menu designed that week. We shop South Maui the day of service. You pick the catch; the plate follows the boat.',
          'Signature dinners run $150–$250 a guest. Inside that Maui band: a menu written for the villa, a same-day shop, cooking on your range, paced service, and a kitchen we leave empty. Date Night for two starts from $500+. Stay Chef — a chef day from $1,050, groceries billed at cost with receipts — is the villa-week product. Peak months move first. Ask early on /quote.',
          'If the room grows past a household table, the staffed-event door is /catering. Wedding-week formats — welcome through recovery brunch as separate lines — live on /weddings. The tariff itself is on /pricing. Neighborhood names stay in the body and on the quote. They are not destination URLs.',
        ],
      },
      {
        h2: 'Kāʻanapali',
        paras: [
          'Kāʻanapali, Nāpili, and the West Maui residential strip are base zone. Traffic through the west side is planned into arrival, not discovered on an invoice. We cook in hotel-zoned residences with kitchens. We do not market a luxury-dining destination the town next door is not. People search Lahaina; we answer with the kitchens we actually enter.',
          'The Maui food band does not change because you are on the west side instead of the south. $150–$250 a guest. Family Feast for six to eight is the usual order: shared plates, kids’ plates on request, one team. Condo kitchens are common between Kāʻanapali and Kapalua; constraints are stated on the quote before anyone shops. Honokōwai multi-day chef days often beat a single halo night.',
        ],
      },
      {
        h2: 'Kapalua',
        paras: [
          'Kapalua is the northwest estate belt: dinners for two, family celebrations, wedding-week satellite nights. The northwest drive is included in the base zone. Romance tables and welcome dinners sit in the same kitchen standard as Wailea — different wind, same cleanup. Outdoor setups always carry a covered backup in writing before a deposit.',
          'Date Night from $500+ is a fixed evening, not a per-guest stack that punishes two people. Larger celebrations still use the $150–$250 signature band. Florals and photography are yours. The bar is a first-class add-on, not a hospitality fold-in — stack it on the same written total from /quote. See /weddings if the week is the product.',
        ],
      },
      {
        h2: 'Makena',
        paras: [
          'Makena sits just south of the Wailea resort-residence belt. Same base-zone rules. Quieter inventory. Same $150–$250 starting band. If you are in Makena you are not in a surcharge zone and you are not Upcountry. The chef day looks like a South Maui day: on site early, cook, serve, leave the kitchen cleaner than we found it.',
          'Kīhei is the service-led neighbor — condos and vacation homes with kitchens, Family Feast more often than a tasting halo. It is not a clone of a Wailea night. Kitchen limits are written on the quote. Upcountry (Makawao, Kula, Haleakalā) carries a published elevation-and-drive surcharge. Pāʻia and Haʻikū are quote-only; we will not stack those drives onto a South Maui dinner.',
        ],
      },
      {
        h2: 'Private chef Maui cost',
        paras: [
          'Private chef Maui cost is a published band, then a written quote. Signature $150–$250 a guest. Stay Chef from $1,050 a day. Groceries ride inside the dinner band on a signature night; on Stay Chef days they are billed at cost with receipts. Alcohol is BYO or quoted. Rentals and venue fees are add-ons when you want them.',
          'What is added once, as its own lines: 20% service, Hawaiʻi GET up to 4.712%, and a 50% deposit to hold the date. Wine and spirits are either yours or a separate quote — never folded into the catch. Travel beyond Wailea, Kāʻanapali, Kapalua, and Makena is a published zone line — Upcountry from $75, North Shore quoted with the menu. There is no mystery hospitality fee. Read the card on /pricing, then send dates on /quote.',
        ],
      },
      {
        h2: 'Sushi-forward menus',
        paras: [
          'A sushi-forward night — nigiri, sashimi, hand rolls — is a menu direction we can arrange in a villa kitchen. It is not a separate brand and we do not sell a named sushi personality. You ask on WhatsApp or /quote; we design to the fish that morning and the counter you actually have. Severe allergies are discussed before confirmation, never swapped at the pass.',
          'Vegan, gluten-free, dairy-free, nut-aware, pescatarian, and kids’ plates are routine on any Maui menu, sushi-forward or not. Chefs are assigned to the booking. If you have a staffing preference, say so — we match when the calendar allows. We do not publish cook names or bios. You book the house, not a marketplace.',
        ],
      },
      {
        h2: 'Villa and vacation rental kitchens',
        paras: [
          'Most Maui bookings are a villa or a vacation rental: resort residence, Airbnb, VRBO, estate week. The test is the kitchen. If the house has heat, cold storage, and seats for the list, we cook. A hotel room without those — we will not. Tell us the property type before you put money down.',
          'Stay Chef is the multi-day version of that test: one team, groceries at cost, second and third meals priced on that same calendar day. First night at the table plus a fridge we filled before you landed is how most Wailea weeks start. Full-board days exist for houses that actually cook three times. Staffed receptions sit on /catering. The week of a wedding sits on /weddings. Enquire on /quote.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What do I actually pay for a Maui villa chef?',
        a: 'The Maui signature band is $150–$250 a guest. Date Night from $500+. Stay Chef from $1,050 a day. Service 20% and GET to 4.712% print separately. Upcountry is a published surcharge. See /pricing.',
      },
      {
        q: 'Do you cook in a vacation rental?',
        a: 'Maui vacation rentals are a yes when the kitchen works. Hotel rooms without a cooktop are declined. Put the property type on /quote.',
      },
      {
        q: 'Can you do a sushi-forward menu?',
        a: 'Yes — nigiri, sashimi, hand rolls as a direction, cooked in the villa. Not a separate brand. Ask on WhatsApp.',
      },
      {
        q: 'Wailea versus West Maui — does the food price change?',
        a: 'No. Wailea, Kāʻanapali, Kapalua, and Makena share the Maui signature band. Drive time inside those corridors is included. Upcountry and Pāʻia are the exceptions.',
      },
      {
        q: 'Maui private chefs — is that a roster?',
        a: 'Related search, not a marketplace. You book myCHEF Hawaii. We staff the house. Named-chef swipes and “elite Maui chef” impersonations live on /what-we-dont-do.',
      },
      {
        q: 'Can I pick a cook by name or gender?',
        a: 'Staff are assigned to the booking. A preference is noted and matched when the calendar allows. We do not sell names or a gender marketplace.',
      },
      {
        q: 'How do I book Maui?',
        a: 'Open /quote with Maui selected, or WhatsApp. Five fields. A coordinator in Hawaii Standard Time writes back on a working day. You do not pay to ask.',
      },
    ],
  },
  kauai: {
    sections: [
      {
        h2: 'A private chef on Kauaʻi',
        paras: [
          'Kauaʻi is a two-shore island with one kitchen standard, inquiry stage. Tell us which shore and which dates. Signature dinners sit at $150–$250 a guest — a Maui-class band earned by a thinner supplier bench and a longer shop, not by a waitlist story. Date Night is a fixed evening at $650–$950. Stay Chef starts from $1,100 a day with groceries at cost and receipts. Tips are yours to give or not; they never hide inside the per-guest number.',
          'The booking is myCHEF Hawaii, not a named cook you swipe. We assign the crew to the house. Eight at a Princeville table is not seventy on a Poʻipū lawn. Staffed rooms live on /catering. Estate wedding formats — welcome, rehearsal, reception, recovery brunch as separate lines — start from $175 a guest plus staffing on /weddings. The card is on /pricing. The written total comes from /quote.',
          'Līhuʻe and Kapaʻa are the included base. Princeville, Hanalei, and Poʻipū carry a published zone line so the drive is a map, not a surprise on the fish. Far-North Hāʻena needs 72-hour notice and a weather-and-road clause. Closures reschedule rather than forfeit. That clause is on the quote before any deposit. Anahola and Kalāheo sit between those belts and are quoted with the menu, not treated as a third hero shore.',
        ],
      },
      {
        h2: 'North Shore weather is on the quote',
        paras: [
          'Princeville holds the North Shore estate inventory. Winter surf season books early. We plan a covered lānai backup on every outdoor table because mist is not a vibe, it is a Tuesday. The food band stays $150–$250 a guest; the zone line is the drive, printed separately. We will not pretend the Hanalei bridge never closes.',
          'Hanalei is the valley search. The bridge is real. Estate dinners and wedding-week satellite nights inherit the same weather clause as Hāʻena when the guest list sits past the river. Seventy-two hours of notice for the far North. If the road closes, we move the night — we do not keep a deposit as punishment for weather. Ask on /quote with the exact house.',
        ],
      },
      {
        h2: 'South Shore arrival nights',
        paras: [
          'Poʻipū and Kōloa are the sunnier, steadier shore — closer to Līhuʻe staging, shorter drive, still a published zone line. Arrival-night dinner is the usual first booking: you land, the fridge is not empty, someone else is at the range. Retreat weeks and small estate celebrations sit in the same kitchen. Wood-grilled catch when the house has fire; a covered plan when it does not.',
          'Kalāheo, Hanapēpē, Waimea, and the west side are further still. Those tables are quoted with advance notice. East-side Kapaʻa is closer to base and still a real booking — Family Feast and household nights, not the hero villa product. The menu band does not discount because the drive is shorter. See /pricing.',
        ],
      },
      {
        h2: 'What a Kauaʻi dinner costs',
        paras: [
          'Signature $150–$250 a guest. Groceries ride inside that band on a dinner night. Stay Chef days bill groceries at cost. Service is 20%. GET prints up to 4.712%. Deposit is 50% to hold the date. A tip is never required and never silent. Princeville and Poʻipū zone lines start in a $50–$75 published range; far-North is quote-only. We would rather send a written total than a charming range in a chat window.',
          'Island food is honestly more expensive here: the supplier bench is thin and substitution lists exist for a reason. Menus lock early. Producer names appear only when we have them in writing — no invented farms on a Kauaʻi plate. We do not laminate a fake carte. Your written menu is designed for that house and that list the week of service. Start on /quote.',
        ],
      },
      {
        h2: 'Stay Chef when the week is the product',
        paras: [
          'A single dinner is a fine first night. A week in a Princeville estate or a Poʻipū retreat house usually wants Stay Chef: one team, day rate from $1,100, groceries at cost, breakfast or lunch added as its own line that day. Full-board exists for houses that actually cook three times. Dietary needs are designed in — vegan, gluten-free, nut-aware, kids’ plates — not promised as theatre at the pass. Hanalei weeks inherit the bridge clause on every extra meal, not only the welcome night.',
          'Hotel rooms without a cooktop are declined or redesigned. Vacation rentals with a real kitchen are the default. Tell us the property type. We will not force a chef into a suite that cannot host one. Multi-day retreat catering and staffed guest lists sit next door on /catering. The week of vows sits on /weddings.',
        ],
      },
      {
        h2: 'How a Kauaʻi week is crewed',
        paras: [
          'One culinary conversation for the stay. You do not hire four vendors and hope they share a pass. Dinner, a staffed buffet or plated room, a welcome night, a recovery brunch — separate lines on one quote so you can cut a brunch without renegotiating a mystery package. On Kauaʻi, service staff is $55 hourly and a sous is $75, each with a four-hour floor, printed as its own row.',
          'We do not publish cook names, an island street office, or a founding story. Contact is /quote and WhatsApp. A Hawaii-hours desk answers on working days — usually within one business day. Reviews on this island publish after verified events; we will not invent them to look established. Proof today is the published band, a sample estate menu, cleanup, and the written total.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What does a Kauaʻi chef night start at?',
        a: 'The Kauaʻi signature band is $150–$250 a guest. Date Night $650–$950. Stay Chef from $1,100 a day. Wedding formats from $175 a guest plus staffing. Service 20% and GET to 4.712% after the food. See /pricing.',
      },
      {
        q: 'Princeville or Poʻipū — is the food band different?',
        a: 'No. The Kauaʻi signature band is the same. Drive time is a published zone line. Far-North Hāʻena is quote-only with 72-hour notice.',
      },
      {
        q: 'What happens if the Hanalei bridge closes?',
        a: 'We reschedule rather than forfeit. That weather-and-road clause is on the quote before a deposit. Hanalei and Hāʻena inherit it.',
      },
      {
        q: 'Do you actually book Kauaʻi?',
        a: 'Kauaʻi is inquiry-stage. Join the inquiry list with the shore and the dates on /quote or WhatsApp.',
      },
      {
        q: 'Vacation rental kitchens?',
        a: 'Kauaʻi rentals are a yes when the range works. Hotel rooms without kitchens are declined. Property type belongs on the first message.',
      },
      {
        q: 'Where do staffed events and weddings live?',
        a: 'Staffed rooms on /catering. Estate wedding weeks on /weddings. Same team, separate lines, written quote.',
      },
    ],
  },
  bigisland: {
    sections: [
      {
        h2: 'Private chef Kona',
        paras: [
          'Private chef Kona is the west-side door on Hawaiʻi Island. Kailua-Kona, Keauhou, Hōlualoa mauka of town — one corridor, not a separate site. Kona is named on this home; it is not a path of its own. We cook in villas and resort residences that have a real kitchen. We shop Kona-side the day of service. Named coffee on a crust is coffee; origin is labeled when the plate requires it. Ranch or farm credits appear only after we hold written verification — no invented Big Island producers.',
          'CORE dinners are $150–$225 a guest. ENTRY starts from $110. Date Night from $550 as a fixed evening. Stay Chef from $950 a day, groceries at cost with receipts. West-side quotes add 20% service and GET (capped at 4.712%) after the food, never inside it. A 50% deposit holds the date. The confirmed total is the written quote from /quote — west-side first, always.',
          'The booking is myCHEF Hawaii. We staff to the house. A kanpachi crudo and a coffee-rubbed catch for six at a Kona villa is not a Kohala reception. Staffed west-side rooms live on /catering. Wedding-week formats from $150 a guest plus staffing live on /weddings. The island card is on /pricing. Keauhou sits on the same west-side shop as town; we do not treat it as a second island.',
        ],
      },
      {
        h2: 'Kohala Coast and Waikoloa',
        paras: [
          'The Kohala Coast is the opening move: Waikoloa, Mauna Lani, the Mauna Kea resort belt, Puakō between them — seven resort communities inside a roughly thirty-minute west-side radius. Highest villa rates on the island. Same team as Kona town. Same CORE band. Stay Chef for the villa week. We will not pretend this radius covers the east side in an afternoon. A Waikoloa Saturday and a Hilo lunch are two different crew days, always.',
          'Sourcing-led plates. Producer names only after written verification. Hāmākua mushrooms when we have them in writing; otherwise the plate still sings without a fake farm story. Outdoor tables on lava get a wet-weather plan before anyone deposits. The hostname is the Big Island site. Searchers say Big Island and Kona; the geography is Hawaiʻi Island. The chef is the same.',
        ],
      },
      {
        h2: 'Hilo is a different day',
        paras: [
          'Hilo and Volcano are quote-only. East side is two-and-a-half to three hours from Kona. A same-day Kona–Hilo round trip is a logistics fantasy. We publish that instead of discovering it on your event night. East-side work gets dedicated staffing and its own team day — never squeezed into a west-side dinner.',
          'Waimea / Kamuela is ranch country above the resorts: cooler elevation, a published surcharge, estate and ranch tables. Kaʻū and the south are an extended surcharge with advance notice. Honokaʻa and the Hāmākua coast are the same honesty. West-side villas are the default. If you are in Hilo, say so on /quote and we price a dedicated day.',
        ],
      },
      {
        h2: 'Ironman week',
        paras: [
          'Ironman week compresses the Kona calendar. Roads close. Rooms vanish. Crew days fill. We take those dates with compressed availability — flag them early on WhatsApp or /quote, not the week of the swim. Other event weeks on the west side behave the same way. One crew holds one heavy week at a time. Waterfront race-route timing is part of the written plan, not a surprise at load-in.',
          'First-night dinners still book around the race if the kitchen works and the drive is possible. Stay Chef weeks that overlap the course need a written road plan. We will not promise a Hilo lunch and a Waikoloa dinner on the same Ironman Saturday. Honesty is the inventory. If your villa sits inside a closure zone, say so in the first message so we price a realistic call time.',
        ],
      },
      {
        h2: 'West-side prices, published',
        paras: [
          'ENTRY from $110 a guest is the open door. CORE $150–$225 is the usual villa night. PREMIUM sits above when the menu asks for it. Stay Chef from $950. Travel outside the Kona–Kohala corridor starts from a published $75 zone line; east side is never that line — east side is its own quote. Groceries are inside a signature dinner and at cost on multi-day days. Wine is yours to bring or a bartender line we write separately.',
          'West-side staffed rooms price servers at $55 hourly and a sous at $75, each with a four-hour floor, never folded into the catch. A tip is optional and said so on the quote. There is no 808 number, no street office, no founding year, and no invented guest review on this island. Proof is the band, a sample Kona–Kohala menu, cleanup, and the written total on /pricing and /quote.',
        ],
      },
      {
        h2: 'How we quote Hawaiʻi Island',
        paras: [
          'Island, dates, headcount, service, property type. Five fields. A Hawaiʻi Island coordinator answers on working days, usually within one business day. We ask west-side or east-side in the first thread because that answer changes the crew, not just the drive. Allergies and a bartender belong there too. 50% locks the date once you accept the written total. Waikoloa, Mauna Lani, and town addresses all count as west-side for that first question.',
          'Vacation-rental kitchens on the Kohala Coast and in Kona town are the default yes — when they actually cook. A resort room with no range is declined on this island the same as anywhere we work. Neighborhood names — Kona, Waikoloa, Kohala, Waimea — belong in the quote, not as their own paths. Start on /quote. Stack a staffed room on /catering or a week of vows on /weddings when the list grows.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a private chef in Kona?',
        a: 'CORE $150–$225 a guest. ENTRY from $110. Date Night from $550. Stay Chef from $950 a day. On Kona quotes, 20% service and GET to 4.712% print after the food. See /pricing.',
      },
      {
        q: 'Is there a separate Kona site?',
        a: 'No. Private chef Kona lives on this Hawaiʻi Island home. We do not spin Kona out as its own path. Put the west-side address on /quote.',
      },
      {
        q: 'Can you cover Hilo from Kona in one day?',
        a: 'No. East side is 2.5–3 hours. Dedicated staffing, quoted as its own day. West-side villas are the default.',
      },
      {
        q: 'Do you take Ironman week?',
        a: 'Yes, with compressed availability. Flag those dates early. We will not stack east-side and west-side work on the same race day.',
      },
      {
        q: 'Big Island or Hawaiʻi Island?',
        a: 'Both names. Related search “private chef big island hawaii” is this host — not a second path. Searchers also say Kona. The geography is Hawaiʻi Island. The chef team is the same.',
      },
      {
        q: 'Airbnb on the Kohala Coast?',
        a: 'Yes, when the kitchen works. We shop west-side the day of service and leave it clean. Hotel rooms without cooktops are declined.',
      },
    ],
  },
};
