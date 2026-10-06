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

# Typography: SF Pro Rounded (the system's), Nunito on Android

All text uses SF Pro Rounded on iOS and **Nunito on Android**. On iOS it is the system's own rounded design, `fontFamily: 'ui-rounded'` with a `fontWeight`, not a bundled file: the app used to embed five SF `.otf` files twice over (4.4 MB of the install), and Apple licenses the downloadable SF files for mock-ups, not for shipping. Android has no SF and may not carry it, so it gets Nunito (`@expo-google-fonts/nunito`), embedded by the expo-font plugin in `app.json` and also loaded by `useFonts` in `src/app/layouts/root-layout.tsx`. Metro picks `src/shared/config/font-faces.ts` (iOS) or `font-faces.android.ts`. Rounded rather than neutral because the product is a coach: see the note at the top of `src/shared/config/fonts.ts`.

**Every text style takes its face and size from `fonts.*`. Never set `fontFamily`, `fontWeight` or `fontSize` by hand:**

```tsx
import { fonts } from '@/shared/config';

const styles = StyleSheet.create({
  title: { ...fonts.heavy(24, -0.6), textAlign: 'center' }, // size, letterSpacing
  label: fonts.semibold(16),
});

<Text style={[fonts.bold(size), { color }]}>…</Text>; // a computed size
```

It is a function of the size because iOS tracks the system face by size (its `trak` table: +0.37pt a character at 17pt, +0.51pt at 13pt) and never tracked the bundled file. `fonts.*` takes that back out through letterSpacing, so every line sets as wide as it did on the old file (checked on the iOS simulator, line against line). The second argument is the letterSpacing the design asks for, written as it always was. On Android the correction is 0.

- **A later style that sets `fontSize` or `letterSpacing` on its own brings the tracking back.** Override with another `fonts.*` call carrying the new size and any spacing the text would have inherited: `fonts.medium(16, -0.2)` over a title set at `-0.2`.
- **`faces.*` is the face alone**, for a nested span, or a later style on the same Text, that only changes the weight and inherits a size and spacing already set by `fonts.*`: `quoteLead: faces.bold`.
- **SwiftUI text** (`AnimatedNumber` on iOS, the home-screen widget, the Live Activity) uses `font({ size, weight, design: 'rounded' })`, the same system face tracked the system's way. `AnimatedNumber` takes a `weight`, never a family.
- `noteFonts` (Inter, from `@expo-google-fonts/inter`) belongs to the note sheet alone.

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
- **Session replay is off** (`enableSessionReplay: false` in `shared/lib/analytics`; see the comment there for why). The screens that show pain, retest results, body answers or Apple Health numbers are still wrapped in `REPLAY_MASK` / `<ReplayMask>` from `@/shared/ui/replay-mask`, so a new screen of that kind gets one too. Masks cover only the views wrapped, and the privacy policy must mention recordings before replay is turned on.
- **Revenue comes from RevenueCat, not from the client.** RevenueCat's PostHog integration sends purchases, renewals, refunds and cancellations server-side. `purchase_completed` is a funnel step; never sum it into revenue.
- **Identity:** PostHog is identified as the RevenueCat app user id, and RevenueCat gets `$posthogUserId` — see `linkAnalytics` in `entities/purchase/model/revenuecat.ts`. Keep the two ids the same or the funnel breaks at the paywall.
- **Onboarding step keys and `AcquisitionSource` values are analytics identifiers.** Renaming one splits every chart at the day it shipped.
- Dev builds are tagged `app_variant = development`, which the PostHog project treats as a test account. Dashboards: PostHog project 626472 (org "Walkito").

# Performance: EAS Insights + Observe

- `expo-insights` has no API: linked into the binary, it reports cold starts to EAS → Insights → App usage.
- `expo-observe` goes through `@/shared/lib/observe`, never the SDK directly. It is configured once in `root-layout.tsx` with the expo-router integration (per-route `cold_ttr` / `warm_ttr` / `tti`), and `track()` mirrors every analytics event into it. Both are lazily required, so a dev client built before they were linked just drops metrics.
- **No endless animations on mounted-but-hidden screens.** The program overlay and all tabs stay mounted. A `withRepeat` there runs on the UI thread forever: the dots on every `DayLink` once added up to several hundred and heated the phone. Gate looping motion on `useIsFocused()` or on a single element, the way `DayLink.animated`, `PathNode` and `Glow paused` do.

