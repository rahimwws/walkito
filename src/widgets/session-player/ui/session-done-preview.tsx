import { useEffect, useState } from 'react';
import { DevSettings, Linking, Modal, StyleSheet, View } from 'react-native';

import { todayKey, weekPlan } from '@/entities/program';
import { palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { SessionDoneSheet } from './session-done-sheet';

/**
 * The development menu's entries. Developer-facing only (the component is
 * mounted behind `__DEV__`), so they are not in the catalogue, like the update
 * sheet's "Preview update sheet".
 */
const MENU_DONE = 'Preview session done';
const MENU_STOPPED = 'Preview session stopped';

/**
 * `walkito.dev://?previewDone` opens the finished sheet, `?previewDone=stopped`
 * the one after a session stopped because it hurt. For `xcrun simctl openurl`.
 */
const PREVIEW_PARAM = /[?&]previewDone(?:=([^&#]*))?/;

/** What a session would have shown: today's plan session, or the first one
 * this week when today is a rest day. A fallback only if there is no plan. */
const FALLBACK = { minutes: 8, moves: 5 };

type Preview = { early: boolean; minutes: number; moves: number; startedAt: number };

function previewFor(early: boolean): Preview {
  let shape = FALLBACK;
  try {
    const plan = weekPlan();
    const today = todayKey();
    const day =
      plan.days.find((candidate) => candidate.date === today && candidate.exercises.length > 0) ??
      plan.days.find((candidate) => candidate.exercises.length > 0);
    if (day != null) shape = { minutes: Math.max(1, day.minutes), moves: day.exercises.length };
  } catch {
    // No plan yet (onboarding not finished): the fallback shape will do.
  }
  return { early, ...shape, startedAt: Date.now() };
}

/**
 * The end-of-session sheet without finishing a session, in development builds.
 *
 * The sheet is the session player's and only appears when the last move runs
 * out, which is minutes of standing on one foot per look. This raises the same
 * `SessionDoneSheet` in a page sheet, as the player presents it, with the real
 * streak and days of care and today's plan for the minutes and the moves. Its
 * answers go nowhere (`preview`): a feedback note or a step back filed from
 * here would change the next real session.
 *
 * Mount it behind `__DEV__`; the listener inside is guarded too, so a release
 * bundle folds all of it away.
 */
export function SessionDonePreview() {
  const scheme = useColorScheme();
  const [preview, setPreview] = useState<Preview | null>(null);
  /** Up only once the page sheet has finished presenting, so the celebration
   * rises the way it does over a session rather than sliding in with the page. */
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (__DEV__) {
      // `shown` is left alone: a link that arrives while the page is already
      // up swaps what it shows, and `onShow` only fires for a fresh page.
      const open = (early: boolean) => setPreview(previewFor(early));

      try {
        DevSettings.addMenuItem(MENU_DONE, () => open(false));
        DevSettings.addMenuItem(MENU_STOPPED, () => open(true));
      } catch {
        // Not in this runtime.
      }

      const onUrl = (url: string | null) => {
        const match = url == null ? null : PREVIEW_PARAM.exec(url);
        if (match != null) open(match[1] === 'stopped');
      };
      void Linking.getInitialURL()
        .then(onUrl)
        .catch(() => undefined);
      const subscription = Linking.addEventListener('url', ({ url }) => onUrl(url));
      return () => subscription.remove();
    }
    return undefined;
  }, []);

  const close = () => {
    setShown(false);
    setPreview(null);
  };

  return (
    <Modal
      visible={preview != null}
      animationType="slide"
      presentationStyle="pageSheet"
      onShow={() => setShown(true)}
      onRequestClose={close}>
      {/* The page the player paints, so the blur behind the sheet has the
          app's own colour to soften. */}
      <View style={[styles.page, { backgroundColor: palette[scheme].background }]}>
        {preview != null && (
          <SessionDoneSheet
            visible={shown}
            early={preview.early}
            moves={preview.moves}
            minutes={preview.minutes}
            feedback={!preview.early}
            startedAt={preview.startedAt}
            preview
            onClose={close}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
});
