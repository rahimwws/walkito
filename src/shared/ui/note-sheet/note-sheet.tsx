import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import {
  Image,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { APP_STORE_REVIEW_URL, noteFonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { Signature } from './signature';

const APP_ICON = require('@assets/icon.png');

/** Matches `StreakSheet` exactly. Two sheets in the same app that arrive at
 * different speeds read as two different apps. */
const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;
const RADIUS = 36;

/** How long the contents take to settle once the card itself has arrived. */
const SETTLE_MS = 620;
/** How far the paragraphs travel as they fade up. Enough to read as arriving,
 * short enough that nothing sits in the wrong place long enough to notice. */
const LIFT = 10;

/** The envelope hung over the card's top edge. The dock reserves half of it as
 * padding so the edge cuts it exactly in two — the same trick `StreakSheet`
 * uses for its badge. */
const SEAL = 68;

type Props = {
  visible: boolean;
  /** Called once the user is done with the note, however they leave it. The
   * caller finishes onboarding here — the sheet never navigates itself. */
  onDone: () => void;
};

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
 */
export function NoteSheet({ visible, onDone }: Props) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const t = useT();

  /**
   * The card's ceiling.
   *
   * The dock is anchored to the bottom edge, so a card taller than the screen
   * grows upward and off the top, taking the button with it. Russian finds the
   * limit first — it runs about a fifth longer than the English the layout was
   * measured against. The seal's overhang comes off the top too, or the
   * envelope would be clipped by the status bar on exactly the small devices
   * this is protecting.
   */
  const maxHeight = height - insets.top - SEAL / 2 - 16;

  const [mounted, setMounted] = useState(false);
  /** 0 away, 1 arrived. One number drives the blur and the card, so they cannot
   * arrive or leave at different times. */
  const progress = useSharedValue(0);
  /** The contents settling in after the card. Separate from `progress` so the
   * card arrives at its own speed and the words at theirs. */
  const settled = useSharedValue(0);

  const lines = [t('onboarding.note.body1'), t('onboarding.note.body2')];

  useEffect(() => {
    if (visible) {
      setMounted(true);
      settled.value = 0;
      // A frame late: the modal has to exist before the transition starts, or
      // the first frames play against nothing.
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
        settled.value = withTiming(1, {
          duration: SETTLE_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }

    progress.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finishedExit) => {
        if (finishedExit) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [visible, progress, settled]);

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));

  /**
   * The whole note arriving at once.
   *
   * One style, applied to both blocks, so the paragraphs and the signature
   * share a single fade rather than following each other in. They are separate
   * views only because the card's own `gap` sits between them.
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
   * Opens the store, then hands over regardless.
   *
   * `onDone` is called unconditionally: the user is leaving for the App Store
   * and comes back to whatever the app was showing when they left, so Home has
   * to already be underneath. Waiting on the link would leave them returning to
   * a dead onboarding screen.
   *
   * With no id configured yet (`APP_STORE_REVIEW_URL` is null) this is simply
   * a dismissal — the note still did its job.
   */
  const rate = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    if (APP_STORE_REVIEW_URL != null) {
      void Linking.openURL(APP_STORE_REVIEW_URL).catch(() => {});
    }
    onDone();
  };

  const later = () => {
    Haptics.selectionAsync();
    onDone();
  };

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={later}>
      <View style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView
            tint={scheme === 'dark' ? 'dark' : 'light'}
            intensity={BLUR}
            style={styles.fill}
          />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        {/* The only way past without rating. It matters: a note asking for a
            rating with no exit at all is the pattern Apple's own guidelines
            call out, and this is the last thing the flow does. `onRequestClose`
            above routes the Android back button to the same place. */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          style={styles.fill}
          onPress={later}
        />

        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          {/* Half over the card, half in the air. The dock reserves the top
              half as padding and the seal hangs at the dock's own top edge, so
              its centre lands exactly on the card's edge whatever the card is
              tall. Drawn over the card, never under it — the proud half is the
              entire effect. */}
          <View style={[styles.seal, { backgroundColor: colors.card }]} accessible={false}>
            <HugeiconsIcon
              icon={Mail01Icon}
              size={30}
              color={colors.foreground}
              strokeWidth={1.8}
            />
          </View>

          <ScrollView
            // Only scrolls when the cap is actually hit; on a roomy phone this
            // behaves exactly like the plain view it replaced.
            style={[styles.card, { backgroundColor: colors.card, maxHeight }]}
            contentContainerStyle={styles.cardBody}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            {/* The icon sits right, with the heading given the left. The two
                read as a letterhead: who it is from on one side, whose paper it
                is on the other. */}
            <View style={styles.head}>
              <Text style={[styles.title, { color: colors.foreground }]}>
                {t('onboarding.note.title')}
              </Text>
              <Image
                source={APP_ICON}
                resizeMode="contain"
                accessible={false}
                style={styles.icon}
              />
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
                <Text style={[styles.names, { color: meter.caption }]}>
                  {t('onboarding.note.signature')}
                </Text>
              </View>

              <PrimaryButton label={t('onboarding.note.cta')} onPress={rate} />
            </Animated.View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  /** A trace of ink over the blur — blur alone leaves a bright page bright. */
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
    // Half the seal, so the card's top edge bisects it.
    paddingTop: SEAL / 2,
  },
  seal: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    width: SEAL,
    height: SEAL,
    borderRadius: SEAL / 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  card: { borderRadius: RADIUS, borderCurve: 'continuous' },
  // Padding and gap belong to the content, not the ScrollView — padding on the
  // ScrollView itself is clipped rather than scrolled.
  cardBody: {
    paddingHorizontal: 22,
    // Room for the half of the seal that overlaps the card.
    paddingTop: SEAL / 2 + 10,
    paddingBottom: 20,
    gap: 16,
  },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  title: { flex: 1, fontSize: 25, fontFamily: noteFonts.bold, letterSpacing: -0.5 },
  icon: { width: 50, height: 50, borderRadius: 12, borderCurve: 'continuous' },
  body: { gap: 12 },
  line: { fontSize: 17, fontFamily: noteFonts.regular, lineHeight: 26, letterSpacing: -0.1 },
  close: { gap: 14 },
  signed: { gap: 2 },
  names: { fontSize: 14, fontFamily: noteFonts.medium, letterSpacing: -0.1 },
});
