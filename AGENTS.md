# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

# Architecture: Feature-Sliced Design

Read [`src/README.md`](src/README.md) before adding files. The rules that bite most often:

- **`/app` is routing only.** Route files are thin re-exports (`export { HomePage as default } from '@/pages/home';`). Implementation goes in `src/`.
- **Never create `src/app` routes.** Expo Router prefers `src/app` over `/app`; `app.json` pins `extra.router.root` to `"app"` to stop that. Don't remove the key.
- **Import downward only:** `app` → `pages` → `widgets` → `features` → `entities` → `shared`. Never sideways between slices on the same layer.
- **Import through a slice's public API** (`@/shared/ui/progress-card`), never a file inside it.
- Aliases: `@/*` → `src/*`, `@assets/*` → `assets/*`.

Put new code in the page that uses it. Move it down a layer only when a second page needs it.

# Typography: SF Pro Rounded

All text uses SF Pro Rounded on iOS and **Nunito on Android** — Apple licenses SF for Apple platforms only, so the Android build must never carry it. The faces live in `src/shared/config/font-faces.ts` (SF) and `font-faces.android.ts` (Nunito, from `@expo-google-fonts/nunito`); Metro picks one per platform, and the expo-font plugin in `app.json` embeds each platform's own set. `fonts.regular` … `fonts.heavy` resolve to the right face either way. SF Pro Rounded is bundled in `assets/fonts/` and loaded at runtime in `src/app/layouts/root-layout.tsx` (Expo Go can't embed fonts at build time; the expo-font config plugin in `app.json` covers dev builds). Rounded rather than neutral because the product is a coach — see the note at the top of `src/shared/config/fonts.ts`.

This said Inter until the app switched faces; the five `Inter-*.ttf` files sat unreferenced in `assets/fonts/` for as long as the doc kept claiming they were in use, and have now been deleted.

Set weights via `fontFamily` with the constants from `src/shared/config/fonts.ts` (`fonts.regular` … `fonts.heavy`) — never via `fontWeight`, which makes iOS synthesize or fall back to the system font:

```tsx
import { fonts } from '@/shared/config';

<Text style={{ fontFamily: fonts.semibold }}>…</Text>
```

# Color

Take colors from `@/shared/config` — `palette` for surfaces, `meterColors` for anything showing a number or a meter, `accents` for tinting a metric by category. Screens must not set their own `backgroundColor`: the navigation theme paints every screen container, which is what keeps tab-switch fades flash-free.

Colour never judges a value. `meterColors` has no "bad" entry, so nothing can render red; values are always `ink`, `positive` marks only an improving delta. `accents` say *which* metric a bar belongs to, not how good it is — a bar keeps its accent at 3% and at 99%.

# Appearance

**Import `useColorScheme` from `@/shared/lib/theme`, never from `react-native`.**

The app has a persisted appearance override (System / Light / Dark), set in the sheet at `src/pages/settings`. Two things have to happen on a change, which is why the plain RN hook is not enough:

- `Appearance.setColorScheme()` repaints native views — liquid glass and the SwiftUI host inside `AnimatedNumber` are drawn by the system and read the trait collection, not our JS state.
- Our own store notifies subscribers. `Appearance.setColorScheme()` updates RN's snapshot but **never emits a `change` event** — that only fires from the native `appearanceChanged` listener. Since RN's `useColorScheme` is a `useSyncExternalStore` over that emitter, using it directly leaves JS-driven colours stale until an unrelated render happens along.

The hook in `@/shared/lib/theme` subscribes to both and returns a narrowed `'light' | 'dark'`.

# Icons: Hugeicons Free

This project uses the free Hugeicons set, `@hugeicons/core-free-icons` (MIT, ~5,400 icons), rendered by `@hugeicons/react-native`. Never use emoji, text glyphs, or another icon library.

**One style only.** The free package ships stroke-rounded glyphs and has no solid/filled variants, so `altIcon`/`showAlt` stroke↔solid toggling is not available. Express active and selected states with color/tint instead — that is what the tab bar does.

