import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';

import {
  ON_FEET_WEEK_MIN_DAYS,
  connectHealth,
  healthAccess,
  healthCache,
  onFeetWeek,
  onHealthAsked,
  useHealthSignals,
  type OnFeetWeek,
} from '@/entities/health';
import { todayKey } from '@/entities/program';
import { bitepal, bodyColors, colors, fonts } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { ReplayMask } from '@/shared/ui/replay-mask';
import { BigNumber, CardLabel, Capsule } from '@/widgets/session-player';

import { formatDateKey, formatNumber } from '../model/format';
import { useDevOnFeetWeek } from '../model/on-feet-dev';
import { CardFoot, CardHead, IconDisc, NUMBER_SCALE, ProgressCard, SLOT_SCALE, SubRow } from './kit';

const BARS_HEIGHT = 112;
const TAG_ROOM = 30;
const TICKS_HEIGHT = 28;
const TICK_WIDTH = 48;
/** The scale never tops out under this many hours, so a quiet week draws as
 * a quiet week rather than as seven tall bars. */
const SCALE_MIN_HOURS = 8;
const STUB_HEIGHT = 4;
const TONE = bodyColors.calf;

/**
 * "Your week on your feet" as BitePal's steps card (#99): about how long a day
 * as the big number, today's steps from Health under it with the shoe on its
 * round icon, then the last seven days as thin bars with the average across
 * them, today's in its colour, and the busiest day in a sentence. An estimate,
 * so it says "about" and where it comes from. Before two days of readings it
 * says what will appear; when Health was never asked it offers the request the
 * setup makes. Masked from recordings and never sent anywhere.
 */
export function OnFeetCard() {
  const t = useT();
  const language = useLanguage();
  useHealthSignals();
  const dev = useDevOnFeetWeek();
  const days = healthCache().days;
  const today = todayKey();
  const week = onFeetWeek(days, today);
  const steps = days.find((day) => day.date === today)?.steps ?? null;

  const [asked, setAsked] = useState<boolean | null>(days.length > 0 ? true : null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let alive = true;
    void healthAccess().then((access) => {
      if (alive) setAsked(access !== 'never');
    });
    const off = onHealthAsked(() => setAsked(true));
    return () => {
      alive = false;
      off();
    };
  }, []);

  const drawn = (!__DEV__ || dev == null) && week.readings >= ON_FEET_WEEK_MIN_DAYS;
  const offerConnect = __DEV__ && dev != null ? dev === 'connect' : asked === false;
  const android = Platform.OS === 'android';

  const connect = async () => {
    if (busy) return;
    setBusy(true);
    const result = await connectHealth();
    setBusy(false);
    if (result.outcome !== 'unavailable') setAsked(true);
    track('on_feet_connect_tapped', { outcome: result.outcome });
  };

  return (
    <ReplayMask>
      <ProgressCard>
        {drawn ? (
          <Week week={week} steps={steps} />
        ) : (
          <>
            <CardHead aside={<IconDisc name="shoe" tone={TONE} size={64} />}>
              <CardLabel>{t('progress.onFeet.title')}</CardLabel>
              <Text style={styles.body}>
                {offerConnect
                  ? android
                    ? t('progress.onFeet.connectAndroid')
                    : t('progress.onFeet.connectIos')
                  : t('progress.onFeet.waiting')}
              </Text>
            </CardHead>
            {steps != null && <SubRow label={t('progress.onFeet.stepsToday')} value={formatNumber(steps, language, 0)} />}
            {offerConnect && (
              <Capsule
                label={android ? t('progress.onFeet.connectCtaAndroid') : t('progress.onFeet.connectCtaIos')}
                onPress={connect}
                disabled={busy}
              />
            )}
          </>
        )}
      </ProgressCard>
    </ReplayMask>
  );
}

