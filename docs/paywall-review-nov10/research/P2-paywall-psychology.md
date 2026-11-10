# P2: Paywall psychology and price presentation (Walkito, Nov 9 2026)

Scope: anchoring, decoys, price framing, default plan, endowment, risk reversal (trial timeline), trial vs no trial, trial length, exit offers, re-showing the paywall, plan count, headlines, social proof, multi-step paywalls, close button. All sources read-only, URLs given for every claim.

Evidence levels used below:
- STRONG = data, multiple sources agree
- MEDIUM = one credible source with numbers
- WEAK = opinion, before/after, or numbers without method

A general warning first: almost every app case study is published by a vendor (Superwall, RevenueCat, Adapty, Purchasely) that sells paywall tools. Sample sizes are rarely shared. Treat single-app lifts as "direction", not as a forecast for Walkito.

---

## 0. What the Walkito data says before any psychology

- 19 people saw "1 week free", 0 tapped the CTA and 0 tapped "Not now", most left in 3-25 seconds, 10 rage-tapped. At normal benchmarks you would expect roughly 1 trial from 19 viewers (US median paywall view to trial in Health & Fitness is a few percent; Adapty says hard paywalls start trials for 4.7% of viewers, same-app median). So 0/19 alone is not statistically proof of a broken paywall. But **0 taps on "Not now" plus 10 rage taps is a UX red flag**: people may be tapping something that does not respond (price card, close area, a disabled button, a scroll area), or the CTA / "Not now" may be hard to find. Check this before any psychology test. Source for benchmark: https://adapty.io/state-of-paywalls/report/
- The App Tracking prompt sits right before the paywall. That is an extra "no" moment one screen before the money ask. Worth moving (other agents may cover this).
- Organic users converted at about 5% of installs; Meta users did not. Cold paid-social users have lower intent, so they need more reassurance (risk reversal, proof) rather than more pressure.

---

## 1. Hard paywall vs freemium, and where the paywall sits

| Claim | Numbers | Level | Source |
|---|---|---|---|
| Hard paywalls convert downloads to paid about 5x better than freemium, with almost the same 1-year retention | Day-35 download-to-paid median 10.7% hard vs 2.1% freemium (2026); 12.11% vs 2.18% (2025). 1-yr retention of yearly subs 27% vs 28%. Revenue per install day 60: $3.09 vs $0.38 | STRONG | https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026 , https://www.revenuecat.com/state-of-subscription-apps-2025/ |
| Onboarding paywall converts about 4x better than later paywalls | 0.85% vs 0.23% view-to-paid; $170 vs $40 per 1,000 views. 93% of first purchases happen on Day 0 | STRONG (78k paywalls) | https://adapty.io/state-of-paywalls/report/ |
| Health & Fitness buyers need more views than other categories | Only 40% of H&F buyers buy on the first paywall view; about a quarter need 5+ views | MEDIUM | https://adapty.io/state-of-paywalls/report/ |
| Health & Fitness converts trials well once started | US H&F trial-to-paid median 33.3% (highest category); RevenueCat 2025 H&F trial-to-paid 39.9% | STRONG | https://adapty.io/state-of-paywalls/report/ , https://www.rocketshiphq.com/revenuecat-state-of-subscription-apps-2025-summary |
| Hard paywall with no close button can backfire | BoldVoice: more trial starts but refunds rose more than the gain | MEDIUM (no numbers) | https://liftarchive.com/test/boldvoice-hard-paywall-no-dismiss/ |

**Takeaway for Walkito:** keeping a hard paywall after onboarding is supported by data. The problem is not the model, it is that cold users do not start the trial. H&F data says the drop happens before the trial, not after it ("For Health & Fitness, the bigger drop happens before the trial", Adapty). So the lever is trust at the trial-start moment.

---

## 2. Risk reversal: the trial timeline ("Today / Day 5 reminder / Day 7 billed")

This is the best-evidenced paywall pattern for the exact fear cold users have ("I will forget and get charged").

