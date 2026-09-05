import type { CopyFaq, CopySection } from '@/components/Longform';
import type { IslandId } from '@/data/islands';

const oahuSections: CopySection[] = [
  {
    h2: 'Oahu catering',
    paras: [
      'Oahu catering, here, is a staffed villa or residence — not a hotel banquet, not a convention hold, not a tray left on a counter. Honolulu high-rises with a real cooktop, Kahala dining rooms, Kailua estate weeks, and Ko Olina short-stay villas. We shop the same day, cook in the kitchen you actually have, serve the list, and leave the place clean. The guest list is yours. The night ends when you say it ends.',
      'The lists we staff run about ten to seventy-five. A table of six is usually a private-chef dinner on / — one cook, one conversation, no reception crew. A room of forty is a different product: a pass, a sous, a floor. We will not pretend those are the same booking. Larger rooms exist as written exceptions. They are never implied as standard.',
      'Food sits in a published band of $125–$190 a guest. That band covers menu design, same-day shopping, cooking, table service, and cleanup. Staffing is not inside it. A server is $55 an hour. A sous is $75. Minimums are four to five hours, printed as their own line. Service at 20% and Hawaiʻi GET up to 4.712% sit on their own lines too. The 50% deposit locks the date once you accept the written total.',
      'You book myCHEF Hawaii, not a swipeable roster of bios. We assign the brigade to the size of the house. We do not publish chef names, a storefront, or a local phone. Contact is the form on /quote and WhatsApp. Typical reply in Hawaii business hours. Hawaiʻi guest reviews do not exist yet; they go up after nights we can verify. Until then the proof is the published band, a sample menu, and a number you can read before you pay. A weekly kamaʻāina household line — groceries at cost, a standing cook day — is a different door on / if that is the actual need.',
    ],
  },
  {
    h2: 'Honolulu to Ko Olina',
    paras: [
      'Coverage on this island runs Honolulu to Ko Olina. That is a corridor, not a mood. Base zone includes Waikīkī residences that actually have kitchens, the Gold Coast and Kahala, Diamond Head dining rooms, Kakaʻako towers, downtown pied-à-terres, Kailua and Lanikai 30-day estates, and the west-side legal short-stay pool at Ko Olina. Hawaiʻi Kai and ʻEwa / Kapolei sit base-adjacent. North Shore and Turtle Bay are a published surcharge — sixty to ninety-plus minutes from town — named on the quote, never discovered on the invoice. Kāneʻohe is quieter than Kailua and still a published drive from town. We will not flatten those places into one Honolulu blob.',
      'A hotel suite without a cooktop is declined. We will not treat a coffee maker as a pass. Tower and condo buildings run on freight elevators, quiet-hour windows, and certificates of insurance. Those are booked with management before the night, not negotiated in a driveway at three in the afternoon. Parking and loading are often the constraint in town, not distance.',
      'Kailua and Lanikai are a 30-day-estate market. They fit multi-day packages and family weeks better than a one-night tourist drop-in. Ko Olina provisions from the west side; lemons do not make a town round-trip. Windward houses get the crew on-site before the evening Pali crush. We schedule around the corridor and aim to be in the kitchen about three hours before service.',
      'If the house cannot hold the list, we say so before a deposit. A Waikīkī two-bedroom that seats six is a chef dinner, not a forty-guest reception. Tell us the property type on /quote. The form exists so we can decline a kitchen that cannot host us, rather than invent a workaround after you have paid.',
    ],
  },
  {
    h2: 'How an Oahu kitchen feeds a list',
    paras: [
      'Most Honolulu residences do not have a restaurant pass. Buffet on this island is the honest answer to that fact. Stations live on the island, along a dining table that only seats eight, or on a lānai rail that can take the heat. Guests walk the line. The crew keeps pans hot and the floor moving. Quiet hours still apply in a tower. This is how a twenty-to-fifty list eats in a high-rise without pretending the galley is a hotel kitchen. It starts to make sense around twenty guests. Below that, a stationed line is usually more theatre than need.',
      'Plated service on Oahu belongs to houses that already have a table and a pass. Courses leave the kitchen paced, the way a dining room expects. Kahala and Gold Coast estates can hold that arc. A Kakaʻako one-bedroom cannot. Plated needs more hands on the floor for the same headcount, which is why the staffing line grows and the food band does not. We will not sell a coursed night into a room that cannot sit it.',
      'Family-style is the long-table middle when a Kahala dining room already seats the inner circle — usually a dozen, sometimes eighteen — and nobody wants a stationed line in a house that has a real table. Shared platters. One conversation. Cocktail hour in a tower is boards on the island and passed bites down a short hall: grazing $750–$950 as a labeled market reference, pūpū $5–$7 a piece with twenty-piece minimums. A live-fire station on a Ko Olina lānai is cooking in front of the room, not a photograph we stage.',
      'Pick the format after you pick the house. The food number stays inside $125–$190. The crew changes. That is the decision, and it is written before anyone shops.',
    ],
  },
  {
    h2: 'Wedding weekends, not a ballroom',
    paras: [
      'A wedding on Oahu is often a weekend stack rather than a seven-day hold: welcome dinner Friday, a smaller rehearsal table Saturday, reception that night, recovery brunch Sunday. Kahala, Ko Olina, and windward estates are the rooms we staff for this — about ten to seventy-five at the reception. Two people who want a fixed-price elopement dinner are a different product, not a miniature banquet.',
      'Reception food follows the same $125–$190 band, plus the hourly crew. Florals, photography, and the officiant are yours. Drinks are BYO or the mobile bar as its own line. We do not bury a bartender inside a hospitality fee. A wet-weather plan is written before the deposit: indoor backup, covered lānai, or the reschedule posture published on /legal. We do not invent venue exclusivity we do not have.',
      'One crew holds one wedding weekend at a time. December through March presses the calendar. Ask as soon as the date is real. The full culinary week — and the island wedding page — live on /weddings.',
    ],
  },
  {
    h2: 'Retreats, crews, and rooms we decline',
    paras: [
      'A retreat week is a culinary program, not a pile of one-off plates. Breakfast through dinner can hold to a dietary framework you set on day one. Groceries for those multi-day books are billed at cost with receipts. Day four should still taste like someone thought about it. The private-chef Stay Chef day rate on / is the smaller version of the same idea — a villa week with a kitchen that actually runs.',
      'Film and photo crews book early call times and hot meals that still land when the call sheet slips. Board dinners and staff meals get itemised invoicing a finance team can read. We handle COIs and freight windows for tower and resort residences as ordinary logistics, not as a surprise add-on. January around the Sony Open week presses corporate hospitality — named as calendar awareness, not an affiliation. December holidays are the hardest dates on this island. Ask early; we confirm holds in writing.',
      'We cook in residences and estate kitchens. Hotel banquet rooms and citywide convention holds are a different industry. We will not claim Honolulu convention work we do not do. If the house has a cooktop and a table that fits the list, we design to that. If it does not, the reply on /quote is a decline, not a charm offensive.',
    ],
  },
  {
    h2: 'What the written total includes',
    paras: [
      'The $125–$190 food band is a published start. Menu, date, kitchen, and headcount move the number inside it. Staffing, the 20% service charge, Hawaiʻi GET up to 4.712%, and any Turtle Bay zone line are added once, in the open. Tip is yours if you want it; it is not a required fourth fee. There is no silent hospitality fold-in. The line-by-line card for this island lives on /pricing.',
      'Five fields start the work: island, dates, headcount, service, how to reach you. Property type and allergies belong in the first thread, not as a surprise at the pass. We reply in Hawaii business hours with a menu direction and a crew list. No account. Enquiry costs nothing. 50% locks the date after you accept the written total.',
      'Hawaii is launching. We do not invent local awards, founding years, or guest names. Verified-event reviews will appear when they exist. Until then, read the band, read the sample menu, and send the date. A first-night chef dinner for the same house — if the list is a household, not a reception — starts on /.',
    ],
  },
];

