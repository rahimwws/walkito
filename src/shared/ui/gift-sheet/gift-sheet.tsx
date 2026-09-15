import * as Haptics from 'expo-haptics';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  ReduceMotion,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

const GIFT_ART = require('@assets/home/mascot-gift.png');

/** The mascot lands first, then the copy arrives under it. */
const STAGGER_MS = 90;

export type GiftSheetProps = {
  visible: boolean;
  onClose: () => void;
};

/**
 * The reward, opened from the capsule in the header.
 *
 * A sheet rather than a screen: the gift is an aside, and covering Home to hand
 * it over would make collecting it feel like leaving what you were doing. The
 * page stays visible behind it, which is also what makes closing it cost
 * nothing.
 *
 * It is dismissible by design — unlike the purchase sheet, nothing here has to
 * be answered. A reward the user cannot decline is not a reward.
 */
export function GiftSheet({ visible, onClose }: GiftSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={visible}
      onRequestClose={onClose}>
      <View
        style={[
          styles.sheet,
          {
            backgroundColor: colors.background,
            paddingBottom: Math.max(insets.bottom, 20) + 8,
          },
        ]}>
        {/* Drawn, not native: `pageSheet` gives the drag gesture but no handle,
            and a sheet that can be pulled down should look like it can. */}
        <View style={[styles.grabber, { backgroundColor: meter.track }]} />

        <View style={styles.body}>
          {/* `FadeInDown`, not `FadeIn`. Both seed the view at opacity 0 and
              rely on the mount animation running to bring it back, but the
              plain fade is the one that has twice been observed never to run
              here — leaving a white 190pt mascot invisible on a dark sheet
              while its two siblings below, which use this builder, arrived
              normally. Matching them is the smallest change that puts the
              artwork on a path already proven to work in this very component. */}
          <Animated.Image
            entering={FadeInDown.duration(360).reduceMotion(ReduceMotion.System)}
            source={GIFT_ART}
            style={styles.art}
            resizeMode="contain"
          />

          <Animated.Text
            entering={FadeInDown.delay(STAGGER_MS)
              .duration(380)
              .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
              .reduceMotion(ReduceMotion.System)}
            style={[styles.title, { color: colors.foreground }]}>
            Something for you
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(STAGGER_MS * 2)
              .duration(380)
              .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
              .reduceMotion(ReduceMotion.System)}
            style={[styles.blurb, { color: meter.caption }]}>
            Keep your streak going and there is more where this came from.
          </Animated.Text>
        </View>

        <Animated.View
          entering={FadeInDown.delay(STAGGER_MS * 3)
            .duration(380)
            .reduceMotion(ReduceMotion.System)}
          style={styles.actions}>
          <PrimaryButton
            label="Open it"
            onPress={() => {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              onClose();
            }}
          />
          <Pressable
            accessibilityRole="button"
            onPress={onClose}
            hitSlop={10}
            style={({ pressed }) => [styles.later, pressed && { opacity: 0.5 }]}>
            <Text style={[styles.laterText, { color: meter.caption }]}>Maybe later</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  grabber: { width: 40, height: 5, borderRadius: 3 },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  art: { width: 190, height: 190 },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: fonts.bold,
    letterSpacing: -0.7,
    textAlign: 'center',
  },
  blurb: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  actions: { alignSelf: 'stretch', gap: 14 },
  later: { alignSelf: 'center', paddingVertical: 4 },
  laterText: { fontSize: 15, fontFamily: fonts.semibold },
});
