---
title: "AI share of voice: the metric that replaced rankings"
seoTitle: "AI Share of Voice: How to Calculate It Right"
description: "How to calculate your brand's share of voice in AI answers, which variants to use, and the common traps that make AI share-of-voice numbers misleading."
category: Measurement
order: 5
published: "2026-10-13"
updated: "2026-10-13"
motif: bars
coverAlt: "A spectrum of rounded vertical bars in Arrow blue rising to a central peak, like an audio equalizer, representing share of voice in AI answers."
keywords: ["AI share of voice", "share of voice ChatGPT", "share of model", "AI visibility competitors", "LLM share of voice"]
summary: "AI share of voice is the proportion of brand mentions (or recommendations, or citations) your brand captures across a fixed set of AI answers, compared with a defined competitor set. Calculate it per engine and per intent group from a frozen question panel, state the unit you are counting, and track the trend rather than any single number."
takeaways:
  - "Share of voice = your mentions ÷ all competitor-set mentions, over a fixed question panel."
  - "Always state the unit: mentions, recommendations or citations give different numbers."
  - "Segment by engine and intent; a blended number hides where you win and lose."
  - "Freeze the competitor set and the panel, or the trend means nothing."
faq:
  - q: "What is a good AI share of voice?"
    a: "It depends on the size of your competitor set and your category. A useful benchmark is your share of the market or of search demand: if you hold 20% of the market but 5% of AI recommendations, you have a visibility gap."
  - q: "Is AI share of voice the same as 'share of model'?"
    a: "They are close. 'Share of model' usually refers to how often a model names a brand without live retrieval, while AI share of voice is measured on real answers, often with web search on. Report which one you measure."
  - q: "How often should I calculate AI share of voice?"
    a: "Monthly is enough for most brands. Weekly runs help in fast-moving categories or during launches, as long as the question panel and protocol stay fixed."
sources:
  - title: "Google Search Central — AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
  - title: "Aggarwal et al. — GEO: Generative Engine Optimization (arXiv:2311.09735)"
    url: "https://arxiv.org/abs/2311.09735"
ecosystem:
  - title: "How do you calculate AI share of voice without misleading comparisons?"
    url: "https://answers.arrow-ai.us/how-to-calculate-ai-share-of-voice/"
    note: "Arrow Answers"
  - title: "How does Arrow GEO compare competitors?"
    url: "https://answers.arrow-ai.us/how-does-arrow-geo-compare-competitors/"
    note: "Arrow Answers"
  - title: "AI Visibility Index by Arrow AI"
    url: "https://arrow-ai.us/ranking/"
    note: "Arrow AI"
---

Rank trackers told you where you stood: position 3, position 11. AI answers have no positions — but they do have a shortlist, and you can count how often you’re on it compared with your competitors. That count is **AI share of voice**, and for most brands it’s the clearest single picture of where they stand in AI search.

## The basic formula

> **AI share of voice = mentions of your brand ÷ mentions of all brands in your competitor set**, across a fixed panel of AI answers.

If, across 200 answers, your competitor set is mentioned 400 times in total and you are mentioned 60 times, your share of voice is **15%**.

Simple — but only meaningful if three things are fixed: the **question panel**, the **competitor set** and the **unit** you count.

## Choose your unit (and say which one)

“Share of voice” can mean three different things in AI answers. Each tells a different story:

| Unit | Formula | What it tells you |
|---|---|---|
| **Mention share** | your mentions ÷ all set mentions | Awareness: are you in the conversation? |
| **Recommendation share** | your recommendations ÷ all set recommendations | Preference: are you the suggested choice? |
| **Citation share** | citations of your domain ÷ all cited domains in the set | Source authority: whose pages shape the answer? |

A brand can have 25% mention share and 5% recommendation share — named often, chosen rarely. That gap is the most actionable insight in AI visibility: it usually means your **proof** (reviews, case studies, comparisons, clear pricing) is weaker than your **presence**. See [mentions, citations and recommendations](/blog/mentions-citations-recommendations/).

## Step by step

1. **Freeze a question panel** of 20–50 real buyer questions grouped by intent — the same panel you use for your [AI visibility baseline](/blog/how-to-measure-ai-visibility/).
2. **Define the competitor set**: 3–8 brands buyers actually compare you with. Include the category leader even if you think it’s “not really a competitor”.
3. **Run the panel** on each engine with a fixed protocol (session, location, mode).
4. **Extract every brand mention** from every answer, including position in lists.
5. **Count per unit** — mentions, recommendations, citations — per engine and per intent group.
6. **Compute shares** and compare with the previous period.

## Segment, or the number lies

A single blended share hides everything useful. Always break it down:

- **By engine.** You might lead in Perplexity (which leans on fresh web sources) and trail in a model answering mostly from training data.
- **By intent.** Strong on how-to questions, absent from “best X for Y” questions? That’s a positioning and proof problem, not a content-volume problem.
- **By market or language** if you sell in several.

## Weighting position (optional)

Being named first in a list carries more weight than being named fifth. If you want to reflect that, apply a simple position weight — for example 1.0 for first, 0.7 for second, 0.5 for third, 0.3 after — and publish the weights. Keep the unweighted share alongside it so nobody mistakes the model for the data.

## Traps that make share of voice misleading

- **Changing the panel.** Adding easy branded questions inflates your share overnight. Freeze it; add new questions as a separate series.
- **Changing the competitor set.** Dropping a strong competitor makes everyone else look better.
- **Counting a list of ten as ten recommendations.** Define recommendation strictly.
- **Single runs.** Answers vary between runs. Repeat questions and average.
- **Comparing engines as if they were equal.** Weight engines by how much your buyers actually use them, or report them separately.
- **Ignoring accuracy.** A rising share with a wrong price in half the answers is not a win.

## Turning share of voice into action

Look at who wins the answers you lose, and **which sources the engine cites when it recommends them**. Those cited domains are your roadmap: the review sites, publications, comparison pages and communities you need to appear in — see [third-party sources AI trusts](/blog/third-party-sources-ai-trust/). Then check whether your own pages answer the same questions as directly as theirs — see [content AI engines cite](/blog/content-ai-engines-cite/).

Arrow’s managed GEO plans compare a defined competitor set on your agreed questions every month — the details are in [how Arrow GEO compares competitors](https://answers.arrow-ai.us/how-does-arrow-geo-compare-competitors/). For a first reading of where you stand, start with the [free AI visibility audit](https://arrow-ai.us/free-audit/).