| App | Change | Result | Level | Source |
|---|---|---|---|---|
| Blinkist | Replaced feature list with "How your free trial works": Today full access, Day 5 reminder, Day 7 charged, and asked for push permission to deliver the reminder | +23% trial starts, -55% complaints, push opt-in 6% to 74%, +4% paid conversion (per Purchasely) | STRONG (repeated in many places, but original numbers come from one company) | https://liftarchive.com/test/gd-blinkist-trial-timeline-paywall , https://www.purchasely.com/blog/blinkist-paywall-transformation-revolutionizes-app-user-engagement , https://abtest.design/tests/how-your-free-trial-works |
| Masterly (one consumer product) | "How your trial works" with the user's real calendar dates | +28% trial starts | MEDIUM | https://www.themasterly.com/blog/paywall-design |
| Masterly | "Remind me before my trial ends" toggle, on by default, wired to a real reminder | +14% trial starts | MEDIUM | same |
| Masterly | Button "Try Free for 7 Days" changed to "Try for $0.00" (with post-trial price next to it) | +11.9% trial starts, +4.5% paid rate | MEDIUM | same |
| Pepper | Two-step paywall with day-by-day trial timeline | +50% LTV | MEDIUM (vendor) | https://superwall.com/case-studies/pepper.md |
| Stardust | Trial timeline design | +13.6% conversion, trial-to-paid unchanged | MEDIUM | https://liftarchive.com/test/stardust-trial-timeline-design/ |
| Adapty aggregate | "Explaining how the trial works" in winning tests | +12-36% ARPU | MEDIUM | https://adapty.io/state-of-paywalls/report/ |
| Superwall | Says timeline is less novel now, they sometimes prefer social proof / accolades instead | opinion | WEAK | https://superwall.com/blog/two-paywall-trends-driving-arpu-gains |

Why it works (psychology): it removes the "forgetting to cancel" fear (loss aversion about a surprise charge). Blinkist's designer found that this, not price, was the biggest hesitation (https://www.vlix.me/digital-marketing/how-to-design-a-high-converting-app-paywall).

