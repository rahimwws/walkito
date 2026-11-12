# R5: Offer and pricing for cold Meta users (Walkito, Nov 11, 2026)

Scope: which offer and plan setup converts cold paid-social users in Health & Fitness (H&F), especially older users. Read only. No accounts touched.

Evidence levels: STRONG = data, several sources. MEDIUM = one credible source with numbers. WEAK = opinion or no numbers.

Note: earlier report `walkito-paywall-review/research/P2-paywall-psychology.md` and `P5-rules-and-dark-patterns.md` already cover trial timeline, decoys, per-day pricing and most Apple rules. This report adds the offer and price numbers and does not repeat those in depth.

---

## 0. First, the money math (why price and trial rate are tied)

Revenue per trial on the first payment = price x 0.85 (Apple small business fee) x trial-to-paid. Using the H&F median trial-to-paid of 35% (Adapty H&F 2026, see 1.1):

| Annual price | Revenue per trial | Install-to-trial needed to break even at $2.48 CPI |
|---|---|---|
| $59.99 | $17.85 | 13.9% |
| $39.99 | $11.90 | 20.8% |
| $29.99 | $8.92 | 27.8% |

So a price cut only pays if it raises the trial rate by a lot (about +50% for $59.99 -> $39.99). Renewals are ignored here, and H&F annual first renewal is low (median 15.9%, Adapty), so year 1 is most of the money. This matches the team's $12-19 per trial target. Evidence: MEDIUM (my calculation on STRONG benchmark inputs).

Sample size warning: Walkito gets about 11-12 plan-screen views a day from Meta. To tell 5% from 10% trial rate with normal confidence you need roughly 400+ viewers per arm. A true A/B test of small price changes is not possible at $50/day. Only test big, structural changes, run them one after another (one week each), and read them as direction, not proof.

---

## 1. Paywall model: hard with trial vs hard without trial vs soft vs freemium vs "first days free"

### 1.1 Hard paywall with trial vs without trial (H&F specific)

| Finding | Numbers | Level | Source |
|---|---|---|---|
| In H&F, no-trial apps get slightly more payers per paywall view and more revenue per payer | No-trial apps: 8.0 payers per 100 paywall views, D365 $42.02 per payer. Trial apps: 6.1 per 100, $35.02 per payer. Trial apps sell more annual (63% vs 42%) | STRONG (Adapty, App Store, 7 Tier-1 markets, Sep 2025 to Aug 2026) | https://adapty.io/assets/uploads/docs/health-and-fitness-benchmarks-report.pdf |
| But for annual plans in H&F, trials win on 12-month LTV | Adapty: "Annual plans with trials outperform direct annual purchases" in Utilities, H&F, Education. H&F users buy on Day 0 or Days 4-7, "they want to see results before committing" | STRONG (aggregate, $3B revenue, 16k apps) | https://adapty.io/blog/free-trial-vs-direct-purchase-subscription-apps/ |
| H&F trial funnel medians | Paywall view to trial 9.76% (p75 17.4%). Trial to paid 35.3% (p75 45.3%) | STRONG | Adapty H&F PDF above |
| Install-to-trial in North America is the highest region | 14.5% vs 7.6-10.2% elsewhere (all categories) | STRONG | https://adapty.io/blog/free-trial-vs-direct-purchase-subscription-apps/ |
| Removing the trial can double LTV per payer, but in a category where competitors all had the same offer | LTV per payer $35-40 -> over $60 in one month (one new app, six no-trial tiers) | MEDIUM (one app, not H&F) | https://www.revenuecat.com/blog/growth/should-your-app-stop-offering-free-trials |
| Trial only on the annual plan (other plans no trial) | Moonly: paywall conversion +39%, revenue per 100 installs +47%, ARPPU +5% | MEDIUM | https://adapty.io/case-studies/moonly |
| Adding a 7-day trial to a yearly plan | Stardust: +131% paywall conversion ($24.99/yr) | MEDIUM | https://liftarchive.com/apps/tests |

Read for Walkito: keep the trial on the annual plan. The H&F data says trial helps annual LTV, and Meta older users are a "need to see it first" group. The no-trial advantage in the H&F table is mostly people buying cheaper monthly plans (37% of no-trial buyers pick monthly).

### 1.2 Freemium and soft paywalls

