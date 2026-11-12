# B5 JUDGE: one plan for Walkito (Nov 11, 2026)

Scores 1-5, 5 = best (cost 5 = cheap, risk 5 = safe). E = evidence, I = impact, S = speed, C = cost, R = risk.

## 1. Ideas and scores

| # | Idea | Source | E | I | S | C | R | Sum |
|-|-|-|-|-|-|-|-|-|
| 1 | Sheet audit, log StoreKit outcome, fix `plan_sync_failed` | CHECKER, B1 | 4 | 5 | 5 | 5 | 5 | 24 |
| 2 | Clean data + pull every RevenueCat trial outcome | CHECKER, B4 | 5 | 3 | 5 | 5 | 5 | 23 |
| 3 | Step 1: "Not now" at 0 s, no buy button | B1, B2, CHECKER | 4 | 4 | 5 | 5 | 5 | 23 |
| 4 | Pause I1/I2, drop "didn't fix it" text | B3 | 5 | 2 | 5 | 5 | 5 | 22 |
| 5 | Meta $20/day now, cap, stop rules | B3, B4 | 4 | 3 | 5 | 5 | 5 | 22 |
| 6 | Remove $29.99 countdown + push | B1, CHECKER | 4 | 2 | 5 | 5 | 5 | 21 |
| 7 | Fix timeframe lines `pages.ts:112-114` | B2 | 5 | 1 | 5 | 5 | 5 | 21 |
| 8 | Monthly $14.99 visible, no trial | B1, CHECKER | 3 | 3 | 5 | 5 | 5 | 21 |
| 9 | "What stopped you?" sheet | B1, B4 | 3 | 3 | 5 | 5 | 5 | 21 |
| 10 | `plans_viewed` (step 3) as Meta goal | B3, CHECKER | 3 | 4 | 4 | 5 | 4 | 20 |
| 11 | Small price line on step 1 | B1 | 2 | 2 | 5 | 5 | 5 | 19 |
| 12 | Manual campaign, women 40-65+, FB-first, no Audience Network | B3 | 3 | 3 | 4 | 5 | 4 | 19 |
| 13 | Day 1 session before paywall | B2, B1-B | 3 | 4 | 3 | 5 | 4 | 19 |
| 14 | 5 real-person ads (incl. "standing all day" angle) | B3, B4 | 3 | 4 | 3 | 4 | 4 | 18 |
| 15 | $49.99 yearly test | B1-C | 3 | 3 | 3 | 4 | 5 | 18 |
| 16 | Apple Search Ads, $20/day | CHECKER, B4 | 3 | 3 | 4 | 3 | 5 | 18 |
| 17 | Lifetime "Pay once" visible / single page / real-feet hero | B1-C, B4 | 2 | 2 | 4 | 5 | 5 | 18 |
| 18 | 60-second seated move | B2 | 2 | 2 | 4 | 5 | 4 | 17 |
| 19 | One-time 12-week $29.99 | B4 | 2 | 3 | 3 | 4 | 4 | 16 |
| 20 | Clinics, PT YouTubers, FB groups, free codes | B4 | 2 | 2 | 2 | 5 | 4 | 15 |
| 21 | Self-check + locked week | B2 | 2 | 2 | 3 | 5 | 3 | 15 |
| 22 | Foot-kit waitlist | B4 | 1 | 1 | 4 | 5 | 4 | 15 |
| 23 | 14-day offer after cancelled sheet | B1 | 2 | 2 | 3 | 4 | 2 | 13 |
| 24 | Rename away from "Heel Pain" | B4 | 2 | 3 | 1 | 4 | 2 | 12 |
| 25 | Web checkout | B4 | 2 | 4 | 1 | 2 | 2 | 11 |

Out for everyone: weekly plans, freemium, AI people, renamed events.

## 2. Disagreements settled

- **Budget.** $20/day now (B3). $50 buys traffic into a broken step 1. A pause starves Meta of signals for event eligibility. If the audit finds a sheet bug, pause all Meta that day.
- **Manual women 40+ vs Advantage+.** Manual (B3). A goal change resets learning anyway. Advantage+ cannot set age above 25, gender, or drop Audience Network. Pick 40 or 45 after the age breakdown. If manual is not offered, Advantage+ with age min 25.
- **`plans_viewed` step 3 vs step 1.** Step 3. Nearly everyone sees step 1, so no signal. Step 3 is the price screen, ~53% of installs, enough volume.
- **Day 1 before paywall now (B2) vs later (B1).** Next week, as version 2, not a 50/50 now. At 10-15 paywall views a day a split is too thin, and the sheet must work first or both arms read 0. It is first in line if users drop before plans or say "I want to try it first".
- **$29.99 one-time (B4) vs $14.99 monthly (B1).** Monthly now: exists, no review. B4's point is real ($25.50 cash day 0 beats a trial's expected $13-20), so create the product now and ship it only if "no subscription / don't trust trials" is 40%+ of stop answers.
- **$49.99.** Week 2, only if users reach plans and stop at price. Create now (1-2 days review).
- **Price small print on step 1.** Yes (B1). CHECKER's data is about a buy button or price block, not one grey terms line. Older buyers read bare "free" as a catch, and the ads will show the price.
- **I1/I2 and text B now vs day 7.** Now. "$59.99 fixed it", invented "Kayla" and "didn't fix it" are FTC/Meta risks during a pending health review. Near-zero spend, campaign replaced in days, so the learning cost is tiny.
- **Split vs sequence.** One version at a time, 5-7 days, ads and budget frozen.

