# Full copy deck — Tread

Every user-facing string in the app, verbatim, in the order the user meets it.
Extracted from source, not transcribed. **No i18n exists** — every string is a
literal in a `.tsx`/`.ts` file, so there are no keys, only file:line.

Typographic notes that matter for search-and-replace:
- `’` is U+2019 (curly apostrophe) throughout the onboarding and welcome copy.
  In `steps.ts:146` it is written as the escape `’`.
- `pain‑free` in `steps.ts:147` uses U+2011 **non-breaking hyphen** (`‑`),
  not the ASCII `-` used everywhere else (`Run pain-free`, `PAIN-FREE`).
- `–` en-dash in all load ranges (`0–5 km`) and in `USUAL RANGE 1–4`.
- `—` em-dash in many blurbs.
- `→` U+2192 in the retest table. `★` U+2605 in the contract stamp.
- `✕` U+2715 is used as a **control** (the signature clear button).
- `Today's Tasks` and `Today's check-in` are written `Today&apos;s …` in JSX.

---

# 1. ONBOARDING — 19 steps

Copy lives in `src/pages/onboarding/model/steps.ts` unless noted.
`{name}` is substituted at render by `withName` (`onboarding-page.tsx:473-477`);
with no stored name the token and its surrounding comma are dropped.

## Step 0 — Welcome gate
`steps.ts:129-137` — `title: ''`, `blurb: ''`, both unused. Screen renders
`src/pages/welcome/…`; copy in section 2.

## Step 1 — Intro / Apple sign-in
`steps.ts:138-150`

```
Hi, I’m Tread
Your dedicated partner in running pain‑free for life!

[ Continue with Apple ]
```
Unrendered on this step: `title: 'Run without second-guessing'`,
`blurb: 'A smarter daily plan for runners.'`, `footnote: '~2 min setup'`.

## Step 2 — Name
`steps.ts:151-158`

```
What should we
call you?
Nice to meet you.

[ e.g. Alex ]          ← placeholder

[ Next ]
```
`\n` in the title is honoured — `TypedText` splits on it (`typed-text.tsx:105`).

## Step 3 — Sex
`steps.ts:159-169`

```
And which are you, {name}?
Load tolerance and injury patterns differ, so the plan does too.

Female
Male

[ Next ]
```

## Step 4 — Athlete type
`steps.ts:170-183`

```
What kind of athlete are you, {name}?
This is where your plan starts from.

Just getting started
Casual
Regular
Training for something
Serious about it

[ Next ]
```

## Step 5 — Age
`steps.ts:184-197`

```
How old are you?
Used only to pace how fast your plan builds.

28  years          ← seeded value; suffix and unit toggle both read "years"

[ Next ]
```

## Step 6 — Body weight
`steps.ts:198-216`

```
A little more about you, {name}
Tendons carry what you weigh. This sets your starting load.

72  kg   /   159  lb          ← seeded per unit; switching units reseeds, does not convert

[ Next ]
```

## Step 7 — Shoe size
`steps.ts:217-223`

```
What size do you run in, {name}?

42        ← readout, half-size precision (e.g. 42.5)
EU  US

[ Next ]
```
`blurb: 'Shoe size is the closest thing we have to your foot’s lever length.'`
exists but is **suppressed at render** (`onboarding-page.tsx:484`).

## Step 8 — Goal
`steps.ts:224-237`

```
{name}, what are you working toward?
Pick the one that matters most right now.

Run pain-free
Train for a race
Run more consistently
Build stronger legs
Stay injury-free

[ Next ]
```

## Step 9 — Pain locations (multi-select)
`steps.ts:238-257`

```
What’s getting in the way, {name}?
Choose any that apply.

Foot
Heel
Achilles
Shin
Knee
Hip
Nothing right now          ← exclusive: clears the others, and any other clears it

[ Next ]
```

## Step 10 — Sport (chips)
`steps.ts:258-273`

```
What puts the load on your legs, {name}?
Pick the one that hurts you most — the questions after this follow from it.

Running   Tennis   Gym   Football   Basketball   Cycling   Hiking

[ Next ]
```
The blurb says "the one that hurts you most" but the step is **single-select**;
the multi-select step is #9.

