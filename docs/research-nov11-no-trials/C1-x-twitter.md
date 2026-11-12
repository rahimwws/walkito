# C1: X / Twitter community research (Wave 1B)

Source: X, read only (search + full threads opened in a browser tab, no likes/posts/follows). About 45 queries and ~60 threads read, Nov 11-12, 2026. Most cases are from Aug-Nov 2026. Almost all are indie founders posting their own dashboards, so sample sizes are small. Credibility: STRONG = big dataset or several independent founders agreeing; MEDIUM = one credible founder with real numbers; WEAK = opinion, tiny n or a marketer selling something.

Important caveat: very few posts are about health apps for women 45-65. Most cases are AI utilities, photo, language, habit and fitness apps with a younger audience. Treat everything as "directional for Walkito".

---

## Q1. "Lots of installs from Meta/TikTok, almost no trials": who had it, cause, fix

| App type | Who | Problem | What they changed | Before -> after | n | Date | URL | Cred |
|---|---|---|---|---|---|---|---|---|
| iOS consumer app (UK) | @guillemcraft | Meta install campaign: 49 users, 3 trials ($30 each), 0 paying | Compared with TikTok optimized for trials. Found Audience Network took **85% of Meta clicks**, "mostly accidental taps". Next Meta run: optimize for trials, Audience Network off | Meta (installs): $89 -> 3 trials, 0 paid. TikTok (trials): $123 -> 19 trials at $6.50, 3 paid. Trials 4-5x cheaper | 49 vs 108 users | 2026-10-27 | https://x.com/guillemcraft/status/2115085860861542654 | MEDIUM (confounded: new paywall shipped in between, he says so) |
| iOS app | @andrhlt | Meta install campaign gave his cheapest installs ever (~$0.50) | Switched Meta to optimize for trial starts | Install-optimized: **0 trials from ~40 installs** in 2 days (Apple Ads gave 2-3 per 40). Trial-optimized: CPI up to 2x Apple Ads, but trial start rate 2-4x Apple Ads | ~40 installs | 2026-10-16 | https://x.com/andrhlt/status/2111159905117987259 | MEDIUM |
| iOS app (US, 45 max age) | @kenbuildsalone | "20-30 installs at $3/day but none of them will sign up for trials" | Used install campaign only until 2-3 trials existed, then a new campaign optimized for trials "immediately, I don't care if there's enough data". Static ChatGPT images beat UGC | CPI rose to $5-10 but trials came. Cost per trial: static $5-10, UGC $30-50 | small | 2026-09-14 | https://x.com/kenbuildsalone/status/2099460523091968044 , https://x.com/kenbuildsalone/status/2099522094589751678 | MEDIUM |
| Consumer app (Posted) | @StevenCravotta | Cheap installs that don't convert | Rule: under 5,000 downloads optimize installs, past 5,000 optimize trial start, then manually kill ads that bring cheap installs and no trials | "Trial rate ran almost 2x" after moving to trial start | not given | 2026-06-19 | https://x.com/StevenCravotta/status/2067991563460849967 | MEDIUM |
| iOS app (EU) | @zakisbuilding | Meta "saw 0 trials" | Ran installs objective 2 days, new paywall same day | ~€30 per trial vs ~€42 before; 7 trials from €211, 949 clicks. Meta only attributed 12 installs | 7 trials | 2026-11-05 | https://x.com/zakisbuilding/status/2118352010227437716 | WEAK (not clean, he says so) |
| Utility app | @wilterrero | 1,000 installs/month, 0.1% started trials | Rebuilt onboarding: deleted tutorial, first screen actionable, a "30-second win" before asking to pay, no account/settings | Reached main screen 2% -> 40%; trial starts 0.1% -> 12% (same 1,000 installs) | 1,000/mo | 2025-03-01 | https://x.com/wilterrero/status/1895820573185622512 | MEDIUM (utility, not health) |
| iOS app (IT/ES) | @inversorfreak | Meta Ads Manager shows 0 installs, App Store Connect shows real Instagram downloads | Judge on installs and trials, never CTR; cross-check App Store Connect "App Referrer" | Hook ads 12-16% link CTR vs demo ads ~1%. Commenter: "high CTR on hook ads usually means curiosity, not intent" | ~13k impressions | 2026-11-03 | https://x.com/inversorfreak/status/2117733053875310744 | WEAK |
| Subscription app (US, 30+) | @rudybuild | Meta optimized for trial starts, US age 30+, all iOS: **80%+ payment failure** at trial end | Tried $1 paid trial | "We tried the $1 trial, still did not fix the issue" | not given | 2026-11-09 | https://x.com/rudybuild/status/2119806759908888816 | WEAK-MEDIUM (failure case) |
| App | @HuangSozx (reply) | 50 trials from Meta | none | "most of them converted to billing errors and cancellations", 1 paid | 50 | 2026-11-05 | https://x.com/HuangSozx/status/2118235270479065165 | WEAK |