| Finding | Numbers | Level | Source |
|---|---|---|---|
| Hard paywall converts about 5x freemium, same 1-year retention | D35 download-to-paid 10.7% vs 2.1%. Yearly retention 27% vs 28%. RPI day 60 $3.09 vs $0.38 | STRONG | https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026 |
| Switching hard to freemium can crash conversion | Subscriber conversion fell more than 50%, reversed after 2 weeks (Phil Carter client) | MEDIUM | https://liftarchive.com/test/anonymized-app-freemium-switch-fail/ , https://www.revenuecat.com/blog/growth/hard-paywall-vs-freemium/ |
| Opal free tier | Pay penetration 20% -> 9% | MEDIUM | https://liftarchive.com/apps/tests |
| Soft paywalls convert view-to-pay better, hard paywalls have higher LTV | Soft about +50% view-to-payment; hard +21% one-year LTV | MEDIUM (Adapty, as summarized) | https://www.rocketshiphq.com/paywall-optimization-fitness-apps |

Read: do not go freemium. A small, cash-limited app with a "fix my problem" product is the exact case where freemium failed.

### 1.3 "First session / first days free in app" (reverse trial, no card)

| Finding | Numbers | Level | Source |
|---|---|---|---|
| Reverse trial (a week of premium, no card, after the user declines) lifted paid conversion of decliners | 0.4% -> 4% (one app, quoted from RevenueCat data on a panel) | WEAK-MEDIUM (one app, freemium context) | https://tasu.ai/library/reverse-trial-freemium-conversion |
| Ladder (fitness) removes card barriers and focuses on finishing first workouts | No numbers | WEAK | https://www.revenuecat.com/pdf/state-of-subscription-apps-2025.pdf |
| Card-required trials beat no-card trials on revenue per signup 3.4-10x; reverse trial sat in between | 1,200 signups, SaaS not mobile | WEAK for Walkito (SaaS) | https://tanstackship.com/blog/saas-trial-optimization-credit-card-required-or-not-data-inside |
| 93% of first purchases happen on Day 0; 80-90% of trials start Day 0 | | STRONG | https://adapty.io/state-of-paywalls/report/ , RevenueCat 2026 link above |

Read: a "do today's routine free, then the trial paywall" variant is worth one test, because it lets an older, skeptical user feel the product before Apple's sheet. But the paywall must come right after that first routine, on Day 0. Do not give multiple free days: Day 0 is where the money is.

---

## 2. Plan structure

| Finding | Numbers | Level | Source |
|---|---|---|---|
| H&F is an annual category | Annual = 48.4% of new H&F subs, weekly 25.4%, monthly 14.5%, lifetime 3.7%. Annual revenue share 51% (2023) -> 61% (2025), the only category where annual grew | STRONG | Adapty H&F PDF; https://adapty.io/blog/health-fitness-app-subscription-benchmarks/ |
| Weekly + 3-day trial is the top LTV setup across ALL apps, but not in H&F | Weekly $5.99 + 3-day trial = 1.5x average LTV (all apps). Worst LTV: annual $79.99 no trial | STRONG (all categories) | https://adapty.io/blog/free-trial-vs-direct-purchase-subscription-apps/ |
| Weekly without trial renews badly | First renewal: weekly no trial 35.9% vs 65.9% after 5-9 day trial. Annual no trial 26.6% | STRONG (17k apps, Aug 2025 to Jul 2026) | https://www.revenuecat.com/blog/growth/free-trial-length |
| Two plans is the sweet spot | 62% of top paywalls show 2 plans; apps with two plan lengths +67% conversion | STRONG | https://adapty.io/state-of-paywalls/report/ |
| Hiding the monthly plan | Annual share +18 pp, ARPU +9%, trial starts -6% (12 experiments) | MEDIUM | https://adapty.io/paywall-ab-testing-skill |
| Showing annual next to monthly as anchor | Preu AI: +80% proceeds per user, +22% trial conversion | MEDIUM | https://liftarchive.com/apps/tests |
| Yearly-only paywall | Lost for Stardust (conversion and proceeds); for Mojo it raised yearly share 15-20 pp | MEDIUM (mixed) | https://liftarchive.com/apps/tests |
| Three plans with annual badged "best offer" (health app) | Rash ID: about +20% ARPU, +50% conversion to paid | MEDIUM (vendor) | https://superwall.com/case-studies/rash-id.md |
| Adapty advice for H&F | "Keep monthly next to annual so annual looks cheap." "37% of direct buyers pick monthly" | STRONG | Adapty H&F PDF |
| Lifetime | 22.5% of H&F apps list it, 3.7% of subs. Next to annual it lifted revenue 10-15% in winning tests. H&F lifetime median price $59.99 | MEDIUM | Adapty H&F PDF; https://adapty.io/blog/paywall-optimization-tests |