## Step 11 — Weekly load (wording follows the sport)
`src/pages/onboarding/model/personalise.ts:80-128`. The placeholder in
`steps.ts:274-285` (`How much are you doing right now?` / `Your honest current
week, not your best one.` / `options: []`) is always replaced at runtime.

| Sport | Title | Blurb | Options |
|---|---|---|---|
| running | `How much are you running now, {name}?` | `Your honest current week, not your best one.` | km |
| tennis | `How much are you on court, {name}?` | `Matches and practice together — your honest current week.` | hours |
| gym | `How much are you training, {name}?` | `Time under load, not time in the building.` | hours |
| football | `How much are you playing, {name}?` | `Matches and training together — your honest current week.` | hours |
| basketball | `How much are you playing, {name}?` | `Games and practice together — your honest current week.` | hours |
| cycling | `How much are you riding, {name}?` | `Your honest current week, not your best one.` | km |
| hiking | `How much are you hiking, {name}?` | `Your honest current month, not your best one.` | hours |

km options (`personalise.ts:58-64`): `0–5 km` · `5–15 km` · `15–30 km` · `30–50 km` · `50+ km`
hours options (`personalise.ts:66-72`): `Under 1 hour` · `1–3 hours` · `3–5 hours` · `5–8 hours` · `8+ hours`

**Written but never rendered:** every option's `caption: 'per week'`, and the
per-sport `extraLabel` — `Runs per week`, `Sessions per week`, `Rides per week`,
`Hikes per month`. Also `steps.ts:284`'s follow-up block
`{ label: 'Sessions per week', options: ['1','2','3','4','5+'] }` — no UI exists for it.

## Step 12 — Hardest thing (multi, max 2)
`steps.ts:286-302`

```
What’s hardest right now, {name}?
Up to two.

Staying pain-free
Getting back to running
Increasing distance
Recovering faster
Getting stronger
Avoiding another injury

[ Next ]
```
A third selection silently drops the oldest — no message.

## Step 13 — Health permission
`src/pages/onboarding/ui/health-step.tsx`

```
Fill me in, {name}!                    ← :93, falls back to "Fill me in!"
Tread reads your steps, energy and heart rate to build your plan
around what you have actually been doing.        ← :96-97

Steps                    —              ← :32, value or "Not shared" (:119)
Active Energy            —              ← :33
Heart Rate               —              ← :34

[ Connect to Health ]                   ← :134, becomes "Opening Health…" then "Next"

Your health data never leaves this device.       ← :141
Health isn’t available here — you can carry on without it.   ← :146, only when unavailable

Skip for now                            ← :158
```
Value formats (`:167-169`): `1.2k` · `{n} kcal` · `{n} bpm`.
Unrendered: `steps.ts:307-308` `Connect your Health data` / `So your plan starts from what you have actually been doing.`

## Step 14 — Notifications permission
`src/pages/onboarding/ui/notify-step.tsx`

```
Don’t go it alone, {name}               ← :81, falls back to "Don’t go it alone"
A plan only works if it turns up. Let Tread tell you when today
has a session in it.                    ← :84

┌─ mock banner ──────────────────────────┐
│ Tread                            now   │  ← :179, :180
│ Today is foot strength — 7 minutes.    │  ← :183-184
│ Your shins will thank you.             │
└────────────────────────────────────────┘

A nudge on the days your plan has a session       ← :27
A heads-up when it changes what you are doing     ← :28
Nothing else. No streaks to guilt you back.       ← :29

[ Turn on notifications ]               ← :110, becomes "Opening…" then "Next"
Not now                                 ← :121
No problem — you can turn these on later in Settings.   ← :126, only when denied
```
Unrendered: `steps.ts:314-315` `Turn on notifications` / `So your plan can tell you when it needs you.`

## Step 15 — Building your plan
`src/pages/onboarding/ui/building-step.tsx:29`

```
Getting to know you
Building your plan
Your plan is ready

[ Start my training ]                   ← :171, appears only after 5.44 s
```
Unrendered: `steps.ts:324-325` `Building your plan` / `Folding everything you told me into week one.`

## Step 16 — Plan choice
`steps.ts:327-333` + `src/pages/onboarding/model/plans.ts:22-47`

