import { Text } from 'react-native';

export type AnimatedNumberProps = {
  text: string;
  value: number;
  color: string;
  fontSize: number;
  fontFamily: string;
  /** Subset of SwiftUI's Font.Weight the app actually uses. */
  weight: 'semibold' | 'bold' | 'heavy';
  duration: number;
};

/** Android/web fallback for the iOS SwiftUI numeric-text transition. */
export function AnimatedNumber({
  text,
  color,
  fontSize,
  fontFamily,
}: AnimatedNumberProps) {
  // An explicit line height and no font padding: Android otherwise sizes the
  // line from the font's own metrics, which for SF Pro Rounded are tall enough
  // to clip the digits inside a fixed-height row.
  return (
    <Text style={{ color, fontSize, fontFamily, lineHeight: Math.round(fontSize * 1.15), includeFontPadding: false }}>
      {text}
    </Text>
  );
}
