import { chromium } from 'playwright';

const browser = await chromium.launch({
  channel: 'chrome',
  args: ['--host-resolver-rules=MAP *.localhost 127.0.0.1'],
});
const page = await browser.newPage();
const results = [];

await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
results.push({
  route: 'hub',
  title: await page.title(),
  h1: await page.locator('h1').first().innerText(),
  islandHrefs: await page
    .locator('a[href*=".localhost"]')
    .evaluateAll((as) => [...new Set(as.map((a) => a.href))]),
});

for (const host of ['oahu', 'maui', 'kauai', 'bigisland']) {
  await page.goto(`http://${host}.localhost:3000/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  results.push({
    route: `${host} home`,
    title: await page.title(),
    h1: await page.locator('h1').first().innerText().catch(() => ''),
    header: (await page.locator('header').innerText()).slice(0, 220),
  });
}

await page.goto('http://oahu.localhost:3000/blog', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
results.push({
  route: 'oahu blog',
  h1: await page.locator('h1').first().innerText(),
  cards: await page.locator('h2').count(),
});

await page.goto('http://maui.localhost:3000/journal', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
results.push({
  route: 'maui journal',
  h1: await page.locator('h1').first().innerText(),
  cards: await page.locator('h2').count(),
});

await page.goto('http://oahu.localhost:3000/sitemap', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
results.push({
  route: 'oahu sitemap',
  h1: await page.locator('h1').first().innerText(),
  links: await page.locator('ul li a').count(),
});

await page.goto('http://localhost:3000/sitemap', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
results.push({
  route: 'hub sitemap',
  h1: await page.locator('h1').first().innerText(),
  title: await page.title(),
});

await page.goto('http://kauai.localhost:3000/blog/dining-in-hanalei', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
results.push({
  route: 'kauai unique blog',
  title: await page.title(),
  h1: await page.locator('h1').first().innerText(),
});

console.log(JSON.stringify(results, null, 2));
await browser.close();
