# Shotik analytics for React Native and Expo

See how people really use your app (what they tap, where they get stuck, which screens they come back to) and get facts with a proposed fix in Shotik → Insights. There's no native code: it works in any Expo dev client, and it adds about 16 KB of minified JS.

```tsx
import { ShotikAnalytics, ShotikAnalyticsRoot, ShotikMask, useShotikExpoRouter } from '@shotik/support-react-native/analytics'

ShotikAnalytics.init({ appKey: 'spk_…', serverUrl: 'https://…' })   // the same key as Support
ShotikAnalytics.trackRevenueCat(Purchases)                           // optional: purchase start / done / cancel / fail

export default function RootLayout() {
  useShotikExpoRouter()                                              // React Navigation: ShotikAnalytics.trackNavigation(ref)
  return <ShotikAnalyticsRoot>{/* your providers and <Stack /> */}</ShotikAnalyticsRoot>
}

ShotikAnalytics.track('walk_started', { minutes: 10 })              // your own events (no personal data)
ShotikAnalytics.identify(user.id)                                     // after sign-in; ShotikAnalytics.reset() on sign-out
```

**What it captures on its own:** sessions, app open and close, screens (route patterns, never params), time on screen and scroll depth, taps with the element and position (for heatmaps), rage taps and taps that do nothing, JS errors and crashes, slow screens and JS stalls, purchases (RevenueCat) and, for 20% of sessions, wireframes of each screen.

**Privacy by default:**
- It never reads text input values.
- Tap labels keep only short control text, with digits and emails masked.
- Wireframes draw text as bars with no characters.
- `<ShotikMask>` hides a view from both.
- `init({ consent: 'pending' })` keeps events on the device until `ShotikAnalytics.setConsent('granted')`. `optOut()` drops them.
- The server deletes an install's data on `POST /analytics/v1/forget`.

**Footprint:** a single capture-phase touch listener, a 500 ms stall timer, and batched uploads (up to 300 events every 10 s and on background). Batches are dictionary-packed, and the queue persists offline. Nothing runs on the touch path except an O(depth) walk up the tree.

**For agents:** recipe.json in this folder is the machine-readable integration that Shotik's coding chats follow.
