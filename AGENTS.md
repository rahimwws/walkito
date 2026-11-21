# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v58.0.0/ before writing any code.

# Architecture: Feature-Sliced Design

Read [`src/README.md`](src/README.md) before adding files. The rules that bite most often:

- **`/app` is routing only.** Route files are thin re-exports (`export { HomePage as default } from '@/pages/home';`). Implementation goes in `src/`.
- **Never create `src/app` routes.** Expo Router prefers `src/app` over `/app`; `app.json` pins `extra.router.root` to `"app"` to stop that. Don't remove the key.
- **Import downward only:** `app` → `pages` → `widgets` → `features` → `entities` → `shared`. Never sideways between slices on the same layer.
- **Import through a slice's public API** (`@/shared/ui/progress-card`), never a file inside it.
- Aliases: `@/*` → `src/*`, `@assets/*` → `assets/*`.

Put new code in the page that uses it. Move it down a layer only when a second page needs it.

# Typography: the system face (SF Pro, Roboto on Android)

All text is set in the system face: SF Pro on iOS (`fontFamily: 'System'` with a `fontWeight`), Roboto on Android (`'sans-serif'`). Nothing is bundled and nothing loads. Metro picks `src/shared/config/font-faces.ts` (iOS) or `font-faces.android.ts`. Sizes follow `type` in `src/shared/config/tokens.ts`: body 19, never below 17 for anything a person has to read, weights Regular and up (redesign spec §3.2).

**Every text style takes its face and size from `fonts.*`. Never set `fontFamily`, `fontWeight` or `fontSize` by hand:**

```tsx
import { fonts } from '@/shared/config';

const styles = StyleSheet.create({
  title: { ...fonts.bold(28, -0.4), textAlign: 'center' }, // size, letterSpacing
  body: fonts.regular(19),
});

<Text style={[fonts.bold(size), { color }]}>…</Text>; // a computed size
```

The second argument is the letterSpacing the design asks for; leave it out for the system's own tracking. `faces.*` is the face alone, for a nested span that only changes the weight.

- **SwiftUI text** (`AnimatedNumber` on iOS, the home-screen widget, the Live Activity) uses `font({ size, weight })`, the same system face.

# Color

The redesign's values live in `src/shared/config/tokens.ts` (`colors`, `type`, `space`, `radius`, `target`): background `#F5F5F7`, opaque white cards, black (`ink`) primary button, violet accent `#6D28D9` (the old `#8B5CF6` fails contrast and never carries text). `palette`, `meterColors` and `PRIMARY` read their light half from it.

Take colors from `@/shared/config` — `palette` for surfaces, `meterColors` for anything showing a number or a meter, `accents` for tinting a metric by category. Screens must not set their own `backgroundColor`: the navigation theme paints every screen container, which is what keeps tab-switch fades flash-free.

Colour never judges a value. `meterColors` has no "bad" entry, so nothing can render red; values are always `ink`, `positive` marks only an improving delta. `accents` say *which* metric a bar belongs to, not how good it is — a bar keeps its accent at 3% and at 99%.

# Appearance

**Import `useColorScheme` from `@/shared/lib/theme`, never from `react-native`.**

The app is **light only** for v1.1.0 (`LIGHT_ONLY` in `src/shared/lib/theme/theme-store.ts`, `userInterfaceStyle: "light"` in app.json); the dark halves of the palettes are kept for a later dark mode. The appearance override (System / Light / Dark) is still stored, and two things have to happen on a change, which is why the plain RN hook is not enough:

- `Appearance.setColorScheme()` repaints native views — liquid glass and the SwiftUI host inside `AnimatedNumber` are drawn by the system and read the trait collection, not our JS state.
- Our own store notifies subscribers. `Appearance.setColorScheme()` updates RN's snapshot but **never emits a `change` event** — that only fires from the native `appearanceChanged` listener. Since RN's `useColorScheme` is a `useSyncExternalStore` over that emitter, using it directly leaves JS-driven colours stale until an unrelated render happens along.

The hook in `@/shared/lib/theme` subscribes to both and returns a narrowed `'light' | 'dark'`.

# Icons: Fluent Emoji for content, Hugeicons for chrome

