# PROGRESS.md - Fable roast of Walkito onboarding + paywall

## 00:00 - Plan
- Goal: find unfound causes for 23 plans-screen views / 0 taps, roast PR #69, write `07-fable-roast.md`.
- Read order and why:
  1. `06-context.md` first: prices, traffic, past decisions. Need the baseline before judging anything.
  2. `02-screens-index.md` + all 38 screenshots: what the user actually sees. Images beat descriptions.
  3. `04-posthog-funnel.md`: real drop-off, rage taps, answers. This is the only hard evidence we have.
  4. `ads/ADS.md` + ad images: does the promise in the ad match screen 1 of the app?
  5. `03-code-index.md` then only the live code files that touch the plans screen, the close button, purchase flow, and tracking. The "0 taps" number smells like a tracking or layout bug, so code is where that gets confirmed or killed.
  6. `pr-69/`: description, summary, diff, new files. Judge against what I found in 1-5.
  7. `05-research-summary.md` + research only where it helps or where I disagree.
- Working hypotheses going in (to be confirmed or dropped):
  - H1: "0 taps of any kind" on 23 views is not a human pattern. Suspect the plans screen is not capturing taps (tracking gap, overlay, or buttons off-screen), not pure disinterest.
  - H2: 49 -> 24 finish onboarding is a bigger leak than the paywall and nobody is talking about it.
  - H3: ad promise (women 45-65, heel pain) does not match the first screens of the app.

## 00:05 - Read 06-context, 02-screens-index, 04-posthog-funnel, ads/ADS.md, 03-code-index
- Learned: $59.99/yr with 7-day trial for Meta users, hard paywall, no exit on plans screen until "Show all plans" is tapped (0 did). 16 of 17 rage taps on the 3D pain map; 16 of 36 picked "Nothing hurts right now". 6 of 30 quit at the signature. Only 1 of 49 picked "Easier mornings" while ads sell mornings. 16 of 21 denied ATT.
- H1 update: plans screen has no visible exit by design (CLOSE_AFTER_MS only after expand). That explains 0 skip/close but NOT 0 trial taps. Still need to see the screen and the purchase code.
- New hypothesis H4: the people reaching the paywall are not the ad's people. 44% say nothing hurts, 20 of 41 are "everyday walking", goal "stay injury-free" top. The ad sells heel pain; the plans screen sells "stronger every day". Mismatch both ways.
- New hypothesis H5: the pain map is a UI failure for 55+ fingers on a 3D model; the "Nothing hurts" exit is a bail-out, not an answer. If true, the personalisation and the paywall pitch are built on a lie for ~half the users.
- Next: all 38 screenshots, then ad images. Need to see what a 60-year-old sees.

## 00:20 - Read screenshots 01-38 (all onboarding + paywall)
- Learned (onboarding): 4 screens before the first question (01 launch, 02 "Swipe up to enter", 03 intro, 04 welcome). 03 and 04 both are "welcome" screens. The whole thing is dark, space, mascot, confetti, stamps, a signature pad. It is built for a 25-year-old Duolingo user, not a 58-year-old nurse with heel pain.
- Learned (pain map, 10): the 3D leg shows no "tap here" hint, zones are small, there is no "heel" or "arch" label visible in the hint text even though the app is called Heel Pain. "Nothing hurts right now" is the only big obvious tappable thing under the leg. That explains 16 of 36 "skipping": the chip is the path of least resistance.
- Learned (goal, 18): there is no "heel pain" or "plantar fasciitis" option. Options are "Easier mornings / shift / stronger arches / stay injury-free". The ad's person has no option to choose.
- Learned (35): first paywall step says "TOMORROW: Before your first step". The plan starts tomorrow. Nothing to do now. Weak moment to ask for a card.
- Learned (36-38): light screen, mascot in clouds, "Walkito Plus" badge, "Your feet, stronger every day". The word "Plus" implies a free base tier exists. No close, no social proof, no price-per-month, "$59.99" printed 4 times on one screen, "Streaks and stickers" as a selling point to a 60-year-old. The CTA floats over the timeline text (36) and looks like an overlay bug.
- Hypothesis H6: the paywall reads as an "upgrade to Plus" pop-up. Older users wait for the X, find none, and kill the app. Supported by: 0 taps of any kind, 3-25 s dwell, "Plus" badge, style switch dark->light.
- Hypothesis H7: "$59.99" is simply too much for a first ask to this audience with zero proof. Ads say $59.99 too, so they were pre-warned, which argues against this being the whole story. Medium confidence.
- Next: ad images (message match), then code for plans-step, offer-page, trial-audience, tracking.

