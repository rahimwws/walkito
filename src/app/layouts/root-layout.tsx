import { useFonts } from 'expo-font';
import { useEffect, type ComponentType, type ReactNode } from 'react';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import {
  NavThemeProvider,
  useOfferNotifications,
  usePendingOfferPresenter,
  useHealthPipeline,
  useNotificationScheduler,
  usePlanGoals,
  usePlanSync,
  useAppUsage,
  useReviewAtWin,
  useProgramClock,
  useClipPrefetch,
  useLiveActivityCleanup,
  usePurchases,
  useScreenTracking,
  useReferralSync,
  useQuickActions,
} from '@/app/providers';
import { AppUpdateHost, updateRestartHoldMs } from '@/features/app-update';
import { useHomeWidget } from '@/features/home-widget';
import { useBrowsingLapsed, useEntitled, useProgramLapsed } from '@/entities/purchase';
import { useOnboarded } from '@/entities/session';
import { fontAssets } from '@/shared/config';
import { configureObserve, markInteractive } from '@/shared/lib/observe';
// Imported for its module-scope side effect as much as anything: reading the
// stored preference applies the saved appearance before the first render.
import '@/shared/lib/theme';
import { IntroRevealProvider, SplashReveal } from '@/shared/ui/splash';

/**
 * The app shell: fonts, theme, gesture root, routes.
 *
 * The launch is one continuous shot: the native splash (the mascot in a
 * 200 pt square on the background colour), then `SplashReveal`'s identical
 * first frame, then the app opening through the mascot as he leaps at the
 * screen. The same picture ends an over-the-air update's restart, so a reload
 * lands in the same place a cold start does.
 *
 * The splash before it was removed for delaying the first screen: a Lottie
 * that had to finish before anything else could show, which pushed the welcome
 * screen's own introduction a second and a half back. This one is not that.
 * The navigator mounts underneath it the moment the fonts resolve, exactly as
 * it would with no splash at all; the overlay only covers it, and the reveal
 * is the first screen appearing. It adds under 0.9 s after the fonts (two
 * frames for the first screen to lay out, then the 0.74 s reveal), never waits
 * on anything slow, and starts 2.5 s after launch at the latest whatever it is
 * still waiting for (`REVEAL_BY_MS` in `shared/ui/splash`), so it cannot shut
 * the app away. With Reduce Motion it is a quarter-second fade.
 *
 * `IntroRevealProvider` stays pinned true. The staggered reveal it drives was
 * choreographed for the old splash's fade, and under a zoom that already
 * brings the whole screen in it would only delay content. Held at true, every
 * `IntroReveal` renders its children immediately and animates nothing.
 *
 * Add new top-level routes as `Stack.Screen` entries here (modals, full-screen
 * flows). Tabs live one level down, in `tabs-layout`.
 */

// Before any screen mounts: the router integration has to be listening when
// the first route is focused.
configureObserve();

/**
 * `ObserveRoot` if the binary has it, a pass-through if it does not.
 *
 * Required lazily for the same reason `shared/lib/observe` is: a dev client
 * built before `expo-observe` was linked would otherwise fail at import, before
 * anything could render.
 */
const ObserveRoot: ComponentType<{ children: ReactNode }> = (() => {
  try {
    return (require('expo-observe') as typeof import('expo-observe')).ObserveRoot;
  } catch {
    return ({ children }: { children: ReactNode }) => <>{children}</>;
  }
})();

export function RootLayout() {
  return (
    <ObserveRoot>
      <RootLayoutInner />
    </ObserveRoot>
  );
}