## 3. The plan

Cap: **$600 paid spend through Dec 5** ($400 Meta, $200 Apple Ads). Rahim pays every bill.

### This week (Nov 12-18)

1. **Sheet audit + clean data.** Fresh and used sandbox Apple IDs: does the sheet say "1 week free"? Fix `plan_sync_failed`, add `purchase_failed {code}`, tag `is_internal`, drop the tester, pull RevenueCat trial outcomes. Rahim does, Rahman watches test video. S, $0. ASC + OTA (native fix needs review). Judge: zero `plan_sync_failed`, 50%+ of buy taps complete.
2. **Meta cleanup today.** $20/day, pause I1/I2, remove text B, screenshot Events Manager category and eligibility, pull age/gender/placement. Rahim does, Rahman decides cap. 2 h, saves ~$30/day. Judge in 1 day: "restricted or not, which events work".
3. **Paywall Version A (B1).** "Not now" at 0 s, small line "7 days free, then $59.99/year", reminder step, yearly trial preselected + monthly $14.99 visible, X at 2 s, countdown and push removed, "What stopped you?" sheet (add "I don't want a subscription"), `pages.ts` fix. Also create $49.99 and $29.99 products in ASC, hidden. Rahim builds, Rahman approves copy. S-M (2 days), $0. OTA. Judge: step-1 exit under 35%, 60%+ reach plans, buy taps per plans view.
4. **Events.** `plans_viewed` (step 3) and `af_initiated_checkout`, no parameters, mapped in AppsFlyer, custom event approved. Rahim, 0.5 day + 24-72 h. OTA. Judge: selectable as goal.
5. **New ads.** B3's 5 concepts, real woman with signed release or Pexels feet-only, "7 days free, then $59.99/year" in each. Rahim makes, Rahman checks every claim, never appears. M (2 days), $0-100.
6. **Launch new campaign** when 1, 3, 4 are done (~Nov 15-16): manual, `plans_viewed`, $40/day, women 40-65+, FB-first. Pause old one 48 h later. Rahim, 1 h. Judge day 3: cost per plans view under $8; kill ads at $20 and 0 plans views.

### Next week (Nov 19-26)

1. **Version 2 from A's leak (~50 paywall views):** drop before plans -> Day 1 first (B2). "Price" -> $49.99. "No subscription" 40%+ -> $29.99 12-week. One change only.
2. **Apple Search Ads** exact match ("plantar fasciitis exercises", "heel pain", "flat feet exercises"), $20/day x 10, after the sheet passes. Rahim runs and pays.
3. **Meta day 7:** 3+ trials under $40 each -> keep, max +20%. 0 trials from 30+ plans views with a working sheet -> pause. Pause Nov 27-Dec 1 unless passing.
4. **Trust outreach:** Rahim emails 15 clinics, 10 small PT YouTubers, 3-5 FB group admins, free codes. No "recommended by" without written OK. ~$30.

### Decide by ~Dec 5

Need ~60 Meta and ~30 Apple Ads plans views on the fixed funnel, else extend one week.
- Apple Ads 3+ trials per 30 plans views, Meta 0-1 per 60 -> **search-first**, stop Meta installs.
- Both near 0, top reason "no subscription", one-time sells -> **one-time program as main offer**.
- Trials come but convert 0-1 of 7+, most cancel in 24 h -> **product problem**: pause ads, test with 5 real users 55+.
- Health restriction confirmed and "standing all day" beats heel ads -> plan an honest reposition (no duplicate app).
- **Stop rule:** $600 spent after fixes with 0 US paid trials -> stop all paid ads, keep app live for organic. Any version with 0 trials after 30-40 plans views and a clean sheet -> drop it.

## 4. Rahman's yes/no decisions

1. Cap paid spend at $600 through Dec 5? **Yes.**
2. Cut Meta to $20/day today? **Yes.**
3. Remove the $29.99 countdown offer and push? **Yes.**
4. Show monthly $14.99 next to yearly? **Yes.**
5. Small price line on step 1? **Yes.**
6. Keep $59.99 yearly this week? **Yes.**
7. Create hidden $49.99 and $29.99 products now? **Yes.**
8. New manual campaign, women 40-65+? **Yes** (Advantage+ fallback).
9. Send IP/IDFV for ATT-denied users for AEM? **Yes, only for the 3 neutral events and only if the privacy page discloses it.**
10. Keep "How did that feel?" in PostHog only, if Day 1 ships? **Yes.**
11. Rename away from "Heel Pain" now? **No.**
12. Build web checkout now? **No.**

F-1: Rahman reviews and sets caps only. Rahim runs payments, ad billing, ASC, RevenueCat, contracts and outreach.