Read for Walkito: the main plan should stay annual with trial. Show monthly as the second visible option (not behind "Show all plans"). Monthly is the anchor and the choice for people who will not commit to a year. Lifetime can stay behind "Show all plans". Do not lead with weekly for women 45-65: weekly no-trial renews badly, and a $7.99/week plan is about $415 a year, which an older buyer can do in her head.

---

## 3. Price points

H&F US-tier price benchmarks (Adapty H&F 2026, STRONG):

| Plan | p25 | median | p75 | p90 |
|---|---|---|---|---|
| Annual | $29.99 | $39.99 | $56.99 | $79.99 |
| Monthly | $6.86 | $9.99 | $14.99 | $19.99 |
| Weekly | $5.99 | $6.99 | $7.99 | $9.99 |

Walkito's $59.99/yr is just above p75. Not extreme.

| Finding | Numbers | Level | Source |
|---|---|---|---|
| Higher-priced H&F annual plans earn much more | Top-25% priced annual plans $70 one-year LTV vs $17 for bottom 25% | STRONG (correlation, different apps) | https://adapty.io/blog/health-fitness-app-subscription-benchmarks/ |
| Pricier apps also start more trials (median) | High-priced 2.7% download-to-paid vs 1.5% low-priced | STRONG (correlation) | https://www.rocketshiphq.com/revenuecat-state-of-subscription-apps-2025-summary |
| Meta needs a decent price | Marcus Burke: "Below $39.99 for a yearly things are getting complicated" on Meta | WEAK-MEDIUM (expert opinion) | https://chat.subclub.com/c/ama/ask-marcus-burke-anything |
| Lower annual price won | SellRaze $59.99 -> $44.99: ARPU +10% (3-day trial, same monthly) | MEDIUM | https://superwall.com/case-studies/sellraze |
| Higher annual price won | BuyBye +50% yearly price: conversions -19%, proceeds per user +25% | MEDIUM | https://superwall.com/case-studies (BuyBye) |
| US users convert above average but pay less; Adapty says test higher in US | US conversion index 1.15x, LTV index 0.98x | STRONG | Adapty H&F PDF |
| Break-even rule | A 20% price rise breaks even at a 17% relative drop in conversion | STRONG (math) | https://www.rocketshiphq.com/subscription-app-conversion-rate-price-increase/ |

Read: $59.99 vs $39.99 is a fair test. $29.99 is too low for Meta math (see section 0) and is not recommended. Price is probably not why 0 of 35 started a trial; a free trial hides price at the moment of tapping. Price matters more at Apple's sheet and at day 7.

---

## 4. Trial length

| Finding | Numbers | Level | Source |
|---|---|---|---|
| Annual plans: longer trials convert and renew better | Trial-to-paid: <=4 days 24% vs 17-32 days 44.6%. First renewal 18.3% vs 47.5%. Paid-and-renewed 3.5% -> 18.5% | STRONG (17k apps, but selection bias likely) | https://www.revenuecat.com/blog/growth/free-trial-length |
| H&F top apps mostly use 5-9 day trials | | STRONG | same |
| 7 beat 14 in fitness/wellness tests | Zumba 14 -> 7 days: +8% install-to-paid. Wellness app: 14 days gave slightly more trials, fewer paid | MEDIUM | https://liftarchive.com/test/zumba-14-to-7-day-trial/ , https://liftarchive.com/test/wellness-app-14-day-vs-7-day-trial/ |
| 3 vs 7 day field experiment | 7 days raised trial adoption and later conversion, no change in immediate trial-to-paid | MEDIUM (academic, randomized) | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1568868/full |
| 7-day is better for annual, 3-day for weekly | | MEDIUM | https://adapty.io/state-of-paywalls/report/ |

Read: keep 7 days. A 14-day trial is a later test, not a fix for 0 trials.

---

## 5. Introductory offers (paid intro, first-year discount)