Industry voices (same conclusion):
- Meta Nov 2026 Ads Manager changes: Audience Network gets a bigger share; Meta itself says expect higher CTR, more delivery and **lower conversion per click**. "If your CTR suddenly looks amazing this month, check placements." @PhilKiel, 2026-11-10, https://x.com/PhilKiel/status/2120259704849060099 (MEDIUM, agency summary of Meta notes). Manual placements are gone; Audience Network can be blocked at ad-account level (Advertising settings > Placement controls): @rokhladnik, https://x.com/rokhladnik/status/2118651858981962074 (WEAK-MEDIUM).
- Superwall data (10.5M trials, 3 months): only **75% of trials are "qualified"** (not cancelled within 2 hours). Sending raw trial starts to Meta is a mixed signal. @jakemor, 2026-03-06, https://x.com/jakemor/status/2029779710582956191 (STRONG dataset).
- Ad-ops replies repeatedly: map the paying event (trial start/purchase) into Meta and optimize once it can reach ~50/week per ad set, until then optimize one step up the funnel. https://x.com/athenaadsops/status/2120739125309612390 (WEAK).

**Pattern:** every founder who had "Meta installs, no trials" was on an install objective. The fix that is reported with numbers is changing the optimization event (trial or a deeper event), plus Audience Network off, plus problem/demo creatives instead of high-CTR hooks. The second most common fix is onboarding that gives a win before the paywall.

---

## Q2. Finish onboarding, leave at the paywall or close Apple's payment sheet

