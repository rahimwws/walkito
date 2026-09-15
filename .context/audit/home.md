# Home tab and everything reachable from it

All strings `[hardcoded]` — no i18n exists.

## 1. Home — `src/pages/home/ui/home-page.tsx`

**Purpose:** Streak header, week strip, one written brief line, today's check-in and task list.

**Reachable from:** `app/(tabs)/index.tsx`; initial route of `(tabs)`. Verified as the app's launch screen.

**Leads to:** `/settings` (`:165`); Gift sheet (`:162`→`:207`); check-in sheet (`pain-check.tsx:128`); Program overlay (dock, `action-dock.tsx:183`); Confetti (`:195`); Progress tab; profile menu's referral item = dead end.

**All visible text, top to bottom**

| # | String | Source |
|---|---|---|
| 1 | `7` | `:159` → `header-actions.tsx:129` |
| 2 | `Gift` | `header-actions.tsx:196` |
| 3 | `Get your gift` (a11y) | `header-actions.tsx:188` |
| 4 | weekday, e.g. `Wednesday` — opacity tied to program-sheet progress, invisible until it opens | `:101` → `header-actions.tsx:286` |
| 5 | month + day, e.g. `September, 10` — same gate | `:102` → `header-actions.tsx:287` |
| 6 | `Sun` `Mon` `Tue` `Wed` `Thu` `Fri` `Sat` | `streak-week.tsx:16`, rendered `:116` |
| 7 | avatar initial, e.g. `M` (absent when no name) | `:62` → `daily-brief.tsx:206` |
| 8 | `{first name},` e.g. `Murat,` | `:62` |
| 9 | `you're at` / `You're at` (no-name branch) | `:64` |
| 10 | `hour 6` | `:68` |
| 11 | `of standing. Last two times you passed` | `:73` |
| 12 | `7,` (red / `warn` tone) | `:84` |
| 13 | `the next morning was` | `:85` |
| 14 | `rough.` (red / `warn` tone) | `:86` |
| 15 | `It hurts today` | `pain-check.tsx:52` |
| 16 | `No pain today` | `pain-check.tsx:59` |
| 17 | `Log today's check-in` | `pain-check.tsx:117` |
| 18 | `Today's Tasks` (source: `Today&apos;s Tasks`) | `today-tasks.tsx:74` |
| 19 | `Heel raises` / `Fitness` / `7 min` | `today-tasks.tsx:52, 26` |
| 20 | `Ankle rocks` / `Mobility` / `5 min` | `today-tasks.tsx:53, 27` |
| 21 | `Barefoot at home` / `Habit` | `today-tasks.tsx:54, 29` |
| 22 | `Foot roll` / `Recovery` / `3 min` | `today-tasks.tsx:55, 28` |
| 23 | `Single-leg hold` / `Fitness` | `today-tasks.tsx:56, 26` |
| 24 | `{title}. {category}` e.g. `Heel raises. Fitness` (a11y) | `today-tasks.tsx:117` |
| 25 | `Start Workout` (also a11y) | `action-dock.tsx:120, 180, 191` |

Adjacent chrome: tab labels `Home`, `Progress` (`tabs-layout.tsx:31-32`).

**Interactive elements**

| Element | File:line | Action |
|---|---|---|
| Streak capsule | `header-actions.tsx:120-131` | **no action wired** — `GlassView isInteractive`, no `onPress` prop exists |
| Gift capsule | `header-actions.tsx:185-198` | shake + `onPress` → `setGiftOpen(true)` |
| Profile capsule (iOS) | `profile-menu.ios.tsx:30-47` | opens SwiftUI `Menu` |
| Profile capsule (Android/web) | `profile-menu.tsx:26` | `onSettings` → `/settings` |
| Week strip cells ×7 | `streak-week.tsx:96-127` | **no action wired** (intentional per `:148-150`) |
| Brief line / avatar | `daily-brief.tsx:176-181` | **no action wired** |
| `It hurts today` | `pain-check.tsx:403-446` | `Haptics.selectionAsync()` + `setSelected('pain')` |
| `No pain today` | same | `setSelected('nopain')` |
| `Log today's check-in` | `pain-check.tsx:116-130` | disabled while nothing selected; `nopain` → `onLogged(true)` + confetti; `pain` → `setOpen(true)` |
| Task rows ×5 | `today-tasks.tsx:114-156` | haptic + toggles local `useState` array (`:70, 82-89`). No persistence, no program write |
| `Start Workout` | `action-dock.tsx:178-192` | haptic + `program?.toggle()` |
| ScrollView | `:137-148` | `useMinimizeOnScroll()` |