# App size

1.0.1 (26) installed at 102.6 MB, about 45 MB to download. Install size only shrinks through a store build; OTA cannot touch it. The levers, and what keeps them working:

- **Embedded frameworks are stripped** in Release device builds (-7.2 MB): `plugins/strip-embedded-frameworks.sh`, run by a phase that `plugins/with-strip-frameworks.js` puts after `[CP] Embed Pods Frameworks`. It uses `strip -x -S` only where the build holds a dSYM with the framework's UUID (the Expo frameworks) and `strip -S` elsewhere: React, ReactNativeDependencies and hermesvm ship without dSYMs, so their local symbols are the only function names a crash has. Put React Native's published dSYMs in the build and they move to `-x -S` by themselves (about 5.9 MB more). The plugin stays **first** in app.json, since Xcode mods run in reverse order and it has to run last. The EAS Xcode log prints a before/after line per framework.
- **Hermes debug info goes to a source map, not the app** (-1.5 to -1.8 MB): `plugins/with-hermes-sourcemap.js` sets `SOURCEMAP_FILE` in the bundle phase. Production sets `uploadSourceMaps`, so EAS Observe symbolicates reported errors, and keeps the map as a build artifact (`ios/build/sourcemaps/main.jsbundle.map`). For any other JS stack from a store build, download that build's artifacts from its EAS page and run `npx metro-symbolicate main.jsbundle.map < stack.txt`; Hermes frames read `address at main.jsbundle:1:<offset>`. A map fits one build only, and a stack from an OTA update needs that update's map.
- **Android-only native modules stay out of iOS** via `expo.autolinking.ios.exclude` in package.json (Google Sign-In, -0.58 MB). It drops the RN pod and the Expo adapter together; `react-native.config.js` would only drop the first. JS must guard the missing module (`TurboModuleRegistry.get`, a platform check), as `google-auth.ts` does.
- **A native package costs its full size whether or not anything imports it.** Rive sat unimported in the binary at 5.9 MB. Remove the dependency when its last import goes.
- **JSON is source.** Metro inlines a required `.json` into the bytecode, so bulk data ships as an asset. The two raster Lottie flipbooks are the exception, on purpose: as `.lottie` assets they loaded off the main thread on iOS and decoded mid-animation, so the splash reveal, the update sheet and the contract step hitched. They stay JSON, and cost only the frames they play: `assets/lottie/contract.json` is the 61 frames of the ceremony the step shows, trimmed from `assets-src/lottie/contract.json` by `bun run build:lottie` (`verify:lottie` fails if it is stale, and skips on EAS, whose upload leaves the source out). Metro and `.easignore` both keep `assets-src/` out.
- **RevenueCat's browser SDK is kept out of the phone bundles** (-1.5 MB of bytecode). `react-native-purchases` requires `@revenuecat/purchases-js-hybrid-mappings` unconditionally but calls it only in browser mode (Expo Go, web), which a build of this app never enters, so `metro.config.js` resolves it to `metro/purchases-js-hybrid-mappings.js` on iOS and Android. The stub loads cleanly and throws a named error if anything calls it. After bumping `react-native-purchases`, check that it still requires only that package for browser mode, and run a sandbox purchase and restore.
- **Illustrations ship as WebP, photographs as JPEG** (-3.7 MB). Illustrations and cut-outs are lossless WebP, or q90+ with lossless alpha where that came out visibly identical, and decode no slower than the PNGs did. The onboarding photographs (`plan-*`, `sex-*`) stay baseline JPEG, re-encoded to luma SSIM >= 0.99: React Native hands a bundled image to UIImageView undecoded, so it is decoded on the main thread as its step arrives, and WebP decoded them 4-10x slower (up to 63 ms a photograph), a hitch on the first-run funnel. Photos keep their pixels, because the building step shows them full screen and the choice cards come close to it. `assets/icon.png` stays PNG because it is the app icon's source, and in-app uses take the 150 px `assets/icon-small.webp`. `update/mascot-handoff*.png` stays PNG: the native reload screen draws it and has to match the last JS frame.
- **A face the system has is not bundled.** SF Pro Rounded comes from iOS (see Typography): five `.otf` files, embedded twice, were 4.4 MB. Inter ships only the three weights the note sheet sets.
- **The app icon is as small as it gets without loss.** actool re-encodes the 1024 icon's pixels (1.4 MB), so recompressing the PNG changes nothing, and it is already opaque. Quantizing to 256 colours saves about 1 MB and bands the gradients visibly.
- **Watch each store build.** Compare `Payload/Walkito.app` and `main.jsbundle` with the previous IPA and look into anything that grew by more than 1-2 MB: 7 MB of Lottie frames once got in unnoticed.

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
- **Health Connect asks for four types only:** steps, exercise sessions, distance and sleep to read, exercise sessions to write. Google rejected the first Android release for asking for heart rate, resting heart rate, active energy and floors without a feature that uses them. `READ_TYPES` in `health.android.ts`, the `android.permissions` in app.json and the Play Console "Health apps" declaration (one justification per type) must list the same types. A new type is a new user-facing feature first.
- **Sign-in:** Apple on iOS, Google on Android (`signInWithPlatform`). Google needs `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID`; without it the button lets the user through anonymously.
- **Widget:** `features/home-widget/android` draws the same `DailyCheck` with `react-native-android-widget`. Its headless task is registered in the root `index.js` (the package `main`), before any screen mounts.
- **No Liquid Glass or real blur:** anything using `GlassView` must give itself a fill when `isLiquidGlassAvailable()` is false, and `ProgressiveBlur` falls back to a gradient.
- **Back button:** the program overlay handles it in `shared/lib/program` — session first, then the plan.

