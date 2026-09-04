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

## Wave 2 — remaining money and supporting uniqueness

- Give `/events` and `/mobile-bar` their own documents (they currently alias `/catering` and `/bar`).
- Island `/about` pages with unique copy (hub `/about` already exists).
- Unique private-chef and vacation-chef stills per island (Oʻahu/Maui stills exist; Kauaʻi and Hawaiʻi Island reuse).
- Index supporting paths only after titles cannot cannibalize master keywords.
- Refresh DataForSEO snapshot after each title change; never invent volumes.

## Wave 3 — zip execution

- Open the blueprint zip. Stop inventing page lists. Build every URL it names, with its copy deck and internal-link rules.
- Unique Grok still for every remaining location photo the zip requires.
- Schema, FAQ, and sample-menu expansions the zip specifies.
- Hub vs island keyword split exactly as the zip writes it.

## Wave 4 — automation that stays on

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
