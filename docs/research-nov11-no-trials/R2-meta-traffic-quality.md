# R2: Meta traffic quality for subscription apps (Walkito, Nov 11, 2026)

Question: why do cheap install-optimized Meta users (iOS, ~$2.48 CPI) start almost no trials, and what do subscription apps change to fix it?

Evidence levels: STRONG = data, several sources. MEDIUM = one credible source with numbers. WEAK = opinion or single-practitioner experience.

---

## 0. The short answer

1. **An install campaign buys people who install, nothing more.** Meta optimizes for exactly the event you name. Our $2.48 installs are cheap because Meta found the cheapest tappers, not trial starters. Every playbook below says the same: install campaigns are for creative testing and CPI checks, not for revenue. (STRONG)
2. **Our setup makes it worse:** Advantage+ app campaign + "25+ with 35-65 as a suggestion" means Meta can spend on 25-34 year olds and men, and on Audience Network, Reels, etc. Suggestions are not limits. (STRONG, Meta docs)
3. **The creative is now the targeting.** Under Meta's Andromeda delivery, the ad picks the audience. A cartoon mascot + "Free" framing + insole comparison is a broad, light, curiosity ad. Our own survey says 16 of 36 users tapped "Nothing hurts right now". That is a targeting failure, not a paywall failure. (MEDIUM)
4. **We may not even be able to fix it the "normal" way.** Start trial is not eligible on iOS (AEM), and a heel-pain / plantar-fasciitis app is exactly the kind of data source Meta tags "Health and wellness", which can block StartTrial / Subscribe events for optimization. Check this first, because it decides the whole plan. (MEDIUM)
5. **Benchmarks: 0-1 trials from ~65 Meta installs is far below normal, but 65 installs is a tiny sample.** Health & Fitness median download-to-trial is 6.9% (RevenueCat 2026); Adapty puts North America install-to-trial at 14.5%. At 6.9% we would expect ~4-5 trials from 65 installs; 0-1 is bad but not yet statistically conclusive. The 3 "Start free week" taps with 0 trials also need a purchase-sheet check (not a traffic problem). (STRONG for benchmarks)

---

## 1. Install vs app-event optimization

### What the sources say

- **Meta's own docs:** install optimization is "recommended if your goal is to maximize the reach of your application and your main criterion is reduced cost per new customer installation". App event optimization shows ads "to people likely to take a specific action in your app". StartTrial and Subscribe are standard events with `value`, `currency`, `predicted_ltv` parameters. https://developers.facebook.com/docs/app-ads/optimizing-your-app-ad (STRONG, official)
- **Meta best practices for event optimization:** choose an event with "more than 100 conversions over the 2 weeks prior", mid/deep-funnel events "typically completed by 1% to 30% of your users", set events up "a few days before" (new events can be unavailable for up to 72h), and if you have a custom event, optimize "directly for your custom event". https://www.facebook.com/business/help/847716789206621 (STRONG, official)
- **Adapty / Samet Durgun ("first $10K on Meta"):** first $1-2K = manual install campaign for creative discovery only. Then move winners to trial/purchase optimization. "Your CPI on purchase optimization can be 5X to 10X your install CPI. That's expected. You're paying for intent." Organic trial rate ~10% -> trial campaigns can push ~30%. Organic install-to-paid ~2% -> purchase campaigns ~10-20%. Learning: "If nothing comes in 2-3 days, nothing magical will come later." https://adapty.io/blog/first-10k-meta-ads-subscription-apps (MEDIUM, practitioner with numbers)
- **Adapty 12 questions:** "install campaigns won't make you money on their own. If your revenue comes from purchases, install campaigns will perform much worse than purchase or value optimization campaigns." https://adapty.io/blog/meta-ads-subscription-apps/ (MEDIUM)
- **Airbridge (Nov 3, 2026):** "If most of your installers drop out before step 3, a low cost per install can still mean a high cost per subscriber." Small budget -> optimize for trial starts. https://www.airbridge.io/en/blog/optimize-for-trial-starts-not-installs (MEDIUM)
- **Planfit case (Airbridge):** moved from install-based to free-trial optimization on Meta after finding trial start was the strongest predictor of paid; CAC down 40%. https://www.airbridge.io/en/case-studies/planfit-app-event-optimization-free-trial (MEDIUM, vendor case)
- **The Social Outline / TheMG Media / Growth Therapist:** trial start is the usual first event for trial apps at $50-100/day because purchases are too rare (and on 7-day trials, the paid event lands on day 8, outside the click window). https://thesocialoutline.com/blog/meta-ads-optimise-installs-trials-purchases , https://themgmedia.com/articles/meta-ads-optimise-trial-starts-or-purchases , https://growththerapist.com/blog/subscription-app-optimization-event (MEDIUM, consistent across 3)

