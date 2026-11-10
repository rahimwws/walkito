# P4: Real founder evidence (before/after numbers)

Scope: indie and small app founders who changed onboarding or paywall and shared numbers. Sources: X (read only), Reddit, Indie Hackers, founder blogs, Superwall/RevenueCat/Adapty case studies, Superwall and Starter Story YouTube interviews (via the gr0w.app index of 185 founder interviews).

Collected Nov 9, 2026. Almost all of this is self-reported. Very few posts give sample sizes or significance. Treat single posts as MEDIUM at best.

Credibility scale used per case:
- HIGH: A/B test with tool named (RevenueCat, Superwall, Adapty), full metrics, or a detailed write-up.
- MED: founder post with before/after and some context, no test design.
- LOW: one-line claim, tiny sample, or marketing post selling a service.

---

## 0. First, a sanity check on Walkito's own data

- 19 people saw "1 week free", 0 tapped. If the true tap rate were 10%, seeing 0 of 19 happens about 13% of the time. At 5% it happens about 38% of the time. So 0/19 alone does not prove the paywall is bad. It is a small sample.
- BUT 0 taps on "Not now" too, plus 10 rage taps, is a red flag that something is broken or unclear (buttons not tappable, below the fold, slow to load, prices not loading).
- Founders hit this exact problem often:
  - Adam Lyttle: paywall "semi-broken", lifetime option placeholder with no price. https://x.com/adamlyttleapps/status/2047844380384649673
  - Adam Lyttle: "People weren't seeing the paywall" was one of 2 leaks he found. https://x.com/adamlyttleapps/status/2050098639268446303
  - Foodnoms (Ryan Wesley): a bug where the paywall did not mention the trial and wrongly reported trial ineligibility on first open. Fixing it "significantly boosted" trial starts. https://ryanwesley.com/paywall-optimization-success-story
  - GainFrame (r/AppBusiness): paywall exposure among new users had silently fallen 38% to 21%. https://www.reddit.com/r/AppBusiness/comments/1upohjk/fixed_my_trial_conversion_21_44_and_just_passed/
- Lesson: before any psychology test, verify on a real device, on a fresh install, from a Meta ad click, that prices load, the CTA works, and "Not now" is visible. Evidence: STRONG (many independent founders found bugs first).

---

## 1. Cases grouped by tactic

### A. Trial timeline / "we will remind you" / "No payment due now" (reduce trial fear)

| App (type) | Change | Before -> After | Sample | URL | Credibility |
|---|---|---|---|---|---|
| Foodnoms (nutrition tracker, indie) | Replaced feature paywall with "Blinkist-style" trial timeline + Day 5 reminder notification + star rating/award badge | Initial conversion +58%, conversion to paying +59.6%, trial-to-paid -15.9%, realized LTV per user +23.3% | 2-week RevenueCat experiment, stat sig on trial start | https://ryanwesley.com/paywall-optimization-success-story | HIGH |
| Pregnancy+ (health, medical) | Added visual trial timeline (today, day 3, charge date, how to cancel) | Revenue +27% vs control | Not given | https://adapty.io/case-studies/pregnancy-plus/ | MED-HIGH (vendor case study) |
| Blinkist (books) | Trial timeline before paywall | Trial starts +23%, support complaints cut by more than half | Large app | https://www.businessofapps.com/insights/why-the-gap-between-app-install-and-trial-start-is-the-biggest-lever-most-apps-ignore | MED-HIGH (widely cited) |
| Sunflower (AI app) | Priming screen promising a reminder before trial ends | More trials, more trial-to-paid, more annual (no exact %) | Not given | https://www.youtube.com/watch?v=zFfBuyKoaDM&t=2835s | MED |
| Pingo (AI app, $500k/mo) | Trial timeline paywall vs value and testimonial pages | Timeline won (no %) | Not given | https://www.youtube.com/watch?v=s9qQPM92JNs&t=2770s | MED |
| Steven Cravotta (Puff Count, quit vaping) | "No payment due now" text above CTA, part of 5 changes | "tripled my conversion" (bundle of changes) | Not given | https://x.com/StevenCravotta/status/1930792783763190200 | LOW-MED |
| Viktor Seraleev (portfolio of utilities) | Recommends "No payment required now" under button | No number, opinion from many apps | n/a | https://x.com/seraleev/status/2011687862874579027 | WEAK |

