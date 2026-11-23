import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, View } from 'react-native';

import { useT } from '@/shared/lib/i18n';
import { BigNumber, CardLabel, RoundButton } from '@/widgets/session-player';

import { CardFoot, CardHead, NUMBER_SCALE, ProgressCard } from './kit';

/**
 * "Days done this month" as one of BitePal's number cards: the count large,
 * the calendar as the round action, and the longest run under it. The whole
 * card opens the month sheet (#108).
 */
export function MonthCard({ count, longest, onOpen }: { count: number; longest: number; onOpen: () => void }) {
  const t = useT();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('sessionDone.month.a11y', { count })}
      accessibilityHint={t('progress.month.hint')}
      onPress={() => {
        void Haptics.selectionAsync();
        onOpen();
      }}
      style={({ pressed }) => pressed && styles.pressed}>
      <ProgressCard>
        <CardHead
          aside={
            <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
              <RoundButton icon={Calendar03Icon} label={t('progress.month.hint')} onPress={onOpen} size={64} tone="well" />
            </View>
          }>
          <CardLabel>{t('sessionDone.month.title')}</CardLabel>
          <BigNumber value={count} unit={t('sessionDone.month.unit', { count })} size={48} maxScale={NUMBER_SCALE} />
        </CardHead>
        {longest > 0 && <CardFoot>{t('progress.month.longest', { days: t('streak.dayCount', { count: longest }) })}</CardFoot>}
      </ProgressCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({ pressed: { opacity: 0.7 } });
