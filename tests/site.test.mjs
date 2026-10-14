// Checks the built site in dist/. Run `npm run build` first, then `npm test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist = resolve(import.meta.dirname, '../dist');
const read = (p) => readFileSync(join(dist, p), 'utf8');

function htmlPages(dir = dist, base = '') {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...htmlPages(full, `${base}/${name}`));
    else if (name.endsWith('.html')) out.push(`${base}/${name}`);
  }
  return out;
}
const pages = htmlPages().filter((p) => p !== '/404.html');
const articles = readdirSync(join(dist, 'blog')).filter((d) => existsSync(join(dist, 'blog', d, 'index.html')));

test('builds 15 articles', () => {
  assert.equal(articles.length, 15);
});

test('every page has unique title, description, canonical and one h1', () => {
  const titles = new Set();
  for (const p of pages) {
    const html = read(p);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.replace(/&amp;/g, '&').replace(/&#39;/g, "'");
    assert.ok(title, `${p} title`);
    assert.ok(title.length <= 70, `${p} title too long: ${title.length}`);
    assert.ok(!titles.has(title), `${p} duplicate title`);
    titles.add(title);
    const desc = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(desc && desc.length >= 70 && desc.length <= 170, `${p} description length ${desc?.length}`);
    assert.match(html, /<link rel="canonical" href="https:\/\/arrow-si\.com\/[^"]*"/, `${p} canonical`);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${p} h1 count`);
    assert.match(html, /<html lang="en"/);
  }
});

test('every image has alt text and OG images exist', () => {
  for (const p of pages) {
    const html = read(p);
    for (const img of html.match(/<img\b[^>]*>/g) || []) assert.match(img, /\balt="/, `${p}: ${img.slice(0, 80)}`);
    for (const svg of html.match(/<svg\b[^>]*>/g) || []) {
      assert.ok(/aria-hidden="true"|role="img"/.test(svg), `${p}: svg needs aria-hidden or role=img: ${svg.slice(0, 90)}`);
    }
    const og = html.match(/<meta property="og:image" content="https:\/\/arrow-si\.com(\/[^"]+)"/)?.[1];
    assert.ok(og && existsSync(join(dist, og)), `${p} og image ${og}`);
    assert.match(html, /<meta property="og:image:alt" content="[^"]{10,}"/);
  }
});

test('JSON-LD parses and articles carry BlogPosting, FAQPage and BreadcrumbList', () => {
  for (const p of pages) {
    const blocks = [...read(p).matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    assert.ok(blocks.length >= 1, `${p} json-ld`);
    const graph = blocks.flatMap((b) => JSON.parse(b[1])['@graph'] || [JSON.parse(b[1])]);
    const types = graph.flatMap((n) => [].concat(n['@type']));
    assert.ok(types.includes('Organization') && types.includes('WebSite'), `${p} org/site`);
    if (p.startsWith('/blog/') && p !== '/blog/index.html') {
      for (const t of ['BlogPosting', 'FAQPage', 'BreadcrumbList']) assert.ok(types.includes(t), `${p} ${t}`);
    }
  }
});

test('internal links resolve to built pages', () => {
  for (const p of pages) {
    for (const [, href] of read(p).matchAll(/href="(\/[^"#?]*)"/g)) {
      const target = href.endsWith('/') ? join(dist, href, 'index.html') : join(dist, href);
      assert.ok(existsSync(target), `${p} → ${href}`);
    }
  }
});

test('ecosystem backlinks and social profiles are present', () => {
  const home = read('/index.html');
  for (const url of ['https://arrow-ai.us/', 'https://answers.arrow-ai.us/', 'https://arrow-ai.tech/', 'https://arrow-ai.us/free-audit/']) {
    assert.ok(home.includes(`href="${url}"`), `home links ${url}`);
  }
  for (const s of ['linkedin.com/company/arrow-ai-us', 'instagram.com/arrowai.us', 'youtube.com/@Arrowaius', 'tiktok.com/@arrow.aii']) {
    assert.ok(home.includes(s), `social ${s}`);
  }
  for (const a of articles) {
    const html = read(`/blog/${a}/index.html`);
    assert.ok(html.includes('https://answers.arrow-ai.us/'), `${a} links Arrow Answers`);
    assert.ok(html.includes('https://arrow-ai.us/'), `${a} links Arrow AI`);
    assert.ok(html.includes('https://arrow-ai.tech/'), `${a} links GEO demo`);
  }
});

test('GEO files: robots, sitemap, llms.txt, feed', () => {
  const robots = read('/robots.txt');
  assert.match(robots, /Sitemap: https:\/\/arrow-si\.com\/sitemap\.xml/);
  for (const bot of ['OAI-SearchBot', 'PerplexityBot', 'Claude-SearchBot', 'Googlebot', 'Bingbot']) assert.ok(robots.includes(`User-agent: ${bot}`));
  assert.doesNotMatch(robots, /Disallow: \/\s/);
  const sitemap = read('/sitemap.xml');
  for (const a of articles) assert.ok(sitemap.includes(`https://arrow-si.com/blog/${a}/`), `sitemap ${a}`);
  const llms = read('/llms.txt');
  assert.equal((llms.match(/\(https:\/\/arrow-si\.com\/blog\/[^)]+\)/g) || []).length, 15);
  assert.ok(read('/llms-full.txt').length > 50000);
  assert.equal((read('/feed.xml').match(/<item>/g) || []).length, 15);
});
