# What Rahim's Fable run reported (translated from Russian, Nov 10, 2026)
Original screenshots: `rahim-fable-chat/1.png`, `2.png`. This run produced branch `offer/trial-paywall` and PR #69.

New onboarding and paywall are built and work in the simulator. (At the time of the message: uncommitted in a worktree; the Mac went offline at 07:50 UTC. Later committed as bbccdd8 and opened as PR #69.)

## Roast on the facts (Nov 9, Meta, US iOS)
- 20 people saw the paywall, nobody tapped the button. For 5-25 seconds they saw only the price $59.99. The word "free" appeared only as small text under the button, and "Not now" was hidden behind "Show all plans", which nobody tapped.
- The second paywall screen shows "longest run this month - 8.4 km". This audience is women 45+ who walk, not run.
- Before the paywall: the contract signature cut 5 of 25 people. 13 of 14 rage clicks were on the pain map, because tapping on the drawing of the leg is awkward. 6 of 16 who did not finish came back to the app and landed on the first screen with their answers lost.

## Paywall (only for people the store really gives a 7-day trial)
1. "Try Walkito free for 7 days" and three promises: no payment today, reminder 2 days before, cancel in Settings. Removes the fear of being charged, which is why people left.
2. Reminder screen: shows the push that will arrive on day 5.
3. Plans: headline "7 days free. Then you decide.", timeline "Today > Day 5 > Day 7" inside the card, above the button "No payment due today", the button itself "Start my free week". The close (X) appears 6 seconds after the screen, not only after "Show all plans". The paywall stays hard: the X leads to Home > "Day 1" > offer, not into the app.

If the store does not give a trial, the word "free" appears nowhere (locked by a test in all 7 languages). Organic users see the old flow, it is not broken.

## Onboarding
- Pain map: next to the leg, a column of buttons "Calf, Shin, Achilles, Ankle, Heel, Arch, Ball of foot, Toes". Tap a word instead of aiming at the drawing.
- Contract: signature is now optional, the "I'm in" button is active right away, stamp and animation stay. Title "One promise, {name}".
- Progress is saved: whoever comes back continues from the same question with their answers (kept 14 days).
- ATT prompt moved to leaving the welcome screen, as the rule in AGENTS.md requires.
- Copy fixed for walking: "so walking feels good again", "Tap where it hurts."
- AppsFlyer source `restricted` now counts as Meta, otherwise these people did not get the trial paywall.
- All new texts translated into 7 languages.

## Checked
tsc clean, 1222 tests green (added tests for progress and the trial button text), verify:config/debug pass. No new Metro errors (the 2 in the log are from the previous version of plans-hero).

## Not checked
Real trial purchase in sandbox and scheduling the reminder, small screen, dark theme, long languages (de, fr, ru). The "8.4 km" screen for organic users was not touched because it is an image.

## One conflict it noted
Rahman's card says "do not touch the paywall until his decision". It built it on Rahim's word but rolled nothing out, and offered to commit and open a PR so Rahim and Rahman can review together.
