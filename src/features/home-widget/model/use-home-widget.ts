import { useEffect } from 'react';
import { AppState } from 'react-native';

import { useHealthSignals } from '@/entities/health';
import { useLogsVersion, usePlanVersion, useProgramState } from '@/entities/program';
import { useLanguage } from '@/shared/lib/i18n';

import { resetWidget, syncWidget, widgetModule } from './sync';

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

  useEffect(() => {
    if (!enabled) {
      void resetWidget();
      return;
    }
    void syncWidget();
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
