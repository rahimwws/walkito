# G - Checker and judge: what is true, what is the cause, what to change

Agent G, Nov 13, 2026. Read-only. I read the brief, all 8 reports (A, B, C, D, E, F, H, I), the Nov 11 CHECKER and B5 judge, and opened the key sources again myself. Labels: **Confirmed** = I opened the source today and it says this. **Partly** = true with a catch. **Wrong** = the source says something else. **Not re-checked** = I did not reopen it (reason given).

---

## 1. Key claims, checked

| # | Claim (who made it) | Verdict | What I found | Source I opened (Nov 13, 2026) |
|-|-|-|-|-|
| 1 | Cal AI paywall = 3 pages ("try for free" -> reminder -> plans), 3-day trial on yearly only, $29.99/yr shown as $2.49/mo, monthly $9.99 (A, C, I) | **Confirmed** | Screenshot shows "Start your 3-day FREE trial", "$29.99 billed annually, $2.49/mo", Monthly $9.99, "3 days free, then $29.99 per year". App Store IAP list today has $29.99 and $9.99 items (plus $19.99, $5.99, $2.99 extras). | `evidence/C-calai-43-plan-picker.jpg`; https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616 |
| 2 | Cal AI got 20-25% of new users to trial/pay in the first session, mostly from paid creators (A) | **Not re-checked** (founder statement, no data) | Only Zach's own words. Treat as warm-traffic number, never as a benchmark for cold 55+ Facebook installs. | A's sources 1, 13 |
| 3 | Apple briefly pulled Cal AI in Apr 2026, partly for "a second, different subscription purchase flow" after a decline, a trial toggle and weekly price louder than billed price (A, CHECKER) | **Confirmed** | TechCrunch quotes Apple on all three. | https://techcrunch.com/2026/04/21/apples-cal-ai-crackdown-signals-its-still-policing-the-app-store/ |
| 4 | BetterMe Chair Yoga web quiz: age first, no free trial, paid first period (1 wk $6.93 / 4 wk $15.19 / 12 wk $36.99, renews $38.95 every 4 weeks) (B) | **Partly** | Pattern confirmed in B's screenshot (crossed-out prices, "61% OFF", auto-renew text at $38.95). Exact prices change by flow and session: H saw 4 wk $15.19 / 12 wk $25.99 / 24 wk $44.99. Use "small paid first period" as the fact, not the exact numbers. | `evidence/B-betterme-chairyoga-10-paywall-plans.jpg`, H section 2 |
| 5 | Yoga-Go / WalkFit sell via web quiz with a paid first period (B, H) | **Partly** | Yoga-Go quiz is real and age-first, but nobody saw its price (fake email rejected). WalkFit: H walked it ($4.99 trial week, scratch card, 75% off) with screenshots. Yoga-Go price = not verified. | B section 2, H section 2.4 |
| 6 | Competitor Heel Pain Trainer web quiz: no free trial, 1 wk $2.99 / **1 month $4.99 (preselected)** / 3 mo $19.99, then $9.99 a month (E, H) | **Confirmed** | I loaded the live offer page today: same three plans, "You pay $4.99 today... On December 13, 2026 your plan renews at $9.99". Also "Your plan to walk with less pain" headline and "Photos of models" now/with table. | https://www.heelpaintrainer.com/quiz/plan/offer |
| 7 | Adapty US Health & Fitness median paywall view -> trial: **3.24% yearly**, 5.73% all plans; US H&F median yearly price $35.99 (D) | **Confirmed** | Appendix table "B. Paywall view -> trial start, %": H&F US Annual 3.24 (P25 1.21, P75 9.04, P90 15.81); All plans 5.73. Annual price H&F US $35.99 ($24.99-$49.99; P90 $79.99). Catch: "only apps that offer a trial", rates are per view. | https://github.com/vkharlan-adapt/state-of-paywalls-2026-skill (SKILL.md) |
| 8 | Normal Apple sheet completion is 50-71% of buy taps (D, CHECKER) | **Confirmed** | RevenueCat Dipsea test: IAP only, 1,170 taps -> 830 conversions = 70.9%. Superwall founder: "only 50%". Catch: Dipsea is one audio app; Superwall's 50% has no method. | https://www.revenuecat.com/blog/growth/iap-vs-web-purchases-conversion-test |
| 9 | Meta AEM "isn't currently supported for custom event optimisation" on iOS, so a custom `plans_viewed` goal is likely blocked (E) | **Partly** | The sentence is on Meta's page, but it sits right after a list of sales, lead and engagement campaigns with an app destination. The next paragraph says AEM now covers app promotion campaigns and "more app events". So the scope for app promotion is unclear. Practical answer is the same: use a **standard** event (ViewContent / fb_mobile_content_view on the price screen). This contradicts B5's plan (#10, custom `plans_viewed`). | https://www.facebook.com/business/help/721422165168355 ("AEM for app events" section) |
| 10 | US apps can link out to web checkout at **0% commission today**; Apple proposed 15% (5% small business); Supreme Court argument Jan 11, 2027 (E) | **Confirmed** | Apple's own 10-K (Nov 2026): an injunction prevents "any commission or fee" on link-out purchases. Docket: "SET FOR ARGUMENT on Monday, January 11, 2027". Apple's 15/10/5% is a proposal, not set. IAP must stay in the app. | Apple 10-K FY2026; https://www.supremecourt.gov/docket/docketfiles/html/public/25-1311.html ; https://www.forasoft.com/blog/article/how-to-avoid-apple-pay-commission-204 |
| 11 | Multi-page paywalls convert 12.41% vs 9.07% single-page (C, D) | **Confirmed, but weak for us** | Superwall, 40M onboarding opens, Feb-May 2026. Not an A/B: different apps, zero-transaction paywalls removed. | https://superwall.com/blog/new-postmulti-page-onboarding-paywalls-convert-37-better-than-single-page-heres-why |
| 12 | Stompers (walking app) single page beat multi-page by 16% and got more yearly trials (C) | **Confirmed** | Real A/B. Multi-page variant = "feature benefits and a trial reminder before showing pricing", which is Walkito's exact shape. One app. | https://superwall.com/case-studies/stompers |
| 13 | Apple allows **one** offer after a cancelled purchase sheet; looping or nagging is rejected (CHECKER) | **Confirmed** | Superwall's write-up of a meeting with a senior Apple contact: "Showing any offer after a cancelled transaction is allowed... What's not allowed is looping". Not an official guideline, reviewer-dependent. Trial toggles are banned. | https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios |
| 14 | 9 of 31 top apps show a second, cheaper offer after "no", so Walkito should bring one back (I) | **Partly** | The apps do it (Finch, Bend, JustFit screenshots are real). But Apple named "a second, different subscription purchase flow" after a decline as a 5.6 violation (claim 3). Only the after-cancelled-sheet version is safe (claim 13). See settlement A below. | `evidence/I-paywalls-public-*.jpg`, TechCrunch |
| 15 | ScreensDesign: median top earner shows the paywall at tagged step 21 after ~28 screens; 17 hard / 14 soft; all 6 women/easy-fitness quiz apps are hard paywalls (I) | **Partly** | Step lists are public, revenue labels match what I opened (Calm $3M, Prehab $5k). Hard/soft and trial labels are I's own reading of captions, so treat as a good guess, not data. | https://screensdesign.com/apps/calm/ , /apps/prehab-physical-therapy-pain/ |
| 16 | "No pain, physio or foot app makes real money" (I) | **Partly** | True for App-Store-only estimates of the named apps (Prehab $5k confirmed). But App Store data cannot see web revenue (BetterMe Chair Yoga, WalkFit sell on the web), B2B (Hinge Health), or near neighbours (Bend $720K stretching). Fair reading: no consumer pain app has *proven* big App Store subscription money; not proof the niche can't pay. | ScreensDesign pages above; B section 2 |
| 17 | Calm shows ~~$179.88~~ $69.99/yr = $5.84/mo next to monthly $14.99 (I) | **Confirmed** | Screenshot. $179.88 is exactly 12 x $14.99, so it is a real comparison, not a made-up "was" price. | `evidence/I-paywalls-public-1.jpg` |
| 18 | Walkito App Store page still sells a runner app: "longest run in a month - 8.4 km", "Strong feet, Less pain", 4 ratings, "no equipment", "Runners and athletes", 10 IAP lines incl. "Annual $13.49" (F) | **Confirmed** | Live page today: 5.0 from 4 ratings, version 1.0.13 (Nov 12). IAP list includes Lifetime $99.99, Annual $59.99 (x3 names), Monthly $14.99, Annual $13.49, Weekly $7.99, **Annual $44.99**, 3 Months $24.99. | https://apps.apple.com/us/app/walkito-heel-pain-flat-feet/id6813076846 ; `evidence/F-appstore-shot1.jpg` |
| 19 | StretchPartner is the clean, claim-free model to copy (H) | **Partly wrong** | Its "we won't show you invented review counts" line and "no card before your plan" are real. But its homepage also has before/after illustrations, "Day 1 / Week 1 / Week 4: Noticeably more range" and "Gentle stretches to reduce pain". Copy the try-it-now and honesty, not the homepage claims. | https://stretchpartner.com |
| 20 | In 1.0.13 the Day 1 session comes after paywall page 1 (H, section 3) | **Wrong** | `IMG_6944` "Try the first 2 minutes now" (Start Day 1 / Not now) sits **before** paywall page 1. Only people who tap "Not now" there meet Day 1 again after the paywall. F and C have it right. | `walkito-1013-screens/IMG_6944.PNG`, F section 3b |
| 21 | 0 trials from ~25 paywall viewers happens 23-44% of the time at US medians; 0 of 4 sheet completions is 0.7-6% likely (D, E) | **Confirmed (math)** | 0.9676^25 = 44%; 0.9427^25 = 23%; 0.5^4 = 6.3%; 0.291^4 = 0.7%. | own calculation |
| 22 | At $59.99 and $2.35-2.65 per install, break-even on Meta needs ~13-15% install -> trial (D) | **Confirmed (math)** | $59.99 x 0.85 = $51; x 34.3% trial -> paid = $17.50 per trial; $2.35-2.65 / $17.50 = 13.4-15.1%. That is near the top 10% of US H&F yearly paywalls. | D section 3, Adapty appendix |

Not re-checked on purpose: the Fit & Flexible ad running since Nov 30, 2024 and other Ad Library facts (only agent B may load the Ad Library; B's ad IDs are listed in B section 6).

### Disagreements, settled

**A. Second cheaper offer after "no" (I) vs Apple 5.6 and the Nov 11 decision to remove the $29.99 countdown.**
Settled: **no offer after "Not now" or after closing the paywall.** Apple cited exactly that against Cal AI (claim 3). **One** calm offer is allowed after someone opens Apple's sheet and cancels (claim 13), shown once, with no timer, closable in one tap. Better still: put the cheaper option on the main paywall from the start (visible monthly and lifetime), so nobody has to "decline" to see it. The $29.99 countdown stays removed: it had a timer and appeared on the decline path. The competitor's "$2.99 week" after an exit survey is on the web, where Apple's rule does not apply.

**B. One-page vs three-page paywall.**
Settled: **one page for everyone, shipped before ads restart.** The big multi-page number (claim 11) is a cross-app average. The only clean A/B in a walking app (claim 12) found single page wins, and its losing variant had Walkito's exact "benefits -> reminder -> price" shape. Walkito's own data: ~60% left on page 1 when it had no exit. In 1.0.13 the page-1 button says "Try it free" but only opens another page (F, verified in code). And people who did Day 1 already get the one-page view, while the doubters get three pages, which is backwards. The Nov 11 rule ("test single page only if step 1 still loses over 35%") assumed we would measure 1.0.13 first. No Meta user has seen 1.0.13, so there is no baseline to protect: whatever ships before the restart becomes the baseline. Keep the reminder idea as one line in the timeline ("Day 5: we remind you").

**C. Is the main cause the installs goal or the app?** See section 2. Short answer: neither alone. The offer (a $59.99 yearly commitment through Apple at first meeting) to this audience is the biggest single piece.

**D. Free trial vs small paid first period.**
Settled: **keep the free trial on yearly, and add a small paid first month as a second choice inside the app.** Every web funnel for 50-70 year olds that agents walked uses a small paid first payment (B, E, H). StretchPartner is the one exception and uses a card-required free trial. But nobody has an A/B for this audience. Apple supports paid introductory offers ("pay up front" or "pay as you go") on an existing product, so Walkito can test "first month $4.99, then $14.99 a month" without building a web funnel. A (Calo's "7 days free or $2.99 for 1 month" choice) and D (a $1.99 paid first month raised 90-day revenue 30% in a 10-app pool, reported) support trying it. Do not remove the trial.

**E. Web quiz now (B, E, H) vs "No" on Nov 11 (B5).**
Settled: **design it now, build it only if the in-app fixes still give ~0 Meta trials after ~2 weeks or ~50 paywall views.** The pattern is real and the competitor moved in 2 weeks. But: Meta may class a heel-pain domain as health and block Purchase (E, H), Rahim must own all payments (F-1), and RevenueCat's test shows a web step can cut conversion by a third when it is an in-app button (claim 8 source). Ad -> web quiz is a different, better-suited path, but unproven for Walkito.

**F. ATT first (F says move it) vs fine (I says many winners ask at step 1-2).**
Settled: low priority. Moving it after Day 1 is harmless and may lift opt-in a little, but with an installs goal and SKAN it changes little. Do it in the same build, do not test it alone.

**G. Custom `plans_viewed` as the Meta goal (B5) vs AEM wording (E).**
Settled: use the **standard** ViewContent event for the price screen and InitiateCheckout for buy taps. Same signal, no scope doubt (claim 9).

**H. Stop rule: 30 paywall views (B5) vs ~91 (D).**
Settled: both are right about different questions. 0 trials at 30 views does not prove the paywall is below the median (3.24% median needs ~91 views for that). But it does prove you are far from the ~13-15% needed to break even. So: **stop spending at 0 trials after ~30 paywall views; do not conclude "the paywall is broken" until ~90.**

**I. Crossed-out price (I) vs "no fake was-prices" (H, brief).**
Settled: no strike-through "was" price. Use the honest comparison in words: "$59.99 a year, about $5 a month. Paying monthly would be $179.88 a year." That is Calm's anchor without implying a former price.

**J. "How did you hear about us" early (C) vs move after purchase (F, I).** Low impact either way; leave it until there is something bigger to ship.

---

## 2. Verdict on question 1: why 0 trials?

**Plain answer: it is mostly the offer for this audience, then the app, then the Meta goal. Rough split: audience/offer 40%, app 35%, Meta installs goal 25%.** Agent E said 35/30/35. I move weight from the Meta goal to the offer for one reason below.

Evidence for each part:

- **The installs goal did not bring "ghost" installers.** Almost all Meta users finished a 3-10 minute onboarding, and 4 of ~25 who saw the paywall tapped buy (16%, normal or better, per D). Install-goal horror stories are about people who never open the app (E: Ground News, 40-50% never open). That did not happen here. What the goal did do: it found 55+ women on Facebook, who click and install easily (Adapty: 3-4x higher click rate) but tend to buy as web shoppers, not as app subscribers (Rise Science, B, E). And Meta could not learn who pays (Start trial not eligible, ~27% ATT). So the goal picked a hard audience and could not correct itself. That is real, but it is not the main leak. **About 25%.**
- **The app had one clear break and still has gaps.** Page 1 on 1.0.11-12 lost ~60% vs ~25% normal (under 0.1% likely by chance, D and E), because there was no way out except "Try it free". 1.0.13 fixed the exit but not the rest: three pages with a button that doesn't start anything, a cartoon gift box with no foot, no PT face and no personal result on the paywall, and an App Store page that sells a runner app (claim 18). **About 35%.**
- **The offer is the biggest single piece.** All 4 people who tapped buy closed Apple's sheet, and Apple's sheet was checked and is correct ("1-week trial, then $59.99/year"). A normal sheet keeps 50-71% (claim 8): 0 of 4 is 0.7-6% likely. Superwall says most sheet abandons are price uncertainty. The sheet is the first moment the full yearly commitment hits in big type. Every winner for this age group asks for $3-15 today on a short plan, not a year (claims 4-6). The competitor asks $4.99. Walkito's yearly and monthly prices are both above the US H&F 75th percentile (claim 7). And even a fixed app needs ~13-15% install -> trial to break even at $59.99 (claim 22). **About 40%.**

**What is still unknown, honestly:**
- **No Meta user has used 1.0.13.** The biggest app leak (no exit on page 1) may already be mostly fixed. We cannot say how much.
- **The sample is tiny.** At the US H&F yearly median (3.24%), 0 trials from 25 paywall views happens 44% of the time. Pure bad luck is a real possibility for the paywall step. Only the sheet result (0 of 4) and the page-1 exit are clearly abnormal.
- **We don't know why the 4 closed the sheet.** 1.0.13's "What stopped you?" will tell us. If most say "I don't want a subscription" or "costs too much", that confirms the offer piece. If they say "wasn't sure when I'd be charged", that points back to the app.
- **We don't know the Meta health status** of the dataset (E mentions a "full_blocking_app_actions" reading from Nov 7). Rahim has not yet posted Events Manager screenshots.
- **Apple Search Ads users are the missing control.** If search users (high intent) also give 0 trials at ~30 paywall views on the fixed paywall, the app/offer is the problem. If they convert and Meta users don't, it is the audience/channel.

---

## 3. Walkito 1.0.13 vs the winners

| | Walkito 1.0.13 | Cal AI | BetterMe Chair Yoga (web) | Yoga-Go / WalkFit (web) | Heel Pain Trainer (web quiz) | StretchPartner (web) | Calm / Finch (paywall refs) |
|-|-|-|-|-|-|-|-|
| Traffic source | Meta Advantage+ installs; 83% 55+, 75% women, FB | Paid creators first, then "salesy" Meta/TikTok ads; ~18-35 | Meta, creator persona pages | Meta, persona "coach" pages | Meta, 8 new ads since Nov 11 | Not checked | Brand, organic, App Store |
| Where user lands | App Store page | App Store page | Web quiz | Web quiz | Web quiz | Web homepage + quiz | App Store |
| Screens before price | ~30 + Day 1 invite; full price on paywall page 2-3 | ~30-40 | ~47-60 | Yoga-Go 34-36 to email gate; WalkFit ~55-60 | 33 | ~12 | Calm 6-8; Finch ~32 |
| First question | Name (after ATT prompt) | Sex (after demo video) | Age, 40-49 to 70+ | Age bands | Age, oldest band first | Age on homepage, then where stiff | Calm: one goal |
| Personal result before price | Foot Check line (e.g. left ankle bends 6 degrees less); plan card | Goal + date + daily calories | BMI profile + dated weight chart | Goal projection, weight chart | "Built from what you told us" + pain chart | Mobility Score 66/100 + archetype | Calm none; Finch starter plan |
| "Wow" / try-it moment | Move clip at screen 8; Foot Check measurement; optional 2-min Day 1 | Demo video only | None | None | None (move thumbnails) | 60-sec seated move, rate stiffness before and after | Finch hatches a pet |
| Paywall pages | 3 ("Not now" path) or 1 (after Day 1) | 3 | 1 long checkout page | 1 + scratch card | 1 long page | 1 | Calm 1; Finch 3+ |
| Offer | 7-day free trial on yearly; monthly no trial | 3-day free trial on yearly | Paid first period, no trial | Paid trial week / paid intro | Paid first period, no trial | 17-day free trial, card needed | 7-day free trial |
| Prices | $59.99/yr; $14.99/mo; lifetime $99.99 hidden | $29.99/yr; $9.99/mo | First 4 wk ~$15; renews $38.95/4 wk | WalkFit EUR 4.99 wk; 4 wk EUR 9.99 after scratch; renews EUR 39.99 | $2.99 wk / $4.99 first month / $19.99 3 mo; then $9.99/mo | 59.99/yr | Calm $69.99/yr, $14.99/mo |
| Per-month display | None | $2.49/mo | Plan totals | Per day | Per day ("$0.17 a day", misleading) | 5.00/mo | Calm $5.84/mo |
| Crossed-out price | None | "save 75%" badge | Yes, "61% OFF" | Yes, 75% scratch card | None | None | Calm ~~$179.88~~ (12 x monthly) |
| Offer after "no" | "What stopped you?" survey, no offer | Decline offers (cited by Apple, Apr 2026) | Timer; upsells after purchase | Scratch-card discount | Exit survey -> $2.99 week | Email capture pop-up | Calm free tier; Finch "one-time offer" 50% off |
| Social proof | PT reviewer only (4 ratings exist) | 10M users, 4.8 stars, 250K ratings | "490,000 women in their 60s", 2.2M reviews | "30+ million users", 77-year-old review | 6 named testimonials + 3 studies, one negative | "We won't show invented review counts" | Calm brand; Finch reviews |
| Real people vs mascot | Mascot on paywall; real foot clips and PT photo earlier | Real food + phone | Real older models + 3D body avatar | Model photos; AI drama in ads | Model photos, frowning/smiling | Real instructor videos | Calm nature; Finch mascot |
| Payment place | Apple sheet | Apple sheet | Web card form | Web (Solidgate, PayPal) | Stripe + Apple Pay on web | Stripe | Apple sheet |

What the table says: Walkito's onboarding length, Foot Check and free Day 1 are at or above the winners. Where it differs from every winner for this age group is the **ask**: where they pay (web vs Apple), how much they commit today ($3-15 vs a year), and what is on the price screen (their result, real people, a per-month number vs a cartoon in clouds).

---

## 4. Top 10 changes, ranked by expected effect on trials and paid users

Roles: **Rahim** builds, runs ads, owns App Store Connect, RevenueCat, Meta billing and any payment setup. **Rahman** reviews copy and decides. Rahman must not operate payments, be a payments representative or sign payment contracts (F-1).
Effort: S = under a day, M = 1-3 days, L = a week or App Store review.

### (a) In-app, this week (ship as one version before ads restart)

**1. One paywall page for everyone, with a reason to pay on it.**
- What: merge pages 1-3. Dark, like the rest of the app. Top: "{name}, your plan starts with your right heel" + her Foot Check line + a 3-second loop of the Day 1 seated stretch + Dr. Carla's photo and name. Middle: yearly card with the Today / Day 5 reminder / Day 7 timeline, monthly card, lifetime card. One line above the button: "Next, Apple asks you to confirm. $0.00 today." Remove "Most popular", the gift box, the alarm clock, lightning bolts and "Walkito Plus". "No payment due today" once. Make "Start Day 1" the main button on the invite screen.
- Why: page 1 lost ~60% before (D, E); "Try it free" doesn't start anything and the doubters get the longest path (F, verified code); Stompers single-page +16% in a walking app (claim 12); every top health app shows a personal result before the price (C: 11 of 18); the PT and real feet are Walkito's best trust assets and are missing from the price screen (F, I).
- Effort: M. Who: Rahim builds; Rahman approves copy.
- Risk: Apple 3.1.2 (the billed amount must stay the biggest price); FTC ("Most popular" is not true yet). Get Dr. Carla's written consent before using her photo bigger.
- How we'll know: share of paywall viewers who reach a buy tap (target 60%+); buy taps per paywall view; sheet completion (target 50%+ of taps).

**2. Make the first ask smaller, inside the app.**
- What: (a) add an Apple introductory offer on the monthly plan: "first month $4.99, then $14.99 a month"; (b) show lifetime "Pay once, $99.99, no subscription" as a visible card, not behind "Show all plans"; (c) under yearly, smaller than $59.99: "about $5 a month".
- Why: every 55+ web funnel asks $3-15 today, competitor asks $4.99 (claim 6); all 4 buyers closed a sheet that said $59.99/year (brief); lifetime next to yearly +10-15% revenue in winning tests and H&F sells lifetime most (D); "I don't want a subscription" is one of Walkito's own cancel reasons.
- Effort: S-M (App Store Connect intro offer; check eligibility rules for people who used an old offer in the same group). Who: Rahim sets up; Rahman decides prices.
- Risk: Apple intro-offer rules (the sheet will show "$4.99 for 1 month, then $14.99/month", which is honest); no toggles (claim 13).
- How we'll know: which card buy taps go to; sheet completion by plan; "What stopped you?" answers shifting away from price.

**3. Rebuild the App Store page for the real buyer.**
- What: 5 new screenshots: a real woman's feet doing a seated move ("Gentle foot exercises you can do sitting down"), "Made for people on their feet all day", "Exercises reviewed by a physical therapist" with Dr. Carla, "3, 5 or 10 minutes at home", "7 days free, then $59.99 a year. Cancel anytime." Remove "Less pain", the 8.4 km run, the hooded runners, the 41-day medal. Fix "no equipment" (onboarding asks for a band, ball, step) and drop "Runners and athletes" from the top of the description. Remove unused IAP products from sale (the list shows "Annual $13.49"). Consider a Meta custom product page.
- Why: every Meta install passes this page, and it shows a different product to a 58-year-old (claim 18).
- Effort: L (design + review). Who: Rahim; Rahman checks every line.
- Risk: health claims (no "less pain", no outcomes); Apple metadata review.
- How we'll know: App Store page conversion (product page views -> installs) in App Store Connect; fewer people leaving in the first 3 onboarding screens.

**4. Fix the decline path.**
- What: no offer after "Not now". After a **cancelled Apple sheet only**, show "What stopped you?" (already in 1.0.13) and add "I don't know my Apple ID password" and "I want to ask someone first". If the answer is price, show **one** calm alternative once (the $4.99 first month or lifetime), no timer, one-tap close. Log StoreKit result codes (cancelled / failed / pending / not eligible).
- Why: claims 3, 13, 14; Superwall: abandons are mostly price uncertainty (D); HPT does the same on web (H).
- Effort: S. Who: Rahim. Risk: Apple 5.6 if it ever loops or repeats. How we'll know: offer acceptance logged separately; share of cancels by reason.

**5. Copy safety batch (same build).**
- What: remove the "Outlook" pain timeline ("Month 3: Calmer"), "Let's find out why it still hurts" (never answered), "occasional offers" in the notification line, the fire emoji on "Hard", "Running" as the first role; move ATT after Day 1; ask for an App Store rating only after a good Day 1.
- Why: F (verified strings); timeframe claims break the health rules; I (rating prompt helps the 4-rating problem over weeks).
- Effort: S. Risk: low. How we'll know: no copy flags in review; rating count grows.

### (b) Meta and ads

**6. New ads, then restart small with a stop rule.**
- What: retire the "free videos" mascot ad. Make 3-5 ads with a real 50+ person (signed release) or real feet only, doing a seated move at the bed edge: "first steps out of bed", "on your feet all day", and a test hook: "How steady are your feet? Take the 2-minute Foot Check." State the price in the primary text ("7 days free, then $59.99 a year" or "$4.99 first month"). Facebook Feed first. Restart at $20-30/day only when changes 1-5 are live. Stop at 0 trials after ~30 paywall views.
- Why: the mascot ad planted "free" and attracted people expecting free (F, B3); message alone moved cost per trial 4x at Food is Good (E); GOWOD's "What's your mobility score?" test hook (B); price in the ad pre-qualifies (E).
- Effort: M. Who: Rahim makes and runs; Rahman checks every claim, never appears himself.
- Risk: health ad rules (no fix/relieve/pain-free/timeframes, no before/after, no AI people, no fake testimonials).
- How we'll know: paywall views per $; buy taps and trials per paywall view vs the old ad, not cost per install.

**7. Give Meta a better signal, and run a control channel.**
- What: Rahim screenshots Events Manager (data source category, any health restriction, which events are eligible). Send the price screen as standard ViewContent and buy taps as InitiateCheckout, no health data in names or parameters. Run Apple Search Ads exact match ($20/day) as the control.
- Why: claim 9; B5; E.
- Effort: S. Risk: Meta health data rules; never rename events to dodge a restriction.
- How we'll know: a written answer to "restricted or not"; Search Ads trials per 30 paywall views vs Meta.

### (c) Bigger bets

**8. Yearly price test using the product you already have.**
- What: $44.99 yearly (it already exists in the IAP list) vs $59.99, judged on revenue per paywall view, not trial count.
- Why: US H&F median $35.99, 75th percentile $49.99 (claim 7); break-even math (claim 22); Cal AI $29.99, competitor $49.99.
- Effort: S-M. Who: Rahim; Rahman decides. Risk: low. How we'll know: trials x price per 100 paywall views.

**9. Web quiz pilot with a paid first month (only if 1-7 don't move Meta).**
- What: ~18 screens in the HPT/StretchPartner style: age first (oldest band first), which foot, tap-the-sole, "how did the exercises go?", a reaction card ("You said mornings are hardest. Your plan starts with moves you can do sitting on the bed."), PT card + studies with "these studies did not test Walkito", a 60-second seated move with a before/after stiffness rating, plan reveal, email, price ($4.99 first month or similar, and a yearly), "download Walkito and sign in with this email". RevenueCat Web Billing or Stripe, neutral domain and paths, pixel + CAPI with PageView / ViewContent / Purchase only. IAP stays in the app.
- Why: B, E, H: every winner for 50-70 on Facebook takes payment on the web; competitor switched in 2 weeks; Meta gets a purchase signal without ATT.
- Effort: L (5-8 days + account linking). Who: Rahim owns it all, including refunds and support. Rahman stays off payments.
- Risk: Meta may class the domain as health and block Purchase (high); state auto-renew laws (clear renewal date, online cancel, explicit consent box); FTC; F-1.
- Gate: build only if, after ~2 weeks or ~50 paywall views on the fixed app, Meta trials are still ~0 while Search Ads users do convert. How we'll know: cost per paying customer vs in-app.

**10. Borrow trust from people this audience already follows.**
- What: 2-3 paid posts or free codes with PTs, nurses, "over 60" walking creators or Facebook group admins whose audience is women 55+. Cal AI's terms: their price for 4 posts, or a minimum-views clause. Measure with App Store Connect download spikes.
- Why: A: Cal AI's money came from warm creator traffic first; its funnel numbers came from that warmth. B5 already listed clinic and PT outreach.
- Effort: M. Who: Rahim contacts and pays. Risk: FTC disclosure (#ad); no "recommended by" without written OK. How we'll know: trials per install from those spikes vs Meta.

---

## 5. What NOT to copy

- **Before/after:** BetterMe and WalkFit Now vs Goal bodies, HPT's frowning-then-smiling model photos, StretchPartner's before/after illustrations, BitePal's App Store shot.
- **Countdowns and fake urgency:** BetterMe and WalkFit 10-minute timers, "discount reserved", Chair Yoga for Seniors "01:00:00", "offer expires when you exit this screen" (Finch).
- **Scratch cards, gift boxes, spin wheels:** WalkFit, BetterMe, Simple, Yazio, Impulse. Also Walkito's own gift-box mascot on the paywall.
- **AI people:** Yoga-Go's 6-minute AI drama ads and AI "coaches". Use real people with signed releases, or feet only.
- **Body and outcome reveals:** BMI risk profiles, weight-by-date charts, Cal AI's "lose 10 lbs by October 11", Simple's "by Nov 30 others will notice", WalkFit's "By Nov 23 you'll feel it", HPT's pain chart and "walk with less pain" headline, StretchPartner's "Week 4: noticeably more range", Walkito's own "Month 3: Calmer".
- **Fake or inflated numbers:** "490,000 women in their 60s" that changes with the age you pick, "61% OFF" from a made-up regular price, "Most popular" on a plan with one trial ever, HPT's "about $0.17 a day" on a plan that renews at ~$0.33 a day.
- **Apple-risky tricks:** a second offer after "Not now", offers that loop, trial toggles, no close button (Cal AI pages 1-2), weekly price louder than the billed price, removing IAP.
- **Data risks:** diagnosis questions on a page with a Meta pixel (HPT asks "Has a doctor told you what's causing it?"), pain answers in event names.

---

## 6. Open questions for Rahman

1. Ship the one-page paywall (Foot Check line, Dr. Carla's photo, real foot clip, "about $5 a month", visible lifetime) as the version Meta users see first, before ads restart? **Yes / No**
2. Add a paid first month ($4.99, then $14.99 a month) on the monthly plan, next to the free-trial yearly? **Yes / No**
3. Do we have Dr. Carla Shayman's written OK to show her name and photo on the paywall and in ads? **Yes / No**
4. Restart Meta at $20-30/day only after changes 1-6 are live, and stop at 0 trials after ~30 paywall views? **Yes / No**
5. If Meta still gives ~0 trials after ~2 weeks on the fixed app, should Rahim build the web quiz pilot and own all payments for it? **Yes / No**
6. Test the existing $44.99 yearly against $59.99 in the second week? **Yes / No**

---

## Sources opened by G (Nov 13, 2026)

- Adapty State of Paywalls 2026 appendix, SKILL.md table B (US H&F 3.24% annual, 5.73% all plans; $35.99): https://github.com/vkharlan-adapt/state-of-paywalls-2026-skill
- Meta Help, About AEM, "AEM for app events" section: https://www.facebook.com/business/help/721422165168355
- Superwall, multi-page vs single-page (40M opens): https://superwall.com/blog/new-postmulti-page-onboarding-paywalls-convert-37-better-than-single-page-heres-why
- Superwall, Stompers case study: https://superwall.com/case-studies/stompers
- Superwall, Apple's rules (one offer after cancelled transaction, toggles banned): https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios
- RevenueCat, IAP vs web test (70.9% tap -> conversion): https://www.revenuecat.com/blog/growth/iap-vs-web-purchases-conversion-test
- TechCrunch, Apple's Cal AI crackdown (Apr 21, 2026): https://techcrunch.com/2026/04/21/apples-cal-ai-crackdown-signals-its-still-policing-the-app-store/
- Supreme Court docket 25-1311 (argument Jan 11, 2027): https://www.supremecourt.gov/docket/docketfiles/html/public/25-1311.html ; Apple 10-K FY2026 (injunction bars link-out commission); Forasoft (Nov 8, 2026) on Apple's 15/10/5% proposal: https://www.forasoft.com/blog/article/how-to-avoid-apple-pay-commission-204
- App Store pages: Cal AI https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616 (4.8, 376K ratings, IAP list); Walkito https://apps.apple.com/us/app/walkito-heel-pain-flat-feet/id6813076846 (5.0, 4 ratings, v1.0.13, IAP list); Plantar Fasciitis Trainer via iTunes lookup (4.7, 17 ratings, v1.0.6)
- Heel Pain Trainer live offer page: https://www.heelpaintrainer.com/quiz/plan/offer
- StretchPartner homepage: https://stretchpartner.com
- ScreensDesign: https://screensdesign.com/apps/calm/ , https://screensdesign.com/apps/prehab-physical-therapy-pain/
- Evidence images viewed: `evidence/C-calai-43-plan-picker.jpg`, `B-betterme-chairyoga-10-paywall-plans.jpg`, `E-hpt-quiz-06-price-block.jpg`, `I-paywalls-public-1.jpg`, `F-appstore-shot1.jpg`, `walkito-1013-screens/IMG_6947.PNG`
