# Progress tab, Program overlay, Day sheet, and the orphaned path subtree

All strings `[hardcoded]`.

## Progress tab — `src/pages/progress/ui/progress-page.tsx`

**Reachable from:** tab bar (`tabs-layout.tsx:32`, route `app/(tabs)/progress.tsx`).
**Leads to:** `/settings` (`:144`); Gift sheet (`:143`); Program overlay (dock); Home tab. **Nothing here navigates to `/day/[day]`.**

**All visible text, top to bottom**

1. `3` — streak capsule (`:139` → `header-actions.tsx:129`)
2. `Get your gift` (a11y) — `header-actions.tsx:189`
3. `Gift` — `header-actions.tsx:196`
4. `Refer a friend, get 60% off` — `profile-menu.ios.tsx:45`
5. `Settings` — `profile-menu.ios.tsx:46`
6. `7 days` / `1 month` / `3 months` — segments (`:59, :60, :61`)
7. `Over the last` — `:77`
8. `7 days` | `month` | `3 months` — the window word inside the sentence (`:59-61` `window:`)
9. `your progress is` (rising) | `your progress has` (falling) — `:79`
10. `44%` | `26%` | `8%` with up/down arrow — `:80`
11. `.` — the full stop, rendered as the metric's `tail` (`:81`)
12. `88` | `81` | `74` — inside the ring (`:59-61` → `score-card.tsx:123`)
13. `Score` — default `scoreLabel`, never overridden (`score-card.tsx:63`)
14. `You’re doing great!` — U+2019 curly apostrophe (`:163`)
15. `3 day streak!` — template, **no plural handling**: reads `1 day streak!` at one day (`:164`)
16. `Keep it up to finish the Strengthen block.` — template over `blockName(today.block)` (`:165`)
17. `Performance` — default `label`, never overridden (`performance-card.tsx:64`)
18. `43%` | `24%` | `11%` — delta, arrow from sign (`:59-61` → `performance-card.tsx:97`)
19. `2.5` | `2.1` | `1.6` — bubble over the marker (`:59-61` → `performance-card.tsx:108-110`)
20. `Very Low`, `Low`, `Medium`, `High` — band words (`:44`)
21. `3 days` — `{days} {days === 1 ? 'day' : 'days'}` (`streak-tile.tsx:40`)
22. `Current Streak` — `:187`
23. `12 days` — `streak-tile.tsx:40`, value `:41`
24. `Longest Streak` — `:193`
25. `Start Workout` — `action-dock.tsx:120`, a11y `:180`
26. `Home`, `Progress` — tab labels (`tabs-layout.tsx:31-32`)

**Interactive elements**

- Streak capsule — `header-actions.tsx:120-130`, `GlassView isInteractive`, **no action wired**.
- Gift capsule — shake + `onGift` → `setGiftOpen(true)` (`:143`). Wired.
- Profile menu → "Refer a friend, get 60% off": ProgressPage never passes `onReferFriend`, so it hits the default `() => {}` (`header-actions.tsx:100`) — **no action wired**. → "Settings": `router.push('/settings')` (`:144`). Wired.
- Segmented control, 3 segments (`:149-153`) — `onChange={setRangeIndex}`, guarded against re-selecting (`segmented-control.tsx:80`). Wired; swaps every number on the screen.
- ScoreCard, PerformanceCard, both StreakTiles — **no press target anywhere** (`score-card.tsx:80-134`, `performance-card.tsx:100-143`, `streak-tile.tsx:35-47`).
- ScrollView — `useMinimizeOnScroll` (`:94, 119`).
- Action dock — haptic + `program?.toggle()`.

**Data displayed**

