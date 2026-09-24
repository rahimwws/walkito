import { useFonts } from 'expo-font';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import {
  NavThemeProvider,
  useOfferNotifications,
  usePendingOfferPresenter,
  useHealthPipeline,
  useNotificationScheduler,
  useProgramClock,
  useClipPrefetch,
  useLiveActivityCleanup,
  usePurchases,
  useScreenTracking,
  useReferralSync,
  useQuickActions,
} from '@/app/providers';
import { useBrowsingLapsed, useEntitled, useProgramLapsed } from '@/entities/purchase';
import { useOnboarded } from '@/entities/session';
import { fontAssets } from '@/shared/config';
// Imported for its module-scope side effect as much as anything: reading the
// stored preference applies the saved appearance before the first render.
import '@/shared/lib/theme';
import { IntroRevealProvider } from '@/shared/ui/splash';

/**
 * The app shell: fonts, theme, gesture root, routes.
 *
 * There is deliberately no launch animation. A splash that plays before the
 * first screen is time the user spends looking at nothing, and it pushed the
 * welcome screen's own introduction — the first thing with anything to say —
 * a second and a half back. The app now paints its first real screen as soon
 * as the fonts resolve.
 *
 * `IntroRevealProvider` is pinned true for the same reason: the staggered
 * reveal it drives was choreographed to follow the splash, and with the splash
 * gone it would only delay content for no one. Held at true, every
 * `IntroReveal` renders its children immediately and animates nothing.
 *
 * Add new top-level routes as `Stack.Screen` entries here (modals, full-screen
 * flows). Tabs live one level down, in `tabs-layout`.
 */

export function RootLayout() {
  // Expo Go can't embed fonts at build time, so load them here.
  const [fontsReady, fontError] = useFonts(fontAssets);
  // Read synchronously from MMKV, so the very first paint mounts the right
  // stack rather than flashing Home and swapping.
  // Development builds skip onboarding entirely: its intro gates on Sign in
  // with Apple, which a simulator cannot complete.
  const onboarded = useOnboarded() || __DEV__;
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
                    sheetAllowedDetents: 'fitToContents',
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
          </NavThemeProvider>
        </IntroRevealProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
