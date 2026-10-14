---
title: "Mentions, citations, recommendations: the three signals of AI visibility"
seoTitle: "AI Mentions vs Citations vs Recommendations, Explained"
description: "Mentioned, cited or recommended in AI answers? Why each signal needs different work, and how to score them without misleading yourself."
category: Foundations
order: 3
published: "2026-10-13"
updated: "2026-10-13"
motif: nodes
coverAlt: "A constellation of blue nodes connected by thin lines to one bright central node, representing a brand linked to the sources that cite it."
keywords: ["AI mentions", "AI citations", "AI recommendations", "brand mentions in ChatGPT", "AI visibility signals"]
summary: "A mention means an AI answer names your brand. A citation means the answer links to a source — ideally your own page. A recommendation means the answer suggests your brand for the buyer's need. They overlap but are independent: you can be cited and not recommended, or mentioned without a citation. Score each one separately, plus accuracy, across a fixed set of buyer questions."
takeaways:
  - "Mention = your name appears. Citation = a source is linked. Recommendation = you are suggested."
  - "The signals are independent; one does not imply the others."
  - "Recommendations move pipeline; citations prove your content is used; mentions show awareness."
  - "Always score accuracy too — being recommended with the wrong price is a liability."
faq:
  - q: "Which AI visibility signal matters most?"
    a: "Recommendations have the most direct commercial value, but citations of your own pages are the signal you can influence most directly through content and technical work. Track all of them."
  - q: "Can I be cited without being mentioned?"
    a: "Yes. An engine can use your guide as a source for a general explanation without naming your brand in the answer text. That is useful source visibility but not brand visibility."
  - q: "Do all AI engines show citations?"
    a: "No. Perplexity, Google AI Overviews, AI Mode, Copilot and ChatGPT search usually show sources; answers generated without live retrieval may show none. Record whether sources were shown at all."
sources:
  - title: "Google Search Central — AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
  - title: "Aggarwal et al. — GEO: Generative Engine Optimization (arXiv:2311.09735)"
    url: "https://arxiv.org/abs/2311.09735"
ecosystem:
  - title: "What is the difference between an AI mention, citation and recommendation?"
    url: "https://answers.arrow-ai.us/brand-mention-citation-and-recommendation/"
    note: "Arrow Answers"
  - title: "What does Arrow GEO measure today?"
    url: "https://answers.arrow-ai.us/what-does-arrow-geo-measure/"
    note: "Arrow Answers"
  - title: "Free AI visibility audit — see how AI engines talk about your brand"
    url: "https://arrow-ai.us/free-audit/"
    note: "Arrow AI"
---

In the Arrow film, three badges light up one after another: **CITED ✓ — RECOMMENDED ✓ — SOURCE LINKED ✓.** That sequence is the whole game. But most AI visibility reports collapse those signals into one vague score — and then teams fix the wrong thing.

Here’s how to separate them.

## The definitions

**Mention.** The answer text names your brand. *“Options include Northwind, Your Brand and Contoso.”*

**Citation.** The answer links to a source to support what it says. The source can be your page, a competitor’s, a review site or a forum. A citation of **your own URL** is the one you want to count.

**Recommendation.** The answer suggests your brand for the buyer’s situation. *“For a 20-person team, Your Brand is the best fit because…”*

**Accuracy.** Whatever the answer says about you — offer, pricing, locations, audience — is correct and current.

## Why they’re independent

The signals come from different mechanisms, so they move independently:

| Situation | Mention | Citation (own URL) | Recommendation | What it usually means |
|---|---|---|---|---|
| Engine uses your guide but suggests a rival | — | ✓ | — | Strong content, weak proof or positioning |
| Engine names you from memory, cites others | ✓ | — | — | Awareness, but your pages aren’t retrieved or aren’t useful |
| Engine recommends you citing a review site | ✓ | — | ✓ | Third-party evidence is doing the work |
| Engine recommends you citing your pricing page | ✓ | ✓ | ✓ | Full signal — protect it |
| Engine describes you wrongly | ✓ | ? | ? | Accuracy problem — urgent |

Each row needs a different fix. That’s why one blended number is dangerous: a rising “score” can hide a falling recommendation rate.

## What drives each signal

### Mentions → entity strength

To be named, the engine must associate your brand with the category and the need. That association comes from consistent descriptions across your site and the wider web, and from how often credible sources talk about you in context. Work on [entity clarity](/blog/entity-clarity-ai-search/) and [third-party evidence](/blog/third-party-sources-ai-trust/).

### Citations → retrievable, quotable pages

To be cited, your page must be fetched and judged useful for the specific question. That depends on crawler access, indexation and whether the page answers the question directly with supportable facts. Work on the [technical checklist](/blog/technical-ai-visibility-checklist/) and [citable content](/blog/content-ai-engines-cite/).

### Recommendations → proof and fit

To be recommended, the engine needs reasons: specialisation, reviews, case studies, transparent pricing, comparisons, awards — evidence that you are the right fit for this buyer. Generic “we’re the best” copy doesn’t help. Specific, verifiable claims do.

### Accuracy → one source of truth

Wrong answers usually come from outdated pages, inconsistent directory listings or third-party articles that were never corrected. Maintain one canonical page per fact, keep profiles in sync, and when an answer is wrong, preserve the evidence and fix the source. Arrow Answers covers the process in [what to do when an assistant describes your business incorrectly](https://answers.arrow-ai.us/how-to-correct-wrong-ai-answers-about-your-business/).

## How to score the signals

For each question in your panel, on each engine, on each date, record:

- **Mentioned:** yes / no (and position in the list, if any)
- **Own URL cited:** yes / no, plus which URL
- **Recommended:** yes / no — use a strict rule, e.g. *named as a top choice for the stated need*
- **Accuracy:** correct / minor issue / wrong, with a note
- **Sources shown:** every cited domain, so you can see who shapes the answer

Then roll up per engine and per intent group. You’ll quickly see patterns like *“cited on how-to questions, never recommended on best-of questions”* — which is a precise, fixable diagnosis.

The full measurement routine is in [how to measure AI visibility](/blog/how-to-measure-ai-visibility/), and the competitive view in [AI share of voice](/blog/ai-share-of-voice/).

## Common scoring mistakes

- **Counting any citation as a win.** A citation of a competitor’s review of you is not your page being cited.
- **Treating a mention in a list of ten as a recommendation.** Define recommendation strictly.
- **Ignoring answers with no sources.** They still shape opinion; score mentions and accuracy anyway.
- **Testing once.** Answers vary between runs. Repeat questions and look at rates, not single results.

## Start with your own baseline

You don’t need software to start: a spreadsheet, 20 questions and an hour per engine will show you which of the three signals is weakest. Or let the Arrow team do it — the [free AI visibility audit](https://arrow-ai.us/free-audit/) reviews how AI engines describe your brand and where the signal breaks.
