# D: Hard numbers on paywall and trial conversion (2025-2026), and where Walkito sits

Agent D, Nov 13, 2026. Read-only. No Meta Ad Library used.

I read R4-benchmarks, P2-paywall-psychology, CHECKER and C4 first. This file only adds **new or better** numbers. Things already covered there (RevenueCat H&F 6.9% install->trial, Adapty H&F report 9.76% view->trial, Blinkist timeline +23%, Paywall Index screen-1 loss ~25%, RevenueCat/Dipsea 70.9% sheet completion, Natal, Stardust trial +131%, etc.) are only referenced, not repeated.

Labels: **[verified]** = I read the number in the source myself today. **[reported]** = a vendor, agency or founder claim I could not check against data. **[guess]** = my own math or estimate.

Biggest new source: Adapty published the full **State of Paywalls 2026 data appendix** (78,000+ paywalls, 30,000+ apps, App Store, Oct 2025 - Sep 2026) as a free "Claude skill" on GitHub. It has **US x Health & Fitness x plan length** numbers that the web report only shows as charts. Second: the full 340-page **RevenueCat SOSA 2026 PDF**, which has a Health & Fitness by geography section.

---

## 1. Bottom line

1. **The right yardstick for Walkito's paywall is now known, and it is lower than we used.** US Health & Fitness, **annual plan**, median paywall view -> trial is **3.24%** (top quarter above 9.04%, top 10% above 15.81%). All plans together: 5.73%. R4 used 9.76% (Adapty's H&F-only report, all plans). At 3.24-5.73%, **0 trials from ~25 paywall viewers happens 23-44% of the time**. So the paywall *view* number alone does not prove the paywall is broken. [verified]
2. **The Apple payment sheet is the step that is clearly broken.** Normal: 50-71% of people who tap buy finish the sheet. Walkito: 0 of 4. That is only 0.7-6% likely if the step were normal. Buy taps themselves look **normal or better** (4 of ~25 viewers = 16%, vs a derived normal of ~8-12%). [verified source numbers, guess for the derived range]
3. **Paywall page 1 was the other clear break** (about 40% passed vs a normal ~75%; under 0.1% likely by chance). 1.0.13 already changed it. The reminder page (80% pass vs 86% normal) is fine. [verified Walkito facts from brief, guess on probabilities]
4. **The "1.45% install->trial for paid social" number from R4 is too gloomy for the US.** Adapty's Apple Ads report says that in the US, Apple Ads' lead over other paid channels "collapses to single digits". In rich markets, other paid channels convert installs to paid at about 2.4-5.9%. So US Meta traffic is probably closer to **3-7% install->trial** than 1.45%. [verified quote, guess on the range]
5. **At Walkito's price, even a median Meta app loses money in year 1.** Median Meta cost per paying user is **$57-65**. US Apple Ads is about **$67** per payer. Walkito earns about **$51** per payer in year 1 ($59.99 minus 15%). Health & Fitness payers in North America bring a median **$39** in year 1 (high-priced apps $69). Break-even at $2.35-2.65 per install needs **13-15% install->trial**, which is the top 10% of US H&F annual paywalls. [verified inputs, guess math]
6. **Walkito's prices are high for the category.** US H&F median: annual $35.99 (top quarter $49.99, top 10% $79.99), monthly $9.99 (top quarter $12.99). Walkito $59.99/yr and $14.99/mo are both between the top-quarter and top-10% marks. Higher-priced H&F apps do earn more per payer, but refunds rise (4.5% vs 2.7%). [verified]
7. **Women 55+ are a harder audience to sell an app to, but probably better payers once in.** AARP: fewer than 1 in 5 adults 50+ have ever paid for a health or wellness app, and 60% will not pay for any app they now use free. On Meta, reaching 55+ costs 4x more per impression than 18-24, but they click 3-4x more, so cost per click is flat ($0.44-0.67). No public source splits install->trial by age. [verified]
8. **Paywall design tests: the offer beats the look.** New aggregate numbers: delaying the close button lifts conversion **8-15%** in winning tests, lifetime next to annual **+10-15% revenue**, animation **+13-27%** conversion, trial on annual emphasized **+15-30%**. Matching the paywall to what the ad promised lifted install->trial **+41.5%** (Apple Ads, Adapty). [verified]

---