Two sets, one job each.

**Content: Microsoft Fluent Emoji, Flat style** (MIT), app-wide through `@/shared/ui/fluent-icon`:

```tsx
import { FluentIcon } from '@/shared/ui/fluent-icon';

<FluentIcon name="strength" size={24} />
```

Content is what a row, card, tile or answer is about: a task's kind of work, a routine card, a metric on a stat tile, an onboarding answer, the streak's flame. The drawings are SVG strings in `src/shared/ui/fluent-icon/icons.ts`, drawn by react-native-svg's `SvgXml` in their own colours. They are never tinted; a selected surface shows the selection. They are drawings, not emoji characters, so never type an emoji into text. Each one uses only plain shapes and fills, and none has an outline that disappears on the dark card. The footprints, stethoscope, magnifying glass and mobile phone were left out for that reason: they are drawn in navy or dark purple. To add one, take its `Flat/` SVG from github.com/microsoft/fluentui-emoji and round its coordinates to two decimals; an alias to a drawing already there costs no bytes. The names the screens share: `strength`, `stretch`, `balance`, `test`, `rest`, `relief`, `morning`, `timer`, `calendar`, `fire`, `trophy`, `sparkles`, `foot`, `check`, `gift`, `target`, `run`, `shoe`, `heart`, `book`, `bolt`, `sun`, `moon`, `seedling`. `FeatureCard` and `StatTile` take one as `emoji`.

**UI chrome: Hugeicons Free**, `@hugeicons/core-free-icons` (MIT, ~5,400 icons), rendered by `@hugeicons/react-native`. This covers back, close, chevrons, the tab bar, the dock, profile and settings, transport controls, and states such as a lock or a tick. Never emoji characters, text glyphs, or another icon library.

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