Verdict: STRONG. At least 5 independent wins, two with real A/B tests. It fits a 35-65+ health audience that fears being charged. Note the trade-off: trial-to-paid can drop (Foodnoms -16%), but revenue per user still rose.

### B. Multi-screen paywall (2 screens before price: "try free" -> "we remind you" -> plans)

| App | Change | Before -> After | Sample | URL | Credibility |
|---|---|---|---|---|---|
| kenbuildsalone (indie iOS) | Added 2 screens before pricing | Trial conversion 8.1% -> 27.5% | Not given, small app ($120 day) | https://x.com/kenbuildsalone/status/2104466852525289594 | MED |
| Speak4Me (AAC/speech) | Duolingo-style multi-step paywall vs single checkbox paywall | Conversion +27%, proceeds +36% | Superwall A/B | https://superwall.com/case-studies/speak4me | MED-HIGH |
| Vahe (paywall consultant, Superwall video) | 3-screen paywall (try free, we remind, timeline) | "typically 20-40% uplift"; Claim app 34% trial start | Across clients | https://www.youtube.com/watch?v=24QMRDXck70&t=850s | MED |
| Cal AI (per Steven Cravotta) | Screen 1 "try for free", screen 2 "we'll send a reminder", screen 3 paywall | No number | n/a | https://x.com/StevenCravotta/status/2021962278921199690 | WEAK |
| FAILURE: Stompers (Superwall) | Single-page paywall vs multi-page with benefits + trial reminder | Single page won: conversion +16%, more yearly trials | Superwall A/B | https://superwall.com/case-studies/stompers | MED-HIGH |

Verdict: MEDIUM-STRONG. Most tests win, but Stompers shows it can lose. Walkito already has 3 screens and got 0 taps, so the content of those screens (reminder promise, no-payment-now, timeline) matters more than the count. Seraleev warns Apple may see "three paywall screens in a row" as a gray pattern: https://x.com/seraleev/status/2044541709627883767

### C. Personalized paywall headline (echo the user's quiz answer)

| App | Change | Before -> After | Sample | URL | Credibility |
|---|---|---|---|---|---|
| maxzrco (fitness-type app) | Paywall headline = goal user picked ("Start losing weight today") | 5% -> 10% | Not given | https://x.com/maxzrco/status/2118738932552593761 | MED |
| JourneyStamp (travel) | Context-specific paywalls instead of one generic | Conversion +50%, to 7.3% overall | Superwall | https://superwall.com/case-studies/journeystamp | MED-HIGH |
| Large app on r/AppBusiness (1.2M users, workouts) | "Unlock premium features" -> "get personalized workouts that adapt to your progress" | +0.3 pts (part of 4.8% -> 6.9% stack) | 1.2M users | https://www.reddit.com/r/AppBusiness/comments/1occcur/things_that_actually_changed_our_conversion_rate/ | MED |
| Sumizeit (book summaries) | Personalized onboarding | Paid conversion +24% vs control | ~9,400-15,600 users per test | https://www.sumizeit.com/blog/5-ab-tests-that-increased-our-book-summary-apps-conversions- | MED |
| Adaptive test cited by Business of Apps | Specific computed result at end of quiz vs generic feature tour | 70% more paying customers | Not given | https://www.businessofapps.com/insights/why-the-gap-between-app-install-and-trial-start-is-the-biggest-lever-most-apps-ignore | MED |
| Superwall host caution | If you ask questions then show a generic result, users notice | n/a | n/a | https://www.youtube.com/watch?v=Qh314MypshM&t=401s | WEAK |

