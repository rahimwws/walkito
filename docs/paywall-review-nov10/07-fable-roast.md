# Walkito onboarding + paywall roast (Fable, Nov 10, 2026)

Read first: the sample is 49 installs and 23 plans-screen views. At a 5% trial-start base rate, 0 of 23 happens about 31% of the time by pure chance. At 10%, about 9%. So "0 trials" alone proves nothing. What does mean something is 0 taps on *anything*: no trial, no "Show all plans", no exit, and people gone in 3 to 25 seconds. That is not a price objection. That is a screen people do not know what to do with, so they do the one thing they know: kill the app.

Evidence tags: `[S36]` = screenshot 36, `file:line` = live code in `code/live/src/`, `[PH]` = `04-posthog-funnel.md`. "Guess" means I could not verify it.

---

## 1. Top 5 reasons nobody starts the trial

Ranked by how much I think each one costs you, with how sure I am.

### 1. The plans screen looks like an "upgrade to Plus" pop-up, and there is no way to close it. (Sure: high)

- `[S36]` The onboarding is dark. The plans screen is suddenly white and purple with a mascot in clouds and a badge that says **"Walkito Plus"**. To a 60-year-old, a sudden light screen with a "Plus" badge is the thing every app shows when it wants an upsell. The learned reflex is: find the X.
- There is no X. `plans-step.tsx:45-48, 142-147`: the close and "Not now" appear 3 s **after "Show all plans" is tapped**. `[PH]` 0 of 23 tapped "Show all plans". So 0 of 23 ever saw an exit.
- `[S37-38]` "What you get" is a one-column checklist with a "Plus" header and checkmarks. That is the visual grammar of a free-vs-paid table with the free column missing. People scan for the free column, do not find it, and leave.
- The word "Plus" implies a base tier exists. It does not (`offer.ts:211-212`, "never a 'free' column: there is no way into the app without Plus"). You are naming your only product like an add-on.
- `paywall_dismissed` is 0 because it only fires on unmount (`offer-page.tsx:427-434`). Killing the app never unmounts. That zero is a measurement artifact, not a signal. Stop citing it.

### 2. The app asks "Allow Walkito to track you across other companies' apps" as the very last thing before the price. (Sure: high)

- `onboarding-page.tsx:1087-1098`: on the last Continue, the mascot cheers, then `askTracking()`, then `finish()`, then the paywall. The last sentence a wary person reads before seeing $59.99 is Apple's tracking warning. `[PH]` 16 of 21 said "Don't allow". You taught them to say no, then asked for money.
- PR #69 moves it to the welcome exit. Correct. Keep that.

### 3. Half of the paid audience is told they are in the wrong app, by a copy bug. (Sure: medium-high)

- `[S10]` The question is "Where does it **usually** hurt?" The only obvious button on the screen says "Nothing hurts **right now**". Those are two different questions. A woman on the couch at 9 pm with morning heel pain answers the second one truthfully: nothing hurts right now.
- `[PH]` 16 of 36 (44%) took that chip. 16 of 17 rage taps were on this screen. The 3D leg has no "tap here" hint and the plantar heel, the one spot the ad is about, is a sliver at the bottom of a side view (guess on hit area; `LegMap` is not in the snapshot).
- Consequence: `steps.ts:308-374` skips side, duration, morning pain, safety and tried for them. `journey.ts:62-63` then hides "Easier mornings" from the goal list. Their Foot Passport is thin, the "why it still hurts" promise from `[S04]` is never paid off, and the paywall sells "Your feet, stronger every day" to someone who came for heel pain. The ad brought a pain user; the app turned her into a prevention user, then pitched her generically.
- Side note: the funnel doc's "only 1 of 49 picked Easier mornings" is really 1 of about 20, because the option is only shown to people who marked pain. Still bad, not the headline.

### 4. The app still thinks it is a running app, and the audience is 55+ women who walk. (Sure: medium-high)

