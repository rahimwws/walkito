import Refresh01Icon from '@hugeicons/core-free-icons/Refresh01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

import { resetIntake } from '@/entities/profile';
import { resetOnboarding } from '@/entities/session';
import { accents, fonts, meterColors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';
import { useColorScheme } from '@/shared/lib/theme';
import { clearClips } from '@/widgets/session-player';

/**
 * Start again from the first screen. Development builds only.
 *
 * Both gates in this app are one-way doors on purpose: finishing the
 * questionnaire flips a stored flag, and buying flips an entitlement. That is
 * right for a user and impossible to work with — the only way back to the first
 * screen was to delete the app, and deleting the app also deletes the clips,
 * the Apple ID association and the anonymous account, so nothing could be tried
 * twice without ten minutes of setup.
 *
 * Not shipped. `__DEV__` is false in every release build, so this row does not
 * exist in one — which matters, because a "wipe everything" control one tap
 * from a profile screen is not a feature, it is a support ticket.
 *
 * Deliberately not the same thing as Delete account. That one is the user's
 * right to be forgotten and reaches the server; this one only clears the
 * device, so the account, the invite code and the email survive and the flow
 * can be run again against the same identity.
 */
export function ResetRow() {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();

  if (!__DEV__) return null;

  const confirm = () => {
    Haptics.selectionAsync();
    Alert.alert(
      t('profile.resetAlertTitle'),
      t('profile.resetAlertBody'),
      [
        { text: t('profile.resetCancel'), style: 'cancel' },
        {
          text: t('profile.resetConfirm'),
          style: 'destructive',
          onPress: () => {
            // Storage first, then the flag. `resetOnboarding` notifies the
            // guard in the root layout, which swaps the stack — doing it before
            // the wipe would re-render the onboarding flow against data that is
            // about to vanish underneath it.
            kv.clearAll();
            // The answers are also held in memory, which `clearAll` cannot reach.
            resetIntake();
            clearClips();
            resetOnboarding();
          },
        },
      ],
    );
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('profile.resetA11y')}
      onPress={confirm}
      style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}>
      <HugeiconsIcon
        icon={Refresh01Icon}
        size={20}
        color={accents[scheme].amber.fill}
        strokeWidth={1.8}
      />
      <View style={styles.text}>
        <Text style={[styles.label, { color: accents[scheme].amber.fill }]}>
          {t('profile.resetLabel')}
        </Text>
        <Text style={[styles.hint, { color: meter.caption }]}>{t('profile.resetHint')}</Text>
      </View>
    </Pressable>
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
