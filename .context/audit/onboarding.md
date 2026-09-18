# Onboarding flow — 19 steps

Entry: `app/onboarding.tsx` → `src/pages/onboarding/ui/onboarding-page.tsx`.
**Unreachable at launch** — see the guard analysis in `README.md`.

One route that swaps contents (`onboarding-page.tsx:104-699`). `STEPS` holds
**19** entries (`model/steps.ts:128-349`), `STEP_COUNT = 19` (`:351`). Three
docblocks say "fifteen screens" (`onboarding-page.tsx:89`, `steps.ts:110`,
`plans.ts:55`) — the array holds 19.

Index → kind/key: 0 welcome · 1 intro · 2 name · 3 sex · 4 choice/runner ·
5 measure/age · 6 measure/body · 7 size · 8 choice/goal · 9 choice/pain ·
10 choice/sport · 11 choice/load · 12 choice/challenge · 13 health · 14 notify ·
15 building · 16 plan · 17 contract · 18 social.

Every non-`bare` step shares: header Back (`:415-427`), `StepProgress` (`:428`),
header Close (`:429-441`), and the shared `PrimaryButton` bar (`:673-695`)
unless the kind is in `noSharedCta` (`:173-177`). `bare` = intro, building,
welcome (`:165-166`).

All strings `[hardcoded]`.

## 0. Welcome gate — `steps.ts:129-137` → `src/pages/welcome/ui/welcome-page.tsx`
Early-returned before the shared frame (`:397-399`). Copy lives in
`welcome/ui/liquid-glass/cookbooks/astro.ts` — see `offer-settings-welcome.md`.
`STEPS[0].title = ''`, `blurb = ''` (`steps.ts:135-136`), never rendered.
No back (`:362` returns early at index 0), no header, no shared CTA.

## 1. Intro / Apple sign-in — `ui/intro-step.tsx` (data `steps.ts:138-150`)
**Leads to:** `Continue with Apple` → `signInWithApple()` (`:302-317`).
`'cancelled'` → **stays** (`:306`). `'signed-in' | 'unavailable' | 'failed'` →
next. **No back arrow and no Close** (`bare`).
- `Hi, I’m Tread` — `steps.ts:146` (source `'Hi, I’m Tread'`)
- `Your dedicated partner in running pain‑free for life!` — `steps.ts:147` (source uses `‑` non-breaking hyphen)
- `Continue with Apple` — `steps.ts:148`, via `ctaLabel` case `'intro'` (`:371-372`)
- NOT RENDERED: `footnote: '~2 min setup'` (`steps.ts:149`); `title: 'Run without second-guessing'` (`:144`); `blurb: 'A smarter daily plan for runners.'` (`:145`)

Button appears only after `introReady`, fired from `IntroStep` phase 3 (`intro-step.tsx:117-119`); guarded by `authing` (`:278`). Mascot Lottie, 121 frames, REAL asset (`config/mascot.ts:10`), not a tap target.
**State variants:** in-flight and success built. **No error message** — a `'failed'` result shows nothing and silently advances (`:306-314`).

## 2. Name — `ui/name-step.tsx` (data `steps.ts:151-158`)
- `What should we\ncall you?` — `steps.ts:155` (`TypedText` splits on `\n`)
- `Nice to meet you.` — `steps.ts:156`
- placeholder `e.g. Alex` — `steps.ts:157` → `name-step.tsx:45`
- `Next` — `:384`; a11y `Back` (`:418`), `Close` (`:431`)

`TextInput` auto-focused after 250 ms (`name-step.tsx:34`), `maxLength={24}`, `autoCapitalize="words"`, `returnKeyType="next"` → `onChange` writes local answer **and** `setProfileName(next)` on every keystroke (`:510-516`).
**Data:** typed name REAL → `kv 'profile/name'`.
**Missing:** no validation — `canAdvance` has no `'name'` case, hits `default: return true` (`:204-206`); an empty name advances and downstream copy silently drops `{name}` (`personalise.ts:27-35`). No error text.

## 3. Sex — `ui/sex-step.tsx` (data `steps.ts:159-169`)
- `And which are you, {name}?` — `steps.ts:163` (token via `withName`, `:473-477`)
- `Load tolerance and injury patterns differ, so the plan does too.` — `:164`
- `Female` — `:166`; `Male` — `:167`; `Next`