### The catch with trial optimization (applies to us)

- Trial optimization is "blind" to payment. Meta will find people who start trials everywhere, often 18-24. Fixes: exclude/bid down young ages, or send a **"qualified trial"** (trial not cancelled after N hours) instead of raw StartTrial. https://adapty.io/blog/first-10k-meta-ads-subscription-apps , https://adapty.io/blog/meta-ads-subscription-apps/ (MEDIUM)
- **Adapty signal-engineering case (Oct 2026):** even with campaigns split by age, ~25% of spend went to under-25s. They sent under-25 trials to Meta at 20% of the reference value and older cohorts at LTV-based values. Under-25 spend fell below 10% and **paid subs from users 35+ grew 3x at the same spend**. https://adapty.io/blog/same-budget-better-users-signal-engineering-on-meta (MEDIUM, one vendor case, no sample size given in snippet)
- **RevenueCat (David Vargas playbook):** "Lowering the cost per trial often comes from targeting younger audiences that have lower purchase intent." With a creative-testing structure they cut cost per trial 29% while trial-to-sub rose 2%. https://www.revenuecat.com/blog/growth/high-velocity-creative-testing-framework-apps-meta (MEDIUM)

### Value optimization

- Not available to new advertisers; needs purchase history. For annual plans with trials the signal is too slow. Not relevant for Walkito yet. https://adapty.io/blog/first-10k-meta-ads-subscription-apps , eligibility: https://business.facebook.com/business/help/1382473436615209 (STRONG)

### "Complete tutorial" / onboarding-done as a proxy

- Meta lists Complete Tutorial as a standard app event. https://developers.facebook.com/docs/app-ads/optimizing-your-app-ad
- Practitioners say pick the **earliest event with a real link to payment**, not the easiest one. Admiral Media: install -> trial start -> activation proxy ladder, judged on cost per paid subscriber. https://admiral.media/app-event-optimization , https://admiral.media/app-free-trial-optimization , https://www.businessofapps.com/insights/how-to-measure-app-growth-when-user-level-tracking-is-limited (WEAK-MEDIUM)
- For Walkito, "finished onboarding" is a weak proxy: 50 of 65 Meta users finished onboarding and 0 trialed. Optimizing for it would teach Meta to find more quiz-finishers. A better proxy would be **"reached plans screen with price"** or **"tapped Start free week"** (35 and 3 of 65). Still a guess until we have trials to correlate. (WEAK, our own data)

---

## 2. When Start trial is not eligible on iOS (AEM / SKAN)

### Facts from Meta and MMPs

- Check per event: Events Manager > Datasets > Settings > "Setup tasks for iOS app events" > "Meta's attribution for iOS 14+" > **Check app eligibility**. "More details" says why. https://www.facebook.com/business/help/617021863580582 (STRONG, official)
- Ineligibility reasons Meta lists include: event sent through a **different integration than the install event**, **multiple integrations for the same event**, **"Not enough signals from last 30 days"**, IP data issues, ATT-parameter volume out of range, pending (recheck in 3 days). https://www.facebook.com/business/help/716239976391518 (STRONG, official)
- Growth Therapist's walkthrough (checked Sep 29, 2026) maps each message to a fix. Key points:
  - **RevenueCat direct to Meta:** only sends App Store events when the user has `$fbAnonId` or IDFA and ATT = authorized, **unless "Send events when ATT consent is not authorized" is enabled**. So on a small app, most trials never reach Meta -> "Not enough signals". Keep the Meta SDK for installs.
  - **Same integration rule:** installs via Meta SDK and trials via RevenueCat CAPI may count as two integrations. Check "chosen integration" for both events.
  - **Their order that usually clears it:** set up AEM in Events Manager, (MMP) turn on probabilistic/AEM setting, run an install campaign, then switch to StartTrial once it shows Eligible.
  - Waits: up to 24h for events to show, 3 days for pending, up to 7 days after picking an integration.
  https://growththerapist.com/blog/meta-aem-trial-purchase-events-ineligible (MEDIUM, practitioner, well sourced)
