---
title: "Why ChatGPT doesn't mention your brand: and how to fix it"
seoTitle: "Why ChatGPT Doesn't Mention Your Brand (+ Fixes)"
description: "Seven reasons ChatGPT, Gemini or Perplexity leave your brand out of their answers, how to diagnose which one applies, and what to fix first."
category: Diagnosis
order: 7
published: "2026-10-13"
updated: "2026-10-13"
keywords: ["why ChatGPT doesn't mention my brand", "brand not showing in ChatGPT", "get mentioned by ChatGPT", "AI visibility diagnosis", "ChatGPT recommendations"]
summary: "ChatGPT and other AI engines usually leave a brand out for one of seven reasons: crawlers can't access your pages, your pages aren't indexed by the search systems engines rely on, your category and offer are unclear, no page answers the buyer's question directly, third-party sources rarely describe you, competitors have stronger proof, or the question you tested doesn't match how buyers ask. Diagnose with a fixed question panel before changing anything."
takeaways:
  - "One missing mention proves nothing: test a panel of questions on several engines first."
  - "Check access and indexing before content: a page that can't be fetched can't be cited."
  - "Look at which sources the engine cites for competitors: that's your evidence roadmap."
  - "Fix in order: access → entity clarity → answer pages → third-party proof."
faq:
  - q: "Can I ask ChatGPT to add my brand to its answers?"
    a: "No. There is no submission form for answers. You can make your information accessible, clear and well-sourced, and allow OpenAI's search crawler (OAI-SearchBot) to fetch your pages so ChatGPT search can cite them."
  - q: "ChatGPT mentions us but with wrong information. What do I do?"
    a: "Save the question and full answer, find the source of the wrong fact (often an outdated page or listing), correct it at the source, make the correct fact prominent on your own site, then re-test on the same question."
  - q: "Does blocking GPTBot stop ChatGPT from mentioning us?"
    a: "GPTBot relates to training. ChatGPT search relies on OAI-SearchBot to surface and link pages. If you want to be cited in ChatGPT search, make sure OAI-SearchBot is not blocked, whatever you decide about GPTBot."
sources:
  - title: "OpenAI: Overview of OpenAI crawlers"
    url: "https://platform.openai.com/docs/bots"
  - title: "Google Search Central: AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
  - title: "Google Search Central: Introduction to robots.txt"
    url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro"
ecosystem:
  - title: "Why does ChatGPT not mention my company?"
    url: "https://answers.arrow-ai.us/why-does-chatgpt-not-mention-my-company/"
    note: "Arrow Answers"
  - title: "What if an assistant describes the business incorrectly?"
    url: "https://answers.arrow-ai.us/how-to-correct-wrong-ai-answers-about-your-business/"
    note: "Arrow Answers"
  - title: "How to not be invisible on AI"
    url: "https://arrow-ai.us/how-to-not-be-invisible-on-ai/"
    note: "Arrow AI"
---

You asked ChatGPT for the best option in your category. It named three competitors and not you. Before you rewrite your homepage, slow down: one answer is a symptom, not a diagnosis.

## First: confirm the problem

AI answers vary with wording, engine, mode, location and date. Before acting, run a small panel:

- 10–20 real buyer questions (category, problem, comparison, alternatives);
- on two or three engines, with web search on and off where possible;
- twice, on different days.

If you’re absent across most of them, you have a real visibility problem. If you’re absent from one phrasing on one engine, you have noise. The full method is in [how to measure AI visibility](/blog/how-to-measure-ai-visibility/).

Then look at **what the engine cites when it recommends someone else**. Those sources tell you more than the answer text.

## The seven usual causes

### 1. Crawlers can’t reach your pages

If your robots.txt blocks the crawler an engine uses to fetch pages, it can’t cite you. For ChatGPT search that’s **OAI-SearchBot**; for Perplexity, **PerplexityBot**. Firewalls and bot-protection services can also block them silently.

**Check:** robots.txt, CDN/WAF bot rules, server logs for those user agents. → [Technical AI visibility checklist](/blog/technical-ai-visibility-checklist/)

### 2. Your pages aren’t indexed where engines look

Google AI Overviews and AI Mode use Google’s index; Copilot uses Bing’s. Pages excluded by `noindex`, canonicals pointing elsewhere or thin internal linking may never be candidates.

**Check:** Google Search Console and Bing Webmaster Tools coverage for your key pages.

### 3. Your content is invisible without JavaScript

If your key text, prices or FAQs only appear after client-side rendering, some crawlers will see an empty shell.

**Check:** view the raw HTML (not the rendered DOM) of key pages. Is the answer in it?

### 4. Engines don’t know what you are

If your site, LinkedIn, directories and press each describe you differently, or vaguely (“we empower growth”), the engine can’t confidently associate you with the category and the need.

**Fix:** one precise description of who you serve, what you do and where, repeated consistently. → [Entity clarity](/blog/entity-clarity-ai-search/)

### 5. No page answers the buyer’s question

Engines cite pages that answer the question asked. If buyers ask *“best X for small clinics”* and you have no page about clinics, pricing for small teams or comparisons, there’s nothing to cite.

**Fix:** pages built around buyer decisions, with the answer in the first lines. → [Content AI engines cite](/blog/content-ai-engines-cite/)

### 6. Others describe your competitors, not you

When an engine recommends a competitor, it often cites review sites, “best of” articles, forums or industry publications. If those sources don’t mention you, you’re missing the evidence layer.

**Fix:** earn presence in the specific sources engines cite for your category. → [Third-party sources AI trusts](/blog/third-party-sources-ai-trust/)

### 7. Your proof is weaker

To *recommend*, an engine needs reasons: specialisation, reviews, case studies, clear pricing. Competitors with public proof win shortlists even with weaker products.

**Fix:** publish verifiable proof such as outcomes, customer examples, certifications and transparent pricing.

## A diagnostic order that saves time

Work in this order; each step is a prerequisite for the next:

1. **Access**: crawlers allowed, pages indexed, text in HTML.
2. **Identity**: one consistent description of the business.
3. **Answers**: pages for the questions buyers actually ask.
4. **Evidence**: third-party sources and public proof.
5. **Re-measure**: same panel, same protocol.

Fixing step 4 while step 1 is broken wastes months.

## When the answer is wrong, not missing

Sometimes ChatGPT mentions you, but incorrectly. Old prices, discontinued products, the wrong city. Treat it as a source problem: save the answer, find where the wrong fact lives (your old pages, a directory, an article), fix it there, make the correct fact prominent on your site, and re-test. Arrow Answers has the full process for [correcting wrong AI answers about your business](https://answers.arrow-ai.us/how-to-correct-wrong-ai-answers-about-your-business/).

## Get a diagnosis

Running this diagnosis across engines takes a few hours by hand. The [free Arrow AI visibility audit](https://arrow-ai.us/free-audit/) does the first pass for you, and Arrow’s guide on [how to not be invisible on AI](https://arrow-ai.us/how-to-not-be-invisible-on-ai/) goes further on the fixes.
