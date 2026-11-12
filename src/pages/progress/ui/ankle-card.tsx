import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AnkleMeasure,
  AnkleSteps,
  remeasureAt,
  remeasureDue,
  saveAnkle,
  useAnkleRecords,
  useCanMeasure,
  type AnkleRecord,
} from '@/entities/foot-check';
import { PRIMARY, accents, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import { Card, DeltaChip } from './card';

/** The most measurements the history shows: the last six, as the tests do. */
const SHOWN = 6;
/** The bars' height at the tallest reading. */
const BAR_SPACE = 64;

function dayMonth(at: number, language: string): string {
  return new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short' }).format(new Date(at));
}

/**
 * "Ankle bend": how far each ankle bends, measured by the phone on the shin,
 * every time it has been. The latest two figures large, the change since the
 * first under them, a pair of bars per measurement (left, right), and the day
 * they are measured again; on that day, or before the first, the button that
 * measures them from here.
 *
 * Degrees only: no normal range, no goal line. Colour says which side a bar
 * is, never whether it is good.
 */
export function AnkleCard({ nextTestAt }: { nextTestAt: number | null }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const records = useAnkleRecords();
  const canMeasure = useCanMeasure();
  const [measuring, setMeasuring] = useState(false);

  // A phone that cannot measure, with nothing measured, has nothing to show.
  if (records.length === 0 && canMeasure !== true) return null;

  const first = records[0];
  const latest = records[records.length - 1];
  const again = latest != null ? remeasureAt(latest.at, nextTestAt) : null;
  const due = latest == null || (again != null && remeasureDue(again, Date.now()));
  const change = first != null && latest != null && records.length > 1 ? latest.left + latest.right - first.left - first.right : null;

  return (
    <Card
      title={t('footCheck.card.ankle')}
      aside={
        change != null ? (
          <DeltaChip
            label={change === 0 ? t('progress.noChange') : t('footCheck.progress.since', {
              delta: `${change > 0 ? '+' : '-'}${Math.abs(change)}`,
              date: dayMonth(first.at, language),
            })}
            improving={change > 0}
          />
        ) : undefined
      }>
      <View {...REPLAY_MASK}>
        {latest == null ? (
          <Text style={[styles.empty, { color: meter.caption }]}>{t('footCheck.progress.empty')}</Text>
        ) : (
          <>
            <View style={styles.figures}>
              {(['left', 'right'] as const).map((side) => (
                <View key={side} style={styles.figure} accessible>
                  <Text style={[styles.side, { color: meter.caption }]}>
                    {t(side === 'left' ? 'onboarding.test.left' : 'onboarding.test.right')}
                  </Text>
                  <Text style={[styles.value, { color: meter.ink }]}>{t('footCheck.degrees', { value: latest[side] })}</Text>
                </View>
              ))}
            </View>
            <Text style={[styles.caption, { color: meter.caption }]}>
              {records.length === 1
                ? t('footCheck.progress.start')
                : t('footCheck.progress.last', { date: dayMonth(latest.at, language) })}
            </Text>
            {records.length > 1 && <History records={records.slice(-SHOWN)} />}
          </>
        )}
      </View>

      {due && canMeasure === true ? (
        <PrimaryButton
          label={t('footCheck.progress.measure')}
          onPress={() => setMeasuring(true)}
          style={styles.measureButton}
        />
      ) : (
        again != null && (
          <View style={[styles.again, { backgroundColor: meter.iconTile }]}>
            <FluentIcon name="calendar" size={22} />
            <Text style={[styles.againText, { color: colors.foreground }]}>
              {t('footCheck.card.again', {
                date: new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(new Date(again)),
              })}
            </Text>
          </View>
        )
      )}

      <MeasureSheet visible={measuring} onClose={() => setMeasuring(false)} />
    </Card>
  );
}

/** A pair of bars per measurement, left then right, on one scale. */
function History({ records }: { records: readonly AnkleRecord[] }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const language = useLanguage();
  const t = useT();
  const left = accents[scheme].violet;
  const right = accents[scheme].teal;
  const top = Math.max(1, ...records.flatMap((r) => [r.left, r.right])) * 1.1;
  const height = (value: number) => Math.max(4, (value / top) * BAR_SPACE);

  return (
    <View style={styles.history}>
      <View style={styles.legend}>
        {[
          { label: t('onboarding.test.left'), color: left.fill },
          { label: t('onboarding.test.right'), color: right.fill },
        ].map((item) => (
          <View key={item.label} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: item.color }]} />
            <Text style={[styles.legendText, { color: meter.caption }]}>{item.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bars}>
        {records.map((record, i) => {
          const last = i === records.length - 1;
          return (
            <View key={record.at} style={styles.col}>
              <View style={styles.pair}>
                <View style={[styles.bar, { height: height(record.left), backgroundColor: last ? left.fill : left.track }]} />
                <View style={[styles.bar, { height: height(record.right), backgroundColor: last ? right.fill : right.track }]} />
              </View>
              <Text style={[styles.date, { color: meter.caption }]} numberOfLines={1}>
                {dayMonth(record.at, language)}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

/** Measuring again from Progress: the same three lines and the same arc as
 * the onboarding, then "Done" keeps the pair. */
function MeasureSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const [sides, setSides] = useState<{ left: number | null; right: number | null }>({ left: null, right: null });

  const close = () => {
    setSides({ left: null, right: null });
    onClose();
  };

  return (
    <Modal animationType="slide" presentationStyle="pageSheet" visible={visible} onRequestClose={close}>
      <View style={[styles.sheet, { backgroundColor: colors.background }]} {...REPLAY_MASK}>
        <View style={[styles.grabber, { backgroundColor: meter.track }]} />
        <ScrollView contentContainerStyle={styles.sheetContent}>
          <Text accessibilityRole="header" style={[styles.sheetTitle, { color: colors.foreground }]}>
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
        <View style={[styles.sheetFooter, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
          {sides.left != null && sides.right != null ? (
            <PrimaryButton
              label={t('footCheck.progress.done')}
              onPress={() => {
                if (sides.left == null || sides.right == null) return;
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                saveAnkle(sides.left, sides.right);
                // That it happened, never what it read.
                track('ankle_measured', { place: 'progress' });
                close();
              }}
            />
          ) : (
            <Pressable accessibilityRole="button" onPress={close} hitSlop={10} style={styles.later}>
              <Text style={[styles.laterText, { color: meter.label }]}>{t('testday.close')}</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  empty: { ...fonts.medium(16), lineHeight: 22, marginTop: 8 },
  figures: { flexDirection: 'row', gap: 24, marginTop: 10 },
  figure: { gap: 2 },
  side: fonts.semibold(13),
  value: { ...fonts.heavy(34, -1), fontVariant: ['tabular-nums'] },
  caption: { ...fonts.medium(14), marginTop: 4 },
  history: { marginTop: 16, gap: 10 },
  legend: { flexDirection: 'row', gap: 14 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendText: fonts.semibold(13),
  bars: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 },
  col: { flex: 1, alignItems: 'center', gap: 6 },
  pair: { flexDirection: 'row', alignItems: 'flex-end', gap: 3, height: BAR_SPACE },
  bar: { width: 12, borderRadius: 6 },
  date: fonts.medium(13),
  measureButton: { marginTop: 16 },
  again: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  againText: { ...fonts.semibold(15, -0.2), lineHeight: 20, flex: 1 },
  sheet: { flex: 1 },
  grabber: { alignSelf: 'center', width: 40, height: 5, borderRadius: 3, marginTop: 8 },
  sheetContent: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 24, gap: 18 },
  sheetTitle: { ...fonts.heavy(28, -0.7) },
  sheetFooter: { paddingHorizontal: 20, paddingTop: 8 },
  later: { alignSelf: 'center', paddingVertical: 14 },
  laterText: fonts.semibold(16),
});