**Exception: WidgetKit.** The home-screen widget (`features/home-widget`) and the Live Activity (`widgets/session-player/ui/session-activity.tsx`) use SF Symbols through `@expo/ui/swift-ui` `Image systemName`. Their bodies run in expo-widgets' JavaScriptCore under the `'widget'` directive, where there are no imports and no react-native-svg. Illustrations reach a widget only as PNGs copied into the App Group and drawn with `uiImage`, as the mascot is.

## Import icons ONE AT A TIME, by subpath

```tsx
import { HugeiconsIcon } from '@hugeicons/react-native';
import Mic01Icon from '@hugeicons/core-free-icons/Mic01Icon';

<HugeiconsIcon icon={Mic01Icon} size={24} color="#000" strokeWidth={1.5} />
```

Note it is a **default** import from a per-icon subpath. Do NOT import from the package root:

```tsx
import { Mic01Icon } from '@hugeicons/core-free-icons'; // ❌ adds ~4.7MB to the bundle
```

Metro does not tree-shake, so the barrel pulls all ~5,400 icons in as a single module. Measured on this project: 4.0MB → 8.7MB for the iOS bundle. The per-icon subpath keeps it at 4.0MB.

`HugeiconsIcon` props: `icon`, `size` (default 24), `color`, `strokeWidth` (default 1.5).

## Looking up icon names

Do NOT guess icon names — many have numeric suffixes (`Mic01Icon`, `Mic02Icon`, `MicIcon` all exist). Look them up locally; every icon is a file in the installed package:

```bash
ls node_modules/@hugeicons/core-free-icons/dist/types | grep -i <keyword>
```

Example: `... | grep -i micro` → `Microphone01Icon.d.ts`, `Microphone02Icon.d.ts`, etc. Strip the `.d.ts` to get both the import name and the subpath. For visual browsing, search at https://hugeicons.com/icons — but confirm the name exists in the free package before using it, since the site also lists pro-only icons.

# Language: never a bare string

The app ships in English, Russian and Spanish. **No user-facing text may be written as a literal in a component.** Take it from the catalogue:

```tsx
import { useT } from '@/shared/lib/i18n';

const t = useT();
<Text>{t('streak.title', { count: 3 })}</Text>
```

Outside React — a background task, a notification scheduler — there is no hook, so ask for a translator by language instead: `translatorFor(getLanguage())`.

The catalogue is hand-written rather than i18next, and `src/shared/lib/i18n/index.ts` explains why at length. The short version is that two properties are wanted and a library makes both harder: a missing translation must fail `tsc`, and Russian's `few` form must be impossible to forget.

## Whole sentences, never fragments

This is the rule that gets broken first and costs the most. A key holds a complete clause with `{placeholders}` inside it — never a piece that a call site joins to another piece.

```tsx
`${plural(n, 'Day')} Streak`          // ❌ "3 Days" + " Streak"
t('streak.title', { count: n })        // ✅ one key per language
```

English leads with the count and ends with the noun; Russian closes with «подряд» after both; Spanish needs «de» between them. No ordering of the two English fragments reaches either, which is why composition lives in the catalogue, once per language.

The same rule applies to the daily brief, where the renderer lays tokens out as sibling `<Text>` nodes — so **array order is word order**. Sentences there are stored as an ordered `BriefSegment[]` per language and built with `buildBrief` from `@/shared/ui/daily-brief`; a language may use a different number of segments than English.

## Plurals

`Intl.PluralRules` is not used — Hermes ships a subset that varies by build, and a degraded lookup does not throw, it just returns `other` forever and renders "5 день" to every Russian speaker. The CLDR rules are ours, in `src/shared/lib/i18n/plural.ts`, and tested.

What a translator has to supply per language is enforced by the catalogue *type*:

| | required | note |
|---|---|---|
| `en` | `one`, `other` | |
| `ru` | `one`, `few`, `many` | `few` is 2–4, 22–24. **11–14 are `many`** despite their last digit |
| `es` | `one`, `other` | never `many` — that is the whole-millions form |

