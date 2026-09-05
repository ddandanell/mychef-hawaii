/**
 * Unique titles and descriptions per master-map URL.
 * One primary keyword per URL. Neighborhood doorway titles live on
 * moneyNeighborhoods (data/offers.ts) and win in resolveDocumentSeo.
 */

export interface PageMetaRecord {
  title: string;
  description: string;
}

const DEFAULT: PageMetaRecord = {
  title: 'Private Chef Hawaii | Four Island Villa Chefs | myCHEF',
  description:
    'Private chef Hawaii for villa dinner and in-home service. Oahu from $125 a guest. Maui, Kauaʻi, and the Big Island. Request a quote.',
};

export const PAGE_META: Record<string, PageMetaRecord> = {
  '/': DEFAULT,
  '/islands': {
    title: 'Four island hosts | myCHEF Hawaii',
    description:
      'Each island is its own host — own chefs, zones and pricing. Oʻahu and Maui take quotes. Kauaʻi and Hawaiʻi Island are inquiry. Island money titles stay on those hosts.',
  },
  '/areas': {
    title: 'Where we cook, by island — map notes | myCHEF',
    description:
      'Map notes on every island host: live corridors plus the rest of the named places. Choose an island, then the geography.',
  },
  '/services': {
    title: 'Villa dinners, catering, weddings and bar — by island | myCHEF',
    description:
      'Open the island document: in-villa dinner, staffed catering, wedding week, or the bartender add-on. The four-hour cart lives on /mobile-bar. WhatsApp for a quote.',
  },
  '/private-chef': {
    title: 'Visitor dinners in Hawaii villas, by island | myCHEF',
    description:
      'Open the island visitor-dinner document. Oʻahu from $125 a guest. Weekly household cooking lives on each island /personal-chef. Enquire on WhatsApp.',
  },
  '/catering': {
    title: 'Hawaii Catering | Staffed Villa Events 10–75 | myCHEF',
    description:
      'Hawaii catering for villa and estate events of 10–75 guests. Buffet or plated. Oahu, Maui, Kauaʻi, Big Island. Not ballrooms. Request a quote.',
  },
  '/vacation-chef': {
    title: 'Vacation chef Hawaii — Stay Chef from $850/day | myCHEF',
    description: 'A chef for the villa week. Day rates from $850 Oʻahu / $1,050 Maui. Groceries at cost.',
  },
  '/how-it-works': {
    title: 'How a booking works in Hawaii | myCHEF',
    description:
      'WhatsApp or quote, menu in 48 hours, written price, we cook and leave it clean. Typical reply in Hawaii business hours.',
  },
  '/pricing': {
    title: 'What a night costs | myCHEF Hawaii',
    description:
      'Published starting prices, line by line: per guest, what’s included, groceries at cost, 20% service, GET. Quote in writing.',
  },
  '/quote': {
    title: 'Get a quote — myCHEF Hawaii',
    description: 'Five fields, two minutes. WhatsApp or this form. Typical reply in Hawaii business hours.',
  },
  '/about': {
    title: 'About myCHEF Hawaii | Island Chef Teams',
    description:
      'myCHEF Hawaii is a four-island villa chef team. We staff a brigade to the size of the house — chef, sous, service, bar, shopper. Request a quote.',
  },
  '/weddings': {
    title: 'Wedding Catering Hawaii | Wedding-Week Chefs | myCHEF',
    description:
      'Wedding catering Hawaii: one team for the whole week. Welcome dinner, ceremony, and the days after. Request a quote.',
  },
  '/bar': {
    title: 'Villa bartender add-on — terrace cocktails, by island | myCHEF',
    description:
      'A bartender stacked with dinner or booked as its own hour. The four-hour mobile bar Hawaii package lives on /mobile-bar. Starting prices published per island.',
  },
  '/mobile-bar': {
    title: 'Mobile bar Hawaii | 4-hour villa package | myCHEF',
    description:
      'Mobile bar Hawaii: a four-hour cart, bartender, citrus and ice. The cocktail-hour add-on lives on /bar. Starting prices published per island.',
  },
  '/trust': {
    title: 'Trust standards — Honesty register | myCHEF Hawaii',
    description:
      'Hawaii is launching. Reviews publish only after verified events. No fabricated local proof.',
  },
  '/legal': {
    title: 'Booking notes — quotes, GET, deposits | myCHEF Hawaii',
    description:
      'Published starting prices, service 20% and GET up to 4.712%, 50% deposit. Written quote is the confirmed total. Distinct from island /legal notes.',
  },
  '/journal': {
    title: 'The journal, by island | myCHEF Hawaii',
    description:
      'Each island department publishes its own journal. The hub does not rank for private chef Maui — that page lives on the Maui host.',
  },
  '/blog': {
    title: 'Guides and notes, by island | myCHEF Hawaii',
    description:
      'Each island department publishes its own blog. Statewide Hawaii catering stays on the hub catering page, not this directory.',
  },
  '/thank-you': {
    title: 'Enquiry received — myCHEF Hawaii',
    description: 'Your enquiry is in. A coordinator replies in Hawaii Standard Time, typically within one business day.',
  },
  '/corporate': {
    title: 'Corporate catering for Hawaii villa offsites | myCHEF Hawaii',
    description:
      'Staffed chef catering for villa offsites and production crews of 10–75. Not a convention-centre play while HCC citywides are closed through 2027.',
  },
  '/gatherings': {
    title: 'Private gatherings and family villa dinners | myCHEF Hawaii',
    description:
      'Birthdays, reunions, and rehearsal dinners in Hawaiian villas. Staffed 10–75. Not a wedding-week stack — that lives on /weddings.',
  },
  '/faq': {
    title: 'Questions, by island | myCHEF Hawaii',
    description:
      'Each island host keeps its own FAQ. This hub page is the picker — not Oahu questions, not Maui villa kitchens.',
  },
  '/coverage': {
    title: 'Coverage maps, by island | myCHEF Hawaii',
    description:
      'Each island host publishes its own coverage map. Distinct from hub /areas (map notes) and from live dinner doors at /locations.',
  },
  '/contact': {
    title: 'How to reach a desk, by island | myCHEF Hawaii',
    description:
      'Each island department has its own desk hours and form. This hub page is the picker — not the Oahu desk, not the Maui desk.',
  },
  '/locations': {
    title: 'Live dinner doors, by island | myCHEF Hawaii',
    description:
      'Each island host lists its live corridor URLs. Distinct from hub /areas (map notes) and from each island /coverage zone map.',
  },
  '/menus': {
    title: 'How menus are designed, by island | myCHEF Hawaii',
    description:
      'Each island host explains how a table is designed. Distinct from nested /menus/:sku pages and from the island /menus process document.',
  },
  '/help': {
    title: 'Help desks, by island | myCHEF Hawaii',
    description:
      'Each island host keeps a help desk: first booking, menu draft, after the quote. Distinct from /faq and from nested /help/:slug articles.',
  },
  '/fine-dining': {
    title: 'In-villa formats, by island | myCHEF Hawaii',
    description:
      'Each island lists in-villa formats — not a Michelin claim. Distinct from /honeymoon-dinners, /chefs-table, and nested /fine-dining/:course pages.',
  },
  '/staffing': {
    title: 'Staffing add-ons, by island | myCHEF Hawaii',
    description:
      'Each island lists hourly add-ons: servers, bartenders, quoted butlers. Distinct from /bar, /mobile-bar, and nested /staffing/:role pages.',
  },
  '/events': {
    title: 'Villa occasions, by island | myCHEF Hawaii',
    description:
      'Each island host keeps its own events document. Distinct from hub /gatherings, /weddings, and nested /events/:occasion pages.',
  },
  '/what-we-dont-do': {
    title: 'What we will not claim, by island | myCHEF Hawaii',
    description:
      'Each island publishes its own claim list. Distinct from /trust (honesty register) and from /blog/no-fake-reviews.',
  },
  '/guest-counts': {
    title: 'Guest counts we staff, by island | myCHEF Hawaii',
    description:
      'Each island publishes dinners 2–15 and receptions about 10–75. Distinct from /events and from /honeymoon-dinners.',
  },
  '/dietary': {
    title: 'Dietary design, by island | myCHEF Hawaii',
    description:
      'Each island designs vegan, gluten-free, and allergy plates in advance. Distinct from /menus and from /help/menu-guide.',
  },
  '/honeymoon-dinners': {
    title: 'Dinner for two, by island | myCHEF Hawaii',
    description:
      'Each island hosts dinner-for-two as its own document. Distinct from /fine-dining, /chefs-table, and /weddings.',
  },
  '/chefs-table': {
    title: 'Chef’s table nights, by island | myCHEF Hawaii',
    description:
      'Each island hosts chef’s table in the villa. Distinct from /fine-dining/chefs-table-evening, /omakase-at-home, and /honeymoon-dinners.',
  },
  '/kids-menus': {
    title: 'Kids at the table, by island | myCHEF Hawaii',
    description:
      'Each island plans children’s plates with the adults’ menu. Distinct from /menus/breakfast and from /guest-counts.',
  },
  '/personal-chef': {
    title: 'Household chef line, by island | myCHEF Hawaii',
    description:
      'Each island keeps a resident household line. Distinct from hub /private-chef, from /vacation-chef, and from Oahu /kamaaina.',
  },
  '/private-chef-cost': {
    title: 'Fee stack explainers, by island | myCHEF Hawaii',
    description:
      'Each island explains service, GET, and travel. Distinct from /pricing (what a night costs) and from island homes.',
  },
  '/meal-prep': {
    title: 'Meal prep honesty, by island | myCHEF Hawaii',
    description:
      'Each island gates volume meal prep until utilization is proven. Distinct from /vacation-chef and from /menus/lunch.',
  },
  '/cooking-classes': {
    title: 'Cooking classes honesty, by island | myCHEF Hawaii',
    description:
      'Each island keeps classes unpublished until a real instructor bench exists. Distinct from /menus and from /chefs-table.',
  },
  '/omakase-at-home': {
    title: 'Omakase-at-home notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts tasting-at-home with sourcing gates. Distinct from /fine-dining/tasting-menu, /chefs-table, and /honeymoon-dinners.',
  },
  '/rehearsal-dinners': {
    title: 'Rehearsal dinners, by island | myCHEF Hawaii',
    description:
      'Each island quotes the night before as its own line. Distinct from /weddings, /events, and hub /gatherings.',
  },
  '/retreat-catering': {
    title: 'Retreat full-board, by island | myCHEF Hawaii',
    description:
      'Each island quotes full-board retreat days in houses. Distinct from /events/retreats, /corporate, and /corporate-catering.',
  },
  '/corporate-catering': {
    title: 'House offsite catering, by island | myCHEF Hawaii',
    description:
      'Each island quotes executive dinners in houses. Distinct from hub /corporate, /events/corporate-events, and /help/corporate-guide.',
  },
  '/events/birthdays': {
    title: 'Birthday dinners, by island | myCHEF Hawaii',
    description:
      'Each island hosts birthday dinners in houses. Distinct from hub /events and from /gatherings.',
  },
  '/events/welcome-dinners': {
    title: 'Arrival-night dinners, by island | myCHEF Hawaii',
    description:
      'Each island hosts the first night of the villa week. Distinct from /events, /honeymoon-dinners, and /rehearsal-dinners.',
  },
  '/events/retreats': {
    title: 'Retreat cooking notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts the retreat occasion essay. Distinct from /retreat-catering (full-board SKU) and from /corporate.',
  },
  '/events/anniversaries': {
    title: 'Anniversary nights, by island | myCHEF Hawaii',
    description:
      'Each island hosts anniversary dinners in houses. Distinct from /honeymoon-dinners, /chefs-table, and /events.',
  },
  '/events/corporate-events': {
    title: 'House offsite nights, by island | myCHEF Hawaii',
    description:
      'Each island hosts the offsite occasion. Distinct from hub /corporate, /corporate-catering, and /help/corporate-guide.',
  },
  '/events/villa-parties': {
    title: 'Villa parties, by island | myCHEF Hawaii',
    description:
      'Each island hosts villa parties as their own occasion. Distinct from /gatherings, /events, and /guest-counts.',
  },
  '/events/brunch': {
    title: 'Day-after brunch, by island | myCHEF Hawaii',
    description:
      'Each island hosts brunch in the house. Distinct from /menus/breakfast, /menus/lunch, and /events.',
  },
  '/catering/bbq': {
    title: 'Lawn BBQ service, by island | myCHEF Hawaii',
    description:
      'Each island hosts BBQ as a format document. Distinct from hub /catering and from nested plated service.',
  },
  '/catering/plated': {
    title: 'Plated villa service, by island | myCHEF Hawaii',
    description:
      'Each island hosts plated service as a format. Titles never use “{island} catering plated”. Distinct from /fine-dining.',
  },
  '/catering/family-style': {
    title: 'Family-style service, by island | myCHEF Hawaii',
    description:
      'Each island hosts family-style service as a format. Distinct from /menus/family-style-menu and from plated service.',
  },
  '/catering/buffet': {
    title: 'Buffet service, by island | myCHEF Hawaii',
    description:
      'Each island hosts buffet as a format. Distinct from /catering, /guest-counts, and drop-off.',
  },
  '/catering/grazing': {
    title: 'Grazing boards, by island | myCHEF Hawaii',
    description:
      'Each island hosts grazing as a format. Distinct from /bar, /events/villa-parties, and plated service.',
  },
  '/catering/drop-off': {
    title: 'Drop-off is not staffed, by island | myCHEF Hawaii',
    description:
      'Each island says drop-off is not staffed service. Distinct from /catering, buffet, and /meal-prep.',
  },
  '/fine-dining/romantic-dinner': {
    title: 'Romantic villa dinners, by island | myCHEF Hawaii',
    description:
      'Each island hosts a romantic-dinner format. Distinct from /honeymoon-dinners, /chefs-table, and /fine-dining.',
  },
  '/fine-dining/tasting-menu': {
    title: 'Tasting menus, by island | myCHEF Hawaii',
    description:
      'Each island hosts tasting-menu as a format. Distinct from /omakase-at-home, /menus/three-course, and /fine-dining.',
  },
  '/fine-dining/chefs-table-evening': {
    title: 'Evening chef’s-table formats, by island | myCHEF Hawaii',
    description:
      'Each island hosts chef’s-table evening as a format. Distinct from /chefs-table (the named SKU) and from /omakase-at-home.',
  },
  '/fine-dining/celebration-dinner': {
    title: 'Celebration dinners, by island | myCHEF Hawaii',
    description:
      'Each island hosts celebration-dinner as a format. Distinct from /events/anniversaries, /events/birthdays, and /fine-dining.',
  },
  '/staffing/servers': {
    title: 'Server add-ons, by island | myCHEF Hawaii',
    description:
      'Each island quotes servers hourly. Distinct from /staffing, /bar, and /guest-counts.',
  },
  '/staffing/bartenders': {
    title: 'Bartender hourly lines, by island | myCHEF Hawaii',
    description:
      'Each island quotes bartenders hourly. Distinct from /bar, /mobile-bar, and /staffing.',
  },
  '/staffing/butlers': {
    title: 'Quoted butler lines, by island | myCHEF Hawaii',
    description:
      'Each island quotes butlers only when a bench exists. Distinct from /staffing and from /help.',
  },
  '/menus/three-course': {
    title: 'Three-course tables, by island | myCHEF Hawaii',
    description:
      'Each island designs a three-course SKU per table. Distinct from /menus, /catering/plated, and /fine-dining/tasting-menu.',
  },
  '/menus/family-style-menu': {
    title: 'Family-style menus, by island | myCHEF Hawaii',
    description:
      'Each island designs a family-style menu SKU. Distinct from /catering/family-style and from /menus.',
  },
  '/menus/breakfast': {
    title: 'Breakfast in the house, by island | myCHEF Hawaii',
    description:
      'Each island designs breakfast per table. Distinct from /events/brunch, /vacation-chef, and /menus.',
  },
  '/menus/lunch': {
    title: 'Lunch in the house, by island | myCHEF Hawaii',
    description:
      'Each island designs lunch per table. Distinct from /menus/breakfast, /meal-prep, and /menus.',
  },
  '/help/getting-started': {
    title: 'First booking notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts the first-booking help article. Distinct from /help, /faq, /how-it-works, and /quote.',
  },
  '/help/menu-guide': {
    title: 'How to read a menu draft, by island | myCHEF Hawaii',
    description:
      'Each island hosts the menu-guide help article. Distinct from /menus, /help, and nested menu SKUs.',
  },
  '/help/wedding-guide': {
    title: 'Wedding-week planning notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts the wedding-week help article. Distinct from /weddings, /rehearsal-dinners, and /help.',
  },
  '/help/corporate-guide': {
    title: 'Offsite planning notes, by island | myCHEF Hawaii',
    description:
      'Each island hosts the offsite help article. Distinct from /corporate, /corporate-catering, /events/corporate-events, and /help.',
  },
  '/help/managing-booking': {
    title: 'After the quote, by island | myCHEF Hawaii',
    description:
      'Each island hosts the after-quote help article. Distinct from /quote, /help/getting-started, and /help.',
  },
  '/oahu': {
    title: 'Private Chef Oahu | Villa and Household Chefs | myCHEF',
    description:
      'Private chef Oahu from $125 a guest. Named corridors — Honolulu, Waikīkī, Kahala, Kailua, Ko Olina, North Shore. Villa dinners and household chefs. Request a quote.',
  },
  '/maui': {
    title: 'Private Chef Maui | In-Villa Dinners and Weeks | myCHEF',
    description:
      'Private chef Maui from $150 a guest. In-villa dinners and weeks in Wailea, Kīhei and West Maui. Maui catering is the larger door on /catering. Request a quote.',
  },
  '/kauai': {
    title: 'Private Chef Kauai | Both Shores — Inquiry | myCHEF',
    description:
      'Private chef Kauai from $150 a guest. Princeville, Poʻipū, Hanalei named in coverage. Both shores, inquiry stage.',
  },
  '/bigisland': {
    title: 'Private Chef Big Island | Kona–Kohala Inquiry | myCHEF',
    description:
      'Private chef Big Island from $125 a guest. Named corridors — Kona, Waikoloa, Waimea, Kohala Coast. Inquiry stage. WhatsApp the dates.',
  },
  '/oahu/private-chef': {
    title: 'Visitor dinners in the Oahu house | myCHEF',
    description:
      'In-home visitor dinners on Oahu. The household week is /personal-chef. Private chef Oahu stays on this host’s home. WhatsApp for a quote.',
  },
  '/oahu/vacation-chef': {
    title: 'Oʻahu vacation chef — Stay Chef villa weeks | myCHEF',
    description: 'A chef for the Oʻahu villa week. Stay Chef from $850 a day, groceries at cost. Weekly household cooking is /personal-chef.',
  },
  '/oahu/catering': {
    title: 'Oahu Catering | Honolulu to Ko Olina Events | myCHEF',
    description:
      'Oahu catering from $125 a guest. Staffed events from Honolulu to Ko Olina. Buffet or plated. Request a quote.',
  },
  '/oahu/weddings': {
    title: 'Wedding Catering Oahu | Gold Coast Weekends | myCHEF',
    description:
      'Wedding catering Oahu — one kitchen for the weekend. Kahala, Ko Olina and Kailua estates. Starting prices published.',
  },
  '/oahu/bar': {
    title: 'Oʻahu villa cocktails — bartender on the lānai | myCHEF',
    description:
      'A bartender on your lānai. Published starting prices. Stack with a private chef in Waikīkī, Kahala, Ko Olina or Kailua.',
  },
  '/oahu/mobile-bar': {
    title: 'Oʻahu 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart — ice, citrus, glassware, bartender — from Waikīkī to Ko Olina. Quote in writing.',
  },
  '/oahu/events': {
    title: 'Oahu villa events — birthdays, retreats, welcome nights | myCHEF',
    description:
      'Staffed villa events on Oahu: birthdays, retreats and welcome nights from Honolulu to Ko Olina. The catering door is /catering. Request a quote.',
  },
  '/oahu/about': {
    title: 'About myCHEF Oahu — Honolulu to Ko Olina crew | myCHEF',
    description:
      'myCHEF Oahu staffs a brigade to the house: chef, sous, service, bar, shopper. Honolulu, Waikīkī residences, Kahala, Kailua, Ko Olina. Request a quote.',
  },
  '/oahu/pricing': {
    title: 'What a night costs on Oahu | myCHEF',
    description: 'Published starting prices for Oʻahu: villa chef day rate, signature dinners, mobile bar and weekly household service.',
  },
  '/oahu/quote': {
    title: 'Oahu quote form — corridor, kitchen, written total | myCHEF',
    description:
      'Five fields for an Oahu villa dinner or staffed room. Name the corridor and the kitchen. A written quote follows.',
  },
  '/oahu/legal': {
    title: 'Oahu booking notes — quotes, GET, Gold Coast kitchens | myCHEF',
    description:
      'Oahu booking notes: written quote, 50% deposit, 20% service, GET up to 4.712%. Gold Coast kitchens are the product. Hotel suites without a cooktop are declined.',
  },
  '/oahu/thank-you': {
    title: 'Oahu enquiry received | myCHEF',
    description: 'The Oahu coordinator has the corridor, the kitchen note, and the dates. Reply in Hawaii business hours.',
  },
  '/oahu/journal': {
    title: 'Oahu journal — corridor notes | myCHEF',
    description:
      'Oahu host journal: Honolulu, Waikīkī, Kailua, North Shore, Kahala, Ko Olina. Not the hub digest. Statewide Hawaii catering stays off this title.',
  },
  '/oahu/blog': {
    title: 'Oahu blog — Honolulu kitchens | myCHEF',
    description:
      'Shorter Oahu host posts for Honolulu kitchens and booking questions. Not the journal. Not a statewide feed.',
  },
  '/oahu/locations': {
    title: 'Oahu corridors we cook — Honolulu to Ko Olina | myCHEF',
    description:
      'Live Oahu corridor URLs: Honolulu, Waikīkī, Kailua, North Shore, Kahala, Ko Olina. /coverage is the zone map. This page is the directory.',
  },
  '/oahu/sitemap': {
    title: 'Oahu HTML sitemap — live URLs on this host | myCHEF',
    description: 'HTML sitemap for the Oahu host: corridors, services, occasions, and supporting documents. Not the hub sitemap.',
  },
  '/maui/private-chef': {
    title: 'Visitor dinners in the Maui villa | myCHEF',
    description:
      'In-home visitor dinners on Maui. The household week is /personal-chef. Private chef Maui stays on this host’s home. WhatsApp for a quote.',
  },
  '/maui/vacation-chef': {
    title: 'Maui vacation chef — Multi-day villa service | myCHEF',
    description: 'A chef for the whole Maui stay — provisioning, full-board days and retreat service.',
  },
  '/maui/weddings': {
    title: 'Wedding Catering Maui | Wedding-Week Chefs | myCHEF',
    description:
      'Wedding catering Maui — one team for the week. Welcome dinner through recovery brunch. Starting prices published. Request a quote.',
  },
  '/maui/bar': {
    title: 'Maui villa cocktails — Wailea and Kapalua terraces | myCHEF',
    description:
      'Terrace cocktail add-on for Maui villas and wedding weeks. The four-hour mobile bar package lives on /mobile-bar. Published starting prices. Stack with the chef.',
  },
  '/maui/mobile-bar': {
    title: 'Maui 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for Wailea, Kapalua, Kāʻanapali and Makena. Starting prices published.',
  },
  '/maui/events': {
    title: 'Maui villa events — Wailea lawns and West Maui houses | myCHEF',
    description:
      'Staffed villa events on Maui: birthdays, retreats and welcome nights in Wailea, Kīhei and West Maui. Catering is the larger door on /catering.',
  },
  '/maui/about': {
    title: 'About myCHEF Maui — Wailea to West Maui crew | myCHEF',
    description:
      'myCHEF Maui staffs villa dinners and lawn receptions. Wailea, Kīhei, Kāʻanapali, Kapalua, Makena. Catering is the larger door. Request a quote.',
  },
  '/maui/pricing': {
    title: 'What a night costs on Maui | myCHEF',
    description:
      'Maui starting prices: $150–$250 a guest CORE, groceries at cost on Stay Chef, 20% service, GET up to 4.712%. Published, line by line.',
  },
  '/maui/quote': {
    title: 'Maui quote form — shore, kitchen, written total | myCHEF',
    description:
      'Five fields for a Maui villa dinner or staffed room. Name the shore and the kitchen. Saturday West Maui traffic is planned in.',
  },
  '/maui/legal': {
    title: 'Maui booking notes — quotes, GET, West Maui travel | myCHEF',
    description:
      'Maui booking notes: written quote, 50% deposit, 20% service, GET up to 4.712%. Saturday West Maui traffic is planned into arrival. Lahaina is a town, not a mystery fee.',
  },
  '/maui/thank-you': {
    title: 'Maui enquiry received | myCHEF',
    description: 'The Maui coordinator has the shore, the kitchen note, and the dates. Saturday West Maui traffic is planned into the reply.',
  },
  '/maui/journal': {
    title: 'Maui journal — South and West | myCHEF',
    description:
      'Maui host journal: South Maui, West Maui, wedding-week houses. Not Oahu, Kauaʻi, or Hawaiʻi Island. Not the hub directory.',
  },
  '/maui/blog': {
    title: 'Maui blog — villa nights | myCHEF',
    description:
      'Shorter Maui host posts beside Wailea and Kāʻanapali nights. Not the journal. Not a statewide feed.',
  },
  '/maui/locations': {
    title: 'Maui corridors we cook — Wailea to Kapalua | myCHEF',
    description:
      'Live Maui corridor URLs: Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, Makena. /coverage is the zone map. This page is the directory.',
  },
  '/maui/sitemap': {
    title: 'Maui HTML sitemap — live URLs on this host | myCHEF',
    description: 'HTML sitemap for the Maui host: corridors, services, occasions, and supporting documents. Not the hub sitemap.',
  },
  '/maui/catering': {
    title: 'Maui Catering | Villa Receptions and Events | myCHEF',
    description:
      'Maui catering from $150 a guest. Staffed villa events, not drop-off. Buffet or plated. Request a quote.',
  },
  '/kauai/private-chef': {
    title: 'Visitor dinners on Kauai — both shores, inquiry | myCHEF',
    description:
      'In-home visitor dinners on Kauai at inquiry. The household week is /personal-chef. Private chef Kauai stays on this host’s home.',
  },
  '/kauai/vacation-chef': {
    title: 'Vacation chef Kauai — Stay Chef from $1,100/day | myCHEF',
    description: 'A chef for your Kauaʻi week. Arrival-night dinner, provisioning, retreat full-board. Inquiry stage.',
  },
  '/kauai/events': {
    title: 'Kauai estate events — both shores, inquiry | myCHEF',
    description:
      'Staffed estate events on Kauai: Princeville, Hanalei and Poʻipū. Inquiry stage. The catering door is /catering.',
  },
  '/kauai/about': {
    title: 'About myCHEF Kauai — both-shore inquiry crew | myCHEF',
    description:
      'myCHEF Kauai is inquiry-stage on both shores: Princeville, Hanalei, Poʻipū. We staff the estate to the guest list when a crew exists.',
  },
  '/kauai/catering': {
    title: 'Kauai Catering | Estate Events — Inquiry | myCHEF',
    description:
      'Kauai catering from $150 a guest. Estate events on both shores. Inquiry stage. Buffet or plated.',
  },
  '/kauai/weddings': {
    title: 'Kauai wedding catering | both shores — inquiry | myCHEF',
    description:
      'Kauai wedding catering from $175/pp plus staffing. Princeville, Hanalei and Poʻipū. Inquiry stage.',
  },
  '/kauai/bar': {
    title: 'Kauaʻi villa cocktails — Princeville and Poʻipū | myCHEF',
    description: 'Terrace cocktail add-on on both Kauaʻi shores. Inquiry stage. The 4-hour package lives on /mobile-bar.',
  },
  '/kauai/mobile-bar': {
    title: 'Kauaʻi 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for Princeville, Hanalei and Poʻipū. Starting prices published. Inquiry stage.',
  },
  '/kauai/pricing': {
    title: 'What a night costs on Kauai | myCHEF',
    description:
      'Kauai starting prices $150–$250 a guest. Wedding from $175 a guest plus staffing. Groceries, 20% service, GET — published.',
  },
  '/kauai/quote': {
    title: 'Kauai inquiry form — both shores, written reply | myCHEF',
    description:
      'Inquiry form for Kauai estate dinners. Name the shore. Hanalei-bridge weather is a clause. We will not fake a live Book-now button.',
  },
  '/kauai/legal': {
    title: 'Kauai booking notes — quotes, GET, Hanalei-bridge weather | myCHEF',
    description:
      'Kauai booking notes at inquiry: written quote when we can staff, 50% deposit, GET up to 4.712%. Hanalei-bridge closures reschedule rather than forfeit. We will not fake a live roster.',
  },
  '/kauai/thank-you': {
    title: 'Kauai inquiry received | myCHEF',
    description: 'The Kauai inquiry list has the shore and the dates. We write back with what we can staff. Hanalei-bridge weather is a clause.',
  },
  '/kauai/journal': {
    title: 'Kauai journal — both shores | myCHEF',
    description:
      'Kauai host journal at inquiry: Princeville, Hanalei, Kapaʻa, Poʻipū. Not a staffed calendar. Not the hub directory.',
  },
  '/kauai/blog': {
    title: 'Kauai blog — inquiry notes | myCHEF',
    description:
      'Shorter Kauai host posts at inquiry. Princeville and Poʻipū named. Not a live roster. Not the journal.',
  },
  '/kauai/locations': {
    title: 'Kauai corridors we cook — both shores | myCHEF',
    description:
      'Live Kauai corridor URLs: Princeville, Poʻipū, Hanalei, Kapaʻa. Inquiry. /coverage is the zone map. This page is the directory.',
  },
  '/kauai/sitemap': {
    title: 'Kauai HTML sitemap — live URLs on this host | myCHEF',
    description:
      'HTML sitemap for the Kauai host at inquiry: both shores, supporting documents, and the cells we will quote.',
  },
  '/bigisland/private-chef': {
    title: 'Visitor dinners on Hawaiʻi Island — west side, inquiry | myCHEF',
    description:
      'In-home visitor dinners on the west side at inquiry. The household week is /personal-chef. Private chef Kona stays a dinner door.',
  },
  '/bigisland/vacation-chef': {
    title: 'Vacation chef Big Island — Stay Chef from $950/day | myCHEF',
    description: 'Multi-day chef residencies for Kohala and Waimea weeks. Groceries at cost. Inquiry stage.',
  },
  '/bigisland/catering': {
    title: 'Big Island catering — Kona & Kohala from $125/pp | myCHEF',
    description:
      'Catering on Hawaiʻi Island from $125/pp. Kohala Coast and Kona villa receptions, buffet or plated. WhatsApp for a written quote.',
  },
  '/bigisland/weddings': {
    title: 'Wedding catering Big Island | myCHEF',
    description: 'Wedding catering Big Island — Kohala and Kona estate weeks. Starting prices published. Inquiry stage.',
  },
  '/bigisland/bar': {
    title: 'Hawaiʻi Island villa cocktails — Kohala terraces | myCHEF',
    description: 'Sunset pours on Kona–Kohala terraces. Bartender add-on. The 4-hour package lives on /mobile-bar.',
  },
  '/bigisland/mobile-bar': {
    title: 'Hawaiʻi Island 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for the Kohala Coast and Kona. Inquiry-stage. Starting prices published.',
  },
  '/bigisland/events': {
    title: 'Big Island villa events — Kohala and Kona | myCHEF',
    description:
      'Staffed villa events on Hawaiʻi Island: Kohala Coast and Kona. Inquiry stage. East side is quote-only. Catering lives on /catering.',
  },
  '/bigisland/about': {
    title: 'About myCHEF Big Island — Kona–Kohala crew | myCHEF',
    description:
      'myCHEF Hawaiʻi Island is west-side first: Kona, Waikoloa, the Kohala Coast. Inquiry stage. Hilo is a different day.',
  },
  '/bigisland/pricing': {
    title: 'What a night costs on the Big Island | myCHEF',
    description: 'Published starting prices for Big Island villa chefs, dinners, bar and estate weddings. West side first.',
  },
  '/bigisland/quote': {
    title: 'Hawaiʻi Island inquiry form — west side, written reply | myCHEF',
    description:
      'Inquiry form for west-side Hawaiʻi Island dinners. East side is a different day. We will not fake a live Book-now button.',
  },
  '/bigisland/legal': {
    title: 'Hawaiʻi Island booking notes — quotes, GET, east-side days | myCHEF',
    description:
      'Hawaiʻi Island booking notes at inquiry: written quote when we can staff, 50% deposit, GET up to 4.712%. West side first. East side is a dedicated day, never a west-side round trip.',
  },
  '/bigisland/thank-you': {
    title: 'Hawaiʻi Island inquiry received | myCHEF',
    description: 'The west-side inquiry list has the address and the dates. East side is a different day. We write back with what we can staff.',
  },
  '/bigisland/journal': {
    title: 'Hawaiʻi Island journal — west side first | myCHEF',
    description:
      'Hawaiʻi Island host journal: Kona, Waikoloa, Waimea, Kohala. West side first. Hilo is a different day. Not the hub directory.',
  },
  '/bigisland/blog': {
    title: 'Hawaiʻi Island blog — Kona first | myCHEF',
    description:
      'Shorter Hawaiʻi Island host posts. West side first. East side is a different day. Not the journal.',
  },
  '/bigisland/locations': {
    title: 'Hawaiʻi Island corridors we cook — Kona to Kohala | myCHEF',
    description:
      'Live Hawaiʻi Island corridor URLs: Kona, Waimea, Waikoloa, Kohala. West side first. /east-side is a different day. This page is the directory.',
  },
  '/bigisland/sitemap': {
    title: 'Hawaiʻi Island HTML sitemap — live URLs on this host | myCHEF',
    description:
      'HTML sitemap for the Hawaiʻi Island host: west-side corridors, supporting documents, and east-side as its own cell.',
  },
};

export function metaForPath(
  pathname: string,
  islandId?: string | null,
  hostMode?: boolean,
): PageMetaRecord {
  return lookupPageMeta(pathname, islandId, hostMode) ?? DEFAULT;
}

/** Explicit title/description if we wrote one — does not fall back to DEFAULT. */
export function lookupPageMeta(
  pathname: string,
  islandId?: string | null,
  hostMode?: boolean,
): PageMetaRecord | undefined {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (hostMode && islandId) {
    const prefixed = clean === '/' ? `/${islandId}` : `/${islandId}${clean}`;
    return PAGE_META[prefixed];
  }
  return PAGE_META[clean];
}
