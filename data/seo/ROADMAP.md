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

## Wave 30 — zip execution

- Open the blueprint zip. Stop inventing page lists. Build every remaining URL it names.
- Schema, FAQ, and sample-menu expansions the zip specifies beyond the catalog stand-in.
- Hub vs island keyword split exactly as the zip writes it.

## Wave 31 — automation that stays on

- `seo:audit` in CI (this branch).
- Scheduled `seo:snapshot` Action shipped in Wave 8 — add `DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD` GitHub secrets to turn it on. Do not commit secrets.
- Search Console / indexation pass after Wave 1 is on `main`: inspect one corridor URL per island, then the rest.
- Keep `*.mychef-hawaii.com` attached on the Vercel project so island hosts never 404.

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