const oahuFaqs: CopyFaq[] = [
  {
    q: 'What’s on the written Oahu catering quote besides food?',
    a: 'Servers $55 an hour, sous $75, four-to-five-hour minimums. Wedding receptions follow the same food band plus that crew. Service 20% and GET up to 4.712% are their own lines on the written quote.',
  },
  {
    q: 'Do you cater Honolulu towers and Ko Olina villas?',
    a: 'Yes, when the kitchen is real. Freight elevators, quiet hours, and COIs are arranged before the night. Hotel rooms without cooktops are declined. North Shore / Turtle Bay is a published surcharge.',
  },
  {
    q: 'Buffet or plated in a condo?',
    a: 'Buffet fits a compact Honolulu kitchen. Plated needs a table and a pass — Kahala and estate dining rooms, not a one-bedroom galley. Family-style for ten to twenty when the table matches the list.',
  },
  {
    q: 'Where does a small dinner go?',
    a: 'Tables under about ten usually belong on the private-chef door at /. Catering is the staffed room.',
  },
  {
    q: 'How do we start?',
    a: 'Open /quote. Five fields. Or WhatsApp. Typical reply in Hawaii business hours.',
  },
];

const mauiSections: CopySection[] = [
  {
    h2: 'Maui catering',
    paras: [
      'Maui catering is a staffed villa night on this island — Wailea residences, West Maui estates, Kīhei houses with a working kitchen. We are not a hotel banquet team and we are not a marketplace of freelance names. myCHEF Hawaii assigns the crew. You get a written menu for that house and a written total before a deposit.',
      'The Maui food start is $150–$250 a guest — the CORE dinner band, used for a staffed reception the same way it is used for a chef table. Shopping, cooking, service, and cleanup sit inside it. The people on the floor do not. Servers $55 an hour, sous $75, four-to-five-hour minimums, itemised. Twenty percent service and GET up to 4.712% are added once. Half the written total holds the date.',
      'Guest counts we treat as standard: roughly a dozen up to about seventy-five. Two-to-eight is usually the villa-chef product on /, not a reception with stations. We will not pad a small table into a catering invoice so the page looks busy.',
      'December through March books early in the resort corridors. September, October, and May press wedding weeks. We do not publish fabricated availability calendars. Ask with a date. The reply comes in Hawaii business hours from /quote.',
    ],
  },
  {
    h2: 'Wailea, West Maui, and Kīhei',
    paras: [
      'Wailea is the signature resort-residence corridor — base zone, December through March the first dates to fill. Makena sits just south, quieter inventory, still base. Outdoor setups there always carry a written indoor or covered backup. The house is still a kitchen test: cooktop, fridge, a table that fits the list. A Wailea residence with a real pass can plate. A Wailea condo with a galley should not be sold a coursed night because the postcode is famous.',
      'West Maui is named as West Maui. Kāʻanapali, Kapalua, Nāpili, Honokōwai. Traffic along that coast is planned into arrival, not treated as a surprise act of weather. We do not market this stretch as a Lahaina luxury dining brand. It is villa and estate work with a drive that is already in the base map.',
      'Kīhei is service-led. Condos and vacation homes, kitchens that are often smaller than a Wailea great room. The food band does not change because the postcode is less photographed. Kitchen constraints are stated on the quote. If the galley cannot hold a twenty-top, we say so and point the night at a chef dinner or a different format. South Maui families who want three cook days and a fridge that actually runs should look at Stay Chef on / first; this page is for the night the cousins arrive.',
      'Upcountry — Makawao, Kula, the Haleakalā slope — carries a published elevation surcharge. Pāʻia and Haʻikū are quote-only; the drive is extended and we will not stack a North Shore night onto a Wailea service day. Named farms appear on a menu only after written verification. Travel beyond base is a line, not a mood. The tariff for those lines is on /pricing.',
    ],
  },
  {
    h2: 'Wind, heat, and how the room is served',
    paras: [
      'Maui nights default outdoors. That changes the service question. A buffet on this island is a wind-and-heat problem before it is a status problem. Chafers have to stay hot when the trade comes through the sliders. Lids have to stay on the pan. Stations are set where the gust dies, not where the photograph wants them. This is the format for a Wailea great room that wants people standing, a family week that does not want a paced silence, a Kīhei house that can hold a line but cannot run courses out of a galley.',
      'A plated Maui night is a seated architecture. The table is the room. Courses leave a villa pass on a count, not a hope. Rehearsal dinners and small celebrations in Kapalua or a Wailea dining room can hold that. It costs more in hands, not in food: the $150–$250 band stays; the server line grows. We will not talk you into courses because they sound like a restaurant if the house is a breeze-through lānai with ten feet of counter.',
      'Family-style is the long outdoor table — the usual estate picture when teak already seats the welcome list and nobody needs a stationed line. Shared platters down the center, the trade in the napkins. The hour before anyone sits is boards and passed bites on the lānai: styled grazing in the $750–$950 market band (labeled as such), pieces at $5–$7 with a twenty-piece floor. Sushi-forward — nigiri, sashimi, hand rolls — is a menu direction we can cook in the villa, not a second brand.',
      'Format is a staffing and weather decision. The wet-weather plan is on the quote before anyone shops. We would rather station an honest line than plate a fantasy. Upcountry evenings run cooler; chafers that work on a Wailea lānai can sit too quiet in Makawao, so the station plan changes with elevation, not just with guest count.',
    ],
  },
  {
    h2: 'Wedding week on this island',
    paras: [
      'Wedding catering on Maui is a week you can cut. Welcome dinner, rehearsal, reception, recovery brunch — each a separate line on one proposal, so a brunch can come off without renegotiating a mystery package. Receptions we staff: about ten to seventy-five, private estate, not a ballroom buyout. Food from $150 a guest plus the hourly crew. Two people who want a fixed-price dinner are not a miniature reception; that product starts around $500 on this island and lives with the chef table, not with a stationed line.',
      'Wailea, Kapalua, Kāʻanapali, Makena, and the Upcountry houses that justify the drive. Peak pressure is September, October, and May. One crew holds one wedding week at a time. Florals and photography are yours. The bar is a first-class add-on. Indoor backup is written, not invented on the lawn at four in the afternoon. A West Maui reception the same weekend as a Wailea welcome dinner is two holds, not a clever drive we pretend is one.',
      'The island wedding page is /weddings. Send the date on /quote as soon as it is real. We do not invent Maui wedding reviews. Proof is the published band and the written week stack.',
    ],
  },
  {
    h2: 'Published Maui food and staffing',
    paras: [
      '$150–$250 a guest is the published food start, not a chat range. Menu, kitchen, and date move you inside the band. Crew hours, the 20% service charge, GET up to 4.712%, and any Upcountry or Pāʻia drive line are printed once. Multi-day retreat shopping is receipted at cost — you see the store tape. Alcohol is BYO or quoted. Rentals are add-ons when you want them. A tip is not required on the quote.',
      'A villa week that is really a chef week — arrival dinner, a stocked fridge, maybe a full-board day — belongs on the private-chef door at /. This page is the staffed room. Do not order a reception crew for eight people because the word catering appeared in a search. Day rates from $1,050 on Maui sit on that other door; they are not a discount catering package.',
      'Five fields. No account. Asking does not require a card. Hawaii business hours. We do not list a phone or a street office. The confirmed total is the page you get back in writing. If the house is a Wailea residence with a cooktop, say so. If it is a hotel room, we will decline before anyone shops.',
    ],
  },
];