function RootLayoutInner() {
  // Expo Go can't embed fonts at build time, so load them here.
  const [fontsReady, fontError] = useFonts(fontAssets);
  // Read synchronously from MMKV, so the very first paint mounts the right
  // stack rather than flashing Home and swapping.
  // Not bypassed in development builds. It was, to get a simulator past Sign in
  // with Apple, but that bypass meant a fresh dev install met the paywall with
  // no onboarding in front of it. The simulator case is handled where it
  // arises: `signInWithApple` reports "unavailable" there, which the intro
  // screen already lets through.
  const onboarded = useOnboarded();
  /**
   * Whether the subscription is live. The tabs are behind it.
   *
   * Synchronous and correct on the first frame — the store keeps a cached
   * answer — so there is no flash of the app before the wall, and no flash of
   * the wall in front of somebody who has paid.
   */
  const entitled = useEntitled();
  /**
   * The fourth state, between paid and never-paid: twelve weeks bought and
   * finished. It gets its own door — the expiry screen — because a pitch is the
   * wrong thing to show somebody who already paid once and has twelve weeks of
   * their own measurements in the app.
   *
   * `browsing` is their answer to it. Having chosen "Not now" they get the tabs
   * read-only: history visible, new sessions locked in the session player. That
   * is the one hole in an otherwise fully paid app, and it is deliberate —
   * withholding data the user generated is not a pricing mechanism.
   */
  const lapsed = useProgramLapsed();
  const browsing = useBrowsingLapsed();
  // Listens for the win-back notification being tapped, at the root rather
  // than on the sheet: the tap can be what launches the app, in which case no
  // screen has mounted yet to hear it.
  useOfferNotifications();
  // Raises the offer over Home a beat after the flow finishes.
  usePendingOfferPresenter();
  // Keeps the home screen's long-press shortcuts in step with what we know, and
  // answers them. Also at the root: a shortcut tap can be the thing that
  // launched the app.
  useQuickActions();
  // Moves the plan's "today" on when the app is brought back after midnight.
  useProgramClock();
  // The weekly plan's goals, from onboarding's answers, kept current.
  usePlanGoals(onboarded);
  // The plan copied to Supabase in the background; local stays the record.
  usePlanSync(onboarded);
  useAppUsage();
  // Apple's review prompt, at a win only — never during onboarding.
  useReviewAtWin(onboarded);
  // Fills the local health cache in the background. Never awaited and never
  // rendered — every screen reads the cache, which always has an answer.
  useHealthPipeline();
  // Starts the store and tracks whether the subscription is live. The simulator
  // talks to the real store too — with a Test Store key the whole purchase works
  // there — so the paywall is reachable in development rather than bypassed. See
  // the note in `entities/purchase/model/store.ts`.
  usePurchases();
  // Clears a Live Activity left pinned to the Dynamic Island by a crash. At the
  // root because the earliest moment is the point — the player swept these too,
  // but only when a new session began.
  useLiveActivityCleanup();
  // Pulls the demonstration clips down before anybody reaches a session. They
  // are not in the bundle any more — see `widgets/session-player/model/clip-cache`.
  useClipPrefetch();
  // Reads the invite status on launch and listens for the push that says
  // someone used your code. At the root because that push can be what launches
  // the app — see the note inside.
  useReferralSync();
  // Keeps the seven-day notification window current and records that the user
  // was here. At the root because the second half matters on every launch: the
  // backoff that silences the app is cleared by any open, not only by a tap on
  // a notification.
  useNotificationScheduler();
  // A `$screen` per route, for the paths and retention charts in PostHog.
  useScreenTracking();
  // The home-screen widget: reads back answers given on it, then redraws it.
  useHomeWidget(onboarded);

  // Interactive once the fonts have resolved and the first real screen has had
  // a frame to paint — the end of the `tti` measurement in EAS Observe.
  const ready = fontsReady || fontError != null;
  useEffect(() => {
    if (!ready) return;
    const frame = requestAnimationFrame(() => markInteractive());
    return () => cancelAnimationFrame(frame);
  }, [ready]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Required by react-native-keyboard-controller: it installs the native
          frame listener that lets a KeyboardAvoidingView track the keyboard's
          real animation instead of approximating it from show/hide events. */}
      <KeyboardProvider>
        <IntroRevealProvider value>
          <NavThemeProvider>
            {fontsReady || fontError ? (
              <Stack>
                {/* The two halves of the app are mutually exclusive stacks,
                    not a route pushed over another. Finishing the
                    questionnaire flips the guard, expo-router unmounts the
                    onboarding stack, and back has nothing to return to — the
                    one-way door the navigation laws ask for. A `replace` would
                    leave /onboarding reachable; this makes it not exist.

                    Both halves must be guarded, and on opposite conditions:
                    `Stack.Protected` gates *availability*, it does not
                    navigate, so if (tabs) stayed reachable the initial "/"
                    would resolve to it and onboarding would never show.

                    `guard` means *available*, not *blocked*. Both were the
                    wrong way round from the first commit: onboarding was gated
                    on having finished onboarding, so a new user — for whom the
                    flag is false — found the flow unavailable and landed on
                    Home, and had the guard ever flipped they would have been
                    thrown back into the flow with the tabs unreachable. The
                    comment above described the intended behaviour the whole
                    time, which is why it read as correct. */}
                <Stack.Protected guard={!onboarded}>
                  <Stack.Screen
                    name="onboarding"
                    options={{ headerShown: false, animation: 'fade', gestureEnabled: false }}
                  />
                </Stack.Protected>

                {/* The wall, as a third state of the same door rather than a
                    sheet somebody has to fail to dismiss.

                    A form sheet with the grabber off and the gesture disabled
                    is still a sheet: there is a screen behind it, the OS knows
                    it, and every version of iOS finds one more way to get back
                    to what it can see. Guarding the tabs instead means there is
                    nothing behind the paywall to reach — the same mechanism
                    that makes onboarding a one-way door.

                    Not shown to somebody whose twelve weeks have simply run
                    out: they get `expired` below instead. This door is for a
                    first purchase. */}
                <Stack.Protected guard={onboarded && !entitled && !lapsed}>
                  <Stack.Screen
                    name="offer"
                    options={{
                      headerShown: false,
                      // A screen, not a sheet, when it is the gate: a sheet
                      // implies something to go back to.
                      presentation: 'card',
                      gestureEnabled: false,
                      animation: 'fade',
                    }}
                  />
                </Stack.Protected>

                {/* The end of the programme, which is not the same door as the
                    paywall — see the note on `lapsed` above. Guarded on
                    `!browsing` so answering it with "Not now" is answering it
                    once, rather than meeting it again every cold launch. */}
                <Stack.Protected guard={onboarded && !entitled && lapsed && !browsing}>
                  <Stack.Screen
                    name="expired"
                    options={{
                      headerShown: false,
                      presentation: 'card',
                      gestureEnabled: false,
                      animation: 'fade',
                    }}
                  />
                </Stack.Protected>

                {/* Paid, or browsing their own history after the programme ran
                    out. The second case is read-only: the session player refuses
                    to start anything while `sessionsLocked()` holds. */}
                <Stack.Protected guard={onboarded && (entitled || (lapsed && browsing))}>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack.Protected>

                {/* Where an email button lands (`/open/today`, `/open/plan` …).
                    Outside every guard, so a link always resolves; it renders
                    nothing, records the click and replaces itself with the
                    screen the email meant — see `pages/open`. */}
                <Stack.Screen name="open/[...path]" options={{ headerShown: false, animation: 'none' }} />

                {/* The account, as a pushed screen rather than a sheet.
                    Everything else reached from the header is an aside you
                    dismiss back out of; this is somewhere you go, and it holds
                    the exits Apple expects to be findable rather than
                    dismissed past. */}
                <Stack.Screen
                  name="profile"
                  options={{
                    headerShown: false,
                    presentation: 'card',
                  }}
                />

                {/* Native form sheet sized to its content, so the list rises
                    only as far as it needs and the app stays visible behind
                    it. */}
                <Stack.Screen
                  name="settings"
                  options={{
                    presentation: 'formSheet',
                    headerShown: false,
                    // Android's sheet sized to its content stops at the screen
                    // edge and never scrolls, which cut Settings off halfway.
                    // A fixed, nearly full height scrolls like any other screen.
                    sheetAllowedDetents: Platform.OS === 'android' ? [0.94] : 'fitToContents',
                    sheetGrabberVisible: true,
                    sheetCornerRadius: 28,
                  }}
                />
                {/* One day off the path, same treatment: a missed day is two
                    lines and a completed retest is a table, and neither should
                    rise higher than it needs to. */}
                <Stack.Screen
                  name="day/[day]"
                  options={{
                    presentation: 'formSheet',
                    headerShown: false,
                    sheetAllowedDetents: 'fitToContents',
                    sheetGrabberVisible: true,
                    sheetCornerRadius: 28,
                  }}
                />
              </Stack>
            ) : null}
            <StatusBar style="auto" />
            {/* An over-the-air update or a new App Store build, offered in a
                sheet, and the "up to date" note after the restart. Mounted
                with the fonts, so neither draws in the system face; not during
                onboarding, where the first minutes are not the moment to ask
                for a restart. Its own component so expo-updates' progress
                events re-render it rather than this layout. */}
            {(fontsReady || fontError) && <AppUpdateHost enabled={onboarded} />}
          </NavThemeProvider>
        </IntroRevealProvider>
      </KeyboardProvider>
      {/* Last, so it is above everything, and outside every provider's
          padding: it covers the whole window from the very first frame,
          before the fonts, and unmounts completely once the app is showing.
          After an update's restart it waits out the reload screen's fade. */}
      <SplashReveal ready={ready} holdMs={updateRestartHoldMs()} />
    </GestureHandlerRootView>
  );
}
