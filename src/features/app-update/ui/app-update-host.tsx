import { useCallback, useEffect, useRef } from 'react';

import { useUpdateConfirmation } from '../model/applied';
import { useDevPreviewMenu } from '../model/dev-preview';
import { useAppUpdates } from '../model/use-app-updates';

import { UpdateSheet } from './update-sheet';
import { UpdatedToast } from './updated-toast';

/** After the preview hides the native reload screen, its fade (300ms) is let
 * finish before the note arrives — as it would after a real restart. */
const PREVIEW_NOTE_DELAY_MS = 350;

/**
 * Everything about updating the app, mounted once at the root.
 *
 * A component rather than a hook in the root layout because it re-renders on
 * every state change expo-updates reports — a download emits progress — and
 * those renders should stop here instead of re-running the whole layout. The
 * sheet is memoised on stable callbacks, so most of them stop even sooner.
 *
 * `enabled` is the user being past onboarding: nothing is checked for, offered
 * or confirmed before that.
 */
export function AppUpdateHost({ enabled }: { enabled: boolean }) {
  const confirmation = useUpdateConfirmation(enabled);

  const noteTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (noteTimer.current != null) clearTimeout(noteTimer.current);
    },
    [],
  );
  const { show } = confirmation;
  const onPreviewRestarted = useCallback(() => {
    noteTimer.current = setTimeout(show, PREVIEW_NOTE_DELAY_MS);
  }, [show]);

  const updates = useAppUpdates(enabled, onPreviewRestarted);
  useDevPreviewMenu(updates.preview);

  return (
    <>
      <UpdateSheet
        offer={updates.offer}
        phase={updates.phase}
        downloadProgress={updates.downloadProgress}
        accept={updates.accept}
        dismiss={updates.dismiss}
        handoff={updates.handoff}
      />
      <UpdatedToast visible={confirmation.visible} onHidden={confirmation.hide} />
    </>
  );
}
