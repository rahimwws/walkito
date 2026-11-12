# B2: Value before paying (Walkito, Nov 11, 2026)

Question: how does a 50-65 year old woman with heel pain get a real "win" before or right at the paywall, without turning Walkito into freemium?

Short answer: move the free 2-minute Day 1 session (already built, already free) from behind "Not now" to right before the paywall, make it seated for everyone, and end it with one "How did that feel?" tap. Then the paywall pitch becomes "Day 1 done. Keep going, your first week is free." The paywall stays hard. Ship it behind a PostHog flag.

Sources: CHECKER.md (claims 8, 12, contradiction b), R1 section 2, R3, R5 Setup C, R6 section 2, C2 (GainFrame), C3 (Lyttle), walkito-paywall-review/07-fable-roast.md idea 1, pr-69/code/AGENTS.md ("A hard paywall, with one free thing", "Home tour"), code/live/src (mini-test.tsx, journey.ts, steps.ts, offer-page.tsx).

---

## 0. What already exists (checked in code)

| Asset | Where | What it does today | Notes |
|-|-|-|-|
| Day 1 session (2 min) | `DayOneCard`, `pages/home/ui/day-one-session.tsx`, `model/day-one.ts`, `DAY_ONE_CLIPS` (`app/providers/clip-prefetch.tsx`). Described in pr-69/code/AGENTS.md "Home tour". | Shown only after "Not now". Two 1-minute moves, real filmed person: `ankle_rocks` then `foot_roll` (ball) or `hip_abduction` (no ball). If `seatedStart`: `fascia_stretch` instead of ankle rocks. `finishDayOne` files it as today's plan session, so the first test lands on day 2. Events `day1_session_started`, `day1_session_completed`. | These files are NOT in the `code/live` snapshot I had. Effort below is from AGENTS.md, Rahim should confirm. |
| Safety / red-flag step | `journey.ts` `safetyPlan()`: `SEATED = calf, pop, diabetes, fall`, `SEE_DOCTOR = calf, pop, diabetes`, `PROTECTED_FEET = numb, diabetes` | Sets `seatedStart`, adds "see a doctor" line. Nothing is refused. | Runs early in onboarding (S15), so it is always before any new exercise step. Good. |
| 30-second mini-test | `pages/onboarding/ui/mini-test.tsx`, flag `onboarding_mini_test`, events `mini_test_assigned`, `mini_test_completed` | Big toe lift (standing) + one-leg balance. **Only for people with no pain or goal "flat feet"** (`miniTestEligible`). No result screen. | Our heel-pain buyer never sees it. It is standing. Its clip box + `ExercisePreview` (from `widgets/session-player`) already work inside onboarding, so a seated version is cheap. |
| Toe question, Foot Passport, first-week deck, projection | S08, S20, S28-29, S31-34 | Personal "result" screens without doing anything | Walkito already has a lot of "your result" screens and still 0 trials. What is missing is a felt, physical moment, not more personalised text. |
| Onboarding step order (end) | `steps.ts` | `... test-intro, test-toe, test-balance, building, first-week, contract, outlook` -> paywall | New step goes after `outlook`, right before the paywall. |
| "Not now" path | `offer-page.tsx` `skip()` -> `armHomeTour()` + `skipPaywall()` -> Home -> Day 1 card -> session -> tour -> `OfferWall` (trial once, then 15-min countdown "comeback", then standard) | | CHECKER #5 and NEVER list: the decline-path offer and the countdown are an Apple 5.6 / FTC risk. Not my topic, but option 1 changes this path, see below. |

Our own data on the free session (R1 section 2, STRONG but tiny): all 4 Meta users who tapped "Not now" started Day 1 right away, all 4 finished it, 3 reached the offer, 0 bought. So the session is wanted and finished (100%, n=4). The 0 buys came after a no-close offer wall with a countdown, so it says little about the session itself.

Side finding (health claim already in the app): `shared/lib/i18n/catalogue/en/pages.ts:112` `pages.program.blockAbout2` says "Many people notice the first real relief around day 20." and `blockAbout3` says "The first changes in the arch often show from week six." Both are timeframe claims on the NEVER list. Rahim should change them in the same OTA, for example: "Strength work starts: towel heel raises and seated short foot." and "The load goes up, and short foot comes off the chair."