## 2. What the data says (by question)

### 2.1 Health & Fitness, US, by plan (NEW: Adapty State of Paywalls 2026 appendix)

Source: Adapty State of Paywalls 2026 data appendix, https://github.com/vkharlan-adapt/state-of-paywalls-2026-skill (repo created Oct 14, 2026, report published Oct 16, 2026). Format: median (P25-P75; P90). Rates are per paywall view, so repeat views pull them down a bit. [verified]

| Metric, US Health & Fitness | All plans | Annual | Monthly | Weekly |
|---|---|---|---|---|
| Paywall view -> trial start | **5.73%** (1.58-12.24; 18.12) | **3.24%** (1.21-9.04; 15.81) | 1.57% (0.20-4.81; 7.81) | 1.13% (0.19-6.31; 13.76) |
| Trial -> paid | 33.3% (23.2-48.0; 57.4) | **34.3%** (22.5-50.0; 66.0) | 42.9% (25.9-58.5; 72.1) | 32.0% (20.6-50.0; 72.7) |
| Paywall view -> paid in 30 days (trial or direct) | **2.86%** (1.19-6.49; 10.31) | 1.65% (0.66-3.68; 6.72) | 1.06% (0.26-2.42; 4.51) | 0.30% (0.09-1.30; 3.84) |
| Price (USD) | - | **$35.99** ($24.99-$49.99; $79.99) | **$9.99** ($4.99-$12.99; $19.99) | $5.99 ($3.99-$7.49; $8.99) |
| Lifetime price | $33.99 ($17.99-$59.99; $119.99) | | | |

Other US / H&F numbers from the same appendix [verified]:
- US all categories: view -> trial 6.94%, trial -> paid 26.2%, view -> paid 2.75%. US view -> paid **fell 14%** from FY24 (3.20%) to FY26 (2.75%), while every other region rose.
- H&F everywhere outside the US is much worse: view -> trial 1.46% (LATAM, MEA) to 2.93% (Europe). The Czech organic trial was the exception, not the rule.
- H&F revenue by plan: annual 62.3%, monthly 14.4%, weekly 13.7%, lifetime 2.8%.
- H&F trial lengths: 54.6% of trial starts are 4-7 days, 43.7% are 1-3 days.
- H&F apps using discounts: 21.9%; 17% of H&F first payments are discounted.

### 2.2 Health & Fitness, North America (NEW: RevenueCat SOSA 2026 PDF, H&F section)

Source: https://www.revenuecat.com/pdf/state-of-subscription-apps-2026-sosa.pdf (340 pages, 2026). [verified]

| Metric, H&F North America | Median |
|---|---|
| Trial start rate (download -> trial) | **7.2%** (IN/SEA 2.9%) |
| Trial -> paid | **37.0%** |
| Day 35 download -> paid | **2.7%** |
| Revenue per install D14 / D60 | $0.51 / $0.69 |
| Year-1 realized LTV per payer | **$39.15** |
| Annual share of subscriptions sold | 57.2% |

H&F by price tier (all regions), Year-1 LTV per payer: **low $9.48, mid $26.41, high $68.95** (high top quarter $93.24, top 10% $130.39). [verified]

All categories by price tier (RevenueCat 2026) [verified]:
- Download -> trial: high 8.9%, mid 5.4%, low 4.4% (R4 had this).
- **NEW:** Day 35 download -> paid: high 2.8%, mid 2.0%, low 1.4%.
- **NEW:** refund rate: low 2.7%, mid 3.9%, **high 4.5%**. Hard paywall 2.5% vs freemium 2.9% (no real difference).

Other H&F facts from the PDF [verified]:
- 54% of H&F trials are 5-9 days (highest of any category). Only 18.3% of H&F apps use no trial at all; 59% mix trial and no-trial plans.
- 60% of H&F paywalls show 2 plans (highest category).
- 14% of H&F apps use promotional offers (highest category). Median offer depth in H&F is -47% (shallowest).
- Industry trend: trials of 4 days or less rose from 42.1% to 46.5% of apps, even though 5-9 day trials convert 37.4% vs 25.5%.

### 2.3 By traffic source (NEW and CORRECTED)

