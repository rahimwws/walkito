import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors } from '@/shared/config';

/** BitePal's card: white, radius 24, flat on the light grey page. */
export const cardStyle = {
  backgroundColor: colors.surface,
  borderRadius: 24,
  borderCurve: 'continuous',
} as const satisfies ViewStyle;

export function TodayCard({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({ card: { ...cardStyle, padding: 20 } });
