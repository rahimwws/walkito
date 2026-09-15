# Offer / paywall, Appearance sheet, Welcome gate, notifications, shared-UI audit

All strings `[hardcoded]`.

## Offer / paywall sheet — `src/pages/offer/ui/offer-page.tsx` (558 lines)

Route: `app/offer.tsx`.

**Reachable from:**
1. Automatically 2400 ms after onboarding's last step — `pending-offer.tsx:15` (`REVEAL_DELAY_MS = 2400`), `:34` `router.push({ pathname: '/offer', params: { ...pending } })`. Armed at `onboarding-page.tsx:337`.
2. Tapping either win-back notification — `offer-notifications.tsx:58` (no params on this path).

Since onboarding is unreachable at launch, path 1 cannot fire in the current build.

**Leads to:** `Continue` → `start()` (`:199-202`) → success haptic; `if (router.canGoBack()) router.back()`. **That is the only exit.** No swipe-down, no grabber, no tap-outside — `root-layout.tsx:117-118` sets `sheetGrabberVisible: false, gestureEnabled: false`. No close/X, no "No thanks", no Restore Purchases, no Terms/Privacy.

**All visible text, top to bottom**

| # | String | Line |
|---|---|---|
| 1 | `48` standard, or `48`→`70` animating (boosted) | `:219` |
| 2 | `%` | `:220` |
| 3 | `LIMITED — ONE TIME ONLY` (boosted only) | `:230` |
| 4 | `Your comeback price on the full year` (boosted) | `:237` |
| 5 | `Get 12 months for the price of 6` (standard) | `:237` |
| 6 | `Your {weeks}-week plan, and everything around it.` | `:242` |
| 7 | `Your plan, and everything around it.` (fallback) | `:242` |
| 8 | `Your plan, not a template` | `:69` |
| 9 | `Built from the answers you just gave, and rebuilt as they change.` | `:70` |
| 10 | `Adaptive sessions` | `:75` |
| 11 | `Every workout adjusts to how the last one actually went.` | `:76` |
| 12 | `Progress you can see` | `:81` |
| 13 | `Watch your readiness climb week by week.` | `:82` |
| 14 | `Yearly` | `:276` |
| 15 | `Billed yearly at $80.99` / `Billed yearly at $46.99` | `:277` |
| 16 | `$6.75/mo` / `$3.92/mo` | `:278` |
| 17 | `$6.75` struck through (boosted only) | `:279` |
| 18 | `Monthly` | `:287` |
| 19 | `$12.99/mo` | `:288` |
| 20 | `Continue` | `:302` |

**Interactive elements**

- Yearly row (`:349-378`), `accessibilityRole="radio"` → haptic + `setTier('yearly')` (`:281-284`).
- Monthly row → haptic + `setTier('monthly')` (`:290-293`).
- `Continue` (`:302`) → `start` (`:199-202`).
- Backgrounding the app is itself wired: `AppState` listener (`:176-189`) → `notificationsAllowed()` then `scheduleWinback(BOOSTED_SAVING, name)`; returning to `active` → `cancelWinback()`.

**PURCHASE VERDICT — there is no purchase code anywhere in this app.** `package.json` has no IAP dependency: no `react-native-iap`, `expo-in-app-purchases`, `react-native-purchases`/RevenueCat, StoreKit binding, Superwall, Adapty, or Stripe. A repo-wide grep for `purchase|iap|storekit|revenuecat|subscription|entitlement|restore` returns only prose in comments. **The buy button is unwired** — it dismisses the sheet and nothing else. **Yearly vs Monthly is cosmetic**: `tier` (`:110`) is written at `:283`/`:292` and read only at `:280`/`:289` to drive a fill animation; `start()` never reads it.

**Data displayed**

| Value | Source | Verdict |
|---|---|---|
| `12.99` monthly | `:34` | MOCK |
| `155.88` full-year basis | `:37` derived | MOCK |
| `80.99` standard yearly | `:48` | MOCK |
| `46.99` boosted yearly | `:49` | MOCK |
| `48` standard saving % | `:53` derived | MOCK |
| `70` boosted saving % | `:54` derived | MOCK |
| `$6.75` / `$3.92` per month | `:278` derived | MOCK |
| `weeks` param | onboarding `plan.weeks` | REAL |
| `name` param | onboarding `answers.name` — used **only** for the notification title, never rendered on the sheet | REAL |
| `boosted` flag | in-memory `entities/offer/model/boost.ts` | REAL |
| Free-trial length | nowhere in the file | MISSING |
| Currency / locale | `$` hardcoded at `:277, 278, 279, 288` | MISSING |
| Store product IDs | none | MISSING |