Verdict: STRONG. Many independent wins. For Walkito: "Your plan for heel pain" with their answers (e.g. "on your feet 8+ hours", "morning heel pain") on the plans screen. Must not turn into cure claims ("Be pain-free in 2 weeks" is not allowed).

### D. Interactive demo / "aha" moment before paywall

| App | Change | Before -> After | Sample | URL | Credibility |
|---|---|---|---|---|---|
| kenbuildsalone | Interactive demo in onboarding | 17.9% trial if completed demo vs 7.8% if skipped | Not given (self-selection bias) | https://x.com/kenbuildsalone/status/2104466852525289594 | MED |
| Clear 30 (quit smoking, health) | First paywall screen = day-by-day 7-day program instead of feature carousel | 20% -> 30% conversion | Not given | https://www.youtube.com/watch?v=cYcU4_HQdIk&t=1464s | MED |
| Seraleev (utilities) | Short video onboarding (4-5 steps) instead of static screens | Trial and paid rates "increased" (no %) | n/a | https://x.com/seraleev/status/2012539188227285322 | WEAK-MED |
| Copia | Social proof + onboarding video + tap-button questions instead of login + free text | Paywall views 50-60% -> 85-90%, conversion about doubled | Not given | https://www.youtube.com/watch?v=D7eaHcznLZU&t=696s | MED |
| GeorgeLampro20 | Shortened onboarding, added social proof, added app videos | Reached paywall 84% -> 94%; "conversion +60%" | Not given | https://x.com/GeorgeLampro20/status/2118528925735207368 | LOW-MED |
| FitnessAI (Jake Mor) | Paywall moved before onboarding + video on paywall | Install-to-trial doubled, trial-to-paid flat, revenue doubled | Large app | https://www.revenuecat.com/blog/growth/paywall-tests-grow-app-revenue | MED-HIGH |
| MdsyncNet (via consultant) | Prefilled example, fewer steps to first result | Trial-to-paid 18% -> 34% | Not given | https://www.indiehackers.com/post/how-an-onboarding-redesign-took-a-client-from-18-to-34-trial-to-paid-10be41f87b | LOW-MED (consultant marketing) |

Verdict: STRONG. Walkito equivalent: one 30-60 second guided exercise (e.g. a towel stretch with a video) right before the paywall, or a "Day 1 of your plan" preview. Clear 30 is the closest analog (health habit app).

### E. Onboarding length: longer quiz vs shorter

| App | Change | Before -> After | URL | Credibility |
|---|---|---|---|---|
| Starter Story founder ($40K/mo) | 20 screens -> 10-15 min onboarding | Trial 3% -> 15% | https://x.com/starter_story/status/2057272337842712738 | MED |
| Coconote | ~5 -> ~13 screens | Trial +16% | https://www.youtube.com/watch?v=E_4gRy4O03w&t=1738s | MED |
| Fitness coaching client (RocketShip HQ) | 22-question quiz + plan reveal | Paywall conversion 4.1% -> 9.8% over 8 weeks | https://www.rocketshiphq.com/noom-quiz-paywall-funnel-replication | MED (agency) |
| IH founder (static slides -> ~20 steps) | Long onboarding + 3-day trial | Trial start 2.5% -> 5% | https://www.indiehackers.com/post/i-redesigned-the-onboarding-and-paywall-in-my-app-and-in-a-single-week-i-earned-more-than-in-the-previous-six-months-combined-9bdd175e03 | MED |
| SHORTER WON: AI productivity app (MrArshSingh, agency) | 8 steps -> 3 | D1 retention 41% -> 67%, trial 2.1% -> 4.3% | https://x.com/MrArshSingh/status/2119905371724599397 | LOW-MED |
| SHORTER WON: Bustimes | Short flow because users are at a bus stop | 0.5% -> 8% (bundle of changes) | https://www.youtube.com/watch?v=T5zMsTw8GWQ&t=586s | MED |

