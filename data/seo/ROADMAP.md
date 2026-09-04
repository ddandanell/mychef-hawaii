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

## Wave 5 — zip execution

- Open the blueprint zip. Stop inventing page lists. Build every remaining URL it names.
- Schema, FAQ, and sample-menu expansions the zip specifies beyond Wave 3.
- Hub vs island keyword split exactly as the zip writes it.

## Wave 6 — automation that stays on

- `seo:audit` in CI (this branch).
- Scheduled `seo:snapshot` against DataForSEO when credentials are in GitHub Actions secrets (`DATAFORSEO_LOGIN`, `DATAFORSEO_PASSWORD`). Do not commit secrets.
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
