# Testing

Checks that need a real device and a dashboard, not `bun test`.

## AppsFlyer

AppsFlyer runs in **production builds only** (`APP_VARIANT=production`): TestFlight and the Play internal track qualify, a dev client or a preview build sends nothing. Everything below is on one of those.

### The SDK is running and linked to RevenueCat

1. Install the build and open it once. Nothing to tap: the SDK starts with the app.
2. RevenueCat → Customers → the customer for this device (search by its app user id; the PostHog person for the device has the same id as its distinct id). Under **Attributes** there must be:
   - `$appsflyerId` — without it RevenueCat cannot send AppsFlyer any revenue;
   - `$idfv` on iOS (and the other device ids `collectDeviceIdentifiers` adds).
3. If `$appsflyerId` is missing: the build is not a production one, or AppsFlyer did not answer within a few seconds of launch. Open the app again; it links on every launch.

### SDK Integration Tests

1. AppsFlyer → the app (iOS `id6813076846` or Android `com.walkito.app`) → **SDK Integration Tests**.
2. Register the test device. On iOS use the **IDFV** (the `$idfv` attribute from step 2 above: the app never asks to track, so there is no IDFA). On Android there is no advertising id either (the `AD_ID` permission is removed), so use the device's Android ID.
3. Run the **non-organic install** test: delete the app, open the test link the dashboard gives, install, open. The dashboard should show the install as non-organic, and the RevenueCat customer should then carry `$mediaSource` and `$campaign` from the test link (organic installs keep the onboarding survey's answer instead).
4. Buy a subscription with a sandbox account. The test should show `af_subscribe` (or `af_start_trial`) with `af_content_id` and `plan`, and **no** `af_revenue`: revenue reaches AppsFlyer from RevenueCat's server as `rc_initial_purchase_event`, a few minutes later.

### OneLink

1. With the app installed, open **https://walkito.onelink.me/2L97/gicuz9ys** from Notes, Messages or Mail (not typed into Safari's address bar: iOS never opens an app from a URL typed there). It must open the app, not the browser.
2. Each target, by adding `deep_link_value` to the link:
   - `?deep_link_value=paywall` → the paywall (Home for a subscriber);
   - `?deep_link_value=exercise_big_toe_lift` → the plan, with that exercise's card;
   - `?deep_link_value=guide_support` → `walkito.site/support/` in the browser;
   - anything else → Home.
3. From the background as well as from a cold start: open a link, switch away, open another.
4. A fresh install from a link (deferred): the onboarding runs in full, and the link opens once the app proper is reached, after the paywall and setup.
5. Android: `adb shell pm get-app-links com.walkito.app` should list `walkito.onelink.me` as `verified`. If it is not, the OneLink template's Android settings need the SHA-256 of the Play app-signing key.