---

## Option 1 (PICK): "Day 1 first" - the 2-minute seated session before the paywall

### What
After the last onboarding screen and before paywall step 1, the user does the existing 2-minute Day 1 session (seated version for everyone), answers "How did that feel?", and then sees a paywall that starts with "Day 1 done".

### Flow
`... building -> first-week -> outlook -> [NEW day1-offer] -> [session sheet, 2 min] -> [NEW day1-feel] -> paywall step 1 (trial story) -> reminder -> plans`

People flagged `SEE_DOCTOR` (calf swelling, sudden pop, diabetes with hot foot) skip the session and go straight to the paywall, as today. People who tap "Skip for now" go straight to the paywall too.

### Screens and copy (paste-ready)

**Screen A: day1-offer** (replaces nothing, new step after `outlook`)
- Eyebrow: `Day 1`
- Title: `Let's do your first 2 minutes now, {name}.`
- Body: `Sit on a chair or the edge of the bed. Two easy moves, with video. No equipment needed.` (if they said they have a ball: `A small ball helps for the second move.`)
- Chip: `2 minutes · seated`
- Safety line (small, under the chip): `Stop any move that hurts.`
- Button: `Start`
- Text link under it: `Skip for now`

**Screen B: the session** (existing session sheet, `free`, no "2 more good reps?")
- Moves for everyone in this pre-paywall version, all seated:
  1. `fascia_stretch` (seated plantar stretch, 30 s each foot)
  2. `foot_roll` seated (ball under the sole, 1 min), or `short_foot_seated` if no ball (replace the standing `hip_abduction` here)
- Keep the closing sheet as is. Closed early -> back to Screen A, with `Skip for now` still there.

**Screen C: day1-feel** (new, one tap)
- Title: `How did that feel?`
- Options: `Good` / `A little tight` / `It hurt`
- Reply after the tap (coach bubble, one line, then auto-continue to paywall after the tap on `Continue`):
  - Good: `Nice work, {name}. That was Day 1. Tomorrow, 5 minutes before your first step.`
  - A little tight: `That's common on day one. Your plan starts gentle and changes with how your feet feel each morning.`
  - It hurt: `Thanks for telling us. Skip any move that hurts. Week one will stay seated and lighter. If the pain is sharp, getting worse, or you have swelling or numbness, please see a doctor.` -> sets `seatedStart = true` in plan settings.
- Button: `Continue`