**Data displayed**

| Value | Verdict | Where |
|---|---|---|
| Streak `7` | MOCK — literal prop | `:159` |
| Week "done" days | MOCK — `i < new Date().getDay()`; comment calls it a stand-in | `:41` |
| Week "today" cell | REAL | `streak-week.tsx:47` |
| Header weekday / month-day | REAL — `toLocaleDateString` | `:99-103` |
| Avatar initial + name | REAL — `useProfileName()` ← `profile/name` | `:127, 178` |
| Entire brief body | MOCK — docstring: "Hard-coded to the predictive variant" | `:51-88` |
| The 11 brief states + selection ladder | MISSING — named in docstring, no code | `:46-49` |
| Task list (5 rows) | MOCK — "Stand-ins until the programme reports the real list" | `today-tasks.tsx:51-57` |
| Task completion | REAL but ephemeral — lost on unmount | `today-tasks.tsx:70` |
| `checkedIn` | REAL but ephemeral | `:123` |
| Mascot art ×3 | REAL assets | `pain-check.tsx:55, 60`; `header-actions.tsx:75` |
| Program sheet progress | REAL shared value | `:118, 163` |

**State variants:** success built. first-run present but **inert** — `IntroRevealProvider value` pinned true (`root-layout.tsx:57`), documented at `:29-32` as animating nothing. loading, empty, error: all absent. Re-answered check-in: absent — after `checkedIn` the block stays mounted and interactive.

## 2. Gift sheet — `src/shared/ui/gift-sheet/gift-sheet.tsx`

**Reachable from:** gift capsule on Home (`home-page.tsx:162`, mounted `:207`) and Progress (`progress-page.tsx:197`).
**Leads to:** dismiss only, three ways, all identical.

1. `Something for you` — `:80`
2. `Keep your streak going and there is more where this came from.` — `:89`
3. `Open it` — `:99`
4. `Maybe later` — `:110`

| Element | File:line | Action |
|---|---|---|
| Grabber | `:57` | decorative `View` |
| `Open it` | `:98-104` | success haptic + `onClose()`. **Nothing opened, granted or recorded** |
| `Maybe later` | `:105-111` | `onClose()` |
| `onRequestClose` | `:46` | `onClose()` |

**Data:** mascot `@assets/home/mascot-gift.png` (`:14`) REAL asset. No gift, reward, streak, discount or expiry is displayed — **MISSING**, there is no data model behind this sheet.
**State variants:** one static state.

## 3. Today's check-in sheet — `src/pages/home/ui/pain-check.tsx:194-317`

**Reachable from:** Home → `It hurts today` → `Log today's check-in` (`:128`). `No pain today` skips it entirely (`:124-127`).
**Leads to:** Save ≤6 → `onSaved()` + `onClose()` (`:230-238`); Save ≥7 → relief pane after 460 ms, check pane stays mounted and covered (`:243-248`); `Clear entry` → `onClose()` (`:301`); `onRequestClose` → `setOpen(false)` (`:137`).

1. `Today's check-in` (source `Today&apos;s check-in`) — `:261`
2. `How does the foot feel?` — `:262`
3. score digits, e.g. `3` — `:266`
4. band label, one of `Nothing` / `Barely there` / `Noticeable` / `Sore` / `Hurts` / `Severe` — `pain-scale.tsx:120-125`, rendered `:276`
5. band blurb, one of:
   - `No pain to report today.` — `pain-scale.tsx:120`
   - `You would forget it if nobody asked.` — `:121`
   - `You feel it, but it changes nothing you do.` — `:122`
   - `You are working around it without thinking.` — `:123`
   - `It is deciding things for you now.` — `:124`
   - `Standing on it is the problem, not running.` — `:125`
6. badge, one of `ABOVE USUAL RANGE` / `BELOW USUAL RANGE` / `WITHIN USUAL RANGE` — `pain-scale.tsx:267`
7. `USUAL RANGE 1–4` — template `USUAL RANGE {usual.low}–{usual.high}`, en-dash, leading space in the JSX run — `pain-scale.tsx:416`
8. `Save` / `Saved` — `:284`
9. `Clear entry` — `:304`

| Element | File:line | Action |
|---|---|---|
| Grabber | `:259` | decorative |
| Pain wedge, 96pt track | `pain-scale.tsx:186-199, 273-276` | `Gesture.Pan().minDistance(0)`; springs to nearest integer (`:174-184`); haptic per integer (`:164-172`) |
| `Save` / `Saved` | `:283-297` | haptic, `setLogged(true)`, `onSaved()`, then `onClose()` (≤6) or push relief (≥7). **The score is never written anywhere** |
| `Clear entry` | `:299-305` | `onClose()` only. **Nothing is cleared** — label describes an action the handler does not perform |

