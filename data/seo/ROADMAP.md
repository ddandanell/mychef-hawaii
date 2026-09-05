# SEO rebuild roadmap

The blueprint zip (`mychef-hawaii-seo-blueprint.zip`) was not on this machine. Wave 1 ships the unique-corridor + unique-hero slice using DataForSEO volumes already in `data/offers.ts` (US, location code 2840, pulled 4 Sep 2026). Attach the zip to continue the remaining work verbatim.

## Wave 1 — shipped in this branch (~25%)

- Live corridor URLs on every island host (`/{slug}`), unique title / H1 / lede / FAQ / hero.
- Middleware no longer 301s those slugs to `/`. `/locations/:slug` 301s to `/:slug`.
- Island catering, wedding, and bar heroes are island-specific Grok stills.
- Eight new corridor stills (Honolulu, Kahala, Lahaina, Kīhei, Hanalei, Kapaʻa, Waimea, Waikoloa).
- XML sitemaps list master money URLs **and** corridor URLs.
- `npm run seo:audit` plus GitHub Action — uniqueness is automatic on every push.
- DataForSEO client remains `npm run seo:ping|volumes|related|snapshot` (credentials in gitignored `.env.local`).

## Wave 2 — shipped in this branch

- `/events` is its own occasion document on every island (not a catering alias). Titles do not use the catering money keywords.
- `/mobile-bar` is the 4-hour package; `/bar` is the bartender add-on. Unique stills and titles.
- Island `/about` pages with unique crew copy and stills. Hub `/about` still names the four-island company.
- Unique private-chef and vacation-chef Grok stills on every island.
- Island sitemaps now include `/about` and `/events`.
- Canonical aliases for `/events` and `/mobile-bar` removed so they self-canonicalize.

## Wave 3 — supporting documents (this branch)

The blueprint zip is still not on this machine. Wave 3 ships the catalog cells that do not cannibalize money keywords:

- Unique `/faq`, `/coverage`, `/how-it-works`, and `/menus` on every island host.
- Unique island cells: Oʻahu kamaʻāina / conventions / gold-coast / short-stay; Maui south-maui / west-maui / wedding-week; Kauaʻi hanalei-bridge / north-shore / south-shore / wedding-week; Hawaiʻi Island kohala-corridor / coffee-act-198 / ironman-weeks / east-side.
- Maui `/lahaina` stays the neighborhood URL (catalog UNIQUE `/lahaina` is not a second page).
- Hub `/corporate` and `/gatherings` no longer share a title.
- New Grok stills for every Wave 3 URL.

## Wave 4 — honesty, dinner SKUs, occasion cells (this branch)

Still no zip on this machine. Wave 4 ships the catalog service and occasion cells that do not cannibalize money keywords:

- Unique `/what-we-dont-do`, `/guest-counts`, `/dietary`, `/honeymoon-dinners`, `/chefs-table`, `/kids-menus` on every island host.
- Unique `/events/birthdays`, `/events/welcome-dinners`, `/events/retreats` on every island host, linked from `/events`.
- New Grok stills for every Wave 4 URL.

## Wave 5 — remaining occasions, gated services, catering formats (this branch)

Still no zip on this machine. Wave 5 ships the next catalog slice that does not cannibalize money keywords:

- Unique `/events/anniversaries`, `/events/corporate-events`, `/events/villa-parties`, `/events/brunch` on every island host, linked from `/events`.
- Unique `/rehearsal-dinners`, `/meal-prep`, `/cooking-classes`, `/omakase-at-home`, `/corporate-catering`, `/retreat-catering` on every island host. Meal prep and classes stay honesty/gated pages.
- Unique `/catering/bbq|plated|family-style|buffet|grazing|drop-off` on every island host. Titles are format documents (“Plated villa service on Oahu”), never “Oahu catering plated”. Drop-off is explicitly not staffed service.
- New Grok stills for every Wave 5 URL.

## Wave 6 — fine dining, staffing, menu SKUs, resident line (this branch)

Still no zip on this machine. Wave 6 ships the next catalog slice that does not cannibalize money keywords:

- Unique `/fine-dining/romantic-dinner|tasting-menu|chefs-table-evening|celebration-dinner` on every island host. Halo formats, not Michelin claims. Distinct from `/honeymoon-dinners`, `/omakase-at-home`, `/chefs-table`, and occasion pages.
- Unique `/staffing/servers|bartenders|butlers` on every island host. Quoted hourly add-ons. Distinct from `/bar` and `/mobile-bar`. Butlers stay honesty/quoted.
- Unique `/menus/three-course|family-style-menu|breakfast|lunch` on every island host. Designed per table, not a fake standing carte. Distinct from `/menus` as a process page.
- Unique `/personal-chef` on every island host as the resident household line. Does not steal `/private-chef` titles or “private chef {island}” money keywords. Oʻahu sits beside `/kamaaina`.
- New Grok stills for every Wave 6 URL.

## Wave 7 — help articles and fee stack (this branch)

Still no zip on this machine. Wave 7 ships the remaining catalog stand-in that does not cannibalize money keywords:

- Unique `/help/getting-started`, `/help/menu-guide`, `/help/wedding-guide`, `/help/corporate-guide`, `/help/managing-booking` on every island host. Distinct from `/faq`, `/how-it-works`, `/weddings`, `/corporate-catering`, `/events/corporate-events`, and `/quote`.
- Unique `/private-chef-cost` on every island host as the fee-stack explainer. Distinct from `/pricing` (“What a night costs…”). Titles never use “private chef {island}”.
- New Grok stills for every Wave 7 URL.

## Wave 8 — unique quote and pricing documents (this branch)

Still no zip on this machine. Wave 8 uniquifies the live conversion URLs that still shared hub copy:

- Unique `/quote` documents on every island host — unique H1, lede, FAQ, Grok still. Distinct from `/help/getting-started`. The five-field form stays. Kauaʻi and Hawaiʻi Island stay inquiry.
- Unique `/pricing` documents on every island host — unique stills and FAQs around the canonical rate card. Distinct from `/private-chef-cost`. Titles stay “What a night costs on …”.
- Scheduled `seo:snapshot` GitHub Action (weekly, plus workflow_dispatch). Requires `DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD` secrets. Uploads the snapshot as an artifact; does not commit secrets.

## Wave 9 — unique legal, thank-you, journal, and blog (this branch)

Still no zip on this machine. Wave 9 uniquifies the remaining cloned island documents:

- Unique `/legal` on every island host — GET and service-charge law stay statewide; weather, travel, and kitchen clauses are local. Titles never use money keywords. Distinct from `/private-chef-cost` and `/pricing`. Hub `/legal` stays the statewide notes.
- Unique `/thank-you` on every island host — noindex, unique H1, lede, next links, Grok still. Hub keeps the statewide mahalo page.
- Unique `/journal` and `/blog` index documents on every island host — unique H1, lede, still. Article lists stay island-specific. Hub directories stay statewide.
- New Grok stills for every Wave 9 URL.

## Wave 10 — unique locations, sitemaps, and first journal articles (this branch)

Still no zip on this machine. Wave 10 ships the next unique-page slice:

- Unique `/locations` directory on every island host. Middleware no longer 301s the index to home; `/locations/:slug` still 301s to `/:slug` when the slug is a live corridor. Distinct from `/coverage`.
- Unique HTML `/sitemap` documents on every island host — unique H1, lede, Grok still. Hub sitemap stays the statewide list.
- First live journal articles on every island host: `/journal/how-much-does-a-private-chef-cost` and `/journal/how-to-hire-a-private-chef`. Distinct from `/pricing`, `/private-chef-cost`, `/quote`, and `/help/getting-started`.
- New Grok stills for every Wave 10 URL.

## Wave 11 — more unique journal articles (this branch)

Still no zip on this machine. Wave 11 uniquifies four more cloned journal seeds on every island host:

- Unique `/journal/villa-kitchens` — kitchen constraint. Distinct from `/private-chef` and `/short-stay`.
- Unique `/journal/dietary-needs` — how an allergy lands on the draft. Distinct from `/dietary`.
- Unique `/journal/what-is-included` — in vs own-line. Distinct from `/private-chef` and `/pricing`.
- Unique `/journal/how-far-ahead-to-book` — peak calendar. Distinct from `/coverage` and `/quote`.
- New Grok stills for every Wave 11 URL. Titles never use money keywords.

Skipped for cannibalization: `/journal/wedding-week` (Maui/Kauaʻi already have `/wedding-week` cells), `/journal/vacation-chef-week` (overlaps `/vacation-chef`), `/journal/travel-zones` (overlaps `/coverage`).

## Wave 12 — unique dining-in blog notes (this branch)

Still no zip on this machine. Wave 12 ships live `/blog/dining-in-{corridor}` notes for every money neighborhood (20 URLs):

- Distinct from `/{slug}` corridor pages, `/locations`, `/coverage`, and Maui/Kauaʻi `/wedding-week` cells.
- Titles never use money keywords and never steal corridor titles.
- Kauaʻi `/blog/dining-in-hanalei` is the URL the host check already expected.
- Island `/blog` indexes now link live pieces only (same pattern as `/journal`).
- New Grok stills for every Wave 12 URL.

## Wave 13 — unique grocery, wine, weather, and sourcing blog notes (this branch)

Still no zip on this machine. Wave 13 uniquifies four operational blog seeds on every island host:

- Unique `/blog/grocery-at-cost` — receipts, not a markup. Distinct from `/pricing` and `/journal/what-is-included`.
- Unique `/blog/wine-and-alcohol` — bottles as their own line. Distinct from `/bar` and `/mobile-bar`.
- Unique `/blog/weather-backup` — written outdoor backup. Distinct from `/coverage`, `/legal`, and `/hanalei-bridge`.
- Unique `/blog/sourcing-honesty` — Hawaiʻi still imports most of its food. Distinct from `/what-we-dont-do` and `/coffee-act-198`.
- New Grok stills for every Wave 13 URL. Titles never use money keywords.

## Wave 14 — unique cleanup, condo, reunion, and production blog notes (this branch)

Still no zip on this machine. Wave 14 uniquifies four more operational blog seeds on every island host:

- Unique `/blog/cleanup-standard` — last hour in the kitchen. Distinct from `/private-chef` and `/journal/what-is-included`.
- Unique `/blog/condo-load-in` — freight elevators and quiet hours. Distinct from corridor pages and `/blog/dining-in-*`.
- Unique `/blog/family-reunions` — houses, not a ballroom. Distinct from `/events`, `/guest-counts`, and `/conventions`.
- Unique `/blog/photoshoot-catering` — residence kitchens, not a craft-service tent. Distinct from `/catering`.
- New Grok stills for every Wave 14 URL. Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry.

## Wave 15 — unique proposal, estate, and shoulder blog notes (this branch)

Still no zip on this machine. Wave 15 uniquifies three more operational blog seeds on every island host:

- Unique `/blog/proposal-dinners` — tables for two in the house, not a restaurant hold. Distinct from `/honeymoon-dinners` and `/fine-dining/romantic-dinner`.
- Unique `/blog/estate-logistics` — driveways, generators, gates. Distinct from `/blog/condo-load-in` and `/coverage`.
- Unique `/blog/shoulder-season` — quieter months still need a written kitchen. Distinct from `/journal/how-far-ahead-to-book`.
- New Grok stills for every Wave 15 URL. Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry.

## Wave 16 — unique chef-versus-restaurant journal notes (this branch)

Still no zip on this machine. Wave 16 uniquifies the last journal seed that does not cannibalize a live URL:

- Unique `/journal/private-chef-vs-restaurant` — the table is the house, not a restaurant hold. Distinct from `/private-chef`, `/honeymoon-dinners`, and `/what-we-dont-do`.
- New Grok stills for every Wave 16 URL. Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry.

## Wave 17 — unique dining-in notes for non-money areas (this branch)

Still no zip on this machine. Wave 17 ships live `/blog/dining-in-{area}` notes for sixteen supporting areas that are not money corridors:

- Oʻahu: Lanikai, Hawaiʻi Kai, Diamond Head, Kakaʻako
- Maui: Upcountry, Nāpili, Pāʻia, Honokōwai
- Kauaʻi: Hāʻena, Kōloa, Līhuʻe, Kalāheo
- Hawaiʻi Island: Hilo, Volcano, Keauhou, Hōlualoa

Those slugs are not live `/{slug}` corridor URLs. Notes stay distinct from the nearest dinner door, `/coverage`, `/east-side`, `/gold-coast`, `/west-maui`, `/hanalei-bridge`, and `/coffee-act-198`. Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 17 URL.

## Wave 18 — remaining non-money dining-in notes (this branch)

Still no zip on this machine. Wave 18 finishes live `/blog/dining-in-{area}` notes for every remaining `areas.ts` cell:

- Oʻahu: Downtown, Kāneʻohe, ʻEwa
- Maui: Makawao, Waikapū, Haleakalā / Kula
- Kauaʻi: Waimea, Hanapēpē, Anahola, ʻEleʻele
- Hawaiʻi Island: Kailua-Kona, Mauna Lani, Mauna Kea resort, Kaʻū, Honokaʻa, Puakō

Kauaʻi `/blog/dining-in-waimea` is west-side distance from Līhuʻe, not the Hawaiʻi Island ranch note. Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 18 URL.

## Wave 19 — unique /areas directories and honesty notes (this branch)

Still no zip on this machine. Wave 19 uniquifies remaining cloned hub/island geography and two honesty seeds:

- Unique `/areas` map-note directories on every island host. Distinct from `/locations` (live dinner doors only) and `/coverage` (zone map). Named places without a corridor URL link to `/blog/dining-in-{slug}`.
- Hub `/areas` no longer shares the `/islands` title or island-picker view.
- Hub `/about` uses its own Grok still; Kauaʻi and Hawaiʻi Island sections on that page use their island crew stills.
- Hub quote aside uses a unique still instead of the leftover villa menu-card photograph.
- Unique `/blog/named-farms` and `/blog/fish-species` on every island host. Distinct from `/blog/sourcing-honesty` and `/coffee-act-198`. Titles never use money keywords.
- New Grok stills for every Wave 19 URL.

## Wave 20 — unique contact desks and honesty registers (this branch)

Still no zip on this machine. Wave 20 uniquifies two reserved 404s on every island host:

- Unique `/contact` — how to reach the island desk. Distinct from `/quote` (the form). No second form, no invented 808 number, no street office.
- Unique `/trust` — island honesty register. Distinct from `/what-we-dont-do` (claim list), `/legal`, and hub `/trust`.
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 20 URL.

## Wave 21 — unique coffee-labeling and peak-season notes (this branch)

Still no zip on this machine. Wave 21 uniquifies two remaining honesty/calendar blog seeds on every island host:

- Unique `/blog/coffee-labeling` — coffee on this island’s invoice. Distinct from `/coffee-act-198` (Hawaiʻi Island origin rule) and `/blog/named-farms` (produce).
- Unique `/blog/peak-season` — which weeks actually compress. Distinct from `/journal/how-far-ahead-to-book` (notice windows) and `/blog/shoulder-season` (April/November).
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 21 URL.

## Wave 22 — unique island service lists (this branch)

Still no zip on this machine. Wave 22 uniquifies `/services` on every island host:

- Unique `/services` directories. Distinct from hub `/services`, from money doors (`/`, `/catering`, `/private-chef`), and from `/sitemap`.
- Hub `/services` now links to each island list.
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 22 URL.

## Wave 23 — unique help, fine-dining, and staffing indexes (this branch)

Still no zip on this machine. Wave 23 uniquifies three reserved 404s on every island host:

- Unique `/help` directories. Distinct from nested `/help/:slug` articles, `/faq`, `/how-it-works`, and `/quote`.
- Unique `/fine-dining` directories. Distinct from nested courses, `/honeymoon-dinners`, `/omakase-at-home`, and `/chefs-table`. Not a Michelin claim.
- Unique `/staffing` directories. Distinct from nested roles, `/bar`, and `/mobile-bar`.
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 23 URL.

## Wave 24 — unique no-fake-reviews notes (this branch)

Still no zip on this machine. Wave 24 uniquifies the last extra-blog seed with a distinct angle:

- Unique `/blog/no-fake-reviews` — why the guest-review count is still zero. Distinct from `/trust` (honesty register) and `/what-we-dont-do` (claim list).
- Remaining extra-blog seeds stay unpublished: they overlap live occasion, menu, staffing, and bar URLs.
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 24 URL.

## Wave 25 — unique island offsite and gathering lists (this branch)

Still no zip on this machine. Wave 25 uniquifies two reserved 404s on every island host:

- Unique `/corporate` directories. Distinct from hub `/corporate`, `/corporate-catering`, `/events/corporate-events`, and `/help/corporate-guide`.
- Unique `/gatherings` directories. Distinct from hub `/gatherings`, `/events`, `/blog/family-reunions`, and `/rehearsal-dinners`.
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 25 URL.

## Wave 26 — unique island other-host lists (this branch)

Still no zip on this machine. Wave 26 uniquifies `/islands` on every island host:

- Unique `/islands` directories. Distinct from hub `/islands` (statewide picker) and from `/areas` (map notes on this host).
- Hub `/islands` now links to each island list.
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 26 URL.

## Wave 27 — unique hub directories for island-only support paths (this branch)

Still no zip on this machine. Wave 27 ships hub pickers for paths that already 200 on island hosts but 404'd on the apex:

- Unique hub `/faq`, `/coverage`, `/contact`, `/locations`, `/menus`, `/help`, `/fine-dining`, `/staffing`.
- Distinct from the matching island-host documents, from hub `/areas` (map notes), and from hub `/journal` / `/blog` pickers.
- Titles never use money keywords. Each page is a four-island picker with its own Grok still.

## Wave 28 — unique hub pickers for island-only service documents (this branch)

Still no zip on this machine. Wave 28 ships hub pickers for shared island-only service and honesty paths that already 200 on island hosts but 404'd on the apex:

- Unique hub `/events`, `/what-we-dont-do`, `/guest-counts`, `/dietary`, `/honeymoon-dinners`, `/chefs-table`, `/kids-menus`, `/personal-chef`, `/private-chef-cost`, `/meal-prep`, `/cooking-classes`, `/omakase-at-home`, `/rehearsal-dinners`, `/retreat-catering`, `/corporate-catering`.
- Distinct from matching island-host documents and from hub `/corporate`, `/gatherings`, `/private-chef`, `/weddings`, `/pricing`.
- Titles never use money keywords. Each page is a four-island picker with its own Grok still.

## Wave 29 — unique hub pickers for nested island SKUs (this branch)

Still no zip on this machine. Wave 29 ships hub pickers for nested occasion, catering-format, fine-dining, staffing, menu-SKU, and help URLs that already 200 on island hosts but 404'd on the apex (29 URLs).

- Distinct from parent hub pickers (`/events`, `/catering`, `/fine-dining`, `/staffing`, `/menus`, `/help`) and from matching island-host documents.
- Titles never use money keywords. Each page is a four-island picker with its own Grok still.

## Wave 30 — unique hub pickers for shared journal and blog notes (this branch)

Still no zip on this machine. Wave 30 ships hub pickers for journal and shared-blog URLs that already 200 on every island host but 404'd on the apex (23 URLs).

- Journal: `/journal/how-much-does-a-private-chef-cost`, `/journal/how-to-hire-a-private-chef`, `/journal/villa-kitchens`, `/journal/dietary-needs`, `/journal/what-is-included`, `/journal/how-far-ahead-to-book`, `/journal/private-chef-vs-restaurant`.
- Shared blogs: `/blog/grocery-at-cost`, `/blog/wine-and-alcohol`, `/blog/weather-backup`, `/blog/sourcing-honesty`, `/blog/cleanup-standard`, `/blog/condo-load-in`, `/blog/family-reunions`, `/blog/photoshoot-catering`, `/blog/proposal-dinners`, `/blog/estate-logistics`, `/blog/shoulder-season`, `/blog/named-farms`, `/blog/fish-species`, `/blog/coffee-labeling`, `/blog/peak-season`, `/blog/no-fake-reviews`.
- Dining-in blogs stay island-only. Extra-blog seeds that overlap live SKUs stay unpublished.
- Distinct from parent hub `/journal` and `/blog` indexes and from matching island-host documents.
- Titles never use money keywords. Each page is a four-island picker with its own Grok still.

## Wave 31 — zip execution

- Open the blueprint zip. Stop inventing page lists. Build every remaining URL it names.
- Schema, FAQ, and sample-menu expansions the zip specifies beyond the catalog stand-in.
- Hub vs island keyword split exactly as the zip writes it.

## Wave 32 — automation that stays on

- `seo:audit` in CI (this branch).
- Scheduled `seo:snapshot` Action shipped in Wave 8 — add `DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD` GitHub secrets to turn it on. Do not commit secrets.
- Search Console / indexation pass after Wave 1 is on `main`: inspect one corridor URL per island, then the rest.
- Keep `*.mychef-hawaii.com` attached on the Vercel project so island hosts never 404.

## Wave 33 — supporting-area unique cells (this branch)

Still no zip on this machine. Wave 33 ships unique `/{slug}` dinner doors for supporting areas that already had `/blog/dining-in-{slug}` kitchen notes but 404'd at the place URL (32 cells). These are unique cells, **not** money corridors — null-volume place names stay out of money titles, and they are not added to middleware `CORRIDORS`.

- Oʻahu: `/lanikai`, `/hawaii-kai`, `/diamond-head`, `/kakaako`, `/downtown`, `/kaneohe`, `/ewa`.
- Maui: `/upcountry`, `/napili`, `/paia`, `/makawao`, `/honokowai`, `/waikapu`, `/haleakala`.
- Kauaʻi (inquiry): `/haena`, `/koloa`, `/lihue`, `/kalaheo`, `/waimea`, `/hanapepe`, `/anahola`, `/eleele`.
- Hawaiʻi Island (inquiry): `/kailua-kona`, `/keauhou`, `/mauna-lani`, `/mauna-kea`, `/hilo`, `/volcano`, `/kau`, `/honokaa`, `/holualoa`, `/puako`.
- Distinct from money corridors, from `/gold-coast` / `/east-side` / `/kohala-corridor`, and from matching dining-in blogs (kitchen notes stay).
- `/areas` lists supporting cells as live dinner doors; dining-in blogs remain kitchen notes.
- New Grok stills for every Wave 33 URL. Kauaʻi and Hawaiʻi Island stay inquiry. Hilo / Volcano / Kaʻū stay quote-only dedicated days.

## Wave 34 — extra-blog kitchen notes beside live SKUs (this branch)

Still no zip on this machine. Wave 34 ships the remaining extra-blog seeds as unique kitchen notes beside live SKUs (11 slugs × 4 islands = 44 articles, plus 11 hub pickers). They do not steal occasion, menu, staffing, or bar titles.

- `/blog/anniversary-dinners` beside `/events/anniversaries`
- `/blog/kids-at-the-table` beside `/kids-menus`
- `/blog/breakfast-in-the-villa` beside `/menus/breakfast`
- `/blog/lunch-service` beside `/menus/lunch`
- `/blog/staffing-servers` beside `/staffing/servers`
- `/blog/bartender-add-on` beside `/bar`
- `/blog/welcome-dinner` beside `/events/welcome-dinners`
- `/blog/day-after-brunch` beside `/events/brunch`
- `/blog/rehearsal-dinner` beside `/rehearsal-dinners`
- `/blog/corporate-offsites` beside `/events/corporate-events`
- `/blog/retreat-full-board` beside `/retreat-catering`
- Hub pickers for each slug. Dining-in blogs stay island-only.
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 34 URL.

## Wave 35 — remaining journal kitchen notes beside live SKUs (this branch)

Still no zip on this machine. Wave 35 ships the remaining journal seeds as unique kitchen notes beside live SKUs (3 slugs × 4 islands = 12 articles, plus 3 hub pickers). They do not steal wedding, vacation-chef, or coverage titles.

- `/journal/wedding-week` beside `/weddings` (and Maui/Kauaʻi `/wedding-week` cells)
- `/journal/vacation-chef-week` beside `/vacation-chef`
- `/journal/travel-zones` beside `/coverage`
- Hub pickers for each slug. Dining-in blogs stay island-only.
- Island switcher treats `/journal/wedding-week` as a four-island nested key so it does not collide with Maui/Kauaʻi `/wedding-week` cells.
- Titles never use money keywords. Kauaʻi and Hawaiʻi Island stay inquiry. New Grok stills for every Wave 35 URL.

## Wave 36 — quieter unique-document chrome (this branch)

Still no zip on this machine. Wave 36 tightens the unique-page template used by cells, journals, blogs, SKUs, and corridor documents:

- Unique documents no longer repeat the cell name as a second H2, then a related strip, then a generic money-nav cluster.
- Body copy and related island links sit in one paper column after the hero. FAQ and the quote closer stay.
- Money corridor pages keep a unique “how a booking runs” heading and the island money links.

## Wave 37 — leftover luxury chrome on hub money pages (this branch)

Still no zip on this machine. Wave 37 finishes type-on-photography on hub money-adjacent pages that still used paper cards or TypePanel on the still:

- Hub `/private-chef` and `/vacation-chef` use cinematic heroes plus a 4-up island photo picker.
- Hub `/catering` island picker is the same photo 4-up, not paper tiles.
- Hub `/weddings` island strips and hub `/islands` full-bleed rows put type on the photograph with scrims. Quote-form TypePanel stays — that is a WCAG paper field, not homepage chrome.
- Island `/vacation-chef` adds a body column and related links so the SKU is not only a hero plus generic money nav.

## Wave 38 — leftover bar chrome (this branch)

Still no zip on this machine. Wave 38 finishes type-on-photography leftovers on the bar money pages:

- Hub `/bar` and `/mobile-bar` island pickers are photo 4-ups with published starting prices, not paper tariff rows.
- Island `/bar` and `/mobile-bar` add a body column and related links so the SKU is not only a hero plus FAQ.
- Hub `/about` hero quote button matches the paper-on-photo treatment.

## Wave 39 — hub rate card chrome + paper quote buttons on remaining heroes (this branch)

Still no zip on this machine. Wave 39 finishes leftover type-on-photography on the rate card and remaining unique-document heroes:

- Hub `/pricing` uses a cinematic hero plus a 4-up island picker. The published tariff table stays so islands can still be compared on one page.
- Island money and unique-document heroes that still used an ink quote button on the photograph now use the paper button (`variant="light"`). Quote-form TypePanel stays.

## Wave 40 — photo pickers on unique hub directories (this branch)

Still no zip on this machine. Wave 40 replaces paper island tiles on unique hub pickers with the same 4-up photography used on money pages:

- All 89 hub directory URLs (support, nested SKUs, journal/blog pickers) open island documents from selector stills.
- Hub `/areas`, `/journal`, `/blog`, `/services`, `/corporate`, and `/gatherings` use the same picker.
- Homepage island chooser shares that component. Quote-form TypePanel stays.

## Wave 41 — cinematic heroes on remaining paper hub indexes (this branch)

Still no zip on this machine. Wave 41 puts type on photography on the leftover statewide indexes that still opened as paper H1s:

- Hub `/how-it-works`, `/trust`, `/legal`, `/areas`, `/journal`, `/blog`, `/services`, `/islands`, and `/quote` use cinematic heroes and unique Grok stills (unused plates, papers, brass; no readable text).
- Hub `/how-it-works`, `/trust`, and `/legal` also open the matching island document from the 4-up picker.
- Hub `/islands` keeps full-bleed home rows and opens each island `/islands` list from photography, not paper tiles.
- Island `/islands` other-host lists use the same full-bleed selector stills. Quote-form TypePanel stays.

## Wave 42 — island directory lists on existing photography (this branch)

Still no zip on this machine. Wave 42 lifts island-host directory lists off paper tiles onto the stills those documents already use:

- `/locations`, `/areas`, `/services`, `/help`, `/fine-dining`, `/staffing`, `/corporate`, `/gatherings`.
- Island `/journal` and `/blog` indexes open live pieces from photography.
- `stillForPath` is the shared lookup OG images already used. Quote-form TypePanel stays.

## Wave 43 — leftover paper doors onto photography (this branch)

Still no zip on this machine. Wave 43 lifts the remaining paper lists and inset stills onto the same photography language:

- Hub `/services` four statewide doors are a 4-up photo grid (private chef, catering, weddings, bar).
- Island `/events` occasion lists use `DocumentPhotoGrid`.
- Island catering format lists use `DocumentPhotoGrid`. Hub `/catering` opens the six format pickers (`/catering/bbq|plated|family-style|buffet|grazing|drop-off`) from photography.
- Hub and island `/thank-you` use a cinematic short hero. Optional follow-up form stays on paper. New hub still `hub-thanks.png`.
- Unused `gsap` dependency removed. Quote-form TypePanel stays.

## Wave 44 — nested hub pickers onto photography (this branch)

Still no zip on this machine. Wave 44 lists nested hub pickers from photography on parent indexes that already owned those URLs:

- Hub `/events`, `/fine-dining`, `/staffing`, `/menus`, and `/help` open their nested pickers from stills, then the island document.
- Hub `/catering` format doors share `HubPhotoGrid`. Hub `/services` four doors use the same component.
- Hub `/corporate` and `/gatherings` use unique Grok stills and photo doors to existing pickers (`/events/retreats`, `/corporate-catering`, `/events/corporate-events`, `/events/birthdays`, `/rehearsal-dinners`, `/events/villa-parties`). No new URLs.
- Quote-form TypePanel stays. Coverage/zones and the HTML sitemap stay paper.

## Wave 45 — mobile-bar keyword + leftover wedding stills (this branch)

Still no zip on this machine. Wave 45 puts the measured `mobile bar hawaii` (20) title on hub `/mobile-bar` and stops hub `/bar` from stealing it:

- Hub `/mobile-bar` title is `Mobile bar Hawaii | 4-hour villa package`. Hub `/bar` is the bartender add-on.
- Hub `/mobile-bar` uses a unique Grok still (`hub-mobile-bar.png`), not the `/bar` hero.
- Hub `/weddings` island bleed rows use the existing island wedding Grok stills instead of leftover JPEGs.
- Quote-form TypePanel stays. No new URLs.

## Wave 46 — leftover hub OG stills + Grok island pickers (this branch)

Still no zip on this machine. Wave 46 stops leftover hub money pages from sharing the homepage Open Graph still, and lifts island pickers off leftover JPEGs:

- Hub `/bar`, `/weddings`, `/catering`, `/services`, `/how-it-works`, `/quote`, `/trust`, `/legal`, `/areas`, `/journal`, `/blog`, `/islands`, `/private-chef`, `/vacation-chef`, and `/about` use the same unique still as the page hero for Open Graph.
- Island selector stills on every hub/island picker are the Grok island heroes, not leftover JPEGs.
- Hub homepage cores, `/services` four doors, and hub `/private-chef` / `/vacation-chef` heroes use existing Grok money stills instead of leftover JPEGs.
- Quote-form TypePanel stays. No new URLs.

## Wave 47 — leftover corridor Grok stills (this branch)

Still no zip on this machine. Wave 47 replaces leftover JPEG heroes on the twelve money corridors that still used campaign JPEGs:

- Oʻahu `/waikiki`, `/kailua`, `/north-shore`, `/ko-olina`.
- Maui `/wailea`, `/kaanapali`, `/kapalua`, `/makena`.
- Kauaʻi `/princeville` (north) and `/poipu` (south) corridor stills.
- Hawaiʻi Island `/kona` and `/kohala` corridor stills.
- Hub `/pricing` uses a unique unused-plates still for the hero and Open Graph, not the leftover menu-card JPEG.
- Quote-form TypePanel stays. No new URLs.

## Wave 48 — island /bar H1s stay off the mobile-bar keyword (this branch)

Still no zip on this machine. Wave 48 finishes the `/bar` vs `/mobile-bar` split on island hosts:

- Maui `/bar` H1 is the bartender add-on, not “Mobile bar…”. The four-hour package stays on `/mobile-bar`.
- Island `/bar` FAQs name `/mobile-bar` as the packaged cart instead of treating the add-on as that package.
- Quote-form TypePanel stays. No new URLs.

## Wave 49 — island-home corridors on photography (this branch)

Still no zip on this machine. Wave 49 lifts leftover paper doors on island homepages onto existing Grok stills:

- Island-home private chef and catering doors use the island `/private-chef` and `/catering` stills.
- Named corridors open from a `DocumentPhotoGrid` of the unique corridor stills. Coverage/locations stay paper honesty lists.
- Quote-form TypePanel stays. No new URLs.

## Wave 50 — hub journal and blog indexes on photography (this branch)

Still no zip on this machine. Wave 50 lists the existing hub editorial pickers on `/journal` and `/blog` as photography, matching the island indexes:

- Hub `/journal` opens the ten statewide journal notes from their unique stills, then the island journals.
- Hub `/blog` opens the twenty-seven shared kitchen notes from their unique stills, then the island guides.
- Quote-form TypePanel stays. No new URLs.

## Wave 51 — leftover related lists on photography (this branch)

Still no zip on this machine. Wave 51 lifts two leftover paper related-document lists onto existing stills:

- Island `/vacation-chef` related doors (`/private-chef`, `/personal-chef`, `/journal/vacation-chef-week`) open from a `DocumentPhotoGrid`.
- Island `/islands` geography doors use the `/locations` and `/areas` stills. Coverage stays paper.
- Quote-form TypePanel stays. No new URLs.

## Wave 52 — island bar related lists and unique-cell related doors (this branch)

Still no zip on this machine. Wave 52 lifts leftover paper related-document lists onto existing stills:

- Island `/bar` and `/mobile-bar` related doors open from a `DocumentPhotoGrid` (`/bar`, `/mobile-bar`, `/weddings`, `/private-chef`).
- Unique cells, journals, blogs, and SKUs that already publish `related` open those URLs from photography instead of paper underlines.
- Coverage/locations stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 53 — island /menus and /how-it-works document lists (this branch)

Still no zip on this machine. Wave 53 lifts leftover paper SKU and help lists onto existing stills:

- Island `/menus` opens the four menu SKUs from a `DocumentPhotoGrid`. The sample three-course stays paper.
- Island `/how-it-works` opens the help articles and `/private-chef-cost` from photography. Process steps stay paper.
- Coverage/locations stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 54 — hub /areas and /islands geography doors (this branch)

Still no zip on this machine. Wave 54 gives hub geography indexes the same pair as island `/islands`:

- Hub `/areas` opens `/locations` and `/islands` from existing stills, then the island map-notes picker.
- Hub `/islands` opens `/locations` and `/areas` from existing stills after the host bleed rows.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 55 — measured keywords on the URLs that own them (this branch)

Still no zip on this machine. Wave 55 stops leftover titles from stuffing island money keywords onto the wrong documents:

- Hub `/islands` is the host picker. It no longer titles as “Private chef Oahu, Maui, Kauai & Big Island”.
- Hub `/services` no longer titles on `mobile bar hawaii`. That phrase stays on hub `/mobile-bar`.
- Island `/personal-chef` takes the measured household phrases (`personal chef honolulu`, `personal chef maui`). Island `/private-chef` is the visitor-dinner document and no longer uses those titles.
- `MASTER_KEYWORDS` maps remaining measured long-tails onto live corridors (`/honolulu`, `/kona`, `/lahaina`, `/north-shore`, `/poipu`) and `/mobile-bar`.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 56 — visitor-dinner copy stays off the household week (this branch)

Still no zip on this machine. Wave 56 finishes the Wave 55 split on island `/private-chef`:

- Island `/private-chef` hero ledes are visitor dinners. Weekly household cooking stays on `/personal-chef`.
- Oahu longform and FAQ no longer sell the kamaʻāina week as this page’s product. `/kamaaina` and `/personal-chef` keep that door.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 57 — hub /private-chef and Oahu /vacation-chef stay off the household week (this branch)

Still no zip on this machine. Wave 57 finishes leftover titles that still sold the household line on the wrong URL:

- Hub `/private-chef` is the visitor-dinner picker, not “Personal chef for Hawaii villas.” Island `/personal-chef` keeps `personal chef honolulu` and `personal chef maui`.
- Oahu `/vacation-chef` is the Stay Chef villa week. Weekly household cooking stays on `/personal-chef` and `/kamaaina`.
- `seo:audit` fails if those leftover titles return.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 58 — catalog fallback titles and hub /how-it-works doors (this branch)

Still no zip on this machine. Wave 58 stops catalog and location fallback titles from being able to ship money keywords, and gives hub `/how-it-works` the same related-document photography as island `/how-it-works`:

- Catalog `entry()` titles are `${label} on ${island} | myCHEF`. They never use `Private chef & catering`. Kauaʻi `/north-shore` catalog lede no longer stuffs `Private chef Kauai`.
- Location and area SEO fallbacks are kitchen/map notes, not `private chef {place}`. Middleware still 301s those URLs; the strings cannot ship if a rewrite ever misses.
- `seo:audit` fails if those leftover templates return.
- Hub `/how-it-works` opens `/faq`, `/coverage`, `/quote`, and `/pricing` on existing stills. Process steps stay paper. Help articles stay on `/help`. No new URLs.

## Wave 59 — hub and island /trust honesty doors (this branch)

Still no zip on this machine. Wave 59 gives `/trust` the same related-document photography as `/how-it-works`, without turning the proof register into tiles:

- Hub `/trust` opens `/what-we-dont-do`, `/blog/no-fake-reviews`, `/legal`, and `/faq` on existing stills. The proof list stays paper. Island honesty registers stay on the island host.
- Island `/trust` opens the same four URLs on island stills. Distinct from `/how-it-works` (process doors) and from `/help`.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 60 — hub /legal off the leftover catering phrase (this branch)

Still no zip on this machine. Wave 60 stops hub `/legal` from shipping `private chef & catering` and gives booking notes the same related-document photography as `/trust`:

- Hub `/legal` title is “Booking notes — quotes, GET, deposits.” `seo:audit` fails if the leftover catering phrase returns.
- Hub and island `/legal` open `/quote`, `/pricing`, `/private-chef-cost`, and `/trust` on existing stills. Distinct from `/how-it-works` (process) and `/trust` (honesty). Clause lists and the fee-stack paper list stay paper.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 61 — journal, blog, and hub /how-it-works titles stay off money keywords (this branch)

Still no zip on this machine. Wave 61 stops leftover index titles from sitting on `private chef {island}` and `private chef hawaii`:

- Island `/journal` and `/blog` titles are corridor/kitchen indexes. Island homes keep `private chef {island}`.
- Hub `/how-it-works` is “How a booking works in Hawaii.” Hub `/` keeps `private chef hawaii`.
- `seo:audit` fails if those leftover titles return.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 62 — island /contact desk doors (this branch)

Still no zip on this machine. Wave 62 gives island `/contact` the same related-document photography as `/legal` and `/trust`:

- Island `/contact` opens `/quote`, `/help/getting-started`, `/how-it-works`, and `/faq` on existing stills. The desk copy stays. Hub `/contact` stays the four-island picker.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 63 — hub and island /quote related doors (this branch)

Still no zip on this machine. Wave 63 gives `/quote` the same related-document photography as `/contact`, without turning the form into tiles:

- Hub `/quote` opens `/contact`, `/pricing`, `/how-it-works`, and `/faq` on existing stills. Island forms stay on the island host.
- Island `/quote` opens `/contact`, `/pricing`, `/how-it-works`, and `/help/getting-started` on island stills. Distinct from `/contact` (the desk). The five-field form and TypePanel stay. SiblingCluster stays paper.
- Coverage/locations honesty lists stay paper. No new URLs.

## Wave 64 — hub and island /pricing related doors (this branch)

Still no zip on this machine. Wave 64 gives `/pricing` related-document photography without turning the rate card into tiles:

- Hub `/pricing` opens `/quote`, `/private-chef-cost`, `/legal`, and `/menus` on existing stills. Island rate cards stay on the island host. The published table stays paper.
- Island `/pricing` opens the same four paths on island stills. Distinct from `/quote` (the form) and `/private-chef-cost` (the stack). SiblingCluster stays paper.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 65 — island /faq related doors (this branch)

Still no zip on this machine. Wave 65 gives island `/faq` related-document photography. Hub `/faq` stays the four-island picker.

- Island `/faq` opens `/quote`, `/contact`, `/how-it-works`, and `/coverage` on existing stills. The questions stay. Distinct from `/contact` (the desk) and `/how-it-works` (the process + help articles).
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. SiblingCluster stays paper. No new URLs.

## Wave 66 — hub and island /about related doors (this branch)

Still no zip on this machine. Wave 66 gives `/about` related-document photography. The brigade copy, island crew stills, and LocationsBlock stay as they are.

- Hub `/about` opens `/trust`, `/legal`, `/contact`, and `/how-it-works` on existing stills after the paper locations list. Island departments stay on the island host.
- Island `/about` opens the same four paths on island stills. Distinct from `/faq` (questions) and `/trust` (honesty register). SiblingCluster stays paper.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 67 — hub and island /private-chef related doors (this branch)

Still no zip on this machine. Wave 67 gives `/private-chef` related-document photography without stealing the visitor-dinner title:

- Hub `/private-chef` keeps the four-island picker, then opens `/personal-chef`, `/vacation-chef`, `/quote`, and `/pricing` on existing stills.
- Island `/private-chef` opens the same four paths on island stills. Distinct from `/personal-chef` (household week) and `/vacation-chef` (Stay Chef). SiblingCluster stays paper.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 68 — hub and island /weddings related doors (this branch)

Still no zip on this machine. Wave 68 gives `/weddings` related-document photography without turning the island bleed stills or the wedding-catering titles into tiles:

- Hub `/weddings` keeps the four-island bleed stills, then opens `/catering`, `/events`, `/quote`, and `/mobile-bar` on existing stills.
- Island `/weddings` opens the same four paths on island stills. Distinct from `/catering` (the larger room) and `/events` (occasions). SiblingCluster stays paper.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 69 — hub and island /catering related doors (this branch)

Still no zip on this machine. Wave 69 gives `/catering` related-document photography without turning formats or the published price cards into tiles:

- Hub `/catering` keeps the island picker, format documents, and paper rate cards, then opens `/weddings`, `/events`, `/quote`, and `/staffing` on existing stills.
- Island `/catering` opens the same four paths on island stills. Distinct from `/weddings` (the week) and from format SKUs. Sample menu and price cards stay paper. SiblingCluster stays paper.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 70 — hub /vacation-chef related doors (this branch)

Still no zip on this machine. Wave 70 gives hub `/vacation-chef` the same related-document photography as hub `/private-chef`. Island Stay Chef pages already open related documents.

- Hub `/vacation-chef` keeps the four-island picker, then opens `/private-chef`, `/personal-chef`, `/quote`, and `/pricing` on existing stills. Distinct from `/private-chef` (one dinner).
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. SiblingCluster stays paper. No new URLs.

## Wave 71 — island /coverage related doors (this branch)

Still no zip on this machine. Wave 71 gives island `/coverage` related-document photography without turning the zone list into tiles. Hub `/coverage` stays the four-island picker.

- Island `/coverage` opens `/locations`, `/areas`, `/quote`, and `/how-it-works` on existing stills after the paper zone list. Neighborhood and unique-cell honesty links stay paper.
- Distinct from `/faq` (questions) and `/locations` (live dinner doors). SiblingCluster stays paper. No new URLs.

## Wave 72 — hub /bar and /mobile-bar related doors (this branch)

Still no zip on this machine. Wave 72 gives hub `/bar` and hub `/mobile-bar` related-document photography after the island pickers. Island bar pages already open related documents.

- Hub `/bar` keeps the four-island picker for the terrace hour, then opens `/mobile-bar`, `/weddings`, `/private-chef`, and `/quote` on existing stills. The packaged-cart card is titled “The packaged cart” so it cannot steal `mobile bar hawaii`.
- Hub `/mobile-bar` keeps the statewide title and island picker, then opens `/bar`, `/weddings`, `/private-chef`, and `/quote`. Distinct from `/bar` (the add-on hour).
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. SiblingCluster stays paper. No new URLs.

## Wave 73 — hub and island /events related doors (this branch)

Still no zip on this machine. Wave 73 gives `/events` related-document photography without turning occasion documents into the catering keyword.

- Hub `/events` keeps the four-island picker, then opens `/catering`, `/weddings`, `/quote`, and `/mobile-bar` on existing stills. The packaged-cart card is titled “The packaged cart” so it cannot steal `mobile bar hawaii`.
- Island `/events` keeps the occasion-document grid, then opens the same four paths on island stills. Distinct from `/catering` (the staffed room) and `/weddings` (the week). SiblingCluster stays paper. No new URLs.

## Wave 74 — money-corridor related doors (this branch)

Still no zip on this machine. Wave 74 gives every live money-corridor dinner door related-document photography. Unique cells already open related documents. Corridor titles stay `Private chef {place}`.

- After the corridor copy, `/{slug}` opens `/private-chef`, `/catering`, `/quote`, and `/coverage` on existing stills. Card labels never use island money keywords.
- Distinct from `/` (the island home) and from `/locations` (the live-door list). SiblingCluster stays paper. No new URLs.

## Wave 75 — hub /personal-chef related doors (this branch)

Still no zip on this machine. Wave 75 gives hub `/personal-chef` related-document photography after the island picker. Island household pages already open related documents. Titles stay off `personal chef honolulu` / `personal chef maui`.

- Hub `/personal-chef` keeps the four-island picker, then opens `/private-chef`, `/vacation-chef`, `/quote`, and `/pricing` on existing stills. Distinct from `/private-chef` (one dinner) and `/vacation-chef` (the villa week).
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. SiblingCluster stays paper. No new URLs.

## Wave 76 — geography related doors (this branch)

Still no zip on this machine. Wave 76 closes the geography loop that Wave 71 opened from `/coverage`. Dinner-door lists and map notes stay the page’s job.

- Island `/locations` keeps the corridor photo grid, then opens `/areas`, `/coverage`, `/quote`, and `/how-it-works`.
- Island `/areas` keeps the place grid and dining-in notes, then opens `/locations`, `/coverage`, `/quote`, and `/how-it-works`.
- Hub `/locations` keeps the four-island picker, then opens the same four statewide doors. Hub `/areas` already names `/locations` and `/islands`, then opens `/coverage`, `/quote`, `/how-it-works`, and `/faq`.
- Zone lists on `/coverage` stay paper. SiblingCluster stays paper. No new URLs.

## Wave 77 — hub /services related doors (this branch)

Still no zip on this machine. Wave 77 gives hub `/services` related-document photography after the island picker. The four statewide doors stay the page’s job. Island `/services` already opens the full host list.

- Hub `/services` keeps private chef, catering, weddings, and bar, then opens `/vacation-chef`, `/mobile-bar` (“The packaged cart”), `/personal-chef` (“Household line”), and `/quote`. The lede already names Stay Chef and the four-hour cart; those URLs now open from photography.
- Titles stay off `mobile bar hawaii` and `personal chef honolulu`. Island service lists stay on the island host.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. SiblingCluster stays paper. No new URLs.

## Wave 78 — hub /corporate and /gatherings related doors (this branch)

Still no zip on this machine. Wave 78 gives hub `/corporate` and `/gatherings` related-document photography after the island picker. Nested occasion SKUs stay the page’s job. Island `/corporate` and `/gatherings` already open their host lists.

- Hub `/corporate` keeps villa retreats, crew catering, and board dinners, then opens `/catering`, `/events`, `/staffing`, and `/quote`.
- Hub `/gatherings` keeps birthdays, rehearsal dinners, and family villa weeks, then opens `/catering`, `/weddings` (“Wedding week”), `/events`, and `/quote`. The lede already names `/weddings`; that URL now opens from photography.
- Titles stay off `hawaii catering` and `wedding catering hawaii`. Island nested indexes stay SKU lists. No new URLs.

## Wave 79 — hub /contact related doors (this branch)

Still no zip on this machine. Wave 79 gives hub `/contact` related-document photography after the island picker. Island desks already open related documents. This page stays how to reach a coordinator.

- Hub `/contact` keeps the four-island picker, then opens `/quote`, `/help/getting-started`, `/how-it-works`, and `/faq` (“FAQ”, not “Questions, by island”). Distinct from `/quote` (the form) and from `/help` (the help-desk picker).
- Hub `/faq` and `/coverage` stay four-island pickers. Island `/contact` already opens the same four paths on island stills.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. SiblingCluster stays paper. No new URLs.

## Wave 80 — hub and island /islands related doors (this branch)

Still no zip on this machine. Wave 80 closes the geography loop from the host picker. Bleed rows and the locations/areas grid stay the page’s job.

- Hub `/islands` keeps the four-island bleed rows and the locations/areas geography grid, then opens `/coverage`, `/quote`, `/how-it-works`, and `/faq` (“FAQ”).
- Island `/islands` keeps the other-host bleed rows and the same two geography doors, then opens `/coverage`, `/quote`, `/how-it-works`, and `/faq`.
- Zone lists on `/coverage` stay paper. Hub `/faq` stays a four-island picker. No new URLs.

## Wave 81 — fold leftover related searches into existing FAQs (this branch)

Still no zip on this machine. Wave 81 folds DataForSEO related searches from `RELATED_SEARCHES` into live FAQs. No new URLs. No invented volumes. Titles stay off those phrases.

- Maui `/` names “maui private chefs” as a related search, not a roster. Named-chef impersonations stay on `/what-we-dont-do`.
- Hawaiʻi Island `/` names “private chef big island hawaii” on the existing Big Island / Hawaiʻi Island FAQ.
- Oahu `/catering` names “best catering oahu”. Oahu `/private-chef` names “private chef at home”. Oahu `/events` names “hire a chef for a party”.
- Kauaʻi `/princeville` names “private chef princeville kauai”. `/south-shore` names “south shore chef kauai”. “kauai catering menu”, “lotus chefs maui”, and “elite maui chef” were already on live FAQs.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 82 — fold leftover snapshot related searches into live FAQs (this branch)

Still no zip on this machine. Wave 82 folds leftover DataForSEO snapshot `related` phrases into live FAQs. No new URLs. No invented volumes. Titles stay off those phrases. Competitor names and off-island noise stay on `/what-we-dont-do`.

- Oahu `/honolulu` names “honolulu catering”. `/coverage` names “private chef near me”. `/private-chef` names “private chef for a dinner party”. `/personal-chef` names “personal chef to cook in my home” / “hire a chef for home”. `/events` names “party catering oahu”. `/catering` names “cheap catering oahu”. `/menus` names “honolulu catering menus with prices”. `/guest-counts` names “small catering honolulu”. `/what-we-dont-do` names Filipino catering and bento. `/weddings` names “affordable wedding catering oahu”.
- Maui `/catering` names “affordable catering maui”. Kauaʻi `/what-we-dont-do` names “farm cook kauai”.
- Maui honesty FAQs that still said “Related searches, not us” now name Lotus Chefs / elite Maui chef on `/what-we-dont-do`, `/fine-dining/tasting-menu`, and `/omakase-at-home`.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 83 — uniquify concatenated catering and hub FAQs (this branch)