| App type | Who | Problem | Change | Before -> after | n | Date | URL | Cred |
|---|---|---|---|---|---|---|---|---|
| Superwall portfolio | @jakemor | Only **~50% of users who start an in-app purchase complete it** | "Transaction abandon" offer: shown right after the user cancels Apple's sheet (same trial 50% off, or no-trial at price x trial-conversion) | Accounts for **25-40% of revenue** in 2 of his apps. A user reports abandon offer converts >20% | Superwall customers | 2024-06-25 | https://x.com/jakemor/status/1805580424153846195 | MEDIUM-STRONG |
| Superwall, 181 apps | @jakemor | "Is this manipulative?" | Data report | Users who subscribe via a second (abandon) offer cancel and refund **less** | 181 apps >$100k | 2026-04-22 | https://x.com/jakemor/status/2046955182609596888 | MEDIUM (vendor data). One reply: "I had my app rejected just for using a transaction abandon campaign" |
| Paywall copy | @StevenCravotta | Trial anxiety | "3-screen trial close": (1) "We want you to try this for free", (2) "We'll remind you before the trial ends", (3) the paywall | A reply (@tomercn) A/B tested with vs without: **+30% converted** | not given | 2026-01-01 | https://x.com/StevenCravotta/status/2006741980613644648 | MEDIUM (note: Walkito already ships these screens and loses 57% on step 1, see conflicts) |
| Paywall layout | @StevenCravotta | - | "No payment due now" above button, "Try for free" on button, a 5-star review above it, no scrolling, trial length + price + frequency below button, one screen | claims $10k/mo paywalls | - | 2026-06-05 | https://x.com/StevenCravotta/status/2062701959056965822 | WEAK-MEDIUM |
| Weight-loss style app | @maxzrco | Generic headline | Put the goal the user picked in onboarding on top of paywall ("Start losing weight today") | Paywall conversion **5% -> 10%** | not given | 2026-11-06 | https://x.com/maxzrco/status/2118738932552593761 | MEDIUM |
| Pep AI (consumer AI) | @adrian_partain | Trials cancelled right after starting | "Message from the team" slide with a photo of the small team, first slide before paywall | "almost doubled revenue per user and cut trial cancellations in half", refunds steady | ran "long enough" | 2026-11-06 | https://x.com/adrian_partain/status/2118745597377470938 | MEDIUM |
| App | @GeorgeLampro20 | Onboarding too long | Shortened, added social proof, added videos of the app | Conversion +60%, paywall reach 84% -> 94% | not given | 2026-11-06 | https://x.com/GeorgeLampro20/status/2118528925735207368 | MEDIUM |
| App | @_jouv1 | - | Opposite: onboarding 10 -> 30+ screens | "2.5x subscriptions on day one" | 8M users | 2026-11-11 | https://x.com/_jouv1/status/2120559966457098559 | WEAK-MEDIUM |
| App (RC A/B) | @chizzatto | Tried a "review-style" paywall | A/B 2 weeks | Trial start **34.7% -> 21.2% (-39%)** (failure) | 49 vs 52 views | 2025-09-21 | https://x.com/chizzatto/status/1969865708738617367 | WEAK (tiny n) |
| Superwall benchmarks | @jakemor | "Low trial-to-paid" | Fix activation first: measure users who do one real action (start a workout) before cancelling | Benchmarks: trial start ~20%, install to paid 6-7%, trial-to-paid floor 35-40% | Superwall clients | 2026-08-12 | https://x.com/jakemor/status/2087554451779526954 | MEDIUM-STRONG |
| Adapty 78k paywalls (summary) | @david_attisaas | - | - | Onboarding paywalls 0.85% view->paid vs 0.23% later; 44% of trials cancelled within 24h (32% in first hour); offer tests raise LTV more often (60%) than design/copy tests (35%); only 6% of apps personalize by ad source | 78k paywalls | 2026-10-21 | https://x.com/david_attisaas/status/2112895931062636617 | STRONG (Adapty dataset, second-hand) |
| App | @optimalfocus | Trial-end reminder push (written by Claude) said "Then $29.99 a year. Cancel anytime in Settings" | - | Cancellations **30% -> 45%** (failure) | not given | 2026-11-07 | https://x.com/optimalfocus/status/2119032451481686270 | WEAK |
| App | @heylengu | 3 people reached paywall, all opened Apple sheet, 2 backed out | none | - | 3 | 2026-11-06 | https://x.com/heylengu/status/2118606526768107523 | WEAK (shows the sheet drop is common) |
| Billing | @jakemor, @MaxHirsch13, @current_kev | Trial "conversions" fail at billing | - | Jake: ~60% of would-be trial conversions failing in his new app; Max: 99c intro "reduces billing errors 95%" (claim); Kev: "90% billing error, people use Apple Cash with 0 money" | - | 2025-12 / 2026-10 | https://x.com/jakemor/status/2005776957728870751 , https://x.com/MaxHirsch13/status/2116288709397991689 | WEAK-MEDIUM |
| Bug | @Ivan_Borovets (reply) | Users bail at sheet | Hardcoded price string on paywall while the product behind the button differs; "the sheet reads from StoreKit" | - | - | 2026-11-07 | https://x.com/Ivan_Borovets/status/2119166986685239492 | WEAK (but matches R5's check) |

**Pattern:** closing Apple's sheet is normal (~50% of buy taps per Superwall). What helps: (a) the paywall headline uses the user's own onboarding answer, (b) a human "from the founder/team" slide, (c) social proof + app video, (d) plain "No payment due now / then $X" text so the sheet is no surprise, (e) a one-time abandon offer after the sheet is cancelled. Reminder copy that teaches how to cancel can raise cancellations.

---

## Q3. Pricing: weekly vs monthly vs yearly, trial vs no trial, price tests

### Trial vs no trial (the hottest debate on X right now; results conflict)