function Week({ week, steps }: { week: OnFeetWeek; steps: number | null }) {
  const t = useT();
  const language = useLanguage();
  const [width, setWidth] = useState(0);
  const whole = (hours: number) => formatNumber(Math.round(hours), language, 0);
  const average = week.average ?? 0;
  const top = Math.max(SCALE_MIN_HOURS, ...week.days.map((day) => day.hours ?? 0));
  const n = week.days.length;
  const slot = width / n;
  const barW = Math.max(3, Math.min(14, slot * 0.36));
  const cx = (i: number) => i * slot + slot / 2;
  const heightOf = (hours: number) => Math.max(barW, (hours / top) * BARS_HEIGHT);
  const averageY = BARS_HEIGHT - (average / top) * BARS_HEIGHT;

  return (
    <>
      <View accessible accessibilityLabel={t('progress.onFeet.average', { hours: whole(average) }) + '. ' + t('progress.onFeet.averageCaption')}>
        <CardHead
          aside={
            <IconDisc name="foot" tone={TONE} size={64} />
          }>
          <CardLabel>{t('progress.onFeet.title')}</CardLabel>
          <BigNumber value={t('progress.onFeet.average', { hours: whole(average) })} size={40} maxScale={NUMBER_SCALE} />
          <Text style={styles.caption}>{t('progress.onFeet.averageCaption')}</Text>
        </CardHead>
      </View>
      {steps != null && (
        <SubRow
          label={t('progress.onFeet.stepsToday')}
          value={formatNumber(steps, language, 0)}
          icon={<IconDisc name="shoe" tone={TONE} size={48} />}
        />
      )}

      <View style={styles.chart} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
        {width > 0 && (
          <>
            <View style={styles.bars} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
              <Svg width={width} height={BARS_HEIGHT}>
                {week.days.map((day, i) => (
                  <Rect key={'t' + day.date} x={cx(i) - barW / 2} y={0} width={barW} height={BARS_HEIGHT} rx={barW / 2} fill={bitepal.track} />
                ))}
                {week.days.map((day, i) => {
                  const h = day.hours == null || day.hours <= 0 ? STUB_HEIGHT : heightOf(day.hours);
                  return (
                    <Rect
                      key={day.date}
                      x={cx(i) - barW / 2}
                      y={BARS_HEIGHT - h}
                      width={barW}
                      height={h}
                      rx={Math.min(barW, h) / 2}
                      fill={day.today ? TONE : colors.text3}
                      fillOpacity={day.today ? 1 : 0.55}
                    />
                  );
                })}
                <Line x1={0} x2={width} y1={averageY} y2={averageY} stroke={colors.text3} strokeWidth={1.5} strokeDasharray="4 5" />
              </Svg>
              <View pointerEvents="none" style={[styles.tag, { top: Math.max(-TAG_ROOM + 2, averageY - 30) }]}>
                <Text style={styles.tagText} maxFontSizeMultiplier={SLOT_SCALE}>
                  {t('progress.onFeet.avgTag')}
                </Text>
              </View>
            </View>
            <View style={styles.ticks} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
              {week.days.map((day, i) => (
                <Text
                  key={day.date}
                  numberOfLines={1}
                  maxFontSizeMultiplier={SLOT_SCALE}
                  style={[styles.tick, day.today && styles.tickLit, { left: Math.max(0, Math.min(width - TICK_WIDTH, cx(i) - TICK_WIDTH / 2)) }]}>
                  {formatDateKey(day.date, language, 'weekday')}
                </Text>
              ))}
            </View>
            <View
              style={styles.a11yList}
              accessible
              accessibilityLabel={week.days
                .map((day) => {
                  const weekday = formatDateKey(day.date, language, 'weekdayName');
                  return day.hours == null
                    ? t('progress.onFeet.dayEmptyA11y', { weekday })
                    : t('progress.onFeet.dayA11y', { weekday, hours: whole(day.hours) });
                })
                .join('. ')}
            />
          </>
        )}
      </View>

      {week.busiest != null && week.busiest.hours != null && (
        <Text style={styles.sentence}>
          {t('progress.onFeet.busiest', {
            weekday: formatDateKey(week.busiest.date, language, 'weekdayName'),
            hours: whole(week.busiest.hours),
          })}
        </Text>
      )}
      <CardFoot>{t('progress.onFeet.note')}</CardFoot>
    </>
  );
}

const styles = StyleSheet.create({
  body: { ...fonts.medium(19), color: colors.text2, marginTop: 4 },
  caption: { ...fonts.medium(17), color: colors.text3 },
  chart: { paddingTop: TAG_ROOM },
  bars: { height: BARS_HEIGHT },
  tag: { position: 'absolute', left: 0, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, backgroundColor: colors.surface },
  tagText: { ...fonts.semibold(17), color: colors.text3 },
  ticks: { height: TICKS_HEIGHT, marginTop: 8 },
  tick: { ...fonts.medium(17), color: colors.text3, position: 'absolute', width: TICK_WIDTH, textAlign: 'center' },
  tickLit: { ...fonts.bold(17), color: colors.text },
  a11yList: { position: 'absolute', width: 1, height: 1, opacity: 0 },
  sentence: { ...fonts.medium(19), color: colors.text },
});