const mauiFaqs: CopyFaq[] = [
  {
    q: 'What’s on the written Maui catering quote besides food?',
    a: 'Wedding receptions from $150 a guest plus staffing at $55 an hour for a server and $75 for a sous. Service 20% and GET up to 4.712% on their own lines. Groceries for multi-day days are billed at cost with receipts.',
  },
  {
    q: 'Does Upcountry change the Maui catering band?',
    a: 'The food start stays $150–$250. Kitchen quality changes the format, not the published start. Upcountry is a surcharge. Pāʻia / Haʻikū are quote-only.',
  },
  {
    q: 'Can the night stay outside?',
    a: 'Often. Trades and rain are why the wet-weather plan is written before the deposit. Buffet stations are placed for wind and heat, not for a photograph.',
  },
  {
    q: 'Where do I send the date?',
    a: '/quote, or WhatsApp. Wedding-week shape is on /weddings. The tariff is on /pricing.',
  },
];

const kauaiSections: CopySection[] = [
  {
    h2: 'Kauai catering',
    paras: [
      'Kauai catering is estate and villa work on both shores — Princeville and Hanalei to the north, Poʻipū and Kōloa to the south, Kapaʻa and Līhuʻe in the middle. You book a crew, not a drop-off. We design a menu for that kitchen, shop, cook, serve, and pack out. The island is live. Dated enquiries are booked, not collected for a waitlist. A house that wants a cook for the week and a reception on Saturday should say so in the first note; those are two products on one quote, not a bundled mystery.',
      'Kauaʻi food sits at $150–$250 a guest. A local incumbent prints a tighter $200–$250; we print the wider band and a written quote, not a mystery total that lands later. Staffing is separate: $55 an hour for a server, $75 for a sous, four-to-five-hour minimums. Wedding-week food on this island starts at $175 a guest plus that crew — higher than a celebration dinner because the week is a different hold.',
      'Standard rooms: about ten to seventy-five. Smaller tables should use the private-chef door on /. Far-North houses past Hanalei inherit a weather-and-road clause you will see in writing. We would rather reschedule a closure than forfeit a deposit over a bridge you cannot cross.',
      'Līhuʻe and Kapaʻa are the base zone. Princeville, Hanalei, and Poʻipū carry a published surcharge. Hāʻena and the far North are quote-only, with seventy-two-hour notice. Driving fees on this island are a map. They are not a flat surprise.',
    ],
  },
  {
    h2: 'Princeville, Poʻipū, and Hanalei',
    paras: [
      'Princeville is the North Shore estate inventory — great rooms, mist, winters that book early because the surf season fills houses. A crew stages from Līhuʻe and pays the published shore surcharge. Surf-season dates should be sent as soon as they are real. We do not hold a silent calendar.',
      'Hanalei is the town below the bluff. Weather and the road are part of the booking, not local color. Far-North events inherit the Hanalei-bridge clause: closures reschedule rather than punish. If the second van cannot cross, a plated night that needed those hands cannot be improvised with a smile. That is a staffing conversation on the first reply, not at four o\'clock on the day.',
      'Poʻipū and Kōloa are the South Shore: sunnier, a shorter drive from Līhuʻe, still a surcharge, still a kitchen test. Arrival-night dinners and retreat weeks fit this coast. Small weddings to about seventy-five fit when the house fits. Kalāheo and the west side — Waimea, Hanapēpē — are further again, quoted with advance notice.',
      'Tell us which shore on /quote. The food band does not change when the mist does. The drive line and the wet plan do. A Saturday that tries to plate in Princeville and station in Poʻipū is two crews. We will say that before anyone shops, not after the second van is already late on the bypass.',
    ],
  },
  {
    h2: 'Buffet or plated on two shores',
    paras: [
      'Kauaʻi has two climates and one food band. That is why buffet versus plated is a shore question, not a taste question. A Princeville great room in January often wants a stationed line under a covered lānai, pans that can wait while the rain passes, guests who can still eat if the lawn is closed. Buffet on the North Shore is how forty people eat when the pass is a residential kitchen and the sky is a stakeholder. The written wet plan is the other half of that sentence.',
      'Poʻipū can hold a plated table on the grass more nights of the year. Courses make sense when the South Shore house has a dining room or a calm lawn and the list is already seated in the architecture. Plated still means more servers for the same count. If the far-North road is a maybe, we will not promise a coursed night that needs a second car of hands. We will offer a stationed line that one crew can actually run.',
      'Family-style sits in the inner-circle band — a Hanalei or Kōloa table that already seats the rehearsal list, usually under twenty — when a stationed line would be louder than the house. Shared platters, one conversation, the rain on the tin if the North is doing what the North does. The hour people are still arriving from opposite coasts is boards and passed bites: market grazing $750–$950, labeled as a reference, pieces $5–$7 with a twenty-piece floor. Live fire belongs to South Shore kitchens that can take it; North Shore gets the covered plan instead of a stubborn grill in the rain.',
      'We will not copy a mainland banquet flowchart onto this island. The format follows the road, the roof, and the count.',
    ],
  },
  {
    h2: 'A menu written for that week',
    paras: [
      'There is a sample estate menu on this page. It is not a laminated carte. Your written menu is designed that week around the kitchen, the shore, the kids, and the allergies. Ahi poke with kukui and sweet onion is a North Shore handshake. Wood-grilled catch, mango, coconut rice is a South Shore fire. You edit until it is yours. Named farms print only with written verification. We will not print a farm we have not confirmed in writing just because the sentence sounds local.',
      'Dietary frameworks are designed in, not swapped at the pass. Severe allergies are a conversation before confirmation. A retreat week that wants breakfast through dinner is receipted shopping — you see every store tape — plus the crew hours. Drinks stay BYO or the bar as its own line. The private-chef sample on / is the smaller, seated version of the same kitchen standard: a Princeville dinner for eight, not a Poʻipū reception for forty.',
      'Stay Chef on this island starts at $1,100 a day. That is a villa week, not a discount reception. Read the island tariff on /pricing if you want the band next to the day rate and the bar. Then send the week. We would rather write a menu that fits a galley than promise a banquet a Princeville kitchen cannot fire.',
    ],
  },
  {
    h2: 'Wedding as a related door',
    paras: [
      'Kauai wedding catering is the same team with a higher food start: from $175 a guest plus staffing. Welcome dinner, rehearsal, reception, recovery brunch as separate lines. Estate formats on both shores, about ten to seventy-five at the reception. North Shore winters fill first. Far-North weeks inherit the bridge clause like any other night. A Poʻipū lawn in September is a different weather conversation than a Hanalei great room in January; the quote says which.',
      'One crew, one week. Cut a brunch without reopening a package. Florals and photography stay yours. The dedicated page is /weddings. The date itself belongs on /quote. We do not invent Kauaʻi wedding reviews, a storefront, or a history we have not lived. Proof is the band, the shore map, and the written week.',
    ],
  },
];