```
Choose your training plan
Both are built from your answers — pick how much runway you want.

6 weeks   |   12 weeks               ← segment tabs

── 6-week option ──
MOMENTUM                             ← wordmark
RECOMMENDED                          ← badge, plan-choice-step.tsx:103
KEEP RUNNING                         ← eyebrow
6-week plan
Ideal if you already run most weeks and want to build without breaking down.
• A focused block that adds load only as fast as your legs adapt
• Strength and mobility woven around the runs you already do

── 12-week option ──
FOUNDATIONS
START RUNNING
12-week plan
Ideal if you’re starting from scratch or aren’t currently physically active.
• A gentle transformation mixing consistency and varied workouts
• Become a runner step by step, with joy, all the way to your first 5K

[ Choose my plan ]
```

## Step 17 — Commitment contract
`steps.ts:334-340` + `src/pages/onboarding/ui/contract-step.tsx`

```
Let’s make a contract, {name}
                                     ← blurb is '' and renders as an EMPTY line

Sign here                            ← :234, hint inside the pad
✕                                    ← :253, the clear control (a text glyph)

┌─ stamp, on seal ─┐
│    ★ TREAD ★     │                 ← :262
│    COMMITTED     │                 ← :263
│    PAIN-FREE     │                 ← :265
│     RUNNING      │                 ← :266
└──────────────────┘

{name}, your signature stays on this device.     ← :273, falls back to "Your signature stays…"

[ Continue ]                         ← enabled only after ≥12 stroke points
```

## Step 18 — Social proof / hand-off
`src/pages/onboarding/ui/social-proof-step.tsx` + `config/testimonials.ts:26-48`

```
Welcome, {name}                      ← :93, falls back to "Welcome aboard"
Join 40,000+ runners
training without pain                ← :107

★★★★★                                ← always exactly five, :192-194

“Six months of shin pain, and I ran a pain-free 10k eight weeks in.”
Marta K.

“It found my calves, not my knees. The strength work finally made sense.”
Daniel R.

“Back from an Achilles injury without losing the distance I built.”
Priya S.

[ Continue ]  ×2, then  [ See my offer ]
```
Each testimonial is stored in three parts — `before` + `lead` (emphasised) +
`after` — plus a `detail` (`Running 4 years`, `Half marathon, 1:38`,
`Marathon in training`) that is typed "Shown under the name" but **never rendered**.

## Shared onboarding chrome
`src/pages/onboarding/ui/onboarding-page.tsx:368-386`

CTA labels: `Continue with Apple` (intro) · `Choose my plan` (plan) ·
`Continue` (contract, and social reviews 1-2) · `See my offer` (social review 3) ·
`Next` (everything else). The `health` case (`Next` / `Skip for now`) is
unreachable — that step draws its own bar.
Accessibility labels: `Back` (`:418`), `Close` (`:431`).
The four act names `About you`, `Your sport`, `Your health`, `Your plan`
(`steps.ts:116`) are **never displayed** — the progress bar is undivided.

---

# 2. WELCOME GATE
`src/pages/welcome/ui/liquid-glass/cookbooks/astro.ts:87-102`

```
[wordmark image]

Swipe up to enter                    ← also the a11y label
+                                    ← decorative

Train ~~support~~ your feet
that hurt every morning              ← these four rotate, ~2.9 s each
after 3 pairs of insoles
so a 12-hour shift stops hurting
so you can run again

[ Let’s go ]
```
a11y hint: `Swipe up to open the screen, swipe down to close it` (`liquid-glass-screen.tsx:382`).

---

# 3. OFFER / PAYWALL
`src/pages/offer/ui/offer-page.tsx`

```
48%                                  ← :219-220; animates 48→70 when boosted
LIMITED — ONE TIME ONLY              ← :230, boosted only

Get 12 months for the price of 6     ← :237, standard
Your comeback price on the full year ← :237, boosted

Your {weeks}-week plan, and everything around it.    ← :242
Your plan, and everything around it.                 ← :242, fallback

Your plan, not a template            ← :69
Built from the answers you just gave, and rebuilt as they change.   ← :70
Adaptive sessions                    ← :75
Every workout adjusts to how the last one actually went.            ← :76
Progress you can see                 ← :81
Watch your readiness climb week by week.                            ← :82

Yearly                               ← :276
Billed yearly at $80.99              ← :277  ($46.99 when boosted)
$6.75/mo                             ← :278  ($3.92/mo when boosted)
$6.75                                ← :279, struck through, boosted only

Monthly                              ← :287
$12.99/mo                            ← :288   (no "note" line on this row)

[ Continue ]                         ← :302
```
**Absent entirely:** free-trial length, auto-renew/cancel disclosure, Terms,
Privacy, Restore Purchases, purchase-failed copy, purchase-in-flight copy.
Currency is a literal `$` in four places.

