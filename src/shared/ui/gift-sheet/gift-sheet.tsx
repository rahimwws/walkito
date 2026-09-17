import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Modal, Pressable, Share, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  ReduceMotion,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  REFERRAL_DISCOUNT_PERCENT,
  claimCode,
  referralsAvailable,
  useReferral,
} from '@/entities/referral';
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
 * The invite, opened from the capsule in the header.
 *
 * A sheet rather than a screen: handing over a code is an aside, and covering
 * Home to do it would make it feel like leaving what you were doing. The page
 * stays visible behind it, which is also what makes closing it cost nothing.
 *
 * It is dismissible by design — unlike the purchase sheet, nothing here has to
 * be answered.
 *
 * The code is claimed when the sheet opens rather than at sign-up: most people
 * never open this, and a code nobody has seen is a row nobody needs.
 */
export function GiftSheet({ visible, onClose }: GiftSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();

  const referral = useReferral();
  /** Shown in place of the code for the moment it takes to arrive. */
  const [asking, setAsking] = useState(false);
  /** Swaps the button's label for a beat, so a copy that changes nothing on
   * screen still says it happened. */
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!visible || !referralsAvailable || referral.code != null) return;
    setAsking(true);
    void claimCode().finally(() => setAsking(false));
  }, [visible, referral.code]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  const code = referral.code;
  const message = `Use my code ${code} in Walkito and we both get ${REFERRAL_DISCOUNT_PERCENT}% off.`;

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
            Invite a friend
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(STAGGER_MS * 2)
              .duration(380)
              .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
              .reduceMotion(ReduceMotion.System)}
            style={[styles.blurb, { color: meter.caption }]}>
            {referralsAvailable
              ? `They get ${REFERRAL_DISCOUNT_PERCENT}% off. So do you.`
              : 'Invites are not available in this build.'}
          </Animated.Text>

          {referralsAvailable && (
            <Animated.View
              entering={FadeInDown.delay(STAGGER_MS * 2.5)
                .duration(380)
                .reduceMotion(ReduceMotion.System)}
              style={[styles.codeBox, { backgroundColor: meter.track }]}>
              {/* Wide letter spacing and a fixed slot per character: this is
                  read off one screen and typed into another, and four letters
                  set as ordinary words are four letters people mistype. */}
              <Text style={[styles.code, { color: colors.foreground }]}>
                {code ?? (asking ? '····' : '—')}
              </Text>
            </Animated.View>
          )}
        </View>

        <Animated.View
          entering={FadeInDown.delay(STAGGER_MS * 3)
            .duration(380)
            .reduceMotion(ReduceMotion.System)}
          style={styles.actions}>
          <PrimaryButton
            label={copied ? 'Copied' : 'Share code'}
            onPress={() => {
              if (code == null) return;
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              void Share.share({ message });
            }}
          />
          {code != null && (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Copy code ${code}`}
              onPress={() => {
                void Clipboard.setStringAsync(code);
                Haptics.selectionAsync();
                setCopied(true);
              }}
              hitSlop={10}
              style={({ pressed }) => [styles.later, pressed && { opacity: 0.5 }]}>
              <Text style={[styles.laterText, { color: meter.caption }]}>
                {copied ? 'Copied to clipboard' : 'Copy instead'}
              </Text>
            </Pressable>
          )}
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
  codeBox: {
    marginTop: 8,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  code: {
    fontSize: 34,
    fontFamily: fonts.heavy,
    letterSpacing: 8,
    // The tracking is applied to the right of every character including the
    // last, which reads as the block sitting off-centre. Half of it back.
    marginRight: -8,
  },
  actions: { alignSelf: 'stretch', gap: 14 },
  later: { alignSelf: 'center', paddingVertical: 4 },
  laterText: { fontSize: 15, fontFamily: fonts.semibold },
});