## 00:40 - Read ads (4 images + ADS.md)
- 95% of spend is V2_mascot: anatomy heel + mascot, "Before you spend another $400 on insoles... First week free". Decent match to screen 03.
- RISK found in ads, not in the app: I1 receipt says "$59.99 fixed it" (cure claim, breaks the team's own rule and FTC health-claim rules). I2 "Kayla" chat is an invented testimonial of a young woman in heels (FTC Endorsement Guides). Both are off-audience for 55+ walkers. Low spend today, but they are live.
- Dropped H7 as a lead cause: every ad text says "$59.99 a year". The user who installs was told the price. Price is not the first-order problem.

## 01:00 - Read live code: plans-step, offer-page, offer-wall, trial-audience, tracking, steps, onboarding-page, pain-map-step, catalogues, PR files + diff
- Confirmed: close/"Not now" only after "Show all plans" + 3 s (plans-step.tsx:48,142-147). 0 expanded = 0 ever saw an exit.
- NEW: "Not now" does not go to another paywall. It goes to Home, a FREE 2-minute "Day 1" session, a tour, then the offer wall (offer-page.tsx:672-685, AGENTS.md "A hard paywall, with one free thing"). The best try-before-you-buy asset in the app is behind a control nobody can see.
- NEW: paywall_dismissed only fires on unmount (offer-page.tsx:427-434). Killing the app never unmounts. "0 dismissed" is an artifact, not a signal.
- NEW: ATT is the last tap before the paywall (onboarding-page.tsx:1087-1098). Mascot cheers, then iOS asks "track your activity across other companies' apps", then the price. 16 of 21 said no. PR moves it to the welcome exit. Agree.
- NEW: Welcome phrases rotate (pages.ts:141-144). Two of four lines on screen 03 are runner lines ("so your next long run doesn't cost you a week", "so you can run again"). PR fixes one of the two.
- NEW: "Easier mornings" is only offered to people who marked pain (journey.ts:62-63). So "1 of 49" is really "1 of ~20". Still low, but not the headline the funnel doc makes it.
- NEW: screen 02 "Swipe up to enter" is the welcome gate. 49 -> 41 happens there (16%). A swipe gesture gate for 55+ on a $3 install. Nobody has flagged it.
- NEW: the notification banner says "Your shins will thank you" (onboarding.ts:356). Act names include "Your sport" (onboarding.ts:36). Goals include "Stay injury-free". The runner app is still showing through.
- NEW: after "Not now" + Day 1 + tour, the offer wall shows a 15-minute countdown "Limited offer" (AGENTS.md). For this audience a countdown is a trust cost, and exit discounts after a decline have Apple risk (research P4/P5).
- NEW: paywall step 2 for organic users still shows a phone mockup of Home; Rahim's summary says it reads "longest run this month 8.4 km". Not fixed in the PR for anyone outside the trial story.
- NEW: PR base is main (1.0.9); live is player/one-picture (1.0.10). An OTA built from main could roll the player fix back for 1.0.10 users unless the branch is merged first.
- PR gaps: trial-first steps wait up to 2.5 s on a blank screen with only a step bar (STORY_WAIT_MS); "Not now" still sits at the bottom of the scroll under "What you get"; "Plus" badge and one-column checklist untouched; no CTA-tap event separate from purchase_started; no sandbox trial purchase verified.
- Hypothesis H8 (strong): the "Nothing hurts right now" chip is a copy bug. The question asks "usually", the chip asks "right now". A 60-year-old on the couch at 9 pm answers truthfully: nothing hurts right now. 44% take it, lose the pain questions, and arrive at the paywall as "prevention" users the ad never targeted.

## 01:10 - Research skim (05 summary, P4, P6 headings, 01-x-articles)
- Agree with: check for broken/hidden control first; trial timeline + reminder; value before price; small sample. 0 of 23 at a 5% base rate happens ~31% of the time, so judge on 100-150 plans views.
- Disagree with: "the quiz is not the main leak" (P4). 25 of 49 paid installs never reach the paywall. At $3 each that is ~$75/day before anyone sees a price. Two of the leaks (swipe gate, signature) are one-line fixes.
- Disagree with: more pre-price screens by default (P4 B). Stompers lost with multi-page. For a tired 60-year-old, one honest screen beats three.
- Starting the report now.

## 01:30 - Report written: 07-fable-roast.md
- 8 sections as asked. Every claim tagged with a screenshot, file:line or PostHog number; guesses marked.
- Top causes, ranked: (1) plans screen reads as an "upgrade to Plus" pop-up with no exit, (2) ATT prompt as the last tap before the price, (3) "Nothing hurts right now" copy bug sends 44% down the prevention path, (4) runner-app copy and game styling for a 55+ walker, (5) 25 of 49 lost before the paywall, mostly at the swipe gate and the signature.
- PR #69: keep the trial story, plans changes, chips, saved progress, ATT move. Change the exit to 0 s in the dock, delete the contract instead of making it optional. Missed: swipe gate, pain chip wording, "Plus" naming, the hidden free Day 1 session, release base (main vs 1.0.10 branch), small screens, sandbox trial.

## 01:32 - DONE
- Nobody taps because the plans screen looks like a closable upsell and has no close; the fix is a visible exit, honest trial framing, and value (the existing 2-minute session) before the price.
- Half the paid audience is mislabelled "no pain" by a chip that says "right now", and a quarter never reach the paywall because of a swipe gate and a signature.
- Ship the PR with four changes plus six small cuts this week, judge on 75+ plans views, and keep the price where it is until the funnel is fixed.