Still no zip on this machine. Wave 83 uniquifies FAQ lists that were concatenated on the same page. No new URLs. Titles stay off money keywords.

- Island `/catering` concatenates offer FAQs with longform FAQs. Longform no longer repeats “How much is {island} catering?”. Maui longform no longer repeats sushi-forward or the Wailea/Kīhei band question. Kauaʻi longform no longer repeats buffet-versus-plated or the catering-menu PDF. Hawaiʻi Island longform no longer repeats the food-band or Kona–Hilo same-day questions.
- Hub `/catering` concatenates `HUB_CATERING.faqs` with `hubCateringFaqs`. Longform no longer repeats “How much is Hawaii catering?”, “Which island should I open?”, or the menu-PDF question.
- Hub `/` concatenates `hubFaqs` with `hubHomeFaqs`. Longform no longer repeats the statewide price, island list, or Airbnb questions.
- Oahu home and hub copy no longer claim neighborhood corridors are “not their own URLs”. `/honolulu`, `/waikiki`, `/kahala`, and `/kona` are live corridor URLs on the island hosts. Hub `/quote` no longer says Kona is “not a /kona page”. Unused `hubPricingFaqs` (never rendered) is removed so it cannot re-duplicate the hub home price FAQ.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 84 — island-home H2s stop stealing corridor titles (this branch)

Still no zip on this machine. Wave 84 uniquifies island-home longform so corridor titles stay on corridor URLs. No new URLs. Home titles stay `private chef {island}`.

- Oahu `/` H2 “Private chef Honolulu” is now “Honolulu residences” and names `/honolulu`. “Personal chef Oahu” is now “Weekly households” and names `/personal-chef`.
- Maui `/` no longer claims neighborhood names “are not destination URLs”; it names `/wailea`, `/lahaina`, and `/kaanapali`. “Private chef Maui cost” is now “What a Maui night costs” and names `/private-chef-cost`.
- Hawaiʻi Island `/` H2 “Private chef Kona” is now “Kona and the west-side shop” and names `/kona`. Copy no longer says Kona “is not a path of its own.”
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 85 — hub /pricing H2 stops stealing private chef Hawaii (this branch)

Still no zip on this machine. Wave 85 uniquifies hub `/pricing` longform so `private chef hawaii` stays on hub `/`. No new URLs. Hub `/pricing` title stays “What a night costs”.

- Hub `/pricing` H2 “Private chef Hawaii cost” is now “The statewide band, then a written quote”. Body still names the related search and points at hub `/` and `/private-chef-cost`.
- The FAQ “Private chef Hawaii cost — what is actually on the quote?” stays on this tariff page as a related-search question, not a second title.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No new URLs.

## Wave 86 — nested-index FAQs stop cloning across islands (this branch)

Still no zip on this machine. Wave 86 uniquifies nested island indexes so Hawaiʻi Island `/fine-dining`, `/gatherings`, `/corporate`, `/staffing`, `/help`, and `/services` no longer share one Hilo FAQ, and Oahu/Maui staffing and help no longer share identical `/bar` and `/faq` answers. No new URLs. Extra-blog note FAQs still clone across four islands (titles/H1s already unique) — later leftover, not this wave.

- Fine-dining “Same as honeymoon dinner?” now names Kahala, Wailea, both-shore inquiry, or the west-side two-top.
- Hawaiʻi Island Hilo FAQs now name the index job: west-side villa formats, house gatherings, villa offsites, hourly add-ons, first-inquiry documents, or service names.
- Staffing “Same as /bar?” now names Gold Coast, Wailea, both-shore inquiry, or west-side host.
- Help “Same as /faq?” now names the corridor, the shore, both-shore inquiry, or the west-side desk.
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. Nested SKU indexes stay SKU photo grids — no related-door photography. No new URLs.

## Wave 87 — extra-blog FAQs stop cloning across islands (this branch)

Still no zip on this machine. Wave 87 uniquifies the 11 extra-blog kitchen notes so FAQ answers name Kahala, Wailea, Princeville, or Waikoloa instead of cloning one sentence four times. Titles, H1s, ledes, and photos were already unique. No new URLs. `blogArticles.ts` still has some leftover clones (mostly live vs inquiry pairs) — later leftover, not this wave.

- Anniversary, kids-plate, breakfast, lunch, staffing, bartender, welcome, brunch, rehearsal, offsite, and retreat notes now name the island kitchen in every FAQ.
- Kauaʻi answers add inquiry honesty. Hawaiʻi Island answers add “Hilo is never implied.”
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No related-door photography. No new URLs.

## Wave 88 — blog-article FAQs stop cloning across islands (this branch)

Still no zip on this machine. Wave 88 uniquifies leftover `blogArticles.ts` FAQs so Oahu/Maui live notes and Kauaʻi/Hawaiʻi Island inquiry notes no longer share identical answers. Titles, H1s, and photos were already unique. No new URLs. Journal leftover clones stay a later leftover.

- Grocery, wine, weather, sourcing, cleanup, reunion, proposal, estate, peak-season, and fish-species notes now name Kahala, Wailea, Princeville, or Waikoloa.
- Inquiry answers keep the inquiry clause and add the island kitchen. Hawaiʻi Island answers add “Hilo is never implied.”
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No related-door photography. No new URLs.

## Wave 89 — journal FAQs stop cloning across islands (this branch)

Still no zip on this machine. Wave 89 uniquifies leftover journal FAQs in `journalArticles.ts` and `extraJournalNotes.ts` so live and inquiry hosts no longer share identical answers. Titles, H1s, and photos were already unique. No new URLs.

- Hire, villa-kitchen, dietary, inclusion, restaurant, Stay Chef week, and household-line notes now name Kahala, Wailea, Princeville, or Waikoloa.
- Inquiry answers keep the inquiry clause. Hawaiʻi Island answers add “Hilo is never implied.”
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No related-door photography. No new URLs.

## Wave 90 — leftover catalog FAQs stop cloning across islands (this branch)

Still no zip on this machine. Wave 90 uniquifies remaining catalog FAQ clones in catering formats, fine-dining courses, gated services, help articles, cooking-class notes, menu SKUs, and extra occasions. Titles, H1s, and photos were already unique. No new URLs.

- Answers now name Kahala, Wailea, Princeville, or Waikoloa. Inquiry hosts keep the inquiry clause. Hawaiʻi Island answers add “Hilo is never implied.”
- Coverage/locations honesty lists stay paper. Quote-form TypePanel stays. No related-door photography. No new URLs.

## Keyword discipline (measured, not invented)

Use these as title keywords. Null-volume neighborhood phrases stay in H1/FAQ, not in the `<title>`.

| Keyword | Volume |
|---|---|
| oahu catering | 720 |
| maui catering | 480 |
| private chef maui | 260 |
| private chef kauai / kauai catering / hawaii catering | 210 |
| wedding catering oahu | 140 |
| private chef oahu | 90 |
| private chef honolulu / private chef big island / private chef kona | 70 |
| private chef hawaii / big island catering | 50 |
| kauai wedding catering | 10 |
