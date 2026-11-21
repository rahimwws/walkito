import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts, target } from '@/shared/config';

export type PlainRowProps = {
  title: string;
  detail?: string;
  /** The row itself opens something: a chevron on the trailing edge. */
  onPress?: () => void;
  /** A second action as a text button under the words ("Change time"). */
  action?: { label: string; onPress: () => void };
  children?: ReactNode;
};

/** One plain row under a hairline (NTC #10): words, an optional chevron, an
 * optional text action. No box around it. */
export function PlainRow({ title, detail, onPress, action, children }: PlainRowProps) {
  const body = (
    <View style={styles.body}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {detail != null && <Text style={styles.detail}>{detail}</Text>}
      </View>
      {onPress != null && <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={colors.text2} strokeWidth={2} />}
    </View>
  );
  return (
    <View style={styles.row}>
      {onPress != null ? (
        <Pressable
          accessibilityRole="button"
          onPress={() => {
            void Haptics.selectionAsync();
            onPress();
          }}
          style={({ pressed }) => pressed && styles.pressed}>
          {body}
        </Pressable>
      ) : (
        body
      )}
      {children}
      {action != null && (
        <Pressable
          accessibilityRole="button"
          onPress={action.onPress}
          hitSlop={4}
          style={({ pressed }) => [styles.action, pressed && styles.pressed]}>
          <Text style={styles.actionText}>{action.label}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
    paddingVertical: 16,
    gap: 8,
  },
  body: { flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: target.min },
  text: { flex: 1, gap: 2 },
  title: { ...fonts.semibold(19), color: colors.text },
  detail: { ...fonts.regular(19), color: colors.text2 },
  action: { alignSelf: 'flex-start', minHeight: target.min, justifyContent: 'center' },
  actionText: { ...fonts.semibold(17), color: colors.text, textDecorationLine: 'underline' },
  pressed: { opacity: 0.5 },
});
