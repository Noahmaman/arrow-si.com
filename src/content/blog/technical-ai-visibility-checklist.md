---
title: "Technical AI visibility checklist: crawlers, robots.txt, rendering and llms.txt"
seoTitle: "Technical AI Visibility Checklist: AI Crawlers"
description: "Which AI crawlers to allow, how robots.txt affects ChatGPT, Perplexity and Google AI features, plus rendering, indexing and what llms.txt really does."
category: Technical
order: 10
published: "2026-10-13"
updated: "2026-10-13"
keywords: ["AI crawlers", "robots.txt AI", "OAI-SearchBot", "GPTBot", "PerplexityBot", "Google-Extended", "llms.txt", "technical GEO"]
summary: "Technical AI visibility comes down to five checks: the crawlers that power AI search (OAI-SearchBot, PerplexityBot, Claude-SearchBot, Googlebot, Bingbot) are allowed in robots.txt and not blocked by your firewall; key pages are indexed in Google and Bing; important text is present in the server HTML; pages are fast and return correct status codes; and sitemaps are current. Training crawlers such as GPTBot and Google-Extended are a separate business decision. llms.txt is optional."
takeaways:
  - "Separate search/retrieval crawlers (needed for citations) from training crawlers (a policy choice)."
  - "Check your CDN or firewall: bot protection often blocks AI crawlers silently."
  - "Make sure key text, prices and FAQs are in the raw HTML, not only rendered by JavaScript."
  - "llms.txt is an optional proposal; no major engine has confirmed it as a citation signal."
faq:
  - q: "Should I block GPTBot?"
    a: "It's a business decision about training, separate from search visibility. Blocking GPTBot does not block OAI-SearchBot, which ChatGPT search uses to surface and link pages. Many brands that want AI visibility allow both."
  - q: "Does blocking Google-Extended remove me from AI Overviews?"
    a: "No. Google-Extended controls whether content is used for Gemini model training and grounding. AI Overviews and AI Mode are part of Google Search and depend on Googlebot and normal indexing."
  - q: "Do I need an llms.txt file?"
    a: "It's optional. llms.txt is a community proposal for giving language-model tools a clean map of your content. It costs little to add, but don't expect it to change rankings or citations on its own."
sources:
  - title: "OpenAI: Overview of OpenAI crawlers"
    url: "https://platform.openai.com/docs/bots"
  - title: "Google Search Central: Google's common crawlers (incl. Google-Extended)"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers"
  - title: "Google Search Central: JavaScript SEO basics"
    url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
  - title: "llms.txt: proposal and specification"
    url: "https://llmstxt.org/"
  - title: "IndexNow: protocol for instant indexing"
    url: "https://www.indexnow.org/"
ecosystem:
  - title: "How do I check whether a crawler can access my page?"
    url: "https://answers.arrow-ai.us/can-ai-crawlers-access-my-website/"
    note: "Arrow Answers"
  - title: "Should I add an llms.txt file?"
    url: "https://answers.arrow-ai.us/do-i-need-llms-txt-for-geo/"
    note: "Arrow Answers"
  - title: "Access & indexing: all technical guides"
    url: "https://answers.arrow-ai.us/topics/crawlability-and-indexing/"
    note: "Arrow Answers"
---

Content can’t be cited if it can’t be fetched. Before any GEO content work, run this technical checklist. Most of it takes an afternoon; the fixes it surfaces are often the fastest visibility wins you’ll ever get.

## 1. Know which crawlers matter

AI crawlers fall into two groups. Treat them differently.

**Search and retrieval crawlers** fetch pages so an AI product can answer, and cite, in real time. Block them and you can’t be a source.

| Crawler | Used for |
|---|---|
| **Googlebot** | Google Search, including AI Overviews and AI Mode |
| **Bingbot** | Bing, which grounds Microsoft Copilot |
| **OAI-SearchBot** | Surfacing and linking pages in ChatGPT search |
| **ChatGPT-User** | Fetching a page when a ChatGPT user or action asks for it |
| **PerplexityBot** / **Perplexity-User** | Perplexity’s index and user-requested fetches |
| **Claude-SearchBot** / **Claude-User** | Anthropic’s search and user-requested fetches |