Two `AnimatedPressable` cards, `accessibilityRole="radio"` (`sex-step.tsx:120-124`) → `setAnswer([next])` (`:582`). CTA disabled until selected (`:181-183`).
**Data:** two photos REAL (`config/sex-photos.ts:14-17`).

## 4. Athlete type — `ui/choice-step.tsx` (data `steps.ts:170-183`)
- `What kind of athlete are you, {name}?` — `:174`
- `This is where your plan starts from.` — `:175`
- `Just getting started` `:177` · `Casual` `:178` · `Regular` `:179` · `Training for something` `:180` · `Serious about it` `:181` · `Next`

Five rows, `accessibilityRole="checkbox"` (`choice-step.tsx:256`) → single-select `onChange([value])` (`:70-74`).
**Data:** icon/hue from `OPTION_ICONS` (`config/option-icons.ts:64-120`) MOCK. The `icon:`/`accent:` fields on each option in `steps.ts` are **never read**. This is the only answer that feeds `recommendedIndex`.

## 5. Age — `ui/measure-step.tsx` (data `steps.ts:184-197`)
- `How old are you?` — `:188`
- `Used only to pace how fast your plan builds.` — `:189`
- suffix `years` — `:194` → `measure-step.tsx:123`; toggle label `years` — `:193` → `:198` (single-segment)
- `Next`

Transparent `TextInput` over the number, digits-only, `maxDigits: 2` (`:98-121`); tap number → refocus (`:85-87`); auto-focus after 220 ms (`:71-76`).
**Data:** `28` MOCK seed (`steps.ts:194`) — if untouched, 28 is the recorded answer.
**Missing:** clearing all digits leaves `raw = ''`, `Number('')||0` renders `0`, and Next still advances.

## 6. Body weight — `ui/measure-step.tsx` (data `steps.ts:198-216`)
- `A little more about you, {name}` — `:202`
- `Tendons carry what you weigh. This sets your starting load.` — `:203`
- `kg` — `:207-208`; `lb` — `:212-213`; `Next`

`maxDigits: 3`. `UnitToggle` kg/lb → **discards the typed value and reseeds** to that unit's `initial` (`:535-542`) — no conversion.
**Data:** `72` kg / `159` lb MOCK seeds (`steps.ts:208, 213`).

## 7. Shoe size — `ui/size-step.tsx` (data `steps.ts:217-223`)
- `What size do you run in, {name}?` — `:221`
- readout, e.g. `42` / `42.5` — `size-step.tsx:145` (`formatSize` `:202-204`)
- `EU` `:50` · `US` `:51` · `Next`
- NOT RENDERED: `blurb: 'Shoe size is the closest thing we have to your foot’s lever length.'` (`steps.ts:222`) — suppressed by `step.kind !== 'size'` (`:484`)

Horizontal `ScrollView` ruler is the input, snapped to half sizes with a haptic per size crossed (`:95-110, 150-162`). `SegmentedControl` EU/US reseeds to 42 or 9 rather than converting (`:591-597`). Figure is `pointerEvents="none"` (`:188`).
**Data:** size REAL page state, initialised MOCK `42`. Figure photo `LEGS_PHOTOS[sex]` — **`male` deliberately points at the female asset**, marked `PLACEHOLDER` (`config/legs-photos.ts:11-19`).

## 8. Goal — `ui/choice-step.tsx` (data `steps.ts:224-237`)
- `{name}, what are you working toward?` — `:228`
- `Pick the one that matters most right now.` — `:229`
- `Run pain-free` `:231` · `Train for a race` `:232` · `Run more consistently` `:233` · `Build stronger legs` `:234` · `Stay injury-free` `:235` · `Next`

**The answer is never read by anything downstream.**

## 9. Pain locations — `ui/choice-step.tsx` (data `steps.ts:238-257`)
- `What’s getting in the way, {name}?` — `:242`
- `Choose any that apply.` — `:243`
- `Foot` `:246` · `Heel` `:247` · `Achilles` `:248` · `Shin` `:249` · `Knee` `:250` · `Hip` `:251` · `Nothing right now` `:255` · `Next`

`multi: true` (`:244`). `'none'` is exclusive both ways (`choice-step.tsx:79-85`). No `max`, so no cap.
**Data:** answer read only by the orphaned `readinessFrom` (`model/readiness.ts:51-53`).

