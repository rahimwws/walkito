# Research summary: psychology of onboarding and paywalls (Nov 9-10, 2026)

BACKGROUND ONLY. You are free to disagree with any of this and give your own approach.
Source: 6 research agents (Claude Opus 5.5). Full reports in
`/Users/rahmanbazarov/.aside/u/0/sessions/2026-09-30_gYhHBTh5tomvN4af/artifacts/research-nov9-paywall-psychology/`
(P1 onboarding science, P2 paywall pricing, P3 health app teardowns, P4 founder numbers, P5 rules, P6 cold paid traffic).
The independent checker did not finish, so numbers below are as reported, not re-verified.

## What most reports agree on
- **Check for a broken or hidden control first.** 0 taps on both buttons plus rage taps looks like a UX problem before a psychology problem (P1, P2, P3, P4, P5, P6). Three founders found a paywall bug before anything else (P4).
- **Small sample.** At a ~4.7% median trial-start rate on hard paywalls (Adapty), 0 of ~20 views happens by chance ~40% of the time. Judge changes on 100-150+ paywall views (P2, P6).
- **Hard paywalls are fine.** RevenueCat 2026: 10.7% of downloads become payers by day 35 with a hard paywall vs 2.1% freemium, similar 1-year retention (P2, P5, P6).
- **Reassurance beats pressure for wary 35-65 health users.** Dated trial timeline + real reminder: Blinkist +23% trial starts, 55% fewer complaints; Foodnoms +58% initial conversion; "No payment due now" +11.9% (P2, P3, P4). Walkito's plans screen already has a Today / Day 5 / Day 7 timeline.
- **Show value before the price.** A real 30-60 second exercise or self-check during onboarding (+25% trial starts in one Adapty test; kenbuildsalone 17.9% vs 7.8% with demo). 1-2 value screens before price helped some (8.1% to 27.5%) but hurt others (-16%), so content matters more than count (P1, P4, P6).
- **Personal, but real.** Headline and paywall that repeat the user's own answers win often (P3, P4). Empty "calculating" loaders can hurt (P1).
- **Cold Meta users need message match.** The first screens should continue what the ad promised; over 50% of users drop after the first screen in FunnelFox data (P6).
- **Price context.** Health & Fitness median yearly price is about $29.99; Walkito charges $59.99 (P2, P6). Muscle Booster charges $59.99/yr and shows "$1.15/week, Best value" in smaller text (P3).
- **App Tracking prompt.** Moving it to first launch roughly doubled opt-in in Adapty data without hurting trials (P1, P3, P6). In Walkito it sits right before the paywall.

## Where reports disagree
- **Exit offer after "Not now".** P2: exit offers convert at ~0.88x of the main paywall and help if closable. P4 and P5: Apple has rejected discount/second offers shown right after a user declines a paywall (a 5.6 rejection in Nov 2024; Cal AI briefly pulled in Apr 2026). Reported safe version: one offer after the user cancels Apple's payment sheet, shown once, easy to close. Not verified against current Apple guidelines.
- **Trial vs no trial.** Mixed founder results. For a 35-65 health audience most reports favor keeping the 7-day trial.
- **Onboarding length.** Longer usually wins in health/fitness when every screen is useful; cut screens that do not change the plan (P1). Note: "How did you find Walkito?" decides who gets the free week, so it cannot simply be removed.

## Rules the reports flag (so you can mark risk next to any idea)
- Apple 3.1.2: the billed amount ($59.99/year) must be the most prominent price; per-week figures smaller. Free-trial on/off toggles rejected since Jan 2026. Terms, Privacy, Restore visible.
- Apple 1.4.1 / FTC: no cure, fix, pain-free or "in X weeks" outcome claims without clinical-trial evidence. No fake or AI testimonials (FTC rule in force since Oct 2024). No fake countdown timers.
- US: FTC click-to-cancel rule is not in force (vacated Jul 2025), but ROSCA still requires clear terms and easy cancellation; California requires clear auto-renewal consent and a reminder before yearly renewal.
- Never send quiz/health answers to Meta (BetterHelp $7.8M FTC case).
- Pushy tactics raise sign-ups short term but raise anger, refunds and 1-star reviews; Health & Fitness refund rate already ~4.7%.

## Things reports say to avoid
Fake urgency, outcome/timeframe claims, hiding the billed price, paywalls with no visible way out, trial toggles, invented stats or reviews, deep discounts or weekly plans as the main fix, promising a reminder that is not sent.