**Data:** score REAL but ephemeral, seeded to `Math.round((usual.low+usual.high)/2)` = 3 (`:208`). `usual` MOCK — `usualRange()` over `painFor()` → hardcoded `PAIN_LOG`, resolves `{low:1,high:4}` (`:155-158` → `program.ts:218-223`). Band label/blurb REAL derivation off a hardcoded table. Badge REAL derivation off MOCK `usual`. **The saved score: MISSING** — `onSaved()` takes no arguments (`:194`), `onLogged` receives only a boolean.
**State variants:** success written but unreachable (`Saved` at `:284` — ≤6 closes in the same handler, ≥7 gets covered). first-run/default built. loading, error, empty absent.

## 4. Relief session pane — `src/widgets/session-player/ui/session-view.tsx`, hosted at `pain-check.tsx:311-314`

**Reachable from:** check-in Save with score > `RELIEF_ABOVE` (=6), i.e. 7-10 (`:167, 235-248`). No other route.
**Leads to:** collapse chip → `setOpen(false)`; back arrow (only after collapsing) → `leave()` → `onClose()`; `Continue` → `advance()`, and on the last move stops at zero with a success haptic and **no completion screen, summary, or return**.

Visible on arrival: `Collapse demonstration` (a11y), and `Continue` or the countdown `01:00`.
Hidden at opacity 0 until collapsed: `Back` (a11y); `Day 17`; `3 min`; `2 moves`; clock; move names `Foot roll`, `Breathing reset` (`program.ts:215`); `Exercise 1/2`; `Expand demonstration` (a11y).

| Element | Action |
|---|---|
| Collapse chip | `setOpen(false)` |
| `Continue` / clock | `disabled={!ready}` where `ready = remaining <= 0`; press → `setPlaying(true)` + `advance()` |
| Back arrow | `leave()` → `onBack()` → `onClose()`. `pointerEvents: 'none'` while expanded |
| Expand chip | `setOpen(true)`; also `pointerEvents: 'none'` while expanded |
| Scrubber | wired, unreachable until collapsed |

**Data:** day/minutes MOCK — `reliefDay()` spreads `PROGRAM[TODAY_INDEX]` (`TODAY_INDEX=16`) and overrides `minutes: 3` (`pain-check.tsx:181-183`). Moves MOCK (`program.ts:215`). Countdown REAL but ephemeral off `SECONDS_PER_MOVE = 60`. Clip REAL asset. Whether the relief session completed: **MISSING**.
**State variants:** end-of-session partial (clock holds, haptic, no UI). loading, error, empty absent.

## 5. Profile menu — `src/shared/ui/profile-menu/profile-menu.ios.tsx`

1. `Refer a friend, get 60% off` — `:45` (systemImage `gift`)
2. `Settings` — `:46` (systemImage `gearshape`)

Referral → `onReferFriend`, default `() => {}` (`header-actions.tsx:100`); **neither Home nor Progress passes it** → dead end. Settings → `/settings`.
**Data:** no user data — the trigger is a generic `person.crop.circle.fill` tinted `#8E8E93` / `#98989E` (`:33-37`). The stored name exists and is used by the brief but ignored here — MISSING. `60% off` is MOCK; no offer model produces 60.

Android/web variant (`profile-menu.tsx`): no menu, no text; capsule goes straight to `onSettings` (`:26`). `onReferFriend` is in the props type but destructured away and unused (`:22`) — the referral entry does not exist off-iOS.

## 6. Confetti — `src/pages/home/ui/confetti.tsx`

Reachable from `No pain today` → Log → `setBurst(n+1)` (`home-page.tsx:192-196`), rendered `:205`. `pointerEvents="none"` (`:47`). Never dismisses — `{burst > 0 && <Confetti key={burst} />}` stays mounted for the session; pieces end their 1.5-2.4 s flight at opacity 0. No text, no interaction, no data.

## 7. Action dock — `src/shared/ui/action-dock/action-dock.tsx`

`Start Workout` — default `label` `:120`, rendered `:191`, a11y `:180`. One full-slab `Pressable` (`:178-192`) → haptic + `program?.toggle()`; no-op if `useProgram()` is null. Gradient stops `#A78BFA` / `#8B5CF6` / `#6D4AEF` hardcoded (`:75, 82, 173-175`). Resting/risen/gone positions driven by `program.progress` and `.detail`. No disabled, loading or error state.