---

# 4. HOME
`src/pages/home/ui/home-page.tsx`

```
🔥 7                                 ← :159, streak capsule (bare digit)
🎁 Gift                              ← header-actions.tsx:196; a11y "Get your gift" (:188)
[avatar]

Wednesday                            ← :101, only visible while the program sheet is open
September, 10                        ← :102

Sun  Mon  Tue  Wed  Thu  Fri  Sat    ← streak-week.tsx:16

M  Murat,  you're at 👣 hour 6 of standing. Last two times you
passed 🕐 7, the next morning was ⚠ rough.
```
The brief is a token array (`:60-87`). Grey frame words vs emphasised values:
- frame: `you're at` / `You're at` (no-name branch) · `of standing. Last two times you passed` · `the next morning was`
- emphasised: the name + `,` · `hour 6` · `7,` (red) · `rough.` (red)

Its docstring (`:46-49`) states there are **eleven** such states and a ladder to
pick between them; one is written.

```
It hurts today                       ← pain-check.tsx:52
No pain today                        ← pain-check.tsx:59
[ Log today's check-in ]             ← pain-check.tsx:117

Today's Tasks                        ← today-tasks.tsx:74
  Heel raises        Fitness    7 min
  Ankle rocks        Mobility   5 min
  Barefoot at home   Habit      ☐
  Foot roll          Recovery   3 min
  Single-leg hold    Fitness    ☐
                                     ← today-tasks.tsx:51-57; categories :29-34

[ 🏃 Start Workout ]                 ← action-dock.tsx:120
```
Row a11y label: `{title}. {category}`, e.g. `Heel raises. Fitness` (`:117`).
Tab labels: `Home`, `Progress` (`tabs-layout.tsx:31-32`).

## Today's check-in sheet
`src/pages/home/ui/pain-check.tsx:194-317` + `pain-scale.tsx`

```
Today's check-in                     ← :261
How does the foot feel?              ← :262

3                                    ← :266, opens mid-range

Nothing        No pain to report today.                        ← pain-scale.tsx:120
Barely there   You would forget it if nobody asked.            ← :121
Noticeable     You feel it, but it changes nothing you do.     ← :122
Sore           You are working around it without thinking.     ← :123
Hurts          It is deciding things for you now.              ← :124
Severe         Standing on it is the problem, not running.     ← :125

WITHIN USUAL RANGE                   ← :267, or ABOVE / BELOW
 USUAL RANGE 1–4                     ← :416, note the leading space and en-dash

[ Save ]                             ← :284, becomes "Saved" (unreachable in practice)
Clear entry                          ← :304
```

## Relief / session player
`src/widgets/session-player/ui/session-view.tsx`

```
Collapse demonstration               ← :443 a11y, visible on arrival
[ 01:00 ]                            ← :463, the countdown IS the button label;
                                        becomes "Continue" only at 00:00

── revealed after collapsing ──
Back                                 ← :325 a11y
Day 17  ·  🕐 3 min  ·  2 moves      ← :339, :342, :344
01:00                                ← :363
Foot roll  /  Breathing reset        ← program.ts:215
EXERCISE 1/2                         ← :376
Expand demonstration                 ← :417 a11y
```

## Gift sheet
`src/shared/ui/gift-sheet/gift-sheet.tsx`

```
Something for you                                              ← :80
Keep your streak going and there is more where this came from.  ← :89
[ Open it ]                                                     ← :99
Maybe later                                                     ← :110
```
The gift is never named, valued, or delivered.

## Profile menu (iOS)
`src/shared/ui/profile-menu/profile-menu.ios.tsx`

```
Refer a friend, get 60% off          ← :45   (no code produces 60%)
Settings                             ← :46
```

---

# 5. PROGRAM OVERLAY
`src/pages/program/ui/program-page.tsx` + `day-card.tsx`