## Adding a string

1. Add the key to `src/shared/lib/i18n/catalogue/en/<domain>.ts`. English is the source of truth; every other catalogue is typed *from* it.
2. `tsc` now fails for Russian and Spanish until they have it. That is the design.
3. Prefix the key with its domain (`home.`, `onboarding.`, `offer.`…) so domains cannot collide — the per-language `index.ts` merges them with a spread that preserves literal types. **Do not annotate a domain file's type**, or the placeholder inference widens to `string` and silently stops checking parameters.
4. `bun test src/shared/lib/i18n/` asserts placeholder parity, completeness, and that no plural entry was flattened to a single string.

Language names in the picker are endonyms — «Русский», not «Russian» — and are deliberately the one set of strings never translated: the control is read by someone who cannot yet read the language the app is in.

# Analytics: PostHog + RevenueCat

Product analytics go through `@/shared/lib/analytics`, never the PostHog SDK directly:

```tsx
import { track } from '@/shared/lib/analytics';

track('session_completed', { day, block, kind, checkpoint });
```

- **Every event is declared in `src/shared/lib/analytics/events.ts`.** A new event is a new entry there first; a misspelt name is a `tsc` error rather than a second, empty series in a funnel.
- **Never send health data.** No pain scores, pain zones, retest measurements, HealthKit readings, age, weight or shoe size. Send that something happened (`checkin_logged`), not what was reported. Apple rejects apps that pass health data to analytics.
- **Revenue comes from RevenueCat, not from the client.** RevenueCat's PostHog integration sends purchases, renewals, refunds and cancellations server-side. `purchase_completed` is a funnel step; never sum it into revenue.
- **Identity:** PostHog is identified as the RevenueCat app user id, and RevenueCat gets `$posthogUserId` — see `linkAnalytics` in `entities/purchase/model/revenuecat.ts`. Keep the two ids the same or the funnel breaks at the paywall.
- **Onboarding step keys and `AcquisitionSource` values are analytics identifiers.** Renaming one splits every chart at the day it shipped.
- Dev builds are tagged `app_variant = development`, which the PostHog project treats as a test account. Dashboards: PostHog project 626472 (org "Walkito").

# Performance: EAS Insights + Observe

- `expo-insights` has no API: linked into the binary, it reports cold starts to EAS → Insights → App usage.
- `expo-observe` goes through `@/shared/lib/observe`, never the SDK directly. It is configured once in `root-layout.tsx` with the expo-router integration (per-route `cold_ttr` / `warm_ttr` / `tti`), and `track()` mirrors every analytics event into it. Both are lazily required, so a dev client built before they were linked just drops metrics.
- **No endless animations on mounted-but-hidden screens.** The program overlay and all tabs stay mounted. A `withRepeat` there runs on the UI thread forever: the dots on every `DayLink` once added up to several hundred and heated the phone. Gate looping motion on `useIsFocused()` or on a single element, the way `DayLink.animated`, `PathNode` and `Glow paused` do.

# Updates

`features/app-update`, mounted once as `<AppUpdateHost>` in the root layout after fonts load. It checks on launch and on foreground (at most every 30 min, after onboarding, never in `__DEV__`). A newer App Store version (iTunes lookup, production builds only) comes first, including over an update the native launch check already downloaded: that one waits for the session's first store lookup. "Later" snoozes an offer for 24 h.