**State variants:** standard and boosted built (badge `:226-232`, climbing number `:141-155`, struck price `:361-368`). **loading absent, error absent.** No purchase-in-flight, purchase-failed, or already-subscribed state.

## Appearance sheet — `src/pages/settings/ui/settings-page.tsx`

Route `app/settings.tsx`. Route named `settings`, menu item labelled `Settings`, sheet titled `Appearance` — three names for one appearance picker.

**Reachable from:** iOS avatar → menu → `Settings` (`profile-menu.ios.tsx:46`); Android/web avatar directly (`profile-menu.tsx:26`). Callers: `home-page.tsx:165`, `progress-page.tsx:144`.
**Leads to:** dismiss only — system grabber / swipe (`root-layout.tsx:91-93`). No in-sheet Done or Close.

1. `Appearance` — `:39`
2. `System` — `:19`
3. `Match device settings` — `:19`
4. `Light` — `:20`
5. `Always light` — `:20`
6. `Dark` — `:21`
7. `Always dark` — `:21`
8. `The choice is remembered on this device.` — `:86`

Three `Pressable` rows (`:45`) → `if (selected) return;` → haptic → `setThemePreference(option.value)`, which writes MMKV and calls `Appearance.setColorScheme()` (`:47-51`). Trailing `Tick02Icon` on the selected row only (`:71-78`). Nothing else is tappable.

**Data:** current preference REAL, from `useThemePreference()` (`:35`). No app version, no account, no subscription status.
**State variants:** selected built; loading absent (MMKV is synchronous); error absent; first-run default `'system'` (`theme-store.ts:14`).

## Welcome gate — `src/pages/welcome/ui/welcome-page.tsx`

19-line wrapper over `src/pages/welcome/ui/liquid-glass/liquid-glass-screen.tsx` (472 lines) + theme `cookbooks/astro.ts`. **GPL-3.0 vendored** — see `LICENSE`, `NOTICE.md`, `README.md` in that folder; `index.ts:1-4` says "See README.md in this folder before shipping any of it."

**Reachable from:** `onboarding-page.tsx:397-399` — when `step.kind === 'welcome'` it early-returns `<WelcomePage onDone={onNext} />`, replacing the whole onboarding surface. Step 0 of the flow, so it would be the app's first screen — but onboarding is unreachable at launch.
**Leads to:** `Let’s go` → `onDone` → onboarding's `onNext`. Swiping the dome back down returns to the gate. No back (step 0), no skip.

1. wordmark image — `astro.ts:56`, rendered `:423` (not text)
2. `Swipe up to enter` — `astro.ts:88`, rendered `:429`
3. `+` — `:417`, `pointerEvents="none"` (decorative)
4. a11y label `Swipe up to enter` — `:383`
5. a11y hint `Swipe up to open the screen, swipe down to close it` — `:382`
6. `Train` — `astro.ts:92`, rendered `:435`
7. `support` (struck through, `:439-443`) — `astro.ts:93`
8. `your feet` — `astro.ts:94`, rendered `:445`
9. rotating third line, cycling every ~2.9 s (`HOLD_MS 1950` + `IN_MS 560` + `OUT_MS 400` + `GAP_MS 460`, `:63-66`), rendered `:448-450`:
   - `that hurt every morning` — `astro.ts:96`
   - `after 3 pairs of insoles` — `astro.ts:97`
   - `so a 12-hour shift stops hurting` — `astro.ts:98`
   - `so you can run again` — `astro.ts:99`
10. `Let’s go` (U+2019) — `astro.ts:101`, rendered `:456`

**Interactive:** pan gesture over the whole screen (`:256-277`), scrubs 1:1 then springs to 0 or 1. `Let’s go` (`:456`) → `onActionPress('astro.lets-go')` → `onDone`; inert and out of the a11y tree until `shown.value > 0.9` (`:367-370, 453`). The `+`, wordmark and copy are `pointerEvents="none"`.
**Data:** all copy, colours, 40 sticker slots and lens tuning MOCK (`astro.ts:49-103`). Sticker assets real.
**State variants:** gate and open built. loading absent (`useImage` null just renders nothing, `:395-405`); error absent. The `background.kind === 'video'` branch (`:98-109, 389-394`) is **dead** — the only theme is `kind: 'layers'` (`astro.ts:51`).

## Win-back notifications — `src/entities/notifications/model/notifications.ts`

**Reachable from:** `offer-page.tsx:177-183` — `AppState` → `'background'`, once per mount (`sent` ref `:175`), skipped if already boosted.
**Leads to:** tapping either → `offer-notifications.tsx:53-58` → `unlockBoost()` then `router.push('/offer')` (skipped if already there) → the boosted sheet.