| App | Who | Change | Before -> after | n | Date | URL | Cred |
|---|---|---|---|---|---|---|---|
| iOS consumer | @guillemcraft | Removed 3-day trial (one free use, then pay) | With trial: 140 trials in 2 weeks, 8 paid; 2% of new users paid within a week. Without: 3 of 230 (1.3%) early. 83% of installs reach paywall, 177 users -> 1 sale. Verdict pending | 230 | 2026-11-05/06 | https://x.com/guillemcraft/status/2118753807433912357 , https://x.com/guillemcraft/status/2118610145689092593 | MEDIUM (so far: no-trial is NOT winning) |
| App | @ar0nbg | 3-week A/B free trial vs no trial | **LTV ~20% higher with 7-day free trial** | not given | 2026-11-08 | https://x.com/ar0nbg/status/2119397573006119086 | MEDIUM |
| App (Turkey) | @s_karapetian | A/B weekly with 3-day trial vs no trial, hard paywall, no close button | No trial: 14.5% pay on the spot (9). Trial: 32.9% start, 23 of 24 cancelled, 1 paid. Same app in US: trial-to-paid ~21% | ~70 views/arm | 2026-09-24 | https://x.com/s_karapetian/status/2103034178186903690 | MEDIUM (country-specific, says US differs) |
| Android app (Brazil) | @gabrielbuzziv | Trial -> hard paywall no trial, R$150/day ads | Download->paid **1.8% -> 5.4%** | not given | 2026-11-06 | https://x.com/gabrielbuzziv/status/2118794660302745854 | MEDIUM (Android, BR) |
| App on Meta | @imedrichards | Added trial (was no trial) | Before: 2-3 paid/day. With trial: 4 trials, 1-2 paid, 3 of 4 cancelled | tiny | 2026-11-11 | https://x.com/imedrichards/status/2120527956330090631 | WEAK |
| Two apps | @maks6361 | Hard paywall + trial -> soft paywall | Subscribers and MRR dropped within ~1 week; switched back, recovered | not given | 2026-11-10 | https://x.com/maks6361/status/2120182779958657468 | MEDIUM (soft paywall failure) |
| App | @MaxHirsch13 | Trial -> no trial | **Refund rate cut in half** ("Apple sides with the app when user knowingly buys") | not given | 2026-08-12 | https://x.com/MaxHirsch13/status/2087679958223057050 | MEDIUM |
| App | @dimtri_G | Paywall test | Trial starts fell 69% while revenue per user and retention went up | not given | 2026-11-08 | https://x.com/dimtri_G/status/2119341173273669963 | WEAK-MEDIUM |
| Fitness (web2wave client) | @HarryLyu | Replaced free trial with $6.99 intro week | **LTV +30%** | not given | 2026-08-11 | https://x.com/HarryLyu/status/2087187469317939353 | MEDIUM (vendor) |
| Hard paywall, yearly 7d trial | @zakisbuilding | - | 6.5% of paywall viewers start trial; 7 of 33 finished trials paid (21%); last 15 only 1 paid; 3 conversions all failed billing | 33 | 2026-10-28 | https://x.com/zakisbuilding/status/2115423227237310936 | MEDIUM |

### Trial length
- 3 -> 7 day trial rated "A": most 3-day cancels happen on day 0. Rule: judge a trial change only after 2x trial length. @itsbongoo, 2,289 new customers -> 112 subs, https://x.com/itsbongoo/status/2120370637814575168 (MEDIUM).
- 7 days beats 3 days on install-to-trial with similar conversion: @MaxHirsch13, https://x.com/MaxHirsch13/status/2087947990581281193 (WEAK, replies report the opposite on other apps).
- RevenueCat data via @jakecastilloooo: trials 17-32 days convert 42.5% median vs 25.5% for 4 days or less; more than half of 3-day cancels on Day 0, ~31% for 30-day. https://x.com/jakecastilloooo/status/2090906846097715397 (STRONG dataset, second-hand).

### Weekly / lifetime / yearly
- Viktor Seraleev: "Weekly plan with a trial works because it's psychologically easier." https://x.com/seraleev/status/2053841846430748844 (WEAK-MEDIUM, opinion from a large portfolio).
- @shipwright_dev: weekly (3-day trial) + lifetime beat previous setup (screenshot, no numbers in text). https://x.com/shipwright_dev/status/2119761703483453592 (WEAK).
- @anulagarwal: Weekly(trial)+Yearly -> Weekly(trial)+Lifetime got more sales (hinted). https://x.com/anulagarwal/status/2119339158191923380 (WEAK).
- @MaxHirsch13: "$29.99 yearly. No monthly. No weekly. No free trial." https://x.com/MaxHirsch13/status/2115578442356031987 (WEAK opinion).
- Cash from yearly is "a loan from future me": @itsbongoo (same thread above).

### Price tests
- @jakemor: ~27% install->trial ("best in class"), testing $30 vs $40 vs $50/yr: **$50 winning but trial cancellation rate too high**. https://x.com/jakemor/status/2010831889221689579 (MEDIUM). Reply @sethmills21: "29 beat 49 in long run" in their app (WEAK).
- @ChadAppDev: raising price increased conversion rate and revenue per conversion $30 -> $35. https://x.com/ChadAppDev/status/2120420072217039300 (WEAK-MEDIUM).
- @Ilia_loviagin (reply): $69.99 refunds 55% vs $99.99 21%, median refund day 2 ("sticker shock"). https://x.com/MaxHirsch13/status/2087679958223057050 (WEAK).
- @macomoroni: 90% see paywall, 4-5% trial with yearly €29.90 (7d trial) + weekly €5.99. https://x.com/macomoroni/status/2094408157212672257 (WEAK, shows low price alone doesn't fix it).

