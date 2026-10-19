---
title: "How to track AI referral traffic in GA4 (ChatGPT, Perplexity, Gemini & more)"
seoTitle: "Track AI Referral Traffic in GA4 (ChatGPT & More)"
description: "Set up an AI assistants channel in GA4 to track visits from ChatGPT, Perplexity, Gemini, Copilot and Claude: the regex, the limits, the report."
category: Measurement
order: 6
published: "2026-10-13"
updated: "2026-10-13"
keywords: ["AI referral traffic", "ChatGPT traffic GA4", "track Perplexity traffic", "GA4 AI channel", "LLM referral traffic"]
summary: "To track AI referral traffic in GA4, create a custom channel group with an 'AI assistants' channel that matches sources such as chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com and claude.ai, and place it above the Referral channel. Expect undercounting: many AI answers produce no click, some visits arrive without a referrer, and Google AI Overviews clicks are reported as Google organic."
takeaways:
  - "Create a custom channel group in GA4 with an AI assistants channel above Referral."
  - "Match AI sources with a regex; ChatGPT links often carry utm_source=chatgpt.com."
  - "AI Overviews and AI Mode clicks are counted as Google organic, not as AI referrals."
  - "Referral traffic is the tip of the iceberg: pair it with answer-level visibility tracking."
faq:
  - q: "Can GA4 show traffic from Google AI Overviews separately?"
    a: "Not today. Clicks from AI Overviews and AI Mode arrive as Google organic search traffic and cannot be isolated in GA4. Use your answer-level tracking to see where you appear in those features."
  - q: "Why is my AI referral traffic so low?"
    a: "Many AI answers satisfy the question without a click, and some apps strip the referrer. Low referral numbers do not mean low visibility. Measure mentions and citations in the answers themselves."
  - q: "Does AI traffic convert better than organic search?"
    a: "Sometimes yes, sometimes no. It depends on your category and on which questions send the visits. Measure conversion per channel in your own data rather than assuming an uplift."
sources:
  - title: "Google Analytics Help: [GA4] Custom channel groups"
    url: "https://support.google.com/analytics/answer/13051316"
  - title: "Google Analytics Help: [GA4] Default channel group"
    url: "https://support.google.com/analytics/answer/9756891"
  - title: "Google Search Central: AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
ecosystem:
  - title: "How can you track AI referral traffic to an answer hub?"
    url: "https://answers.arrow-ai.us/how-to-track-ai-referral-traffic-to-an-answer-hub/"
    note: "Arrow Answers"
  - title: "How do you connect AI discovery to leads in a CRM?"
    url: "https://answers.arrow-ai.us/how-to-connect-ai-discovery-to-crm-leads/"
    note: "Arrow Answers"
  - title: "Does AI traffic always convert better?"
    url: "https://answers.arrow-ai.us/does-ai-search-traffic-convert-better/"
    note: "Arrow Answers"
---

AI answers influence buyers long before a click, but when they do send a click, you want to see it. By default, Google Analytics 4 lumps ChatGPT, Perplexity and friends into the generic **Referral** channel, next to every blog that ever linked to you. Ten minutes of setup fixes that.

## What you can and can’t measure

Be clear about the limits first, so nobody misreads the numbers:

- **You can measure** visits that arrive from AI products with a referrer or a UTM tag: ChatGPT, Perplexity, Gemini, Copilot, Claude and others.
- **You can’t isolate** clicks from Google **AI Overviews** or **AI Mode**: they’re reported as Google organic search.
- **You can’t see** the answers that mentioned you but produced no click, which is most of them.
- **Some visits lose their referrer** (in-app browsers, privacy settings, copied links) and land in Direct.

So AI referral traffic is a **floor**, not the full picture. Pair it with answer-level tracking: see [how to measure AI visibility](/blog/how-to-measure-ai-visibility/).

## Step 1: Find your AI sources

In GA4, open **Reports → Acquisition → Traffic acquisition**, switch the dimension to **Session source**, and search for:

- `chatgpt.com` (and the legacy `chat.openai.com`)
- `perplexity.ai`
- `gemini.google.com`
- `copilot.microsoft.com`
- `claude.ai`

Links clicked from ChatGPT answers frequently carry `utm_source=chatgpt.com`, which makes them easy to spot. Note any other assistants your audience uses, for example `chat.deepseek.com` or `meta.ai`.

## Step 2: Create an “AI assistants” channel

1. Go to **Admin → Data display → Channel groups**.
2. **Copy** the default channel group to create a custom one (you can’t edit the default).
3. **Add a new channel** named `AI assistants`.
4. Condition: **Session source** **matches regex**, with this pattern:

```
^(.*\.)?(chatgpt\.com|chat\.openai\.com|openai\.com|perplexity\.ai|gemini\.google\.com|bard\.google\.com|copilot\.microsoft\.com|claude\.ai|chat\.deepseek\.com|meta\.ai|you\.com|poe\.com)$
```

5. **Move the channel above “Referral”.** GA4 evaluates channels in order; if Referral comes first, it will capture these sessions.
6. Save. Custom channel groups apply to your data in reports and explorations, including retroactively.

## Step 3: Build the report

In **Explore**, create a free-form exploration:

- **Rows:** your custom channel group, then Session source
- **Columns:** Month
- **Values:** Sessions, Engaged sessions, Key events (conversions), Revenue if relevant

Add **Landing page** as a secondary breakdown. It tells you which pages AI products send people to, usually a strong hint about which of your pages they cite.

## Step 4: Connect it to leads

If you run a CRM, capture the first-touch source on form submissions (a hidden field populated from the landing URL’s UTM or referrer). Then you can answer the question that matters: *how many qualified leads started in an AI answer?* Arrow Answers walks through it in [connecting AI discovery to CRM leads](https://answers.arrow-ai.us/how-to-connect-ai-discovery-to-crm-leads/).

A low-tech complement: add **“How did you find us?”** to your forms with options like ChatGPT, Perplexity, Gemini and Google. Self-reported attribution catches the clicks that analytics loses. Arrow does exactly this on its own audit form.

## How to read the numbers

- **Track the trend, not the absolute.** Growth in AI referrals after you publish or fix pages is a meaningful signal.
- **Look at landing pages.** If AI visits land on a pricing page, engines are citing it on buying questions: protect it.
- **Compare engagement, not assumptions.** AI referral sessions are often well-qualified, but don’t assume they convert better; measure it. See [does AI traffic always convert better?](https://answers.arrow-ai.us/does-ai-search-traffic-convert-better/)
- **Don’t treat zero as zero visibility.** If referrals are flat but your share of voice is rising, your brand is being recommended without clicks, which still shapes decisions.

## The full scorecard

AI referral traffic belongs in a three-part AI visibility scorecard:

1. **In the answer:** mentions, citations, recommendations and accuracy (see [AI share of voice](/blog/ai-share-of-voice/)).
2. **On the site:** AI referral sessions, landing pages, engagement.
3. **In the pipeline:** leads and revenue with an AI first touch.

Arrow’s managed GEO plans connect all three. Start with the [free AI visibility audit](https://arrow-ai.us/free-audit/) to see the first layer for your brand.
