import { Image, StyleSheet, Text, View, type ImageSourcePropType } from 'react-native';
import Animated, { FadeIn, ReduceMotion } from 'react-native-reanimated';

import { fonts, meterColors } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The picture a foot check is answered against: a cut-out drawn straight on
 * the page, in either scheme, with no card behind it. Where the foot runs off
 * the frame the asset fades itself out, so there is no edge to see. Captions,
 * when given, sit under each half of it.
 */
export function QuestionPhoto({ image, captions }: { image: ImageSourcePropType; captions?: readonly string[] }) {
  const meter = meterColors[useColorScheme()];
  return (
    <Animated.View entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)} style={styles.root}>
      {/* The frame holds the ratio and the image fills it with an explicit
          width and height: a bundled image otherwise takes its pixel size,
          which outranks a ratio or insets, and was drawn 1:1 and clipped. */}
      <View style={styles.frame}>
        <Image source={image} style={styles.image} resizeMode="contain" accessibilityIgnoresInvertColors />
      </View>
      {captions != null && captions.length > 0 && (
        <View style={styles.captions}>
          {captions.map((caption) => (
            <Text key={caption} style={[styles.caption, { color: meter.caption }]} numberOfLines={1}>
              {caption}
            </Text>
          ))}
        </View>
      )}
    </Animated.View>
  );
}

/** The line under the answers: what the picture is and is not. */
export function QuestionNote({ text }: { text: string }) {
  const meter = meterColors[useColorScheme()];
  return <Text style={[styles.note, { color: meter.caption }]}>{text}</Text>;
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 14,
  },
  // Wider than the 3:2 picture, so it is drawn a little smaller with empty
  // page either side: four answers then fit under it on a 6.1-inch phone
  // without scrolling.
  frame: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  captions: {
    flexDirection: 'row',
    // The 3:2 picture drawn in a 16:9 frame leaves (1 - 1.5 * 9/16) / 2 of the
    // width empty on each side; the halves are the picture's, not the frame's.
    paddingHorizontal: '7.8%',
    marginTop: 4,
  },
  caption: {
    flex: 1,
    ...fonts.medium(13),
    textAlign: 'center',
  },
  note: {
    ...fonts.regular(13),
    lineHeight: 18,
    marginTop: 12,
  },
});