| Finding | Numbers | Level | Source |
|---|---|---|---|
| Apple allows 3 intro types: free trial, pay up front (e.g. one price for 1-12 months or 1 year), pay as you go | Each person gets ONE intro offer per subscription group. Renews at full price after | STRONG (Apple docs) | https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions |
| Discounted first week as intro beat discounted plans without trial | Flibbo: +20% revenue (AI app, details not shared) | WEAK-MEDIUM | https://liftarchive.com/test/flibbo-discounted-first-week-intro-offer/ |
| $1.99 paid 30-day trial instead of monthly | D90 ARPU $2.23 -> $2.89 (+30%) | MEDIUM | https://liftarchive.com/test/paid-30-day-trial-vs-monthly-no-trial/ |
| Paid 30-day trial as a second option next to free 7-day | Ahead App: +7% trial conversion, PPU held | MEDIUM | https://superwall.com/case-studies/ahead-app |
| Paid intro "first month $1.99" | ARPU +30%, conversion +25% in one app, no effect in another | WEAK | https://gtmsauce.com/episodes/2026-08-22-the-highest-performing-paywalls-for-apps |

Rule impact: a product cannot have both a free trial and a discounted first year as its intro. If Walkito wants "first year $39.99, then $59.99", that must be a separate product or replace the free trial. Also, a user who already used any intro offer in the group gets no trial and is charged at once (see Top 5, #2).

---

## 6. Refunds and quality

| Finding | Numbers | Level | Source |
|---|---|---|---|
| Annual plans have the highest refund rate | Annual 4.2%, lifetime and monthly about 3%, weekly 2.6% | STRONG | https://uploads.adapty.io/state_of_in_app_subscriptions_2025.pdf |
| Trial users refund more than direct buyers; "surprised by a charge" is the cause, fix is reminders | | MEDIUM | https://adapty.io/blog/free-trial-vs-direct-purchase-subscription-apps/ |
| Hard paywall with no close button | BoldVoice: more trial starts, refunds rose by more than the gain | MEDIUM (no numbers) | https://liftarchive.com/test/boldvoice-hard-paywall-no-dismiss/ |
| Unclosable discount offer after dismiss | BoldVoice: more trials, refunds rose more than the gain | MEDIUM | https://liftarchive.com/test/boldvoice-unclosable-discount-on-dismiss/ |
| Older users convert trial-to-paid better and are the lever when trial conversion is weak | Marcus Burke on Sub Club | WEAK-MEDIUM (expert) | https://subclub.com/episode/scaling-your-subscription-app-with-meta-ads-marcus-burke-independent-consultant |
| Run separate paywalls for over and under about 35-45 | | WEAK | https://gtmsauce.com/tactics/test-separate-paywalls-for-users-over-and-under-about-35 |

---

## 7. Apple and legal rules for offers (flags)

| Rule | What it means for Walkito | Level | Source |
|---|---|---|---|
| Billed amount must be the most prominent price. Per-week breakdown only smaller and below | "$59.99/year" biggest. "1 week free" and "$1.15/week" smaller. Cal AI was pulled in April 2026 for weekly-calculated price shown louder than the billed amount | STRONG | https://developer.apple.com/app-store/subscriptions , https://techcrunch.com/2026/04/21/apples-cal-ai-crackdown-signals-its-still-policing-the-app-store/ |
| Trial length, price after trial and renewal terms on the same screen, before the button | Rejections in Oct 2026 for splitting these. Walkito's split "trial screens before plans" flow must still show all three on the plans screen | STRONG | https://kapps.store/insights/apple-paywall-312c-mrr-account-risk-oct-2026 , https://devoria.fr/en/blog/introductory-offer-app-store-connect-ios-free-trial |
| Free trial toggles rejected since mid-Jan 2026 | Use separate plans, never a switch | STRONG | https://www.appsubmitter.io/app-rejection-guides/app-store-guideline-3-1-2-subscriptions |
| **Discount offer shown right after closing the main paywall: Guideline 5.6 rejections** | Walkito has "one-time offer after Not now". Reported 5.6 rejections: Apple forum (Nov 2024, "one time offer when the user closes the initial subscription page"), a wave in April 2026, Apple contacting Glowly AI in May 2026 over transaction-abandon offers. RevenueCat: "be careful on iOS". Workarounds named by devs: an intermediate screen, or trigger the offer later and independently. The "once it's gone" wording also needs to be true | STRONG | https://www.revenuecat.com/blog/engineering/exit-offers-in-revenuecat-paywalls , https://devoria.fr/en/blog/guideline-5-6-paywall-app-store-rejection , https://x.com/i/trending/2042242734933815644 |
| Very high weekly prices get flagged | Apple flagged a $14.99/week plan as too expensive (April 2026). Walkito legacy $7.99/wk is at H&F p75, fine | MEDIUM | https://x.com/i/trending/2042242734933815644 |
| Intro offer display | Must show intro price, its length and the standard price after; only show to eligible users | STRONG | https://developer.apple.com/design/human-interface-guidelines/in-app-purchase |
| FTC / ROSCA | Clear and conspicuous terms before billing, easy cancel. Reminder before trial ends if promised must actually be sent | STRONG | see P5 report |
| Health claims in offer copy | No "fix your heel pain in 7 days" as trial headline. "Try 7 days of guided foot routines" is fine | STRONG | team rule, FTC |

---

## TOP 5 findings for Walkito

1. **Keep the hard paywall and keep the trial on the annual plan.** Freemium loses about 5x on conversion and failed in a real switch (-50%). In H&F, annual-with-trial beats annual-direct on LTV, and older buyers want to see results first. Evidence: STRONG.

2. **The 3 taps -> 0 trials gap points at Apple's sheet, not the offer psychology. Check it first.** If the sheet shows "$59.99 now" instead of "free for 1 week", users bail. Causes to check: the trial offer is not set for the US storefront or dates; the user is not eligible because they (or the same Apple ID on reinstall) already used an intro offer in the same subscription group (legacy $44.99, weekly, 12-week pass); or the app shows the trial wording while selling `walkito_annual` (no trial) to users not tagged as Meta. 1.0.12 says "free week for everyone", so every user must get `walkito_annual_trial`. Evidence: MEDIUM (Apple eligibility rule is STRONG; that it is Walkito's cause is my inference).

