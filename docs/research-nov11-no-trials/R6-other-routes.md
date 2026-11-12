# R6 - Other routes to turn Meta traffic into payers (Walkito, Nov 11, 2026)

Scope: web-to-app funnels, soft paywall / freemium, optimizing Meta for a web event, and non-Meta channels for women 45-65 with foot pain. Read only research. Evidence levels: STRONG (data, several sources), MEDIUM (one credible source with numbers), WEAK (opinion or vendor claim without method).

Context used from the team package: Walkito is on RevenueCat and AppsFlyer, has an Android app, is sold by Nemy LLC, break-even target ~$12-19 per trial, organic App Store users started trials at ~5% in October, Meta users 0 of ~65. Prior report P6 already covers quiz psychology; this report focuses on cost, setup, tracking, rules and channels.

---

## 1. Web-to-app funnel (Meta ad -> web quiz -> web checkout -> download app)

### What it is and who uses it
- Ad click lands on a web quiz, then a web paywall and Stripe/Paddle checkout, then the user downloads the app and logs in. No App Store step before payment.
- BetterMe: its main fitness funnel is 57 screens (35 questions, 1 email gate, 1 paywall, 1 checkout); 239 ads ran on that one funnel in a month. (MEDIUM) https://funnelfox.com/web2app-funnels-library/betterme/
- Lasta: 126 funnels and 5,364 ads in Sept 2026; a 31-screen funnel; plans 28-day / 12-week / 24-week shown as $10.54 / $20.75 / $31.50 "intro" against $61.99 / $82.99 / $104.99, with a 30-day money-back badge. (MEDIUM) https://funnelfox.com/web2app-funnels-library/lasta/
- Liven, Coursiv, Finelo all use the same template: "4-week plan $19.99 (was $39.99), then $39.99 every 4 weeks", 30-day money-back, renewal disclosure under the button. (MEDIUM) https://admiral.media/web-to-app-funnels-2026
- Noom: up to 113 screens, 10-15 minutes. (MEDIUM) https://www.revenuecat.com/blog/growth/web-to-app-onboarding-funnel
- Closest comparable to Walkito: **Prehab** (consumer health app built by Doctors of Physical Therapy, musculoskeletal). Switched its web funnel from free trial to a direct annual purchase ($149): **4.5% peak, ~3.2% average conversion**, same as its old trial model, but full year of revenue on day 0. (MEDIUM, vendor case, no sample size) https://funnelfox.com/cases/how-prehab-captured-full-annual-revenue-upfront-during-black-friday-2

### Conversion numbers
- FunnelFox State of Web2App 2026: web funnels convert ~3.0% of sessions to purchase vs 1.5% for app funnels; only ~13% of users reach the paywall; the biggest drop is before the paywall (quiz), not at checkout. 82% of top-grossing apps run web2app. (MEDIUM, vendor report, method only partly described) https://funnelfox.com/state-of-web2app
- Same report: on web, **no-trial offers make 56.8% of revenue, paid trials 28.9%, free trials only 14.3%**. Annual plans: ~$69 LTV at month 1. Apple Pay is ~60% of web payments. 30-50% of initiated payments fail (3DS, declines). Annual plans refund 18x more than weekly; most refunds within 7 days. (MEDIUM) same URL
- AdQuantum: in Health & Fitness, web LTV ~$80-90 vs app LTV ~$40-45 for the same product; but web CPAs and CPMs are higher. (WEAK-MEDIUM, quote in vendor report) same URL
- AdQuantum case: web-to-web funnel cut CPA 70% for a H&F app; **quiz screen 1 -> screen 2 should be at least 60%; at 40% scaling "becomes nearly impossible"**. (MEDIUM, partner post) https://www.businessofapps.com/insights/how-adquantum-lowered-cpa-by-70-for-a-health-fitness-app-with-web-to-web-funnels
- Mobihunter (agency, directional): quiz landing to install 35-55%; web paywall completion 12-22% for health/dating/productivity. (WEAK) https://www.mobihunter.co/blog/web-to-app-funnels-in-2026
- **Counter-evidence, the only clean A/B test (STRONG):** RevenueCat on Dipsea, ~3,100 US users per arm. Sending in-app paywall taps to web checkout: initial conversion 27.0% (IAP) vs 18.1% (web only) vs 23.5% (IAP + "save 30% on web"). Tap-to-purchase 71% IAP vs 44% web. Paid conversion 6.3% vs 5.3% vs 5.9%. Web trials converted slightly better (26.3% vs 25.0%), but not enough. Under Apple's 15% Small Business rate, web-only earned **~77 cents per IAP dollar**. Note: this is app-to-web (link out from inside the app), not ad-to-web quiz. https://www.revenuecat.com/blog/growth/iap-vs-web-purchases-conversion-test

