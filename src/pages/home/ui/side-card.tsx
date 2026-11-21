import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, space } from '@/shared/config';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';

export type SideAction = { label: string; onPress: () => void };

export type SideCardProps = {
  title: string;
  body?: string;
  /** The card's own action, a grey button. */
  action?: SideAction;
  /** A second, quieter action beside it. */
  secondary?: SideAction;
  children?: ReactNode;
};

/** A secondary card under today's session: a headline, one line, and at most
 * two buttons that wrap under each other when the text is large. */
export function SideCard({ title, body, action, secondary, children }: SideCardProps) {
  return (
    <Card style={styles.card}>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      {body != null && <Text style={styles.body}>{body}</Text>}
      {children}
      {(action != null || secondary != null) && (
        <View style={styles.actions}>
          {action != null && <Button size="md" variant="secondary" label={action.label} onPress={action.onPress} />}
          {secondary != null && <Button size="md" variant="ghost" label={secondary.label} onPress={secondary.onPress} />}
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { gap: 6 },
  title: { ...fonts.semibold(20), color: colors.text },
  body: { ...fonts.regular(19), color: colors.text2 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: space.gap, marginTop: 10 },
});