Verdict: MIXED. Longer quiz wins more often in health/fitness. Walkito already has a long quiz and 52% (22/42) finish it, so the quiz is not the main leak. The leak is at the plans screen. Do not make it longer yet. Cut questions that do not visibly change the plan (e.g. "where did you hear about us" can go after the paywall or be removed).

### F. Fewer plan options / default plan / price framing

| App | Change | Before -> After | URL | Credibility |
|---|---|---|---|---|
| julian_gargi | Removed one pricing option | 8.5% -> 11.6% (+36%) | https://x.com/julian_gargi/status/2052480730962313280 | MED |
| GainFrame (fitness photo app) | Lead with what you get + show yearly as $3.33/mo instead of $39.99/yr | Paywall view -> trial 24.1% -> 30.1% (88.9% chance to win, not significant) | https://www.reddit.com/r/AppBusiness/comments/1upohjk/fixed_my_trial_conversion_21_44_and_just_passed/ | MED-HIGH (honest about significance) |
| 1.2M-user app (r/AppBusiness) | "SAVE $45/YEAR" callout | +0.8 pts | https://www.reddit.com/r/AppBusiness/comments/1occcur/things_that_actually_changed_our_conversion_rate/ | MED |
| Business of Apps cited test | Default to annual instead of showing all plans | Annual share 60% -> 80%, no drop in conversion | https://www.businessofapps.com/insights/why-the-gap-between-app-install-and-trial-start-is-the-biggest-lever-most-apps-ignore | MED |
| COUNTER: Superwall data, 32M paywall views | 2 products beat 1 by 61%, 3 beat 2 by 44% | https://superwall.com/blog/how-many-products-should-you-offer-on-your-paywall | HIGH (big data, but vendor) |
| COUNTER: Indie on RevenueCat | Showing all 3 products vs only annual | Initial conversions +10%, but annual -30% and churn up | https://www.revenuecat.com/blog/engineering/how-i-successfully-migrated-my-indie-app-to-revenuecat-paywalls | HIGH |

Verdict: MIXED on number of plans, STRONG on per-month framing. For Walkito ($59.99/yr only): test adding a monthly or weekly anchor, and show "$5/month, billed yearly" more prominently. Per-month framing must still show the full billed amount clearly (Apple 3.1.2).

### G. Social proof on paywall

| App | Change | Result | URL | Credibility |
|---|---|---|---|---|
| 1.2M-user app | Testimonials moved from bottom to right after headline | +0.4 pts | https://www.reddit.com/r/AppBusiness/comments/1occcur/things_that_actually_changed_our_conversion_rate/ | MED |
| Food app (RevenueCat case) | Second paywall with stat "86% of users improved their diet" | Install-to-trial +72% | https://www.revenuecat.com/blog/growth/paywalls-unexpected-uses | MED-HIGH |
| Party game (RevenueCat case) | Shorter paywall, real App Store reviews, trial toggle | Install-to-trial +31%, revenue +64% | https://www.revenuecat.com/blog/growth/paywall-redesigns-case-studies | MED-HIGH (toggle now risky, see below) |
| Foodnoms | Added Apple award laurels + star rating to winning paywall | Part of +58% bundle | https://ryanwesley.com/paywall-optimization-success-story | HIGH (bundled) |

Verdict: MEDIUM-STRONG. Walkito must use only real reviews and real stats. With few users, "86% improved" style stats are not available, and inventing them breaks FTC rules. Use real App Store reviews or a clinical-guideline mention (e.g. "Exercises based on stretching protocols used by physical therapists", only if true and sourced).

### H. Free trial vs no trial (hard paywall, pay now)