| Value | Source | Verdict |
|---|---|---|
| Header streak `3` | `const STREAK = 3` (`:29`); comment `:28` "Sample, like the rest of the program." | MOCK |
| Trend % 44 / 26 / −8 | `RANGES` (`:59-61`); comment `:51-56` says the two longer windows are sample and the last is negative on purpose | MOCK |
| Window word | `RANGES[].window` | MOCK |
| Score 88 / 81 / 74 | `RANGES[].score` | MOCK |
| Ability 2.5 / 2.1 / 1.6 | `RANGES[].ability` | MOCK |
| Ability delta 43 / 24 / −11 | `RANGES[].abilityDelta` | MOCK |
| Ruler `max` | `MAX_LEVEL = 4` (`program.ts:137`) | MOCK |
| Band words | `BANDS` (`:44`) | MOCK |
| Block name `Strengthen` | `blockName(PROGRAM[TODAY_INDEX].block)`, `TODAY_INDEX=16`; `program.ts:5` "Sample data for now" | MOCK |
| Current streak tile `3` | `STREAK` | MOCK |
| Longest streak tile `12` | `LONGEST_STREAK = 12` (`:41`); its docblock `:32-40` says the derived value would be 6 and the shown current streak is 3 — the literal matches neither | MOCK |
| `swapProgress` | `program?.progress` | REAL (animation state) |
| Header `centre` date block | not passed by ProgressPage (Home passes it) | MISSING — slot exists `header-actions.tsx:135`, empty on this tab |

**State variants:** success only. No loading (everything is a module constant, nothing async), empty, error, or first-run.

## Program overlay — `src/app/layouts/program-overlay.tsx` + `src/pages/program/ui/program-page.tsx`

**Reachable from:** the dock slab on either tab (`action-dock.tsx:181-184` → `program.toggle()`); mounted once for the tab stack at `tabs-layout.tsx:94`. On Progress it parks higher (`DOCK_TOP_RAISED = 42`, chosen `tabs-layout.tsx:79`).
**Leads to:** session pane (`program-page.tsx:167`, rendered `:174-179`); dismiss by drag past 30% or flick >900 px/s (`program-overlay.tsx:173-179`) or pressing the dock again; from the session pane, back arrow → `closeDetail()` (`program-page.tsx:177`) — a downward flick is explicitly refused while detail > 0.5 (`program-overlay.tsx:132-135`).

**All visible text** (current mock state: today = day 17, block 2)

1. `Strengthen` — `blockName(today.block)` (`program-page.tsx:141`; `BLOCKS = ['Settle','Strengthen','Load','Sustain']`, `program.ts:43`)
2. `Block 2 of 4 · 14 days` — the `4` is a literal, not `BLOCKS.length` (`program-page.tsx:144`)
3. Then 14 cards, each showing `DAY` (`day-card.tsx:108`), the number 15…28 (`:112`), a kind label `Strength` / `Mobility` / `Balance` / `Recovery` (`:45-48`) or `Retest` for day 28 (`:83`), and `7 min` / `5 min` / `3 min` / `4 min` (`:124`)
4. Today's card (day 17, `balance`) also shows tags `Single-leg hold`, `Eyes-closed stand`, `Heel-to-toe walk` (`program.ts:214`), `3 moves` (`day-card.tsx:86`), and the button `Get Started` (`:148`)
5. Present but unreachable with `TODAY_INDEX = 16`: `3 tests` (`day-card.tsx:85`), the checkpoint tag trio `Calf`, `Arch`, `Balance` (`:137`), and `Start retest` (`:148`) — these need a checkpoint day with `status === 'today'`

**Interactive elements**

- Pan gesture over the whole sheet (`program-overlay.tsx:114-180`), `manualActivation`; claims the drag in the top `PROGRAM_HEADER_HEIGHT = 96` (`program-page.tsx:43`) or when `scrollTop <= 0` and moving down >10pt.
- Grabber pill — `pointerEvents="none"`, decorative (`program-overlay.tsx:293-295`).
- Invisible full-screen blocker (`:270`) — swallows taps for the screen behind.
- Day list ScrollView — `bounces={false}`, writes `program.scrollTop` (`program-page.tsx:84-86`).
- `Get Started`, today's card only (`day-card.tsx:147-151`) → `setSession(day)`, `setRun(n+1)`, `openDetail()` (`program-page.tsx:164-168`). Falls back to `onStart ?? (() => {})` (`day-card.tsx:149`).
- **The 13 non-today cards have no press target.** `DayCard` renders no `Pressable` outside the `open &&` branch (`:88-155`); the lock/check `Mark` is a bare icon (`:159-167`).

