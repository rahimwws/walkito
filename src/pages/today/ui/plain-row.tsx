import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { colors, fonts, target, type AccentName } from '@/shared/config';
import type { FluentName } from '@/shared/ui/fluent-icon';

import { RoundArt } from './round-art';
import { TodayCard } from './today-card';

export type PlainRowProps = {
  title: string;
  detail?: string;
  /** A Fluent drawing in a coloured circle on the leading edge. */
  emoji?: FluentName;
  accent?: AccentName;
  /** The row itself opens something: a chevron on the trailing edge. */
  onPress?: () => void;
  /** A second action as a text button under the words ("Change time"). */
  action?: { label: string; onPress: () => void };
  children?: ReactNode;
};

/** One row on its own white card, Bend-style: a coloured circle, words, an
 * optional chevron and an optional text action. */
export function PlainRow({ title, detail, emoji, accent = 'violet', onPress, action, children }: PlainRowProps) {
  /** At large text sizes the circle goes above the words, which keep the width. */
  const stacked = useWindowDimensions().fontScale >= 1.35;
  const body = (
    <View style={styles.body}>
      {emoji != null && !stacked && <RoundArt emoji={emoji} accent={accent} size={48} />}
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {detail != null && <Text style={styles.detail}>{detail}</Text>}
      </View>
      {onPress != null && <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={colors.text3} strokeWidth={2} />}
    </View>
  );
  return (
    <TodayCard style={styles.card}>
      {emoji != null && stacked && <RoundArt emoji={emoji} accent={accent} size={48} />}
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
    </TodayCard>
  );
}

const styles = StyleSheet.create({
  card: { paddingHorizontal: 16, paddingVertical: 14, gap: 6 },
  body: { flexDirection: 'row', alignItems: 'center', gap: 14, minHeight: target.min },
  text: { flex: 1, gap: 2 },
  title: { ...fonts.semibold(19), color: colors.text },
  detail: { ...fonts.regular(17), color: colors.text2 },
  action: { alignSelf: 'flex-start', minHeight: target.min, justifyContent: 'center' },
  actionText: { ...fonts.semibold(17), color: colors.accent },
  pressed: { opacity: 0.5 },
});