| App | Change | Result | URL | Credibility |
|---|---|---|---|---|
| Win for trial: ar0nbg | 3-week A/B, trial vs no trial | LTV ~20% higher WITH trial | https://x.com/ar0nbg/status/2119397573006119086 | MED-HIGH |
| Win for trial: Pregnancy+ (health) | Free trial vs discounted intro price | Free trial +140% revenue | https://adapty.io/case-studies/pregnancy-plus/ | MED-HIGH |
| Win for trial: r/SideProject | Hard paywall no trial -> 7-day trial | Paid 2% -> 11%; moving reminder to day 4 added ~30% | https://www.reddit.com/r/SideProject/comments/1rmed0k/i_added_a_free_trial_and_my_paid_conversion_went | LOW-MED |
| Win for no trial: guillemcraft | 94 trials ended, 5 paid; 56 of 85 cancelled same day. Removed trial | $87 and $70 days after, but $118 of $208 was still old trials | https://x.com/guillemcraft/status/2117575767479754987 and https://x.com/guillemcraft/status/2118753807433912357 | MED (very early, confounded) |
| Ads hybrid FAILURE: dimtri_G | Added interstitial ads to sub app | ARPU and retention up, trial starts -69.5% | https://x.com/dimtri_G/status/2117635411052732799 | MED |
| Linearity Curve | Opt-in trial vs default trial | Fewer trial starts, trial conversion +10% | https://superwall.com/case-studies/linearity-curve | MED-HIGH |

Verdict: MIXED, but for a health app with older users, trial wins more. Keep the 7-day trial for Meta users.

### I. Hard paywall placement (paywall right after onboarding)

| App | Result | URL | Credibility |
|---|---|---|---|
| Alpe Audio | Paywall upfront after bare onboarding: 3x trial starts, trial-to-paid flat; total 7.6x download-to-paid over 8 months | https://www.indiehackers.com/post/how-we-increased-conversion-from-free-to-paid-by-7-6x-e067256502 | MED-HIGH |
| ChadAppDev (via Nick_5anchez) | Freemium app made 2.6x more in 30 days behind hard paywall | https://x.com/Nick_5anchez/status/2118357707988074961 | LOW-MED (secondhand) |
| Glam Up / Sprout | Hard paywall after onboarding beat explore-first by 50% | https://www.youtube.com/watch?v=Bf12MNPO-Js&t=2679s | MED |
| RevenueCat example | Welcome -> onboarding -> home -> paywall 2%; welcome -> paywall 8%; welcome -> 3-slide carousel -> paywall 15% | https://www.revenuecat.com/blog/growth/paywalls-unexpected-uses | MED-HIGH |
| COUNTER: Social studio (Celebs) | Removing the onboarding paywall was "a big win" | https://www.youtube.com/watch?v=oxr_Dz1vhdU&t=1037s | MED |
| COUNTER: Seraleev | Prefers soft paywalls; ~75-80% of revenue still comes right after onboarding | https://x.com/seraleev/status/1913802606595448999 | WEAK-MED |

Verdict: STRONG that the post-onboarding moment is where most purchases happen. Walkito already does this. The issue is not placement.

### J. Exit offer / one-time offer after "Not now"

| App | Result | URL | Credibility |
|---|---|---|---|
| Superwall (Jake Mor) | Secondary offer slides up in same paywall on abandoned transaction: 23% -> 30% | https://x.com/jakemor/status/2077591686193004610 | MED (vendor, one app) |
| Dwellspring (sleep sounds, health & wellness) | On exit, offer 14-day trial instead of 7 (no discount) | Part of a bundle: LTV +40%, conversion ~2.7x | http://applica.agency/case-studies/dwellspring-sleep-sounds-i-os-android-app | MED (agency) |
| Ahead App | Paid 30-day trial extension option | Trial conversion +7% | https://superwall.com/case-studies/ahead-app | MED-HIGH |
| guillemcraft | One-time offer on close "brought 1" sale | https://x.com/guillemcraft/status/2117575767479754987 | LOW |
| RISK: Seraleev | Apple started rejecting apps that show a discounted paywall right after the main one is closed (Apr 2026) | https://x.com/seraleev/status/2042218058291302858 | MED (founder report, verify) |

