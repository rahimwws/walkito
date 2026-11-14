# E - How Meta-driven subscription apps actually get trials and payers (and why Walkito got 0)

Agent E, Nov 13, 2026. Read only. No Meta Ad Library used. Labels: **[verified]** = I opened it or saw it myself; **[reported]** = someone said it (founder, agency, vendor); **[guess]** = my inference.

I read first: nov11 R2, C1-C5, CHECKER, B5, D2; nov8 SUMMARY; nov7 health-label SUMMARY. Everything already in those files (install vs trial basics, 50 events/week, AEM eligibility steps, Adapty $20.28 per trial, Faithful's 4 events, Burke on age, Dipsea web test, FunnelFox State of Web2App, Prehab, Meta health tiers, BetterHelp/GoodRx) is **not repeated** here. This file only adds what is new, plus a fresh judgement using the Nov 13 facts (83% of Meta installs were 55+, 75% women, 93% Facebook).

Agent H is doing the full web-quiz teardowns (heelpaintrainer.com, BetterMe chair yoga, Lasta). I walked the competitor quiz only far enough to confirm its offer and tracking (section 2.3).

---

## 1. Bottom line

- **The installs goal can, on its own, statistically produce 0 trials from ~70 installs, but it is not the whole story.** For install-optimized traffic, real cases sit at 0-6% install-to-trial (0/40, 0/20-30, 3/49, 1.45% average for "other paid"). At 1.45%, seeing 0 in 64 happens ~39% of the time; at 3%, ~14%. So "installs goal alone" is a plausible explanation. But the funnel shape (about 60% left on paywall page 1, 4 of 4 buy taps closed Apple's sheet) points at app and offer problems too. My split: Meta setup ~35%, app flow ~30%, audience/offer ~35% of the blame. **[guess, from verified math]**
- **New fact changes the diagnosis: Meta did NOT buy cheap young users.** It bought 55+ women on Facebook, the age group consultants call the best payers once they start a trial. The problem is a different one: older Facebook users click and install very easily (Adapty Q3 2026: 55+ cost 4x more per impression but click 3-4x more), and many of them buy on the web like shoppers, not inside apps. Rise Science, an alarm-app founder and the App Masters host all report the same pattern. **[reported, several sources]**
- **The "plans_viewed custom event as Meta goal" plan from Nov 11 has a new problem.** Meta's AEM page (checked today) says AEM "isn't currently supported for custom event optimisation". Use a standard event (ViewContent / `fb_mobile_content_view` on the price screen) instead, if any event is allowed at all. **[verified]**
- **Small apps that made trial goals work on Meta mostly did it off iOS:** on Android (FaithFull: tested all creatives on Android for ~8 months, moved only winners to one iOS campaign; Food is Good: Android trials $18.62-29.96 vs iOS $115-147 for the same ads), or on the web (Built With Science sends 90% of Meta traffic to a web quiz; Simply 20% of revenue from web; Rise Science). **[reported]**
- **Web-to-app is now the default for selling to 40-65 year olds on Facebook,** and the money there comes from paid intro offers, not free trials. Walkito's direct competitor (Plantar Fasciitis Trainer) has already copied this: web quiz -> email -> "$4.99 for your first month, then $9.99/month", no free trial, Apple Pay, Meta pixel + CAPI. **[verified, I reached its price page]**
- **Apple rules (US) as of Nov 13, 2026:** linking out to web checkout is allowed and costs 0% today. Apple has asked for 15% (5% for Small Business members). Supreme Court argument is Jan 11, 2027, decision by ~June 2027. IAP must stay available in the app. **[reported, multiple dated sources]**
- **Health restriction is the hard ceiling.** Walkito's diagnostic already read "full_blocking_app_actions" (Nov 7 file). If that lands, no app event (maybe not even installs) can be optimized, and a heel-pain web domain will likely be categorized the same way. Health brands that keep growing do it with creative-as-targeting, upper-funnel objectives, Android, Apple Search Ads and neutral web funnels, and they judge results in their own data, not Meta's. **[verified Meta docs + reported]**
- **Creative that brings trial starters is specific and human:** a named moment ("my doctor told me to go low FODMAP" = $28 per trial vs "save time checking labels" = $121, same app), the brand's own staff talking to camera (~50% of trials at Food is Good), Facebook Feed over Instagram, Audience Network cut. **[reported, one agency case with numbers]**

---

## 2. What they do (new evidence only)

### 2.1 Installs goal vs trial goal: what really happens (Q1)

| Case | Setup | Result | Source / date | Label |
|---|---|---|---|---|
| Adapty Q3 2026 benchmarks (5K apps, Jul-Sep 2026) | Cost per **paying user** by optimization event | Subscribe $42.77, Start Trial $57.32, Purchase $82.23. D7 ROAS 75% / 45% / 34%. **US ranks 26th of 27 countries on D7 ROAS (33%).** 5% of ads take 81% of spend. 55+ costs 4x more to reach than 18-24 but clicks 3-4x more, so CPC stays $0.44-0.67 in every age band | https://adapty.io/meta-ads-benchmarks (checked Nov 13, 2026) | [verified page text] |
| Steve P. Young (App Masters host), own app | Meta optimized for installs and start-trial, sent to App Store | "Hasn't worked; competitors use web-to-app instead." Now considering web2app. (His older 65+ fitness app case is in C4.) | https://gtmsauce.com/episodes/2026-10-17-the-secrets-to-web2app-growth-and-the-risks-nobody-talks (Oct 17, 2026) | [reported] |
| App Masters rule of thumb | Before any Meta spend | Wait until 5-10% of installs start a trial (10%+ with hard paywall), 30%+ trial-to-paid, 2%+ install-to-paid | https://gtmsauce.com/episodes/2026-10-20-before-you-spend-1-on-meta-ads-watch-this (Oct 20, 2026) | [reported, agency opinion] |
| Food is Good (diet scanner, condition-specific: celiac, low FODMAP) | Audit: 2/3 of spend on trial-optimized, 1/4 on landing-page-view optimized | Trial campaigns: <2% of trials paid. Landing-page-view campaigns "cheap and almost never turned into customers". Advantage+ paid ~50x more per acquisition than diet-specific audiences | https://ouigrowth.com/case-studies/food-is-good-app-ads (Oct 4, 2026) | [reported, agency] |
| Ground News | Chose app **opens** over installs | "Apps routinely lose 40 to 50% of people between install and first open. Optimize for installs and you train the platform to find people who download and ghost." Install-to-sub ~2% Android, ~4% iOS | https://ouigrowth.com/case-studies/ground-news-app-install-ads (Oct 4, 2026) | [reported] |
| Shot Pattern (golf app) - **counterexample** | Installs goal, ~$300/day, 3+ videos, trial events not wired | $1.57 CPI, ~$4 back per $1 | https://gtmsauce.com/tactics/shot-pattern-run-meta-install-ads-with-at-least-three-videos-and-about-300-a-day (Oct 24, 2026) | [reported] |
| r/SideProject alarm app ($29.99/yr, 7-day trial) | Meta to a web paywall; Meta drifted to 60+ at ~$100 CPM | Web paywall "completely flopped"; same ads selling a $37 PDF were ROAS ~1; 60+ bought the PDF, not the app | https://www.reddit.com/r/SideProject/comments/1whwfsi/ (~Oct 2026) | [reported, one founder] |
| Rise Science (sleep app) | Web vs app campaigns | Web funnels reach "40, 50, 60-year-old people at scale" who are "not the type of users that are going to instinctively download an app", "lower intent to start, but often high willingness to pay", lean to Facebook blue app | https://subclub.com/episode/why-web-onboarding-should-sell-the-problem-instead-of-the-solution-leon-sasson-rise-science (Mar 5, 2026, transcript read) | [reported, verified quote] |

**Statistics for Walkito (my math, binomial, independent users):**

| Question | Assumed rate | Chance of what we saw |
|---|---|---|
| 0 trials from 64 real Meta installs | 1.45% (Adapty, other paid, all goals) | 39% |
| same | 3% (mid of install-goal cases above) | 14% |
| same | 6.9% (RevenueCat H&F median, all sources) | 1% |
| 0 completions from 4 buy taps | 50% (Superwall average) | 6% |
| same | 30% (if cold install-goal traffic completes worse) | 24% |
| ~15 of 25 leaving on paywall page 1 | 25% normal (Paywall Index) | under 0.1% |

**Judgement on "does the installs goal alone explain ~0 trials from ~70 installs?"** [guess, reasoned]
- Could it alone produce 0? **Yes, plausibly (about 15-40% likely)** if you compare with other install-optimized apps.
- Is it the only cause? **Probably not (I put ~70-75% on "other causes mattered too").** The page-1 exit rate (~60% vs ~25% normal) is far outside what traffic quality alone usually does, and it happened on a screen with no "Not now" button. That is an app problem, fixed in 1.0.13 but untested.
- Would a trial goal have saved it? **Not possible to test on iOS now** (Start trial ineligible, health flag pending). At best a trial goal would have turned 0 into maybe 1-4 trials on this budget, still "learning limited". [guess]

### 2.2 How small apps got trial goals working (Q2)

| Who | How | Numbers | Source | Label |
|---|---|---|---|---|
| FaithFull (Christian calorie tracker, $59.99/yr no trial) | All creative testing on **Android** (events arrive at once). Winners run in one long-lived Android scaling campaign. Only lasting winners go into **one iOS SKAN campaign**, because testing on iOS "would need ~$1,000/day". $50-100/day, later $150 | First working iOS campaign after ~8 months: ~90% day-one ROAS, 100+ installs and ~10 purchases a day | https://gtmsauce.com/tactics/faithfull-test-meta-ads-on-android-first-move-only-lasting-winners-to-iphone (May 9, 2026) | [reported] |
| Food is Good | Android trial-optimized ad sets per diet, quiz funnels between ad and app | Trials $18.62 (low FODMAP), $23.82 (gluten-free), $24.94 (anti-inflammatory, 455 trials). Same approach on iOS $115.77-146.82 (~5x, "optimizing half-blind") | ouigrowth.com (above) | [reported] |
| Joinable (AI calorie counter) | Could not afford iOS; ran Android Meta in US; Android converted "just as good" and spilled over to iOS | ~80% of users and revenue on Android, ~$125K revenue in 28 days | https://www.starterstory.com/stories/i-built-a-100k-month-android-app (Mar 26, 2026) | [reported] |
| Prayerlock (prayer phone blocker) | After onboarding rebuild, Meta $20/day **optimizing for trials** | ~$10 per trial; TikTok broad US with reaction UGC later ~$4 per trial on ~$50/yr plan | https://gtmsauce.com/episodes/2026-01-18-i-grew-my-mobile-app-to-20k-month-here-s-my-entire-playbook (Jan 18, 2026) | [reported] |
| FitApp (Hustle Marketers) | Web funnel: separate campaigns for "Website Start Trial" and "Website Purchase"; manual beat Advantage+ at their scale | 409 web trials Jan-May 2026; best campaign 377 trials at $23.44 (from ~5x higher before rebuild) | https://hustlemarketers.com/case-study/fitapp-fitness-app-meta-ads-case-study/ (May 26, 2026) | [reported, agency] |
| Tiimo (via Replug) | Turned on Meta web-to-app attribution + SKAN 4 via AppsFlyer | "Up to 360%" lower CPA claim (vendor wording) | https://www.rplg.io/success-stories-from-gaps-to-growth-scaling-ua-with-data-clarity | [reported, vendor, weak] |
| Mercari (AppsFlyer) | Implemented Meta AEM through the MMP | ~40-50% of iOS conversions were unrecorded before; attributed iOS installs +167%; iOS CPA ~-50% | https://www.appsflyer.com/customers/mercari (Sep 17, 2026) | [reported, vendor] |

New Meta facts that matter here:
- **AEM and custom events:** "Aggregated Event Measurement is currently available for ... sales campaigns ..., lead campaigns and engagement campaigns [with an app destination]. **It isn't currently supported for custom event optimisation.**" Same page: AEM now covers app promotion campaigns without SKAN setup, with 7-day click and near real-time reporting. https://www.facebook.com/business/help/721422165168355 (opened in browser, Nov 13, 2026). This was "NOT FOUND" in the Nov 8 spot-check (#16); it is there under the "app events" section. **[verified]** Impact: the Nov 11 plan to optimize for a custom `plans_viewed` on iOS is likely blocked. Map the price screen to a **standard** event instead.
- **Value rules** (successor to bid multipliers, required by 2027): you can raise bids for an age band by up to 1,000% or lower by 90%, and lower a placement by up to 50%. They work with "Maximize number of conversions / value" goals. https://www.facebook.com/business/help/535014515741813 , https://www.facebook.com/business/help/1035626911721747 (both opened Nov 13, 2026). **[verified]** For Walkito this is a later tool: it could cut Audience Network or Reels without leaving Advantage+, but it needs a conversion goal, not installs. Whether it works inside an iOS Advantage+ app campaign I could not confirm. **[guess]**
- **iOS 14+ campaigns:** still "Manual setup is not supported; only Advantage+ setup is available", one ad set per Advantage+ app campaign, 24 campaigns per app (UK page says 18). https://www.facebook.com/business/help/651033805513936 **[verified via search snippet]**

### 2.3 Web-to-app (Q3)

**Who does it and how big (new numbers):**

| App | What | Numbers | Source | Label |
|---|---|---|---|---|
| Built With Science (fitness) | ~90% of Meta traffic to a long web quiz; tested head-to-head vs App Store | Quiz "much higher conversion"; Meta 0 -> ~$100K/month profitable; plan choice 60/40 -> 75-80% annual after a day-by-day trial timeline | https://www.revenuecat.com/blog/growth/ethan-ethier-build-with-science-sub-club-podcast-2026 (Sep 2, 2026) | [reported] |
| Simply (music learning) | Web campaigns next to app campaigns | ~20% of revenue from web | https://subclub.com/episode/how-simply-finally-cracked-facebook-ads-with-web-funnels-yoav-sharon-simply (Jun 24, 2026) | [reported] |
| Rise Science | 3rd attempt worked after 2 years; web funnel sells the **problem**, not the solution; **discounted paid first month beats free trial** because free trials bring instant cancellers that "pollute" Meta's signal | no hard numbers | Sub Club, Mar 5, 2026 (transcript read) | [reported] |
| Liven (wellbeing) | 26-42 question quiz, **no free trial**, intro "$19.99 first 4 weeks then $39.99" | Est. $8-10M/month revenue (Clarflow), 91% of paid-social clicks from Facebook (2024 SimilarWeb read) | https://www.clarflow.com/funnel-teardowns/theliven , https://admiral.media/web-to-app-funnels-2026 , https://blog.funneloftheweek.com/p/fb-ad-creative-fatigue-angle-iteration-strategy-liven-app-uses-completely-defeat | [reported, estimates] |
| Lasta (weight loss, women 40+) | Web funnel bought on NewsBreak for 40+ | CPA $60-65, CPC $1, CPM $14, CVR 1.85% | https://point2web.com/case-studies/lasta | [reported, agency] |
| Mimika (face yoga, women 40+) | App + web, "more than two million women" | Revenue estimates conflict ($1K-8K/month in public trackers, clearly undercounting web), so no usable number | https://amma.family/press/amma-partners-with-mimika (Oct 1, 2026), https://adapty.io/paywall-library/mimika-face-yoga-exercise/ | [reported, weak] |
| BetterMe | Web-first, sends users to app after payment | ~$1M/month app-store revenue estimate (web not counted) | https://thegrowthhackinglab.com/case-studies/how-betterme-hits-1m-monthly-revenue-inside-the-ad-machine-behind-a-fitness-app/ (Apr 5, 2026) | [reported, estimate] |
| Market | Web-to-app ad volume +77% in 2025, +46% Jan-Jun 2026; scaled web apps take ~90% of revenue on web | | https://www.businessofapps.com/insights/web-to-app-ad-volume-rose-46-in-the-first-half-of-2026-as-us-app-store-sales-fell (Oct 19, 2026) | [reported, vendor data] |
| **Failures** | Alarm app web paywall "flopped" at $1,276 (above); Rise failed twice before it worked; Adam Lyttle found a 3-screen funnel beat a 30-step quiz for his app | | Reddit (above); https://www.wisdomai.com/insights/adamlyttleapps/web-to-app-app-funnel-mobile-conversion-44c8f59d (May 27, 2026) | [reported] |

**Competitor check: Plantar Fasciitis Trainer web funnel (walked Nov 13, 2026, fake answers, reserved test email, stopped before payment)** [verified]
- Age first (55-64 preselected), then gender, then a calm welcome ("Simple foot exercises for easier walking, done at home ... You can start from a chair. Based on the 2023 physical therapy guideline"). Screens: `evidence/E-hpt-quiz-01-age.jpg`, `E-hpt-quiz-02-welcome.jpg`.
- About 18 question/info screens: which foot, what it feels like, how bad, how long, "Has a doctor told you what's causing it?" (offers "Yes, plantar fasciitis"), what you tried, why now, days per week, routine length; two "people like you" story screens (Patricia 68, Susan 58, David 70) and study citations with "They did not test this app".
- Plan page with a pain-over-time chart, then **email gate** ("Save your plan"), then price page: `E-hpt-quiz-03-plan.jpg`, `E-hpt-quiz-04-email-gate.jpg`, `E-hpt-quiz-05-paywall-top.jpg`.
- **Offer: no free trial.** 1-week $2.99 then $9.99/month; **1-month $4.99 then $9.99/month (preselected, "BEST VALUE")**; 3-month $19.99 then $39.99 every 3 months. Renewal date written in plain words. Apple Pay, Google Pay, cards. "Cancel anytime online" with a 3-step cancel explanation. `E-hpt-quiz-06-price-block.jpg`.
- Tracking: Meta pixel (`fbevents.js`) + Meta CAPI parameter builder + Google Tag Manager load on the price page.
- Notes: it asks diagnosis-level health questions on a page with a Meta pixel. That is exactly what Meta's health category and the FTC watch. Walkito should not copy the health questions into anything tracked. Also "$0.17 a day" is shown for a plan that renews at $9.99/month (that is about $0.33/day after month 1), a small price-framing stretch not to copy.

**Why web converts Meta traffic better (sources above, synthesized):**
1. Meta sees every step (no ATT/SKAN), so it learns in days instead of weeks. (Rise) [reported]
2. Payment happens before the install, so the people who would quit at the App Store page or the paywall never cost an install. [reported]
3. It reaches older, e-commerce-minded buyers who "would not instinctively download an app". (Rise) [reported]
4. Price testing is free and instant (intro prices, money-back, paid trials), no App Review. [reported]
5. Paid intro offers send a cleaner "buyer" signal than free trials. (Rise) [reported]

**Costs and risks (new):** Web2Wave entry plan $200/month; chargebacks above ~1.5% put a merchant in trouble; App Masters clients were contacted by Apple above ~6% refunds; email win-back adds ~5-10% revenue; some funnels hide upsell prices (60-70% "take" because users don't realise they paid, do not copy). https://gtmsauce.com/episodes/2026-10-17-the-secrets-to-web2app-growth-and-the-risks-nobody-talks [reported]

**Apple US rules after Epic (status Nov 13, 2026):**
- US storefront: buttons and links to web purchase allowed since May 1, 2025, no entitlement, **0% commission today**. [reported, consistent across sources]
- Ninth Circuit (Dec 11, 2025): Apple may charge a cost-based fee once the district court sets one; may require link buttons not to be more prominent than its own. https://cdn.ca9.uscourts.gov/datastore/opinions/2025/12/11/25-2935.pdf [verified snippet]
- Aug 13, 2026: Apple proposed 15% on link-out purchases, 10% renewals, **5% for Small Business members**. Not set yet. https://www.forasoft.com/blog/article/how-to-avoid-apple-pay-commission-204 (Nov 8, 2026) [reported]
- Supreme Court: cert granted Jun 30, 2026, argument **Jan 11, 2027**; Epic filed its brief Nov 13, 2026. https://www.scotusblog.com/cases/apple-inc-v-epic-games-inc-2 , https://9to5mac.com/2026/11/13/epic-formally-asks-scotus-to-uphold-contempt-ruling-against-apple/ [reported]
- Keep IAP in the app; open checkout in Safari, not a webview. https://devoria.fr/en/blog/ios-external-payment-link-apple-rules (Nov 4, 2026), Stripe guide [reported]
- Ad -> web quiz -> pay -> download (no link inside the app) never needed the Epic ruling. [reported, already in R6]

### 2.4 Creative: trial starters vs cheap installers (Q4)

| Finding | Numbers | Source | Label |
|---|---|---|---|
| Specific "moment" message beats generic benefit | "My doctor told me to go low FODMAP" $28.10 per trial; named worry ~$28; "If you're gluten-free, you need this app" ~$30; "Stop wasting time checking for gluten" **$121.63** | Food is Good case | [reported] |
| Brand's own person on camera | ~50% of first-month trials came from videos fronted by FIG's growth lead; a creator's grocery-haul video 160 trials at $33.13, same creator in another store >2x the cost | same | [reported] |
| Placement | Facebook $41.42 vs Instagram $48.34 per trial; Threads $106 and Audience Network $122 per trial, cut | same | [reported] |
| Offer in the creative | In 5 of 7 app/service accounts, more than half of top spend had an offer (free trial, first-order discount, monthly price) on the creative; 17 of 17 accounts scaled problem-solution ads; "features / how it works" most efficient themes | https://www.biddyco.com/blog-posts/best-performing-meta-ads (Sep 27, 2026; 483 creatives, $5.1M) | [reported, agency data, not app-only] |
| Price/terms in ad pre-qualify | "People who tap after seeing the terms aren't surprised at the paywall"; showing the paywall in the ad is worth testing; judge on cost per conversion, not installs | https://www.rocketshiphq.com/creative-for-subscription-apps-vertical/ (Mar 27, 2026) | [reported, opinion] |
| Pricing visibility filters (B2B SaaS, transfer is weak) | Showing price cut trial volume 20-40% and raised trial-to-paid 40-70% | https://www.capconvert.com/learn/blog/ppc-for-saas-free-trials-lowering-cac-while-filtering-out-low-intent-sign-ups | [reported, other category] |
| Creative that flops for app campaigns can win on web, and vice versa | - | Rise Science, Sub Club | [reported] |
| Tutorials / app reviews vs testimonials (social apps) | 45% higher installs per 1,000 impressions, 17% better D7 retention | AppsFlyer 2025 report via https://www.revenuecat.com/blog/growth/ugc-ads-apps | [reported] |
| Older audience on Facebook drives price of reach up but clicks a lot | 55+ CPM ~4x 18-24, CTR 3-4x | Adapty Q3 2026 | [verified page] |

### 2.5 Health and wellness restrictions 2025-2026 and how health apps still optimize (Q5)

New since the Nov 7-11 files:
- **Meta Business Tools Terms (effective Nov 3, 2025):** advertisers agree not to send health info through pixel, CAPI or SDK. **Custom conversions** that suggest a condition ("arthritis", "diabetes") are flagged since Sep 2, 2025 and can't be used in new campaigns. https://www.thimblehub.com/resources/meta-ads-telehealth-conversions-api (Oct 12, 2026), https://www.facebook.com/business/help/2455915321411996 [reported / verified snippet]
- **Coast Studio update (Oct 27, 2026):** in the app datasets they saw, install-optimized campaigns kept their signal under the middle level; Meta has published nothing for apps under full restriction. [reported]
- **What still works for restricted health brands (2026 agency guides):** Reach, video views, engagement, link clicks and landing-page views are unaffected; losses are in purchase/lead optimization and value bidding. Meta's own advice: upper-funnel events, and under full restriction objectives that do not use your data. https://tessichealth.com/insights/meta-health-data-restrictions-telehealth-ads (Sep 28, 2026), https://www.cbidigital.com/insights/how-meta-health-data-limits-affect-mobile-iv-ads (Nov 12, 2026) [reported]
- **What health apps actually do (pattern):** (1) let the creative do the targeting (specific moment, specific person); (2) optimize for the deepest event still allowed; (3) measure payers in their own tools (RevenueCat, App Store Connect, MMP), not Meta; (4) shift spend to channels without the restriction: Apple Search Ads, Android, TikTok; (5) a web funnel with neutral URLs and events, but a heel-pain domain is likely to get the same category. Food is Good (celiac/low FODMAP) still bought trials on Meta at $18-30 on Android, which shows condition-specific apps can still get trial optimization when the dataset is not fully blocked. [reported + guess]

---

## 3. What Walkito does differently (screen by screen, Meta user path)

| Step | What winning Meta-first apps do | What Walkito did (1.0.11-1.0.12) | Gap |
|---|---|---|---|
| Ad | Specific moment, real person, offer or price in the creative, Facebook Feed | Cartoon mascot, "free videos vs Walkito", "First week free" (95% of spend on one ad) | Promise of "free" + curiosity format; no real person; price not pre-qualified |
| Destination | 40-65 audience: web quiz -> paid intro offer (competitor, Liven, BetterMe, Lasta, BWS) | App Store page -> install | The audience Meta found (55+ FB women) is the "web shopper" type, sent to an app-install path |
| Meta goal | Trial or purchase (Android/web), or Subscribe | Installs; Start trial not eligible; health flag pending | Meta learned "who installs", nothing about who pays |
| Onboarding | Sell the problem, personalize | 3-10 min onboarding, almost all finished | Fine. Finishing onboarding is not the bottleneck |
| Paywall page 1 | Exit visible, no price shock; ~25% leave here normally | "Try Walkito free for 7 days", only "Try it free", **no "Not now"** -> ~15 of 25 closed the app | Fixed in 1.0.13 (Not now + price line), untested |
| Page 2 | Reminder screen | First time $59.99 shown; 2 left | Price appears late after a "free" promise |
| Page 3 | Plan choice, clear billed price | 4 left; 4 tapped buy | - |
| Apple sheet | ~50-70% of taps complete | **0 of 4** completed | Intent and price shock, possibly sheet friction for older users [guess] |
| After a "no" | Abandon offer once, or paid intro on web | Nothing (1.0.13 adds "What stopped you?") | Now measured in 1.0.13 |
| Offer | Web: paid intro ($2.99-$19.99 today), monthly plans, no free trial | Free trial on $59.99/yr; monthly $14.99 no trial | Competitor asks for $4.99 today; Walkito asks for a $59.99/yr commitment through Apple's sheet |

---

## 4. What Walkito should copy / test (ranked)

| # | Action | Bucket | Expected effect | Effort | Evidence |
|---|---|---|---|---|---|
| 1 | **Restart Meta only on 1.0.13, small ($20-30/day), new creative, stop rule.** Measure page-1 exit, plans reached, buy taps, sheet completion, "What stopped you?" answers. Stop at ~30 paywall views with 0 trials | App + Meta | Tells us within ~1 week whether the app fixes moved anything | Low | CHECKER math; my stats above |
| 2 | **Replace the mascot ad with 3-5 "specific moment, real person" ads**: Rahim or a consenting real user on camera, seated foot routine, "first steps out of bed" / "on your feet all day"; state "7 days free, then $59.99/year" in the primary text; Facebook Feed first; drop "free videos" framing | Audience/offer | Fewer, better installs; FIG saw 4x cost difference from message alone | Low-medium | Food is Good, Biddyco, RocketShip |
| 3 | **Fix the Meta event plan:** send paywall/price screen as **standard ViewContent** (not custom `plans_viewed`, AEM does not support custom event optimisation); InitiateCheckout on buy tap; check eligibility and the health category in Events Manager; never send pain answers | Meta setup | Only path to a deeper goal on iOS, if not fully blocked | Low | Meta AEM page [verified] |
| 4 | **Apple Search Ads $20/day in parallel** as the paywall control group | Meta setup / diagnostic | If searchers also give 0 trials at ~30 paywall views, the paywall/offer is the problem | Low | CHECKER #10 |
| 5 | **Web-to-app pilot (Rahim-owned, legal check first):** short quiz (8-15 screens, problem-first, no diagnosis questions tracked), RevenueCat Web Billing, **paid intro offer** (e.g. first month $4.99-9.99 then monthly, or yearly with money-back) instead of a free trial; neutral domain/URLs; pixel/CAPI events only PageView, ViewContent, Purchase with value; Safari checkout; IAP stays in app | Audience/offer + Meta | Matches how the 55+ Facebook audience buys and gives Meta a clean signal, if the domain is not health-restricted | Medium-high (5-8 days build) | Rise, BWS, competitor, R6 |
| 6 | **If an Android build exists, test creatives on Android first** (trial goal works there), move only winners to iOS | Meta setup | Cheaper learning; FIG Android trials ~5x cheaper than iOS | Medium | FaithFull, FIG, Joinable |
| 7 | **Later: value rules** to push 45-65 and cut Audience Network/Reels once a conversion goal is live | Meta setup | Steers spend without leaving Advantage+ | Low | Meta value rules [verified] |

Do NOT copy: diagnosis questions on a pixel-tracked page, "$0.17 a day" framing that does not match the renewal, hidden upsell prices, fake reference prices, countdowns. F-1 note: Rahman must not run Stripe/web billing or be the payments representative; Rahim owns any web checkout.

---

## 5. The 5 most likely reasons Walkito Meta users do not start trials (ranked)

| Rank | Reason | Bucket | Confidence | Label |
|---|---|---|---|---|
| 1 | **Paywall page 1 trapped people** (no "Not now" on 1.0.11-1.0.12): ~60% closed the app there vs ~25% normal. Many never saw a price or the free Day 1 | **App** | High that it cost trials; fixed in 1.0.13 but unproven | [verified from our funnel data] |
| 2 | **Install goal + Advantage+ bought the easiest installers in the 55+ Facebook pool.** Older Facebook users click and install readily (3-4x CTR) but mostly buy as web shoppers, not app subscribers | **Meta setup** | Medium-high | [reported, several sources + our audience split] |
| 3 | **Ad promise vs offer mismatch:** "free videos" and "First week free" brought people expecting free; the first real price ($59.99/yr) appears on page 2-3 and at Apple's sheet; 4 of 4 buyers backed out | **Audience/offer** | Medium-high | [our data + reported pattern] |
| 4 | **Wrong path for this audience:** 55+ women on Facebook are sold to via web quiz + small paid intro offer by everyone winning in this space, including the direct competitor since Nov 11; Walkito asks them for an App Store install plus a yearly auto-renew commitment | **Audience/offer** | Medium | [reported + verified competitor] |
| 5 | **Meta cannot learn who pays:** Start trial ineligible, only ~27% ATT, custom events not supported under AEM, health category likely heading to full block. Even with perfect creative, the algorithm optimizes blind | **Meta setup** | High that it limits scale; medium that it caused the 0 | [verified docs + reported] |

Also possible, lower: Apple sheet friction for older users (Face ID / side-button confirm / Apple ID password) [guess]; tiny sample (64 installs) [verified math].

### What to do, in order

1. **This week (no build):** Rahim checks Events Manager (dataset category, restriction notice, eligibility for ViewContent / InitiateCheckout / StartTrial). Pull Ads Manager age x placement breakdown. Start Apple Search Ads $20/day. (Meta setup)
2. **Next 7 days:** restart Meta at $20-30/day on 1.0.13 only, with 3-5 new real-person "specific moment" ads that state the price in the text. Judge on page-1 exit, buy taps per plans view, sheet completion, "What stopped you?" answers. Stop rule: 0 trials at ~30 paywall views = stop and fix. (App + audience/offer)
3. **Map events to standard names** (ViewContent on the price screen, InitiateCheckout on buy tap) and switch to the deepest eligible event in a new campaign once it shows ~50/week. (Meta setup)
4. **If 1.0.13 still gives ~0 trials from Meta but Apple Search Ads users do start trials:** the issue is traffic/offer fit, so build the web pilot (Rahim-owned): short problem-first quiz, paid intro offer, neutral domain, RevenueCat Web Billing. Run 20-30% of Meta budget there for 2 weeks; judge on cost per payer. (Audience/offer)
5. **If Search Ads users also give 0 trials:** the paywall/price is the problem; test the no-trial monthly as default and a lower yearly before spending more on any channel. (App)
6. **If an Android build exists:** move creative testing there. (Meta setup)

---

## 6. Sources (all checked Nov 13, 2026 unless noted)

| URL | Date | What | Label |
|---|---|---|---|
| https://adapty.io/meta-ads-benchmarks | Q3 2026 | Cost per payer by event, US D7 ROAS rank, 55+ CPM/CTR, 81% spend | verified page |
| https://www.facebook.com/business/help/721422165168355 | live | AEM not supported for custom event optimisation; AEM covers app promotion | verified (browser) |
| https://www.facebook.com/business/help/535014515741813 | live | Value rules: ranges, criteria | verified (browser) |
| https://www.facebook.com/business/help/1035626911721747 | live | Value rules need conversion goals | verified (browser) |
| https://www.facebook.com/business/help/651033805513936 | live | iOS 14+ campaign limits | verified snippet |
| https://www.heelpaintrainer.com/quiz (to /quiz/plan/offer) | Nov 13, 2026 | Competitor funnel, prices, pixel/CAPI | verified (walked) |
| https://ouigrowth.com/case-studies/food-is-good-app-ads | Oct 4, 2026 | Android vs iOS trial cost, message and placement costs | reported |
| https://ouigrowth.com/case-studies/ground-news-app-install-ads | Oct 4, 2026 | Opens vs installs | reported |
| https://gtmsauce.com/tactics/faithfull-test-meta-ads-on-android-first-move-only-lasting-winners-to-iphone | May 9, 2026 | Android-first testing, iOS SKAN | reported |
| https://www.starterstory.com/stories/i-built-a-100k-month-android-app | Mar 26, 2026 | Joinable Android 80% | reported |
| https://gtmsauce.com/episodes/2026-01-18-i-grew-my-mobile-app-to-20k-month-here-s-my-entire-playbook | Jan 18, 2026 | Prayerlock $10 per trial at $20/day | reported |
| https://gtmsauce.com/tactics/shot-pattern-run-meta-install-ads-with-at-least-three-videos-and-about-300-a-day | Oct 24, 2026 | Install goal counterexample | reported |
| https://gtmsauce.com/episodes/2026-10-17-the-secrets-to-web2app-growth-and-the-risks-nobody-talks | Oct 17, 2026 | Steve P. Young install/trial to store failed; web2app risks | reported |
| https://gtmsauce.com/episodes/2026-10-20-before-you-spend-1-on-meta-ads-watch-this | Oct 20, 2026 | 5-10% install-to-trial before Meta | reported |
| https://subclub.com/episode/why-web-onboarding-should-sell-the-problem-instead-of-the-solution-leon-sasson-rise-science | Mar 5, 2026 | Web reaches 40-60, paid trial > free trial | verified transcript |
| https://www.revenuecat.com/blog/growth/ethan-ethier-build-with-science-sub-club-podcast-2026 | Sep 2, 2026 | 90% to web quiz | reported |
| https://subclub.com/episode/how-simply-finally-cracked-facebook-ads-with-web-funnels-yoav-sharon-simply | Jun 24, 2026 | Simply 20% web revenue | reported |
| https://hustlemarketers.com/case-study/fitapp-fitness-app-meta-ads-case-study/ | May 26, 2026 | Web start trial $23.44 | reported |
| https://www.reddit.com/r/SideProject/comments/1whwfsi/ | ~Oct 2026 | Web paywall flop, 60+ bought PDF not app | reported |
| https://point2web.com/case-studies/lasta | n.d. | Lasta 40+ CPA $60-65 | reported |
| https://www.clarflow.com/funnel-teardowns/theliven | Apr 2026 | Liven revenue estimate | reported |
| https://admiral.media/web-to-app-funnels-2026 | Oct 14, 2026 | Liven/Unimeal intro prices | reported |
| https://blog.funneloftheweek.com/p/fb-ad-creative-fatigue-angle-iteration-strategy-liven-app-uses-completely-defeat | Aug 20, 2024 | Liven 91% Facebook | reported |
| https://thegrowthhackinglab.com/case-studies/how-betterme-hits-1m-monthly-revenue-inside-the-ad-machine-behind-a-fitness-app/ | Apr 5, 2026 | BetterMe web-first | reported |
| https://www.businessofapps.com/insights/web-to-app-ad-volume-rose-46-in-the-first-half-of-2026-as-us-app-store-sales-fell | Oct 19, 2026 | Web2app growth, 90% web revenue | reported |
| https://amma.family/press/amma-partners-with-mimika | Oct 1, 2026 | Mimika 2M women 40+ | reported |
| https://www.wisdomai.com/insights/adamlyttleapps/web-to-app-app-funnel-mobile-conversion-44c8f59d | May 27, 2026 | 3-screen funnel beat 30-step | reported |
| https://www.appsflyer.com/customers/mercari | Sep 17, 2026 | AEM via MMP, iOS CPA -50% | reported (vendor) |
| https://www.rplg.io/success-stories-from-gaps-to-growth-scaling-ua-with-data-clarity | n.d. | Tiimo web2app attribution | reported (vendor, weak) |
| https://www.biddyco.com/blog-posts/best-performing-meta-ads | Sep 27, 2026 | Offers in app creatives, problem-solution | reported |
| https://www.rocketshiphq.com/creative-for-subscription-apps-vertical/ | Mar 27, 2026 | Price/terms in ad pre-qualify | reported |
| https://www.capconvert.com/learn/blog/ppc-for-saas-free-trials-lowering-cac-while-filtering-out-low-intent-sign-ups | Jul 12, 2025 | Pricing visibility effect (SaaS) | reported |
| https://www.revenuecat.com/blog/growth/ugc-ads-apps | Dec 2, 2025 | AppsFlyer creative report | reported |
| https://cdn.ca9.uscourts.gov/datastore/opinions/2025/12/11/25-2935.pdf | Dec 11, 2025 | Ninth Circuit: fee allowed on remand | verified snippet |
| https://www.scotusblog.com/cases/apple-inc-v-epic-games-inc-2 | live | Argument Jan 11, 2027 | reported |
| https://9to5mac.com/2026/11/13/epic-formally-asks-scotus-to-uphold-contempt-ruling-against-apple/ | Nov 13, 2026 | Epic brief | reported |
| https://www.forasoft.com/blog/article/how-to-avoid-apple-pay-commission-204 | Nov 8, 2026 | Apple's 15%/10%/5% proposal | reported |
| https://devoria.fr/en/blog/ios-external-payment-link-apple-rules | Nov 4, 2026 | 0% US today, keep IAP | reported |
| https://www.thimblehub.com/resources/meta-ads-telehealth-conversions-api | Oct 12, 2026 | Business Tools Terms Nov 3, 2025 | reported |
| https://www.facebook.com/business/help/2455915321411996 | live | Flagged custom conversions | verified snippet |
| https://coast.studio/meta-health-wellness-restriction-apps | Oct 27, 2026 | Installs kept signal at middle level | reported |
| https://tessichealth.com/insights/meta-health-data-restrictions-telehealth-ads | Sep 28, 2026 | What still optimizes | reported |
| https://www.cbidigital.com/insights/how-meta-health-data-limits-affect-mobile-iv-ads | Nov 12, 2026 | Meta's upper-funnel advice | reported |

Evidence screenshots: `evidence/E-hpt-quiz-01-age.jpg` to `E-hpt-quiz-06-price-block.jpg`.
