import { StyleSheet, Text, View } from 'react-native';

import { fonts } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';

import type { ChargeStop } from '../model/plans';
import { usePlansTheme } from './plans-theme';

/**
 * The chosen plan's first charges, on one rail with their real dates: for a
 * free trial, today (nothing to pay), the day the reminder comes and the day
 * of the first payment; for a lower first period, today's payment and the
 * regular price after it (`chargeTimeline`). Drawn only for a plan whose
 * store entry carries that offer for this customer, so it never promises a
 * week Apple will not give. The reminder it names is real: a trial bought on
 * the paywall lays it (`remindBeforeTrialEnds`).
 */
export function ChargeRail({ stops }: { stops: readonly ChargeStop[] }) {
  const t = useT();
  const language = useLanguage();
  const { PLUS, SHEET } = usePlansTheme();
  const day = new Intl.DateTimeFormat(language, { month: 'short', day: 'numeric' });
  const dayInYear = new Intl.DateTimeFormat(language, { month: 'short', day: 'numeric', year: 'numeric' });
  const thisYear = new Date(stops[0]?.at ?? 0).getFullYear();
  const dateOf = (at: number) => (new Date(at).getFullYear() === thisYear ? day : dayInYear).format(new Date(at));
  const last = stops.length - 1;
  return (
    <View style={[styles.wrap, { backgroundColor: SHEET.card }]}>
      <View style={[styles.track, { backgroundColor: PLUS.washEdge }]} />
      {stops.map((stop, i) => (
        <View key={stop.at} style={[styles.stop, i > 0 && i < last && styles.middle, i === last && i > 0 && styles.end]}>
          <View style={[styles.dot, { backgroundColor: i === 0 ? PLUS.accent : PLUS.washEdge }]} />
          <Text style={[styles.when, { color: SHEET.ink }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
            {i === 0 ? t('offer.timeline.today') : dateOf(stop.at)}
          </Text>
          <Text
            style={[styles.what, { color: SHEET.label }, i > 0 && i < last && styles.center, i === last && i > 0 && styles.right]}
            numberOfLines={2}
            maxFontSizeMultiplier={1.3}>
            {stop.text}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: 8,
    borderRadius: 18,
    borderCurve: 'continuous',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
  },
  // Through the dots' centres, from the first to the last.
  track: { position: 'absolute', top: 19, left: 20, right: 20, height: 2, borderRadius: 1 },
  stop: { flex: 1, alignItems: 'flex-start' },
  middle: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
  dot: { width: 12, height: 12, borderRadius: 6, marginBottom: 6 },
  when: fonts.bold(14),
  what: { ...fonts.medium(13), lineHeight: 16 },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
});