```
Strengthen                           ← :141, from BLOCKS
Block 2 of 4 · 14 days               ← :144, the "4" is a literal

DAY 15   🏋 Strength   🕐 7 min   ✓
DAY 16   🧘 Mobility   🕐 5 min   ✓
DAY 17   ⚖ Balance    🕐 5 min
         Single-leg hold  Eyes-closed stand
         Heel-to-toe walk  3 moves
         [ Get Started ]             ← day-card.tsx:148
DAY 18   🏋 Strength   🕐 7 min   🔒
DAY 19   🧘 Mobility   🕐 5 min   🔒
…through DAY 28
```
Kind labels (`day-card.tsx:45-48`): `Strength` · `Mobility` · `Balance` · `Recovery`; `Retest` for checkpoints (`:83`).
Present but unreachable with the current cursor: `3 tests` (`:85`), the
checkpoint tags `Calf` / `Arch` / `Balance` (`:137`), and `Start retest` (`:148`).

---

# 6. PROGRESS
`src/pages/progress/ui/progress-page.tsx`

```
🔥 3                                 ← :139
🎁 Gift    [avatar]

7 days  |  1 month  |  3 months      ← :59-61

Over the last 📅 7 days your progress is ↗ 44%.      ← :77-81
  (1 month → "month" / 26% ;  3 months → "3 months" / has ↘ 8%)

┌────────────────────────────────────┐
│  88        You’re doing great!     │  ← :163
│  Score     3 day streak!           │  ← :164  (never pluralises)
│            Keep it up to finish    │  ← :165
│            the Strengthen block.   │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Performance              ↑ 43%    │  ← performance-card.tsx:64, :97
│              [ 2.5 ]               │  ← the bubble
│  ▏▎▍▌▋▊▉█▉▊▋▌▍▎▏                  │
│  Very Low  Low  Medium  High       │  ← :44
└────────────────────────────────────┘

3 days                12 days         ← streak-tile.tsx:40
Current Streak        Longest Streak  ← :187, :193
```

---

# 7. DAY SHEET (unreachable — no code pushes this route)
`src/pages/day/ui/day-page.tsx`

**Branch A — a completed retest (only day 14 has data)**
```
Retest · Day 14                              ← :90
Block 1 · Settle                             ← :91
Where you stood at the end of the block      ← :92

Calf       11  →  19    Lv2 → Lv3
Arch      18s  → 24s    Lv2
Balance    8s  → 14s    Lv2 → Lv3
Symmetry  34%  → 21%    Lv1 → Lv2

[ Share ]                                    ← :115
```
Share payload (`:119-125`), newline-joined: `Calf: 11 → 19 (Lv2 → Lv3)` etc.

**Branch B — retest due today**
```
Day 28                                       ← :136
Time to check your progress                  ← :137
3 tests · 4 minutes                          ← :138
Nothing to train today. The tests measure where the block left
you, and they are the only thing that moves a level.        ← :141-142
[ Start retest ]                             ← :144  (calls router.back())
```

**Branch C — retest ahead**
```
Day 42                                       ← :152
Retest · closes Block 3                      ← :153
3 tests · 4 minutes                          ← :154
Opens on Fri, Oct 10. Levels hold still until then.        ← :159
```

**Branch D — an ordinary day**
```
Wed, Sep 10                                  ← :178
Balance · 5 min                              ← :179
Day 17 · Block 2 · Strengthen                ← :180

No session logged. Nothing to make up — the program runs on dates,
so the next day is the next day.             ← :184-186, missed only

Single-leg hold / Eyes-closed stand / Heel-to-toe walk      ← program.ts:214

Pain that day                                ← :201
1 / 10                                       ← :203-204

Comes up on Thu, Sep 11.                     ← :212, upcoming only
```

---

# 8. APPEARANCE SHEET
`src/pages/settings/ui/settings-page.tsx`

```
Appearance                           ← :39   (route is "settings", menu says "Settings")

System        Match device settings  ← :19
Light         Always light           ← :20
Dark          Always dark            ← :21

The choice is remembered on this device.     ← :86
```
No app version, account, sign-out, notification, subscription, legal, support,
"redo my setup", or Done/Close.

---

# 9. WIN-BACK NOTIFICATIONS
`src/entities/notifications/model/notifications.ts`