**Training crawlers and tokens** collect content for model training. Allowing or blocking them is a policy decision, not a visibility requirement:

| Crawler / token | Controls |
|---|---|
| **GPTBot** | Use of content for OpenAI model training |
| **ClaudeBot** | Use of content for Anthropic model training |
| **Google-Extended** | Use for Gemini training and grounding: *not* Google Search or AI Overviews |
| **Applebot-Extended** | Use for Apple’s generative model training |
| **CCBot** | Common Crawl, a dataset widely used for training |

Vendors update these lists; check each vendor’s documentation (linked below) when you set policy.

## 2. Audit robots.txt

Open `yourdomain.com/robots.txt` and look for:

- a blanket `Disallow: /` under `User-agent: *` (blocks everyone, often left over from staging);
- explicit disallows for the retrieval crawlers above;
- disallowed folders that contain pages you want cited (`/pricing/`, `/blog/`, `/docs/`);
- a `Sitemap:` line pointing to your current sitemap.

A visibility-first robots.txt can be very simple:

```
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://www.example.com/sitemap.xml
```

Remember that robots.txt is a voluntary standard: it tells well-behaved crawlers what you prefer; it doesn’t enforce anything.

## 3. Check your firewall and CDN

This is the most common silent blocker. Bot-management features at CDNs and firewalls can challenge or block AI crawlers even when robots.txt allows them. Check:

- your CDN’s bot settings and any “block AI bots” toggle;
- WAF rules and rate limits;
- **server logs** for the user agents above: are they getting `200` responses, or `403`/challenge pages?

## 4. Confirm indexing

AI Overviews and AI Mode use Google’s index; Copilot uses Bing’s. In **Google Search Console** and **Bing Webmaster Tools**, confirm that your priority pages are indexed and eligible for snippets (`nosnippet` and restrictive `max-snippet` settings can limit how content is shown). Submit your sitemap in both. Consider **IndexNow** so Bing and other participating engines learn about updates quickly.

## 5. Put important text in the HTML

Google renders JavaScript, but many crawlers are simpler and may only read the HTML your server returns. Check the raw source (`view-source:` or `curl`) of key pages:

- Is the main answer in the HTML?
- Are prices, plans and FAQs in text, not images or client-side widgets?
- Are links real `<a href>` elements?

Server-side rendering or static generation removes the doubt. (This site is fully static HTML for that reason.)

## 6. Make pages fast and clean

- Correct status codes: `200` for live pages, `301` for moved ones, `404`/`410` for removed ones, not soft 404s.
- One canonical URL per page; `rel="canonical"` consistent with sitemaps and internal links.
- Fast responses: crawlers with time budgets may give up on slow pages.
- No interstitials or cookie walls that hide the content from non-browser clients.

## 7. Structured data that matches the page

Add `Organization`, `WebSite`, `Article`, `Product`, `FAQPage` or `LocalBusiness` markup where relevant, matching what’s visible. It helps systems interpret your content; it does not force inclusion. Details in [structured data for AI visibility](/blog/schema-markup-ai-visibility/).

## 8. llms.txt: optional extra

[llms.txt](https://llmstxt.org/) is a proposal: a Markdown file at your root that gives language-model tools a concise map of your most useful content. It’s cheap to add (this site has one at [/llms.txt](/llms.txt)), and some developer tools read it. But no major AI search engine has confirmed it as a ranking or citation signal: don’t prioritise it over steps 1–7.

## The 15-minute version

1. robots.txt allows Googlebot, Bingbot, OAI-SearchBot, PerplexityBot. ✔
2. CDN/WAF doesn’t challenge them (check logs). ✔
3. Priority pages indexed in Google and Bing. ✔
4. Key answers present in raw HTML. ✔
5. Sitemap current and submitted. ✔

If any of these fail, fix them before anything else. Then move on to [entity clarity](/blog/entity-clarity-ai-search/) and [citable content](/blog/content-ai-engines-cite/), or let Arrow run the full check in the [free AI visibility audit](https://arrow-ai.us/free-audit/).