const kauaiFaqs: CopyFaq[] = [
  {
    q: 'What’s on the written Kauai catering quote besides food?',
    a: 'Wedding formats from $175 a guest plus staffing. Servers $55 an hour, sous $75. Service 20% and GET up to 4.712% as their own lines. A local competitor prints $200–$250; we print the band and a written quote.',
  },
  {
    q: 'Princeville or Poʻipū — is travel included?',
    a: 'Līhuʻe and Kapaʻa are base. Both shores carry a published surcharge. Hāʻena and the far North are quote-only with seventy-two-hour notice and a Hanalei-bridge weather clause.',
  },
  {
    q: 'Does the North Shore change buffet versus plated?',
    a: 'North Shore winters often want a covered stationed line. Poʻipū can hold a plated lawn more nights. Far-North plated nights are a staffing decision because of the road. Family-style for ten to twenty.',
  },
  {
    q: 'Is the sample Kauai estate menu the one we eat?',
    a: 'No. A sample estate menu is on this page. The menu you eat is written that week for that house.',
  },
  {
    q: 'How does a wedding week start?',
    a: 'From $175 a guest plus staffing. Shape the week on /weddings, send the date on /quote.',
  },
];

const bigislandSections: CopySection[] = [
  {
    h2: 'Hawaiʻi Island catering',
    paras: [
      'Hawaiʻi Island catering is west-side work first: the Kona–Kohala corridor, not a same-day island-wide promise. Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, the Mauna Kea resort belt, Puakō, Hōlualoa mauka of town. We shop, cook, and serve in the villa or estate you actually booked. Hilo and Volcano are a different day, quoted with their own crew, never squeezed across the saddle after a Kohala lunch.',
      'CORE food publishes at $150–$225 a guest. ENTRY dinners from $110 when the menu and the house fit that band. Staffing is the same hourly card as the other islands: $55 a server, $75 a sous, four-to-five-hour minimums. Wedding receptions from $150 a guest plus that crew. Service 20%, GET up to 4.712%, 50% to lock the date — each printed once.',
      'This page is the west-side kitchen: Kohala estates, Kona residences, the ranch houses that justify a Waimea surcharge. Statewide catering lives on the main site. What you get here is the corridor we actually staff — local drives, published bands, no island-wide fiction. A same-week Hilo reception is a different booking, written that way.',
      'Ironman week in October and the Kona Coffee Festival in November compress the corridor. Merrie Monarch in April presses the east side, which is already quote-only from Kona. Flag those dates early. Feasibility is confirmed in writing. We do not publish a fake open calendar. A Kohala Saturday in Ironman week is a capacity hold, not a vibe we sell through.',
    ],
  },
  {
    h2: 'Kohala estate events',
    paras: [
      'Kohala estate events are long tables, lava-heat evenings, and kitchens that range from a true pass to a resort-residence galley. Mauna Lani, Waikoloa, the Mauna Kea resort community — named for the coast, not the summit — sit inside the thirty-minute west-side radius. Seven resort communities share that loop. A crew can run a night here without inventing a cross-island miracle. Puakō houses between Waikoloa and Mauna Lani sit on the same base map; they are not a separate island claim.',
      'Waimea and Hāmākua are cooler, higher, and a published surcharge. Ranch houses and upcountry tables belong on that line, not on a silent invoice. A Waimea farm dinner is operational — the supply loop is real — not a theatre we invent for a caption. Kaʻū and the south are an extended surcharge with advance notice. Named Kaʻū coffee on a crust is coffee, origin-labeled when the law requires it. Named mushrooms from the Hāmākua coast print only after written verification.',
      'Kailua-Kona town sits at the south end of the same corridor. Event weeks there are a capacity question. We would rather decline a second Saturday than staff a fantasy. The private-chef door on / is the smaller west-side dinner — six seats, one cook, no stationed line. A Kona table of six should not buy a Kohala reception crew.',
    ],
  },
  {
    h2: 'West-side service, east-side honesty',
    paras: [
      'A same-day Kona–Hilo round trip is a logistics fantasy. The east side is two and a half to three hours from the west-side base. Events in Hilo or Volcano are quoted with dedicated staffing and, often, an overnight model. We publish that instead of discovering it at your first course. Merrie Monarch week is exactly when that honesty matters — the island is already full, and the saddle is not a commute.',
      'West-side load-in is ordinary: resort-residence rules, HOA quiet hours, a driveway that can take a van. We confirm those before the night. Reach us on the form and WhatsApp only. Contact is /quote in Hawaii business hours.',
      'Alcohol is BYO or licensed staffing on a separate line. Neighbor-island liquor-catering rules that still need counsel stay marked as such. We will not improvise a license we have not confirmed.',
    ],
  },
  {
    h2: 'How a Kohala night is plated or stationed',
    paras: [
      'A buffet on the lava coast is ranch-scale, not cafeteria. Stations have to survive a Kohala breeze and a heat that dries protein if you turn your back. Pans are chosen for the wind. The line is set where the wall cuts the gust. This is how a Waikoloa great room feeds thirty without asking a residential range to fire seventy plated mains at once. Reunion weeks and informal receptions live here.',
      'Plated on this island is a terrace count. Twelve seats at Mauna Lani, a kitchen that is actually a kitchen, courses leaving a pass into still air behind a lanai screen. It is the format when the list is already a table and the house can pace. It is not the format we haul over the saddle to Hilo in one day. More servers, same food band. The $150–$225 start does not jump because the plate has a rim.',
      'Family-style is the teak table down a Kohala lawn — an inner-circle count, platters in the middle, the evening still light. The hour people are still coming up from Kona is a board on the lava-rock wall and passed bites in the heat: grazing in the $750–$950 labeled market band, pieces $5–$7 once we clear a twenty-piece floor. Live fire belongs to estates that can take smoke and a grill; coffee-country evenings in Hōlualoa are cooler and often want the covered version of the same food.',
      'Pick the format after you pick the coast. East-side plated is a dedicated-day quote. West-side buffet is a breeze-and-heat quote. Neither is a status upgrade.',
    ],
  },
  {
    h2: 'What we publish before a deposit',
    paras: [
      'Starting food $150–$225, ENTRY from $110 when it fits, wedding from $150 plus staffing. The island card — Stay Chef from $950 a day, bar, zone lines — is on /pricing. The week shape for vows is on /weddings. The five-field start is /quote. If you want a tip line printed, ask; it is not baked in.',
      'A retreat week that cooks more than once is receipted shopping, not a folded grocery mystery. We do not invent Hawaiʻi Island reviews, chef names, or a founding year. Guest notes go up after verified nights, not before. What you can read today is the corridor map, the band, and the written total. If the house is a Kohala estate with a cooktop, send it. If it is a Hilo lodge you want staffed from Kona after lunch, we will write a dedicated day or we will decline.',
    ],
  },
];

