import Add01Icon from '@hugeicons/core-free-icons/Add01Icon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AnkleMeasure,
  AnkleSteps,
  remeasureAt,
  remeasureDue,
  saveAnkle,
  selfCheck,
  useAnkleRecords,
  useCanMeasure,
  type AnkleRecord,
} from '@/entities/foot-check';
import { bitepal, bodyColors, colors, fonts } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { BigNumber, CardLabel, Capsule, RoundButton, TITLE_SCALE } from '@/widgets/session-player';

import { CardFoot, CardHead, Chip, NUMBER_SCALE, ProgressCard, SLOT_SCALE, useLargeText } from './kit';

/** The most measurements the history shows: the last four, as the tests do. */
const SHOWN = 4;
/** The history's bars at the tallest reading. */
const PAIR_HEIGHT = 96;
/** The two sides by colour: which side a bar is, never whether it is good. */
const SIDE_COLOR = { left: bodyColors.ankle, right: bodyColors.arch } as const;

function dayMonth(at: number, language: string): string {
  return new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short' }).format(new Date(at));
}

/**
 * "Ankle bend" as a BitePal card: the two ankles' latest degrees large side by
 * side, the round + that measures them when they are due, the change since the
 * first measurement, and every measurement as a pair of thin bars. On top,
 * when the onboarding asked it, which heel lifted first, in her own words.
 * Degrees only: no normal range and no goal line.
 */
export function AnkleCard({ nextTestAt }: { nextTestAt: number | null }) {
  const t = useT();
  const language = useLanguage();
  const large = useLargeText();
  const records = useAnkleRecords();
  const canMeasure = useCanMeasure();
  const [measuring, setMeasuring] = useState(false);
  const [heel] = useState(() => selfCheck()?.heel ?? null);

  if (records.length === 0 && canMeasure !== true) return null;

  const first = records[0];
  const latest = records[records.length - 1];
  const again = latest != null ? remeasureAt(latest.at, nextTestAt) : null;
  const due = latest == null || (again != null && remeasureDue(again, Date.now()));
  const change =
    first != null && latest != null && records.length > 1 ? latest.left + latest.right - first.left - first.right : null;
  const measure = due && canMeasure === true;

  return (
    <ProgressCard>
      <View style={styles.body} {...REPLAY_MASK}>
        <CardHead
          aside={
            measure ? (
              <RoundButton icon={Add01Icon} label={t('footCheck.progress.measure')} onPress={() => setMeasuring(true)} size={64} tone="well" />
            ) : undefined
          }>
          <CardLabel>{t('footCheck.card.ankle')}</CardLabel>
          {latest == null ? (
            <Text style={styles.empty}>{t('footCheck.progress.empty')}</Text>
          ) : (
            <View style={[styles.figures, large && styles.figuresStacked]}>
              {(['left', 'right'] as const).map((side) => (
                <View key={side} accessible>
                  <Text style={styles.side}>{t(side === 'left' ? 'onboarding.test.left' : 'onboarding.test.right')}</Text>
                  <BigNumber value={t('footCheck.degrees', { value: latest[side] })} size={40} maxScale={NUMBER_SCALE} />
                </View>
              ))}
            </View>
          )}
        </CardHead>
        {heel === 'left' || heel === 'right' || heel === 'both' ? (
          <Text style={styles.heel}>
            {t(heel === 'left' ? 'footCheck.progress.heelLeft' : heel === 'right' ? 'footCheck.progress.heelRight' : 'footCheck.progress.heelBoth')}
          </Text>
        ) : null}
        {change != null && first != null && (
          <Chip
            label={
              change === 0
                ? t('progress.noChange')
                : t('footCheck.progress.since', {
                    delta: (change > 0 ? '+' : '-') + Math.abs(change),
                    date: dayMonth(first.at, language),
                  })
            }
            improving={change > 0}
          />
        )}
        {latest != null && (
          <CardFoot>
            {records.length === 1 ? t('footCheck.progress.start') : t('footCheck.progress.last', { date: dayMonth(latest.at, language) })}
          </CardFoot>
        )}
        {records.length > 1 && <History records={records.slice(-SHOWN)} />}
        {!measure && again != null && (
          <View style={styles.again}>
            <FluentIcon name="calendar" size={26} />
            <Text style={styles.againText}>
              {t('footCheck.card.again', {
                date: new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(new Date(again)),
              })}
            </Text>
          </View>
        )}
      </View>
      <MeasureSheet visible={measuring} onClose={() => setMeasuring(false)} />
    </ProgressCard>
  );
}

