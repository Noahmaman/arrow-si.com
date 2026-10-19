// Renders 1200×630 Open Graph images into public/og/ with headless Chromium.
// Article titles are read from dist/, so run after a build, then build again:
//   npm run build && npm run og && npm run build
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'public/og');
mkdirSync(out, { recursive: true });

const font = pathToFileURL(join(root, 'node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2')).href;
const icon = 'data:image/png;base64,' + readFileSync(join(root, 'public/brand/arrow-icon-192.png')).toString('base64');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/<[^>]+>/g, '');

const card = ({ label, title }) => `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: DM; src: url(${font}); font-weight: 100 1000; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #fff; color: #111827; font-family: DM; display: flex; flex-direction: column; padding: 64px 72px; border-left: 14px solid #2563eb; }
  .brand { display: flex; align-items: center; gap: 14px; font-weight: 700; font-size: 30px; letter-spacing: -0.01em; }
  .brand img { width: 48px; height: 48px; border-radius: 12px; }
  .brand span { color: #6b7280; font-weight: 500; }
  .label { margin-top: auto; font-size: 26px; font-weight: 600; color: #2563eb; }
  h1 { margin-top: 14px; font-size: ${title.length > 60 ? 56 : 66}px; line-height: 1.1; letter-spacing: -0.025em; font-weight: 600; max-width: 1000px; }
  .foot { margin-top: 36px; padding-top: 22px; border-top: 2px solid #e5e7eb; font-size: 24px; color: #6b7280; }
</style></head><body>
  <div class="brand"><img src="${icon}" alt="">Arrow <span>Signal</span></div>
  <div class="label">${esc(label)}</div>
  <h1>${esc(title)}</h1>
  <div class="foot">arrow-si.com · AI visibility guides by Arrow AI</div>
</body></html>`;

const jobs = [
  { file: 'home', label: 'AI visibility guides', title: 'Get your brand into AI answers' },
  { file: 'blog', label: 'Guides', title: '15 practical guides to AI visibility and GEO' },
  { file: 'glossary', label: 'Glossary', title: 'AI visibility glossary' },
];
const blogDir = join(root, 'dist/blog');
if (existsSync(blogDir)) {
  for (const slug of readdirSync(blogDir)) {
    const html = join(blogDir, slug, 'index.html');
    if (!existsSync(html)) continue;
    const page = readFileSync(html, 'utf8');
    const title = decode(page.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? slug);
    const label = decode(page.match(/<span class="eyebrow"[^>]*>([\s\S]*?)<\/span>/)?.[1] ?? 'Guide');
    jobs.push({ file: slug, label, title });
  }
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
const work = mkdtempSync(join(tmpdir(), 'arrow-og-'));
for (const job of jobs) {
  const file = join(work, `${job.file}.html`);
  writeFileSync(file, card(job));
  await page.goto(pathToFileURL(file).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(out, `${job.file}.jpg`), type: 'jpeg', quality: 88 });
  console.log(`og/${job.file}.jpg`);
}
await browser.close();