- AppsFlyer: for server-to-server events, Meta requires **IP and IDFV** in the payload or the event is not AEM-eligible. https://support.appsflyer.com/hc/en-us/articles/19228737402129 (STRONG, MMP docs)
- iOS 14+ campaign rules: one optimization type per campaign; up to 24 campaigns per app (older dev page says 9); **one ad set per Advantage+ app campaign with a fixed optimization choice**; "Manual setup is not supported" for iOS 14+ per Segwise's reading. https://www.facebook.com/business/help/651033805513936 , https://segwise.ai/blog/meta-advantage-plus-app-campaigns-guide (STRONG / MEDIUM)
- AEM attribution: 1-day click for install optimization, 1- or 7-day click for app-event optimization. SKAN reporting delayed 24h+; AppsFlyer advises no edits in the first 72h of iOS campaigns and expects longer learning. https://segwise.ai/blog/meta-advantage-plus-app-campaigns-guide , https://www.appsflyer.com/blog/measurement-analytics/optimize-skadnetwork-campaigns (MEDIUM)
- ATT opt-in industry average ~35% (Adjust, Q2 2025), so most iOS users are never user-level tracked. https://www.adjust.com/blog/att-opt-in-rates-2025 (MEDIUM)

### Options if StartTrial stays ineligible