3. **The one-time offer right after "Not now" is an App Review risk (Guideline 5.6).** Several 2024-2026 rejections match this exact pattern. Move it behind an intermediate screen or show it on a later app open, once, with a real end. Evidence: STRONG.

4. **$59.99/yr is high but defensible. $39.99 is the only price cut worth testing; $29.99 breaks Meta math.** H&F median annual is $39.99, p75 $56.99. At $2.48 CPI, $59.99 needs about 14% install-to-trial to break even on the first payment, $39.99 needs about 21%. Higher-priced H&F apps earn about 4x LTV. Evidence: STRONG benchmarks, MEDIUM for the math.

5. **Show two plans up front: annual with 7-day trial (selected, "best value") and monthly ($12.99-14.99, no trial) as the visible second option.** Two-plan paywalls convert better, monthly is the anchor that makes annual look cheap, and 37% of H&F direct buyers choose monthly. Hiding monthly costs about 6% of trial starts. Keep lifetime behind "Show all plans". Do not lead with weekly for this audience. Evidence: STRONG/MEDIUM.

## The 3 offer setups I would test first (in this order, about one week each at $50/day)

**Setup A - "Fixed control"** (ship first, it is mostly bug fixing and rules)
- Annual $59.99 with 7-day free trial, pre-selected. Monthly $14.99 no trial visible below. Lifetime behind "Show all plans".
- Billed price biggest; trial length, price after trial and auto-renew on the plans screen; "Not now" visible on every paywall step, including step 1.
- Verify the trial on Apple's sheet with a fresh sandbox account AND an account that used an old intro offer.
- One-time offer moved off the immediate "Not now" path.
- Why: it removes the likely technical cause of 0 trials and the rejection risk. Every other test needs this baseline. Success read: install-to-trial at or above about 10% (H&F median paywall view to trial 9.8%).

**Setup B - "Lower anchor"** (only after A is live and measured)
- Same as A, but annual $39.99 with 7-day trial, monthly $9.99.
- Why: tests if price, not trust, is the barrier for women 45-65 on Meta. It must raise install-to-trial by about 50% to match A's revenue per install. Judge on trials x price, not trials alone, and watch day-7 conversion.

**Setup C - "First routine free, then trial"** (Day 0 value before Apple's sheet)
- Onboarding ends in today's real 5-minute foot routine (no payment), then the A paywall on the same session, framed "Keep going: your next 7 days" with a day-by-day plan (Clear 30 saw 20% -> 30% paywall conversion with a first-7-days preview, MEDIUM).
- Why: older cold users have not felt any value yet when they see $59.99. This gives value without going freemium. Keep it to one routine and the same session, because 93% of first purchases happen on Day 0.

Later, if trials start but day 7 conversion is weak: test a paid intro (e.g. pay up front "first 3 months $9.99, then $59.99/yr" as its own product) or a 14-day trial. Both are MEDIUM/WEAK evidence and need more traffic than Walkito has now.
