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
  useQuickActions,
} from '@/app/providers';
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
  const onboarded = useOnboarded();
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
  // Fills the local health cache in the background. Never awaited and never
  // rendered — every screen reads the cache, which always has an answer.
  useHealthPipeline();

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
                    would resolve to it and onboarding would never show. */}
                <Stack.Protected guard={onboarded}>
                  <Stack.Screen
                    name="onboarding"
                    options={{ headerShown: false, animation: 'fade', gestureEnabled: false }}
                  />
                </Stack.Protected>

                <Stack.Protected guard={!onboarded}>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack.Protected>

                {/* Native form sheet sized to its content, so the apprearance
                    picker rises only as far as it needs and the app stays
                    visible behind it. */}
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
                {/* The offer, over the finished plan. Same treatment as the
                    other sheets so the page behind stays visible — the plan
                    the user just chose is the reason the ask makes sense, and
                    covering it would throw that away. */}
                <Stack.Screen
                  name="offer"
                  options={{
                    presentation: 'formSheet',
                    headerShown: false,
                    // A fixed tall detent rather than fitToContents. Sized to
                    // its contents the sheet stopped short of the bottom edge
                    // and the screen behind showed through under it as a lit
                    // strip; at this height the sheet owns the bottom of the
                    // display and the page behind is only ever above it.
                    sheetAllowedDetents: [0.985],
                    // No grabber and no swipe-down: this is the purchase step,
                    // and a sheet that can be flicked away is one the user
                    // dismisses by accident on the way to reading it. The
                    // button inside is the only way out — which is also what
                    // makes closing it trivial, because there is no stack to
                    // unwind, only Home already sitting underneath.
                    sheetGrabberVisible: false,
                    gestureEnabled: false,
                    // Rounder than the app's other sheets — this one is a
                    // piece of artwork with an offer on it, not a list of
                    // settings — but not so round the corner starts eating the
                    // content beside it.
                    sheetCornerRadius: 60,
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
