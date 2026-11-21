import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, radius } from '@/shared/config';

/** Bend's card: white, radius 20, a very soft shadow over the grey page. */
export const cardStyle = {
  backgroundColor: colors.surface,
  borderRadius: radius.card,
  borderCurve: 'continuous',
  boxShadow: '0px 4px 18px rgba(17, 17, 20, 0.07)',
} as const satisfies ViewStyle;

export function TodayCard({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({ card: cardStyle });