# Email

Personalised email, decided on the server from the user's own synced data. Supabase decides, Resend sends, React Email renders. One path, no marketing tool.

- **Where it lives.** `supabase/migrations/0009_email.sql` (tables, functions, the hourly `pg_cron` job), `supabase/functions/email-scheduler` (the run), `email-unsubscribe`, `revenuecat-webhook`, and `supabase/functions/_shared/email/` — the rules, the copy and the template, plain TypeScript that runs in Deno and in `bun test` alike. Tests: `tests/email-*.test.ts`.
- **The copy is all lowercase, in en, ru and es**, with a plain hyphen, never a long dash. `copy.ts` is typed so a language missing a line fails `tsc`, and `email-copy.test.ts` checks every email in every language for capitals, long dashes, diagnosis words, leftover placeholders, and pain figures in subjects (subjects show on lock screens; pain is only ever in a body, and only in `day10_keep`, `pain_up` and `weekly`). Russian gets whole-sentence plural forms, as in the app catalogue.
- **The rules** are in `rules.ts`, one pure function: one email per local day, one a week after day 14 (results and the summary excepted), each lifecycle email once (`email_log.dedupe_key` is unique), morning emails 08:00-09:00 local, a sync older than 24 h skips anything that assumes something was not done, a pain reading of 7+ lets only `pain_up` through, a push laid for the same intent that day skips the email, nothing after `winback_21`. The time zone and language come from the phone through `save_email_contact`.
- **What the app sends up for it.** `plan/sync.ts` stamps `profiles.last_synced_at`, `last_app_open_at` and the days the notification window has a session or retest push laid (`scheduledPushDates`) after every successful push. The offer page writes `app_events.paywall_viewed` with the store's own prices for the annual subscription (the discounted `offer` one and the standard one) and `plan: 'annual'`; the scheduler quotes prices only from a view marked that way (`paywallFrom` in `load.ts`), so views from the old one-time pass are never read as the annual price — the emails never print a price the store did not give. `link_revenuecat` maps the RevenueCat id to the Supabase user for the webhook; the RevenueCat id itself is untouched, because PostHog is keyed on it.
- **Buttons** are `https://walkito.site/open/{path}/?src=email&e={key}`. The app's `/open/[...path]` route (outside the root guards) records the click and routes: `today`, `today?minutes=3`, `plan`, `test` through `requestProgram` (the overlay lives inside the tabs), `progress`, `library/morning`, `paywall?offering=offer`, `settings`. `ios.associatedDomains` has `applinks:walkito.site` from 1.0.1 (build 25) on, and the site serves the matching `apple-app-site-association` (`HWGBXV8W4Z.com.walkito.app`, `/open/*`), so on those builds the phone opens the app straight from the button. Older builds, and a phone without the app, land on the site's `/open/` page, which hands the path to `walkito://`. Android App Links are not set up yet: they need `intentFilters` with `autoVerify` and an `assetlinks.json` carrying the Play signing key's SHA-256.
- **Attribution** is clicks and actions, not opens (Apple Mail opens everything). `email_link_opened` sets `clicked_at`; `attribute_email_actions()` (run hourly) sets `action_done_at` when the thing asked for happened within three days. `insights.email_metrics` is sent / clicked / action done per key.
- **Bounces and complaints** are read back from Resend by the scheduler (`GET /emails/{id}`), so no webhook secret is needed. **RevenueCat's webhook** is only a nudge: the function asks RevenueCat's API for the customer's entitlements and writes that.
- **`EMAIL_MODE`** on the function: `off`, `dry` (decide, send nothing), `test` (only `EMAIL_TEST_RECIPIENTS`), `live`. Sending needs `RESEND_API_KEY`. `EMAIL_POSTAL_ADDRESS` is optional and unset for now, so the footer has no address line; US anti-spam law wants one in the two offer emails, so set it once the company has an address. A dry run for one user at a chosen instant, with the HTML: POST `{ "dryRun": true, "userId": "…", "now": "…", "html": true }` with the cron secret.
- **Mail lives on walkito.site.** walkito.app has no MX record, which is why hello@walkito.app bounced; `SUPPORT_EMAIL`, the reply-to and the sender are hello@walkito.site (Hostinger mailbox).

