import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { queueReview } from '@/shared/lib/review';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { Button } from '@/shared/ui/button';
import { SheetScreen } from '@/shared/ui/sheet';

import { Signature } from './signature';

const ROUTE = 'note';

type Props = {
  visible: boolean;
  /** Called once the user is done with the note, however they leave it. The
   * caller finishes onboarding here; the sheet never navigates itself. */
  onDone: () => void;
  /**
   * Whether the button asks for a review. On by default: the tap queues
   * Apple's own rating sheet (the API App Review 5.6.1 requires, never a
   * custom one), shown on the next screen, and "Not now" sits under it so the
   * rating is never the only way on.
   */
  asksForReview?: boolean;
};

type Handlers = { asksForReview: boolean };

/**
 * The last thing onboarding says, and the only place the app speaks as a person.
 *
 * **Why it sits where it does.** Finishing onboarding is a one-way door: the
 * root layout swaps the whole tree on `completeOnboarding()`, so there is no
 * stack to come back through. That makes the gap between the last question and
 * Home the only moment this can be shown at all — afterwards there is no
 * onboarding left to show it from, and over Home it would collide with the
 * offer sheet that arms itself on the same transition.
 *
 * So the sheet is shown *before* the flag flips, and `onDone` is what flips it.
 * Both exits — the rating button and tapping the backdrop — go through that one
 * callback, which is what stops a user getting stranded with no way forward.
 *
 * The native form sheet route `/note` (`NoteSheetScreen`); this keeps the
 * hosts' `visible` / `onDone` API and opens it. However the sheet is left (the
 * rating, "Not now", Close, a swipe down), `onDone` runs once, after it has
 * gone.
 */
export function NoteSheet({ visible, onDone, asksForReview = true }: Props) {
  useSheetRoute<Handlers>(ROUTE, visible, '/note', { asksForReview }, onDone);
  return null;
}

export function NoteSheetScreen() {
  const handlers = useSheetHandlers<Handlers>(ROUTE);
  const navigation = useNavigation();
  const t = useT();
  const asksForReview = handlers()?.asksForReview ?? false;

  const rate = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    queueReview();
    navigation.goBack();
  };
  const later = () => navigation.goBack();

  return (
    <SheetScreen
      title={t('onboarding.note.title')}
      footer={
        <>
          <Button label={asksForReview ? t('onboarding.note.cta') : t('common.done')} onPress={asksForReview ? rate : later} />
          {/* A rating is asked for, never required: the way past it is a
              button too. */}
          {asksForReview && <Button label={t('onboarding.note.later')} variant="ghost" onPress={later} />}
        </>
      }>
      {/* Full ink: the body of a letter, not a hint under a control. */}
      <Text style={styles.line}>{t('onboarding.note.body1')}</Text>
      <Text style={styles.line}>{t('onboarding.note.body2')}</Text>
      <View style={styles.signed}>
        <Signature color={colors.text} width={118} />
        <Text style={styles.names}>{t('onboarding.note.signature')}</Text>
      </View>
    </SheetScreen>
  );
}

const styles = StyleSheet.create({
  line: { ...fonts.regular(19), color: colors.text },
  signed: { gap: 2 },
  names: { ...fonts.medium(17), color: colors.text2 },
});