- **Download first, offer after.** An EAS Update is fetched silently (`fetchUpdateAsync`), and one the native launch check already downloaded is picked up through `useUpdates().isUpdatePending`. The sheet only appears once the bytes are on the phone, so "Update now" is a restart and nothing else. Silent failures retry on the next check. The ready copy says "Later" is harmless because it is: expo-updates launches the newest download on the next cold start.
- **The sheet** has the onboarding mascot (Lottie) standing on the card. It rises only after the Lottie has decoded, and nothing on it can be tapped until it does. The Lottie is unmounted with the sheet, so nothing loops while hidden; with Reduce Motion it is never mounted and the still stands in. Tapping outside is "Later", but the card and the mascot absorb taps. "Later" stays available during a retried download and goes away only once the restart has started. The store variant is the same sheet with an App Store button.
- **The restart is a handoff, not a cut.** On accept the mascot hops and crossfades to `assets/update/mascot-handoff.png` (Lottie frame 84). The card then blooms to full screen in `palette[scheme].background` while he glides to a `HANDOFF_SIZE` (200pt) square at the centre. `reloadAsync` is called with `reloadScreenOptions` that draw that same colour and image in that same square (`{ url, width: 200, height: 200, scale: 1 }`, `contain`, `fade: true`, no spinner). The native screen is identical to the last JS frame, and it fades onto the relaunched app. Keep `HANDOFF_SIZE`, the PNG and the sheet's final layout in step: `features/app-update/config/mascot.ts` says why each number is what it is. Pass the image as a resolved file URL, never a `require` id: expo-updates multiplies the asset's size by its scale, and Android cannot open a resource name. On Android's embedded bundle expo-asset hands back exactly such a name as `localUri`, so `prepareHandoffImage` checks for a scheme and copies a bare name out to a file through expo-asset's native module.
- **After the restart** a flag (`update/applied`) written just before `reloadAsync` is compared with `Updates.updateId`. If it changed, a small "Walkito is up to date" note with the mascot drops in at the top and `app_update_applied` is tracked. If not, or on an emergency launch (`Updates.isEmergencyLaunch`, a fall back to the embedded bundle), the flag is cleared silently.
- **Reduce motion** turns every move into a fade; the restart still happens.
- **Preview it without publishing:** in a dev build, open the dev menu and choose "Preview update sheet" (or open any `…?previewUpdate` link). Accepting plays the whole choreography, holds the real native reload screen up for 1.2 s via the debug-only `showReloadScreen`, then shows the note.

# Splash

A cold start (and the relaunch after an update) is one shot: native splash, then `<SplashReveal>`'s identical first frame, then the app opening through the mascot as he leaps at the screen.