const bigislandFaqs: CopyFaq[] = [
  {
    q: 'What’s on the written Hawaiʻi Island catering quote besides food?',
    a: 'Wedding from $150 a guest plus staffing at $55 / $75 an hour. Service 20% and GET up to 4.712% on their own lines. ENTRY from $110 when the menu and the house fit that band.',
  },
  {
    q: 'Is east-side catering a same-day add-on from Kona?',
    a: 'No. East side is two and a half to three hours from the west-side base. Hilo and Volcano are dedicated staffing, quoted honestly.',
  },
  {
    q: 'Where do you actually cook?',
    a: 'Kohala and Kona first — Waikoloa, Mauna Lani, the Mauna Kea resort belt, Kailua-Kona, Keauhou. Waimea is a surcharge. Kaʻū is an extended surcharge.',
  },
  {
    q: 'What about Ironman week?',
    a: 'October compresses the corridor. Coffee Festival in November does the same. Flag those dates on /quote; we confirm feasibility in writing.',
  },
];

export const cateringLongform: Record<IslandId, { sections: CopySection[]; faqs: CopyFaq[] }> = {
  oahu: { sections: oahuSections, faqs: oahuFaqs },
  maui: { sections: mauiSections, faqs: mauiFaqs },
  kauai: { sections: kauaiSections, faqs: kauaiFaqs },
  bigisland: { sections: bigislandSections, faqs: bigislandFaqs },
};
