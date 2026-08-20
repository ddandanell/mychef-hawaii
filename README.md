# myCHEF Hawaii

Statewide hub plus four island departments: Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island.

- **Hub:** [mychef-hawaii.com](https://mychef-hawaii.com) (this repo)
- **Islands:** `oahu.` `maui.` `kauai.` `bigisland.` + the same root
- **Local:** `http://localhost:3000` and `http://oahu.localhost:3000` (wildcard)

## Develop

```bash
npm install
npm run dev
```

Vite listens on port 3000 with `*.localhost` allowed. Chrome resolves those hosts to loopback. Safari may need `npm run hosts`.

## Production (Vercel)

Project `mychef-hawaii` is wired for one hub plus island departments:

| Host | Site |
|---|---|
| `mychef-hawaii.com` | Statewide hub |
| `oahu.mychef-hawaii.com` | Oʻahu |
| `maui.mychef-hawaii.com` | Maui |
| `kauai.mychef-hawaii.com` | Kauaʻi |
| `bigisland.mychef-hawaii.com` | Hawaiʻi Island |
| `*.mychef-hawaii.com` | Wildcard (same deployment) |

DNS at the registrar (once the domain is yours):

```
A      @    216.150.1.1
A      @    216.150.16.1
CNAME  *    144b8dff687075c2.vercel-dns-016.com.
```

Or nameservers `ns1.vercel-dns.com` / `ns2.vercel-dns.com`.

Until DNS is live, `https://mychef-hawaii.vercel.app` serves the hub and `/oahu` `/maui` `/kauai` `/bigisland` as path fallbacks. Each host gets its own `sitemap.xml`, `robots.txt`, canonicals and titles.

```bash
npm run build
```