What this means for Walkito: putting a "buy on web" button in the current in-app paywall will most likely *lower* conversion and save little (Nemy LLC is almost surely on the 15% Small Business rate). The real upside of web is different: (a) payment happens before the install, so the 50% who leave at paywall step 1 never cost an install, (b) Meta can optimize on a purchase event *if* the domain is not restricted, (c) free pricing tests (intro price, no trial, money-back guarantee) without App Store review.

### Tools, cost, setup time

| Tool | What it does | Cost | Notes |
|---|---|---|---|
| RevenueCat Web Billing + Web Purchase Links / Funnels | Hosted checkout on Stripe, entitlement unlocks in app | No extra RevenueCat fee (1% of tracked revenue above $2.5k/mo, already their plan); Stripe 2.9% + 30c; optional Stripe Tax 50c | Walkito already uses RevenueCat, so lowest setup. (STRONG, docs) https://www.revenuecat.com/docs/web/web-billing/overview , https://www.revenuecat.com/pricing |
| Paddle (as billing engine) | Merchant of record, handles sales tax | 5% + 50c per transaction | One product per purchase. https://www.paddle.com/pricing |
| web2wave | Quiz + paywall builder, keeps RevenueCat as source of truth | Free under 50 visitors/day; Basic $199/mo; Starter $590; Pro $990 | Self-serve, can start this week. (MEDIUM, competitor's own page) https://www.web2wave.com/post/web2wave-vs-funnelfox |
| FunnelFox | Quiz/paywall builder, billing, Meta CAPI | Demo-gated, revenue share; Stripe app listed free | Biggest H&F template library. https://marketplace.stripe.com/apps/funnelfox |
| Zing, Appbooster, Purchasely web | Similar builders | No public pricing found | Not verified. |
| DIY (Next.js / plain HTML quiz + Stripe Checkout + RevenueCat redemption link) | Full control | Hosting ~$0-20/mo + Stripe fees | 1-2 weeks for one developer who knows Stripe. |

Realistic setup time for 2 people: RevenueCat Web Purchase Link + simple 8-12 question quiz page: **5-8 working days** (quiz copy, checkout, account linking/redemption, Meta Pixel + CAPI, legal text, QA on iPhone Safari). A FunnelFox/web2wave template: 3-5 days plus vendor onboarding.

### Apple rules (US) after 2025
- After the April 30, 2025 Epic v. Apple order, Apple updated guidelines 3.1.1, 3.1.1(a), 3.1.3 on May 1, 2025: on the **US storefront there is no prohibition on buttons, external links or calls to action** to other purchase methods, no entitlement needed, and Apple's attempted 27% commission was dropped. (STRONG) https://developer.apple.com/news?id=9txfddzf , https://developer.apple.com/app-store/review/guidelines , https://9to5mac.com/2025/05/01/apple-app-store-guidelines-external-links
- Only the US storefront. RevenueCat reads the ruling as still requiring IAP to be offered alongside web inside the app. (MEDIUM) https://www.revenuecat.com/docs/web/faqs
- A purely ad-to-web funnel (buy on web, then download and log in) was already allowed before 2025 under the multiplatform rule; the app just must not *hide* that IAP exists. (STRONG, guidelines)
- RevenueCat reports Apple Review rejecting in-app browser (webview) checkouts; open Safari instead. (MEDIUM) Dipsea post above.

### Meta tracking on a web funnel, and the health category problem (the biggest risk)
- Since Jan 2025 Meta assigns websites and apps to "data source categories". **Health and wellness** includes sites "associated with medical conditions or specific health statuses ... condition-specific support". (STRONG, Meta help) https://www.facebook.com/business/help/1402913027039332
- Three tiers: Core Setup (strips custom parameters and URL paths), Restriction on certain standard events (blocks "specific mid and lower funnel events"), Full restriction. Custom events are blocked until reviewed. Applies to Pixel, CAPI, App Events SDK and App Events API alike; moving to server-side does not avoid it. (STRONG) https://www.facebook.com/business/help/511197658391698 , https://tealium.com/blog/customer-experience/metas-new-data-sharing-restrictions-and-what-it-means-to-healthcare-marketing , https://succession.media/guides/meta-health-and-wellness-category-removed/
- Agencies report Purchase, Lead, InitiateCheckout, AddToCart being blocked while PageView/ViewContent still flow; fitness apps have been hit too. (MEDIUM, several agencies) https://blog.scoreify.net/p/meta-s-health-and-wellness-pixel-restrictions-in-2026 , https://heyflow.com/blog/web-to-app-funnel/
- Since Sept 2, 2025 custom conversions that suggest a health condition (e.g. "arthritis") are flagged and cannot run. (STRONG, Meta docs) https://developers.facebook.com/docs/marketing-api/reference/custom-conversion/v19.0
- Renaming Purchase to a coded custom event: Meta says event names must not reflect or be based on prohibited info; results "mixed at best"; risk of account action. (MEDIUM) https://succession.media/guides/meta-health-and-wellness-category-removed/ , https://www.wittelsbach.ai/blog/why-cant-my-health-brand-optimize-for-purchases
- One agency saw a paid web funnel that deep-links into an app lose conversions after the *web* source was restricted. Meta publishes no rule on whether a site's category spreads to a linked app. (WEAK-MEDIUM) https://coast.studio/meta-health-wellness-restriction-apps

Walkito-specific read: a domain about "heel pain / plantar fasciitis" is a much clearer "condition" match than BetterMe's "pilates for women 40+". **There is a real chance a Walkito web funnel gets Purchase/Lead blocked, which kills the main reason to build it.** (Inference, WEAK-MEDIUM.) Before building anything: have Rahim open Events Manager > the app dataset > Settings and check whether a category or restriction is already assigned to the app (read only). If the app is already restricted, assume the web domain will be too.

### Health data rules (must follow in any web funnel)
- **BetterHelp**: FTC order, $7.8M, banned from sharing health data for ads; it had uploaded 7M+ visitor/user emails to Facebook for matching and targeting. (STRONG) https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-gives-final-approval-order-banning-betterhelp-sharing-sensitive-health-data-advertising , https://search.ftc.gov/system/files/ftc_gov/pdf/2023169betterhelpcomplaintfinal.pdf
- **GoodRx**: $1.5M civil penalty, first Health Breach Notification Rule case; the Facebook pixel sent custom events naming medications and conditions. (STRONG) https://www.ftc.gov/news-events/news/press-releases/2023/02/ftc-enforcement-action-bar-goodrx-sharing-consumers-sensitive-health-info-advertising
- FTC 2024 HBNR update explicitly covers health apps not under HIPAA; an unauthorized disclosure to an ad platform counts as a "breach". (STRONG) https://www.ftc.gov/news-events/news/press-releases/2024/04/ftc-finalizes-changes-health-breach-notification-rule
- Practical rules: never put quiz answers (pain level, condition, diagnosis, foot type) in pixel parameters, event names or URLs (use /q/3, not /q/heel-pain-severe); send only PageView / a neutral "checkout done" event with value; never upload buyer email lists to Meta Custom Audiences; disclose ad tracking in the privacy policy; get consent before storing health answers.

### Consumer law for a web checkout
- FTC "click to cancel" rule was **vacated** by the 8th Circuit on July 8, 2025, but ROSCA still applies. (STRONG) https://www.manatt.com/insights/newsletters/eighth-circuit-vacates-the-ftc-s-recently-amended-negative-option-rule
- California ARL (from July 1, 2025): express affirmative consent to renewal terms, keep consent records 3 years, online cancel with a direct link/button, renewal reminder 15-45 days before a yearly renewal, free-to-pay conversions covered. (STRONG) https://oag.ca.gov/news/press-releases/attorney-general-bonta-issues-consumer-alert-california%E2%80%99s-automatic-renewal-law , https://www.cooley.com/news/insight/2025/2025-06-04-california-automatic-renewal-law-amendments-take-effect-on-july-1-2025
- On the App Store Apple handles cancel and receipts; on web **Walkito must build the cancel button, reminder emails and consent log itself.** RevenueCat Web Billing includes a subscription management page (check it covers the CA reminder).
- **Flag:** the Lasta/Liven "-83% / was $61.99" crossed-out prices are fake reference prices unless the full price is really charged to many people. Do not copy. Also no countdown timers that reset.
- **Flag (team):** a Stripe account needs a business representative. Per Rahman's notes, Rahim runs the accounts; Rahman should not be added as officer/representative on a new payment account until his F-1 position is checked.

---

## 2. Soft paywall / freemium inside the app

- RevenueCat 2025: day-35 download-to-paid **12.1% median hard paywall vs 2.2% freemium**; H&F hard paywall P90 ~12%. 2026 edition: 10.7% vs 2.1%; revenue per install day 60 $3.09 vs $0.38; 1-year retention about the same (27% vs 28%). (STRONG, 75k-115k apps, but not randomized) https://www.revenuecat.com/state-of-subscription-apps-2025 , https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026
- Same move, two apps (Phil Carter): one +75% LTV per user after going freemium with a multi-step paywall; the other -50% subscriber conversion. (MEDIUM) https://www.revenuecat.com/blog/growth/hard-paywall-vs-freemium
- Selection effect warning: hard paywall apps have fewer, more engaged installs, so the 5x gap is partly not causal. (MEDIUM) https://khalyushev.com/en/benchmarks/metric/download-to-paid-d35

Variants that fit Walkito (lowest risk first):
1. **"One free session, then paywall."** After onboarding, let the user do one 3-5 min routine, then show the paywall with "Continue your plan". Keeps a hard paywall for day 2+. Gives the "aha" (P6 covers why). Build: 1-3 days. Effect: unknown for Walkito; WEAK evidence it helps cold social users.
2. **Delayed paywall with push.** Free days 1-3 of the plan, paywall on day 4, reminder push. More installs reach value, but most Meta users never return (needs D1 retention data from PostHog first).
3. **Freemium with locked programs.** Lowest revenue per install by the RevenueCat data; not recommended for a team that needs payers this month.
Risk: freemium makes Meta's install optimization even more disconnected from revenue; and with any free use, keep the "Not now" honest (Apple 3.1.2 and 5.6 on manipulation).

---

## 3. Optimizing Meta for a web Lead or Purchase instead of installs

- Meta: optimizing for custom web events works only in Sales, Leads and Engagement objectives; custom app events only in App Promotion. New events need up to 72 hours. (STRONG) https://www.facebook.com/business/help/847716789206621
- FunnelFox (via P6): US trial events cost ~$10-15 when campaigns optimize for trials. (MEDIUM) https://blog.funnelfox.com/web-funnels-how-to-price-upsell-and-retain-your-web-audience
- Option 3a, **Lead objective with email capture**: web quiz -> "get your foot plan by email" -> App Store link. Cheap events, many signals fast, Meta learns from 50 events/week. Risks: Lead is one of the events reported blocked for health sources; leads are not payers; emailing a "heel pain plan" is health data, so the email list must never go to Meta. Expect cost per lead low but trial rate unknown.
- Option 3b, **Sales objective on web Purchase**: best signal if allowed; needs ~50 purchases/week to exit learning, i.e. ~$1,500-2,500/week at plausible costs. At $50/day the campaign stays in learning. Use a higher-volume proxy (InitiateCheckout) only if not blocked.
- Option 3c (no web build): stay in the App campaign but optimize for an **app event** that happens more often than trial, e.g. "onboarding complete" or "paywall plans viewed" (35 of 65 Meta users reached plans). This may be eligible sooner than StartTrial. Same category restrictions apply to app events, and these mid-funnel events teach Meta "people who finish onboarding", which is still better than "people who install". (WEAK-MEDIUM, inference from Meta docs) Build: SDK event already exists in PostHog/AppsFlyer; mapping work only, 1-2 days.

Illustrative math (not evidence): if Meta charges ~$1.50 per link click for this audience and a web funnel converts 3% (FunnelFox average, Prehab average) to a $59.99 yearly, cost per payer ~$50, about break-even on year one before refunds. Web CPMs are reported ~3x higher than app CPMs, so real CPC could be well above $1.50.

---

## 4. Other channels for women 45-65 with foot pain

| Channel | Evidence | Expected effect for Walkito | Cost | Time | Risk |
|---|---|---|---|---|---|
| **Apple Search Ads (Apple Ads)**, exact keywords "plantar fasciitis", "heel pain exercises", "flat feet" | US H&F median CPT $1.68, CPI $3.77 (AppTweak, ~2,800 advertisers) (MEDIUM); H&F has the highest Apple Ads install-to-paid of any category, 7.8% (BoA) (MEDIUM); tap-to-install 55-66% across 4 datasets (STRONG) https://www.apptweak.com/en/aso-blog/apple-ads-benchmarks , https://www.businessofapps.com/marketplace/apple-search-ads/research/apple-search-ads-costs , https://intentplus.io/blog/apple-ads-benchmarks-2026 | Searchers already have the problem; Walkito's organic App Store users converted at ~5% vs ~0% for Meta. At $3.77 CPI and 7.8% install-to-paid, ~$48 per payer; at 5% trial and 40% trial-to-paid, ~$190. Must use own past ASA data. | $10-30/day test | Same day | Low. Keyword bids on competitor names can be costly. |
| **YouTube** (organic + PT creator sponsorship) | 86% of US adults 50-64 and 65% of 65+ use YouTube (Pew) (STRONG) https://www.pewresearch.org/short-reads/2025/02/28/5-facts-about-americans-and-youtube | "Plantar fasciitis stretches" is a classic YouTube search; a PT creator mention fits trust needs of this age group. | Sponsorship $ varies; organic $0 | 1-2 weeks to first video | Must have PT's written OK for any claim; no cure/timeframe claims. |
| **Pinterest** | 70% of audience women; 33% of US adults 50-64 use it; 96% of searches unbranded (MEDIUM) https://www.digitalapplied.com/blog/pinterest-statistics-2026-marketing-data-points | Evergreen pins ("5 heel stretches for standing all day") -> landing page/App Store. Slow, cheap. | $0 organic; ads untested | 3-5 days for 20 pins | Low. Pinterest also restricts health targeting. |
| **Facebook groups** | "Plantar Fasciitis Support Group" public, 50.2K members (seen on Facebook) | Listening + helpful answers, maybe admin partnership. Not a scalable paid channel. | Time only | Ongoing | Most groups ban promotion; spammy posts hurt the brand. Founders must post as themselves, disclose they make the app. |
| **Google Search** to a web page | Search intent like ASA; health keywords allowed for search, not for health remarketing | Good if a web funnel exists; otherwise send to App Store. | CPC unknown for these terms | 1-2 days | Google's personalized-ads health policy (no remarketing on health). |
| **Partnerships** (podiatrists, PTs, running/comfort shoe stores, nurse/teacher communities) | Fulton insoles built a network of dozens of podiatrist/PT ambassadors and grew revenue 400%+ YoY (MEDIUM, one brand) https://www.modernretail.co/marketing/how-insoles-brand-fulton-is-building-out-an-ambassador-network-with-physical-therapists-and-podiatrists/ | Clinics can recommend an exercise app between visits; a QR card at a shoe store. Slow but high-trust, cheap per user. | Free codes / affiliate % | 2+ weeks to first partner | Any "recommended by" claim needs written OK; no paying clinicians per patient in ways that look like kickbacks (ask a lawyer before paying clinicians). |

---

## 5. What a 2-person team can ship in 1-2 weeks

Week 1 (no new infrastructure):
1. Check Meta Events Manager category/restriction on the app dataset (30 min, Rahim).
2. Map an existing onboarding-complete / plans-viewed event in AppsFlyer/Meta and start a second ad set optimizing for it (1-2 days).
3. Turn Apple Search Ads back on: exact-match foot-pain keywords, $15-25/day, measure trial rate vs Meta (same day).
4. "One free session before paywall" variant as a RevenueCat/PostHog A/B on Meta users only (2-3 days dev + review).

Week 2 (only if step 1 shows no restriction):
5. Minimal web funnel: 8-12 question quiz on a neutral domain, RevenueCat Web Purchase Link on Stripe, annual $59.99 with no trial plus 30-day money-back (or $1 7-day paid trial), redemption link into the app, Pixel+CAPI sending only PageView and a neutral purchase event with value. Run 20-30% of Meta budget to it under a Sales objective. Add CA-compliant consent checkbox, cancel link, reminder email.
6. Pinterest: 20 evergreen pins pointing to the App Store page.

Not in 2 weeks: multiple funnels per angle, FunnelFox contract, PT partnership program, YouTube sponsorships.

---

## TOP 5 findings for Walkito

1. **Web checkout inside the app is not a fix.** Clean A/B (Dipsea, ~12.5k users): web-only cut initial conversion 27% -> 18% and, at Apple's 15% rate, earned ~77 cents per IAP dollar. Do not add a "pay on web" button to the current paywall. (STRONG)
2. **Ad-to-web funnels do work in health, but the money comes from no-trial and intro offers.** 57% of web2app revenue is no-trial, 14% free trial; Prehab (PT-built health app) got ~3.2% conversion selling annual upfront with no trial. (MEDIUM)
3. **Meta's health category can block exactly the events a web funnel needs.** A "heel pain" domain fits Meta's "medical condition" category definition; Purchase/Lead can be blocked and workarounds are not allowed. Check the current app dataset in Events Manager before building anything. (STRONG on the rules, WEAK-MEDIUM on whether Walkito gets hit)
4. **Apple Search Ads is the cheapest proven alternative for this exact user.** Walkito's App Store searchers converted ~5% vs ~0% for Meta; H&F has Apple Ads' highest install-to-paid (7.8%); US H&F CPI ~$3.77. (MEDIUM)
5. **Never send health answers or buyer emails to Meta.** BetterHelp ($7.8M) and GoodRx ($1.5M) were punished for exactly this; the FTC 2024 rule covers apps like Walkito. Any web funnel needs neutral URLs/events and a California-compliant cancel and reminder flow (Walkito would own these, not Apple). (STRONG)

## 3 things I would test first

1. **Apple Search Ads exact-match, $20/day for 7 days**, on "plantar fasciitis", "heel pain", "flat feet exercises": compare install-to-trial and cost per trial with Meta. Zero build.
2. **Meta optimization event change**: second ad set optimizing for a higher-volume app event (onboarding complete or plans viewed) vs current installs, same creative, $25/day each, 7 days. Read cost per trial, not cost per install. Check the Events Manager restriction first.
3. **Minimal web funnel, only if no restriction**: neutral-domain quiz -> RevenueCat Web Billing annual $59.99 no trial with 30-day money-back -> app download, 25% of Meta budget for 7-10 days. Success bar: cost per paying user under ~$60 with refunds counted.
