import Note02Icon from '@hugeicons/core-free-icons/Note02Icon';
import { useState } from 'react';

import { accents } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { GroupedRow } from '@/shared/ui/grouped-list';
import { NoteSheet } from '@/shared/ui/note-sheet';

/**
 * Opens the founder's note on demand. Development builds only.
 *
 * The note is shown once, in the gap between the last onboarding answer and
 * Home, and finishing onboarding is a one-way door — so the only way to look at
 * it again was to wipe the device and run the whole questionnaire. That is the
 * same problem `ResetRow` exists for, and this is the cheaper answer to it:
 * the sheet is a pure component driven by one boolean, so it can be opened from
 * anywhere without the flow around it.
 *
 * Not shipped. `__DEV__` is false in every release build. A "read the founder's
 * note again" row is not a feature anybody asked for, and the note earns its
 * effect by arriving once at a particular moment — a permanent entry point in
 * the profile would spend exactly the thing that makes it work.
 *
 * `onDone` only closes the sheet here. In onboarding the same callback is what
 * finishes the flow; there is nothing to finish from a profile screen, and a
 * preview that completed onboarding would be a trap rather than a preview.
 */
export function NotePreviewRow() {
  const t = useT();
  const [open, setOpen] = useState(false);

  if (!__DEV__) return null;

  return (
    <>
      <GroupedRow
        icon={Note02Icon}
        tone={accents.light.amber.fill}
        label={t('profile.notePreviewLabel')}
        hint={t('profile.notePreviewHint')}
        onPress={() => setOpen(true)}
      />
      <NoteSheet visible={open} onDone={() => setOpen(false)} />
    </>
  );
}
