# myCHEF Hawaii

Statewide hub plus four island departments: Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island.

- **Hub:** [mychef-hawaii.com](https://mychef-hawaii.com)
- **Islands:** `oahu.` `maui.` `kauai.` `bigisland.` + the same root
- **Local:** `http://localhost:3000` and `http://oahu.localhost:3000` (wildcard)

Next.js App Router. Unique title, canonical and JSON-LD ship in the HTML source.

## Develop

```bash
npm install
npm run dev
```

Next listens on port 3000 with `*.localhost` allowed. Chrome resolves those hosts to loopback. Safari may need `npm run hosts`.

## Production (Vercel)

| Host | Site |
|---|---|
| `mychef-hawaii.com` | Statewide hub |
| `oahu.mychef-hawaii.com` | Oʻahu |
| `maui.mychef-hawaii.com` | Maui |
| `kauai.mychef-hawaii.com` | Kauaʻi |
| `bigisland.mychef-hawaii.com` | Hawaiʻi Island |

Until DNS is live, `https://mychef-hawaii.vercel.app` serves the hub and `/oahu` `/maui` `/kauai` `/bigisland` as path fallbacks. Each host gets its own `sitemap.xml`, `robots.txt`, canonicals and titles.

```bash
npm run build
```