- `[S03]` The first line rotates through four phrases (`pages.ts:141-144`). Two of four are runner lines: "so your next long run doesn't cost you a week" and "so you can run again". PR #69 fixes one.
- `[S06]` First option is "Running". `[S18]` "Stay injury-free" and "Stronger arches" are athlete words; "Stay injury-free" was the top answer `[PH]` because nothing else fit. `[S22]` The notification banner says "Your shins will thank you". The progress bar's acts are named "About you / **Your sport** / Your health / Your plan" (`onboarding.ts:35-38`). `[S38]` "Streaks and stickers" is a selling point. Paywall step 2 for organic users shows a Home mockup that Rahim's own summary says reads "longest run this month 8.4 km" (`RAHIM-FABLE-SUMMARY.md`, not fixed in the PR).
- The whole thing is dark, space, chrome logo, rocket, astronaut, confetti, a signature pad `[S02, S03, S20, S27, S30]`. It is built like Duolingo for a 28-year-old. The person paying is a nurse at the end of a 12-hour shift. She is not in a mood for a stamp collection.

### 5. 25 of 49 paid installs never reach the paywall, and the two biggest leaks are gates, not questions. (Sure: high on where, medium on why)

- `[PH]` welcome 49 → intro 41. That drop is **screen 02, "Swipe up to enter"** `[S02]`. A gesture gate with no button, on a $3 install, for people over 55. 16% gone before the first word. Nobody on the team has flagged this screen.
- `[PH]` contract 30 → outlook 24. `[S30]` "Let's make a contract" with a mandatory signature (`onboarding-page.tsx:834-835`). A signature pad before anyone has seen a price reads as a trap. 20% leave.
- At $3 an install that is roughly $75 a day spent on people who never see the price. The paywall cannot convert people who are not there.

What I dropped: price as the first-order cause. Every ad text says "First week free, then $59.99 a year" (`ADS.md`), and the receipt ad literally prints $59.99. These people installed knowing the price. $59.99 is high for the category (median ~$29.99) and I would test it later, but it does not explain zero taps of any kind.

---

## 2. Onboarding roast, screen by screen

Only the screens that matter. "Cut / Change / Keep".