---

## Q4. What actually worked (best before -> after)

1. Optimize Meta for trials, not installs: @andrhlt 0/40 -> trial rate 2-4x Apple Ads; @StevenCravotta ~2x trial rate; @guillemcraft trials 4-5x cheaper on trial-optimized channel; @kenbuildsalone trials only after switching. STRONG (4+ independent founders, same direction).
2. Onboarding "win" before the paywall: @wilterrero 0.1% -> 12% trials. MEDIUM.
3. Personalized paywall headline from onboarding answer: 5% -> 10%. MEDIUM.
4. Founder/team slide: ~2x revenue per user, half the trial cancels (Pep AI). MEDIUM.
5. Transaction-abandon offer after the Apple sheet is cancelled: 25-40% of revenue (Jake Mor). MEDIUM-STRONG.
6. Paid intro instead of free trial for fitness: LTV +30% (web2wave). MEDIUM, vendor.
7. 3 -> 7 day trial: rated A by @itsbongoo. MEDIUM.

### Things that did NOT work (logged failures)
- Meta install campaigns -> 0 trials (andrhlt, kenbuildsalone, guillemcraft, zakisbuilding).
- High-CTR hook ads -> curiosity clicks, not intent (inversorfreak); Audience Network accidental taps (guillemcraft).
- Review-style paywall: trial starts -39% (chizzatto).
- Soft paywall: MRR fell (maks6361).
- Removing trial: not clearly better so far (guillemcraft 2% -> 1.3%), LTV -20% vs trial (ar0nbg). But better in Turkey/Brazil (s_karapetian, gabrielbuzziv).
- $1 trial did not fix 80% payment failures for a Meta US 30+ app (rudybuild).
- Reminder notification teaching how to cancel: cancels 30% -> 45% (optimalfocus).
- Cheaper price alone: €29.90/yr still 4-5% trial (macomoroni).

---

## Rules / compliance flags found on X