Verdict: MEDIUM on gains, HIGH RISK on Apple review. Walkito's current "Not now -> one-time offer" may itself be a rejection risk. A longer trial (no discount) on exit is the safer version.

### K. Button text / small copy and visual tweaks

| App | Result | URL | Credibility |
|---|---|---|---|
| Steven Cravotta | One word on CTA: +7% | https://x.com/StevenCravotta/status/2047119277082218616 | LOW-MED |
| Quiet (app studio) | White vs purple CTA: trial 19.05% -> 23.64% | http://adapty.io/case-studies/quiet | MED-HIGH |
| 1.2M-user app | Main value prop moved from item 4 to item 1: +0.6 pts | https://www.reddit.com/r/AppBusiness/comments/1occcur/things_that_actually_changed_our_conversion_rate/ | MED |
| Clear 30 | Screen stating the app costs money, price vs cost of habit: +3%, fewer "it's paid" complaints | https://www.youtube.com/watch?v=cYcU4_HQdIk&t=1040s | MED |

Verdict: MEDIUM. Cheap to test once traffic exists, but small lifts need large samples.

### L. Commitment / pledge screens

| App | Result | URL | Credibility |
|---|---|---|---|
| Symmetry (gym) | Signed pledge at end of onboarding: retention +3% (not conversion) | https://www.youtube.com/watch?v=OV09yPLf8BI&t=744s | MED |
| PushScroll | Micro-commitments incl. signing name; "committed users convert more" (no %) | https://www.youtube.com/watch?v=PdudtXwEsOQ&t=2915s | WEAK |
| Headspace (Irrational Labs) | Asking users to plan when they'd meditate: app opens +7.5%; quiz matching doubled course starts | https://irrationallabs.com/case-studies/headspace-doubled-course-starts | HIGH (behavioral science firm, but outcome is usage, not trials) |

Verdict: MEDIUM for retention and trial-to-paid, weak for trial start. Good ethical fit for Walkito ("I'll do my 5-minute routine after breakfast").

---

## 2. Which tactics have the most independent wins

1. Trial timeline + reminder + "no payment now" (5+ independent wins, 2 real A/B tests, 1 health app). STRONGEST.
2. Personalized paywall headline/plan reveal from quiz answers (5+ wins across fitness, travel, books).
3. Show value/"aha" before price (demo, program preview, video) (6+ wins, incl. Clear 30 health app).
4. Paywall right after onboarding (many wins, Walkito already does it).
5. Multi-screen paywall (several wins, one clear loss).

## 3. Failures and things that did not work

- Free trial that people cancel day one: guillemcraft, 94 trials -> 5 paid, 56/85 cancelled the same day. Trial without real use sells nothing. https://x.com/guillemcraft/status/2117575767479754987
- Removing trials hurt LTV: ar0nbg A/B, trial had ~20% higher LTV. https://x.com/ar0nbg/status/2119397573006119086
- Multi-page lost to single page: Stompers, single page +16%. https://superwall.com/case-studies/stompers
- Adding ads to a sub app: trial starts -69.5%. https://x.com/dimtri_G/status/2117635411052732799
- Walking app (thematheusmello, locks apps until you walk, closest analog to Walkito): paywall conversion fell from ~45% to under 10%; last 30 days 54 saw paywall, 2 tapped, 1 paid. Cause not stated. https://x.com/thematheusmello/status/2117700843432509495
- Adam Lyttle on cold paid traffic: install-to-trial only 3.5% in language niche; 40 funnel views, 16 saw paywall, 0 trials one day; Meta CPI floor $3.63 "economics don't work". Cold Meta traffic converts worse than organic. https://x.com/adamlyttleapps/status/2077526433287827960 , https://x.com/adamlyttleapps/status/2060696162521555120 , https://x.com/adamlyttleapps/status/2049775675025002599
- Early test readings that reversed: Rubendgrf, +16% at week 1 on 32,000 visitors ended at +1% after 4 weeks. https://x.com/Rubendgrf/status/2119784599999926706
- Showing all plans: more conversions but annual -30% and higher churn. https://www.revenuecat.com/blog/engineering/how-i-successfully-migrated-my-indie-app-to-revenuecat-paywalls
- Onboarding fixes that raised completion but barely moved paid: Tupptupp, onboarding success 30% -> 65%, paid only 4% -> 5%. https://www.reddit.com/r/indiehackers/comments/1lxi4dm/i_doubled_my_onboarding_success_rate_by_hiding

