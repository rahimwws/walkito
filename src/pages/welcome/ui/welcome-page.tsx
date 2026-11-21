import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, ReduceMotion, useReducedMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts } from '@/shared/config';
import { colors, space } from '@/shared/config/tokens';
import { useT } from '@/shared/lib/i18n';
import { PrimaryButton } from '@/shared/ui/primary-button';

const PHOTO = require('@assets/exercise-posters/heel_raise_double.webp');

/** How long each line under the headline stays before the next one. */
const PHRASE_MS = 2800;
/** The photo's share of the window, so the copy and the button keep room. */
const PHOTO_SHARE = 0.5;

export type WelcomePageProps = {
  /** Fired when the user takes the screen's one action, "Let's go". */
  onDone: () => void;
};

/**
 * The first screen: a real photograph of bare feet on a wooden floor, the
 * wordmark, one promise and one button.
 *
 * The copy sits below the photo on the light page, so nothing has to be laid
 * over the picture to stay readable. Everything scrolls, so the largest text
 * size pushes the button down rather than cutting a line off.
 *
 * "Train ~~support~~ your feet": the struck word is the promise the category
 * makes and this one does not. The line under it rotates through four reasons
 * to care; with Reduce Motion on it holds the first one.
 */
export function WelcomePage({ onDone }: WelcomePageProps) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const reduceMotion = useReducedMotion();

  const phrases = [
    t('pages.welcome.phrase1'),
    t('pages.welcome.phrase2'),
    t('pages.welcome.phrase3'),
    t('pages.welcome.phrase4'),
  ];
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => setPhrase((i) => (i + 1) % phrases.length), PHRASE_MS);
    return () => clearInterval(id);
  }, [reduceMotion, phrases.length]);

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom, 16) }]}>
      <Image
        source={PHOTO}
        resizeMode="cover"
        style={[styles.photo, { height: Math.round(height * PHOTO_SHARE) }]}
        accessibilityIgnoresInvertColors
      />

      <View style={styles.body}>
        <Text style={styles.wordmark} accessibilityRole="header">
          {t('splash.wordmark')}
        </Text>

        <Text style={styles.headline}>
          {t('pages.welcome.headline')} <Text style={styles.struck}>{t('pages.welcome.struck')}</Text>{' '}
          {t('pages.welcome.kept')}
        </Text>

        <Animated.Text
          key={phrase}
          entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
          style={styles.phrase}>
          {phrases[phrase]}
        </Animated.Text>
      </View>

      <View style={styles.spacer} />

      <View style={styles.action}>
        <PrimaryButton label={t('pages.welcome.cta')} onPress={onDone} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { flexGrow: 1 },
  photo: { width: '100%', backgroundColor: colors.surface2 },
  body: {
    paddingHorizontal: space.screen,
    paddingTop: space.section,
    gap: space.gap,
  },
  wordmark: { ...fonts.bold(34, -0.4), color: colors.text },
  headline: { ...fonts.bold(28, -0.4), color: colors.text },
  struck: { textDecorationLine: 'line-through', color: colors.text3 },
  phrase: { ...fonts.regular(19), color: colors.text2 },
  spacer: { flexGrow: 1, minHeight: space.section },
  action: { paddingHorizontal: space.screen },
});