/** A pair of thin bars per measurement, left then right, on one scale. */
function History({ records }: { records: readonly AnkleRecord[] }) {
  const t = useT();
  const language = useLanguage();
  const top = Math.max(1, ...records.flatMap((r) => [r.left, r.right])) * 1.1;
  const sides = [
    { key: 'left', label: t('onboarding.test.left') },
    { key: 'right', label: t('onboarding.test.right') },
  ] as const;

  return (
    <View style={styles.history}>
      <View style={styles.legend} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        {sides.map((side) => (
          <View key={side.key} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: SIDE_COLOR[side.key] }]} />
            <Text style={styles.legendText}>{side.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.columns}>
        {records.map((record, i) => (
          <View
            key={record.at}
            style={styles.column}
            accessible
            accessibilityLabel={
              dayMonth(record.at, language) +
              ': ' +
              sides.map((side) => side.label + ' ' + t('footCheck.degrees', { value: record[side.key] })).join(', ')
            }>
            <View style={styles.pair}>
              {sides.map((side) => (
                <View key={side.key} style={styles.track}>
                  <View
                    style={[
                      styles.fill,
                      {
                        height: Math.max(8, (record[side.key] / top) * PAIR_HEIGHT),
                        backgroundColor: SIDE_COLOR[side.key],
                        opacity: i === records.length - 1 ? 1 : 0.45,
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
            <Text style={styles.entryDate} numberOfLines={1} maxFontSizeMultiplier={SLOT_SCALE}>
              {dayMonth(record.at, language)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

/** Measuring again from Progress: the same three lines and the same arc as
 * the onboarding, then "Done" keeps the pair. */
function MeasureSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const insets = useSafeAreaInsets();
  const t = useT();
  const [sides, setSides] = useState<{ left: number | null; right: number | null }>({ left: null, right: null });

  const close = () => {
    setSides({ left: null, right: null });
    onClose();
  };

  return (
    <Modal animationType="slide" presentationStyle="pageSheet" visible={visible} onRequestClose={close}>
      <View style={styles.sheet} {...REPLAY_MASK}>
        <ScrollView contentContainerStyle={styles.sheetContent}>
          <RoundButton icon={Cancel01Icon} label={t('testday.close')} onPress={close} size={48} />
          <Text accessibilityRole="header" style={styles.sheetTitle} maxFontSizeMultiplier={TITLE_SCALE}>
            {t('footCheck.ankle.title')}
          </Text>
          <AnkleSteps />
          <AnkleMeasure
            left={sides.left}
            right={sides.right}
            onResult={(side, degrees) => setSides((prev) => ({ ...prev, [side]: degrees }))}
            onReset={() => setSides({ left: null, right: null })}
          />
        </ScrollView>
        {sides.left != null && sides.right != null && (
          <View style={[styles.sheetFooter, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
            <Capsule
              label={t('footCheck.progress.done')}
              onPress={() => {
                if (sides.left == null || sides.right == null) return;
                void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                saveAnkle(sides.left, sides.right);
                track('ankle_measured', { place: 'progress' });
                close();
              }}
            />
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  body: { gap: 14 },
  empty: { ...fonts.medium(19), color: colors.text2, marginTop: 4 },
  figures: { flexDirection: 'row', gap: 28, marginTop: 4 },
  figuresStacked: { flexDirection: 'column', gap: 8 },
  side: { ...fonts.semibold(17), color: colors.text3 },
  heel: { ...fonts.semibold(19), color: colors.text },
  history: { gap: 12 },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 12, height: 12, borderRadius: 6 },
  legendText: { ...fonts.semibold(17), color: colors.text2 },
  columns: { flexDirection: 'row', gap: 8 },
  column: { flex: 1, alignItems: 'center', gap: 8 },
  pair: { flexDirection: 'row', gap: 6, height: PAIR_HEIGHT, alignItems: 'flex-end' },
  track: { width: 10, height: PAIR_HEIGHT, borderRadius: 5, backgroundColor: bitepal.track, justifyContent: 'flex-end', overflow: 'hidden' },
  fill: { width: 10, borderRadius: 5 },
  entryDate: { ...fonts.medium(17), color: colors.text2 },
  again: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderCurve: 'continuous',
    backgroundColor: bitepal.well,
  },
  againText: { ...fonts.semibold(17), color: colors.text, flex: 1 },
  sheet: { flex: 1, backgroundColor: bitepal.page },
  sheetContent: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 24, gap: 18 },
  sheetTitle: { ...fonts.heavy(30, -0.6), color: colors.text },
  sheetFooter: { paddingHorizontal: 20, paddingTop: 8 },
});