```
Banner 1, immediate:
  Rahim, stoppp                      ← :99, falls back to "Stoppp" (triple-p intentional)
  Pleeease.                          ← :100

Banner 2, +1 s:
  Take 70% off                       ← :113
  Tap to grab it.                    ← :114
```

---

# 10. STRINGS THAT EXIST BUT NEVER REACH A SCREEN

**Orphaned files** (nothing imports them)
- `progress/ui/pain-legend.tsx:55` — `The ring around a day shows the pain you logged that day.`
  Its three legend words `Easy` / `Sore` / `Sharp` (`pain-ring.ts:32-34`) are consumed only as React `key`s, so even inside this dead component the swatches are unlabelled.
- `progress/ui/path-node.tsx` via `day-caption.ts:16-18` — `Retest today` · `Today · {n} min` · `Retest`; and `+8` (`:268`).
- `progress/ui/path-trail.tsx` via `path-layout.ts:43-44` — `BLOCK 1 · SETTLE` … `BLOCK 4 · SUSTAIN`, `WEEK 2` … `WEEK 8`.
- `progress/ui/today-card.tsx` — no strings of its own; `eyebrow`, `title`, `subtitle`, `action.label`, `note` are props with no default and no call site.

**Orphaned shared components with default copy**
- `progress-card.tsx:19-22` — band words `Excellent` · `Strong` · `Steady` · `Building` (rendered upper-case); default eyebrow `SCORE` (`:88`); default caption `Last 7 days` (`:89`); delta suffix `this week` (`:114`).
- `daily-goal-card.tsx:65-66` — default caption `Daily Goal`; default action `Get Started`.
- `score-gauge.tsx:48, 102` — default delta suffix `vs avg`; `/100`.
- `meter/score-value.tsx:30, 43` — `-` for a null score; `/100`. (This one **is** used.)

**Written into data but not rendered**
- Intro `footnote: '~2 min setup'` — `steps.ts:149`
- Load captions `per week` ×10 — `personalise.ts:59-72`
- Load `extraLabel` ×7 — `Runs per week` · `Sessions per week` · `Rides per week` · `Hikes per month`
- Follow-up chips `Sessions per week` + `1 2 3 4 5+` — `steps.ts:284`
- Testimonial `detail` ×3 — `Running 4 years` · `Half marathon, 1:38` · `Marathon in training`
- Act names `About you` · `Your sport` · `Your health` · `Your plan` — `steps.ts:116`
- Superseded heading pairs for health, notify and building — `steps.ts:307-308, 314-315, 324-325`
- Size step blurb — `steps.ts:222`
- Intro `title`/`blurb` — `steps.ts:144-145`

**Empty strings that render as blank lines**
- Contract `blurb: ''` — `steps.ts:339`, renders an empty `Animated.Text`
- Welcome and social `title: ''`/`blurb: ''` — `steps.ts:135-136, 346-347`
- Load placeholder `How much are you doing right now?` — `steps.ts:281-282`, always replaced

---

# 11. COPY THAT DOES NOT EXIST AND WOULD BE NEEDED

- **Any error message, anywhere in the app.** Apple sign-in failure, HealthKit denial, notification scheduling failure, and video load failure are all silent.
- **Any loading copy.** `shared/ui/loading-spinner` is never imported.
- Paywall legal block: trial length, auto-renew terms, Terms, Privacy, Restore Purchases.
- Empty states: zero tasks (`today-tasks.tsx:76-92`), no history on Progress (`progress-page.tsx:110-201`), no block in the program overlay (`program-page.tsx:136-181`), bad `?day=` on the Day sheet (`day-page.tsx:55` returns `null` — a blank sheet).
- The remaining ten brief states named in `home-page.tsx:46-49`.
- Retest result copy for blocks 2-4 — only block 1 has data, and a completed checkpoint without it silently shows the "opens on…" future copy.
- A post-check-in acknowledgement; the ten other brief variants; a relief-session rationale; an end-of-session line.
- Copy distinguishing "Health denied" from "connected, no data".
- Feedback when the 2-selection cap drops the oldest choice.
- Accessibility labels for: the pain slider, the week-strip cells, the streak capsule, the segmented control, the score ring, the ability ruler, the streak tiles.
