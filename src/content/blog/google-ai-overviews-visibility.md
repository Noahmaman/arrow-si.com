---
title: "Google AI Overviews and AI Mode: how to get your brand in the answer"
seoTitle: "How to Appear in Google AI Overviews and AI Mode"
description: "How Google AI Overviews and AI Mode choose sources, what Google tells site owners, and a practical plan to earn more visibility and citations in them."
category: Platforms
order: 13
published: "2026-10-13"
updated: "2026-10-13"
keywords: ["Google AI Overviews", "AI Mode", "appear in AI Overviews", "AI Overviews citations", "Google AI search visibility"]
summary: "Google AI Overviews and AI Mode are part of Google Search and draw on Google's index. Google says there are no special requirements: pages must be indexed and eligible to show with a snippet, and standard SEO best practices apply. To improve visibility, make sure priority pages are indexed and snippet-eligible, answer specific sub-questions clearly, support claims with evidence, keep structured data consistent with the page, and measure appearances on a fixed question panel."
takeaways:
  - "AI Overviews and AI Mode use Google's index: no index, no citation."
  - "There is no special AI Overviews markup; snippet eligibility and SEO basics apply."
  - "Answer the follow-up questions too: AI features often fan out into related sub-queries."
  - "Clicks from these features count as Google organic: track appearances separately."
faq:
  - q: "Is there special markup to get into AI Overviews?"
    a: "No. Google states there is no special schema or file required. Pages need to be indexed and eligible to be shown in Google Search with a snippet. Structured data can still help Google understand your content."
  - q: "Can I opt out of AI Overviews but stay in Search?"
    a: "Snippet controls such as nosnippet and max-snippet limit how your content can be shown, including in AI features, but they also affect regular snippets. Google-Extended does not control AI Overviews."
  - q: "How do I see my AI Overviews traffic?"
    a: "Search Console includes clicks and impressions from AI features within overall Web search performance; they are not broken out separately. Track whether you appear and are cited using a fixed question panel."
sources:
  - title: "Google Search Central: AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
  - title: "Google Search Central: Creating helpful, reliable, people-first content"
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
  - title: "Google Search Central: Google's common crawlers (incl. Google-Extended)"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers"
ecosystem:
  - title: "How do you assess visibility in Google AI Overviews?"
    url: "https://answers.arrow-ai.us/how-to-measure-google-ai-overviews-visibility/"
    note: "Arrow Answers"
  - title: "Which AI surfaces should I prioritize?"
    url: "https://answers.arrow-ai.us/which-ai-search-platforms-should-i-track/"
    note: "Arrow Answers"
  - title: "Do I need separate work if I already rank in search?"
    url: "https://answers.arrow-ai.us/does-seo-help-ai-search-visibility/"
    note: "Arrow Answers"
---

For many buyers, the first AI answer they see isn’t in ChatGPT: it’s at the top of a Google results page. **AI Overviews** summarise a topic above the links; **AI Mode** turns the search into a conversation. Both cite sources. Both decide which brands a buyer hears about first.

Here’s how they work and what you can do.

## How Google’s AI features pick sources

Google is explicit on a few points in its guidance for site owners:

- AI Overviews and AI Mode are **features of Google Search**. They draw on Google’s index and ranking systems.
- There are **no additional requirements** to appear: a page must be **indexed and eligible to be shown with a snippet**.
- **Standard SEO best practices** still apply: crawlability, helpful content, good page experience, structured data that matches visible content.
- These features may use a **“query fan-out”** approach: issuing related searches across subtopics to assemble a fuller answer. That means a page can be cited for a sub-question even if it doesn’t rank for the main query.

In short: you don’t optimise for AI Overviews *instead of* Google Search. You optimise Google Search for the kind of questions AI features answer.

## Step 1: Confirm eligibility

In Google Search Console, for every priority page:

- it is **indexed** (URL Inspection);
- it is **not blocked** by robots.txt, `noindex` or a mismatched canonical;
- it doesn’t carry **`nosnippet`** or an overly restrictive **`max-snippet`**, which limit how content can be shown;
- important text is **in the HTML**, not only in images or scripts.

Note that the **Google-Extended** token does *not* control AI Overviews: it concerns Gemini training and grounding. Blocking it won’t remove you from AI features in Search, and allowing it won’t add you. See the [technical AI visibility checklist](/blog/technical-ai-visibility-checklist/).

## Step 2: Map the fan-out

Take each buyer question and list the sub-questions an AI answer would need to cover. For *“best CRM for a small dental clinic”*:

- What features matter for clinics? (scheduling, reminders, HIPAA)
- What does it cost for 3–10 users?
- How long does setup take?
- How does it compare with general-purpose CRMs?
- What do clinics say about it?

Each sub-question is a citation opportunity. Make sure your site answers them, on a dedicated page or a clearly headed section.

## Step 3: Write passages Google can lift

AI Overviews quote short, self-contained passages. The craft is the same as in [content AI engines cite](/blog/content-ai-engines-cite/):

- answer first, in one or two sentences;
- one idea per section, under a descriptive heading;
- specific facts: numbers, conditions, dates;
- tables for comparisons and pricing;
- evidence and sources for claims.

## Step 4: Strengthen experience and trust

Google’s guidance on helpful, reliable content emphasises first-hand experience, expertise and trustworthiness. In practice:

- show **who wrote** the page and why they know;
- include **original examples**, photos, data and results;
- keep pages **updated**, with honest `dateModified`;
- link to **evidence** and be clear about limits.

## Step 5: Measure appearances, not just clicks

Search Console reports AI feature traffic within overall Web search performance; it isn’t broken out on its own, and GA4 counts the clicks as Google organic. So track appearances directly:

- run your buyer-question panel in Google, logged out, on a fixed location;
- record whether an AI Overview appears, whether you’re **cited**, whether you’re **named**, and which other domains are cited;
- repeat monthly.

Arrow Answers details the method in [assessing visibility in Google AI Overviews](https://answers.arrow-ai.us/how-to-measure-google-ai-overviews-visibility/), and our general framework is in [how to measure AI visibility](/blog/how-to-measure-ai-visibility/).

## What about Gemini?

The Gemini app is a separate product from Google Search’s AI features, with its own behaviour, though it can also draw on Google Search. Track it as its own engine in your panel; the same fundamentals (clear entity, answer-ready pages, third-party evidence) apply.

## Summary

There’s no AI Overviews trick. There’s a well-indexed site, pages that answer the full set of buyer sub-questions, credible evidence and honest measurement. That’s the foundation Arrow GEO builds: start with the [free AI visibility audit](https://arrow-ai.us/free-audit/) to see where Google’s AI features include you today.