| Source | Number | Label |
|---|---|---|
| Adapty Apple Ads 2026, global | Install -> trial 3.66% Apple Ads vs 1.45% other paid; install -> paid 1.92% vs 0.91% (R4 had this) | [verified] |
| **Same report, US** | "In high-tier markets like the US, Norway, Iceland, and Denmark, the lift collapses to single digits." In the top-20 country table, **other paid** install -> paid is 2.38-5.89% (e.g. Ireland 4.87%, New Zealand 5.89%) | [verified] |
| Same report, US Apple Ads economics | $2.51 per download, **15 paying subscribers per $1,000** -> about 3.8% install -> paid and ~$67 per payer (all categories) | [verified inputs, guess math] |
| Same report, US H&F Apple Ads | 7.80% install -> paid median, highest US category (R4 had this) | [verified] |
| **Same report, matched paywalls** | Paywall tailored to the search keyword: install -> trial **+41.5%**, trial -> paid **+24.2%**, ROAS +82.5% by day 92 | [verified, vendor] |
| Adapty Meta benchmarks Q3 2026 (5K apps, 45 countries) | Median cost per paying user **$64.93**, median D7 ROAS 39%. **US D7 ROAS 33%, 26th of 27 countries.** US impression costs 14x an Argentine one. | [verified page; full PDF needs a form, skipped] |
| Same | **55+ costs 4x more per 1,000 impressions than 18-24, but clicks 3-4x more**, so cost per click stays $0.44-0.67 in every age band | [verified] |
| Same | Optimize for Start Trial: $20.28 per trial, $57.32 per payer. Subscribe: $42.77 per payer (already in R2/D2) | [verified] |
| Marcus Burke (Meta ads consultant), GTM Sauce notes, Jun 2026 | "On younger age groups, trial start rate is high, they're cheap ... but then their trial conversion is actually the lowest." 25-34 was the most expensive bucket in his example | [reported] |
| TikTok vs Meta | No vendor dataset. Agencies say: Meta beats TikTok on day-30 ROAS by 15-30% for subscription fitness apps (SEM Nexus); TikTok is 67% age 18-34; Reels trial->paid 12-19% vs TikTok 8-14% (RocketShip HQ estimates, no sample) | [reported, weak] |
| Organic vs paid | Natal (organic-trust brand) 17% download -> trial vs ~6% H&F average (C3 had this) | [reported] |

