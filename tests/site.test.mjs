import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const read = path => readFileSync(new URL(path, dist), 'utf8');
const slugs = readdirSync(new URL('blog/', dist), { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name);
const paths = ['index.html', 'blog/index.html', 'privacy/index.html', ...slugs.map(slug => `blog/${slug}/index.html`)];

test('15 complete articles have unique titles, descriptions, direct answers and sources', () => {
  assert.equal(slugs.length, 15);
  const titles = new Set();
  const descriptions = new Set();
  for (const slug of slugs) {
    const html = read(`blog/${slug}/index.html`);
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(title && description, slug);
    titles.add(title); descriptions.add(description);
    assert.match(html, /id="takeaway"/);
    assert.match(html, /id="sources"/);
    assert.match(html, /id="checklist"/);
    assert.match(html, /id="section-4"/);
    const body = html.match(/<div class="article-content">([\s\S]*?)<div class="article-share">/)?.[1] || '';
    assert.ok(body.replace(/<[^>]+>/g, ' ').split(/\s+/).length > 300, `${slug} must contain substantive article content`);
    const article = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1])).find(item => item['@type'] === 'Article');
    assert.equal(article?.mainEntityOfPage, `https://arrow-si.com/blog/${slug}/`);
    assert.equal(article?.author?.name, 'Arrow Signal Editorial');
  }
  assert.equal(titles.size, 15); assert.equal(descriptions.size, 15);
});

test('indexable pages have a unique canonical, English language and social metadata', () => {
  const canonicals = new Set();
  for (const path of paths) {
    const html = read(path);
    assert.match(html, /<html lang="en">/);
    assert.equal([...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length, 1, path);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical?.startsWith('https://arrow-si.com/'), path);
    canonicals.add(canonical);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    assert.match(html, /property="og:image:alt"/);
    for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) assert.doesNotThrow(() => JSON.parse(match[1]));
  }
  assert.equal(canonicals.size, paths.length);
  assert.match(read('404.html'), /content="noindex, follow"/);
});

test('local links resolve to built pages and fragment IDs', () => {
  for (const path of paths) {
    const html = read(path);
    for (const match of html.matchAll(/href="([^" ]+)"/g)) {
      const href = match[1];
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const [route, fragment] = href.split('#');
      const target = route ? (route.endsWith('/') ? `${route.slice(1)}index.html` : route.slice(1)) : path;
      assert.ok(existsSync(new URL(target, dist)), `${path}: ${href}`);
      if (fragment) assert.ok(read(target).includes(`id="${fragment}"`), `${path}: missing ${href}`);
    }
  }
});

test('sitemap, RSS and llms index include every article', () => {
  const sitemap = read('sitemap.xml');
  assert.equal([...sitemap.matchAll(/<url>/g)].length, paths.length);
  assert.equal([...read('feed.xml').matchAll(/<item>/g)].length, 15);
  for (const slug of slugs) {
    const url = `https://arrow-si.com/blog/${slug}/`;
    assert.ok(sitemap.includes(url)); assert.ok(read('feed.xml').includes(url)); assert.ok(read('llms.txt').includes(url));
  }
  assert.match(read('robots.txt'), /Sitemap: https:\/\/arrow-si.com\/sitemap.xml/);
  assert.ok(readFileSync(new URL('og.png', dist)).length > 10000);
});

test('every article and the home page link transparently to all three Arrow destinations', () => {
  for (const path of ['index.html', ...slugs.map(slug => `blog/${slug}/index.html`)]) {
    const html = read(path);
    for (const destination of ['https://arrow-ai.us/', 'https://answers.arrow-ai.us/', 'https://arrow-ai.tech/']) assert.ok(html.includes(`href="${destination}"`), `${path}: ${destination}`);
    const organization = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1])).find(item => item['@type'] === 'Organization');
    assert.deepEqual(organization?.parentOrganization?.sameAs, ['https://www.linkedin.com/company/arrow-ai-us/', 'https://www.instagram.com/arrowai.us/', 'https://www.youtube.com/@Arrowaius']);
  }
});