**Data:** block name/number, `of 4`, day count, day numbers, kind, minutes, which card is open, check marks — all MOCK, off `TODAY_INDEX = 16`, `MISSED = new Set([4, 9])`, `KIND_CYCLE`, `MINUTES`. Exercise tags MOCK (`program.ts:211-216`). Checkpoint tag trio inlined rather than read from `ZONE_META` — MOCK (`day-card.tsx:137`). Whether the user did any of it: **MISSING** — `statusFor`'s `doneToday` is never passed `true` (`program-page.tsx:163`). Dates: **MISSING** on this screen.
**State variants:** success only. `session` is deliberately never cleared on exit (`program-page.tsx:61-68`), so the pane keeps the last day mounted.

## Day sheet — `src/pages/day/ui/day-page.tsx`

**Reachable from: ORPHANED.** Route exists (`app/day/[day].tsx`) and is configured (`root-layout.tsx:129-138`), but **no code pushes it**. Repo-wide, the only `router.push` targets are `/offer` (`offer-notifications.tsx:58`, `pending-offer.tsx:34`) and `/settings` (`home-page.tsx:165`, `progress-page.tsx:144`). The consumer it was built for — `PathNode.onPress` → `onSelect(day, status)` — lives in the orphaned path components, and even there the callback is never supplied. Reachable only by deep link, e.g. `/day/14?status=done`.

**Leads to:** Branch A → system Share sheet then back to itself, else dismiss. Branch B → `Start retest` → `router.back()` (`:144`), i.e. **dismisses; starts nothing**. Branches C and D → **dead end**, no button; exit only via grabber/swipe.

**Branch A — checkpoint with a recorded retest (only day 14 exists, `program.ts:163`)**

1. `Retest · Day 14` — `:90`
2. `Block 1 · Settle` — `:91`
3. `Where you stood at the end of the block` — `:92`
4. `Calf` · `11` · `→` (U+2192, `:107`) · `19` · `Lv2 → Lv3`
5. `Arch` · `18s` · `→` · `24s` · `Lv2`
6. `Balance` · `8s` · `→` · `14s` · `Lv2 → Lv3`
7. `Symmetry` · `34%` · `→` · `21%` · `Lv1 → Lv2`
8. `Share` — `:115`
9. Share payload, newline-joined: `Calf: 11 → 19 (Lv2 → Lv3)` etc. — `:119-125`

**Branch B — checkpoint, no retest, `status === 'today'`**

10. `Day 28` — `:136`
11. `Time to check your progress` — `:137`
12. `3 tests · 4 minutes` — `:138` (`RETEST_TESTS`/`RETEST_MINUTES`, `program.ts:73-74`)
13. `Nothing to train today. The tests measure where the block left you, and they are the only thing that moves a level.` — `:141-142`
14. `Start retest` — `:144`

**Branch C — checkpoint, no retest, not today**

15. `Day 42` — `:152`
16. `Retest · closes Block 3` — `:153`
17. `3 tests · 4 minutes` — `:154`
18. `Opens on Fri, Oct 10. Levels hold still until then.` — `:159`

**Branch D — ordinary session day**

19. `Wed, Sep 10` — eyebrow (`:178`; `DAYS` `:29`, `MONTHS` `:30-33`)
20. `Balance · 5 min` — `:179` (`SESSION_META`, `session-meta.ts:24-27`)
21. `Day 17 · Block 2 · Strengthen` — `:180`
22. if missed: `No session logged. Nothing to make up — the program runs on dates, so the next day is the next day.` — `:184-186`
23. else the exercise list, e.g. `Single-leg hold`, `Eyes-closed stand`, `Heel-to-toe walk` — `program.ts:211-216`
24. if done/rest: `Pain that day` — `:201`
25. the pain number, e.g. `1` (`:203`) and ` / 10` (`:204`)
26. if upcoming: `Comes up on Thu, Sep 11.` — `:212`