- **Free trial toggles are banned** (Superwall's meeting with Apple, Jake Mor, https://x.com/jakemor/status/2062199338688795117 ; Seraleev: since end of Jan 2026 App Review rejects updates with the trial toggle, https://x.com/seraleev/status/2055454858807800197). Walkito: make sure "free week for everyone" is not a switch that changes the product. STRONG-MEDIUM.
- **Transaction abandon offers are allowed**, but no excessive nagging, looping or resurfacing (same Jake Mor thread). That covers an offer after the user cancels Apple's sheet. It does NOT clearly cover an offer right after "Not now" on the paywall (R5 flags 5.6 rejections there), and one founder reports a rejection for transaction abandon. MEDIUM.
- @MaxHirsch13 (Nov 12, 2026): "Get rid of your win-back offers... Stop phrasing your yearly pricing as weekly. Enough with the fake reviews... not worth the risk of getting banned." https://x.com/MaxHirsch13/status/2120714696483328096 . So per-day/per-week framing of the yearly price (web2wave claims +25%) is an App Review risk on iOS; show billed price biggest. MEDIUM.
- "5-star review above the button" (Cravotta): only a real App Store review, word for word. No fake testimonials (FTC).
- Health claims: competitor Prehab ads on X say "fix plantar fasciitis", "get out of pain", "once and for all" (https://x.com/ThePrehabGuys/status/1808886762225205299). Do not copy that wording. No cure/fix/pain-free/timeframe claims.
- Hard paywall approval tip: "App requires a subscription to use" in description got approved (reply in https://x.com/seraleev/status/2054178250746638517). WEAK.

---

## TOP 5 lessons for Walkito

1. **Stop buying installs; buy a deeper event.** Every X case with "Meta installs, 0 trials" was on an install objective, and every fix with numbers was a trial (or deeper) objective with higher CPI. Walkito's 0 of ~64 is the normal outcome of install optimization, not proof the app can't sell. If StartTrial is blocked (R2's health-category issue), use the deepest allowed custom event (paywall plans viewed / onboarding complete). Evidence: STRONG.
2. **Kill Audience Network and high-CTR "hook" creatives.** Audience Network ate 85% of one founder's Meta clicks, and Meta itself says Nov 2026 changes push more spend there with lower conversion per click. V2_mascot "Free videos vs Walkito" is the type of curiosity ad that wins CTR and loses intent. Evidence: MEDIUM.
3. **The Apple sheet drop is normal, so plan for it.** About half of buy taps never complete (Superwall). Make the sheet a non-surprise ("No payment due now", then "$59.99/year after 7 days" right above the button), check the trial product actually shows on the sheet, and consider one compliant offer after a cancelled sheet (not after "Not now"). Evidence: MEDIUM.
4. **Personalize and humanize the first paywall screen.** Put the user's own answer in the headline (5% -> 10%) and add a real founder/team slide (Pep AI ~2x revenue per user, half the cancels). For women 45-65 on Facebook, a real person beats a mascot. Evidence: MEDIUM.
5. **Do not rip out the trial yet.** The no-trial wave on X is loud but the numbers are split: no-trial wins in Turkey/Brazil and on refunds, loses on LTV (-20%) and early conversion in other tests. The 7-day trial on yearly matches the category and RevenueCat's longer-trial data. Test a paid intro or a no-trial plan only after the funnel has a real baseline. Evidence: MEDIUM (conflicting).

## 3 things to test first

1. **New Meta campaign optimized for the deepest allowed event, Audience Network blocked, 3-5 new problem/demo creatives** (real woman 45-65, morning heel pain / on your feet all day, show the 5-minute routine, no claims). Keep $50/day, judge on cost per plans-screen view and per trial, not CPI. Follow @kenbuildsalone: switch to trial optimization as soon as 2-3 real trials exist.
2. **Paywall step 1 rewrite:** headline from the user's onboarding answer (pain area + goal), a short founder/team photo slide, "No payment due now" + exact price after trial on the same screen, visible "Not now". Measure step-1 exit (now 57%) and buy taps per paywall view.
3. **Apple sheet recovery:** verify the trial shows on the sheet with a fresh sandbox account, log the StoreKit result for every buy tap, and A/B a single transaction-abandon offer (for example yearly with trial at a lower price, shown once, never looped). Move any offer off the immediate "Not now" path.

## Where this conflicts with Wave 1A (R1-R6)

- **Trial vs no trial.** R5 says keep the trial on annual (STRONG). X has a loud "never offer a free trial" camp (@MaxHirsch13, @victor_bigfield, @guillemcraft's switch) with refund and billing-error arguments. But X numbers are mixed (ar0nbg +20% LTV with trial; guillem's no-trial is behind so far). Net: X does not overturn R5, but adds "paid intro / no-trial plan" as a valid second test, and R6 also notes web2app health revenue is mostly no-trial.
- **Weekly plans.** R5 says do not lead with weekly for this audience. Seraleev, shipwright_dev and anulagarwal push weekly + trial (+ lifetime). Those are younger/utility audiences; no 45-65 health case. I side with R5 for Walkito, flag as untested.
- **Price.** R3/R5 suggest testing $39.99. X: Jake Mor saw $50/yr beat $30/$40 on install-to-trial (but more cancels), ChadAppDev saw higher price raise conversion, macomoroni had low trials at €29.90. So a lower price is not a sure win; test it as a separate arm, judge on revenue per install.
- **Trial priming screens.** Steven Cravotta's "3-screen trial close" (+30% in one reply's A/B) is exactly what Walkito added in 1.0.11, yet R1 shows 57% leave on step 1. Difference: Walkito's step 1 has no "Not now" and no price, and the audience is older and cold. So the X tactic did not transfer as-is; R1's fix (exit + price on step 1) stands.
- **Offer after decline.** R5 flags the one-time offer after "Not now" as a 5.6 risk. Jake Mor reports Apple allows offers after a cancelled purchase (transaction abandon) with no looping. These are compatible: move the offer from "Not now" to "cancelled Apple sheet", once. One founder still reports a rejection, so it is not zero risk.
- **Per-day price framing.** web2wave (+25%) recommends per-day price as the main number; this conflicts with Apple review practice (billed price must be clearest) and MaxHirsch's warning. Do not do it in-app.
- **Agreement:** R2, R4, R6 (optimize deeper, creative selects the audience, sheet/StoreKit check) all match what X founders report.