| Option | What | Evidence |
|---|---|---|
| A. Fix eligibility | Read the exact "More details" message, fix the integration (one route for install + trial, ATT setting, IP/IDFV), wait the stated window | MEDIUM (Meta + Growth Therapist) |
| B. Keep installs but filter the audience hard | Account-level / ad-set minimum age, stronger creative, bid down young ages | MEDIUM |
| C. Web-to-app funnel | Ad -> web quiz + web checkout -> app. Uses web pixel/CAPI (Purchase / StartTrial events on web) instead of iOS AEM. Cases: English on Smartphone 2x revenue at half spend (CAC was $30-40); Rino (men's health) 2.5x checkout CR; ExploreApps 1.5x lower cost per sub. https://funnelfox.com/case-studies/x2-revenue-half-budget-with-funnelfox/ , https://funnelfox.com/case-studies/doubled-checkout-cr-with-funnelfox/ , https://blog.funnelfox.com/exploreapps-cuts-cps-by-half-with-funnelfox . FunnelFox suggests $300-400/day for a first web2app Meta campaign. https://funnelfox.com/web-to-app-funnels-guide/ | MEDIUM (vendor cases). **But a health-tagged website hits the same Meta restriction (section 9).** |
| D. Android test | Better tracking, cheaper; Samet Durgun tests creatives on Android first then moves winners to iOS | WEAK-MEDIUM. Walkito is iPhone-only, so N/A now. |

---

## 3. Advantage+ app campaigns vs manual

- **Meta:** Advantage+ app campaigns use Meta AI for bidding, audiences and placements; placements run across Facebook, Messenger, Instagram and Audience Network; audience inputs are country, language, app store. Meta claims 7% better CPA on average. https://www.facebook.com/business/help/309994246788275 , https://www.facebook.com/business/ads/meta-advantage-plus/app-campaigns (STRONG for what it is, the 7% is Meta's claim)
- **Segwise (Nov 2026):** "the only targeting options available are operating system, countries and language. No interests, no lookalikes, no custom audience inclusions, no gender." Excluding a placement turns Advantage+ off. https://segwise.ai/blog/meta-advantage-plus-app-campaigns-guide (MEDIUM)
- **Admiral Media A/B test (maternal health app, women 24-38):** 15.6% of Advantage+ budget went to men, a "quite big proportion" to irrelevant ages; the Advantage+ campaign failed to hit the target of 10% lower CPI vs a manual age+gender campaign. https://admiral.media/meta-advantage-app-campaigns-not-always-your-best-friend (MEDIUM, one test, numbers partly in charts)
- **Adapty / Samet Durgun:** start with a **manual** install campaign for creative discovery; "If you're trial-first, Advantage+ can be risky. Meta may find cheap trials (often younger cohorts)". If your app is clearly for women or 40+, "don't let Meta 'discover' that with your money." https://adapty.io/blog/first-10k-meta-ads-subscription-apps (MEDIUM)
- **Pro-Advantage+ cases** (bigger accounts): Archosaur Games 28% lower cost per IAP; Hallow (prayer app) 44% more incremental trial starts when adding ThruPlay to an Advantage+ app campaign. https://www.facebook.com/business/success/archosaur-games , https://www.facebook.com/business/success/hallow (MEDIUM, Meta-published)
- **RevenueCat framework 1** for beginners: Advantage+ campaign with "Trial Started" goal, 5 ads. https://www.revenuecat.com/blog/growth/7-meta-ad-testing-frameworks-for-subscription-apps (MEDIUM). Note it assumes the trial event is eligible.

**Takeaway for Walkito:** Advantage+ is fine once the optimization event is a trial/qualified trial. With an install goal and a narrow audience (women 45-65), automation pushes spend to the cheapest installers, which is the opposite of what we need. (MEDIUM)

---

## 4. Age and gender (25+ vs 35+ vs 45+)

- **Meta, Advantage+ audience:** Controls = location, **minimum age**, custom-audience exclusions, language. Age and gender are **suggestions**; "if you suggest the gender Women, it's possible that your ads could also deliver to men". https://www.facebook.com/business/help/938372127764391 (STRONG, official)
- **Meta Marketing API:** with Advantage+ audience on, `age_min` can only be **18-25**; `age_max` is fixed at 65. So our "25+" is already the highest hard floor Advantage+ allows; "35-65" is only a hint. To hard-limit 35+ or 45+ you must turn Advantage+ audience off ("Further limit the reach"), which may not be possible inside an iOS 14+ Advantage+ app campaign. https://developers.facebook.com/docs/marketing-api/audiences/reference/targeting-expansion/advantage-audience (STRONG, official; how it maps to app campaigns: MEDIUM)
- Account-wide minimum age in ad account settings also applies. https://www.facebook.com/business/help/25941857932125812 (STRONG)
- **Marcus Burke (RevenueCat):** "35-44 is where I see the sweet spot of strong purchase power... While young users tend to be cheapest and have great conversion rates to install and to trial, their trial conversion is mostly subpar." https://www.revenuecat.com/blog/growth/how-to-increase-trial-conversion-rates-without-adding-new-features (WEAK-MEDIUM, expert opinion)
- **Adapty:** in the US, "maybe 50% of your budget goes to 18-24 year olds" on trial campaigns; bid down 18-24 by 30-40% or split 18-24 vs 25+. Adapty case: under-25s still took ~25% of spend despite age splits until values were down-weighted. https://adapty.io/blog/first-10k-meta-ads-subscription-apps , https://adapty.io/blog/same-budget-better-users-signal-engineering-on-meta (MEDIUM)
- **Gender example (Adapty, real app, same creative):** women CPC $10.80 vs men $4.20, but purchase CR 1.81% vs 0.73%. The "expensive" segment was the better buy. https://adapty.io/blog/creative-funnel-consistency/ (MEDIUM)
- **Who is on which app (Pew, US, 2025):** Facebook used by 74% of 50-64 and 57% of 65+; Instagram only 40% of 50-64 and 19% of 65+. Women use Facebook more than men (78% vs 63%). Daily Facebook use is 54% among 50-64. https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025 (STRONG)

**For Walkito:** our core buyer (women 45-65) lives on Facebook more than Instagram. An Advantage+ campaign with a 25 floor will drift younger toward Instagram/Reels where installs are cheap. Pull the Ads Manager age x gender x placement breakdown before deciding; we have not seen it. (MEDIUM)

---

## 5. Placements (Reels, Audience Network, Facebook vs Instagram)

- Advantage+ placements include Audience Network; you cannot exclude it without turning Advantage+ off (Meta allows "limited spend" up to 5% per excluded placement). https://www.facebook.com/business/help/309994246788275 , https://segwise.ai/blog/meta-advantage-plus-app-campaigns-guide (STRONG)
- Audience Network is "the most notorious placement group for low-quality actions", susceptible to accidental clicks, bots and click fraud. Jon Loomer. https://www.jonloomer.com/a-guide-to-meta-ads-placements (WEAK-MEDIUM, expert)
- Meta itself polices accidental clicks on Audience Network publishers (click thresholds, "failing" quality checks), confirming accidental engagement is a known issue. https://www.facebook.com/business/help/473039819825664 , https://www.facebook.com/business/help/1673395492911956 (MEDIUM)
- Marcus Burke: vertical UGC on TikTok/Reels pulls younger audiences, cheap trials, weaker conversion; Facebook/Instagram feed content ads skew older, higher income. "Make sure you evaluate ad performance on audience and placement." https://www.revenuecat.com/blog/growth/how-to-increase-trial-conversion-rates-without-adding-new-features (WEAK-MEDIUM)
- Jon Loomer's counterpoint: when you optimize for a deep event, placement quality matters less because the algorithm adjusts. That is exactly why install optimization + all placements is the worst combo. https://www.jonloomer.com/a-guide-to-meta-ads-placements (WEAK)

---

## 6. How the ad message shapes intent

- **Adapty, "creative-funnel match" (Jun 2026):** "Under Meta's Andromeda algorithm, the creative selects the audience before the click." A good creative names a specific pain, shows a clear solution, makes the format obvious and "avoids 'freebie' promises, which select for users optimizing for cost." User types: the curious (quiz/"find out" hooks, rarely buy), solution-seeker (specific pain, sometimes), ready-to-pay (outcome shown, yes), price-sensitive ("discount, free, limited offer", "drops at the pricing screen", rarely). Audience mismatch signature = users go all the way through onboarding and **stall at the paywall**. https://adapty.io/blog/creative-funnel-consistency/ (MEDIUM, matches our funnel exactly: 50/65 finished onboarding, 0 trials)
- **Meta on Andromeda / creative diversification:** https://www.facebook.com/business/news/the-creative-advantage-unlocking-the-power-of-diversification-with-meta-andromeda (STRONG that it exists; mechanics described by Meta)
- **RocketShip HQ:** two ads for the same app can bring very different users; judge creative on cost per trial and trial-to-paid by concept, not clicks or installs. https://www.rocketshiphq.com/creative-for-subscription-apps-vertical (WEAK-MEDIUM)
- **Social Operator:** pre-qualify trial intent in the ad; use explicit trial framing ("Start your 7-day free trial") so responders already accept a trial. https://socialoperator.ai/learn/subscription-app-creative-strategy/ (WEAK)
- **Samet Durgun:** "Don't scream your app. Start with the pain, the emotion, the moment." Spend distribution = Meta's opinion of a creative; force $2-5 minimum per ad to test fairly. https://adapty.io/blog/first-10k-meta-ads-subscription-apps (WEAK-MEDIUM)
- **FitXR (Meta case):** real customer stories / UGC beat polished creative; 4.8x installs, 4.5x trials. https://developers.meta.com/vr/discover/success-stories/fitxr (MEDIUM, Meta-published)

### Applied to V2_mascot (gets ~95% of spend)

What it is (from ads/ADS.md and the Meta preview): cartoon flower mascot over a foot-anatomy render, "I'm the reason your first steps feel so stiff", insoles vs "none of them train the muscles", "Free videos" vs Walkito split, primary text "First week free".
- Cartoon mascot + comparison format = entertainment/curiosity register. Cheap installs, broad audience. (WEAK, inference from Adapty framework)
- "Free videos" on screen and "First week free" in text plant the word *free* twice. It can attract people who want free exercises (YouTube) and then meet a hard paywall. (WEAK-MEDIUM, matches Adapty's price-sensitive type)
- Our own signal: 16 of 36 users tapped "Nothing hurts right now" on the pain map; only 1 of 49 picked "Easier mornings". Users who don't have the pain will not pay to fix it. (MEDIUM, our data, small n)
- Meta pushing 95% to one ad within 2 days is normal (Andromeda picks favorites fast) but means V1/I1/I2 were never really tested. (MEDIUM)

---

## 7. Creative fatigue

- Meta: seeing the same ad too often lowers engagement; you will see "Creative limited" or "Creative fatigue" in Delivery. Fix with new image/video. https://www.facebook.com/business/help/950694752295474 (STRONG)
- Segwise: fatigue recommendations are not available for app campaigns; refresh in batches 2-4x a month, only after learning ends, since each new ad is a significant edit. https://segwise.ai/blog/meta-advantage-plus-app-campaigns-guide (MEDIUM)
- At $50/day for 3 days, fatigue is **not** our problem yet. Not enough frequency. (WEAK, inference)

---

## 8. Budget level and learning phase

- Meta: ad sets exit learning "after about 50 results in the week after the ad set's last significant edit"; "Learning limited" when unlikely to hit ~50/week; edits during learning reset it; large budget jumps can reset it. https://www.facebook.com/business/help/112167992830700 , https://www.facebook.com/business/help/269269737396981 (STRONG)
- Samet Durgun: minimum 5 events/day, ideally 50+/week; $20-30/day is fine for creative tests; $150-200/day for conversion validation; iOS needs an extra day to normalize. https://adapty.io/blog/first-10k-meta-ads-subscription-apps (MEDIUM)
- Growth Therapist / Segwise rule of thumb: weekly budget = expected cost per event x 50. https://segwise.ai/blog/meta-advantage-plus-app-campaigns-guide (MEDIUM)

**Walkito math:** $50/day = $350/week. At $2.48 CPI = ~140 installs/week, so install campaigns do exit learning. If we optimized for trials: at a normal 7-15% install-to-trial and a higher CPI, a trial might cost $20-40, so $350/week buys ~9-18 trials. That is "learning limited" territory. To reach 50 trials/week we would need ~$1,000-2,000/week. That means a trial campaign at $50/day will work, but slowly and noisily. (WEAK-MEDIUM, our estimate from sourced thresholds)

---

## 9. Meta health and wellness restrictions on event sharing

- **Meta:** data sources (websites **and apps**) get a category. Health and wellness = "associated with medical conditions or specific health statuses... or health-related products and services (examples include... wellness tracker... condition-specific support group)". https://www.facebook.com/business/help/1402913027039332 (STRONG, official)
- Three restriction levels: **Core Setup** (no custom parameters or URL paths), **Restriction on certain standard events** ("specific mid and lower funnel events"), **Full restrictions** (all events, cannot be used for ads optimization). Custom events are blocked until you review and confirm them. You are told by email and in Events Manager. https://www.facebook.com/business/help/511197658391698 , https://www.facebook.com/business/help/124742407297678 (STRONG, official)
- Since January 2025, restricted advertisers can still use PageView, ViewContent, **App Install**, Search, Donate and confirmed custom events; Purchase, Complete Registration, Add to Cart etc. are blocked. https://www.bluestate.co/news/new-year-new-meta-data-sharing-challenges/ , https://martech.health/articles/meta%E2%80%99s-policy-change-what-healthcare-advertisers-need-to-know , https://searchengineland.com/meta-ads-restrictions-health-wellness-campaigns-453094 , https://www.triplewhale.com/blog/meta-health-and-wellness-brands (STRONG, several sources, mostly web)
- **Apps specifically (Coast Studio, Oct 2026):** restriction applies to app datasets too (Meta rep confirmed). In audited restricted app datasets, the blocked list mapped onto the app's **purchase, subscribe, start-trial and registration** events, while install, launch and content-view kept working. Meta publishes no app-event list and nothing on AEM/SKAN under a restriction. App category signals they suspect: App Store listing text, app name, SDK event names, linked domain. https://coast.studio/meta-health-wellness-restriction-apps (MEDIUM, small sample, clearly labeled as observation)
- **Adapty pLTV docs:** Meta requires the dataset to be **out of Core Setup** before predicted-LTV/value features work. https://adapty.io/docs/ua-facebook (MEDIUM)
- **Why it matters for Walkito:** "Heel Pain & Flat Feet", plantar fasciitis, pain-map screens = condition-specific. If Events Manager shows a Health and wellness category with event restrictions, StartTrial may *never* become optimizable no matter how we fix AEM, and install (or a confirmed, non-health custom event) is the ceiling. This could be the real reason "Start trial is not eligible". **Must check: Events Manager > Data source categories / dataset notices.** (MEDIUM)
- Do not try to rename events to dodge it: Coast Studio notes renaming, splitting datasets or switching SDK to server-side does not make a restricted event eligible. https://coast.studio/meta-health-wellness-restriction-apps (MEDIUM)

---

## 10. Benchmarks to judge our numbers

| Metric | Value | Source |
|---|---|---|
| H&F download-to-trial (D30), median | 6.9%; top performers > 23% | https://www.revenuecat.com/state-of-subscription-apps (STRONG) |
| H&F trial-to-paid, median | 37.7%; top quartile > 51.4% | same |
| Trials starting on install day (H&F) | 82.1% | https://sahha.ai/blog/health-app-monetization-first-month/ citing RevenueCat 2026 |
| Install-to-trial, North America (all categories) | 14.5% vs 7.6-10.2% other regions; global median 11.2% | https://adapty.io/blog/health-fitness-app-subscription-benchmarks (STRONG) |
| H&F weekly-sub funnel (Adapty) | 9.5% install-to-trial, 42.2% trial-to-paid | same |
| Hard paywall download-to-paid D35 (RC 2025) | 12.11% vs 2.18% freemium | https://www.rocketshiphq.com/revenuecat-state-of-subscription-apps-2025-summary (MEDIUM) |

Walkito Meta cohort: ~65 installs, 0-1 trials = 0-1.5%. Expected at the 6.9% median: ~4-5. At 14.5%: ~9. If traffic were normal at the 6.9% median, 0 of 65 would happen about 1% of the time and 1 or fewer about 6% of the time (binomial). So it is very likely real, but not yet proof. Something is off, but it can be traffic, paywall, or the purchase step. (MEDIUM)

One non-traffic check: **3 users tapped "Start free week" and 0 trials were recorded.** That points to the StoreKit sheet (cancelled, Apple ID/payment friction, or a bug), not to Meta. Verify in RevenueCat / App Store Connect before blaming traffic. (WEAK, inference)

---

## 11. Compliance flags (Apple / FTC / Meta health rules)

- **I1_receipt "$59.99 fixed it."** is a cure/fix claim. FTC needs competent and reliable scientific evidence for health claims, including implied ones. Meta also bans health clickbait with "exaggerated or extreme claims, or promises of specific outcomes". Change to non-outcome wording. https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance , https://www.facebook.com/business/help/2489235377779939 (STRONG)
- **"$1,240 on heel pain treatments" receipt and "Kayla" chat** read as testimonials. If Kayla and the receipt are not real customers with real experiences, that is a fake/implied testimonial risk under the FTC Endorsement Guides. Label as dramatization or use real users. https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking (STRONG)
- **Meta personal attributes policy:** ads must not assert or imply the viewer has a medical condition ("Your heel pain..."). Conditional "If your first steps..." is usually safer than "you have". https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes (STRONG)
- **Do not send health answers (pain map, conditions) to Meta as event parameters.** That is what Meta's restriction targets, and the FTC has acted against health apps for sharing health data with ad platforms (GoodRx 2023, BetterHelp 2023). https://www.ftc.gov/news-events/news/press-releases/2023/02/ftc-enforcement-action-bar-goodrx-sharing-consumers-sensitive-health-info-advertising , https://www.ftc.gov/legal-library/browse/rules/health-breach-notification-rule (STRONG)
- **Sending IP/IDFV for users who declined ATT** (to make events AEM-eligible) is a privacy/legal call: Apple says IDFV may not be combined to track across other companies' apps. https://developer.apple.com/app-store/user-privacy-and-data-use/ (MEDIUM, needs legal judgment)
- "Free" in ads: fine if true, but the 7-day trial must be clear and the $59.99/yr auto-renew disclosed in the app (Apple 3.1.2 + FTC negative option / ROSCA). The ad text already says "then $59.99 a year", good. (MEDIUM)

---

## TOP 5 findings for Walkito

1. **We are paying Meta to find installers, and it is doing exactly that.** Install optimization + Advantage+ (broad, all placements, age only hinted) buys the cheapest tappers. Every source agrees: install campaigns are for creative testing, not trials. Evidence: STRONG (Meta docs, Adapty, Airbridge, RevenueCat).
2. **"Start trial not eligible" may be a Meta health-category block, not just an AEM setup gap.** A heel-pain/plantar-fasciitis app fits Meta's "Health and wellness" category, which can block StartTrial/Subscribe for optimization on app datasets. Check Events Manager first; this decides whether trial optimization is even possible. Evidence: MEDIUM (Meta docs + Coast Studio app audits).
3. **The creative is selecting the wrong people.** Under Andromeda the ad is the targeting. V2_mascot (cartoon, "Free videos", insole comparison) took 95% of spend; 16 of 36 users said "Nothing hurts right now". Adapty's pattern for audience mismatch is "full onboarding, stall at paywall", which is our funnel. Evidence: MEDIUM.
4. **Our age setting does not do what we think.** With Advantage+ audience the hard minimum age is capped at 25, "35-65" is only a suggestion, and gender cannot be set. Core buyers (women 45-65) are on Facebook far more than Instagram (Pew: Instagram 40% of 50-64, 19% of 65+). Evidence: STRONG (Meta API docs, Pew); impact on our spend: unknown until we pull the breakdown.
5. **The sample is too small to blame only Meta, and there is a purchase-sheet leak.** 0-1 trials from ~65 installs is well below the 6.9-14.5% benchmark, but 3 "Start free week" taps produced 0 trials. That is a StoreKit/paywall issue to check in parallel. Evidence: STRONG for benchmarks, WEAK for the cause.

## The 3 things I would test first

1. **Diagnose the event route (1 day, $0).** In Events Manager: (a) check the dataset's data source category and any restriction notice, (b) run "Check app eligibility" and save the exact "More details" message for StartTrial, (c) confirm install and StartTrial come through the same integration and check RevenueCat's "Send events when ATT consent is not authorized" setting (privacy decision). Also pull Ads Manager breakdowns by age, gender and placement for Nov 9-11, and check RevenueCat/App Store Connect for the 3 "Start free week" taps.
2. **Swap the creative before touching budget.** Pause or cap V2_mascot. Run 3-5 problem/solution ads for the real buyer: a real 45-65 woman (or founder) on camera, morning-heel-pain or on-your-feet-all-day hook, show the app's 5-minute routine, no "free videos" framing, trial stated plainly. Force $5 minimum each, judge on **reached-price-screen rate and trials per install**, not CPI. No cure/fix claims; label dramatizations.
3. **Move the optimization event deeper as soon as one is allowed.** If StartTrial becomes eligible: a new iOS campaign optimized for StartTrial (later a "qualified trial" that survives N hours), same $50/day, expect CPI 3-5x higher and accept "learning limited" for the first week. If health restrictions block it: keep installs but run a manual-style test with a hard 35+ floor where possible and Facebook-heavy creative, and price out a small web-to-app funnel only after checking whether the website would also be health-restricted.
