# Screen inventory — Tread

Factual inventory of what exists in the codebase. No recommendations, no intent
inferred beyond what comments state. Produced by reading every page, layout,
route, widget and shared component under `src/` and `app/`.

## Platform

Expo / React Native + TypeScript, `expo-router` v6 (typed routes off). **Not a
native iOS codebase** — no Swift, no `UserDefaults`, no Core Data. The
persistence equivalent is MMKV behind a `KvBackend` interface
(`src/shared/lib/storage/`). **No i18n exists**: no `i18next`,
`expo-localization`, `Intl` message catalogue, or string table anywhere in
`src/` or `app.json`. Every user-facing string in the app is a literal in
source, so every string in this document is `[hardcoded]`.

## Two icon libraries ship

`AGENTS.md` states "Never use emoji, text glyphs, or another icon library"
(Hugeicons only). Both are in `package.json`:

- `@hugeicons/core-free-icons` + `@hugeicons/react-native` — 29 files
- `phosphor-react-native` — 13 files: `home-page.tsx`, `streak-week.tsx`,
  `today-tasks.tsx`, `onboarding/config/option-icons.ts`,
  `onboarding/ui/{choice,health,sex,social-proof}-step.tsx`,
  `program/ui/day-card.tsx`, `progress/ui/{progress-page,streak-tile}.tsx`,
  `shared/ui/action-dock/action-dock.tsx`,
  `widgets/session-player/ui/session-view.tsx`

There is also one literal text glyph used as a control: `'✕'` at
`src/pages/onboarding/ui/contract-step.tsx:253`.

## Launch path — verified on device

`app/_layout.tsx` → `src/app/layouts/root-layout.tsx`.

```
root-layout.tsx:72   <Stack.Protected guard={onboarded}>   → "onboarding"
root-layout.tsx:79   <Stack.Protected guard={!onboarded}>  → "(tabs)"
```

`useOnboarded()` returns whether onboarding **is complete**
(`src/entities/session/model/onboarding.ts:64-66` over `completed`, `:25`).
`Stack.Protected` gates *availability*. So as written, onboarding is available
only once it is already finished, and `(tabs)` only while it is not.
`ALWAYS_ONBOARD = true` (`onboarding.ts:15`) additionally forces
`completed = false` at every launch.

**Observed:** eight cold launches (`simctl terminate` + `launch`) all landed on
the Home tab. The welcome gate never appeared. Onboarding is unreachable at
launch, and nothing anywhere calls `router.push('/onboarding')`.

The comment at `root-layout.tsx:61-71` describes the opposite behaviour, and
`onboarding.ts:8-13` describes `ALWAYS_ONBOARD` as forcing the flow on every
launch. Both describe intent that the guard polarity defeats.

Consequence: the 19-step onboarding flow, the GPL-3.0 welcome screen, and the
offer sheet (armed only by onboarding completing) are all unreachable in the
current build except by deep link.

## Screen index, in navigation order from launch

| # | Screen | File | Reachable |
|---|---|---|---|
| 1 | Home tab | `src/pages/home/ui/home-page.tsx` | launch |
| 2 | Gift sheet | `src/shared/ui/gift-sheet/gift-sheet.tsx` | Home / Progress header |
| 3 | Profile menu (iOS) | `src/shared/ui/profile-menu/profile-menu.ios.tsx` | Home / Progress avatar |
| 4 | Appearance sheet | `src/pages/settings/ui/settings-page.tsx` | profile menu → Settings |
| 5 | Today's check-in sheet | `src/pages/home/ui/pain-check.tsx:194-317` | Home → "It hurts today" → Log |
| 6 | Relief session pane | `src/widgets/session-player/ui/session-view.tsx` | check-in Save with score ≥ 7 |
| 7 | Confetti overlay | `src/pages/home/ui/confetti.tsx` | Home → "No pain today" → Log |
| 8 | Action dock | `src/shared/ui/action-dock/action-dock.tsx` | always on both tabs |
| 9 | Program overlay | `src/app/layouts/program-overlay.tsx` + `src/pages/program/ui/program-page.tsx` | dock "Start Workout" |
| 10 | Session pane | `src/widgets/session-player/ui/session-view.tsx` | program → "Get Started" |
| 11 | Progress tab | `src/pages/progress/ui/progress-page.tsx` | tab bar |
| 12 | Win-back notifications | `src/entities/notifications/model/notifications.ts` | offer sheet backgrounded |
| — | Offer / paywall sheet | `src/pages/offer/ui/offer-page.tsx` | **unreachable** (armed by onboarding only) |
| — | Day sheet | `src/pages/day/ui/day-page.tsx` | **unreachable** (route registered, nothing pushes it) |
| — | Onboarding, 19 steps | `src/pages/onboarding/` | **unreachable** (guard polarity) |
| — | Welcome gate | `src/pages/welcome/ui/welcome-page.tsx` | **unreachable** (onboarding step 0) |

Per-screen detail for each of the above — verbatim strings in top-to-bottom
order, every interactive element with its wired action or "no action wired",
every displayed value marked REAL / MOCK / MISSING, and which state variants
are built — is in the four slice files beside this one:

- `home.md` — screens 1-8
- `progress-program-day.md` — screens 9-11, the Day sheet, and the orphaned path subtree
- `offer-settings-welcome.md` — the offer sheet, Appearance, the welcome gate, notifications, and the shared-UI usage audit
- `onboarding.md` — all 19 onboarding steps