- **[S01] Launch, [S02] "Swipe up to enter".** CUT S02. It is a liquid-glass gate for a demo video. 8 of 49 died here. Replace with nothing: land on the first message screen.
- **[S03] "Train ~~support~~ your feet that hurt every morning" + "Let's go".** KEEP the idea, CHANGE the copy. The strike-through joke is clever for you and invisible to her. Two of four rotating lines are about running. Make it one fixed line that repeats the ad.
- **[S04] "Hi, I'm Walkito. Let's find out why it still hurts."** CUT or MERGE into S03. Two welcome screens in a row. Also, you never tell her why it still hurts; the "why" step is retired (`steps.ts:421-423`). Do not promise it.
- **[S05] Name.** KEEP but move it later (after the pain map). Asking a name before showing any value is a field for the sake of a field. Every field is a drop point.
- **[S06] "What keeps you on your feet?"** CHANGE. Put "Everyday walking" first and "Running" last. 20 of 41 answered walking `[PH]`.
- **[S07, S13, S17] "Tap to continue" reaction screens.** CUT all three. Three dead taps. Put the one-liner under the next question instead (you already have `CoachBubble`).
- **[S08] Big toe lift.** KEEP. It is physical, it is a test, it changes the plan (`toeWork`). This is your best early screen. Consider making it screen 2.
- **[S09] Bunion.** KEEP but shorten. Fine.
- **[S10] Pain map.** CHANGE, top priority. Rename the chip (see section 6). Add tappable place names (PR #69 does this). Put "Heel" and "Arch" first in that list, not "Calf". Add "Tap the spot, or pick a name" under the title. The disclaimer in 11.5pt grey is right to have and should stay small.
- **[S11] Which side, [S12] How long.** KEEP. Short, relevant.
- **[S14] Pain in first steps today, 0-10.** KEEP. Good screen, mascot reacts, it seeds the check-in.
- **[S15] Red flags.** KEEP. Required for a health app. The subline "Week one starts seated... call emergency services" above a list of checkboxes is alarming before anything was ticked. Show the warning only after a flag is ticked.
- **[S16] What have you tried.** KEEP. It sets up the "insoles don't train muscles" story the ad started. Use the answer on the paywall ("You've tried insoles. This trains what insoles hold up.").
- **[S18] Goal.** CHANGE the options for walkers (section 6). Always show the mornings option; it is the ad's promise.
- **[S19] Hours on feet.** KEEP, conditional already.
- **[S20] Foot Passport.** KEEP, shorten. The "001 FIRST EDITION" stamp is cute and costs nothing. The summary grid is genuinely good: it proves you listened.
- **[S21] "How did you find Walkito?"** CHANGE. It exists to decide who gets the trial (`trial-audience.ts:70-82`). Give everyone the trial and this becomes a pure attribution question that can move after purchase. If you keep it here, fine, it is one tap.
- **[S22] Notifications pitch.** CHANGE copy: "Your shins will thank you" and "occasional offers" (`onboarding.ts:356, 361`). A 60-year-old reads "offers" as spam. Say "One reminder a day. Turn it off any time."
- **[S23-25] When, how many days, how long.** KEEP. These make the plan hers.
- **[S26-27] Building your plan / Plan ready.** KEEP. The PT line with a photo is your only trust signal in the whole flow. Confirm you have her written OK (`06-context.md`); if not, this is a RISK (FTC endorsement, App Review 2.3.1).
- **[S28-29] Your first week, with real video thumbnails.** KEEP and PROMOTE. This is the first time she sees a real foot doing a real thing. It is screen 28. It should be screen 10. And it should be on the paywall.
- **[S30] Contract with mandatory signature.** CUT the whole screen. Not optional, gone. Evidence for pledge screens is about retention, not conversion (P4 section L), and it cost you 20% of the people who reached it. A "contract" before a price reads as a trick.
- **[S31-34] Here's where this goes, Today / Month 1-3.** KEEP one screen, drop the tabs. Four taps to see "Sore → Calmer". Show Today and Month 3 side by side. The footnote "not a prediction" is right and must stay.

Total: from ~26 screens to ~16. For this audience every extra screen is a chance to put the phone down.

---

## 3. Paywall roast: live vs PR #69, side by side

| Element | Live 1.0.10 `[S35-38]` | PR #69 | My take |
|---|---|---|---|
| Screens before price | 2: "how your plan starts" (first item: **TOMORROW**), "what you get every day" with a Home mockup (8.4 km run stat) | 2 for trial users: "Try Walkito free for 7 days" + 3 promises, then the reminder as a real notification. Organic users keep the old two. | PR direction is right. But "TOMORROW: Before your first step" tells her nothing happens today. Give her something to do today (section 5, idea 1). And fix the 8.4 km mockup for everyone or drop step 2. |
| Headline | "Your feet, stronger every day" | "7 days free. Then you decide." | PR wins. I would add her name. |
| Brand line | "Walkito **Plus**" badge | unchanged | Drop "Plus" on the first paywall. Call it "Your plan". |
| Plan card | Yearly, "1 week free, then $59.99 per year", $59.99 big | Same card with the Today / Day 5 / Day 7 timeline inside it | Keep PR. Add one small line: "about $5 a month". Billed price must stay largest (Apple 3.1.2). |
| Over the button | nothing | "No payment due today" | Keep PR. |
| Button | black, "Start my free trial" | purple, full width, "Start my free week" | Keep PR. Black on white was the only black button in the app. |
| Under the button | "No payment now. 1 week free, then $59.99 per year. Cancel anytime in Settings." | "1 week free, then $59.99 per year. Cancel anytime in Settings." | Fine. |
| "What you get" | one column, "Plus" header, 5 checkmarks, "Streaks and stickers" | unchanged | Change to a plain 3-item list in her words. Remove "Streaks and stickers". Remove the "Plus" column header. |
| Trust | "Exercises reviewed by a physical therapist" | unchanged | Add the App Store rating if it is 4.5+ with 50+ ratings. Add 1-2 real reviews. Real only (FTC, Apple 2.3.1). |
| Exit | none until "Show all plans" + 3 s | X over the sky + "Not now" at the bottom of the scroll, both after 6 s | Still wrong. "Not now" sits under "What you get", below the fold. A timer on an exit is a dark-pattern smell and Apple reviewers notice it. Show "Not now" under the button from second zero. |
| After exit | Home → free 2-minute Day 1 session → tour → offer wall with a 15-minute countdown | unchanged | The free session is your best asset and it is hidden behind the hidden exit. The countdown is a trust cost for this audience. RISK: exit discounts after a decline have drawn Apple rejections (research P4/P5, Guideline 3.1.1 and 5.6). |
| Who gets the trial | Meta per AppsFlyer, or survey answer Instagram/Facebook | adds AppsFlyer "restricted" | Give everyone the trial. 4 of 32 Meta-ad users answered TikTok/App Store/Other `[PH]` and got full price. The gate is complexity for ~0 organic installs a day. |
| Store wait | prices load while steps 1-2 show | up to 2.5 s blank screen with only a step bar if the store is slow (`STORY_WAIT_MS`) | Prefetch the shelf during onboarding so the paywall never waits. |
| Dock | floats over the timeline text `[S36]`, looks like an overlay bug | solid white under "No payment" | Keep PR. |

Verdict on the live paywall as a whole: it is a well-built screen for the wrong person. The code is careful about Apple rules and store prices (good). It has no social proof, no exit, a name that implies a free tier, and a tone (clouds, stickers, "Plus") that reads as a game upsell to the person you are buying.

---

## 4. PR #69 verdict, change by change

| Change | Verdict | Why |
|---|---|---|
| Trial story: "Try free for 7 days" + reminder screen | **KEEP, trim** | The right message in the right order (Blinkist, Foodnoms, Pregnancy+ all point here). Two extra screens is one too many for a tired reader; put the three promises on the plans screen itself and keep the reminder screen. Watch `paywall_step_viewed{story}` drop between step 1 and 3. |
| Plans headline "7 days free. Then you decide." + timeline in card + "No payment due today" + "Start my free week" | **KEEP** | Correct. Add the name. |
| Close + "Not now" after 6 s from arrival | **CHANGE** | Make it 0 s and put "Not now" in the dock under the button. The X over the sky is a 24pt target on a purple gradient `[S36]`. Below-the-fold "Not now" (`plans-step.tsx:298-309` unchanged by the diff) is still invisible. |
| Pain map word chips | **KEEP** | Good. Reorder: Heel, Arch, Ball of foot, Achilles, Ankle, Toes, Calf, Shin. The ad is about heels. |
| "Tap where it hurts." coach line | **KEEP** | |
| Signature optional, "I'm in" | **CHANGE → delete the step** | Optional still costs a screen and a decision. Delete it: `skipWhen: () => true` like the retired `why` step. |
| Saved progress, 14 days, `onboarding_resumed` | **KEEP** | Harmless and honest. 7 of 16 non-finishers came back. |
| ATT at welcome exit | **KEEP** | Right move. Note: it means the first three things a cold user meets are a swipe gate, a button and a system dialog. Cut the swipe gate (not in the PR). |
| "restricted" counts as Meta | **KEEP, but moot** | Only helps the 5 of 21 who allow tracking. Trial-for-all makes it irrelevant. |
| Copy "so walking feels good again" | **KEEP** | Mild outcome phrasing, acceptable. Also fix phrase3 ("your next long run"), which the PR missed. |
| `paywall_plans_shown{trial}` event | **KEEP** | This answers the one thing nobody can see today: did StoreKit actually grant the trial to those 19 people? |

**What the PR broke or risks**

- **Release base.** The PR is on main (1.0.9); live is `player/one-picture` (1.0.10) (`03-code-index.md`). An OTA update built from main would ship to 1.0.10 binaries without the player change. Merge the player branch into main first, then this PR, then publish.
- **Blank first step.** If the store is slow the trial audience sees an empty screen with a progress bar for up to 2.5 s, then falls back to the old "plan" story with no free-week promise at all. On LTE in a parking lot that is real. Prefetch `fetchShelf` when onboarding starts.
- **Small phones unchecked.** Timeline inside the card + "No payment" line + a taller button + sky at 112pt. The PR says not verified on small screens or large text. Your audience uses larger Dynamic Type more than average. Check iPhone SE and text size XL before you ship.
- **No sandbox trial purchase verified.** The one path that makes money was not tested end to end.
- **No CTA-tap event.** `purchase_started` fires inside the purchase call. Add `paywall_cta_tapped` so a tap that dies in StoreKit still counts.

**What the PR missed entirely**

- The swipe-up gate (16% loss, biggest early drop).
- "Nothing hurts right now" wording (44% skip).
- The "Plus" naming and the one-column checklist.
- The "8.4 km" Home mockup for organic users.
- The free Day 1 session hiding behind the exit.
- "Your shins will thank you", "Your sport", "Streaks and stickers", "Stay injury-free".
- The 15-minute countdown after exit.
- The ads (section 5, idea 11).

---

## 5. New ideas you have not considered

Each: why, expected effect, effort, risk.

1. **Put the free 2-minute Day 1 session before the paywall.** It already exists (`AGENTS.md` "A hard paywall, with one free thing", `DayOneCard`, `day-one.ts`). After "Your plan is ready" `[S27]`, offer "Do your first 2 minutes now" with the two filmed clips, then "How did that feel?" (one tap), then the paywall with "Start my free week". Why: value before price is the single most repeated winner in your own research (demo completers 17.9% vs 7.8%; Adapty +25%), and you have the asset built. Effect: the biggest lever on this list, I would guess 2-4x on trial starts once the exit and pain-map fixes are in. Effort: M (it is a re-route, not a build). RISK: none for Apple; the paywall stays hard. Make sure nothing on the paywall says "free version".
2. **Remove the swipe gate (S02).** Effort: S. Effect: recover most of the 16%. Risk: none.
3. **Rename the pain chip.** "I'm here to prevent pain" instead of "Nothing hurts right now", and change the title to "Where does it hurt most days?" Effort: S. Effect: "none" share from 44% toward 15-25%; more people get the pain questions and the mornings goal. Risk: none.
4. **Trial for everyone, no source gating.** `trialOnFirstPaywall()` returns true. Keep the source question only for attribution. Effort: S. Effect: removes a whole class of "who saw what" bugs and the 2.5 s store wait logic. RISK: none. Apple decides trial eligibility per Apple ID anyway.
5. **Exit visible from second zero, in the dock, and it leads to the 2 minutes.** "Not now" → Day 1 session → one plain second offer, no countdown. Effort: S. Effect: you finally measure intent (people who want out vs people who are confused). Risk: fewer trial starts from pure pressure; you were getting zero from pressure anyway.
6. **Kill the 15-minute countdown comeback.** Replace with the same trial offer said once more, or the $29.99 first year with no clock. Effort: S. RISK note: a discount shown right after a decline has drawn Apple rejections (research P4/P5). A countdown adds FTC "fake urgency" exposure even if the deadline is technically real.
7. **Make the first-week videos the paywall hero.** Replace the mascot-in-clouds sky `[S36]` with the two thumbnails from `[S28-29]` and the line "Your week: 5 sessions, 5 minutes, before your first step." Why: she buys a foot doing an exercise, not a flower. Effort: M. Risk: none.
8. **Match the paywall to the onboarding (dark) or the onboarding to the paywall (light).** The style switch at S35→S36 is the moment it starts to look like a different app's pop-up. Guess: light everywhere tests better with 55+. Effort: M to L. Risk: none.
9. **Real social proof on the paywall.** App Store rating if 4.5+ with 50+ ratings, two real reviews with first name and age. If you do not have them, say nothing. Effort: S. RISK: real only; invented or paraphrased reviews break FTC's fake-review rule (in force since Oct 2024) and Apple 2.3.1.
10. **Prefetch store offerings during onboarding.** `fetchShelf` at `onboarding_started`. Effort: S. Effect: no blank paywall, no 2.5 s wait. Risk: none.
11. **Fix the ads, not just the app.** `I1_receipt` says "$59.99 fixed it": that is a cure claim and breaks your own rule and FTC health-claim rules. `I2_kayla` is an invented testimonial of a young woman in heels aimed at 55+ walkers; FTC Endorsement Guides (16 CFR 255) treat it as a fake endorsement. Both are low spend today but live. Pause them. Make one creative with a woman in her 50s on the edge of the bed. Effort: S to pause, M to replace. RISK: as stated.
12. **Cut the post-purchase setup to one screen.** After buying, `pages/setup` asks for an account, Health, a watch, a founders' note and a widget before the first session (`AGENTS.md` Onboarding). Context says most trials were cancelled. A trial that starts with five admin screens is a trial that cancels. Effort: M. Risk: Apple needs account to stay optional; it already is.
13. **Price test, later.** $39.99 vs $59.99 for the Meta cohort, once the funnel is fixed and you have 150+ views per arm. Not now; it would take three weeks to read at 20 views a day. Effort: S to set up. Risk: none.
14. **Ask five real 55+ women to go through it while you watch.** Session replay is off by policy, and it should be. Five watched sessions on S02, S10 and S36 will tell you more than the next 500 PostHog events. Effort: S. Risk: none.

---

## 6. Exact copy, ready to paste

**Screen 1 (replaces S02 + S03 + S04)**
- Headline: `Heel pain in the morning?`
- Subline: `Five minutes of foot exercises, done before you stand up. Made for people on their feet all day.`
- Button: `Start`
- Small link: `Already have an account? Sign in`

**Pain map (S10)**
- Title: `Where does it hurt most days, {name}?`
- Coach line: `Tap the spot, or pick a name on the right.`
- Chip: `I'm here to prevent pain`
- Place names, in this order: `Heel · Arch · Ball of foot · Achilles · Ankle · Toes · Calf · Shin`

**Goal (S18), for "Everyday walking" and "Work on my feet"**
- Title: `What would you like to change?`
- Options: `Mornings without the first-step pain` / `Get through the day without aching` / `Walk further, more comfortably` / `Stronger arches (flat feet)`
- Drop: `Stay injury-free`

**Notifications (S22)**
- Title: `A short nudge each day, {name}`
- Banner: `Today: 5 minutes for your heels, before your first step.`
- Consent line: `One reminder a day. Turn it off any time.`

**Plan ready (S27)**
- Title: `Your plan is ready, {name}.`
- Button: `Try the first 2 minutes now`
- Secondary: `See my plan first`

**Paywall, trial audience (single plans screen, no "Plus")**
- Eyebrow: `Your plan`
- Headline: `{name}, your first week is free.`
- Subline: `Then $59.99 a year. Cancel any time in Settings.`
- Small line (smaller than the price, Apple 3.1.2): `That's about $5 a month.`
- Card: `Yearly · 7 days free, then $59.99 per year`
- Timeline in card: `Today: full access, nothing to pay` / `Day 5: we remind you` / `Day 7: $59.99 for the year, unless you cancel`
- What you get (3 lines): `5-minute sessions, video-guided, no equipment` / `A plan that changes with how your feet feel each morning` / `A progress check every two weeks`
- Trust line (only with written OK): `Exercises reviewed by a licensed physical therapist`
- Over the button: `No payment today`
- Button: `Start my free week`
- Under the button: `7 days free, then $59.99 per year. Cancel anytime in Settings.`
- Exit, in the dock, visible at once: `Not now`

**Paywall, no trial (organic)**
- Headline: `{name}, your plan is ready.`
- Subline: `$59.99 a year. That's about $5 a month. Cancel any time.`
- Button: `Start my plan`

**After "Not now"**
- Card: `Try two minutes first.` / `Two easy moves to wake your feet up. Then decide.`
- Button: `Start the 2 minutes`

**Second offer after the 2 minutes (replaces the countdown)**
- Headline: `How did that feel, {name}?`
- Subline: `Your first week is still free. We'll remind you before it ends.`
- Button: `Start my free week`

---

## 7. What to ship first: one bundle for this week

All JavaScript, ships over the air. Order of work:

1. Merge `player/one-picture` into main so the OTA does not roll back 1.0.10.
2. Take PR #69's trial story, plans-screen changes, pain-map chips, saved progress and ATT move.
3. Change in the PR: exit at 0 s, "Not now" in the dock under the button; delete the contract step instead of making it optional; reorder the chips with Heel first.
4. Add: remove S02 swipe gate; rename the pain chip and title; trial for everyone; drop the "Plus" badge and the one-column header; fix the runner copy (`pages.welcome.phrase3`, shins banner, "Your sport", "Stay injury-free", "Streaks and stickers"); prefetch the store shelf at onboarding start.
5. Add events: `paywall_cta_tapped`, `paywall_exit_shown`, keep PR's `paywall_plans_shown{trial}`.
6. Pause the receipt and Kayla ads.
7. If there is one more day: route "Not now" and "Plan ready" to the 2-minute session before the paywall (idea 1).

**How to read it in 3-5 days (about 100 installs, 60-80 plans views)**

| Signal | PostHog | Now | Target | Meaning |
|---|---|---|---|---|
| Swipe gate loss | `onboarding_step_viewed` welcome → intro | 16% | under 5% | gate removed |
| Pain "none" share | pain step → side step | 44% skip | under 25% | copy fixed |
| Signature loss | contract → outlook | 20% | 0% (step gone) | |
| Finish onboarding | `onboarding_completed` / `onboarding_started` | 49% | 65%+ | |
| Any tap on plans | `paywall_cta_tapped` + `paywall_plans_expanded` + `paywall_skipped` / `paywall_plans_shown` | 0% | 40%+ | screen is understood |
| Trial granted | `paywall_plans_shown{trial:true}` / `paywall_plans_shown` | unknown | 95%+ | StoreKit eligibility is fine |
| Trial starts | `purchase_completed` (trial) / `paywall_plans_shown` | 0 of 23 | 3+ in the first 75 views (4%+) | |
| Exit → session | `paywall_skipped` → `day1_session_started` → `home_offer_viewed` | 0 | 50%+ of skippers start the 2 minutes | the free asset works |
| ATT allow | `att_answered{granted}` | 24% | 35%+ | moved earlier |

Decision rule: if after 75 plans views there are still 0 trials, the plans screen is still broken (that outcome has about a 2% chance at a 5% rate). If there are 3-6, you are at category norm and the next lever is idea 1. Do not change price before you have 150 views per arm.

---

## 8. Things I could not check, and the data I want next

- **StoreKit trial eligibility.** `paywall_viewed{offering:'trial'}` says which offering was asked for, not whether Apple granted the free week to that Apple ID. If 19 people saw "Continue" and $59.99 with no free week, that is a different bug. PR's `paywall_plans_shown{trial}` answers this. Ship it first.
- **The Home mockup image** (`@assets/offer/phone-home.webp`, `offer-hero.tsx:18`). I could not open it. Rahim says it shows "8.4 km". Confirm and replace.
- **LegMap hit areas** (`entities/leg-zone`, not in the snapshot). My claim that the plantar heel is too small to hit is a guess from `[S10]`.
- **Superwall.** `offer-page.tsx:287-296` registers a placement 600 ms after mount. AGENTS.md says every campaign is a 100% holdout. If anyone changed a split in the dashboard, a Superwall view could cover ours. Check the dashboard for Nov 9.
- **The custom App Store product page** the ads send people to. That is step zero of message match and it is not in this folder.
- **The PT's written permission** for "Reviewed by Dr. Carla Shayman, PT, DPT, OCS" `[S26]`. Without it, remove the name and photo.
- **App Store rating and review count.** Needed before adding social proof.
- **Time on screen per onboarding step** and **scroll depth on the plans screen** (did anyone scroll to "Show all plans" at all?). PostHog can give both.
- **Device and text size.** iPhone model mix and Dynamic Type setting of the Meta cohort. If a third are on large text with a small phone, the plans card may sit under the dock.
- **Why trials cancel.** App Store Connect "days before canceling" report for the handful of past trials. If most cancel on day 0, the post-purchase setup screens are the next problem.
- **Five watched sessions** with women 50-65 who walk. No session replay, by policy. Sit next to them.
