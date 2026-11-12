# R4: Benchmarks and statistics for Walkito (Nov 11, 2026)

Question: are 0-1 trials from ~65 Meta installs bad luck, or a real problem? And what would the numbers need to look like to make money at $2.50 per install?

Short answer: **Both "bad luck" and "real problem" are partly true, but the money question is already answered.** At plain Health & Fitness medians, 0 trials from 65 installs has about a 1% chance. At the "other paid channels" average (Meta/TikTok-type traffic), it has about a 39% chance, so it may just be normal paid-social traffic. Either way, even the most optimistic reading of our data (upper 95% bound) is far below the ~13-21% install-to-trial Walkito needs to break even at $2.50 CPI. Getting more data won't change that. Only a better funnel or cheaper or better-intent traffic will.

---

## 1. Benchmarks

### 1.1 Install (download) to trial

| Segment | Rate | Source | Evidence |
|---|---|---|---|
| Health & Fitness median, D30, all paywall types (2026) | **6.9%**, top 10% above 23% | RevenueCat SOSA 2026 https://www.revenuecat.com/state-of-subscription-apps/ | STRONG (115k apps, matches 2024: 6.7%, 2025 similar) |
| North America median, all categories | **7.1%**, top quartile above 15.0%, top 10% near 25% | RevenueCat SOSA 2026 (same URL) | STRONG |
| High-priced apps median | 8.9% (top quartile 16.5%) vs low-priced 4.4% | RevenueCat SOSA 2026 | STRONG |
| Health & Fitness install-to-trial, average across plan durations | **9.5%** | Adapty SOIS 2026 https://adapty.io/blog/health-fitness-app-subscription-benchmarks | MEDIUM (average of per-app rates, pulled up by top apps) |
| North America install-to-trial (all categories, average) | **14.5%** vs 7.6-10.2% elsewhere | Adapty SOIS 2026 https://adapty.io/state-of-in-app-subscriptions-report/ | MEDIUM (average, not median) |
| **Other paid channels (Meta, TikTok etc.) install-to-trial** | **1.45%** vs 3.66% Apple Ads | Adapty Apple Ads report 2026 https://uploads.adapty.io/apple_ads_for_subscription_apps_2026.pdf | MEDIUM (1M+ ad groups, 8,000+ apps, but all categories and all paywall types, global) |
| Apple Ads Health & Fitness, US, install-to-**paid** | **7.80%** median | same Adapty Apple Ads PDF, p.9 | MEDIUM |
| Hard paywall apps install-to-trial | not published. **Derived estimate ~20-28%** (10.7% D35 install-to-paid / ~35-40% trial-to-paid, minus direct buyers) | derived from RevenueCat SOSA 2026 | WEAK (my math, not a published number) |

Where the "5-15%" we keep hearing comes from: it is roughly the RevenueCat H&F median (6.9%) up to the Adapty North America average (14.5%). **It is a blended number** (organic + search + paid, freemium + hard paywall). It is not a Meta number.

### 1.2 Paywall view to trial (Health & Fitness, apps that offer a trial)

Adapty "State of Health & Fitness Apps 2026", App Store, 7 Tier-1 markets incl. US, Sep 2025 - Aug 2026, per-app percentiles
https://adapty.io/assets/uploads/docs/health-and-fitness-benchmarks-report.pdf (STRONG for this category, one vendor but large sample)

| Metric | P25 | Median | P75 | P90 |
|---|---|---|---|---|
| Paywall view -> trial start | 4.11% | **9.76%** | 17.39% | 27.40% |
| Trial -> paid | 27.6% | **35.3%** | 45.3% | 59.0% |
| Paywall view -> paid (trial apps, direct or via trial) | 3.40% | 6.10% | 10.31% | 18.07% |
| Paywall view -> paid (no-trial apps) | 4.43% | 7.98% | 11.33% | 15.47% |
| First renewal, annual plans | 7.9% | 15.9% | 23.8% | 33.8% |
| Annual price | $29.99 | $39.99 | $56.99 | $79.99 |

