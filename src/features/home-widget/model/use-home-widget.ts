import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import { useHealthSignals } from '@/entities/health';
import { useLogsVersion, usePlanVersion, useProgramState } from '@/entities/program';
import { useLanguage } from '@/shared/lib/i18n';

import { checkWidgetPresence } from './presence-tracking';
import { resetWidget, syncWidget, widgetModule } from './sync';

/** How long after a change the widget is synced. */
const CHANGE_SYNC_MS = 1200;

/**
 * Keeps the home-screen widget in step with the app, and the app with it.
 *
 * Mounted once, at the root. It syncs:
 * - on launch and every return to the foreground, which is when answers given
 *   on the widget while the app was closed are read back into the log;
 * - on any log, plan or health change, so ticking a task or checking in on
 *   Home shows on the widget straight away, and the day's goal is counted from
 *   the same plan Home's list is;
 * - on a language change, since every word on the widget is written here;
 * - on a widget button press while the app is running.
 *
 * `enabled` is whether there is a program to show — onboarding done. Before
 * that, and after an account is reset, the widget shows its "open the app"
 * face. The layout itself is registered either way, on mount: without it the
 * extension draws expo-widgets' red "No layout found" box.
 */
export function useHomeWidget(enabled: boolean): void {
  const logs = useLogsVersion();
  const state = useProgramState();
  const plan = usePlanVersion();
  const health = useHealthSignals();
  const language = useLanguage();

  useEffect(() => {
    widgetModule();
  }, []);

  // Whether the widget is on the Home Screen, for PostHog: on launch and on
  // every return, which is when a widget added or removed outside the app is
  // first seen.
  useEffect(() => {
    void checkWidgetPresence();
    const foreground = AppState.addEventListener('change', (next) => {
      if (next === 'active') void checkWidgetPresence();
    });
    return () => foreground.remove();
  }, []);

  // A change (a check-in, a task ticked) is synced a beat later rather than
  // in the same moment: the write and the widget reload are file and native
  // work, and in that moment Home is animating the answer in. The first sync
  // of a launch goes at once.
  const synced = useRef(false);
  useEffect(() => {
    if (!enabled) {
      synced.current = false;
      void resetWidget();
      return undefined;
    }
    if (!synced.current) {
      synced.current = true;
      void syncWidget();
      return undefined;
    }
    const timer = setTimeout(() => void syncWidget(), CHANGE_SYNC_MS);
    return () => clearTimeout(timer);
  }, [enabled, logs, state, plan, health, language]);

  useEffect(() => {
    if (!enabled) return undefined;
    const foreground = AppState.addEventListener('change', (next) => {
      if (next === 'active') void syncWidget();
    });
    const presses = widgetModule()?.addUserInteractionListener((event) => {
      if (event.source === 'DailyCheck') void syncWidget();
    });
    return () => {
      foreground.remove();
      presses?.remove();
    };
  }, [enabled]);
}

/**
 * `useHomeWidget` as a component that draws nothing.
 *
 * The hook subscribes to the logs, the plan, health and the language, so the
 * component holding it re-renders on every check-in. Held by the root layout
 * itself, that was the whole navigation stack re-rendering in the tap that
 * logs an answer, while Home animates it; a leaf re-renders only itself.
 */
export function HomeWidgetSync({ enabled }: { enabled: boolean }): null {
  useHomeWidget(enabled);
  return null;
}