Rules: the reminder must actually be sent (push, with email fallback). A promised reminder that never comes is deceptive. RevenueCat lists the timeline paywall as "no compliance risk" (https://www.revenuecat.com/blog/growth/rip-toggle-paywall).

**For Walkito:** this is the #1 thing to add on the plans screen. Use real dates ("Today, Nov 9", "Nov 14: we remind you", "Nov 16: $59.99/year starts, cancel before and pay nothing").

---

## 3. "Cancel anytime" and the reassurance line

- 61% of top paywalls have a cancel line near the CTA; 68% of those say "cancel anytime". With a trial, 74% of paywalls put reassurance near the CTA vs 37% without. Pattern data only, not proof of effect. WEAK-MEDIUM. https://adapty.io/state-of-paywalls/report/
- Concrete reassurance tested well: "$0.00 today" (+11.9%), reminder toggle (+14%). MEDIUM. https://www.themasterly.com/blog/paywall-design
- Health angle: for older users, "No payment now" and "Cancel in 2 taps in Settings" (with a link or one-line how-to) is more concrete than "cancel anytime". (WEAK, reasoning.)

---

## 4. Trial vs no trial vs weekly

| Claim | Numbers | Level | Source |
|---|---|---|---|
| A paywall with a free trial converts far more viewers | 10.9% vs 3.6% of viewers (RevenueCat median, as quoted) | MEDIUM | https://www.vlix.me/digital-marketing/how-to-design-a-high-converting-app-paywall |
| Adding a 7-day trial to a $24.99 yearly plan | +131% paywall conversion (Stardust) | MEDIUM | https://liftarchive.com/apps/tests |
| Weekly plan with trial is the highest-LTV setup across all apps | 1.5x average LTV; $49.27 12-month LTV. Weekly = 55-62% of all app revenue | STRONG (aggregate) | https://adapty.io/state-of-in-app-subscriptions-report/ , https://adapty.io/state-of-paywalls/report/ |
| BUT Health & Fitness is different | H&F gets 62% of revenue from ANNUAL plans. H&F median prices $5.33/wk, $29.99/yr | STRONG | https://adapty.io/state-of-paywalls/report/ |
| Trial tests win often | Trial-change A/B tests raise LTV in 59.6% of cases (vs 34.6% for visual/copy changes) | STRONG | https://adapty.io/state-of-in-app-subscriptions-report/ |
| Money-back guarantee instead of trial | Slightly lower conversion, higher revenue and LTV (Teaching.com) | WEAK-MEDIUM | https://liftarchive.com/apps/tests |
| Paid intro offer ("first month $1.99") | ARPU about +30%, conversions about +25% in one app; no effect in another | WEAK | https://gtmsauce.com/episodes/2026-08-22-the-highest-performing-paywalls-for-apps |

**Walkito note:** Walkito's $59.99/yr is about 2x the H&F median annual ($29.99). Users 35-65 are not the typical weekly-plan buyer (weekly dominates entertainment/photo/AI). A weekly plan is risky for trust in a health app with older users and is more likely to feel like a "subscription trap". Prefer annual + monthly. Also note that Meta users get the trial but organic users pay full price: that is backwards from intent. Cold users need the trial most, but organic users also converted without one; keep the trial for Meta.

---

## 5. Trial length

| Claim | Numbers | Level | Source |
|---|---|---|---|
| Longer trials convert trials to paid better | 17-32 days: 42.5% vs 4 days or less: 25.5% (2026). 2025: 45.7% vs 26.8% | STRONG (but trial-start rate is not in this metric, and selection bias is likely) | https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026 |
| For annual plans specifically, 10-16 days had best renewal; 17-32 days saw conversion fall | annual: <=4d 24% conversion vs 17-32d 44.6%; mixed by plan | MEDIUM | http://www.revenuecat.com/blog/growth/free-trial-length |
| 55% of 3-day trial cancellations happen on Day 0; 44% of all trials are cancelled within 24h, 32% within the first hour | | STRONG | RevenueCat 2026 link above; https://adapty.io/state-of-paywalls/report/ |
| 7-day beats 14-day in fitness/wellness | Zumba: 7-day = +8% install-to-paid. Wellness app: 14-day gave slightly more trials but fewer paid users, users procrastinated | MEDIUM | https://liftarchive.com/test/zumba-14-to-7-day-trial/ , https://liftarchive.com/test/wellness-app-14-day-vs-7-day-trial/ |
| Adapty: 7-day trials do better on annual and monthly plans; 3-day better on weekly | | MEDIUM | https://adapty.io/state-of-paywalls/report/ |
| Extended trial as recovery offer | Offering "Need more time? Extended 7-day trial" on transaction abandon earned about 20% more ARPU than a discount offer | WEAK-MEDIUM | https://gtmsauce.com/episodes/2026-08-22-the-highest-performing-paywalls-for-apps |

**Walkito:** 7 days on annual is the right default. A foot exercise routine shows some benefit within a week only if people actually do the exercises, so Day 0-1 onboarding into a first session matters most (day 0 cancellations). Test 14 days only later.

---

## 6. Anchoring, decoy plans, number of plans

| Claim | Numbers | Level | Source |
|---|---|---|---|
| Classic decoy (Ariely, Economist) | With decoy: 84% chose the expensive bundle; without: 32% | MEDIUM (classroom demo, 100 students) | https://sketchplanations.com/the-decoy-price , https://psychology.com/biases/decoy-effect |
| Decoy effect often fails to replicate in real choices | Yang and Lynn reproduced it in only 11 of 91 attempts | MEDIUM-STRONG | https://moneyandplanet.com/decoy-effect-pricing-what-research-actually-shows-2026 , https://onlinelibrary.wiley.com/doi/full/10.1002/bdm.2373 |
| App decoy test | Glam AI: decoy plan moved yearly conversion 0.43% to 0.55% on the main paywall (about 50k users); zero effect on inner paywalls | MEDIUM | https://adapty.io/blog/glam-ai-paywall-tests |
| Three plans with yearly badged "best offer" vs two unbadged | Rash ID: about +20% ARPU, +50% trial-to-paid | MEDIUM (vendor) | https://superwall.com/case-studies/rash-id |
| Adding annual next to monthly as anchor | Preu AI: +80% proceeds per user, +22% trial conversion | MEDIUM | https://liftarchive.com/apps/tests |
| Two plans is the sweet spot | 62% of top paywalls show 2 plans. Apps with two plan lengths have 67% higher conversion. "More products" wins only 53% of A/B tests | STRONG | https://adapty.io/state-of-paywalls/report/ |
| Hiding the monthly plan | Annual share +18 pp, ARPU +9%, trial starts -6% (12 experiments) | MEDIUM | https://adapty.io/paywall-ab-testing-skill |
| Yearly-only paywall lost | Stardust: yearly-only and "More pricing drawer" lost on conversion and proceeds | MEDIUM | https://liftarchive.com/test/stardust-discount-badge-weekly-equivalent/ |
| Shorter paywall with 2 plans | Party game app: +31% install-to-trial, +64% revenue | MEDIUM | https://liftarchive.com/apps/tests |

**Walkito:** show 2 plans (Yearly with trial, preselected; Monthly as the anchor that makes yearly look cheap). A true "decoy" third plan is weakly supported in the research and adds reading load for older users. If tested, the monthly price itself is the anchor.

---

## 7. Price framing (per week / per day / "less than a coffee")

| Claim | Numbers | Level | Source |
|---|---|---|---|
| "Pennies-a-day" framing makes a price feel smaller by comparing it to petty daily spending | Lab studies; effect reverses for large daily amounts; works for about $4/day or less | STRONG (academic, multiple papers) | https://academic.oup.com/jcr/article-abstract/24/4/395/1797969 , https://link.springer.com/article/10.1023/A:1025467002310 |
| Adding an explicit "cup of coffee" comparison adds little if you already show a per-day price | | MEDIUM (academic) | https://link.springer.com/article/10.1023/A:1008084712717 |
| Per-day framing can feel manipulative at higher prices or unusual time frames | | MEDIUM (academic 2024) | https://onlinelibrary.wiley.com/doi/full/10.1002/cb.2395 |
| Annual shown as "$X/month, billed annually" | Mojo: revenue per paywall view +8% US, +26% Mexico, +45% Brazil | MEDIUM | https://liftarchive.com/test/mojo-monthly-price-anchor-for-annual/ |
| Weekly-equivalent price + discount badge on yearly | Stardust: +50% conversion, +62.5% proceeds per user (same prices) | MEDIUM (vendor) | https://liftarchive.com/test/stardust-discount-badge-weekly-equivalent/ |
| Only 4% of top paywalls show annual as a weekly price; 24% as monthly; 41% use "Save X%" badge | pattern data | MEDIUM | https://adapty.io/state-of-paywalls/report/ |
| "SAVE $45/YEAR" callout added 0.8 pts conversion (anonymous app, 1.2M users) | | WEAK (Reddit) | https://www.reddit.com/r/AppBusiness/comments/1occcur/things_that_actually_changed_our_conversion_rate |

**APPLE RULE (critical):** "the amount that will be billed must be the most prominent pricing element in the layout". A per-week or per-month breakdown or a savings badge is allowed only "in a subordinate position and size to the annual price". Apple also rejects paywalls where the free trial is more prominent than the billed amount. Sources: https://developer.apple.com/app-store/subscriptions , https://community.revenuecat.com/general-questions-7/guideline-3-1-2-business-payments-subscriptions-6793

**Walkito:** $59.99/yr = $1.15/week = about $0.16/day = $5/month. Show "$59.99/year" big, then small "just $1.15 a week" under it. "Less than a coffee a month" is technically true at $5/month and fine as small copy, but the research says the per-week figure already does that job. Do not let the small figure be bigger than $59.99.

---

## 8. Default / preselected plan

- 67% of top paywalls preselect annual; 78% of trial paywalls preselect annual. Preselecting annual does not hurt conversion vs preselecting weekly. When annual is preselected, 46% of buyers keep it (90% for weekly). STRONG. https://adapty.io/state-of-paywalls/report/
- "Annual-first layouts" (annual preselected + trial on it) gave +25-40% ARPU in Adapty winning tests. MEDIUM. same source
- Defaulting to annual instead of showing all plans equally lifted annual uptake 60% to 80% with no drop in conversion. MEDIUM. https://www.businessofapps.com/insights/why-gap-between-app-install-and-trial-start-is-the-biggest-lever-most-apps-ignore/
- The Fits test: most of the toggle paywall's gain came from visual hierarchy: normalized yearly price, a "Most Popular" badge, bigger annual card. MEDIUM. https://www.revenuecat.com/blog/growth/rip-toggle-paywall

---

## 9. Endowment and "your plan is ready, unlock it"

- Showing a real, computed, personalized result instead of a feature tour: +70% paying customers in one adaptive A/B test (Business of Apps quote) and +17% in another write-up (Otter Growth). Numbers disagree, method not shared. MEDIUM-WEAK. https://www.businessofapps.com/insights/why-gap-between-app-install-and-trial-start-is-the-biggest-lever-most-apps-ignore/ , https://ottergrowth.com/notes/subscription-app-onboarding-teardown
- Clear 30 (habit app): replaced feature carousel with "your first 7 days" day-by-day preview; paywall conversion 20% to 30%. WEAK-MEDIUM (before/after, not split). https://liftarchive.com/test/clear-30-program-preview-paywall-copy/
- Only 2% of top paywalls use the user's goal or quiz answers in the headline. Adapty saw personalized onboarding lift ARPU 13-35% in winning tests. MEDIUM. https://adapty.io/state-of-paywalls/report/
- Counterpoint: a paywall headline tailored to onboarding answers alone showed no significant difference in one founder report; "tailoring only the surface" did not help. WEAK-MEDIUM. https://gtmsauce.com/topics/personalization
- Generic "your plan is ready" with no visible plan loses credibility. WEAK. https://ottergrowth.com/notes/subscription-app-onboarding-teardown

**Walkito:** the plan must be real and visible on/before the paywall: e.g. "Your 7-day heel routine: Day 1 calf stretch + towel curl, 8 min" built from their answers, with a locked "Start Day 1" button. Endowment works by letting them see something that is theirs. Never present a projected "pain-free by Dec 1" date or "X% less pain" chart, that is a health/timeframe claim (FTC and the brief forbid it). Use "Built for: plantar fasciitis, standing job, 10 min a day" instead.

---

## 10. Headline focused on outcome

- Top paywall headlines are short: median 5 words, 79% are 6 words or fewer. "Access/Premium", free trial and outcome headlines are the majority. Pattern data. MEDIUM. https://adapty.io/state-of-paywalls/report/
- Benefit-first vs feature-first is a standard Superwall test idea, no number. WEAK. https://superwall.com/blog/how-to-ab-test-a-paywall
- Visual/copy-only tests win only 35% of the time for LTV. STRONG. https://adapty.io/state-of-in-app-subscriptions-report/

**Walkito:** an outcome headline must stay compliant: "Your daily routine for happier feet" or "Gentle exercises for heel pain, 10 min a day" are fine. "Fix heel pain in 7 days" or "Be pain-free" are not allowed.

---

## 11. Social proof and ratings on the paywall

- Runtastic replaced a promo statement with a real user review + 5 stars: +44% paid subscriptions. MEDIUM. https://abtest.design/tests/user-reviews-on-paywall
- Food/diet app: short paywall with a real 5-star App Store review + "86% of users improved their diet" stat + 2 plans: +72% install-to-trial (bundle of changes; also used a toggle Apple now rejects). MEDIUM. https://liftarchive.com/test/food-app-short-paywall-review-stat/
- Driver license app: short paywall with reviews moved up first: +17% ARPU. MEDIUM. https://www.revenuecat.com/blog/growth/paywall-redesigns-case-studies
- Adapty: social proof lifted conversion 10-30% in winning tests; only 27% of top paywalls use it. MEDIUM. https://adapty.io/state-of-paywalls/report/
- Superwall: "show one great review or an App of the Day badge". WEAK. https://gtmsauce.com/episodes/2026-08-22-the-highest-performing-paywalls-for-apps

**Walkito rules:** only real reviews (quote App Store reviews verbatim with first name/initial), only real counts. An outcome stat ("86% improved") needs substantiation under FTC rules; a self-reported in-app survey stat must say exactly that ("8 in 10 users who answered our week-2 survey said...") and only if the survey is real. If Walkito has few reviews, use credibility instead: "Exercises based on common physical therapy routines" (only if true and reviewed), "Made for 35-65, no equipment needed". FTC health guidance: https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance

---

## 12. Multi-step paywalls (value before price)

| App | Result | Level | Source |
|---|---|---|---|
| Speak4Me | Multi-step "Duolingo-style" paywall: +27% conversion, +36% proceeds | MEDIUM (vendor) | https://superwall.com/case-studies/speak4me |
| Superwall aggregate | "Two or more pages instead of one: 12.41% vs 9.07% conversion"; multi-page wins in "97%" of their tests | MEDIUM-WEAK (vendor claim) | https://revenuedot.app/blog/paywall-best-practices-2026 , https://superwall.com/blog/two-paywall-trends-driving-arpu-gains |
| Stompers | Single page beat multi-page by 16%+ conversion, more yearly trials | MEDIUM | https://superwall.com/case-studies/stompers |
| Food app | Long paywall (CEO note, FAQ, features) lost to a short one: +72% | MEDIUM | https://liftarchive.com/test/food-app-short-paywall-review-stat/ |

Superwall's recommended 3 steps: (1) value prop and trial, (2) trial reminder page, (3) purchase decision. The reminder page is called "critical".

**Walkito:** Walkito already has 3 screens AFTER a long quiz. Users left within 3-25 seconds on screen 3. Multi-step only works when each step removes a fear. If screens 1-2 repeat features the quiz already covered, they add fatigue. Test: screen 1 = your plan preview, screen 2 = trial timeline + reminder promise, screen 3 = plans. Also test a single combined screen (Stompers result shows it can win).

---

## 13. Exit offer after "Not now" and showing the paywall again

| Claim | Numbers | Level | Source |
|---|---|---|---|
| Second-chance paywalls right after closing convert at 0.88x the main paywall and beat it in 45% of apps. Only 4% of apps use them. Typical discount 38% | | STRONG (aggregate) | https://adapty.io/state-of-paywalls/report/ |
| Transaction-abandon offers (after closing Apple's payment sheet): 5-22% of users who enter convert; 17% of total revenue across 18 companies; refund rate 3.3% vs 6.8% control | | MEDIUM (vendor) | https://superwall.com/blog/growth-sessions-transaction-abandon-recap , https://revenuedot.app/blog/paywall-exit-offers |
| Unclosable exit discount: more trials but refunds rose more than the gain, net loss | | MEDIUM | https://liftarchive.com/test/boldvoice-unclosable-discount-on-dismiss/ |
| Discounts up to 30% keep 90% of 6-month revenue; 31-60% off keeps 70%; over 60% off keeps 46%. Only about 1 in 10 new users who start with an offer are still paying at 3 months | | STRONG | https://adapty.io/state-of-paywalls/report/ |
| Extended trial instead of a discount as the recovery offer: about +20% ARPU vs discount | | WEAK-MEDIUM | https://gtmsauce.com/episodes/2026-08-22-the-highest-performing-paywalls-for-apps |
| Show a discounted paywall on next app open | recommendation | WEAK | https://48199371.fs1.hubspotusercontent-na1.net/hubfs/48199371/The%20Subscription%20Optimization%20Handbook%20-%202025.pdf |
| H&F buyers often need several paywall views (60% of all buyers buy on view 1, but only 40% in H&F); 84% of later-view buyers still buy within 24h | | MEDIUM | https://adapty.io/state-of-paywalls/report/ |
| Apple is "getting stricter on instant paywall abandonment offers" | | WEAK (RevenueCat note) | https://www.revenuecat.com/blog/growth/rip-toggle-paywall |

**Walkito:** the one-time offer after "Not now" is supported by data, but nobody tapped "Not now", so nobody has seen it. Make "Not now" visible. Keep the offer closable, keep the discount at or below about 30-40%, or test an extended trial instead. Then on next open (within 24h), show the paywall again, ideally after a free taste (see Top 10).

---

## 14. Close button visibility

- 11% of apps use a hard paywall with no close button; 22% delay the close button, usually 3-5 seconds; only 2% delay more than 10 seconds. STRONG (pattern). https://adapty.io/state-of-paywalls/report/
- Hard (no close) paywalls: 4.7% start trial vs 3.2% on soft, but direct purchases 0.50% vs 0.75%; hard wins overall in 57% of apps. STRONG. same
- Walkito's hard gate is not removed by a visible "Not now" because "Not now" goes to an offer, not to the app. So a clearly visible "Not now" costs little and gives you the 0.88x second chance. A hidden or faint close link plus rage taps suggests people are trying to find a way out or to read more.

---

## 15. Compliance quick list (US + Apple)

- **Apple 3.1.2:** billed amount must be the most prominent price; trial length and post-trial price must be clear; the trial cannot be more prominent than the billed amount; links to Terms and Privacy; restore purchases. Free-trial on/off toggles are rejected since Jan 2026. https://developer.apple.com/app-store/subscriptions , https://www.revenuecat.com/blog/growth/rip-toggle-paywall
- **FTC / ROSCA:** clearly disclose all material terms before billing, get express informed consent, offer a simple cancel. Click-to-cancel rule was vacated in July 2025 but ROSCA still applies; Amazon paid $2.5B in Sept 2025. https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf , https://www.themasterly.com/blog/paywall-design
- **FTC dark patterns:** fake countdown timers and fake scarcity are named dark patterns. Same FTC report.
- **FTC health claims:** health benefit claims need competent and reliable scientific evidence; a disclaimer cannot contradict a claim. https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
- **California auto-renewal law** (amended July 2025): extra notice rules, including reminders for free periods over 31 days. https://www.cooley.com/news/insight/2025/2025-06-04-california-automatic-renewal-law-amendments-take-effect-on-july-1-2025

---

## TOP 10 tactics for Walkito

1. **Fix the plans screen UX first (rage taps).**
   What: watch session replays of the 10 rage taps, make the CTA and "Not now" big, high-contrast, above the fold on small iPhones, with text size readable for 50-65 year olds. Make plan cards tappable and respond visibly.
   Why: 0 taps on both buttons + 10 rage taps points to a usability problem, not only psychology.
   Evidence: WEAK (inference from Walkito data), but zero-cost.
   Test: before/after on tap rate on any button within 10 s of the plans screen.

2. **Trial timeline with real dates and a real reminder (Blinkist pattern).**
   What: "Today, Nov 9: full access, $0.00 today" / "Nov 14: we send you a reminder" / "Nov 16: $59.99/year starts. Cancel before and pay nothing." Ask for push permission right after trial start "so we can remind you". Email fallback.
   Why: removes the fear of a surprise charge, the main blocker for cold users.
   Evidence: STRONG (Blinkist +23%, Masterly +28%, Pepper +50% LTV, Stardust +13.6%, Adapty +12-36% ARPU).
   Test: A/B on the plans screen; primary metric trial starts per paywall view; guardrails trial cancel within 24h, refunds.

3. **"$0.00 due today" next to the button + reminder toggle on by default.**
   What: CTA "Start my free week", under it "$0.00 today. Then $59.99/year. Cancel anytime in Settings." Plus "Remind me 2 days before" toggle (on).
   Why: concrete reassurance beats generic "cancel anytime".
   Evidence: MEDIUM (+11.9% and +14% trial starts, one product).
   Test: can ship together with #2, or as a second A/B. Make sure $59.99 stays the largest price (Apple).

4. **Show the real personal plan before the price (endowment, honestly).**
   What: screen 1 of paywall = "Your 7-day plan" built from quiz answers (Day 1: 8 min, exercises named, why chosen: "you stand at work, you said mornings hurt most"). Locked "Start Day 1" button.
   Why: users value what feels already theirs; a visible program converts better than a feature list.
   Evidence: MEDIUM-WEAK (Clear 30 20% to 30%, adaptive tests +17% to +70%, Adapty personalization +13-35% ARPU).
   Test: A/B paywall screen 1 = plan preview vs current screen 1. No outcome dates or pain predictions.

5. **Two plans, annual preselected, monthly as the anchor, price per week in small type.**
   What: Yearly $59.99 (7 days free, preselected, "Best value, save X%" using the real monthly price) and Monthly (no trial or same trial). Under $59.99: "just $1.15/week" smaller.
   Why: two plans is the best-converting setup; anchoring with monthly makes yearly feel cheap; per-week framing lowers the perceived cost.
   Evidence: STRONG for two plans/preselect; MEDIUM for weekly-equivalent (Stardust +50%) and monthly framing (Mojo +8% US).
   Test: A/B current single offer vs two-plan layout; metric revenue per paywall view, not only trial starts.

6. **Real social proof near the top of the paywall.**
   What: 1 verbatim App Store review (real, with star rating and first name), and the true rating if 4.5+. No invented numbers.
   Why: cold Meta users do not know Walkito; proof is the cheapest trust.
   Evidence: MEDIUM (Runtastic +44%, food app +72% bundle, Adapty 10-30%).
   Test: A/B review block vs none. If too few reviews, delay this test.

7. **Make "Not now" visible and keep the closable second-chance offer.**
   What: visible "Not now" (not hidden, no long delay over 3-5 s). The offer screen must have a clear close. Test an extended 14-day trial vs a discount up to about 30-40%.
   Why: second-chance paywalls convert at 0.88x the main paywall; trapping users raises refunds.
   Evidence: STRONG (Adapty aggregate), MEDIUM (BoldVoice loss, extended-trial +20% ARPU).
   Test: offer A (extended trial) vs offer B (discount) vs C (no offer), metric net revenue after refunds at day 30+.

8. **Re-show the paywall on the next open, with a reason.**
   What: if they close, let the app re-open to a short "your Day 1 is waiting" screen and the paywall, plus one push/reminder within 24h (only if they allowed push). Optionally give one free exercise as a taste before the re-ask (soft entry).
   Why: in Health & Fitness only 40% of buyers buy on the first view; most later buyers still buy within 24h.
   Evidence: MEDIUM.
   Test: compare day-1 trial starts among users who closed the paywall, with vs without the re-show.

9. **Short, compliant outcome headline using quiz context.**
   What: e.g. "Your heel routine is ready" / "10 minutes a day for your feet" with their pain area. 6 words or fewer.
   Why: outcome headlines are standard; personalization is rare (2%) so it stands out.
   Evidence: WEAK-MEDIUM (copy tests win only 35% of the time).
   Test: low priority; bundle with #4 rather than test alone, since traffic is small.

10. **Keep 7-day trial on annual; move the ATT prompt away from the paywall.**
   What: do not shorten to 3 days for a health habit app; 14 days only as a later test or as the exit offer. Move App Tracking prompt after the trial start or to a later moment (if attribution allows).
   Why: 7-day beat 14-day in fitness tests (Zumba +8%), Adapty finds 7-day best for annual; and every "no" dialog right before the price adds friction.
   Evidence: MEDIUM for trial length; WEAK for ATT placement.
   Test: ATT before vs after paywall, metric trial starts per onboarding finisher, guardrail Meta attribution rate.

**Testing reality:** with about 20 paywall views per day, a normal A/B test needs weeks. Superwall says under 1,000 views/week you should test big changes, not micro-copy (https://superwall.com/blog/how-to-ab-test-a-paywall). So bundle tactics 1+2+3+5 into one new "honest paywall" vs the current one, and judge on trial starts per paywall view plus refunds.

---

## 5 things to avoid

1. **Fake urgency.** No countdown timers, "offer expires in 10:00", "only 3 spots left" unless literally true. FTC lists these as dark patterns, and they hurt trust with older health users. (Many quiz funnels like BetterMe use timers: https://www.botsi.com/resources/flows/apps/betterme - do not copy.)
2. **Health outcome or timeframe claims on the paywall.** No "pain-free in 14 days", no "your predicted recovery date" chart, no "fix flat feet", no invented "92% felt better" stats. Needs scientific proof under FTC health guidance.
3. **Hiding the billed amount behind a small per-day or per-week price, or making "FREE" bigger than $59.99.** Apple rejects this under 3.1.2, and it reads as a trick.
4. **Trial on/off toggles and unclosable exit offers.** Apple rejects toggles since Jan 2026; unclosable offers raised refunds more than they raised trials (BoldVoice).
5. **Deep discounts and weekly plans as the main fix.** Over 60% off keeps only 46% of revenue, and few discount-acquired new users stay; weekly plans are for entertainment/AI apps, not a 35-65 health audience whose category earns 62% from annual. Also avoid fake reviews or reviews written by the team.
