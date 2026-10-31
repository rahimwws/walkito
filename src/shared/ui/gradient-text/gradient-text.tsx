import MaskedView from '@react-native-masked-view/masked-view';
import { StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

export type GradientTextProps = {
  children: string;
  /** The text's own style: face, size, alignment. Its colour is ignored. */
  textStyle: StyleProp<TextStyle>;
  /** Two or more colours, left to right. */
  colors: readonly string[];
  style?: StyleProp<ViewStyle>;
  numberOfLines?: number;
};

/**
 * Text filled with a gradient: the line a sheet wants read first.
 *
 * Laid out once, invisibly, to give the box its size (any number of lines),
 * then drawn again as the mask over a gradient of the same size, the way the
 * offer's gold line is. Still: nothing here moves, so nothing runs while it
 * sits on screen.
 */
export function GradientText({ children, textStyle, colors, style, numberOfLines }: GradientTextProps) {
  const text = (color: string) => (
    <Text style={[textStyle, { color }]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
  const stops = colors.map((color, i) => `${color} ${Math.round((i / Math.max(1, colors.length - 1)) * 100)}%`);
  return (
    <View style={style} accessible accessibilityRole="text" accessibilityLabel={children}>
      <View style={styles.hidden} importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
        {text('transparent')}
      </View>
      <MaskedView style={StyleSheet.absoluteFill} maskElement={text('#000')}>
        <View style={[StyleSheet.absoluteFill, { experimental_backgroundImage: `linear-gradient(90deg, ${stops.join(', ')})` }]} />
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: { opacity: 0 },
});
