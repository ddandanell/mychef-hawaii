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