Headline from the report: "1 in 10 paywall viewers starts a trial, 1 in 3 trials pay." US paywall conversion index is 1.15x the app's own 7-market average.

Second Adapty source (State of Paywalls 2026, https://adapty.io/state-of-paywalls/report/): H&F paywall-view-to-trial is 1.46% in LATAM/MEA and US is 3.9x that, so about **5.7% US median** (derived). This counts every paywall view (repeat views too), so it runs lower than the H&F report. MEDIUM. Use 5.7%-9.8% as the "typical US H&F" range per paywall view.

Walkito's 1.0.10 paywall had **no visible exit**. 50 people saw it and 0 started a trial. A hard-paywall onboarding paywall is usually the best-converting placement. Adapty says onboarding paywalls with trials convert best of any placement, at 1.78% install-to-paid on average (https://adapty.io/blog/health-fitness-app-subscription-benchmarks, MEDIUM).

### 1.3 Trial to paid

| Segment | Rate | Source | Evidence |
|---|---|---|---|
| H&F median 2026 | **37.7%** (top quartile 51.4%) | RevenueCat SOSA 2026 | STRONG |
| H&F median 2025 | 39.9% (P90 68.3%) | RevenueCat SOSA 2025 https://www.revenuecat.com/pdf/state-of-subscription-apps-2025.pdf | STRONG |
| North America median | 34.2% | RevenueCat SOSA 2026 | STRONG |
| H&F US median | **33.3%** | Adapty State of Paywalls 2026 | MEDIUM |
| 5-9 day trials, all categories | 37.4% (vs 25.5% for <=4 days, 42.5% for 17-32 days) | RevenueCat SOSA 2026 | STRONG |
| By channel: Meta broad interest 8-15%, Meta lookalike 15-25%, ASA exact 20-35%, organic 30-50% | | Prooflytics https://prooflytics.io/blog/trial-to-paid-by-acquisition-channel | WEAK (agency estimate, no sample size given) |

7-day trial cancels: 39.8% of cancellations happen on Day 0, and 64% by Day 1 (RevenueCat SOSA 2026, STRONG).

### 1.4 Install to paid (Day 0 / Day 7 / Day 35)

| Segment | D35 install -> paid | Source | Evidence |
|---|---|---|---|
| All apps median | 2.0% | RevenueCat SOSA 2026 | STRONG |
| H&F median | **2.9%** (top quartile 6.2%); App Store-only H&F 3.5% | RevenueCat SOSA 2026; App Store split via https://thesocialoutline.com/blog/download-to-paid-conversion-rate-benchmarks | STRONG / MEDIUM |
| North America (users) | 2.8% (P90 10.9%) | RevenueCat SOSA 2026 | STRONG |
| **Hard paywall median** | **10.7%** (floor 4.2%, top quartile 20%, top 10% 38.7%); 2025: 12.1% | RevenueCat SOSA 2026 / 2025 | STRONG |
| Freemium median | 2.1% (2025: 2.2%) | RevenueCat SOSA 2026 / 2025 | STRONG |
| Other paid channels (Meta/TikTok-type) | **0.91%** vs Apple Ads 1.92% | Adapty Apple Ads 2026 | MEDIUM |
| Apple Ads, US, H&F | 7.80% | Adapty Apple Ads 2026 | MEDIUM |

Timing:
- **Day 0:** 82.1% of H&F trial starts happen on install day (RevenueCat 2026). Adapty says 86-90%. So the 65 Meta users from Nov 9-11 will add almost no more trials later. STRONG.
- **Day 0 paid:** about 1/3 of all paid conversions happen on Day 0 for both hard paywall and freemium (RevenueCat 2026). STRONG.
- **Day 7:** 60%+ of conversions happen by Day 7. Hard paywalls spike at Day 4-7 (25.7%) because 7-day trials end then (RevenueCat 2026). STRONG.
- **Day 35:** the headline window above. 23% of freemium conversions come after week 6. Hard paywall conversions come in mostly by week 1.

Revenue per install, hard paywall: D14 $2.32, D60 **$3.09** median (RevenueCat 2026). H&F (all models) D60 $0.66. STRONG. Compare: Walkito pays **$2.48 per install**. A median hard-paywall app makes about $3 per install in 60 days. A median H&F app makes $0.66.

### 1.5 By plan type (weekly vs yearly)

- Weekly plans start trials at up to 5.4x the rate of annual. At upper-mid prices, install-to-trial is **9.8% weekly vs 1.8% annual** (all categories). Adapty SOIS 2026 https://adapty.io/blog/mobile-app-monetization-2026/ MEDIUM.
- But H&F is the one category where **annual dominates**: 60.6% of revenue (Adapty). RevenueCat says 68% of H&F subscriptions and 59% of revenue are annual. STRONG (two sources agree).
- In H&F trial apps, payers pick annual 63%, monthly 16%, weekly 12%. Without a trial: annual 42%, monthly 37% (Adapty H&F report). MEDIUM.
- H&F weekly with trial: 9.5% install-to-trial, 42.2% trial-to-paid, 67.7% first renewal (Adapty SOIS 2026 via https://adapty.io/blog/health-fitness-app-subscription-benchmarks). MEDIUM.
- Walkito's $59.99/yr is at the H&F **P75 annual price** ($56.99, P90 $79.99). Higher prices correlate with *higher* install-to-trial (RevenueCat), so price alone is not the likely killer. MEDIUM.

### 1.6 US, older and female audiences

- US/North America: install-to-trial is about 2x the rest of the world (RevenueCat 7.1%; Adapty 14.5%). Trial-to-paid is 33-34%. STRONG.
- Age: one Meta case. Value-weighted trial signals cut under-25 spend from about 25% to under 10%, and **paid subs from users 35+ grew 3x at the same spend**. The team's history showed higher LTV for 35+. Before/after, not randomized. https://adapty.io/blog/same-budget-better-users-signal-engineering-on-meta MEDIUM.
- Older users want tech subscriptions less. Only 15% of Gen X and 12% of Boomers planned $101+/mo on wellness subscriptions, vs 26% of Gen Z/millennials. Boomers lean toward supplements over apps (Recurly survey https://recurly.com/blog/consumers-want-health-and-wellness-subscriptions). WEAK for app conversion.
- **No public benchmark splits install-to-trial by gender or 45-65 age.** Gap, not found in RevenueCat, Adapty, AppsFlyer or Superwall public data.

### 1.7 Other sources checked
- AppsFlyer Subscription Marketing Report 2026 (https://www.appsflyer.com/resources/reports/subscription-marketing-report): paid installs +47% YoY, iOS organic -8%. H&F leads direct paid conversion without a trial at 7.1%. No H&F trial-rate split by channel. MEDIUM.
- Superwall: the docs define its benchmark metrics (install-to-first-purchase, paywall conversion), but the numbers sit inside a logged-in dashboard. Skipped (needs login).
- Purchasely, Adjust, Sensor Tower, Business of Apps: no public H&F trial funnel numbers better than the above in this pass.

---

## 2. Statistics for Walkito

Data: Meta users Nov 9-11. 65 started onboarding (I treat this as "installs"), 50 saw the paywall, 35 reached the plans screen, 3 tapped "Start free week", 0 trials. A possible 1 trial came from a "TikTok" answer.

Model: each user starts a trial independently with chance p. Then:
- P(0 trials) = (1 - p)^n
- P(0 or 1) = (1 - p)^n + n * p * (1 - p)^(n-1)

### 2.1 How likely is 0 or 1 trial at benchmark rates?

**Per install (n = 65)**

| Assumed install->trial | Source | Expected trials | P(0) | P(0 or 1) |
|---|---|---|---|---|
| 1.45% | Adapty "other paid" avg | 0.9 | **38.7%** | **75.7%** |
| 3.0% | midpoint guess | 1.9 | 13.8% | 41.6% |
| 5.0% | | 3.3 | 3.6% | 15.8% |
| 6.9% | RevenueCat H&F median | 4.5 | **1.0%** | **5.6%** |
| 9.5% | Adapty H&F avg | 6.2 | 0.2% | 1.2% |
| 14.5% | Adapty N. America avg | 9.4 | <0.1% | <0.1% |
| ~25% | hard paywall (derived) | 16 | ~0 | ~0 |

Worked example at 6.9%: 0.931^65 = 0.0097, or 1.0%. Adding one trial: 65 * 0.069 * 0.931^64 = 0.046, so the total is 5.6%.

**Per paywall view (n = 50)**

| Assumed view->trial | Expected | P(0) | P(0 or 1) |
|---|---|---|---|
| 4.11% (H&F P25) | 2.1 | 12.3% | 38.7% |
| 5.7% (US median, State of Paywalls) | 2.9 | 5.3% | 21.4% |
| **9.76% (H&F median)** | 4.9 | **0.6%** | **3.8%** |
| 17.39% (P75) | 8.7 | <0.1% | 0.1% |

**Per plans-screen view (n = 35)**, using the same paywall rates. This is generous, because the plans screen comes after some users have already dropped:

| Assumed | Expected | P(0) | P(0 or 1) |
|---|---|---|---|
| 4.11% | 1.4 | 23.1% | 57.7% |
| 9.76% | 3.4 | 2.7% | 13.1% |
| 17.39% | 6.1 | 0.1% | 1.0% |

**3 taps on "Start free week", 0 trials.** I have no published benchmark for tap-to-completed-purchase on the Apple sheet, so this part is WEAK. If 60% of tappers normally complete, P(0 of 3) = 0.4^3 = 6.4%. At 80% it is 0.8%. 0 of 3 is a yellow flag for the purchase step (sheet errors, confusing price, Face ID friction, or sandbox/StoreKit issues). Check the RevenueCat/StoreKit logs for cancelled or failed purchases.

**What the data allows (95% confidence intervals, exact Clopper-Pearson):**
- 0/65 installs: true install->trial is between 0% and 5.5%. With 1/65: 0.04% to 8.3%.
- 0/50 paywall views: 0% to 7.1%. With 1/50: 0.05% to 10.6%.
- 0/35 plans views: 0% to 10.0%.

**Reading:**
1. Compared with H&F medians (6.9% per install, 9.76% per paywall view), the result is very unlikely to be bad luck (1-6%). Something is below normal.
2. Compared with the paid-social average (1.45%), 0-1 trials is the **most likely** outcome (76%). So "Meta install-optimized traffic converts badly" fully explains the data, with no paywall bug needed.
3. We **cannot yet tell** whether Walkito is "below P25" or just "P25-ish" at the paywall: P(0 or 1 | 4.11%) = 39%.
4. Caveat: the 65 users are mixed across 1.0.10 (no exit), 1.0.11 and 1.0.12. That mixing makes each version's sample even smaller. Don't draw per-version conclusions from this batch.

### 2.2 How much data to tell a real problem from bad luck

**Rule A: "zero trials is no longer luck."** This is the n where P(0 trials) drops below 5% (or 1%) if the true rate equals the benchmark. Formula: n = ln(0.05) / ln(1 - p).

| If true rate is | 0 trials becomes <5% likely after | <1% after |
|---|---|---|
| 1.45% per install (paid avg) | 206 installs | 316 |
| 6.9% per install (H&F median) | 42 installs | 65 |
| 14.5% per install | 20 installs | 30 |
| 4.11% per paywall view (P25) | 72 views | 111 |
| 9.76% per paywall view (median) | **30 views** | 45 |
| 17.4% per paywall view (P75) | 16 views | 25 |

**Rule B: "tell median from bad."** Exact binomial, one-sided alpha 5%, power 80%:

| Compare | Sample needed | Flag "bad" if trials <= |
|---|---|---|
| 9.76% vs 4.11% per paywall view (median vs P25) | **~132 paywall views** | 7 |
| 9.76% vs 4.88% (median vs half of median) | ~183 views | 11 |
| 6.9% vs 3.45% per install (H&F median vs half) | ~261 installs | 11 |
| 14.5% vs 6.9% per install | ~105 installs | 9 |
| 6.9% vs 1.45% per install (H&F median vs paid avg) | ~90 installs | 2 |

**Rule C: "do we break even?"** This is the question that matters for spend, and it needs far less data:
- Break-even needs about **13.2-20.8% install->trial**, or about **17-27% paywall-view->trial** (see 2.3).
- P(0 or 1 trials in 65 | 13.2%) = 0.1%. P(0 or 1 in 50 views | 17.1%) = 0.1%.
- So **we already know, with more than 99% confidence, that the current Meta funnel does not break even.**

**Practical stop rules for the new version (1.0.12+), at ~$50/day (~20 installs/day, ~15 paywall views/day):**
- After **30 paywall views** (~2 days, ~$75) with **0 trials**: that is under 5% likely if the paywall were at median (9.76%). Stop and fix the funnel, don't spend more.
- After **60 paywall views** (~4 days, ~$150): 5+ trials is the minimum to keep going. P(<=4 | 17.1% break-even rate) = 1.7%, so 4 or fewer means "not break-even".
- After **100 paywall views** (~7 days, ~$260): 10+ trials means it is plausibly at break-even. 9 or fewer means below break-even (P = 1.6% if the true rate were 17.1%). 4 or fewer means below the H&F median (P = 2.8% at 9.76%).

### 2.3 Cost per trial and per payer at $2.50 CPI

Inputs:
- $59.99/yr. Net after Apple: $50.99 with the Small Business Program (15%), or $41.99 at 30%.
- Trial-to-paid: 33.3% (Adapty US H&F) or 37.7% (RevenueCat H&F).
- Cost per trial = CPI / install->trial. Cost per payer = cost per trial / trial->paid.

| Install->trial | Cost per trial | Cost per payer @33.3% | @37.7% |
|---|---|---|---|
| 1.45% (paid avg) | **$172** | $517 | $456 |
| 3% | $83 | $250 | $221 |
| 5% | $50 | $150 | $133 |
| 6.9% (H&F median) | **$36** | $109 | $96 |
| 9.5% (Adapty H&F avg) | $26 | $79 | $70 |
| 14.5% (N. America avg) | $17 | $52 | $46 |
| ~25% (hard paywall, derived) | $10 | $30 | $27 |
| **Walkito actual** ($164 spent, 0-1 trials) | **$164 to infinite** | n/a | n/a |

**Break-even (first-year cash, before refunds):**
- Max cost per payer is about **$51** (15% fee) or $42 (30% fee).
- Max cost per trial = $51 x trial->paid = **$17.0 at 33.3%, $19.2 at 37.7%**, $12.7 at 25%. That matches the $12-19 target.
- Needed install->trial at $2.50 CPI: $2.50 / $19 = **13.2%** (optimistic) to $2.50 / $12 = **20.8%** (cautious).
- Needed paywall-view->trial: 50 of 65 installs see the paywall (77%), so **17-27%**. That is **H&F P75 to P90**.
- Needed plans-screen->trial (35/65 = 54% reach it): **25-39%**.
- Annual renewal adds little. Median H&F first annual renewal is 15.9%, so about +$8 per payer in year 2. Even with that, break-even cost per trial only moves to about $20-22.

**Bottom line:** at $2.50 CPI, Walkito needs a **top-quartile H&F funnel** just to break even on year one. A median H&F app (6.9%) would pay about $36 per trial, about 2x the target. An average paid-social funnel (1.45%) would pay about $172 per trial, about 9x the target. So the fix has to be both:
- (a) lift paywall-view->trial from ~0% to 15%+
- (b) get cheaper or better-intent trials: Apple Ads (US H&F install-to-paid 7.8%), or Meta optimizing for a trial event instead of installs

---

## 3. Rule flags
- None of the benchmark actions above need health claims. Any "weekly plan" test must show the full price, billing period and auto-renew terms clearly. That's Apple guideline 3.1.2 and FTC negative-option / ROSCA, plus California and NY auto-renew laws.
- Don't make the "Not now" or close control hard to find. Apple reviewers reject paywalls that hide the exit, and the 1.0.10 paywall had no visible exit (risk).
- The one-time offer after "Not now" must not use fake countdowns or fake scarcity (FTC dark-patterns guidance).

---

## TOP 5 findings for Walkito

1. **The "5-15%" benchmark is the wrong yardstick for Meta install traffic.** It blends organic, search and paid. Adapty's paid-channel average is **1.45% install->trial, 0.91% install->paid**, vs 3.66% / 1.92% for Apple Ads. At 1.45%, 0-1 trials from 65 installs is the expected result (76% likely). Evidence: MEDIUM (one large vendor dataset, all categories).
2. **Against H&F medians, our result is not bad luck.** P(0 trials | 65 installs, 6.9%) = 1.0%. P(0 | 50 paywall views, 9.76%) = 0.6%. Some part of the funnel (traffic quality, paywall, or purchase step) is clearly below normal. Evidence: STRONG (benchmarks from RevenueCat + Adapty, standard binomial math).
3. **We already know it doesn't break even. More spend won't "reveal" it.** Break-even at $2.50 CPI needs 13-21% install->trial (17-27% per paywall view, H&F P75-P90). Our 95% upper bound is 5.5% per install, so this is settled with more than 99% confidence. Evidence: STRONG (math on our own data + Apple fee + benchmark trial->paid).
4. **Hard paywalls should convert ~5x better, so the target is realistic for a good funnel.** Hard paywall median D35 install->paid is 10.7% (floor 4.2%), and median RPI is $3.09 by D60, above our $2.48 CPI. Trials start on Day 0 (82-90%), so the onboarding paywall *is* the business. Evidence: STRONG (RevenueCat 2025 + 2026).
5. **3 taps on "Start free week" with 0 completed trials looks off.** Even at a modest 60% sheet completion rate, 0/3 is only 6% likely. Check StoreKit/RevenueCat logs for cancels, errors or "already used intro offer". Also note that no public benchmark covers women 45-65. The only age data says 35+ users pay more on Meta (3x paid subs when spend shifted to 35+). Evidence: WEAK (tap->purchase) / MEDIUM (age case).

## 3 things I would test first

1. **Funnel-only check before any more Meta spend:** run the new version to **30 paywall views**. If 0 trials, stop: at a median paywall that is under 5% likely. Separately, verify the purchase sheet works end to end and pull the 3 failed taps from StoreKit/RevenueCat. Cost: about $75.
2. **Apple Ads exact-match test (heel pain, plantar fasciitis, flat feet) at a small budget**, as a clean read on paywall quality with high-intent users. US H&F Apple Ads install->paid median is 7.8%, about 2.5x Meta-type traffic at the trial step. If those users also don't start trials, the problem is the paywall, not Meta.
3. **On Meta, stop optimizing for installs.** As soon as a trial or custom "plans screen viewed" event is eligible, optimize for it (the value-weighted signal case shows 3x paid subs from 35+ at the same spend). Judge each version on the stop rules in 2.2: 5+ trials per 60 paywall views to continue, 10+ per 100 to call it break-even.
