# B1: Paywall and offer - 3 versions Walkito can ship this week

Wave 2, Nov 11, 2026. Built on 00-BRIEF, CHECKER (Top 10 #1, #3, #4, #5 and contradictions a, b, c, e, f), R1, R5, and the live code notes (pr-69/code/AGENTS.md, 02-screens-index.md).

## 0. What exists today (so we reuse, not rebuild)

Products already in App Store Connect and RevenueCat offering `v2` (from AGENTS.md, Rahim should confirm in ASC):

| Product | Price | Intro | Used where now |
|-|-|-|-|
| `walkito_annual_trial` | $59.99/yr | 1 week free | trial paywall (Meta users) |
| `walkito_annual` | $59.99/yr | none | organic paywall |
| `walkito_monthly` | $14.99/mo | none | behind "Show all plans" |
| `walkito_lifetime` | $99.99 once | n/a | behind "Show all plans" |
| `walkito_annual_offer` | $29.99 first year, then $59.99 | pay up front | "comeback" limited offer, 15-min countdown |
| `walkito_lifetime_offer` | $59.99 once | n/a | comeback offer |
| `pass_12wk_4999` | $39.99, 90 days, no auto-renew | n/a | comeback offer, 3rd card |
| `sub_annual_4499` | $44.99/yr (legacy) | unknown | old users |

The current flow after "Not now": Home -> Day 1 two-minute session -> tour -> OfferWall (no close) with the trial once, then the $29.99 "limited offer" with a live 15-minute countdown and a "one last chance" push when the app goes to background. That decline-path offer is the 5.6 risk CHECKER flags (Cal AI case), and the countdown/push is the kind of urgency the NEVER list bans. All three versions below remove it.

What can ship over the air (EAS Update, JS only): all screen order, copy, which plans show, what "Not now" does, the after-cancel sheet, event logging. What cannot: a new product or a new price point (App Store Connect + IAP review, usually 1-2 days, no new binary needed since the app already sells IAP). Adding an introductory offer to an already approved subscription goes live without a review.

Shared rules for all versions:
- Billed amount is the largest price on the plans screen. Trial length, price after trial and auto-renew are on the same screen as the button (Apple 3.1.2, Oct 2026 rejections for splitting them, R5 section 7).
- No "free" word anywhere unless StoreKit says this user is eligible for the intro (already enforced in code by a test; keep it).
- "We'll remind you" only for users who allowed notifications. Otherwise the line becomes "Tip: set a reminder for Day 6. Cancel anytime in Settings." (FTC: a promised reminder must be sent.)
- "Exercises reviewed by a physical therapist" only if that PT review is real and in writing. Real App Store star rating only if there are 3+ real reviews, else leave it out.
- No cure, fix, relieve, pain-free or timeframe words. The user's goal is quoted as their words, never as a promise.
- Monthly stays $14.99 in every version (see section 5 for why), so the only price variable across versions is the yearly.
- Every version sends `paywall_version` (A / B / C) as a property on every paywall and purchase event, plus new `purchase_failed { code }` and `sheet_cancel_reason { reason }`. Nothing health-related goes to Meta.

---

## Version A - "Honest trial, two plans" (ship first)

Hypothesis: people leave step 1 because it is a forced, price-less "free" promise with no way out (13 of 23 left there, R1), and the 3 buy taps died because Apple's sheet showed something they did not expect. Fix trust and the exit, change nothing else.

Order: onboarding ends -> Step 1 Promise -> Step 2 Reminder -> Step 3 Plans -> Apple sheet.

### A1. Step 1 - Promise

```
+-------------------------------------+
| [===] [   ] [   ]          Not now  |   <- visible from second 0, top right
|                                     |
|   (mascot, small)                   |
|   Maria, your foot plan is ready    |   <- H1
|   Built around your goal:           |
|   "Easier mornings"                 |   <- their own answer, in quotes
|                                     |
|   [v] Try every routine for 7 days  |
|   [v] Nothing to pay today          |
|   [v] Cancel anytime in Settings    |
|                                     |
|   7 days free, then $59.99/year     |   <- small grey line, 13pt
|                                     |
|   [        Continue        ]        |
+-------------------------------------+
```

- Headline: "{name}, your foot plan is ready"
- Subline: "Built around your goal: "{goal}""
- Bullets: "Try every routine for 7 days" / "Nothing to pay today" / "Cancel anytime in Settings"
- Small line: "7 days free, then $59.99/year" (store strings, eligible users only). Not eligible users: "Walkito Plus is $59.99/year" and bullet 2 becomes "Your first week is planned".
- Button: "Continue"
- Top right text link: "Not now" (visible at once, 15pt, grey, not hidden behind a timer).
- No buy button, no plan cards (CHECKER (a): buy button on screen 1 converts 8.8% vs 13.6%).
- I disagree a little with CHECKER (a) here: I put a one-line price on step 1 as small print, not as a price block. Reason: R1 shows people leave step 1 in about 10 s on a screen that only says "free", and the only people who reached the sheet cancelled within 4-26 s. Older buyers read "free" with no price as a catch (AARP/FTC, R5). One small line costs nothing and removes the surprise. If you want to follow CHECKER exactly, drop that line in A and make it the first change in week 2.

### A2. Step 2 - Reminder

```
+-------------------------------------+
| [===] [===] [   ]          Not now  |
|                                     |
|   We'll remind you before you pay   |
|  +-------------------------------+  |
|  | WALKITO              Day 5    |  |   <- looks like the real push
|  | Your free week ends in 2 days.|  |
|  | Keep going or cancel in       |  |
|  | Settings, no charge until     |  |
|  | Day 8.                        |  |
|  +-------------------------------+  |
|                                     |
|   [        Continue        ]        |
+-------------------------------------+
```

- Headline: "We'll remind you before you pay"
- Push text: "Your free week ends in 2 days. Keep going or cancel in Settings. No charge until Day 8."
- Button: "Continue". "Not now" top right.
- If notifications were denied: headline "Your free week, day by day" and show the A3 timeline here instead, no reminder promise. (Paywall Index: reminder screen 14.8% vs 8.7%, CHECKER claim 3.)

Note on dates: the trial is 7 days starting today, so the charge is on Day 8 if Day 1 is today. Today's screens say "Day 7". Rahim should use real calendar dates from the store's intro period ("Today, Nov 12" / "Nov 17: reminder" / "Nov 19: $59.99") so the screen cannot be off by one.

### A3. Step 3 - Plans

```
+-------------------------------------+
| [X]  (appears 2 s)        Restore   |
|            Walkito Plus             |
|   Every routine, with video, for    |
|   your plan                         |
|                                     |
| +---------------------------------+ |
| | (o) YEARLY        Most popular  | |   <- preselected
| |     $59.99 / year               | |   <- largest price, 24pt
| |     7 days free, then $59.99/yr | |   <- 14pt
| |     Today  > Nov 17 > Nov 19    | |
| |     free     reminder  $59.99   | |
| +---------------------------------+ |
| +---------------------------------+ |
| | ( ) MONTHLY                     | |
| |     $14.99 / month              | |   <- same size as yearly price
| |     No free week. Cancel anytime| |
| +---------------------------------+ |
|           Show all plans            |   <- opens Lifetime $99.99
|                                     |
|  What you get: daily plan, every    |
|  guided session with video, a       |
|  progress check every 2 weeks       |
|                                     |
|  Nothing to pay today               |   <- only for eligible + yearly
| [     Start my free week      ]     |
|  7 days free, then $59.99 per year. |
|  Renews automatically. Cancel       |
|  anytime in Settings at least 24 h  |
|  before the trial ends.             |
|  Terms - Privacy - Have a code?     |
|              Not now                |
+-------------------------------------+
```

- Headline: "Walkito Plus"
- Subline: "Every routine, with video, for your plan"
- Plans shown: Yearly $59.99 with 7-day trial (preselected, badge "Most popular" only if it is true by purchase share; otherwise "Best value", since $59.99/yr is 67% less than 12 x $14.99). Monthly $14.99, no trial, visible. Lifetime $99.99 one payment under "Show all plans".
- Button when yearly selected: "Start my free week". When monthly selected: "Subscribe for $14.99/month". When lifetime selected: "Buy once for $99.99".
- Over the button: "Nothing to pay today" (yearly + eligible only).
- Small print, yearly: "7 days free, then $59.99 per year. Renews automatically. Cancel anytime in Settings at least 24 hours before the trial ends."
- Small print, monthly: "$14.99 per month, starting today. Renews monthly. Cancel anytime in Settings."
- Small print, lifetime: "$99.99 one time. No subscription."
- Not eligible for intro (used an old trial in this group): card says "$59.99 / year", no timeline, button "Subscribe for $59.99/year", no "free" anywhere.
- Close X top left after 2 s (not 6 s) and "Not now" at the bottom, always visible. 6 s is long for people who read for 9-10 s and leave (R1 dwell times).

### A - What "Not now" does (any step)

Not now -> Home -> "Day 1" card -> the free two-minute session -> short tour -> plans wall. The plans wall is the same A3 screen (same plans, same prices, same terms) with the headline "Day 1 done. Keep your plan going" and no X (hard paywall; Restore, Terms, Privacy visible). Shown on every launch until purchase or restore. No discount, no countdown, no "limited", no "one last chance" push. Turn off the `comeback` stage and the `limited_offer` placement for version A.

Where the free Day 1 session fits: only behind "Not now". It is the reason "Not now" is safe to offer: it is not a free tier, it is two minutes, and the wall says what it is ("what is free is the two minutes", AGENTS.md).

### A - After a cancelled Apple sheet

Shown once per user, as a small bottom sheet over the plans screen (not a new offer, not a new price):

```
+-------------------------------------+
|  No charge was made.                |
|  What stopped you?                  |
|  ( ) I wasn't sure I'd be charged   |
|  ( ) The price                      |
|  ( ) I want to try it first         |
|  ( ) Something went wrong           |
|  [ Back to plans ]     Not now      |
+-------------------------------------+
```

- "I wasn't sure I'd be charged" -> back to plans with the line "Today: $0. Nov 19: $59.99 unless you cancel. We remind you on Nov 17." highlighted.
- "The price" -> back to plans with Monthly preselected (same screen, already visible, so not a second purchase flow).
- "I want to try it first" -> same as "Not now" (Day 1 session path).
- "Something went wrong" -> "Try again" + "Restore" + support email.
- Log `sheet_cancel_reason { reason }`. This is the only way we will learn why 3 of 3 taps died.
- Why no discount here: CHECKER #5 says one abandon offer after a cancelled sheet is allowed on paper but reviewer-dependent, and it needs a new product (a 14-day trial cannot be a second intro on the same product). Not this week. Revisit when we have 20+ logged cancels.

### A - What Apple's sheet should show

Rahim sets in App Store Connect (this text is what the sheet prints, so it must match the paywall):
- Subscription group display name: "Walkito Plus"
- `walkito_annual_trial` display name: "Walkito Plus Yearly", description: "Every guided foot routine and progress check"
- Intro offer: Free, 1 week, all territories incl. US, no end date.
- Expected sheet for an eligible user: "Walkito Plus Yearly", "1 week free", then "Starting Nov 19: $59.99/year", account email, "Subscribe", "Confirm with Side Button".
- If the sheet shows "$59.99/year" with no free week, the user is not eligible and the paywall must have said so already (test with a fresh sandbox Apple ID AND one that used an old trial in the group; CHECKER #1).
- Monthly sheet: "Walkito Plus Monthly", "$14.99/month". Lifetime sheet: "Walkito Plus Lifetime", "$99.99".

### A - Effort, cost, risk, judging

- Effort: S, 1-2 days for Rahim, all OTA. Mostly removing things (step-1 exit, 6 s timer to 2 s, comeback stage off, monthly out of "Show all plans") plus one bottom sheet and two events.
- Cost: $0.
- Risk: lowest of the three. Removes the 5.6 decline-path offer and the countdown. Apple 3.1.2 layout kept.
- Expected effect (guess): step-1 loss from 57% to 30-40%; plans reached per paywall view from 38% to 60-70%; buy taps per plans view from ~9% (3/34) to 10-15%; trials depend on the sheet audit. Planning: 3-6 trials per 100 paywall views.
- Judge in 5-7 days (PostHog, `paywall_version = A`): `paywall_plans_shown / paywall_step_viewed{step:1}` above 60%; `purchase_started` per plans view; `purchase_completed / purchase_started` at or above 50%; zero `plan_sync_failed`; first logged `sheet_cancel_reason` values.

---

## Version B - "Feel it first, then the free week"

Hypothesis: cold Meta users (casual walkers, 10 of 15 onboarding leavers said nothing hurts, R1) have felt no value when they meet the paywall. Give them the two-minute Day 1 session inside onboarding, on Day 0, then ask (Lyttle: let them do the core action, then lock what comes next; Bend offers the trial after the first routine; R5 1.3; CHECKER (b) lists this as the first "later A/B" test).

Order: onboarding through "Your plan is ready" -> Day 1 session (2 min) -> Step 1 "Day 1 done" -> Step 2 Plans -> Apple sheet. The month 1-3 projection screens move out (they are long and add nothing after a real session).

### B0. Day 1 session (inside onboarding)

```
+-------------------------------------+
|   Let's do Day 1 together           |
|   Two easy minutes, seated.         |
|   No payment, no account.           |
|  [ video: seated toe lift ]         |
|                                     |
|   [     Start Day 1 (2 min)    ]    |
|            Skip for now             |
+-------------------------------------+
```

- Headline: "Let's do Day 1 together"
- Subline: "Two easy minutes, seated. No payment, no account."
- Button: "Start Day 1 (2 min)". Link: "Skip for now" -> goes to B1 anyway.
- Uses the existing session player and the same seated two-minute routine. The red-flags answer from onboarding still applies (anyone who ticked a red flag gets the "see a doctor first" note before the session, as now).

### B1. Step 1 - Day 1 done

```
+-------------------------------------+
| [===] [   ]                Not now  |
|   (mascot, confetti small)          |
|   Day 1 done, Maria                 |
|   Tomorrow: 5 minutes before your   |
|   first step                        |
|                                     |
|   Your week:                        |
|   Mon  Day 1            done        |
|   Tue  Morning routine  5 min       |
|   Thu  Arch strength    5 min       |
|   Sun  First progress check         |
|                                     |
|   How did that feel?                |
|   [Easy] [About right] [Hard]       |
|                                     |
|   [   Keep my plan going   ]        |
+-------------------------------------+
```

- Headline: "Day 1 done, {name}"
- Subline: "Tomorrow: 5 minutes before your first step"
- Body: their real week (from the plan builder), 4 rows.
- Quick check: "How did that feel?" Easy / About right / Hard. Used only to tune session length inside the app. Never sent to Meta or AppsFlyer; to PostHog only as `day1_feel` with no health wording (or not at all, if Rahim prefers).
- Button: "Keep my plan going". "Not now" top right.
- If the user tapped "Skip for now": headline "{name}, your foot plan is ready", rest the same, no check.

### B2. Step 2 - Plans

Same layout and copy as A3, with two changes:
- Headline: "Keep going with Walkito Plus"
- Subline: "Day 2 to Day 7 free, then $59.99/year" for eligible users. Not eligible: "Day 2 onward: Walkito Plus, $59.99/year".
- Plans, prices, small print, button, Show all plans, X after 2 s, "Not now": identical to A3. Reminder promise moves into the card timeline ("Nov 17: we remind you"), since B has no reminder screen.

### B - What "Not now" does

Not now -> Home with Day 1 already marked done -> short tour -> plans wall (same B2 screen, headline "Day 2 is ready when you are", no X, Restore/Terms/Privacy). No second free session, no discount, no countdown. One gentle local push next morning only if notifications are allowed: "Day 2 is ready. 5 minutes before your first step." (that is a real routine reminder, not an offer).

### B - After a cancelled Apple sheet

Same one-time "No charge was made. What stopped you?" sheet as version A. "I want to try it first" here says "You did Day 1. The free week is 6 more days like it, and you can cancel in Settings before Nov 19." with "Back to plans" and "Not now".

### B - Apple sheet

Same as A (same product `walkito_annual_trial`). The paywall must not say "7 days free from today" if Day 1 already happened today; the store trial starts at purchase, so "7 days free" is still true. Copy uses "Day 2 to Day 7 free" only in the subline and the store's own "1 week free" on the card and small print, so the sheet and the screen match.

### B - Effort, cost, risk, judging

- Effort: M, 2-3 days, OTA. Reorder onboarding, call the existing session player before entitlement (the guard currently only allows it for `tryingOut` users), new step-1 screen.
- Cost: $0.
- Risk: Apple low (a free two-minute session before a paywall is normal; do not call it "free version"). Health: the session is seated and gentle; keep the red-flag check before it. Product risk: some users take the 2 minutes and leave (Walkito's 4 "Not now" users all did Day 1 and 0 bought, R1; tiny sample).
- Expected effect (guess, wide): onboarding-to-paywall drops 5-15 points (session is extra time), but buy taps per paywall view could rise 1.3-2x if value is the blocker. Net could be negative. That is why it is second, not first.
- Judge (`paywall_version = B`): `day1_session_completed` share; trials per onboarding finisher (not per paywall view, since B adds a step before the paywall); compare to A on trials per onboarding finisher.

---

## Version C - "One page, lower yearly, pay-once option visible"

Hypothesis: users who reach the plans and still do not buy are stopped by the yearly price and by fear of a subscription. Test a lower yearly and make "no subscription" visible. Single page (CHECKER (f) allows a single-page test once step 1 is fixed).

Price pick for the test: **$49.99/yr with 7-day trial**, not $39.99. Math (R5 section 0, 35% trial-to-paid, 0.85 after Apple): revenue per trial $59.99 -> $17.85, $49.99 -> $14.87, $39.99 -> $11.90. $49.99 needs about +20% more trials to match $59.99; $39.99 needs about +50%. SellRaze $59.99 -> $44.99 raised ARPU 10% (MEDIUM). $49.99 is inside H&F p50-p75 ($39.99-56.99). Cheaper route if it works: add a 1-week free intro to the existing `sub_annual_4499` ($44.99) if it is approved and in the same group (intro offers go live without review). Otherwise create `walkito_annual_trial_4999` ($49.99, 1 week free) and submit it for IAP review on day 1.

Order: onboarding ends -> one Plans page -> Apple sheet.

### C1. The one page

```
+-------------------------------------+
| [X] (2 s)                 Restore   |
|   Maria, your plan is ready         |
|   For your goal: "Easier mornings"  |
|                                     |
| +---------------------------------+ |
| | (o) YEARLY          Best value  | |
| |     $49.99 / year               | |   <- largest
| |     7 days free, then $49.99/yr | |
| |     Today $0 > Nov 17 reminder  | |
| |     > Nov 19 $49.99             | |
| +---------------------------------+ |
| | ( ) MONTHLY                     | |
| |     $14.99 / month              | |
| |     No free week. Cancel anytime| |
| +---------------------------------+ |
| | ( ) PAY ONCE                    | |
| |     $99.99 one time             | |
| |     No subscription, no renewals| |
| +---------------------------------+ |
|  Nothing to pay today               |
| [     Start my free week      ]     |
|  7 days free, then $49.99 per year. |
|  Renews automatically. Cancel       |
|  anytime in Settings at least 24 h  |
|  before the trial ends.             |
|  Terms - Privacy - Have a code?     |
|              Not now                |
+-------------------------------------+
```

- Headline: "{name}, your plan is ready"
- Subline: "For your goal: "{goal}""
- Bullets: none on the card area (space goes to terms). One line under the cards: "Every routine with video - progress check every 2 weeks - cancel anytime".
- Plans: Yearly $49.99 + 7-day trial (preselected), Monthly $14.99 no trial, Lifetime $99.99 visible as "Pay once". No "Show all plans".
- Buttons: yearly "Start my free week" / monthly "Subscribe for $14.99/month" / lifetime "Buy once for $99.99".
- Small print: as A3 with $49.99.
- Why lifetime visible here: AARP says fewer than 1 in 5 adults 50+ ever paid for a health app; "no renewals" answers the "I'll get charged forever" fear directly, and lifetime next to annual lifted revenue 10-15% in winning tests (R5 section 2, MEDIUM). $99.99 = 2 years of yearly, so it does not cannibalize much.

### C - What "Not now" does

Same as A: Day 1 two-minute session -> tour -> plans wall = the same C1 page, headline "Day 1 done. Keep your plan going", no X. No discount, no countdown.

### C - After a cancelled Apple sheet

Same one-time reason sheet as A. "The price" here preselects Monthly; "I'm worried about renewals" (replaces "I wasn't sure I'd be charged" in C) preselects "Pay once".

### C - Apple sheet

New product display name "Walkito Plus Yearly", "1 week free", then "$49.99/year". Lifetime sheet: "Walkito Plus Lifetime", "$99.99", no renewal text (non-consumable). Test both with a fresh sandbox ID before release.

### C - Effort, cost, risk, judging

- Effort: M, 2 days JS (single page, lifetime card, wiring the new product into `v2`) + 1-2 days IAP review if a new product is needed. Realistic go-live: day 4-5 of the week.
- Cost: $0, but lower price per payer.
- Risk: Apple low (if the billed price stays largest). Note: anyone who saw $59.99 and sees $49.99 later is fine as long as there is no "was $59.99" claim (that would be a reference-price claim; do not show strike-through prices).
- Expected effect (guess): buy taps per plans view +20-50% vs A; more monthly and lifetime share. Judge on money, not trials.
- Judge (`paywall_version = C`): value per plans view (section 6 formula), plan mix, `purchase_completed / purchase_started`.

---

## 4. Which version to ship first, and the order

Ship **Version A first, this week (Nov 12-13), OTA.** Why:
1. It removes two known problems we can see in data: the step-1 dead end (13 of 23 left, R1) and the decline-path discount with countdown (CHECKER #5, Apple 5.6, FTC). Every later test needs that clean baseline.
2. It is S effort, $0, no Apple review, and it can be paired with the sheet audit (CHECKER #1). If the sheet is broken, B and C fail too and we learn nothing.
3. It keeps price constant, so if trials appear we know trust and exits were the blocker.

Then pick the second version from where A leaks, after about 50 paywall views (about 5 days):
- If A still loses over 35% on steps 1-2, or users reach plans but say "I want to try it first" -> ship **B**.
- If users reach plans (60%+) and tap, but cancel the sheet or say "The price" / leave on plans -> ship **C**.
- If A gets 3+ real trials in 50 paywall views, keep A and only then run C vs A on price.

Prepare C's product in App Store Connect on day 1 anyway (it is free and the review takes 1-2 days), so it is ready when needed.

## 5. Plan and price choices, justified

- **Yearly $59.99 with 7-day trial (A, B):** keep. Just above H&F p75 ($56.99), price is not the first blocker since most users never saw it (CHECKER (e)). Trial stays because 0 trials is not a trial-to-paid problem (CHECKER (c)).
- **Monthly $14.99, no trial, visible in all versions:** it already exists (no review), it sits at H&F p75 ($14.99), and it makes yearly read as "the same as 4 months". A monthly payer brings $12.74 on day 0 vs $17.85 expected per yearly trial (at 35% trial-to-paid), so it is not a weak second choice for cash. $9.99 would push more people to monthly, where retention is weakest, and make yearly look like only 6 months. Hiding monthly costs about 6% of trial starts (Adapty, R5 section 2). Planning guess for monthly LTV: about 2 paid months = ~$25.
- **Lifetime $99.99:** yes, behind "Show all plans" in A/B, visible in C. Low share (3.7% of H&F subs), but a "no subscription" door for this age group. Keep `walkito_lifetime_offer` ($59.99) out of all versions.
- **Weekly:** no (CHECKER (i)).
- **3-month pass $39.99 (no auto-renew):** not this week. Interesting for subscription-wary 50+ users, but it grants no entitlement by design and is only wired to the offer and cancel flows. Later test.
- **$29.99 first-year offer:** remove from the decline path in all versions. $29.99 breaks Meta math (R5).

## 6. How to compare versions with about 10 plans-screen views a day

The honest limit: at ~10 plans views a day, 5% vs 10% needs 400+ views per version (R5). We cannot prove small differences. We can catch big ones and stop losers early.

Rules:
1. **Run versions one after another, one at a time, 5-7 days each**, not a 50/50 split. A split halves each arm to ~5 views a day and doubles the time to any read. Exception: if Rahim wants a split, use a PostHog feature flag assigned at install, 50/50, and run it for 14 days.
2. **Freeze everything else during a version's week**: same Meta ad set, same creative mix, same budget, same app build. If the creative must change (CHECKER #8), restart the count.
3. **Use the right denominator.** A and C: per paywall view (`paywall_step_viewed{step:1}` for A, plans view for C). B adds a session before the paywall, so compare all three on **per onboarding finisher**.
4. **Look at the leading signals first**, they have 5-10x more volume than trials: step-1 pass rate, plans reached, buy taps per plans view, sheet completion, cancel reasons. Trials are the decision, these are the early warning.
5. **One money number per version:** value per 100 plans views = 100 x (yearly trials x price x 0.85 x 0.35 + monthly buys x $25 + lifetime buys x $85) / plans views. Planning assumptions, replace with real ones when known.
6. **Stop rule** (math checked): a median H&F paywall (about 10% per view) gives 0 trials in 30 views only 4% of the time, and 0 in 40 views 1% of the time. So if a version has 0 trials after 30-40 plans views, and the sheet audit is clean, stop it and move on. At 5% per view, 0 in 40 views still happens 13% of the time, so do not over-read one empty week of a weak version.
7. **How big a gap means something** (Bayesian, flat prior, simulated): 1 of 35 vs 4 of 35 plans views gives about 90% that the second is better; 2 of 50 vs 6 of 50 about 92%; 2 of 70 vs 5 of 70 only about 86%. Rule of thumb: call a winner only when one version has at least 3 more trials than the other on similar views, and the value-per-view number agrees. Otherwise keep the cheaper, safer version (A).
8. **Exclude** internal and tester devices (`is_internal`), the Czech tester, and anyone who left before the source question, per CHECKER #2.

## 7. TOP 3 ideas, ranked

1. **Version A this week, with the step-1 "Not now", monthly $14.99 visible, X at 2 s, and the $29.99 countdown offer removed.** Biggest fix for least effort (S, $0, OTA), removes the 5.6/FTC risk, and creates the baseline. Judge: plans reached above 60% of paywall viewers, buy taps per plans view, sheet completion at or above 50%.
2. **The one-time "No charge was made. What stopped you?" sheet after a cancelled Apple sheet, plus `purchase_failed` codes.** Costs a few hours and is the only way to learn why every buy tap so far died. It also routes each answer to the right existing plan, with no new offer and no Apple risk.
3. **Prepare Version C's $49.99 trial product now (or add a free week intro to `sub_annual_4499`), then run B or C next based on where A leaks.** B if people drop before the plans, C if they reach the plans and stop at price or renewal fear.