The app ships in English, Russian, Spanish, Portuguese (Brazil), French, German and Italian. **No user-facing text may be written as a literal in a component.** Take it from the catalogue:

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
| `pt` | `one`, `other` | Brazilian. `one` only at 1: "0 dias" (departs from CLDR's `pt`, which puts 0 in `one`) |
| `fr` | `one`, `other` | `one` covers 0 and 1: "0 jour" |
| `de` | `one`, `other` | |
| `it` | `one`, `other` | |

## Adding a string

1. Add the key to `src/shared/lib/i18n/catalogue/en/<domain>.ts`. English is the source of truth; every other catalogue is typed *from* it.
2. `tsc` now fails for every other language until it has it. That is the design.
3. Prefix the key with its domain (`home.`, `onboarding.`, `offer.`…) so domains cannot collide — the per-language `index.ts` merges them with a spread that preserves literal types. **Do not annotate a domain file's type**, or the placeholder inference widens to `string` and silently stops checking parameters.
4. `bun test src/shared/lib/i18n/` asserts placeholder parity, completeness, and that no plural entry was flattened to a single string.

## Native strings

What iOS and Android show before any JS runs is translated in `locales/<lang>.json` (wired through `expo.locales` in app.json): the app name, the HealthKit permission texts, the static quick action ("SOMETHING OFF?") and the Android widget description. `plugins/with-widget-locales.js` reuses that Android line as the iOS widget-gallery description, written into the widget extension's own `Localizable.strings`. A static quick action is looked up in `InfoPlist.strings` by its English title, and Expo writes keys unquoted, so those keys carry their own quotes in the JSON. `expo-localization`'s `supportedLocales` lists the seven languages, which turns on the per-app language setting in iOS and Android Settings. All of it is native: it lands with the next store build, never over the air.

A new language is: the catalogue folder, `LANGUAGES`, the plural rule, `PluralForms`, the brief tables, the tempo clips, the email copy, the `email_contacts.locale` check and `save_email_contact` (a migration, as `0015_more_languages.sql` did), the referral push, `locales/<lang>.json`, `supportedLocales`, and the site's unsubscribe page.

Language names in the picker are endonyms — «Русский», not «Russian» — and are deliberately the one set of strings never translated: the control is read by someone who cannot yet read the language the app is in.

# Analytics: PostHog + RevenueCat

Product analytics go through `@/shared/lib/analytics`, never the PostHog SDK directly:

```tsx
import { track } from '@/shared/lib/analytics';

track('session_completed', { day, block, kind, checkpoint });
```

- **Nothing is sent until the app has been in front once in that run of the process** (`held.ts`, `seen` in `analytics.ts`). iOS starts the app in the background (HealthKit's hourly delivery, the on-feet task) and the whole tree mounts as on any launch; PostHog captures "Application Opened" the moment its client is made, and every screen's "viewed" effect runs. So the client is not made and events are kept until the app is first `active`, then sent in order; a process that is never brought forward sends nothing. Anything else that counts an open (`useAppUsage`, `last_app_open_at`, the notification scheduler's `onAppOpen`, the review count) checks `AppState.currentState !== 'background'` for the same reason: mount is not an open. The plan sync (`usePlanSync`) waits the same way: no restore and no push on a launch nobody has seen.
- **Every event is declared in `src/shared/lib/analytics/events.ts`.** A new event is a new entry there first; a misspelt name is a `tsc` error rather than a second, empty series in a funnel.
- **Never send health data.** No pain scores, pain zones, retest measurements, HealthKit readings, age, weight or shoe size. Send that something happened (`checkin_logged`), not what was reported. Apple rejects apps that pass health data to analytics.
- **Session replay is off** (`enableSessionReplay: false` in `shared/lib/analytics`; see the comment there for why). The screens that show pain, retest results, body answers or Apple Health numbers are still wrapped in `REPLAY_MASK` / `<ReplayMask>` from `@/shared/ui/replay-mask`, so a new screen of that kind gets one too. Masks cover only the views wrapped, and the privacy policy must mention recordings before replay is turned on.
- **Revenue comes from RevenueCat, not from the client.** RevenueCat's PostHog integration sends purchases, renewals, refunds and cancellations server-side. `purchase_completed` is a funnel step; never sum it into revenue.
- **Identity:** PostHog is identified as the RevenueCat app user id, and RevenueCat gets `$posthogUserId` — see `linkAnalytics` in `entities/purchase/model/revenuecat.ts`. Keep the two ids the same or the funnel breaks at the paywall.
- **Onboarding step keys and `AcquisitionSource` values are analytics identifiers.** Renaming one splits every chart at the day it shipped.
- **A team phone on a store build is marked `is_internal`** by opening `walkito://open/internal` once on it (`…/internal/off` takes it back; `markInternal`): on every event and on the person, for the PostHog test-account filter. A TestFlight or App Store install is a production build like a customer's, so `app_variant` cannot tell them apart.
- Dev builds are tagged `app_variant = development`, which the PostHog project treats as a test account. Dashboards: PostHog project 626472 (org "Walkito").

# Attribution: AppsFlyer

Which ad, campaign or link brought an install, and what it went on to pay. Through `@/shared/lib/appsflyer`, never the SDK directly. Testing it: `TESTING.md`.

- **Production builds only.** AppsFlyer knows `com.walkito.app` (iOS `id6813076846`, Android) and nothing else; the `.dev` / `.preview` builds never load the SDK. TestFlight and the Play internal track are production builds, so they do run it. The dev key comes from `EXPO_PUBLIC_APPSFLYER_DEV_KEY` in the EAS `production` environment, never the source (the repository is public, and AppsFlyer's server-to-server API accepts the same key); the OneLink domain is in `shared/config/appsflyer.ts`.
- **ATT on iOS, asked once; no advertising id on Android.** The onboarding asks App Tracking Transparency with the system sheet alone, after the last screen of the plan, on the way to the paywall (`requestTracking`, `@/shared/lib/tracking`): never a screen of ours in front of it (App Review rejected 1.0 for a "Continue"-only screen before HealthKit), nothing offered for the answer. Until it is answered AppsFlyer does not start and sends nothing, with no time limit; a launch closed before the answer holds again on the next one (`holdForTracking` / `trackingGate`): v7 has no wait-for-ATT option and its docs say to ask before `init()`. "Allow" hands RevenueCat the IDFA (`collectAdIdentifiers`); `att_answered { granted }` is tracked. `NSUserTrackingUsageDescription` is in every `locales/<lang>.json` and the `expo-tracking-transparency` plugin, and `scripts/verify-config` fails without them. App Store Connect → App Privacy must declare the device id as used for tracking. Without permission, iOS attributes through Apple Ads (AdServices) and SKAdNetwork (`NSAdvertisingAttributionReportEndpoint`) as before; Android through the Play Install Referrer, and `plugins/with-appsflyer-android.js` removes the SDK's `AD_ID` permission, because the Play declaration says the app uses no advertising id. Strict mode is off; `app.config.ts` says why.
- **Revenue comes from RevenueCat's server, as in PostHog.** RevenueCat sends AppsFlyer the `rc_*` purchase, renewal and refund events, matched by the `$appsflyerId` attribute that `linkAppsFlyer` (`entities/purchase/model/revenuecat.ts`) sets after every store start, with the device ids from `collectDeviceIdentifiers`. AppsFlyer files the install under the RevenueCat app user id (`setCustomerUserId`), the id PostHog and Superwall use too.
- **On-device events, on both platforms:** `af_start_trial` / `af_subscribe` (`af_purchase` for lifetime) with the product and plan, logged when a purchase grants the entitlement (our paywall and Superwall's, Google Play base plans included), never on a restore. On iOS they drive SKAdNetwork conversion values; on Android they are what the networks optimise on. Never `af_revenue` or `af_currency` on them: the money already arrives from RevenueCat, and would count twice. Never health data, by the analytics rule.
- **The campaign goes where revenue is counted.** A non-organic first launch writes RevenueCat's `$mediaSource`, `$campaign`, `$adGroup`, `$ad`, `$keyword`, `$creative` and the PostHog person's `af_media_source` / `af_campaign` (`campaignAttributes`, tested). It outranks the onboarding's "where did you hear about us", which writes `$mediaSource` only for an organic install; see `setAcquisitionSource` for the order.
- **OneLink** (`https://walkito.onelink.me/2L97/…`, in `ios.associatedDomains` and an `autoVerify` intent filter). The SDK resolves direct and deferred links to `deep_link_value`; `deepLinkPath` (`pages/open`) makes it an `/open/…` path: `paywall`, `exercise_<id>` (the plan, with that exercise's card), `guide_<slug>` (`walkito.site/<slug>/` in the browser), the email paths as they are, anything else Home. `+native-intent` never routes the raw OneLink URL. Until the tabs are reachable (onboarding, paywall, setup) a OneLink is kept (`savePendingLink`) and opened once they are; an email link tapped before the onboarding is done is kept the same way.
- **SKAdNetwork IDs:** `ios.infoPlist.SKAdNetworkItems` is every Apple ad network id in AppsFlyer's SKAN partners CSV (support article 360012640377), kept in `plugins/skadnetwork-ids.json` with the date it was fetched and merged in by `app.config.ts`; `scripts/verify-config` fails if any is missing. A network missing from the list gets no postback. Refetch the CSV before a store build when a new network is added.
- **It is native.** The SDK, the plugins and the domains change the fingerprint: they ship in a store build, never over the air. If the app moves to another Apple team, the OneLink template's Team ID moves with it.

# Performance: EAS Insights + Observe

- `expo-insights` has no API: linked into the binary, it reports cold starts to EAS → Insights → App usage.
- `expo-observe` goes through `@/shared/lib/observe`, never the SDK directly. It is configured once in `root-layout.tsx` with the expo-router integration (per-route `cold_ttr` / `warm_ttr` / `tti`), and `track()` mirrors every analytics event into it. Both are lazily required, so a dev client built before they were linked just drops metrics.
- **No endless animations on mounted-but-hidden screens.** The program overlay and all tabs stay mounted. A `withRepeat` there runs on the UI thread forever: the dots on every `DayLink` once added up to several hundred and heated the phone. Gate looping motion on `useIsFocused()` or on a single element, the way `DayLink.animated`, `PathNode` and `Glow paused` do.

# App size

1.0.1 (26) installed at 102.6 MB, about 45 MB to download. Install size only shrinks through a store build; OTA cannot touch it. The levers, and what keeps them working:

- **Embedded frameworks are stripped** in Release device builds (-7.2 MB): `plugins/strip-embedded-frameworks.sh`, run by a phase that `plugins/with-strip-frameworks.js` puts after `[CP] Embed Pods Frameworks`. It uses `strip -x -S` only where the build holds a dSYM with the framework's UUID (the Expo frameworks) and `strip -S` elsewhere: React, ReactNativeDependencies and hermesvm ship without dSYMs, so their local symbols are the only function names a crash has. Put React Native's published dSYMs in the build and they move to `-x -S` by themselves (about 5.9 MB more). The plugin stays **first** in app.json, since Xcode mods run in reverse order and it has to run last. The Xcode log of the build prints a before/after line per framework.
- **Hermes debug info goes to a source map, not the app** (-1.5 to -1.8 MB): `plugins/with-hermes-sourcemap.js` sets `SOURCEMAP_FILE` in the bundle phase. Production sets `uploadSourceMaps`, so EAS Observe symbolicates reported errors, and keeps the map as a build artifact (`ios/build/sourcemaps/main.jsbundle.map`). For any other JS stack from a store build, take that build's map (kept next to its `.ipa` from `.builds/`, see Builds and releases; builds made on EAS before that have it on their EAS page) and run `npx metro-symbolicate main.jsbundle.map < stack.txt`; Hermes frames read `address at main.jsbundle:1:<offset>`. A map fits one build only, and a stack from an OTA update needs that update's map.
- **Android-only native modules stay out of iOS** via `expo.autolinking.ios.exclude` in package.json (Google Sign-In, -0.58 MB). It drops the RN pod and the Expo adapter together; `react-native.config.js` would only drop the first. JS must guard the missing module (`TurboModuleRegistry.get`, a platform check), as `google-auth.ts` does.
- **A native package costs its full size whether or not anything imports it.** Rive sat unimported in the binary at 5.9 MB. Remove the dependency when its last import goes.
- **JSON is source.** Metro inlines a required `.json` into the bytecode, so bulk data ships as an asset. The two raster Lottie flipbooks are the exception, on purpose: as `.lottie` assets they loaded off the main thread on iOS and decoded mid-animation, so the splash reveal, the update sheet and the contract step hitched. They stay JSON, and cost only the frames they play: `assets/lottie/contract.json` is the 61 frames of the ceremony the step shows, trimmed from `assets-src/lottie/contract.json` by `bun run build:lottie` (`verify:lottie` fails if it is stale, and skips on EAS, whose upload leaves the source out). Metro and `.easignore` both keep `assets-src/` out.
- **RevenueCat's browser SDK is kept out of the phone bundles** (-1.5 MB of bytecode). `react-native-purchases` requires `@revenuecat/purchases-js-hybrid-mappings` unconditionally but calls it only in browser mode (Expo Go, web), which a build of this app never enters, so `metro.config.js` resolves it to `metro/purchases-js-hybrid-mappings.js` on iOS and Android. The stub loads cleanly and throws a named error if anything calls it. After bumping `react-native-purchases`, check that it still requires only that package for browser mode, and run a sandbox purchase and restore.
- **Illustrations ship as WebP, photographs as JPEG** (-3.7 MB). Illustrations and cut-outs are lossless WebP, or q90+ with lossless alpha where that came out visibly identical, and decode no slower than the PNGs did. A photograph shown as its step arrives stays baseline JPEG, re-encoded to luma SSIM >= 0.99: React Native hands a bundled image to UIImageView undecoded, so it is decoded on the main thread as the step arrives, and WebP decoded the onboarding photographs 4-10x slower (up to 63 ms each), a hitch on the first-run funnel. The onboarding has none left: the building step's full-screen photograph (`plan-female`, 0.5 MB) gave way to the mascot, which is vector. The foot-check pictures (`toe-lift`, `bunion`) are cut-outs and follow the WebP rule, with their alpha faded where the foot leaves the frame. `assets/icon.png` stays PNG because it is the app icon's source, and in-app uses take the 150 px `assets/icon-small.webp`. `update/mascot-handoff*.png` stays PNG: the native reload screen draws it and has to match the last JS frame.
- **A face the system has is not bundled.** SF Pro Rounded comes from iOS (see Typography): five `.otf` files, embedded twice, were 4.4 MB. Inter ships only the three weights the note sheet sets.
- **The app icon is as small as it gets without loss.** actool re-encodes the 1024 icon's pixels (1.4 MB), so recompressing the PNG changes nothing, and it is already opaque. Quantizing to 256 colours saves about 1 MB and bands the gradients visibly.
- **Watch each store build.** Compare `Payload/Walkito.app` and `main.jsbundle` with the previous IPA and look into anything that grew by more than 1-2 MB: 7 MB of Lottie frames once got in unnoticed.

# Builds and releases: on this Mac, never on EAS's builders

**Every store build (App Store, TestFlight, Google Play) is built on the Mac with `eas build --local` and uploaded from the Mac.** EAS's cloud builders and EAS Submit are not used. EAS is kept for three things only: over-the-air updates (`eas update`), the signing credentials and the `production` environment variables a local build downloads, and the remote build number (`appVersionSource: remote`, `autoIncrement`).

- **Never run** `eas build` without `--local`, `eas submit` or `--auto-submit`. The EAS workflow `release.yml` publishes updates only and stops when a build is needed; no workflow builds or submits. If a task seems to need a cloud build, stop and ask.
- **Update or build?** `bun run ship` answers it by the fingerprint (`scripts/can-update.mjs`): a JS-only change goes out as an EAS Update; a native change builds locally into `.builds/` and prints the upload command. `bun run ship --dry-run` only says which.
- **The fingerprint leaves out package.json scripts and .gitignore** (`fingerprint.config.js`): neither reaches the binary, and hashed they turned every script edit into a store build. Changing that file is itself a native change.

**OTA (JS and assets only, fingerprint unchanged):**

```bash
bun run ship                                   # checks, decides, publishes the update
eas update --channel production --platform ios --message "…"     # by hand
eas update --channel production --platform android --message "…"
eas update:rollback                            # undo
```

**iOS → TestFlight / App Store:**

```bash
bun run build:ios      # .builds/build-<time>.ipa (eas build --local, profile production)
bun run submit:ios     # xcrun altool uploads the newest .ipa to App Store Connect
```

Then in App Store Connect: TestFlight, or attach the build to a version and send it to review.

**Android → Google Play:**

```bash
bun run build:android                  # .builds/build-<time>.aab, with JDK 17
bun run submit:android                 # fastlane supply → internal track
TRACK=production bun run submit:android
```

Managed publishing is off (seen 2026-10-29), so a production release goes live by itself once Google approves it. Turn it on in Publishing overview to choose the day.

**What a local build needs:**

- Xcode, CocoaPods and fastlane (`brew install fastlane`; eas-cli calls it for the iOS archive), the Android SDK and NDK, and **JDK 17**: the Mac's default Java is 27, which Gradle for React Native does not take, so `build:android` sets `JAVA_HOME` itself.
- `eas login` (or `EXPO_TOKEN`). The build downloads the `production` environment from EAS; none of its variables is "Secret", so nothing has to be copied by hand. A Secret one would not come down and would have to be exported locally.
- `APP_VARIANT=production` set before the CLI reads `app.config.ts` (the scripts do), or EAS resolves the `.dev` app.
- A committed tree: `ship` refuses a dirty one, and a store build that matches no commit cannot be reproduced.
- `~/.walkito/release.env`, outside the repository, for the uploads: `ASC_KEY_ID`, `ASC_ISSUER_ID` (an App Store Connect API key with the App Manager role; `altool` reads `AuthKey_<ASC_KEY_ID>.p8` from `~/.appstoreconnect/private_keys/`) and `PLAY_JSON_KEY` (path to a JSON key of the `eas-submit@walkito.iam.gserviceaccount.com` service account). The keys EAS holds cannot be downloaded, so these are new keys made for the Mac. Never put one in the repository.

**Source maps.** The production profile's `uploadSourceMaps` and `buildArtifactPaths` were made for the cloud. On a local build the map is written by `plugins/with-hermes-sourcemap.js` inside the build's working copy; keep `main.jsbundle.map` from `.builds/` (or build with `EAS_LOCAL_BUILD_SKIP_CLEANUP=1` and take it from `ios/build/sourcemaps/`) next to the `.ipa`, and check on the first local build whether EAS Observe still symbolicates its errors.

# Updates

`features/app-update`, mounted once as `<AppUpdateHost>` in the root layout after fonts load. It checks on launch and on foreground (at most every 30 min, after onboarding, never in `__DEV__`), but **offers only once Home is theirs** (`canOffer`: bought, past the setup, the "Day 1" card and the tour, no offer wall; the same condition as the third-open review prompt), and **not before a day after the setup** (`offerAllowedFrom`, from `session/setup-finished-at`, which `finishSetup` writes; an install that finished it before 1.0.9 has no stamp and is not held). The first day is the purchase, the setup and the first run, and a restart on top of it is one ask too many. Builds before 1.0.9 offer straight after the tour. Never on the paywall, the offer wall or the setup: "update first" in front of somebody who has not bought yet is a reason to leave. Until then an update is downloaded silently and launches at the next cold start. A newer App Store version (iTunes lookup, production builds only) comes first, including over an update the native launch check already downloaded: that one waits for the session's first store lookup. "Later" snoozes an offer for 24 h.

- **Download first, offer after.** An EAS Update is fetched silently (`fetchUpdateAsync`), and one the native launch check already downloaded is picked up through `useUpdates().isUpdatePending`. The sheet only appears once the bytes are on the phone, so "Update now" is a restart and nothing else. Silent failures retry on the next check. The ready copy says "Later" is harmless because it is: expo-updates launches the newest download on the next cold start.
- **The sheet** has the mascot's Lottie (the one the onboarding used to play; it now draws the traced rigs) standing on the card. It rises only after the Lottie has decoded, and nothing on it can be tapped until it does. The Lottie is unmounted with the sheet, so nothing loops while hidden; with Reduce Motion it is never mounted and the still stands in. Tapping outside is "Later", but the card and the mascot absorb taps. "Later" stays available during a retried download and goes away only once the restart has started. The store variant is the same sheet with an App Store button.
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
- **Anything on the first screen that must not start unseen waits for `useSplashRevealed()`** (from `shared/ui/splash`, true once the overlay is gone, with a fallback so it never waits forever). A sheet opened at mount is presented above the root view and so above the splash, which then plays behind it; a greeting that types itself from mount is mostly typed before it is uncovered. Not wired yet: the welcome greeting (`IntroStep`) and the widget's "It hurts" sheet (`PainCheck`, `?checkin=hurts`) should hold on it# iOS 27: the scene life cycle

An app built with the iOS 27 SDK (Xcode 27) has to adopt the scene life cycle, and SDK 58's template does: `SceneDelegate.swift` (an `ExpoAppSceneDelegate`) creates the window and starts React Native, forwards URLs, user activities and cold-start quick actions to the app delegate, and AppDelegate only makes the factory.

- **AppsFlyer:** the template's AppDelegate has no open-URL or user-activity override, so react-native-appsflyer's plugin finds nowhere to write. `plugins/with-appsflyer-scene.js` adds both overrides with AppsFlyer's calls; Expo's forwarder reaches them for warm and cold links.
- **Xcode 27.0 vs iOS 27.1 APIs:** `expo-dev-launcher` guarded `axisBehavior` (27.1) by compiler version, which Xcode 27.0's Swift 6.4 passes without the 27.1 SDK. `patches/expo-dev-launcher@*.patch` guards it by SDK, as expo-dev-menu does. Drop the patch when Expo fixes it.

# Navigation: native tabs

Four tabs, `expo-router/native-tabs` (`src/app/layouts/tabs-layout.tsx`): Today (`index`), Plan (`plan`), Exercises (`exercises`), Progress. The bar is the system's: Liquid Glass on iOS 26+, solid elsewhere. Labels always visible, `minimizeBehavior="never"`. Asking for the plan (`useProgram().open()`) switches to the Plan tab; the bar is hidden while a session fills it.

**Glass only on the navigation layer** (spec §4). Use `@/shared/ui/glass`: `useNavGlass()` (iOS 26+, glass API present, Reduce Transparency off), `NavGlass` (solid 96% white + hairline otherwise), `StartButton` (SwiftUI `glassProminent`, the floating Start on Today and Session detail only). Cards and lists are always opaque.

.