## 10. Sport — `ui/choice-step.tsx` chip layout (data `steps.ts:258-273`)
- `What puts the load on your legs, {name}?` — `:262`
- `Pick the one that hurts you most — the questions after this follow from it.` — `:263`
- `Running` `:266` · `Tennis` `:267` · `Gym` `:268` · `Football` `:269` · `Basketball` `:270` · `Cycling` `:271` · `Hiking` `:272` · `Next`

Wrapping capsule chips (`art === 'sport'`, `choice-step.tsx:98-111`), single-select. The blurb says "Pick the one that hurts you most" while the step is **not** `multi`.
**Data:** chip glyph/hue from `SPORT_ICONS` (`option-icons.ts:130-139`) MOCK.

## 11. Weekly load — `ui/choice-step.tsx` (data `model/personalise.ts:81-128`; placeholder in `steps.ts:274-285`)
Running default; the page always uses `load.*` for this key (`:474, 497, 561-562`).
- `How much are you running now, {name}?` — `personalise.ts:83`
- `Your honest current week, not your best one.` — `:84`
- `0–5 km` · `5–15 km` · `15–30 km` · `30–50 km` · `50+ km` — `:59-63` (built by `KM('km')`)
- other sports' titles: `How much are you on court, {name}?` `:89` · `How much are you training, {name}?` `:95` · `How much are you playing, {name}?` `:101, :107` · `How much are you riding, {name}?` `:113` · `How much are you hiking, {name}?` `:119`
- other blurbs: `Matches and practice together — your honest current week.` `:90` · `Time under load, not time in the building.` `:96` · `Matches and training together — your honest current week.` `:102` · `Games and practice together — your honest current week.` `:108` · `Your honest current month, not your best one.` `:120`
- hour options: `Under 1 hour` · `1–3 hours` · `3–5 hours` · `5–8 hours` · `8+ hours` — `:67-71`
- `Next`
- NOT RENDERED: option `caption: 'per week'` on all ten load options (`:59-72`) — `ChoiceRow` renders only `option.label` (`choice-step.tsx:274-276`)
- NOT RENDERED: `extraLabel` values `Runs per week` / `Sessions per week` / `Rides per week` / `Hikes per month` (`:86, 92, 98, 104, 110, 116, 122`)
- NOT RENDERED: `steps.ts:284` `extra: { key: 'sessionsPerWeek', label: 'Sessions per week', options: ['1','2','3','4','5+'] }` — the type declares `extra` (`steps.ts:83`) but nothing reads it
- NOT RENDERED: placeholder `title: 'How much are you doing right now?'`, `blurb`, `options: []` (`steps.ts:281-283`)

Sport fallback is `'running'` when `sport` is null (`personalise.ts:127`).

## 12. Hardest thing — `ui/choice-step.tsx` (data `steps.ts:286-302`)
- `What’s hardest right now, {name}?` — `:290`
- `Up to two.` — `:291`
- `Staying pain-free` `:295` · `Getting back to running` `:296` · `Increasing distance` `:297` · `Recovering faster` `:298` · `Getting stronger` `:299` · `Avoiding another injury` `:300` · `Next`

`max: 2` — a third selection **silently drops the oldest** rather than refusing (`choice-step.tsx:88-91`), with no message.
**Data:** answer never read downstream.

## 13. Health permission — `ui/health-step.tsx` (data `steps.ts:303-309`)
Own button; shared CTA suppressed (`noSharedCta`).
- `Fill me in, {name}!` / `Fill me in!` — `health-step.tsx:93`
- `Tread reads your steps, energy and heart rate to build your plan around what you have actually been doing.` — `:96-97`
- `Steps` `:32` · `Active Energy` `:33` · `Heart Rate` `:34`
- `Not shared` (per-row null) — `:119`
- value formats `1.2k` / `{n} kcal` / `{n} bpm` — `:167-169`
- `Connect to Health` / `Opening Health…` / `Next` — `:134`
- `Your health data never leaves this device.` — `:141`
- `Health isn’t available here — you can carry on without it.` — `:146`
- `Skip for now` — `:158`
- NOT RENDERED: `title: 'Connect your Health data'`, `blurb: 'So your plan starts from what you have actually been doing.'` (`steps.ts:307-308`) — health excluded from the shared heading (`:461`)
- NOT RENDERED: `ctaLabel` case `'health'` (`:373-374`) — unreachable, shared bar is off for this kind

