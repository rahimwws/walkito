# PR #69 - rahimwws/walkito - offer/trial-paywall -> main (opened Nov 10, 2026 ~01:06 AM, not merged)
https://github.com/rahimwws/walkito/pull/69

On Nov 9, the first day of paid Meta installs, 20 people saw the paywall and none tapped the button. They saw $59.99 first, "free" only as small print under the button, and no way past it without opening "Show all plans". Before the paywall, the signature lost 5 of the 25 people who reached it, 13 of 14 rage clicks were on the pain map, and people who came back started again at the welcome screen.

Paywall (only when the store grants this customer the trial)
A trial story replaces the two intro steps (trial-intro.tsx): "Try Walkito free for 7 days" with three promises (no payment today, a reminder 2 days before it ends, cancel any time), then the reminder itself, then the plans. It only shows when trialDays(annualPlan) finds a day/week trial longer than the reminder. Everyone else keeps the current intro, and STORY_WAIT_MS falls back to that intro if the offering is slow.
Plans step: headline "7 days free. Then you decide.", a Today → Day 5 → Day 7 timeline inside the annual card (TrialTimeline, PlanCard takes children), "No payment due today" over the button, and "Start my free week" (offer.plans.ctaTrialWeek) on it. The renewal line no longer repeats "No payment now". With a free week the dock is solid under the line, so the plans link scrolled beneath it can't show through.
The close and "Not now" appear 6 s after the plans step arrives (CLOSE_AFTER_MS) instead of only after "Show all plans". They still lead to Home → Day 1 → the one-time trial offer, so the paywall stays hard.
paywall_step_viewed now carries story, and the new paywall_plans_shown { offering, trial } marks the plans arriving.
plans-hero sticker floor is 110 instead of 140, so the timeline fits without scrolling on an iPhone 16.
Onboarding
Resume: progress (step key, answers, reminder) is kept in kv for 14 days (model/progress.ts), so a return lands on the question it left. Tracks onboarding_resumed.
ATT is asked as the welcome screen is left.
Pain map: a column of named places beside the leg (Calf … Toes), linked both ways to the drawing. Zones without a chip are still named under it.
Contract: the signature is optional. The button reads "I’m in" and agrees with or without ink, and the stamp and ceremony still play. Title "One promise, {name}".
Copy for an audience that walks: "so walking feels good again", "Tap where it hurts."
Attribution
AppsFlyer's restricted media source counts as Meta in trial-audience.ts. Meta withholds detail without the AMM terms, so these installs never got the trial paywall.

All new copy is in all 7 languages. AGENTS.md is updated for the new close timing and the trial story.

Checks
tsc clean, bun test 1222 pass (new: progress.test.ts, plans.test.ts, which asserts no trial wording without a store trial in every language). verify:config and verify:debug pass.
Checked on the iOS simulator with sample prices: all three trial steps, the organic paywall (unchanged), the close path, the pain map and the contract.
Not verified: a sandbox trial purchase and the reminder it schedules, small screens, dark appearance, long locales (de/fr/ru).

JS only, so it can ship over the air. Base is main (1.0.9). Live 1.0.10 is on player/one-picture, which only differs in the session player.

Screens

Paywall, before (top) and after (bottom), Meta audience with a free week:

Pain map and contract, before and after:
