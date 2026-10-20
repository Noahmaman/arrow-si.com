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

const mono = pathToFileURL(join(root, 'node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2')).href;
const card = ({ label, title }) => `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: DM; src: url(${font}); font-weight: 100 1000; }
  @font-face { font-family: GM; src: url(${mono}); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #ffffff; color: #1d1d1f; font-family: DM; display: flex; flex-direction: column; padding: 64px 72px 0; }
  .brand { display: flex; align-items: center; gap: 14px; font-weight: 700; font-size: 30px; letter-spacing: -0.02em; }
  .brand img { width: 46px; height: 46px; border-radius: 12px; }
  .label { margin-top: auto; display: flex; align-items: center; gap: 14px; font-family: GM; font-size: 18px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: #707070; }
  .label::before { content: ''; width: 11px; height: 11px; border-radius: 3px; background: #2563eb; }
  h1 { margin-top: 18px; font-size: ${title.length > 60 ? 56 : 66}px; line-height: 1.05; letter-spacing: -0.045em; font-weight: 600; max-width: 1020px; }
  h1 em { font-style: normal; background: linear-gradient(92deg, #2563eb 5%, #655cff 95%); -webkit-background-clip: text; color: transparent; }
  .band { margin: 48px -72px 0; padding: 24px 72px 26px; background: #f5f5f7; display: flex; justify-content: space-between; font-size: 20px; color: #707070; }
  .band b { color: #1d1d1f; font-weight: 600; }
</style></head><body>
  <div class="brand"><img src="${icon}" alt="">Arrow Signal</div>
  <div class="label">${esc(label)}</div>
  <h1>${highlight(esc(title))}</h1>
  <div class="band"><span><b>arrow-si.com</b> · AI visibility guides by Arrow AI</span><span>arrow-ai.us</span></div>
</body></html>`;
// colour the last two words of the title with the Arrow gradient
const highlight = (t) => {
  const words = t.split(' ');
  if (words.length < 4) return t;
  return `${words.slice(0, -2).join(' ')} <em>${words.slice(-2).join(' ')}</em>`;
};

const jobs = [
  { file: 'home', label: 'AI visibility by Arrow AI', title: 'Be the answer in ChatGPT, Gemini and Perplexity' },
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
    const label = decode(page.match(/<p class="kicker[^"]*"[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? 'Guide');
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