Button → `connect()` = `requestHealthAccess()` then `readTodaySummary()` (`:76-88`), or `onNext` once connected; `disabled={busy || (!available && !connected)}` (`:136`). `Skip for now` → `onSkip` → `onNext` (`:153-159`), hidden once connected (`:152`). **The three `Switch` views are decorative, not touchable** — they animate on with a stagger (`:176-202`).
**Data:** steps/calories/heartRate REAL from HealthKit (`entities/health/model/health.ts:77-`); render only after `connected`, `Not shared` for nulls. Row colours `#38BDF8` / `#FB7185` / `#F472B6` hardcoded (`:32-34`).
**Missing:** no error state — `requestHealthAccess` swallows throws and returns false (`health.ts:59-61`), and `connect()` still fires success haptics and calls `onConnected(next)` with all-null values (`:83-87`). **Nothing distinguishes "denied" from "connected but empty".**

## 14. Notifications — `ui/notify-step.tsx` (data `steps.ts:310-316`)
- `Don’t go it alone, {name}` / `Don’t go it alone` — `:81`
- `A plan only works if it turns up. Let Tread tell you when today has a session in it.` — `:84`
- `Tread` `:179` · `now` `:180` (mock banner chrome)
- `Today is foot strength — 7 minutes. Your shins will thank you.` — `:183-184`
- `A nudge on the days your plan has a session` — `:27`
- `A heads-up when it changes what you are doing` — `:28`
- `Nothing else. No streaks to guilt you back.` — `:29`
- `Turn on notifications` `:110` / `Opening…` `:109` / `Next` `:107`
- `Not now` — `:121`
- `No problem — you can turn these on later in Settings.` — `:126`
- NOT RENDERED: `title: 'Turn on notifications'`, `blurb: 'So your plan can tell you when it needs you.'` (`steps.ts:314-315`)

Button → `ask()` → `requestNotificationAccess()` (`:64-76`), then `onNext`; `disabled={busy}` (`:113`). `Not now` → `onSkip` (`:116-122`), hidden once answered. Banner non-interactive.
**Data:** app icon REAL (`@assets/icon.png`, `:23`). Banner title/time/body MOCK. `granted` REAL, page state only.
**Missing:** error state — the entity swallows failures.

## 15. Building your plan — `ui/building-step.tsx` (data `steps.ts:317-326`)
`bare` + `noSharedCta` — **no back, no close, no skip, and no control of any kind for 5.44 s.**
- `Getting to know you` / `Building your plan` / `Your plan is ready` — `:29`
- `Start my training` — `:171`
- NOT RENDERED: `title: 'Building your plan'`, `blurb: 'Folding everything you told me into week one.'` (`steps.ts:324-325`)

Button mounted only after `ready` (`:166`), i.e. after `RUN_MS = 3 × 1900 − 260 = 5440 ms` (`:32-39, 96-101`).
**Data:** photograph `PLAN_PHOTOS[sex]` REAL. Progress rule MOCK — a fixed `withTiming(1, { duration: RUN_MS })` (`:80-84`); **no real work is done and none of the user's answers are consumed here.**

## 16. Plan choice — `ui/plan-choice-step.tsx` (data `model/plans.ts`, `steps.ts:327-333`)
- `Choose your training plan` — `steps.ts:331` (rendered by the shared heading — `plan` is **not** in the exclusion list at `:461-464`, despite the comment at `:457-460`)
- `Both are built from your answers — pick how much runway you want.` — `:332`
- `6 weeks` `plans.ts:25` · `12 weeks` `:37` (segments)
- `MOMENTUM` `:26` · `FOUNDATIONS` `:38`
- `RECOMMENDED` — `plan-choice-step.tsx:103`
- `KEEP RUNNING` `plans.ts:27` · `START RUNNING` `:39`
- `6-week plan` `:28` · `12-week plan` `:40`
- `Ideal if you already run most weeks and want to build without breaking down.` `:29`
- `Ideal if you’re starting from scratch or aren’t currently physically active.` `:41`
- `A focused block that adds load only as fast as your legs adapt` `:31`
- `Strength and mobility woven around the runs you already do` `:32`
- `A gentle transformation mixing consistency and varied workouts` `:43`
- `Become a runner step by step, with joy, all the way to your first 5K` `:44`
- `Choose my plan` — `:376`