# Paywalls: Superwall over our own

Superwall presents paywalls designed and A/B-tested in its dashboard; RevenueCat stays the store. `src/app/providers/superwall.tsx` (`PaywallRoot`, inside the root layout) wires it:

- **Purchases go through ours.** A Superwall paywall's purchase calls `purchases.buyProduct` (`entities/purchase`), so it gets the same `purchase_*` tracking (`offering: 'superwall'`), the same entitlement check and the same errors as our paywall. Restore calls `purchases.restore`. Superwall's subscription status is set from our `entitled()`, never inferred.
- **Our paywall is the fallback, always.** Screens call `usePaywall().register(placement)` from `@/shared/lib/paywall`; they never import the SDK. The offer page registers `paywall_first`, `paywall_comeback` (win-back, offer email) or `paywall_invite` 600 ms after its plans are on screen, and the expiry screen `paywall_expired` 600 ms after mount.
- **The first paywall is three steps** (`pages/offer`): how the plan starts (today's test, the first week, every Sunday, the first progress check on its date) and how a day works (`offer-intro.tsx`), then the plans under the gift mascot, "Start your plan today" and the app's `PlanChip`s. Only on a first full-price view, and once per phone (`model/intro.ts`); comeback and invite views open on the plans with their own headline. `paywall_step_viewed` counts each step. With no campaign for the placement, no network, no key for the platform or a binary without the native module, `register` does nothing and our screen is the paywall. Placement names are dashboard identifiers: renaming one detaches its campaign.
- **Identity and personalisation.** Identified as the RevenueCat app user id (`purchases.appUserId()`), the id PostHog is keyed on. Superwall attributes RevenueCat's server-side purchase events to a user only by that id, so any other id leaves purchases on our own paywall (the holdout) out of its results. `paywallPersonalisation` (`app/providers/superwall-personalisation.ts`) is sent as user attributes and merged into every placement's params, so paywall text can say `{{ params.first_name }}`, `goal_label` (the big goal), `focus_label` (its first step), `sport_label`, `days_per_week`, `minutes` and `progress_check_date` (a fortnight after today's first test). The plan is open-ended: never a length or an end date, and never the legacy block program (`PROGRAM_LENGTH`, `PLAN_BLOCKS`). The plan and the person's own words for what they want, never their body: `tests/paywall-personalisation.test.ts` fails if pain, side, age, weight or shoe size get in, or a goal that names a condition (pain-free, flat feet, back after injury, easier mornings). The privacy pages list exactly these fields under Superwall; a new field is a new line there.
- **Events.** Paywall open/close/decline, transaction steps and load failures go to PostHog as `superwall_event`.
- **Keys.** `SUPERWALL_KEYS` in `shared/config/superwall.ts`, both public (iOS app 57295, Android app 57297). No key for a platform means Superwall is not started there.
- **The dashboard.** Campaign "Walkito standard" holds `paywall_first` and `paywall_expired` and splits 50/50 between a holdout, which is our own three-step paywall, and "Walkito plan ready" (the personalised one, which reads the params above with plain fallbacks). "Walkito standard", a copy of our old paywall, stays in it at 0%. A second audience, "Other languages (our paywall)", catches everyone else at 100% holdout, so Superwall counts our paywall in every language and its Results compare the whole funnel. Campaign "Walkito offer" holds `paywall_comeback` and `paywall_invite`. Campaign "Walkito exit offer" runs on Superwall's standard `paywall_decline`: once per user, only after declining one of the two standard paywalls (never after a discounted one, so it cannot loop), 50% see "Walkito exit offer" at the offer price and 50% are held out. `transaction_abandon` would suit it too but needs Superwall's Scale plan. Paywall text uses `font-family: ui-rounded, system-ui` in custom CSS: Superwall's font library offers Apple's SF Pro Rounded files, which Apple licenses for mock-ups only. Both audiences require no active entitlement and `user.language == "en"`: Superwall's localization is a paid plan, so the dashboard paywalls are English and Russian and Spanish speakers fall through to our own, which is translated. The Android app (57297) mirrors all of it with its own copies: products `sub_annual_4499:annual:sw-auto`, `sub_weekly_799:weekly:sw-auto`, `sub_annual_offer:annual:sw-auto`, the same four paywalls (Android identifiers differ, and the exit offer's filter names the Android ones) and the same three campaigns. Change one platform, change the other. Paywall identifiers are fixed by Superwall and are what `superwall_event` reports as `paywall`.
- **Native module.** `expo-superwall` is required lazily behind `requireOptionalNativeModule('SuperwallExpo')`, so an older dev client keeps running. It changes the fingerprint: the first build with it is 1.0.2 (31). Deep links (dashboard paywall previews through `walkito://`) are handled by the provider itself.

# Access by account

A purchase belongs to RevenueCat's customer, which is the phone (the app never logs RevenueCat in as the account), so a promotional grant in RevenueCat reaches one device. `public.comp_access` (`0013_comp_access.sql`) grants access by account instead: `entities/purchase/model/comp.ts` reads the signed-in account's row at launch and after every sign-in, caches it, and `purchases.entitled()` is the purchase or that. Rows: the store review demo account (review@walkito.app, which Google rejected the build over when it met the paywall) and the founders. Grant with an insert, revoke with a delete.

# Home-screen widget

`features/home-widget`: one widget kind, `DailyCheck`, in two sizes. Small asks the morning check-in; its two cards are `Link`s that open Home on `?checkin=fine` or `?checkin=hurts`. `PainCheck` records "no pain" and says so, or opens the check-in sheet for the scale and the leg map. The widget records nothing itself. Medium shows the day's goal and the week. `importWidgetAnswers` only reads back answers from the first build, which recorded them in the widget.

- **Never put `null` in widget props or return it from a widget `onPress`.** Props are stored in UserDefaults, a JS `null` arrives as `NSNull`, and UserDefaults answers with `abort()`. Omit the key instead. `sync.ts` also strips nulls at the boundary.
- The layout itself is JavaScript and ships over the air: the app registers it at launch and reloads the widget. Adding a widget, a size, or anything else in the `app.json` widget config changes the extension and needs `expo prebuild` and a native build.
- `frame` with `width` or `height` is SwiftUI's fixed frame and ignores `maxWidth`/`maxHeight`. Anything that should fill takes only the `max*` bounds. Don't put padding or a background on a widget `Text`: expo-widgets applies a Text's modifiers twice.

