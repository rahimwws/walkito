import { memo } from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { FLUENT_ICONS, type FluentName } from './icons';

/** An onboarding answer card's emoji: inside the row's 36pt of content, so a
 * card with one is as tall as a card without. Pass `size` anywhere else. */
const DEFAULT_SIZE = 32;

export type FluentIconProps = {
  name: FluentName;
  size?: number;
  /** On the box the drawing sits in: a margin, a mirror, an opacity. */
  style?: StyleProp<ViewStyle>;
};

/**
 * One Fluent emoji (`FLUENT_ICONS`), drawn as published: its own colours, no
 * tint and no tile behind it. Content art, never a control's glyph: the
 * buttons, chevrons and states around it stay Hugeicons.
 *
 * Decorative: the row, card or tile it leads reads its own label, so the
 * drawing is hidden from screen readers. The emoji keeps its colours on a
 * selected surface too; selection is said by the surface, never by recolouring
 * the art.
 *
 * `SvgXml` parses its string once per mount (it memoises on the string), and
 * `memo` spares a list re-render from asking again.
 */
export const FluentIcon = memo(function FluentIcon({ name, size = DEFAULT_SIZE, style }: FluentIconProps) {
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[{ width: size, height: size }, style]}>
      <SvgXml xml={FLUENT_ICONS[name]} width={size} height={size} />
    </View>
  );
});