**Paywall step 1 (trial story) after a completed Day 1**
- Title: `Day 1 done, {name}.`
- Body: `Your plan continues tomorrow morning: 5 minutes, before your first step. Try the full plan free for 7 days.`
- Line over the button: `No payment due now`
- Button: `Continue`
- Exit (visible at 0 s, this is CHECKER #3): `Not now`

**Plans step headline after a completed Day 1**
- Title: `Keep going: your first week is free.`
- Sub: `7 days free, then $59.99 per year. Cancel anytime in Settings.` (billed price biggest, Apple 3.1.2)
- Button: `Start my free week`

If the user skipped the session, show today's step 1 and plans copy unchanged.

**"Not now" after a pre-paywall Day 1**: do not show the Day 1 card again. Go to the Home tour, then whatever CHECKER #5 decides for the offer wall (my vote: one plain trial screen with a close button, no countdown).

### How it changes the pitch
Today the paywall sells a promise ("Try Walkito free for 7 days") to someone who has done nothing but tap answers for ~6 minutes. After Option 1 it sells continuation of something she just did and finished: "Day 1 done, Day 2 is tomorrow". That is the Bend pattern (trial offered after the first routine, CHECKER #8 VERIFIED) and the Lyttle pattern (do the core action, then the paywall at the payoff, CHECKER #12), while the app stays hard-paywalled from Day 2. It also gives an honest ad line later: `Try a 2-minute seated session in the app before you decide.` (true, no claim).

### Code work for Rahim (estimate, from AGENTS.md since the files were not in my snapshot)
1. Make the day-one session sheet reachable from onboarding. It lives in `pages/home`, and a page cannot import another page, so lift it into a widget or feature (`widgets/day-one-session` or `features/day-one`). 0.5 day.
2. New step kinds `day1-offer` and `day1-feel` in `steps.ts` after `outlook`, `skipWhen: (a) => safetyPlan(a).doctor || flag !== 'test'`. Copy in `catalogue/en/journey.ts` (and the other 6 languages, or English-only behind `user.language == "en"`). 0.5 day.
3. Force the seated pair for this placement (a `placement: 'onboarding'` argument to `day-one.ts`). Prefetch `DAY_ONE_CLIPS` at `onboarding_started`, not at Home, so the clips do not buffer on cellular. 0.25 day.
4. Filing: `finishDayOne` today files a plan session, but the plan is only seeded at onboarding completion (`seedPlanSettings` in `onboarding-page.tsx` ~line 1049). Store `dayOneDoneAt` locally and file it right after seeding; Home's `DayOneCard` checks it and goes straight to `tour`. 0.5 day.
5. Paywall copy branch on `dayOneDoneAt` (step 1 + plans headline). 0.25 day.
6. Flag `onboarding_day1_first` (`test` / `control`) via `featureFlag()`, same pattern as `MINI_TEST_FLAG`. Events below. 0.25 day.

Total: **M, about 2-3 days.** All JavaScript, ships over the air (no new native module; the player and video already ship in the binary). Rahim should confirm the player has no native change pending.

### Events (PostHog only, never Meta, never Superwall params)
- `day1_offer_viewed`, `day1_offer_skipped`
- existing `day1_session_started` / `day1_session_completed` with a new property `placement: 'onboarding' | 'home'`
- `day1_feel_answered` with `feel: good | tight | hurt`. This is health-adjacent. It stays in PostHog (first-party, already in the privacy page), it never goes to Meta or into `paywallPersonalisation` (the existing test that blocks pain fields should cover it). Rahman decides; if he says no, log the event without `feel` and keep the answer only on the device.

### Expected effect (GUESS, say so)
Evidence for "value first" is real but none of it is our audience: kenbuildsalone demo 17.9% vs 7.8% (self-selected), one Adapty test +25%, GainFrame paywall-view-to-trial 13% -> 23.5% (confounded: ads off), Lyttle 4% -> 28% (photo app). My guess for Walkito, on top of the step-1 fix: trials per paywall view from 0-3% to 3-8%, i.e. 1-4 trials per ~50 paywall views instead of 0-1. 60-75% of onboarding finishers start the session, 85%+ of starters finish (our 4/4 says high).

### Risks
- **Health claims [HEALTH, FTC]:** none of the copy above says relief, fix, cure, pain-free, or a timeframe. Keep it that way in translations. Fix the two existing timeframe lines in `pages.ts` (see section 0).
- **Safety [APPLE 1.4.1, HEALTH]:** session is after the red-flag screen; seated for everyone; doctor-flag users skip it; "Stop any move that hurts" shown before; "It hurt" sets week one seated and repeats the doctor advice. No standing, no loading the fascia, no jumping.
- **Apple:** a free session before a hard paywall is fine (no guideline against it). The paywall must not say or imply a free version (AGENTS.md rule). Do not write "free session" on the paywall; write "Day 1 done".
- **Drop-off:** 2 minutes more before the price. Onboarding finish is 97% on 1.0.12, so there is room. Guard: paywall reach must not fall more than 5 points.
- **"Not now" path changes:** people who skip after a pre-paywall Day 1 have no free session left. That is fine and honest, but the offer wall after the tour must then be compliant on its own (CHECKER #5).
- **Volume:** ~20 installs/day means ~10 per arm per day at 50/50. A week gives ~60-70 paywall views per arm. That shows direction, not significance.

### How to judge (7 days, flag 50/50, after the step-1 fix is live in both arms)
| Metric | Event | Kill / ship rule |
|-|-|-|
| Session start rate | `day1_session_started{placement:onboarding}` / `day1_offer_viewed` | under 50% -> the ask or the copy is wrong |
| Session finish | `day1_session_completed` / started | under 70% -> clips or moves wrong (buffering?) |
| "It hurt" share | `day1_feel_answered{feel:hurt}` | over 10% -> review move choice with the PT |
| Paywall reach | `paywall_viewed` / `onboarding_completed` | test may not be more than 5 points below control |
| Step-1 exit | `paywall_step_viewed` step 1 without step 2 | lower in test |
| **Primary: trials per paywall view** | `purchase_completed{offering:trial}` / `paywall_viewed` | ship to 100% if test has 3+ trials and at least 2x control. Kill if test has 0 trials after 40 paywall views |
| Day-2 return (leading signal) | `Application Opened` next local day | higher in test = the session builds a habit even without a trial |

Note on CHECKER contradiction (b): CHECKER says keep the free session behind "Not now" and test a pre-paywall exercise "later". I partly disagree. With 0 trials and ~15 paywall views a day, testing one change at a time for a week each is too slow, and this is the only lever that gives her something real before the price. Ship it behind a flag in the same OTA as the step-1 fix, so both arms share the fixed step 1 and the test isolates the session. If Rahim can only do one thing this week, the sheet audit and step-1 fix still come first.

---

## Option 2: "One move now" - a 60-second seated stretch inside onboarding

### What
A lighter version of option 1: one seated move, 60 seconds, played inline in onboarding with the existing `ExercisePreview` clip box from `mini-test.tsx`, then "How did that feel?". No session sheet, no plan filing.

### Where
Same slot (after `outlook`, before paywall). Alternative slot: turn first-week deck card 1 (S28, "Before your first step 3 min") into a "Try it now" card, since that screen already shows the move.

### Screens and copy
- **Screen A:** Title `Try your first move, {name}.` Body `Sit down and cross one foot over your knee. Follow the video for 60 seconds.` Small: `Stop if it hurts.` Button `Start 60 seconds`. Link `Skip for now`.
- **Screen B:** clip (`fascia_stretch`), a 60 s ring timer, `Switch feet` at 30 s (haptic tick). Button appears at 60 s: `Done`.
- **Screen C:** same "How did that feel?" as option 1.
- **Paywall step 1:** `That was your first move, {name}.` / `Tomorrow your plan starts with it: 5 minutes, before your first step. Try the full plan free for 7 days.` / `No payment due now` / `Continue` / `Not now`.

### Code
`ExercisePreview` + `useClipBox` already render a filmed clip in onboarding (`mini-test.tsx`). New step kinds `try-move` + `try-feel`, a timer, copy, flag. **S, about 1-1.5 days**, OTA. The Day 1 card behind "Not now" stays unchanged.

### Pitch change
Weaker than option 1: "your first move" instead of "Day 1 done". The feeling is smaller (60 s, one foot at a time), but the extra time is smaller too.

### Risks
Same health and safety rules as option 1. Extra risk: 60 seconds of one stretch may feel like nothing, so the "win" may not land, and it may look like a demo, not the product.

### How to judge
Same table as option 1, with `try_move_started` / `try_move_completed`. Good as a fallback if option 1's session start rate is under 50% (people do not want 2 minutes yet).

---

## Option 3: "Seated self-check + locked plan" (self-test plus Lyttle-style lock)

### What
A 45-second seated check she does with her own feet, a personal result she can see, and the plan built from it shown but locked from Day 2. Combines example (e) and (c).

### Where
Replace the current `test-intro` / `test-toe` / `test-balance` steps for heel-pain users (today `miniTestEligible` excludes them) with a seated version, after the red-flag step. The locked plan replaces paywall step 1.

### Screens and copy
- **Check intro:** `Quick check, {name}: stay seated` / `Two checks, 45 seconds. This sets where your plan starts. It is not a diagnosis.` / `Start the check` / `Skip it`
- **Check 1, seated big toe lift:** clip `big_toe_lift` filmed seated. `Feet flat on the floor. Lift only your big toes, keep the others down.` Options: `Easily` / `A little` / `Not really`
- **Check 2, seated ankle bend:** `Heel on the floor, pull your toes up toward you as far as is comfortable.` Options: `Easily` / `Some stiffness` / `Very stiff or sore`
- **Result card (visible, not locked):** `Your starting point` / `Toe control: {Good | Some work to do | Main focus}` / `Ankle bend: {Good | A bit stiff | Main focus}` / `Your plan starts with these, seated.`
- **Locked plan (paywall step 1):** week 1 list with Day 1 named and open ("Seated plantar stretch, 3 min"), Days 2-5 visible as titles with a lock icon. Title `Your first week is ready, {name}.` Body `Days 2 to 7 unlock with your free week. No payment due now.` Button `Continue`. Exit `Not now`.

### Code
Mini-test UI exists (`TestIntro`, `TestToe`, `ChoiceStep`, clip box), and the result already feeds the plan (`intakeFrom`, `planSettingsFrom`, `footTypeFor`). Needs: a seated toe clip (check if `big_toe_lift` is filmed seated; if not, a new film shoot), a new ankle check, a result card, a new eligibility rule, and a locked week view on paywall step 1. **M, about 2-3 days**, plus filming if needed. OTA for code; clips may need a CDN upload only.

### Pitch change
"Here is your plan, built from your own check, unlock it." Good for the "is this for me?" doubt, which the 10 of 15 "nothing hurts" leavers suggest exists.

### Risks
- **[HEALTH]** result labels can read like a diagnosis. Never say "you have flat feet" or "weak arch". Keep "starting point" and "not a diagnosis" (same as the bunion screen).
- Walkito already has many "personal result" screens (toe question S08, Foot Passport S20, projection S31-34) and got 0 trials. More of the same may add little. This is the main reason I rank it third.
- Locked items must be real plan items (no fake content behind locks).

### How to judge
`mini_test_assigned{variant}`, `mini_test_completed`, step-1 exit, trials per paywall view. Ship rule same as option 1.

---

## Considered and rejected

- **(d) One free routine a day, like Bend.** That is freemium. CHECKER #4d / R5 1.2: hard paywall 10.7% vs freemium 2.1% D35 download-to-paid, and a real hard-to-freemium switch lost over 50% of subscriber conversion (Phil Carter client). Bend lives on ads plus huge organic reach and a $19.99-$39.99 price; Walkito pays ~$2.50 per install with ~$900 left. Also makes Meta install optimization even further from revenue (R6). No.
- **Standing self-test for heel-pain users.** The current mini-test asks a sore foot to stand on one leg. Its own rule (`miniTestEligible`) already says no. Keep it that way.

---

## Comparison

| | Option 1 Day 1 first | Option 2 One move | Option 3 Self-check + lock |
|-|-|-|-|
| Real felt win | Strong (2 min, 2 moves, "Day 1 done") | Medium (60 s) | Weak-medium (a check, not exercise) |
| Already built | Most (session, clips, events, seated variant) | Clip box + player | Mini-test UI, plan wiring |
| Effort (Rahim) | M, 2-3 days, OTA | S, 1-1.5 days, OTA | M, 2-3 days + maybe filming |
| Paywall pitch | "Day 1 done. Keep going, first week free." | "That was your first move." | "Your plan is ready. Unlock Days 2-7." |
| Health/safety risk | Low (seated, after red flags) | Low | Medium (diagnosis-sounding labels) |
| Evidence | Bend (verified), Lyttle (verified), our 4/4 completion | Adapty +25%, kenbuildsalone | Lyttle lock (verified), GOWOD free test |

---

## TOP 3 (ranked)

1. **Option 1, Day 1 before the paywall, seated for everyone, with "How did that feel?"** Biggest real win, mostly built, OTA, 2-3 days. Ship behind `onboarding_day1_first` at 50/50 with the step-1 fix in both arms. Judge on trials per paywall view and session start rate in 7 days. Fix the two timeframe lines in `pages.ts:112-114` in the same OTA.
2. **Option 2, the 60-second seated move,** as the fallback if fewer than half of users start a 2-minute session before the price, or if Rahim only has one day.
3. **Option 3, seated self-check + locked week,** later, only if users finish the session but still say no at the paywall ("is this for me?" doubt). Needs careful non-diagnostic wording and maybe a seated toe-lift film.
