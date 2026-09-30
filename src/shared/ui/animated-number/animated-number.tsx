import { Text } from 'react-native';

import { fonts } from '@/shared/config';

export type AnimatedNumberProps = {
  text: string;
  value: number;
  color: string;
  fontSize: number;
  /**
   * Subset of SwiftUI's Font.Weight the app actually uses. The one weight
   * prop serves both renderers: SwiftUI's rounded system font on iOS, and the
   * matching `fonts.*` face in the fallback.
   */
  weight: 'semibold' | 'bold' | 'heavy';
  duration: number;
};

/** Android/web fallback for the iOS SwiftUI numeric-text transition. */
export function AnimatedNumber({ text, color, fontSize, weight }: AnimatedNumberProps) {
  // An explicit line height and no font padding: Android otherwise sizes the
  // line from the font's own metrics, which are tall enough to clip the digits
  // inside a fixed-height row.
  return (
    <Text
      style={[
        fonts[weight](fontSize),
        { color, lineHeight: Math.round(fontSize * 1.15), includeFontPadding: false },
      ]}>
      {text}
    </Text>
  );
}
