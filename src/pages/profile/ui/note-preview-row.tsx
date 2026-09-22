import Note02Icon from '@hugeicons/core-free-icons/Note02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { accents, fonts, meterColors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
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
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();

  const [open, setOpen] = useState(false);

  if (!__DEV__) return null;

  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('profile.notePreviewLabel')}
        onPress={() => {
          Haptics.selectionAsync();
          setOpen(true);
        }}
        style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}>
        <HugeiconsIcon
          icon={Note02Icon}
          size={20}
          color={accents[scheme].amber.fill}
          strokeWidth={1.8}
        />
        <View style={styles.text}>
          <Text style={[styles.label, { color: accents[scheme].amber.fill }]}>
            {t('profile.notePreviewLabel')}
          </Text>
          <Text style={[styles.hint, { color: meter.caption }]}>
            {t('profile.notePreviewHint')}
          </Text>
        </View>
      </Pressable>

      <NoteSheet visible={open} onDone={() => setOpen(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  text: { flex: 1 },
  label: { fontSize: 16, fontFamily: fonts.semibold, letterSpacing: -0.2 },
  hint: { fontSize: 13, fontFamily: fonts.medium, marginTop: 1 },
});