`SegmentedControl` → `setPlanIndex` (`plan-choice-step.tsx:68-75`, `:616`). The card itself is not tappable.
**Data:** plan copy MOCK. Recommended index derived from one real answer via a hardcoded map: `0` for `regular|racing|serious`, else `1` (`plans.ts:57-59`). Focal offsets `0.3`/`0.34` hardcoded (`config/plan-photos.ts:27-30`). **No price, no session count, no dates.**
Back → `go(15, false)` re-mounts building and **replays the whole 5.44 s timer**.

## 17. Commitment contract — `ui/contract-step.tsx` (data `steps.ts:334-340`)
- `Let’s make a contract, {name}` — `steps.ts:338`
- `blurb: ''` (`:339`) — rendered as an **empty** `Animated.Text` because contract is not excluded from the shared heading (`:489-501`)
- `Sign here` — `:234`
- `✕` — `:253` (**a literal text glyph used as a control**)
- `★ TREAD ★` `:262` · `COMMITTED` `:263` · `PAIN-FREE` `:265` · `RUNNING` `:266`
- `{name}, your signature stays on this device.` / `Your signature stays on this device.` — `:273`
- `Continue` — `:382`

Signature pad via `PanResponder` (`:142-172`) → `onSignedChange(points >= MIN_POINTS)`, `MIN_POINTS = 12` (`:44, 131-134`). `✕` → `clear()` (`:174-179, 251-253`). CTA enabled only when `signed && !sealing` (`:189-190`) → haptic + `setSealing(true)` + stamp (`:288-299`); the step plays the Lottie and calls `onSealed` 1000 ms after the last frame (`:103-122`).
`onDrawingChange` → `setDrawing` in the page — **the value is never read** (`:140, 636`). Its doc says "The page freezes its ScrollView for the duration" (`:51-53`), but this step renders in a plain `View` (`:632`), not a `ScrollView`.
**Data:** drawn path REAL local state, explicitly stored nowhere (`:66-73`). Stamp wording MOCK. Lottie `@assets/lottie/contract.json` from frame 60 (`:27-38`).

## 18. Social proof / hand-off — `ui/social-proof-step.tsx` (data `config/testimonials.ts`, `steps.ts:341-348`)
Last step (`index 18 === STEP_COUNT - 1`).
- `Welcome, {name}` / `Welcome aboard` — `:93`
- `Join 40,000+ runners\ntraining without pain` — `:107`
- `“` `:198` and `”` `:202`
- `Six months of shin pain, and` `testimonials.ts:28` · `I ran a pain-free 10k` `:29` · ` eight weeks in.` `:30` · `Marta K.` `:31`
- `It found my calves, not my knees.` `:35` · `The strength work finally made sense` `:36` · `.` `:37` · `Daniel R.` `:38`
- `Back from an Achilles injury` `:42` · `without losing the distance I built` `:43` · `.` `:44` · `Priya S.` `:45`
- `Continue` (reviews 1-2) / `See my offer` (review 3) — `:380`
- NOT RENDERED: `detail: 'Running 4 years'` / `'Half marathon, 1:38'` / `'Marathon in training'` (`testimonials.ts:32, 39, 46`) — the type says "Shown under the name" (`:23`) but `ReviewCard` renders only `review.name` (`:205`)
- NOT RENDERED: `title: ''`, `blurb: ''` (`steps.ts:346-347`) — social excluded from the shared heading (`:464`)

Press 1 and 2 → `setReview(n+1)` (`:322-326`); press 3 → `armOffer({ weeks: String(plan.weeks), name })` + `completeOnboarding()` (`:334-340`) → root layout swaps stacks; the offer sheet is raised over Home by `usePendingOfferPresenter` (`root-layout.tsx:49`). Horizontal swipe → `onMomentumScrollEnd` → `setReview` (`:84-88, 125`). Dots display-only (`:143-147`).
**Data:** `40,000+` MOCK (`:107`). Always exactly five filled stars, `Array.from({ length: 5 })` MOCK (`:192-194`). Reviews MOCK. `name` REAL. `plan.weeks` REAL selection.
