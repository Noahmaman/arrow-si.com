// Renders 1200×630 Open Graph images into public/og/ with headless Chromium.
// Run after `npm run build` (article covers are read from dist/), then rebuild.
//   npm run build && npm run og && npm run build
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'public/og');
mkdirSync(out, { recursive: true });

const font = (p) => pathToFileURL(join(root, 'node_modules', p)).href;
const icon = 'data:image/png;base64,' + readFileSync(join(root, 'public/brand/arrow-icon-192.png')).toString('base64');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function card({ kicker, title, sub, art = '' }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: DM; src: url(${font('@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2')}); font-weight: 100 1000; }
  @font-face { font-family: GM; src: url(${font('@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2')}); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #04060e; color: #e9edff; font-family: DM; position: relative; }
  .dots { position: absolute; inset: 0; background-image: radial-gradient(rgba(150,175,255,.16) 1px, transparent 1.3px); background-size: 26px 26px; }
  .glow { position: absolute; right: -160px; top: -200px; width: 900px; height: 800px; background: radial-gradient(closest-side, rgba(37,99,235,.55), rgba(101,92,255,.18) 55%, transparent); }
  .lines { position: absolute; left: 0; right: 0; bottom: 0; height: 260px; opacity: .9; }
  .art { position: absolute; right: 56px; top: 150px; width: 470px; height: 264px; border-radius: 20px; overflow: hidden; border: 1px solid rgba(150,175,255,.22); box-shadow: 0 40px 100px -30px rgba(37,99,235,.7); }
  .art svg { width: 100%; height: 100%; display: block; }
  .content { position: absolute; left: 64px; top: 56px; bottom: 56px; width: ${art ? '590px' : '1000px'}; display: flex; flex-direction: column; }
  .brand { display: flex; align-items: center; gap: 14px; font-weight: 700; font-size: 30px; letter-spacing: -.02em; }
  .brand img { width: 46px; height: 46px; border-radius: 12px; box-shadow: 0 6px 24px rgba(37,99,235,.55); }
  .sub { font-family: GM; font-size: 15px; font-weight: 500; letter-spacing: .16em; color: #a9c1ff; padding: 5px 10px; border: 1px solid rgba(122,162,255,.4); border-radius: 8px; background: rgba(37,99,235,.18); }
  .kicker { margin-top: auto; font-family: GM; font-size: 17px; letter-spacing: .16em; text-transform: uppercase; color: #a9c1ff; display: flex; align-items: center; gap: 12px; }
  .kicker::before { content: ''; width: 10px; height: 10px; border-radius: 3px; background: linear-gradient(135deg,#2563eb,#655cff); box-shadow: 0 0 14px rgba(37,99,235,.9); }
  h1 { margin-top: 18px; font-size: ${art ? '50px' : '72px'}; line-height: 1.04; letter-spacing: -.045em; font-weight: 600; }
  h1 em { font-style: normal; background: linear-gradient(92deg,#7aa2ff,#5b8cff 35%,#655cff); -webkit-background-clip: text; color: transparent; }
  .foot { margin-top: 26px; font-family: GM; font-size: 16px; letter-spacing: .1em; color: #9aa3c7; text-transform: uppercase; }
  </style></head><body>
  <div class="dots"></div><div class="glow"></div>
  <svg class="lines" viewBox="0 0 1200 260" preserveAspectRatio="none"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#2563eb" stop-opacity="0"/><stop offset=".5" stop-color="#5b8cff"/><stop offset="1" stop-color="#655cff" stop-opacity="0"/></linearGradient></defs>
  ${Array.from({ length: 9 }, (_, i) => {
    let d = '';
    for (let x = 0; x <= 1200; x += 12) {
      const lock = Math.min(1, x / 800);
      const y = 150 + (i - 4) * 12 * (1 - lock * 0.7) + Math.sin(x / 70 + i * 0.4) * 34 * lock + Math.sin(x * 0.37 + i * 3) * 16 * (1 - lock);
      d += `${x ? 'L' : 'M'}${x} ${y.toFixed(1)}`;
    }
    return `<path d="${d}" fill="none" stroke="url(#g)" stroke-width="${i === 4 ? 2.2 : 1.2}" stroke-opacity="${1 - Math.abs(i - 4) * 0.18}"/>`;
  }).join('')}
  </svg>
  ${art ? `<div class="art">${art}</div>` : ''}
  <div class="content">
    <div class="brand"><img src="${icon}" alt="">Arrow <span class="sub">SIGNAL</span></div>
    <div class="kicker">${esc(kicker)}</div>
    <h1>${title}</h1>
    <div class="foot">${esc(sub)}</div>
  </div>
  </body></html>`;
}

const jobs = [
  { file: 'home', kicker: 'AI visibility by Arrow AI', title: 'In every AI answer,<br><em>be the signal.</em>', sub: 'arrow-si.com · ChatGPT · Gemini · Perplexity · Claude · AI Overviews' },
  { file: 'blog', kicker: 'The Signal Journal', title: 'Fifteen guides to<br><em>AI visibility.</em>', sub: 'arrow-si.com/blog · by Arrow AI' },
  { file: 'glossary', kicker: 'Glossary', title: 'The language of<br><em>AI visibility.</em>', sub: 'arrow-si.com/glossary · by Arrow AI' },
];

const blogDir = join(root, 'dist/blog');
if (existsSync(blogDir)) {
  for (const slug of readdirSync(blogDir)) {
    const html = join(blogDir, slug, 'index.html');
    if (!existsSync(html)) continue;
    const page = readFileSync(html, 'utf8');
    const title = page.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '') ?? slug;
    const kicker = page.match(/<p class="kicker"[^>]*>([\s\S]*?)<\/p>/)?.[1]?.replace(/<[^>]+>/g, '') ?? 'The Signal Journal';
    const figure = page.match(/<figure class="hero-cover[\s\S]*?(<svg[\s\S]*?<\/svg>)/)?.[1] ?? '';
    jobs.push({ file: slug, kicker, title: esc(title), sub: `arrow-si.com · by Arrow AI`, art: figure });
  }
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
const work = mkdtempSync(join(tmpdir(), 'arrow-og-'));
for (const job of jobs) {
  const tmp = join(work, `${job.file}.html`);
  writeFileSync(tmp, card(job));
  await page.goto(pathToFileURL(tmp).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(out, `${job.file}.jpg`), type: 'jpeg', quality: 86 });
  console.log(`og/${job.file}.jpg`);
}
await browser.close();