**Interactive:** `Share` (branch A) → `Share.share` (`:114-127`). `Start retest` (branch B) → `router.back()`. Grabber/swipe. **Branches C and D contain zero touch targets.**
**Data:** which day REAL param over a MOCK table (`:49, 52`); `status` REAL param, defaulted `'upcoming'`, **unvalidated** (`:53`); retest rows, level labels, zone labels, exercises, pain, session meta, `RETEST_TESTS`/`RETEST_MINUTES` all MOCK; dates = REAL clock off a MOCK anchor. Blocks 2-4 retest results **MISSING** — such a day silently falls to branch C.
**State variants:** four content branches plus `missed` and `upcoming` sub-branches. loading/empty/error/first-run absent. `day == null` returns `null` (`:55`) — **a blank sheet with no message** for a bad `?day=`.

## Orphaned: the path subtree

Verified transitively — nothing outside this set imports any of it.

| File | Only importer |
|---|---|
| `progress/ui/path-trail.tsx` | **none** |
| `progress/ui/path-node.tsx` | `path-trail` only |
| `progress/ui/path-connector.tsx` | `path-trail` only |
| `progress/ui/pain-legend.tsx` | **none** |
| `progress/ui/today-card.tsx` | **none** |
| `progress/model/path-layout.ts` | `path-trail`, `path-connector` |
| `progress/model/day-caption.ts` | `path-trail`, `path-node`, `path-layout` |
| `progress/model/pain-ring.ts` | `path-node`, `pain-legend` |
| `progress/config/path-theme.ts` | `path-connector`, `path-layout` |

Live in that slice: `progress-page`, `score-card`, `performance-card`, `streak-tile`, `use-count-up`.

**PathTrail** (`path-trail.tsx`) — would call `onSelect(day, status)` (`:19, 88`), no supplier. Divider labels, upper-cased at render (`:73`): `BLOCK 1 · SETTLE` … `BLOCK 4 · SUSTAIN` (`path-layout.ts:43`), `WEEK 2` … `WEEK 8` (`path-layout.ts:44`). `layoutPath` (`path-layout.ts:74`) is never called.

**PathNode** (`path-node.tsx`) — `Retest today` / `Today · 5 min` / `Retest` (`day-caption.ts:16, 18`); `+8` (`:268`, value `program.ts:164`); bare day numbers `1`…`56` (`:274`). `Pressable` → `onPress` → no action wired. Five node faces built (`:313-341`), none render.

**PathConnector** (`path-connector.tsx`) — no text, `pointerEvents="none"` (`:80`).

**PainLegend** (`pain-legend.tsx`) — `The ring around a day shows the pain you logged that day.` (`:55`). The three legend words `Easy` / `Sore` / `Sharp` (`pain-ring.ts:32-34`) are **never rendered** — consumed only as React `key`s (`:48`), so the bar draws three unlabelled dots. Close `Pressable` → `markPainLegendSeen()` then `onDismiss()` (no supplier). Owns storage key `progress/pain-legend-seen` (`:12`) — **never read or written at runtime** because the file never mounts.

**TodayCard** (`today-card.tsx`) — **no strings of its own**; `eyebrow`, `title`, `subtitle`, `action.label`, `note` are all props with no default and no call site → all MISSING. Two shapes built (`:40-66`), neither renders. Only other mention in the repo is a doc reference at `shared/ui/action-button/action-button.tsx:36`.

**Wholly unused exports:** `VIEWS` / `ProgressView` (`path-theme.ts:5-6`) — zero references anywhere, including inside its own package. `NODE_SIZE`, `NODE_STEP`, `NODE_SWING`, `CHECKPOINT_SCALE`, `FINISH_SCALE`, `PATH_TOP_PAD`, `PATH_BOTTOM_PAD`, `DIVIDER_GAP`, `CAPTION_GAP` feed only `path-layout`; `TRAIL_DOT` only `path-connector` (`path-theme.ts:16-43`). `CAPTION_CLEARANCE` (`day-caption.ts:5`) used only at `path-trail.tsx:55`.
