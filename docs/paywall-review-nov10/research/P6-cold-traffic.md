# P6 - Cold paid-social users vs warm App Store searchers

Topic: what goes on in the head of someone who tapped a Meta ad a minute ago, why that person bounces at a hard paywall, and what the big health/fitness apps do about it. Research date: Nov 9, 2026.

Evidence levels: STRONG = data from several sources. MEDIUM = one credible source with numbers. WEAK = opinion or a single anecdote.

---

## 0. First, a sanity check on Walkito's own numbers

- 19 people saw "1 week free" and 0 started. That sounds terrible, but the sample is tiny. Adapty's 2026 benchmark (78,000+ paywalls) says that on a hard paywall a median **4.7% of viewers start a trial** and US apps convert a median **2.75% of paywall viewers to paid**. At 4.7%, 19 viewers gives an expected ~0.9 trials. Getting 0 when you expect 0.9 happens about 40% of the time by pure chance. So **"0 of 19" does not prove the paywall is broken.** You need about 100-150 paywall views before you can judge it. (MEDIUM, math on Adapty benchmark) https://adapty.io/state-of-paywalls/report/
- **What does look like a real bug signal: 0 taps on "Not now" plus 10 rage taps.** Usually some viewers tap close. If nobody found the exit and people tapped hard on things, they may have been confused (button not visible, close hidden or delayed, price unclear, something that looks tappable but isn't). Fix that before running any psychology tests. (WEAK, inference from Walkito data; Adapty notes 22% of apps delay the close button, usually only 3-5 seconds, and only 2% delay it more than 10 seconds) https://adapty.io/state-of-paywalls/report/
- **Organic users started trials at ~5% of installs, Meta users at 0%.** Same onboarding, same paywall. That gap is the core cold-vs-warm problem below.

---

## 1. Why cold paid-social users are different from App Store searchers

**Intent.** An App Store searcher typed "heel pain" or "plantar fasciitis". They already named their problem and went looking for a fix. A Meta user was scrolling, got stopped by a hook, and tapped out of curiosity. They have not decided they have a problem worth paying to solve. The ad did a small part of the selling, the onboarding has to do the rest.

- FunnelFox: "For colder, lower-intent audiences, longer quiz flows do a better job building trust and demonstrating value. For branded keywords or warm leads, use a short landing page." (MEDIUM, practitioner guidance from a web2app vendor with large customer data) https://blog.funnelfox.com/web2app-quizzes-as-profit-engine
- RevenueCat guest author (paid UA): "paid users tend to churn at a higher rate than those from organic sources." Also: older audiences often convert to paid at a higher rate. Good news for a 35-65+ audience. (WEAK-MEDIUM, practitioner experience) http://www.revenuecat.com/blog/growth/metrics-for-scaling-paid-ads
- Growth Therapist (Meta UA operator): trial users "may be less motivated or may have plenty of other options, especially when they come from paid sources... someone looking for one specific app who sees other apps on Meta or TikTok." (WEAK, one operator) https://growththerapist.com/blog/remove-free-trial-subscription-app

**The decision is made on Day 0, in minutes.** There is no "come back later" for a cold user.
- Adapty: **93% of first purchases happen on Day 0**; 60% of buyers buy on the first paywall view. But in **Health & Fitness only 40% buy on the first view and about a quarter need 5+ views**. (STRONG for Day 0, MEDIUM for H&F detail) https://adapty.io/state-of-paywalls/report/
- RevenueCat: 89.4% of trial starts happen on install day. https://www.revenuecat.com/blog/engineering/android-paywall-gap
- Adapty (separate report on $3B revenue): "90% of trial starts happen on Day 0... A 7-day trial does not give you 7 days to convince someone. It gives you Day 0." (STRONG, matches RevenueCat) https://adapty.io/blog/free-trial-vs-direct-purchase-subscription-apps

**The cheap install may be the problem itself.** $3 installs on Meta usually mean the campaign is optimized for installs, so Meta finds people who tap and install, not people who pay.
- Meta's own docs: install optimization is "recommended... if your main criterion is reduced cost per new customer installation." App event optimization (for example "Start Trial" or "Purchase") instead finds "people who are likely to take a specific action that is of value to your app." (STRONG, primary source) https://developers.facebook.com/docs/app-ads/optimizing-your-app-ad and https://www.facebook.com/business/help/2308889442692949
- Adsrunner: install events predict payment "weakly"; trial start is "high volume, minutes after the click". Optimize to trial start (with a value) when the trial is longer than Meta's 7-day click window. (MEDIUM) https://www.adsrunner.com/insights/free-trial-or-paid-what-your-ads-should-optimize-toward
- FunnelFox: in US app promotion, individual trial events cost around **$10-15** and 20%+ install-to-trial is a reasonable benchmark for app campaigns optimized for trials. (MEDIUM) https://blog.funnelfox.com/web-funnels-how-to-price-upsell-and-retain-your-web-audience

So part of the "cold user" problem is a targeting problem, not a psychology problem. Even a perfect paywall can't convert people who were picked because they install free stuff.

---

## 2. Ad-to-onboarding message match ("scent")

The idea: the first screen after the tap should feel like the next sentence of the ad. If the ad said "20 min walk and my feet are already done", the first screen should talk about sore feet after walking, not "Welcome to Walkito".

- FunnelFox: "Users who click a stress-relief ad and land on a generic quiz intro will feel the mismatch. They may not be able to name it. But it shows up in drop-off rates at the first screen and lower completion across the quiz." **Over 50% of users drop off after the first screen**, before answering one question (FunnelFox State of Web2App 2026). (MEDIUM) https://blog.funnelfox.com/creative-testing-for-web2app/
- FunnelFox, on 8 top health funnels: "The same funnel can convert great with one ad and perform terribly with another... Most of the difference in performance comes from creatives and targeting, the funnel itself comes third." (MEDIUM) https://blog.funnelfox.com/health-funnels-and-ads-breakdown
- FunnelFox creative rule: "Never ask a question in your quiz that your ad creative already answered." Preview the quiz in the ad ("Answer a few questions... takes 2 minutes"). (WEAK-MEDIUM, guidance) https://blog.funnelfox.com/ad-creatives-for-web2app
- Their recommended test: build one full "arc" per ad angle (welcome screen + first 3-5 questions + feedback copy), keep the paywall identical, compare. (Guidance) https://blog.funnelfox.com/creative-testing-for-web2app/
- In-app version of this: deferred deep links (AppsFlyer OneLink, Branch, Adjust) carry the campaign/creative id into the first app open, so the app can branch onboarding by ad. AppsFlyer claims **+25% engagement in first 7 days and +10% D7 retention** from deferred deep linking (vendor marketing numbers, not health-specific). Branch documents a Meta Ads deferred deep link flow. (WEAK-MEDIUM, vendor claims) https://www.appsflyer.com/products/deep-linking/deferred-deep-linking/ and https://help.branch.io/marketer-hub/meta-ads-deferred-deep-linking
- Adapty: **only 6% of apps personalize the paywall by acquisition source** and only 2% of paywall headlines use what the user told the app. Big gap, cheap to fill. (STRONG, large dataset) https://adapty.io/state-of-paywalls/report/

Cheaper Walkito version without a deep-link vendor: Walkito already asks "where did you hear about us". It also gets the Meta campaign via the attribution SDK. Even just 2-3 onboarding variants by ad angle (heel pain in the morning / flat feet / sore after walking or standing at work) would be message match.

---

## 3. Why cold users bounce at hard paywalls

The hard paywall is not the villain in the averages:
- RevenueCat 2026 (115,000+ apps): hard paywalls convert **10.7% of downloads to paid by day 35 vs 2.1% for freemium**, with nearly the same 12-month retention (27% vs 28%), and **8x revenue per install at day 60 ($3.09 vs $0.38)**. (STRONG) https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026
- RevenueCat: "the conversion is driven by the promise of value, the quality of the marketing, and the friction of the paywall itself." Stay hard-paywall if you're "bootstrapped or highly capital-constrained" and the product "solves an acute, immediate problem". Growth advisor Phil Carter saw a **50%+ drop in subscriber conversion** when one client went freemium, and a 75% LTV lift at another client that used a "free forever, but try premium for 7 days" multi-step paywall. (MEDIUM) https://www.revenuecat.com/blog/growth/hard-paywall-vs-freemium
- Adapty (same-app comparisons): hard paywall (no close button) gets **+48% more trial starts** (4.7% vs 3.2% of viewers) but **-33% fewer direct purchases**. Hard wins overall in 57% of apps. No clear winner. (STRONG) https://adapty.io/state-of-paywalls/report/

So why do cold users bounce? From the sources, the reasons are:
1. **The value was never shown, only promised.** A cold user has no prior trust (no search, no reviews read). The "promise of value" is what carries a hard paywall, and the onboarding has to build it. Agency Applica rebuilt Alux's onboarding to "prove value before the paywall" and got **+26% install-to-paid, +22% D1 retention** at the same price (50/50 A/B, n ≈ 1,134 per arm, 62 days). (MEDIUM) http://applica.agency/case-studies/alux
2. **Fear of being charged.** 32% of trials are cancelled in the first hour, 44% within 24 hours (Adapty). People who fear the charge either don't start or start and cancel at once. (STRONG) https://adapty.io/state-of-paywalls/report/
3. **Too much at once.** Paywall arrives right after an ATT system prompt and right after a long quiz, with a 3-screen paywall before the price. Each extra screen at that moment is another chance to leave. (See ATT section below.)
4. **Price shock without context.** "$59.99/year" is a big number for someone who saw an ad 3 minutes ago. Health & Fitness median annual price is **$29.99** (Adapty), so Walkito is 2x the category median. (STRONG for the benchmark) https://adapty.io/state-of-paywalls/report/

---

## 4. "Aha moment before paywall" vs paywall first

Two schools, both with data:

**Paywall early can win:**
- FitnessAI moved the paywall before onboarding and added a video: paywall views +50%, **install-to-trial doubled**, trial-to-paid unchanged. Another app saw **5x revenue** from moving the paywall to the start. (MEDIUM, founder reports via RevenueCat) https://www.revenuecat.com/blog/growth/paywall-tests-grow-app-revenue
- Rosie Hoggmascall test: trial opt-in **2%** with paywall after home screen, **8%** with paywall before onboarding, **15%** with a short value carousel before that paywall. (MEDIUM) https://liftarchive.com/apps/app-tracking-transparency
- Adapty: onboarding paywalls convert **~4x better** than later paywalls (0.85% vs 0.23% view-to-paid). (STRONG) https://adapty.io/state-of-paywalls/report/

**Showing value first also wins:**
- Alux (+26% install-to-paid), ASL Bloom goal-led onboarding (+15% trial conversion, +12% ARPU, +18% 30-day retention), Five Minute Journal JTBD onboarding (+20% ARPU, p = 0.04). (MEDIUM, agency-run A/B tests, changes bundled) http://applica.agency/case-studies/alux , https://www.revenuecat.com/blog/growth/asl-bloom-applica-case-study , https://liftarchive.com/test/five-minute-journal-jtbd-onboarding
- Fitbod shows projections of your 3-month progress right before the paywall; Noom predicts when you'll reach your goal. RevenueCat: "This little taste of progress, just before seeing the paywall, helps improve conversions." (WEAK-MEDIUM) https://www.revenuecat.com/blog/growth/why-your-onboarding-experience-might-be-too-short
- Rise (sleep app, top Meta health advertiser) puts a real reaction-time test and memory game in the quiz so "the result feels performed, not just filled out." (WEAK, teardown) https://blog.funnelfox.com/health-funnels-and-ads-breakdown
- Accellsoft summary of 13 founder posts: the winning sequence is "welcome, goal, relevant questions, proof, a demonstration, a personalized result, and then a paywall." Founders reported 8% and ~12% install-to-paid on goal-first hard-paywall flows. (WEAK, founder claims) https://www.accellsoft.com/blog/app-onboarding-13-x-posts

**How to reconcile them:** "paywall first" works when the ad and App Store page already sold the product (warm). "Value first" works when trust has to be built inside the app (cold). Both agree on the same thing: **the user should see something real and about them before the price.** For a cold Meta user in pain, the cheapest "aha" for Walkito is one short, safe exercise or a 30-second foot check done right in onboarding, with a "how did that feel?" follow-up. That turns a promise into an experience.

Trap to avoid: Clever (brain app) makes users do 25 questions and then puts the entire result behind the paywall. FunnelFox calls that close to "bait-and-switch". https://blog.funnelfox.com/health-funnels-and-ads-breakdown

---

## 5. Soft vs hard paywall for paid social

- No single winner (Adapty: hard wins 57% of apps). Hard drives more trials, soft more direct buys. (STRONG) https://adapty.io/state-of-paywalls/report/
- **Second-chance paywalls work and almost nobody uses them:** only 4% of apps show another offer right after the first is closed; these convert at **0.88x** the main paywall and beat it in 45% of apps. Typical discount 38%. Walkito already has this (one-time offer after "Not now"), but no one reached it because nobody tapped "Not now". (STRONG) https://adapty.io/state-of-paywalls/report/
- **Two-paywall pattern:** App Masters app: soft no-trial paywall early (X delayed 3s), then trial-explainer screens, then a second paywall with a 3-day trial. Start rate **3% -> 4.4% -> 7.7%**, sales ~$1K -> ~$3K/month (not a clean test). (WEAK-MEDIUM) https://gtmsauce.com/episodes/2026-09-15-paywall-strategy-how-2-paywalls-tripled-trial-starts
- Rizz App two-step onboarding paywall: +10% onboarding conversion, +10% trial conversion. (MEDIUM, Superwall case) https://superwall.com/case-studies/rizz-god
- For cold users, a soft close is also an ethics and trust signal. A user who feels trapped leaves (or rage-taps). One option: keep the hard paywall for organic, test a soft one (visible "Not now" -> limited free mode, e.g. 1 free exercise per day) for Meta. Watch install-to-paid, not just trial starts.

---

## 6. Web-to-app quiz funnels (BetterMe, Noom, Lasta, Liven, Flo)

Why they convert cold traffic:
- Users like answering questions about themselves. Mathema's conversion went **7% -> 13%** after adding a quiz funnel. Headway's quiz has lower visit-to-download but much higher conversion to payer, and **Headway gives no free trial to quiz users because their intent is higher**. (MEDIUM, practitioner article) https://medium.com/design-bootcamp/how-flo-and-zoe-use-a-web-to-app-to-boost-their-conversion-6f424171b1b7
- FunnelFox State of Web2App 2026: web funnels convert **~3% vs 1.5%** for app funnels; web-to-app runs in 82% of top grossing apps; BetterMe earns ~90% of revenue from web funnels. A competent web funnel converts ~5% of clicks to paid, top performers ~10%, but **web CPMs are ~3x higher**. (MEDIUM, vendor report) https://www.businessofapps.com/insights/the-state-of-web-to-app-in-2026-strategies-for-scalable-growth and https://blog.funnelfox.com/web-funnels-how-to-price-upsell-and-retain-your-web-audience
- Length is not the enemy: Noom runs 113-140 screens, Rino's best funnel had 51 steps, but some 3-5 screen funnels also convert >10%. "When someone is 15 questions deep, why not answer the next 15?" (MEDIUM) https://mobileuseracquisitionshow.com/episode/how-to-design-a-web-to-app-funnel-that-converts/ , https://funnelfox.com/case-studies/doubled-checkout-cr-with-funnelfox/
- They mix questions with "micro-rewards" (mini-insights, reassurance, social proof) so the quiz doesn't feel like a form. (WEAK-MEDIUM) https://blog.funnelfox.com/web2app-funnel-patterns-2026
- Noom's tricks (RevenueCat teardown): soft goal options including "I haven't decided" so no one feels they failed on screen 1; sensitive questions handled kindly; a short "calculating your plan" loader before the email ask. (MEDIUM) https://www.revenuecat.com/blog/growth/web-to-app-onboarding-funnel
- Otter Growth (51 onboarding flows): "Frame personalization as a clinical intake, not a quiz... 'professional assessment' garners more commitment and trust." "Normalize beginner status mid-flow." (WEAK-MEDIUM) https://ottergrowth.com/notes/subscription-app-onboarding-teardown
- BetterMe runs funnels per segment (e.g. "Pilates for women 40+", male version, region versions). Most are quiz-based. (MEDIUM) https://blog.funnelfox.com/betterme-web2app-ads-analysis
- Caveat: RevenueCat's own test (Dipsea) found forcing a web checkout cut initial conversion **27% -> 18%** vs in-app purchase. Web works for funnels built for web, not as a bolt-on. (STRONG, clean A/B ~3,100 users per arm) https://www.revenuecat.com/blog/growth/iap-vs-web-purchases-conversion-test

For Walkito now: web2app is a bigger project (web checkout, Stripe, F-1 issues for Rahman as an operator should be checked). The cheaper lesson is to copy the **psychology** of these funnels inside the app.

---

## 7. Trial vs no trial for paid social

Mixed evidence, and it depends on whether the trial converts.
- Growth Therapist (Meta, one app): removed the trial for paid Meta traffic only; install-to-result **7.1% -> 12%**, cost per result **$58 -> $40**, all results now purchases. Caveat: before/after, trend already rising, few hundred installs/week. (WEAK-MEDIUM) https://growththerapist.com/blog/remove-free-trial-subscription-app
- RevenueCat case: removing the trial roughly doubled LTV per paying customer ($35-40 -> $60). (MEDIUM) http://www.revenuecat.com/blog/growth/should-your-app-stop-offering-free-trials
- The Economist (FunnelFox): **30-day trial beat 7-day, and "no trial" clearly hurt** conversion, LTV and retention. (MEDIUM) https://blog.funnelfox.com/cracking-the-app-paywall-playbook
- Adapty: Health & Fitness converts the most trials of any category (**33.3% trial-to-paid in the US**) and has the fewest day-1 cancellations. 7-day trials do better than 3-day on annual plans. (STRONG) https://adapty.io/state-of-paywalls/report/
- Adapty: offer changes (trials, plan length, localization) win A/B tests ~60% of the time; visual/copy tweaks only ~35%. **Explaining how the trial works lifted ARPU 12-36%**; annual-first with the trial on annual lifted ARPU 25-40%. (STRONG) https://adapty.io/state-of-paywalls/report/
- Reminder screen: Sunflower added "we'll remind you before the trial ends": **+48% revenue, +46% trial conversions**; similar setup +56% trial starts on another app. (MEDIUM) https://gtmsauce.com/topics/free-trials
- Intro price as an alternative: "yearly $59.99 with 7-day trial" vs a paid intro offer ($1.99 first month): conversion 19% -> 25%, proceeds +21%. (WEAK-MEDIUM, aggregator) https://gtmsauce.com/topics/free-trials

Takeaway for Walkito: keep the 7-day trial (health converts trials well), but sell the trial safely with a timeline + reminder. Test a low intro price (or monthly option) as the second option for Meta users. Don't remove the trial on 19 data points.

---

## 8. What the user should FEEL at each step

The arc suggested by the sources (FunnelFox, Noom teardown, Otter Growth, Superwall) mapped to Walkito:

| Step | Feeling | What creates it | Source |
|---|---|---|---|
| Ad -> first screen | **Curiosity, "that's me"** | First screen repeats the ad's exact pain and words. No logo splash, no generic welcome. | FunnelFox creative-testing |
| Early questions | **Recognition** | Questions about when it hurts (first steps in the morning, after standing, after walks). Short reflections after answers: "Very common. Many people your age feel this." | Noom teardown, Reframe age-segmented reassurance |
| Mid quiz | **Safety / no shame** | "I'm not sure" options, skip buttons on sensitive questions, "most people start here". | Noom, Flo (skip on every screen), Otter Growth |
| Mini demo | **Hope (from experience, not a claim)** | One 30-60s gentle exercise or a simple self-check, then "How did that feel?". | Rise positive friction, Alux, Fitbod |
| Plan screen | **Ownership** | Plan built from their answers, their words in the headline. | Adapty (2% personalize headlines), FunnelFox pre-paywall |
| Trust | **Trust** | Real, checkable signals: who made it, physio/research basis with real links, real App Store rating. | Dr. Kegel & Kure real citations/founder; Reframe real Apple badge |
| Paywall | **Low-risk yes** | "Free today. We'll remind you on day 5. Cancel in 2 taps in Settings." Clear price, visible "Not now". | Superwall trial reminder page, Sunflower +46%, Adapty trial explainer +12-36% |

Superwall's multi-step paywall: "Each step is there to reduce a user's anxiety about starting a trial... The trial reminder page is critical." https://superwall.com/blog/two-paywall-trends-driving-arpu-gains

---

## 9. How big apps tune onboarding per ad angle

- BetterMe: 12 core funnel topics, each split by gender, age (e.g. women 40+), body type, creative angle and region. (MEDIUM) https://blog.funnelfox.com/betterme-web2app-ads-analysis
- BetterMe runs **1,152 funnels and 29,933 ads in Sept 2026**; Lasta 126 funnels, 5,364 ads. (MEDIUM, FunnelFox Market Radar) https://funnelfox.com/web2app-funnels-library/betterme/ , https://funnelfox.com/web2app-funnels-library/lasta/
- FunnelFox: top-quartile performers run 100+ funnel iterations; "Build funnel variants to match distinct ad angles rather than routing all traffic into one flow." (MEDIUM) https://blog.funnelfox.com/creative-testing-for-web2app/
- Adapty: top 10% apps by revenue per view personalize paywalls far more (69% vs 42%). (STRONG) https://adapty.io/state-of-paywalls/report/
- Superwall / Adapty / RevenueCat all support branching onboarding and paywalls by user attributes (onboarding answers, acquisition source) without an app release. https://superwall.com/features/audience-targeting

Walkito doesn't need 1,000 funnels. 2-3 angle-matched first screens and a paywall headline that uses the user's top answer is the realistic version.

---

## 10. Side notes that affect cold-user conversion

- **ATT prompt placement.** Walkito shows ATT right before the paywall. Data from multiple apps: putting ATT at **first launch** had the least impact on sign-up, trial, paid and activation (Aperture), and one app's opt-in went **6% -> 15%**, another **8% -> 13%**, with trial starts unchanged (Adapty). Moving it away from the paywall removes a system popup at the most fragile moment. (MEDIUM, several apps agree) https://gtmsauce.com/tactics/ask-for-tracking-permission-the-moment-the-app-first-opens , https://adapty.io/blog/how-to-build-app-onboarding-flows-that-convert/
- **Price vs category.** Walkito's $59.99/yr is 2x the Health & Fitness median of $29.99/yr; Health & Fitness earns 62% of revenue from annual plans. Discounts up to 30% cost little revenue; deeper ones cost a lot. Only ~1 in 10 new users who start on an offer still pay at 3 months. https://adapty.io/state-of-paywalls/report/
- **Meta playable ads** let people "try before they download" (Meta Help Center). An idea for later: a playable "foot check". https://www.facebook.com/business/help/1471413626484885

---

## 11. Rules check (Apple, FTC, health ethics)

- **Apple 3.1.2**: the billed amount must be the most prominent price on the purchase screen; free-trial flows must state trial length and what happens after. Since mid-January 2026 Apple **rejects paywalls with a free-trial on/off toggle**: show the trial as part of a plan card instead. (MEDIUM, developer reports checked against guidelines) https://revenuedot.app/blog/apple-free-trial-toggle-rejection and https://developer.apple.com/app-store/review/guidelines/
- Note: the Rizz App "trial toggle" pattern above is now a rejection risk. Don't copy the toggle.
- **FTC**: the "Click-to-Cancel" rule was vacated by the 8th Circuit on July 8, 2025, but ROSCA still applies: clear disclosure of material terms before billing, express consent, and simple cancellation. The FTC opened a new rulemaking (ANPRM) in 2026. (STRONG) https://www.beneschlaw.com/insight/eighth-circuit-cancels-ftcs-click-to-cancel-rule/pdf , https://downloads.regulations.gov/FTC-2026-0265-0024/attachment_1.pdf
- **Health red flags from the top Meta health funnels** (FunnelFox): same testimonial script recast across faces / AI "personal" stories, unsourced stats ("88% of men report improvements"), borrowed authority (a "Dr." name without a real doctor, unlinked ratings, geo "Top app" badges), clinical screening language for a wellness product, attacking doctors, timeframe claims ("unrecognizable in 21 days"). All of these would be FTC endorsement/claims problems for Walkito and against the brief. https://blog.funnelfox.com/health-funnels-and-ads-breakdown

---

## TOP 10 tactics for Walkito

1. **Fix the paywall exit and rage-tap problem first.**
   Why: 0 of 19 tapped "Not now" and 10 rage-tapped, so something on screen probably isn't working or isn't clear. Also 19 views is too few to judge conversion (expected ~0.9 trials at the 4.7% benchmark).
   Evidence: MEDIUM (benchmark math), WEAK (inference).
   Test: watch session replays of the 21 plan-screen users. Make "Not now" visible right away (or after 3 seconds max), make sure the price and CTA are obviously tappable. Then collect 100-150 paywall views before judging.

2. **Move the ATT prompt to first launch (or into the early quiz), away from the paywall.**
   Why: several apps saw no loss in trials and higher opt-in; it takes a system popup out of the most fragile moment.
   Evidence: MEDIUM.
   Test: A/B ATT-at-start vs ATT-before-paywall; measure plan-screen arrival, trial start, ATT opt-in.

3. **Message match: 2-3 first-screen variants matched to the ad angle.**
   Why: over 50% of web funnel users drop after screen 1; mismatch shows up as first-screen drop-off. Only 6% of apps personalize by source.
   Evidence: MEDIUM.
   Test: route by Meta campaign (attribution SDK or deferred deep link). Variant first screen repeats the ad hook ("Feet sore after a 20-minute walk?"). Measure onboarding start and completion per ad.

4. **Add one real "aha" before the paywall: a 30-60s gentle exercise or foot self-check, then "How did that feel?"**
   Why: cold users have no prior trust; proving value before the ask lifted install-to-paid +26% (Alux) and trial conversion +15% (ASL Bloom).
   Evidence: MEDIUM.
   Test: A/B onboarding with vs without the mini-session; primary metric install-to-trial for Meta users, guardrail onboarding completion. No pain-relief claims in the copy, just "how did that feel?".

5. **Trial explainer + reminder screen ("Today: free. Day 5: we remind you. Day 7: $59.99/yr. Cancel anytime in Settings.") and turn on a real reminder.**
   Why: cold users fear getting charged; trial explainers lifted ARPU 12-36% (Adapty), reminders +46% trial conversions (Sunflower).
   Evidence: STRONG-MEDIUM.
   Test: replace paywall screen 1 or 2 with this timeline; measure trial start and 24h cancellation rate.

6. **Personalize the paywall headline with the user's own answers.**
   Why: only 2% of paywall headlines use quiz data; personalized onboarding lifted ARPU 13-35% in Adapty tests.
   Evidence: STRONG (gap), MEDIUM (lift).
   Test: "Your plan for morning heel pain, 10 min a day" vs current headline. No outcome promise, describe the plan, not a result.

7. **Make the quiz feel like a caring clinical intake with micro-rewards.**
   Why: "assessment" framing gets more trust than "fun quiz"; reflections after answers ("Very common for people who stand at work") build recognition; "I'm not sure" options and skips cut shame-driven drop-off (Noom, Flo).
   Evidence: WEAK-MEDIUM.
   Test: rewrite copy only, keep questions; measure quiz completion (22/42 today = 52%) and paywall arrival.

8. **Real, checkable trust signals right before the paywall.**
   Why: cold users lack the App Store context that warm users bring. Top health funnels that use real citations or a real founder build trust; fake ones are a legal risk.
   Evidence: WEAK-MEDIUM.
   Test: add "who made Walkito" (real people), what the exercises are based on with real links, real App Store rating if available. Measure trial start.

9. **Test the offer for Meta users only: (a) current 7-day trial vs (b) 7-day trial + cheaper monthly or a low intro price as option 2, and later (c) a soft paywall with 1 free exercise/day.**
   Why: offer tests win ~60% of the time vs ~35% for visual tweaks. $59.99 is 2x the H&F median. Second-chance offers convert at 0.88x the main paywall but only fire if users can close.
   Evidence: STRONG (offer tests win more), MEDIUM (specific setups).
   Test: split Meta users with Superwall/Adapty/RevenueCat; metric = revenue per install at D14-D35, not trial starts alone. Don't cut the trial entirely yet; health converts trials best (33% US).

10. **Switch Meta optimization from installs to the Start Trial event (with a value) once events fire correctly.**
    Why: $3 installs = Meta finding people who install, not people who pay. Meta's own docs say app event optimization finds people likely to take the valuable action.
    Evidence: STRONG (Meta docs), MEDIUM (practitioner).
    Test: confirm the Start Trial event reaches Meta via SDK/MMP, run an AEO campaign at the same budget, compare cost per trial and D7 trial-to-paid. Expect CPI to rise a lot (US trial events often cost $10-15) but cost per payer to fall.

## 5 things to avoid

1. **Fake or recycled testimonials, AI "personal story" ads, unsourced stats** ("88% feel better"). FTC endorsement risk and against the brief.
2. **Cure / pain-free / timeframe claims** in ads, quiz feedback or the plan screen ("pain-free in 21 days", "fix flat feet"). Use "plan", "routine", "exercises", never promised outcomes.
3. **Hiding the exit or the price.** No hidden or long-delayed close button, no tiny renewal price, no free-trial toggle (Apple rejects since Jan 2026, guideline 3.1.2). Trapped users rage-tap and leave.
4. **Fake urgency and scarcity** (countdown timers that reset, "only 3 spots left", "offer expires in 10 minutes" when it doesn't). Manipulative for a health product and an FTC/ROSCA risk.
5. **Bait-and-switch personalization or doctor-distrust hooks.** Don't run a long "assessment" and then lock the whole result behind the paywall (Clever pattern), don't borrow medical authority you don't have (fake "Dr." branding, clinical screening language), and never tell users to skip their doctor (Gyna pattern). Show a real part of the result for free and say plainly that Walkito is not medical care.
