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

## Production

SPA (Vite + React Router). Island wildcard DNS is `*.mychef-hawaii.com`. Until that domain is attached, Vercel URLs use path prefixes (`/oahu`, `/maui`, …) so every department still works.

```bash
npm run build
```