## 4. Apple / FTC flags found in founder posts

- Seraleev reports Apple has banned or started rejecting: free trial toggles on paywalls, discounted offer paywalls right after closing the main paywall, rating requests during onboarding (June 2026). https://x.com/seraleev/status/2067424260113436792 . MED, verify against current App Review Guidelines. Note: RevenueCat's party-game +64% win used a trial toggle, so that tactic is now off the table.
- Adam Lyttle: new App Review guidelines target remote paywall flags (Oct 2026). https://x.com/adamlyttleapps/status/2111230379957141899 . Jaimin Desai: put every paywall variant in the reviewed build and describe them in review notes. https://x.com/JaiminDesai93/status/2117705474485502305
- Lawsuits over free-trial charges (Oct 2026) target apps that promised a trial but charged right away. https://x.com/adamlyttleapps/status/2108364266617340044 . Walkito must make sure "1 week free" is real for every user who sees it (Meta vs organic logic).
- Apple DPLA warning: pedrotech_ found 89% of refund requests were people who forgot to cancel trials and removed trials after an Apple warning. https://x.com/pedrotech_/status/2118076390016995808 . This supports sending a real trial-end reminder.

---

## 5. TOP 10 tactics for Walkito

1. **Fix and verify the plans screen first.**
   Why: 0 taps on both buttons + 10 rage taps looks like a bug or layout problem. Many founders found bugs before anything else (Foodnoms, GainFrame, Adam Lyttle).
   Evidence: STRONG.
   Test: fresh install from a Meta ad link on 3 iPhone sizes (incl. small SE and large text setting, common for 55+). Check prices load, CTA is above the fold, "Not now" is visible, tap targets are 44pt+. Watch session replays of the rage taps.

2. **Trial timeline + reminder promise on the plans screen.**
   Why: most independent wins; built for "I'll forget and get charged" fear, which is high in older users. Foodnoms +58% initial conversion, Pregnancy+ +27% revenue, Blinkist +23% trial starts.
   Evidence: STRONG.
   Test: "Today: full access. Day 5: we remind you. Day 7: $59.99/year starts. Cancel anytime in Settings." Actually send the Day 5 notification. A/B vs current.

3. **"No payment due now" line under the CTA, plus the CTA text "Start my free week".**
   Why: removes fear at the tap moment. Multiple founders (Cravotta, Seraleev, Vahe).
   Evidence: MEDIUM.
   Test: ship with tactic 2, or as a separate test of copy only.

4. **Personalized plan headline using their quiz answers.**
   Why: maxzrco 5% -> 10%, JourneyStamp +50%, Sumizeit +24%. Shows the long quiz was not wasted.
   Evidence: STRONG.
   Test: "Your heel routine for [morning heel pain / standing all day]: 5 minutes a day." No "cure", "pain-free", or timeframes.

5. **A real taste of value before the price.**
   Why: kenbuildsalone 17.9% vs 7.8%; Clear 30 20% -> 30% with a day-by-day program; Copia doubled conversion with a video.
   Evidence: STRONG.
   Test: replace paywall screen 1 with "Day 1 of your plan" preview (3 exercise thumbnails with short looping video), or let them do one 30-second stretch before the paywall.

6. **Make screens 1-2 do one job each: "Try Walkito free" -> "We'll remind you before it ends" -> plans.**
   Why: kenbuildsalone 8.1% -> 27.5%, Speak4Me +27%. But Stompers lost with a multi-page flow, so test against a single combined screen.
   Evidence: MEDIUM.
   Test: A = current 3 screens with new content; B = one screen with timeline + plan. Watch Apple's "three paywalls in a row" concern.