- **One picture, three places.** `assets/update/mascot-handoff.png` in a `SPLASH_MASCOT_SIZE` (200 pt) square at the exact window centre, on `palette.dark.background` (`#111113`). The native splash (the `expo-splash-screen` plugin in app.json, `imageWidth` 200, the @3x file as source), the JS reveal's first frame (`shared/ui/splash`) and the update reload screen (`HANDOFF_SIZE`, which is the same constant) all draw it. Change one and you change all three; `reveal-math.test.ts` checks app.json against the JS side.
- **Native splash needs a native build, and so does the reveal's first release.** The plugin writes the launch storyboard and Android theme at `expo prebuild`. Adding `expo-splash-screen` changed the fingerprint (`runtimeVersion` policy in `app.config.ts`), so no binary built without it can receive an update carrying the reveal: the first native build with the plugin ships both halves, and from then on the JS side (timings, math, mask) can be tuned over the air. Never give the plugin a `dark` block: it sets `UIUserInterfaceStyle` to Automatic and unpins the dark appearance. The JS side never imports the `expo-splash-screen` package; it reaches the module only through `requireOptionalNativeModule('ExpoSplashScreen')`, as expo-router does, which keeps a dev client built before the module was added bundling and running.
- **The native splash leaves in one frame.** `splash-reveal.tsx` calls `setOptions({ duration: 0, fade: false })` at module scope. Android's default exit is a 400 ms fade, which would lie over the crouch as a double exposure.
- **It never delays the first screen.** The overlay is part of the first frame, before fonts; the navigator mounts under it as soon as the fonts resolve. Two frames later (and once Skia has drawn the same picture under the plain cover) the reveal runs: a 180 ms crouch, then a 560 ms ease-in zoom in which he visibly grows (whole to about 1.2x, gone past 3x) before he is only a window. It starts by 2.5 s whatever happens, and unmounts completely afterwards, Skia canvas included. Reduce Motion gets a 250 ms fade and no Skia at all.
- **Sized from the root's frame** (`useSafeAreaFrame`), never window metrics: on Android those leave out the navigation bar, which the edge-to-edge root and the native splash span.
- **Touches stop at the overlay**, including gesture-handler's: it carries a `Gesture.Manual()` that never activates, because on Android gesture-handler hit-tests on its own and walks past a view with no handler and no background.
- **Anything on the first screen that must not start unseen waits for `useSplashRevealed()`** (from `shared/ui/splash`, true once the overlay is gone, with a fallback so it never waits forever). A sheet opened at mount is presented above the root view and so above the splash, which then plays behind it; a greeting that types itself from mount is mostly typed before it is uncovered. Not wired yet: the welcome greeting (`IntroStep`) and the widget's "It hurts" sheet (`PainCheck`, `?checkin=hurts`) should hold on it.
- **After an update's restart** the reload screen fades (300 ms) over the splash's first frame, which is the same picture. The reveal waits that fade out (`updateRestartHoldMs` from `features/app-update`, passed as `holdMs`), and the "up to date" note waits for the reveal (`SETTLE_MS`, 1.2 s). The dev "Preview update sheet" stops short of this: it hides the reload screen straight onto the live app, plays no reveal, and shows the note after 350 ms. Only a real update's restart shows the whole shot.
- **The zoom's focus is measured, not guessed.** `MASCOT_FOCUS` / `MASCOT_FOCUS_RADIUS` in `shared/ui/splash/reveal-math.ts` are the centre and radius of the largest circle inside his opaque body, from a distance transform of the still's alpha channel. The zoom ends when that circle covers the window's farthest corner. Re-measure them if the still is redrawn.

# Android

The same app runs on Android; platform splits are files Metro picks by suffix, never `Platform.OS` branches in shared screens where a file split is cleaner.

- **Health:** HealthKit on iOS, Health Connect on Android — `entities/health/model/*.android.ts` implement the same functions. Health Connect has no walking asymmetry or walking speed, so those signals stay null there, and no background observers: the app refreshes on every foreground.
- **Sign-in:** Apple on iOS, Google on Android (`signInWithPlatform`). Google needs `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID`; without it the button lets the user through anonymously.
- **Widget:** `features/home-widget/android` draws the same `DailyCheck` with `react-native-android-widget`. Its headless task is registered in the root `index.js` (the package `main`), before any screen mounts.
- **No Liquid Glass or real blur:** anything using `GlassView` must give itself a fill when `isLiquidGlassAvailable()` is false, and `ProgressiveBlur` falls back to a gradient.
- **Back button:** the program overlay handles it in `shared/lib/program` — session first, then the plan.

# Home-screen widget

`features/home-widget`: one widget kind, `DailyCheck`, in two sizes. Small asks the morning check-in; its two cards are `Link`s that open Home on `?checkin=fine` or `?checkin=hurts`. `PainCheck` records "no pain" and says so, or opens the check-in sheet for the scale and the leg map. The widget records nothing itself. Medium shows the day's goal and the week. `importWidgetAnswers` only reads back answers from the first build, which recorded them in the widget.

- **Never put `null` in widget props or return it from a widget `onPress`.** Props are stored in UserDefaults, a JS `null` arrives as `NSNull`, and UserDefaults answers with `abort()`. Omit the key instead. `sync.ts` also strips nulls at the boundary.
- The layout itself is JavaScript and ships over the air: the app registers it at launch and reloads the widget. Adding a widget, a size, or anything else in the `app.json` widget config changes the extension and needs `expo prebuild` and a native build.
- `frame` with `width` or `height` is SwiftUI's fixed frame and ignores `maxWidth`/`maxHeight`. Anything that should fill takes only the `max*` bounds. Don't put padding or a background on a widget `Text`: expo-widgets applies a Text's modifiers twice.