**What this changes:** R4 said 1.45% install->trial is "the right yardstick for Meta" and that 0 trials was the *most likely* outcome. That number is a global, all-category figure, pulled down by cheap countries. For **US** paid social, a more honest planning range is **3-7% install->trial** [guess, built from the US "single digits" quote, the 2.4-5.9% rich-country other-paid install->paid rates, and RevenueCat's 7.2% H&F North America median]. At 3%, 0 trials in 72 installs is 11% likely. At 5%, 2.5%. At 7.2%, 0.5%. So Walkito's result is more likely a real problem than R4 suggested, and the sheet data (2.6) says where.

### 2.4 By country and age

- US vs rest: US H&F view -> trial is 2-4x other regions (table 2.1). US trial cancel within 24h is 39.8% vs Europe 55.2%. [verified]
- **No public benchmark** splits install -> trial or trial -> paid by age or gender. Checked RevenueCat SOSA 2026 PDF (340 pages), Adapty State of Paywalls appendix, Adapty Apple Ads PDF, Adapty Meta benchmark page. [verified gap]
- What exists for older users:
  - AARP "Unlocking Health and Wellness Apps" (Feb 2025): **fewer than 1 in 5 adults 50+ have ever paid for a health and wellness app**; 57% prefer free with ads. [verified]
  - AARP 2025 Tech Trends: **60% of adults 50+ are not willing to pay for any app they now use free**; only about 6% would pay for a health-related app they use free; 59% say tech is not designed for them. [verified]
  - AARP 2026 Tech Trends (Dec 2025): adults 50+ who pay for digital services pay **$83 a month** on average, and 47% have no budget for it. So the money is there; the trust is not. [verified]
  - Adapty Meta signal case (Oct 2026): a H&F app's users 35+ had higher LTV; value-weighted trial signals tripled 35+ paid subs (R4 had this). [reported, before/after]
- **My read [guess]:** for women 55+ on Facebook, expect install -> trial **below** the US H&F median (more distrust of "free trial", more Apple ID / Face ID friction), and trial -> paid **at or above** the median (older users who do start tend to keep paying). Plan for 2-5% install -> trial and 35-45% trial -> paid, not 7% and 33%.

### 2.5 Trial design: 3-day vs 7-day, cancellations, trial vs no trial

| Finding | Number | Label |
|---|---|---|
| **NEW** H&F trial cancellations (auto-renew turned off), all regions | **20.9% within 1 hour, 31.0% within 24 hours** (lowest category). US all categories: 27.8% / 39.8% | [verified] Adapty appendix |
| **NEW** Annual plan, 1-3 day vs 4-7 day trial (all categories) | Day-one cancel 42.9% vs **32.7%**; trial -> paid 18.9% vs **21.3%** | [verified] Adapty appendix |
| Weekly plan, same split | 3-day wins: trial -> paid 20.9% vs 14.3% | [verified] |
| RevenueCat 7-day trials | 39.8% of cancellations on Day 0, 64% by Day 1 (R4 had this) | [verified] |
| **NEW** Zumba (dance fitness, Sub Club Aug 2025) | Monthly $14.99 **no trial** + annual $99 with **7-day** trial: annual mix 30% -> 60%, trial -> paid from the 30s to **~56%**, no drop in trial starts | [reported] GTM Sauce notes of Sub Club |
| **NEW** $1.99 paid 30-day trial instead of no-trial monthly (10 apps pooled, Vahe Baghdasaryan) | D90 ARPU $2.23 -> $2.89 (+30%); paying 10.2% -> 12.7% | [reported] LiftArchive |
| Adapty H&F report | No-trial apps 8.0 payers per 100 views vs trial apps 6.1 (C/CHECKER had this) | [verified] |

Walkito's setup (7-day trial on annual, no trial on monthly) matches the Zumba pattern and the H&F majority. Trial length is not the problem.

### 2.6 The Apple payment sheet ("tap buy, then cancel")

| Finding | Number | Label |
|---|---|---|
| Superwall (Jake Mor, Jun 2024; Superwall docs) | "Only ~50% of users who start an In-App Purchase actually end up completing it" (CHECKER verified the quote) | [reported, no method] |
| RevenueCat / Dipsea clean A/B (2025) | 70.9% of CTA taps became a trial or purchase; trial starts alone 65.6% (C4/CHECKER had this) | [verified by CHECKER] |
| **NEW** Superwall 18-company abandon study (Aug 2024) | 87,403 abandoners vs 438,144 new installs in the same apps, so **roughly 1 in 5 installs tap buy and then close the sheet**. A discount paywall shown right after converted **6.3%** of them, was 17% of revenue, refund rate 3.3% vs 6.8% | [verified, my ratio is a guess] |
| **NEW** Superwall on *why* people abandon | "A big portion is price uncertainty, where the user just wants to see what the total actually comes out to." Superwall calls it a high-intent signal | [reported] |
| **NEW** Superwall docs: normal technical failure rate | **5-6%** of checkouts fail (declines, fraud checks, network) | [reported] |

So a normal sheet keeps 50-71% of tappers. Walkito kept 0 of 4. P(0 of 4) = 6.3% at 50%, 1.4% at 65.6%, 0.7% at 70.9%. [guess math]

### 2.7 Paywall design A/B tests with numbers (only items new to our folder)

| Test | Result | Label / source |
|---|---|---|
| **Delay before the close button** (Adapty, winning tests) | Conversion **+8-15%**. 22% of apps delay it, usually 3-5 s; only 2% wait over 10 s | [verified] Adapty appendix 5.3 |
| **Lifetime plan next to annual** | Revenue **+10-15%** in winning tests. H&F offers lifetime most (20% of apps) | [verified] Adapty |
| Trial on annual, emphasized | Conversion +15-30% | [verified] Adapty |
| Animation and stronger visuals | Conversion +13-27%, ARPU +16-34% | [verified] Adapty |
| Social proof on paywall | Conversion +10-30% (P2 had this) | [verified] |
| Delay-before-close vs trial explainer vs personalization (ARPU) | Annual-first layout +25-40%, trial explainer +12-36%, onboarding personalization +13-35%, price increase +15-25% | [verified] Adapty |
| **Video on paywall: Stardust** | Video background +67% conversion, vs +55.7% for the same paywall without video (video itself ~+7% relative) | [reported] Superwall via LiftArchive |
| **Video on paywall: V1 Sports** | Video added to paywall: about **+80% revenue** | [reported] LiftArchive list, no sample |
| **Kovalee** | A 10-second video preview before the paywall beat showing the paywall at once | [reported] LiftArchive, no number |
| **Unchaind** | Visual preview of premium features instead of a text list: over +50% conversion, +64% estimated ARPU | [reported] Superwall via LiftArchive |
| "No Payment Due Now" label above the button | Superwall: "a classic tweak we've seen work over and over"; **never quantified** | [reported] |
| Superwall "Design your trial" + multi-page | "Almost universally" lifting conversion and ARPU (Oct 2025), no numbers | [reported] |
| Price per month shown for annual (Mojo) | Revenue per view +8% in the US (vs +45% Brazil) - so per-month framing helps least in the US (P2 had the number) | [verified by P2] |
| BuyBye yearly price +50% | Conversions -19%, proceeds per user +25% | [reported] Superwall via LiftArchive |
| Single vs multi-plan (Superwall, 32M paywall opens, 2022) | 2 products beat 1 by 61%, 3 beat 2 by 44% (older data; C/P2 had it) | [verified] |
| Adapty: what wins most often (LTV) | Localization 62%, trial 60%, plan duration 59%, number of plans 57%, price 46%, visual/text only **35%** | [verified] |

### 2.8 Paywall in onboarding vs later, and repeat views (NEW H&F numbers)

- H&F onboarding paywall view -> paid **1.04%** vs later paywalls **0.29%**; **$163 vs $48** revenue per 1,000 views. [verified] Adapty appendix 4.4
- H&F revenue by where it started: onboarding **43.9%**, later paywalls **35.8%**, other paths 20.3%. H&F is the category that relies least on onboarding. [verified]
- H&F buyers: only **39.9% buy on the first paywall view**; 21.9% on the 2nd; **24.2% need 5+ views**. Across all apps 84% of later-view buyers still buy within 24h of the first view. [verified]
- Second-chance paywall right after a close: converts 0.88x the main paywall, typical discount 38% (P2 had this).

**For Walkito:** the 1.0.13 flow (Not now -> Day 1 -> prices again) is exactly what H&F data supports. Expect a meaningful share of trials to come on the 2nd-5th view, mostly the same day.

---

## 3. Benchmark table: what is "normal" for Walkito, and where it falls short

App: iPhone, US, women 55+ from Facebook (Advantage+, install goal), hard paywall, yearly $59.99 with 7-day trial (preselected), monthly $14.99 no trial. Walkito numbers are from the brief (1.0.11-1.0.12, ~25 Meta users who reached the paywall; ~72 Meta installs; ~$190 spend).

| Step | Normal range (source) | Walkito now | Verdict |
|---|---|---|---|
| Cost per install, US iOS Meta, non-gaming | $2.50-5.00 (RocketShip HQ estimate) [reported] | $2.35-2.65 | Normal to cheap |
| Install -> finishes onboarding | No solid public benchmark. ~60-85% [guess] | "almost all" (~95%) | Above normal |
| ATT opt-in | ~35% (Adjust, in R2) [reported] | ~27% | Slightly low |
| Paywall page 1 -> page 2 | ~75% pass (Paywall Index, in C4) [verified by C4] | ~40% (10 of 25) | **Below normal** (under 0.1% likely by chance). Fixed in 1.0.13, not yet measured |
| Reminder page -> plans page | ~86% pass (Paywall Index) [verified by C4] | ~80% (8 of 10) | Normal |
| Buy taps per paywall viewer | ~8-12% (5.73% view->trial divided by 50-71% sheet completion) [guess] | ~16% (4 of 25) | Normal or better |
| Buy tap -> trial (Apple sheet) | 50-71% (Superwall, RevenueCat) [reported / verified] | **0 of 4** | **Below normal** (0.7-6% likely by chance). Sharpest break |
| Paywall view -> trial, US H&F | Annual 3.24% (P75 9.04%, P90 15.81%); all plans 5.73% (P75 12.24%) (Adapty) [verified] | 0 of ~25 | Not provable from views alone: 23-44% likely at median |
| Install -> trial, US H&F | 7.2% median (RevenueCat NA); US paid social likely 3-7% [guess]; global "other paid" 1.45% [verified] | 0 of ~72 | Probably below: 11% likely at 3%, 2.5% at 5%, 35% at 1.45% |
| Trial cancelled within 24h | H&F 31%, US 40% (Adapty) [verified] | n/a (1 trial, Czech) | Unknown |
| Trial -> paid, US H&F annual | 34.3% (P25 22.5%, P75 50%) (Adapty); 37.0% (RevenueCat H&F NA) [verified] | n/a | Unknown. Women 55+ may be higher [guess] |
| Install -> paid by day 35 | H&F NA 2.7%; hard paywall median 10.7%, floor 4.2% (RevenueCat) [verified] | 0% | Below |
| Cost per trial on Meta | $20.28 median when optimizing Start Trial (Adapty); "$20-40 healthy" (Airbridge via agency) [verified / reported] | at least $190 (0 trials) | Far below |
| Cost per paying user | Meta median $57-65 (Adapty); US Apple Ads ~$67 [verified / guess math] | none yet | - |
| Year-1 value per payer | H&F NA $39.15 median; high-price H&F $68.95 (RevenueCat) [verified] | ~$51 net if a trial converts ($59.99 x 0.85) [guess] | In range |
| Annual price | US H&F $35.99 median, P75 $49.99, P90 $79.99 [verified] | $59.99 | High (above P75) |
| Monthly price | US H&F $9.99 median, P75 $12.99, P90 $19.99 [verified] | $14.99 | High (above P75) |
| Refund rate | High-priced apps 4.5%, hard paywall 2.5% (RevenueCat) [verified] | n/a | Watch |

**Break-even check [guess math]:** year-1 net per payer ~$51. At $2.35-2.65 per install and 34.3% trial -> paid, Walkito needs **13.4-15.1% install -> trial**. That is about the **top 10%** of US H&F annual paywalls (P90 15.81%). A median app (3-7%) would pay $100-230 per payer. Even the median Meta advertiser pays $57-65 per payer, more than Walkito's year-1 revenue. Normal apps live with this because of renewals (H&F annual first renewal median 15.9%, Adapty H&F report), higher prices, or cheaper channels. It means the paywall fix is necessary, but probably not enough on its own at $59.99 and Meta US prices.

**Updated stop rules (replace R4's "30 views" rule, which used 9.76%) [guess math]:**
- To make "0 trials" less than 5% likely at the **US H&F annual median (3.24%)**, you need about **91 paywall views**. At the all-plans median (5.73%), about **51**. R4's 30 views only works if you assume the top-quarter rate.
- But for **break-even** you need ~13-15%. At 15%, 0 trials in 20 views is only 4% likely. So: **0 trials after 20-30 paywall views on 1.0.13 = not break-even, stop spend**, even though it does not yet prove the paywall is below median.
- Sheet: if 1.0.13 gets **5 or more buy taps with 0 completed trials**, that is only 3% likely at a 50% completion rate. Treat it as a defect, not taste.

---

## 4. What Walkito does differently (screen by screen)

- **Page 1 (old versions):** promise with only "Try it free", no exit, no price. Lost ~60% vs ~25% normal. 1.0.13 adds "Not now" + a price line. Good.
- **Page 2 reminder:** normal pass rate. It says "Walkito Plus", which never appeared before. Small risk of "what is Plus?" doubt, not a big leak by the numbers.
- **Page 3 prices:** buy taps are fine. The leak is **after** the tap. Superwall says sheet abandons are often "price uncertainty": people tap to see what the total really is. Walkito's yearly is above the US H&F P75 price, and the Apple sheet shows "$59.99/year" in plain text. For a 55+ user who read "free" on three screens, that is the first big number. This fits the 0/4 pattern. [guess]
- **No intent match:** the ad was a cartoon mascot "free videos vs Walkito" comparison. Adapty's matched-paywall data (+41.5% install->trial) says the paywall should continue the ad's story ("You saw it: free videos don't follow a plan. Here's yours"). Walkito's paywall does not reference the ad. [guess]
- **Lifetime is hidden** behind "Show all plans". Adapty: lifetime next to annual lifted revenue 10-15% in winning tests, and H&F is the category that sells lifetime most.
- **Prices above P75** on both plans in a category where the median annual is $35.99.

---

## 5. What Walkito should copy / test (ranked)

| # | What | Why (number) | Expected effect | Effort |
|---|---|---|---|---|
| 1 | **Sheet audit + reason capture** (1.0.13 has "What stopped you?"; add StoreKit result codes: userCancelled vs failed vs pending vs ineligible) | 0/4 vs 50-71% normal; 5-6% failures are normal, more means a bug | Tells us if it is a bug, eligibility, or price shock. Every later test depends on it | S |
| 2 | **Put the exact Apple-sheet wording on page 3, above the button:** "$0.00 today. Nov 20: $59.99 for 1 year. Cancel before and pay nothing." Plus the "No payment due now" line | Superwall: abandons are mostly price uncertainty; "No Payment Due Now" is a repeat winner (unquantified); Masterly "$0.00" +11.9% (P2) | Raise sheet completion toward 50%+ | S |
| 3 | **Measure 1.0.13 page-1 pass rate vs 75%** before changing anything else | Page 1 was the only other clear break | If pass rate reaches 65-75%, keep | S |
| 4 | **Show lifetime next to yearly (not behind "Show all plans")**, as a "pay once" option | +10-15% revenue in Adapty winning tests; H&F sells lifetime most; older buyers fear renewals (B1) | More revenue per viewer, may rescue sheet cancels from renewal fear | S-M (already a product) |
| 5 | **Price test: yearly $44.99-49.99 vs $59.99**, judged on revenue per paywall view, not trials | US H&F annual P75 is $49.99; BuyBye-type tests show conversion -19% when price +50% | Higher view -> trial; revenue roughly flat or up | M (new product, review) |
| 6 | **Match the paywall headline to the winning ad** (mascot, "a plan, not random videos") | Adapty matched paywalls: +41.5% install->trial, +24.2% trial->paid | Moderate lift, cheap | S |
| 7 | **Keep the close/"Not now" delay short (2-3 s), not hidden** | +8-15% conversion in winning tests; only 2% of apps wait over 10 s | Small lift, keeps Apple review safe | S |
| 8 | **Short looping exercise video on the paywall** (real feet doing the Day 1 move, no before/after) | Animation +13-27% conversion (Adapty); Stardust, V1 Sports, Kovalee video wins | Medium lift | M |
| 9 | **Plan for repeat views:** paywall again after Day 1 and on next open | H&F: only 39.9% buy on first view; 24.2% need 5+ views; 84% still buy same day | Captures the second-view buyers | Already in 1.0.13 |

Health ad rules: none of these need health claims. Do not write "relieve", "fix", "pain-free", timeframes, or before/after. Lifetime must not use fake scarcity. Price must stay the most prominent number (Apple 3.1.2).

---

## 6. Sources

All accessed Nov 13, 2026.

| # | Source | URL | Date | Label |
|---|---|---|---|---|
| 1 | Adapty, State of Paywalls 2026, full data appendix (Claude skill, SKILL.md) | https://github.com/vkharlan-adapt/state-of-paywalls-2026-skill | Oct 14-16, 2026 | verified |
| 2 | Adapty, State of Paywalls 2026 web report | https://adapty.io/state-of-paywalls/report/ | Oct 16, 2026 | verified |
| 3 | RevenueCat, State of Subscription Apps 2026, full PDF (H&F section pp. 213-226, price tiers, refunds, trial length) | https://www.revenuecat.com/pdf/state-of-subscription-apps-2026-sosa.pdf | 2026 | verified |
| 4 | Adapty, Apple Ads for subscription apps 2026 (PDF): US lift "collapses to single digits", other-paid by country, US $2.51 CPA / 15 payers per $1,000, tailored paywalls | https://uploads.adapty.io/apple_ads_for_subscription_apps_2026.pdf | May-Jun 2026 | verified |
| 5 | Adapty, Meta Ads benchmarks Q3 2026 (landing page; PDF behind form, not downloaded) | https://adapty.io/meta-ads-benchmarks | Q3 2026 | verified (page only) |
| 6 | Superwall, 17% revenue boost with transaction abandon paywalls (18 companies) | https://superwall.com/blog/17-revenue-boost-with-transaction-abandon-paywalls-a-case-study | Aug 2024 | verified |
| 7 | Superwall, Growth Sessions transaction abandon recap (price uncertainty quote, 5-22%) | https://superwall.com/blog/growth-sessions-transaction-abandon-recap | 2025 | reported |
| 8 | Superwall docs, normal transaction failure rate 5-6% | https://superwall.com/docs/support/faq/why-is-my-transaction-failure-rate-high | undated | reported |
| 9 | Jake Mor on X, "only 50% complete" | https://x.com/jakemor/status/1805580424153846195 | Jun 25, 2024 | reported |
| 10 | Superwall, "No Payment Due Now" label | https://superwall.com/blog/how-we-test-paywalls-at-superwall-and-how-you-can-too | undated | reported |
| 11 | Superwall, two paywall trends (multi-page, Design your trial) | https://superwall.com/blog/two-paywall-trends-driving-arpu-gains | Oct 9, 2025 | reported |
| 12 | Superwall, multi-page onboarding paywalls 12.41% vs 9.07% (40M opens) | https://superwall.com/blog/new-postmulti-page-onboarding-paywalls-convert-37-better-than-single-page-heres-why | May 26, 2026 | verified (also in C4) |
| 13 | Superwall, how many products (32M paywall opens) | https://superwall.com/blog/how-many-products-should-you-offer-on-your-paywall | Nov 14, 2022 | verified |
| 14 | LiftArchive, 20 best paywall A/B tests (Stardust video, Unchaind, BuyBye, $1.99 paid trial, V1 Sports, Kovalee in test index) | https://liftarchive.com/research/best-paywall-tests/ and https://liftarchive.com/apps/tests/ | 2026 | reported |
| 15 | GTM Sauce, Zumba on Sub Club (no-trial monthly, 7-day annual, ~56% trial->paid) | https://gtmsauce.com/episodes/2025-08-06-optimizing-funnels-pricing-and-retention-at-zumba-nicole | Aug 6, 2025 | reported |
| 16 | GTM Sauce, Marcus Burke on age buckets | https://gtmsauce.com/tactics/compare-cost-per-trial-with-trial-to-paid-rate-for-each-age-group | Jun 24, 2026 | reported |
| 17 | AARP, Unlocking Health and Wellness Apps, adults 50+ | https://www.aarp.org/content/dam/aarp/research/topics/health/prevention-wellness/health-app-users.doi.10.26419-2fres.00822.001.pdf | Feb 2025 | verified |
| 18 | AARP, 2025 Tech Trends and Adults 50-Plus | https://www.aarp.org/content/dam/aarp/research/topics/technology/internet-media-devices/2025-technology-trends-older-adults.doi.10.26419-2fres.00891.001.pdf | Dec 2024 | verified |
| 19 | AARP, 2026 Tech Trends and Adults 50-Plus | https://www.aarp.org/content/dam/aarp/research/topics/technology/internet-media-devices/2026-technology-trends-older-adults.doi.10.26419-2fres.01020.001.pdf | Dec 2025 | verified |
| 20 | Adapty, State of Health & Fitness Apps 2026 (PDF) | https://adapty.io/assets/uploads/docs/health-and-fitness-benchmarks-report.pdf | 2026 | verified (also in R4) |
| 21 | RocketShip HQ, TikTok vs Instagram Reels for apps (CPI, trial->paid estimates) | https://www.rocketshiphq.com/tiktok-vs-instagram-reels-app-advertising | Mar 23, 2026 | reported, weak |
| 22 | SEM Nexus, TikTok vs Meta for app UA 2026 | https://semnexus.com/tiktok-vs-meta-app-user-acquisition-2026-performance-data | Jul 16, 2026 | reported, weak |
| 23 | Hustle Marketers FitApp case (Airbridge "$20-40 per trial healthy") | https://hustlemarketers.com/case-study/fitapp-fitness-app-meta-ads-case-study/ | May 26, 2026 | reported, weak |
| 24 | Airbridge, optimize for trial starts not installs | https://www.airbridge.io/en/blog/optimize-for-trial-starts-not-installs | Nov 3, 2026 | reported (illustrative numbers only) |

Not used / skipped: Adapty Meta benchmarks full PDF (needs form with email), Superwall dashboard benchmarks (login), Purchasely/Botsi/Phiture/Appfigures (no new public numbers beyond what is above or already in our folder). No screenshots saved: this topic is numbers from PDFs and data files, all linked above.
