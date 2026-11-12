# CHECKER: claim checks, contradictions, final list (Walkito, Meta installs but no trials)

Checked Nov 11, 2026. Read only. I opened the cited source (or a better one) for each claim. Labels: VERIFIED / PARTLY (what differs) / NOT FOUND / WRONG.

## Job 1 - Claim checks

| # | Claim | Verdict | What the source actually says | URL checked |
|-|-|-|-|-|
| 1a | Superwall: about 50% of buy taps complete Apple's sheet | VERIFIED | Jake Mor (Superwall founder): "On average only 50% of users who start an In-App Purchase actually end up completing it." Same line repeated on the Appfigures video. | https://x.com/jakemor/status/1805580424153846195 (read via api.fxtwitter.com), transcripts-c3/DRei11LUYlE |
| 1b | Offers after a cancelled sheet = 25-40% of revenue | PARTLY | 25-40% is from "2 apps I made", June 2024, one founder. Broader numbers are lower: Paywall Index (Oct 2026, 3,313 paywalls) says an external abandon offer adds about 18% revenue per onboarding view; a Superwall study of 18 companies put it at 17% of revenue. Use 15-20% as the planning number, not 25-40%. | https://thepaywallindex.substack.com/p/the-anatomy-of-the-best-performing , https://revenuedot.app/blog/paywall-exit-offers |
| 2 | RevenueCat test: 71% of taps became a trial or purchase (830 of 1,170) | VERIFIED | Table: IAP only, 1,170 CTA taps, 830 initial conversions, 70.9%. Trial starts alone: 768 (65.6%). Caveat: one app (Dipsea, a stories/audio app), US users, not cold Meta health traffic. | https://www.revenuecat.com/blog/growth/iap-vs-web-purchases-conversion-test |
| 3 | About 1 in 4 users leave paywall screen 1 (3,313 paywalls) | VERIFIED | "It's also the leakiest screen: about 1 in 4 users leave here." 3,313 onboarding paywalls, 1,470 apps, Sep 21-Oct 21, 2026. Also: buy button on screen 1 = 8.8% vs 13.6%; reminder screen 14.8% vs 8.7%. Correlation, not A/B. 95% of these paywalls offer a trial. | https://thepaywallindex.substack.com/p/the-anatomy-of-the-best-performing |
| 4a | Adapty: other paid channels 1.45% install-to-trial | VERIFIED | 3.66% Apple Ads vs 1.45% other paid; install-to-paid 1.92% vs 0.91%. 8,000+ apps, 2025 data, all categories, global. Not H&F or US specific. | https://adapty.io/apple-ads-for-subscription-apps/ , https://uploads.adapty.io/apple_ads_for_subscription_apps_2026.pdf |
| 4b | RevenueCat 2026: H&F 6.9% download-to-trial | VERIFIED | H&F D30 download-to-trial median 6.9% (top performers above 23%). Counts only trial-based apps, all traffic sources mixed. | https://www.revenuecat.com/state-of-subscription-apps |
| 4c | Adapty H&F 9.76-9.8% paywall-view-to-trial | VERIFIED | Median 9.76% (P25 4.11%, P75 17.39%). Same table: no-trial apps convert 7.98% of paywall viewers to paid vs 6.10% for trial apps, and a no-trial payer is worth $42.02 vs $35.02 in year 1. | https://adapty.io/assets/uploads/docs/health-and-fitness-benchmarks-report.pdf |
| 4d | RevenueCat hard paywall 10.7% vs freemium 2.1% D35 | VERIFIED | Day 35 download-to-paid 10.7% vs 2.1% (2025: 12.1%). RPI day 60 $3.09 vs $0.38. Yearly retention 27% vs 28%. Cross-app comparison, not randomized. | https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026 |
| 5 | Meta health and wellness category blocks start trial / subscribe / purchase / registration while installs keep working | PARTLY | Meta confirms apps get a category and "Health and wellness" can get "Restriction on certain standard events: restricts the sharing of specific mid and lower funnel events". Meta does not publish the exact list. Third parties say purchase, registration, bookings are blocked, while upper funnel events (page view, view content) and reviewed custom events still work. "Installs keep working" is not guaranteed: one Reddit app kept installs, but a Meta dev forum app with the health flag had app_events_killswitch=true, which dropped ALL events including installs. Whether Walkito is flagged is unknown until someone opens Events Manager. | https://www.facebook.com/business/help/1402913027039332 , https://www.facebook.com/business/help/511197658391698 , https://searchengineland.com/meta-ads-restrictions-health-wellness-campaigns-453094 , https://developers.facebook.com/community/threads/1383704120411622 |
| 6 | Apple rejects discount/second offers right after closing a paywall or cancelling the sheet (5.6; Glowly May 2026; Cal AI Apr 2026) | PARTLY | Two different cases. (1) Offer after DECLINING the paywall: Cal AI, Apple told TechCrunch one 5.6 issue was "prompt users who declined the first subscription offer with a second, different subscription purchase flow". AppCap and devoria list "exit offer that pops up when you close the paywall" as a common 5.6 trigger. This is real risk. (2) Offer after CANCELLING Apple's sheet (transaction abandon): Superwall's June 3, 2026 meeting with Apple says one offer after a cancelled transaction is allowed (any price), looping/resurfacing/no-escape is not, and it is up to the reviewer. Glowly AI (May 2026): Apple gave the dev 7 days to change its transaction-abandon prompt; source is an X trending summary, so WEAK. Net: decline-path offers = avoid. One abandon offer after a cancelled sheet = allowed on paper but reviewer-dependent; safest form is the same yearly at the same renewal price with a longer trial, shown once, closable in one tap. | https://techcrunch.com/2026/04/21/apples-cal-ai-crackdown-signals-its-still-policing-the-app-store/ , https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios , https://x.com/i/trending/2055566112859861134 , https://devoria.fr/en/blog/guideline-5-6-paywall-app-store-rejection , https://useappcap.com/blog/app-store-compliance-best-practices , https://gtmsauce.com/episodes/2026-08-22-the-highest-performing-paywalls-for-apps |
| 7 | Apple allows US apps to link to web checkout since May 1, 2025, no fee | PARTLY | Apple news May 1, 2025: guidelines 3.1.1, 3.1.1(a), 3.1.3 updated for the US storefront, no entitlement needed. Apple is "not presently charging any commission" (Apple filing, Jul 2026). But: the Ninth Circuit (Dec 11, 2025) said Apple may later charge a cost-based commission once the district court approves one, and the Supreme Court took the case (cert granted Jun 30, 2026). Also non-reader apps must still offer IAP alongside the link (Cal AI was pulled for removing IAP). So "no fee" is true today but not locked in. | https://developer.apple.com/news/?id=9txfddzf , https://9to5mac.com/2025/05/01/apple-app-store-guidelines-external-links , https://cdn.ca9.uscourts.gov/datastore/opinions/2025/12/11/25-2935.pdf , https://www.courthousenews.com/wp-content/uploads/2026/08/motion-stay-epic.pdf |
| 8 | Bend: free 1 routine/day, trial after first routine, $500K-1M/month | VERIFIED (revenue is an estimate) | Help center: free version limits you to one routine a day; "After you finish your first routine, Bend offers you the trial" (7 days, yearly). Sensor Tower: last month $500K-$1M worldwide iOS. Other trackers range $117K-$900K. | https://support.bend.com/hc/en-us/articles/49740475099156 , https://support.bend.com/hc/en-us/articles/49750038371476 , https://app.sensortower.com/overview/1513988468?country=US , https://www.airbridge.io/en/app-revenue/bend |
| 9 | Plantar Fasciitis Trainer: launch Oct 16, $7.99/wk, $49.99/yr, trial on monthly | PARTLY | Prices and trial VERIFIED on the US store page: Weekly $7.99, Monthly $9.99, Yearly $49.99, Yearly Special Offer $19.99, Yearly Trial $19.99; "Eligible new subscribers can try the monthly plan free for 7 days". Launch date Oct 16 NOT FOUND in my checks (store page shows no date). Note: its subtitle "Relieve Foot Pain & Stiffness" is a claim Walkito should not copy. | https://apps.apple.com/us/app/id6819459270 |
| 10 | Zumba: $14.99/mo no trial + $99/yr 7-day trial, annual share 30% -> 60% | VERIFIED | GTM Sauce episode notes: $99/yr with 7-day trial, $14.99/mo no trial; annual share 60%, up from "about 30%, even a little bit less"; annual trial-to-paid 56%, up from "in the 30s". Caveat: host's recap conflicts (25% monthly upfront), several changes at once, strong brand. | https://gtmsauce.com/episodes/2025-08-06-optimizing-funnels-pricing-and-retention-at-zumba-nicole |
| 11 | Faithful: install-to-paid 2.6% -> 7.21% with purchase-optimized Meta and 3 funnel events | PARTLY | Numbers are right (2.6% Sep, 7.21% "this month", May 2026) and he sends registration, content view (paywall), initiated checkout, purchase. But the jump came over ~8 months from many changes (26-screen onboarding, pricing tests, coaching-call screen). The events change alone is credited with "cost per result dropped by like 50%", not the 2.6 -> 7.21. Also the app has NO trial ($59.99/yr). | transcripts-c3/4JtMp7Hkwb8 (https://www.youtube.com/watch?v=4JtMp7Hkwb8) |
| 12 | Adam Lyttle 4% -> 28% after letting users try before the hard paywall | PARTLY | Numbers right ("Only 4% of downloads... Now, conversions are 28%... seven times"). But the change was: let the user do the core action, then LOCK THE RESULT behind the paywall. Still a hard paywall, just placed at the payoff moment. It is a smile/photo app, not fitness. Supports "show value inside onboarding, then ask", not "free tier". | transcripts-c3/Owz0rWi-yz4 (https://www.youtube.com/watch?v=Owz0rWi-yz4) |
| 13 | AARP: fewer than 1 in 5 adults 50+ ever paid for a health app | VERIFIED | PDF: "fewer than 1 in 5 have ever paid for an H&W app. Most are willing to deal with ads for apps that are free (57%)." Base: 50+ adults already receptive to health apps, Apr 2024. | https://www.aarp.org/content/dam/aarp/research/topics/health/prevention-wellness/health-app-users.doi.10.26419-2fres.00822.001.pdf |

### 14. Statistics (recomputed, binomial, independent users)

| Question | Rate assumed | Result |
|-|-|-|
| P(0 trials from 3 buy taps) | 50% sheet completion (Superwall) | 12.5% |
| same | 71% (RevenueCat, 70.9%) | 2.4% |
| P(0 trials from 35 plans-screen views) | 9.8% (Adapty H&F median per paywall view) | 2.7% (P of 0 or 1 = 13%) |
| same | 5.7% (derived US H&F) | 12.8% (P of 0 or 1 = 40%) |
| P(0 or 1 trial from 65 installs) | 1.45% (Adapty other paid) | 75.7% (P of 0 = 38.7%) |
| same | 6.9% (RevenueCat H&F) | 5.6% (P of 0 = 1.0%) |

Extra checks: with the tester removed (64 installs, 34 plans views, 0 trials): P(0) = 1.0% at 6.9%, 39% at 1.45%, 3.0% at 9.76% per plans view. P(0 from 50 paywall views) = 0.6% at 9.76%, 5.3% at 5.7%. R4's math is correct.

How to read it:
- The 3 taps are not 3 independent tries. be965d1e tapped 3 sheets, and c0763b1e logged `plan_sync_failed` and no cancel event, which looks like an error, not a choice. So 0/3 is "unlikely if the sheet works (2-12%)", enough to justify a sheet audit, not proof of a bug.
- Against paid-social averages (1.45%) the result is normal. Against H&F medians it is clearly below normal. Both are true: the traffic is cold AND the funnel is weak. A paywall-view benchmark (9.76%) is the fairer yardstick, because it removes the onboarding drop; it still says 0 of 50 is a 0.6% event.

### R1 tester check (Czechia)

VERIFIED from R1's own evidence (STRONG for "not a US Meta customer"). The trial user f0927d97 shares device model, iOS build (26.6.2), screen width and Europe/Prague time zone with two other installs the same morning, each with a different source answer (App Store, Facebook, TikTok). RevenueCat country = Czech Republic, IP = T-Mobile CZ, the campaign is US only, onboarding took 97 s (Meta median 356 s), and the user opened the promo code sheet and tapped 8 plans in 13 s. That pattern is a person testing the flow. Caveat: I did not re-open RevenueCat or PostHog; the conclusion rests on R1's pulled data. Also note the "Facebook" install b9c5b0f7 on the same phone must come out of the Meta count, as R1 says (real Meta = 64 / 49 / 34 / 3 taps / 0 trials).

Side finding: walkito.site/about (updated Oct 27, 2026) says "a yearly or weekly subscription", but the brief says the hidden plans are monthly and lifetime. Rahim should check which is live, because the Apple sheet, the site and the paywall must all say the same thing.

## Job 2 - Contradictions (which side the evidence supports)

**(a) Price and buy button on paywall step 1, or not?**
Supports: NO buy button and no price block on step 1, but a visible exit and "No payment due now".
Why: the biggest dataset (Paywall Index, 3,313 paywalls, checked) shows a buy button on screen 1 converts 8.8% vs 13.6%, and the top paywalls open with a no-price promise. Against it: one Stompers single-page win (+16%, one A/B, not re-checked) and R1's idea. Walkito's step 1 loses 57% vs a normal ~25%, but it has no "Not now", and these users were promised "Free videos" by the ad, so the leak is more likely the forced choice plus the ad mismatch than the missing price. Keep the price clear and big on step 3 above the button (Apple 3.1.2). A one-line "7 days free, then $59.99/year" on step 1 is a fair later A/B, not the default.

**(b) Free session / try-first before the paywall, or paywall in onboarding?**
Supports: keep the paywall at the end of onboarding as the first ask; put the free Day 1 session behind "Not now" (already built); test a 60-90 s exercise inside onboarding as a later A/B.
Why: hard paywall 10.7% vs freemium 2.1% D35 (verified, correlation), 82% of H&F trials start on Day 0, Zumba moved its paywall earlier and conversion rose. The try-first wins are narrower than claimed: Lyttle kept a hard paywall and locked the result (verified), Bend is freemium with ads and huge organic reach, Vmobify is an agency claim. Walkito's 4 "Not now" users all finished Day 1 and 0 bought, too small to judge. A full free tier is not supported for a Meta-paid app now.

**(c) Keep the 7-day trial, remove it, or no-trial monthly?**
Supports: keep the 7-day trial on yearly AND show a no-trial monthly as a visible second plan. Do not remove the trial now.
Why: 109 of 127 yearly paywalls carry a trial (Paywall Index), H&F is the category with the fewest no-trial paywalls (18.3%, RevenueCat via Sahha), Zumba's annual-trial + monthly-no-trial setup is verified. Counter-evidence is real: Adapty H&F shows no-trial apps convert 7.98% vs 6.10% of paywall viewers and earn more per payer, and AARP/FTC show older adults distrust "free trial". But Walkito has 0 trials, not bad trial-to-paid, so the trial is not the proven problem. Change one thing at a time; a no-trial test comes after the sheet and step 1 fixes.

**(d) Meta goal: installs vs Complete tutorial vs plans-viewed custom event vs Start trial vs Subscribe/Purchase, given the health label?**
Supports: first check Events Manager. Then optimize for the deepest event that is allowed AND has volume: today that is a neutral custom event at the price screen (for example `plans_viewed`) or the standard ViewContent on the paywall. Not installs, not Complete tutorial.
Why: Meta's own rule is an event done by 1-30% of users with ~50 results a week; at $50/day (~20 installs/day) plans viewed (~50% of installs) clears that, buy taps (3 of 64) and trials (0) do not. Complete tutorial is done by 97% on the new version, so it carries no signal (C5). Health restrictions hit mid and lower funnel standard events (purchase, registration, likely start trial/subscribe), while upper funnel and reviewed custom events stay usable (Meta help + Search Engine Land, verified). Start trial / Subscribe / Purchase are the right goal later, when allowed and when there are 2-3 real trials a day. Faithful's extra funnel events are worth copying (verified, but its 2.6 -> 7.21% came from many changes). Never put health answers in event names or parameters, and do not rename blocked events to dodge the restriction (Meta policy).

**(e) $59.99 vs $39.99-49.99?**
Supports: keep $59.99 for the first fix week, then A/B $39.99 or $49.99. Price is not the first problem.
Why: most users leave before seeing any price (13 of 23 at step 1). H&F annual median is $39.99, P75 $56.99 (Adapty, verified), so $59.99 is high but inside the normal range. The direct price tests are mixed and not health (SellRaze $59.99 -> $44.99 ARPU +10%; Reddit $29.99 -> $49.99 no drop). Judge any price test on trials x price, not trials alone. $29.99 breaks Meta math (R5).

**(f) Single-page vs multi-step paywall?**
Supports: keep the 3-step "promise -> reminder -> offer" shape, but fix step 1. A/B against one honest single page only if step 1 still loses over 35% after the fix.
Why: multi-page 9.3% vs single 6.3%, 3-step promise/reminder/offer median 17.8%, reminder screen 14.8% vs 8.7% (Paywall Index, verified, correlation). Vahe reports +20-40% for 3-step. Stompers +16% for single-page is one case. Walkito's 57% loss on step 1 means its step 1 is broken, not that multi-step is wrong.

**(g) Does Apple Search Ads make money?**
Supports: unproven. Use it as a cheap diagnostic of the paywall with high-intent users, not as a profit plan.
Why: Adapty (verified) puts US H&F Apple Ads install-to-paid at 7.8%, the top US category, and Apple Ads converts 2.5x better than other paid at the trial step. But GainFrame lost money on Apple Ads (~$190 per extra payer), and US CPI ~$3.77 is higher than Meta. One 65+ fitness case found buyers only from search. Good test, unknown ROI.

**(h) Web-to-app funnel now or later?**
Supports: later.
Why: an in-app web button cut initial conversion by a third at Dipsea (verified: 27.0% vs 18.1%) and 25-35% at Zumba (verified). An ad-to-web quiz funnel can work for 40-60 year olds, but it needs Stripe or web billing, a California-compliant auto-renew and cancel flow, neutral URLs and events (the web domain can also get the health label), and Apple's link-out fee is still in court. Rahman is on F-1 and must not run payments, so Rahim would own the whole thing. Not worth it before the in-app funnel works.

**(i) Weekly plans for this audience?**
Supports: no weekly as the lead plan.
Why: the weekly wins (Adapty 9.8% vs 1.8% install-to-trial, Lyttle, alarm apps) are mostly younger, single-use utility audiences. Fitness revenue is about two-thirds yearly, AARP says fewer than 1 in 5 adults 50+ ever paid for a health app and cost is the biggest barrier, and $7.99/week is about $415/year. A weekly as a hidden or anchor option is a low-priority test at most. Check what walkito.site says ("yearly or weekly") against what is live.

## Job 3 - Final list for Walkito

Roles: Rahim builds the app, runs Meta and Apple Ads, and owns App Store Connect, RevenueCat and any payment setup. Rahman reviews and decides. Rahman is on an F-1 visa: he must not operate payments, sign contracts or be added as a payments or billing representative anywhere.
Risk tags: [APPLE] App Review, [FTC] US consumer law, [META] Meta policy, [HEALTH] health-claim rules.

### TOP 10 (ranked by evidence x impact x low cost x low risk)

1. **Audit Apple's purchase sheet and log the real outcome.** Fresh sandbox Apple ID and a real new Apple ID on a device: does the sheet show "1 week free" for `walkito_annual_trial` on the US storefront? Check intro-offer eligibility (anyone who used an old intro offer in the same subscription group gets the full price), fix `plan_sync_failed`, and log StoreKit results (cancelled vs failed vs not eligible vs pending). Only show "free week" wording to eligible users. [APPLE, FTC: the screen must match what is charged]
   - Reports: R1, R4, R5, C1, C2, C4. Evidence: 0 of 3 taps is 2-12% likely if the sheet works (recomputed).
   - Who: Rahim builds. Rahman checks the test video.
   - Judge in 3-7 days: zero `plan_sync_failed`; sheet completion at or above 50% of buy taps; every cancel has a logged reason code.

2. **Clean the numbers before judging anything.** Tag internal and test devices (`is_internal`) and drop them; remove the Czech tester and its "Facebook" install; log the screen where people leave in the first 3 onboarding screens; split every funnel by app version.
   - Reports: R1, R4. Evidence: STRONG (the only trial was a test; ~35% of installs leave before the source question).
   - Who: Rahim. Rahman reviews the dashboard.
   - Judge: one PostHog funnel by version and source, with internal users excluded, that both agree on.

3. **Fix paywall step 1.** Keep promise -> reminder -> offer. Step 1: "Try Walkito free for 7 days. No payment due now.", no buy button, plus a visible "Not now". Step 3: billed price biggest ("$59.99/year after 7 free days"), a Today / Day 5 reminder / Day 8 billing timeline, real App Store reviews only, the user's own goal in the headline. [APPLE 3.1.2, FTC]
   - Reports: R1, R5, C1, C3, C4, C5. Evidence: STRONG (normal step-1 loss ~25%, ours 57%; reminder screen 14.8% vs 8.7%).
   - Who: Rahim builds. Rahman approves copy.
   - Judge: step-1 exit under 35%; 60%+ of paywall viewers reach plans; buy taps per plans view up.

4. **Show a no-trial monthly as a visible second plan; keep the trial on yearly.** For example yearly $59.99 with 7-day trial pre-selected, monthly $12.99-14.99 no trial below it, lifetime behind "Show all plans". No weekly-calculated price louder than the billed price. [APPLE 3.1.2]
   - Reports: R5, C3, C4, C5. Evidence: MEDIUM (Zumba verified; Adapty H&F no-trial data).
   - Who: Rahim sets up products in App Store Connect and RevenueCat. Rahman decides prices.
   - Judge: any paid starts at all; share of buy taps on monthly; no rise in step-3 exits.

5. **Take the one-time offer off the "Not now" / decline path.** If an offer is kept, show it only once after a cancelled Apple sheet, same yearly at the same renewal price with a longer trial (for example 14 days), closable in one tap, never repeated, never called "one time" unless it truly is. [APPLE 5.6 risk even then; FTC fake urgency]
   - Reports: R5, C1, C3, C4. Evidence: STRONG for the decline-path risk (Cal AI, verified); MEDIUM for abandon offers (Superwall meeting vs Glowly).
   - Who: Rahim builds. Rahman decides whether to keep any offer.
   - Judge: next App Review passes; abandon-offer acceptance logged separately from main trials.

6. **Open Meta Events Manager and read the facts.** Data source category and any restriction notice; the exact "Check app eligibility" message for StartTrial; whether installs and StartTrial come through the same integration; Ads Manager breakdown by age, gender and placement for Nov 9-11. [META]
   - Reports: R2, R6, C2, C4. Evidence: rules STRONG, Walkito's status unknown.
   - Who: Rahim (account owner). Rahman can review screenshots.
   - Judge (1 day): written answer to "is Walkito health-restricted, and which events can be optimized?"

7. **Hold Meta spend small until 1-5 ship, and use a stop rule.** Do not scale the install campaign. After the fixes, run to about 30-50 paywall views per version: 0 trials at 30 views is under 5% likely for a median paywall, so stop and fix rather than spend more.
   - Reports: R4, R2, C5. Evidence: STRONG (math checked).
   - Who: Rahim runs ads. Rahman sets the budget cap.
   - Judge: cost per paywall view and trials per 30 paywall views, by version.

8. **Replace the "Free videos" mascot ad.** Cap V2_mascot. Run 3-5 statics and short videos for the real buyer: a real woman 45-65 (with signed consent) doing a seated foot stretch, "on your feet all day" or morning heel stiffness hook, "subscription app, 7 days free" stated plainly, Facebook Feed first. [HEALTH: no cure, fix, pain-free or timeframe claims; label dramatizations; META ad policy]
   - Reports: R2, R3, C1, C2, C4, C5. Evidence: MEDIUM (creative is the targeting; 10 of 15 onboarding leavers said nothing hurts).
   - Who: Rahim makes and runs. Rahman reviews every claim.
   - Judge: plans-screen reached per install and buy taps per install vs V2_mascot, not CPI.

9. **Move Meta's goal off installs.** Send neutral-named funnel events (paywall shown as ViewContent, a `plans_viewed` custom event, buy tap as InitiateCheckout, plus StartTrial and Subscribe). Start a new ad set optimized for the deepest allowed event that gets ~50 a week (likely plans viewed). Switch to StartTrial or Subscribe when allowed and when there are 2-3 real trials a day. [META: no health answers in events, no renamed-event workarounds; FTC health data rules]
   - Reports: R2, R6, C3, C4, C5. Evidence: MEDIUM.
   - Who: Rahim. Rahman approves which data is sent.
   - Judge: cost per plans view and per buy tap vs the install ad set; expect learning-limited in week 1.

10. **Apple Search Ads exact-match test, about $20/day for 7 days** ("plantar fasciitis exercises", "heel pain", "flat feet exercises"). Purpose: check the fixed paywall with high-intent users. [APPLE ad rules on health keywords and claims]
   - Reports: R4, R6, C4. Evidence: MEDIUM (Adapty US H&F 7.8% install-to-paid, verified; profit unproven).
   - Who: Rahim sets up and pays through the business account. Rahman approves the budget.
   - Judge: install-to-trial and cost per trial vs Meta. If search users also give 0 trials over ~30 paywall views, the paywall is the problem.

Next tests after these (not top 10): yearly $39.99 or $49.99 vs $59.99; a 60-90 s exercise inside onboarding before the paywall; fully no-trial yearly; a web quiz funnel (Rahim-owned, legal review first).

### NEVER list

- Never claim cure, fix, "pain-free", "relieve pain" or results in a set time, in ads, store text or paywall. [HEALTH, FTC]
- Never use fake or paid-for reviews, made-up testimonials, or "doctor approved" unless a real, named clinician approved it in writing. [FTC, APPLE 5.6]
- Never use fake urgency: countdowns that reset, "one-time" offers that come back, "limited spots", spin wheels. [FTC, APPLE 5.6]
- Never show an offer right after "Not now" or a paywall close, loop offers, or use a close button that opens another offer. [APPLE 5.6]
- Never use a free-trial toggle, hide the billed price, or show a weekly/monthly breakdown louder than what is billed. [APPLE 3.1.2]
- Never send health answers (pain area, conditions), names or emails to Meta, and never rename events to slip past Meta's health restriction. [META, FTC Health Breach Notification Rule; BetterHelp and GoodRx were fined for this]
- Never let Rahman operate payments (Stripe, web billing, ad billing), sign contracts, or be listed as a payments representative. Rahim owns these. [F-1 visa]
- Never add a "pay on the web" button inside the app now, and never remove IAP if web checkout is added later. [APPLE 3.1.1]
- Never scale the Advantage+ install campaign hoping it will "find buyers" before the funnel converts.
- Never treat the in-app survey answer as attribution, or count internal test installs as customers.