1. `{who}, stoppp` e.g. `Rahim, stoppp`, else `Stoppp` — `:99` (triple-p intentional per `:82`)
2. `Pleeease.` — `:100`
3. `Take {percent}% off` → `Take 70% off` — `:113`
4. `Tap to grab it.` — `:114`

No action buttons/categories registered; tap handled at `offer-notifications.tsx:64-74`.
**Data:** `name` REAL (`offer-page.tsx:182`, trimmed `:93`); `percent` = `BOOSTED_SAVING` = 70, MOCK.
**State variants:** both `scheduleNotificationAsync` calls are wrapped in `try {} catch {}` that swallow silently (`:106-108, 125-127`); `notificationsAllowed()` returns false on throw (`:47-50`). **Error state is silently degraded — the user is never told scheduling failed.** First banner `trigger: null`; second after `SECOND_MESSAGE_DELAY_S = 1` (`:26`).

## Shared UI components — usage audit

Method: grepped every `@/shared/ui/<name>` import path and every exported symbol across `src/pages`, `src/app`, `src/widgets`, `app/`. Both greps agree.

| Component | File | Status | Hardcoded user-facing strings |
|---|---|---|---|
| `PlaceholderScreen` | `shared/ui/placeholder-screen/placeholder-screen.tsx` | **ORPHANED** | none — `title` is a required prop (`:13`); no body copy. Self-described "Temporary screen body while the real screen is built" (`:10`) |
| `EmptyStateCard` | `shared/ui/empty-state-card/empty-state-card.tsx` | **ORPHANED** | none — `icon`/`title`/`subtitle` all required props (`:27-31`); no default empty-state copy ships |
| `ProgressCard` | `shared/ui/progress-card/progress-card.tsx` | **ORPHANED** | `Excellent` (`:19`), `Strong` (`:20`), `Steady` (`:21`), `Building` (`:22`) — rendered `.toUpperCase()` at `:105`; default eyebrow `'SCORE'` (`:88`); default caption `'Last 7 days'` (`:89`); delta suffix `"this week"` (`:114`) |
| `DailyGoalCard` | `shared/ui/daily-goal-card/daily-goal-card.tsx` | **ORPHANED** | default caption `'Daily Goal'` (`:65`); default action label `'Get Started'` (`:66`); `{clamped}%` (`:136`) |
| `CounterCard` | `shared/ui/counter-card/counter-card.tsx` | **ORPHANED** | none — all props (`:19-30`) |
| `MeterRow` | `shared/ui/meter-row/meter-row.tsx` | **ORPHANED** | none — all props (`:19-29`) |
| `FeatureCard` | `shared/ui/feature-card/feature-card.tsx` | **ORPHANED** | none — all props (`:28-45`) |
| `ScoreGauge` | `shared/ui/score-gauge/score-gauge.tsx` | **ORPHANED** | `/100` (`:102`); default delta suffix `'vs avg'` (`:48`) |
| `SectionHeader` | `shared/ui/section-header/section-header.tsx` | **ORPHANED** | none — props (`:6-8`) |
| `SplashOverlay` | `shared/ui/splash/splash-overlay.tsx` | **ORPHANED** | none; loads `@assets/lottie/splash/{light,dark}.json` (`:13-14`). `root-layout.tsx:22-27` states "There is deliberately no launch animation." |
| `IntroReveal` / `useIntroRevealStyle` / `IntroRevealProvider` | `shared/ui/splash/intro-reveal.tsx` | **USED** — `home-page.tsx:16,156,171,177,185`; `progress-page.tsx:19,136,148,156,160,169,182`; `tabs-layout.tsx:26,85`; `root-layout.tsx:18,57` | none (animation only) |

`root-layout.tsx:57` renders `<IntroRevealProvider value>` — pinned true, so `useIntroRevealStyle`'s `skipped` ref is true on first render (`intro-reveal.tsx:38`) and progress starts at 1. **Every `IntroReveal` in the app renders instantly and animates nothing**, as documented at `root-layout.tsx:29-32`. This also orphans `SplashOverlay`.

The child primitives `ScoreValue` and `DeltaLabel` (`shared/ui/meter/`) are **used** by `src/pages/progress/ui/*`. They hardcode `-` for a null score (`score-value.tsx:30`) and `/100` (`score-value.tsx:43`).

Full orphan list across all 32 shared components (0 importers outside their own directory): `animated-dashed-border`, `counter-card`, `daily-goal-card`, `date-header`, `empty-state-card`, `feature-card`, `filter-pills`, `hero-stat`, `loading-spinner`, `meter-row`, `placeholder-screen`, `score-gauge`, `section-header`, `stat-bar`, `stat-strip`, `week-strip` — 16 of 32.
