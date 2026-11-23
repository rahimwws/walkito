import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { queueReview } from '@/shared/lib/review';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { SheetScreen } from '@/shared/ui/sheet';

import { Signature } from './signature';

const ROUTE = 'note';

/** How long the contents take to settle once the sheet has arrived. */
const SETTLE_MS = 620;
/** How far the paragraphs travel as they fade up. Enough to read as arriving,
 * short enough that nothing sits in the wrong place long enough to notice. */
const LIFT = 10;

const SEAL = 68;

type Props = {
  visible: boolean;
  /** Called once the user is done with the note, however they leave it. The
   * caller finishes onboarding here — the sheet never navigates itself. */
  onDone: () => void;
  /**
   * Whether the button asks for a review. On by default, the end of onboarding
   * included: the tap queues Apple's own rating sheet (the API App Review
   * 5.6.1 requires, never a custom one), shown on the next screen, and "Not
   * now" sits under it so the rating is never the only way on.
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
 * **The note does not type itself.** It used to, and the effect cost more than
 * it bought: a letter that arrives a character at a time makes the reader wait
 * on a machine, and the card had to be propped open with an invisible copy of
 * its own text so the button underneath would not move while they read. The
 * note now fades up in one piece — paragraphs and signature together. The
 * height is settled on the first frame because nothing is missing from it: a
 * property of the layout, rather than a trick defending one.
 *
 * **The sheet is the system's.** The native form sheet route `/sheet/note`
 * (`NoteSheetScreen`), solid, with the system grabber; this keeps the hosts'
 * `visible` / `onDone` API and opens it. `onDone` runs once the sheet has
 * gone, so the next screen never swaps in under it. The envelope that used
 * to hang over the card's edge sits at the top of the sheet instead: a native
 * sheet clips what leaves it.
 */
export function NoteSheet({ visible, onDone, asksForReview = true }: Props) {
  useSheetRoute<Handlers>(ROUTE, visible, '/sheet/note', { asksForReview }, (closedByHost) => {
    if (!closedByHost) onDone();
  });
  return null;
}

export function NoteSheetScreen() {
  const handlers = useSheetHandlers<Handlers>(ROUTE);
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const asksForReview = useRef(handlers()?.asksForReview ?? true).current;

  /** The contents settling in after the sheet. */
  const settled = useSharedValue(0);
  useEffect(() => {
    settled.value = withTiming(1, {
      duration: SETTLE_MS,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [settled]);

  const lines = [t('onboarding.note.body1'), t('onboarding.note.body2')];

  /**
   * The whole note arriving at once.
   *
   * One style, applied to both blocks, so the paragraphs and the signature
   * share a single fade rather than following each other in. They are separate
   * views only because the sheet's own `gap` sits between them.
   *
   * Driven by hand rather than by an `entering` builder, for the reason
   * `StreakSheet` and `GiftSheet` both carry a note about: an entering builder
   * that fails to run leaves its subject stranded at opacity zero, which has
   * happened three times in this project.
   */
  const content = useAnimatedStyle(() => ({
    opacity: settled.value,
    transform: [{ translateY: interpolate(settled.value, [0, 1], [LIFT, 0], 'clamp') }],
  }));

  /**
   * Hands over to the next screen, then asks for the rating there.
   *
   * The rating is queued, not raised here: at the end of onboarding `onDone`
   * swaps the whole tree for Home (or the paywall), and Apple's star sheet
   * raised during that swap would go with the screen it sat on. The root
   * layout raises it a beat after the next screen is up (`useQueuedReview`).
   */
  const rate = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    queueReview();
    navigation.goBack();
  };

  const later = () => {
    Haptics.selectionAsync();
    navigation.goBack();
  };

  return (
    <SheetScreen>
      <View style={styles.note}>
        <View style={[styles.seal, { backgroundColor: colors.background }]} accessible={false}>
          <HugeiconsIcon icon={Mail01Icon} size={30} color={colors.foreground} strokeWidth={1.8} />
        </View>

        <View style={styles.head}>
          <Text style={[styles.title, { color: colors.foreground }]}>{t('onboarding.note.title')}</Text>
        </View>

        <Animated.View style={[styles.body, content]}>
          {lines.map((text, index) => (
            // Full ink, not the caption grey the rest of the app uses for
            // supporting copy. This is the body of a letter, not a hint
            // under a control — grey made it read as boilerplate somebody
            // had to include rather than as something being said.
            <Text key={index} style={[styles.line, { color: colors.foreground }]}>
              {text}
            </Text>
          ))}
        </Animated.View>

        <Animated.View style={[styles.close, content]}>
          <View style={styles.signed}>
            <Signature color={colors.foreground} width={118} />
            <Text style={[styles.names, { color: meter.caption }]}>{t('onboarding.note.signature')}</Text>
          </View>

          <PrimaryButton
            label={asksForReview ? t('onboarding.note.cta') : t('common.done')}
            onPress={asksForReview ? rate : later}
          />
          {/* A rating is asked for, never required: the way past it is a
              button too, not only a swipe down. */}
          {asksForReview && (
            <Pressable accessibilityRole="button" onPress={later} style={({ pressed }) => [styles.later, pressed && { opacity: 0.6 }]}>
              <Text style={[styles.laterText, { color: meter.caption }]}>{t('onboarding.note.later')}</Text>
            </Pressable>
          )}
        </Animated.View>
      </View>
    </SheetScreen>
  );
}

const styles = StyleSheet.create({
  note: { gap: 16 },
  seal: {
    alignSelf: 'center',
    width: SEAL,
    height: SEAL,
    borderRadius: SEAL / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  title: { flex: 1, ...fonts.bold(25, -0.5) },
  body: { gap: 12 },
  line: { ...fonts.regular(17, -0.1), lineHeight: 26 },
  close: { gap: 14 },
  signed: { gap: 2 },
  names: { ...fonts.medium(15, -0.1) },
  later: { alignSelf: 'center', paddingVertical: 12, paddingHorizontal: 24, marginTop: 4 },
  laterText: { ...fonts.medium(15, -0.1) },
});