7. **Per-month price framing and a cheaper anchor.**
   Why: GainFrame 24.1% -> 30.1% with "$3.33/mo"; "save" callout +0.8 pts; Superwall 32M views say 2 products beat 1 by 61%.
   Evidence: MEDIUM.
   Test: show "$5/mo, billed $59.99 yearly" big, and test adding a monthly plan (e.g. $9.99) as the anchor. Full billed price must stay clear.

8. **Real social proof right under the headline.**
   Why: 1.2M-user app +0.4 pts moving testimonials up; food app +72% with a real stat; Foodnoms added ratings.
   Evidence: MEDIUM.
   Test: only real App Store reviews and rating (copy exact text, with name as shown). If not enough yet, use a sourced line about the exercise approach. Never invent a stat.

9. **Exit path = longer trial, not a discount; and re-check the current one-time offer.**
   Why: Dwellspring offered 14 days on exit (no discount), Ahead +7%. Seraleev reports Apple rejects discounted paywalls shown right after the main one.
   Evidence: MEDIUM (gain), MEDIUM (risk).
   Test: on "Not now", offer "Need more time? Try 14 days free", with the same price. Make sure the offer is in the reviewed build.

10. **Cut the quiz questions that don't change the plan, and add one commitment step.**
    Why: shorter/cleaner wins in some cases (Copia, MrArshSingh); 48% already drop in the quiz. Commitment screens help retention (Symmetry +3%, Headspace +7.5% opens), which raises trial-to-paid.
    Evidence: MEDIUM.
    Test: move "where did you hear about us" after the paywall; add "When will you do your 5 minutes?" (after coffee / before bed), and use it for the reminder time.

How to test with tiny traffic: at ~20 paywall views per $60 of ads, a test needs a few hundred views per arm to see a 2x change. So run big swings first (tactics 1, 2, 4, 5 together as one new paywall vs old), read results after full weeks, and judge on trial starts plus Day 8 paid, not trial starts alone (dimtri_G, Rubendgrf).

## 6. Five things to avoid

1. **Fake urgency and fake scarcity** (countdown timers that reset, "only today" offers that come back). FTC risk, and for a 35-65+ health audience it reads as a scam. No founder in this set showed a durable win from it.
2. **Trial toggles and discounted offers right after closing the main paywall.** Founders report Apple now rejects both (Seraleev, Apr-Jun 2026). Walkito's current one-time offer after "Not now" should be reviewed.
3. **Health outcome claims in personalized copy** ("pain-free in 14 days", "fix your flat feet"). The "echo their goal" tactic works, but turning "reduce heel pain" into a promise breaks FTC health-claim rules and Apple 1.4.1.
4. **Invented testimonials or stats** ("86% of users felt better") without real data. Social proof works only when real, and fake reviews are an FTC violation.
5. **Promising a free trial that is not given, or forgetting the reminder.** Founders report lawsuits over trial charges and Apple DPLA warnings from refunds by people who forgot to cancel. If "1 week free" shows, it must be granted, and a Day 5 reminder must actually fire.

## 7. Notes on credibility

- Almost nothing here has sample sizes. Only Foodnoms, Superwall/Adapty case studies, Sumizeit, GainFrame and the 1.2M-user Reddit post give test designs.
- Vendor case studies (Superwall, Adapty, RevenueCat) pick winners. Founder X posts are often promotional.
- Closest analogs to Walkito: Clear 30 (health habit, quit smoking), Pregnancy+ (medical, older-ish users), Foodnoms (nutrition), Dwellspring (wellness), thematheusmello's walking app (failure case).
- Many tweets with only links (X articles from nicholascalez, jakecastilloooo, JeremyLasne, maubaron) could not be read without opening X articles and were skipped.
