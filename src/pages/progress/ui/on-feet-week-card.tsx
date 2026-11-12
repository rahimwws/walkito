import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
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
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { ReplayMask } from '@/shared/ui/replay-mask';

import { formatDateKey, formatNumber } from '../model/format';
import { useDevOnFeetWeek } from '../model/on-feet-dev';
import { Card, useGrowIn } from './card';

/** The bars' height, and the room over them for the average's tag. */
const BARS_HEIGHT = 112;
const TAG_ROOM = 24;
const TICKS_HEIGHT = 22;
const TICK_WIDTH = 56;
/** The scale never tops out under this many hours, so a quiet week draws as
 * a quiet week rather than as seven tall bars. */
const SCALE_MIN_HOURS = 8;
/** A day with no reading, or none on foot: a short stub, not a gap. */
const STUB_HEIGHT = 4;

/**
 * "Your week on your feet": about how long a day, the last seven days as
 * bars with the average drawn across them, and the busiest day in a sentence.
 *
 * Time on the feet is an estimate (hours that carried real walking, or a
 * watch's stand hours), so the figure and the sentence say "about" and the
 * note under them says where it comes from. The bars are ink and today's is
 * teal: the accent says "this is time on foot, and this is today", never how
 * the day went. The average and the busiest day leave today out, since it is
 * still in progress (`onFeetWeek`).
 *
 * Before two days of readings the card says what will appear; when Health
 * was never asked it offers the same request the setup step makes
 * (`connectHealth`). Masked from recordings and never sent anywhere.
 */
export function OnFeetWeekCard() {
  const t = useT();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  // Redrawn whenever the pipeline writes the cache.
  useHealthSignals();
  const dev = useDevOnFeetWeek();
  const week = onFeetWeek(healthCache().days, todayKey());

  /** Whether the system's Health sheet has ever been shown: null until known.
   * Readings on file mean it was. */
  const [asked, setAsked] = useState<boolean | null>(healthCache().days.length > 0 ? true : null);
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
    // How the request went, as the setup step knows it. Never a reading.
    track('on_feet_connect_tapped', { outcome: result.outcome });
  };

  return (
    <ReplayMask>
      <Card title={t('progress.onFeet.title')}>
        {drawn ? (
          <Week week={week} />
        ) : offerConnect ? (
          <>
            <Text style={[styles.body, { color: meter.label }]}>
              {android ? t('progress.onFeet.connectAndroid') : t('progress.onFeet.connectIos')}
            </Text>
            <View style={styles.action}>
              <Button3D
                size="md"
                align="start"
                loading={busy}
                label={android ? t('progress.onFeet.connectCtaAndroid') : t('progress.onFeet.connectCtaIos')}
                onPress={connect}
              />
            </View>
          </>
        ) : (
          <Text style={[styles.body, { color: meter.label }]}>{t('progress.onFeet.waiting')}</Text>
        )}
      </Card>
    </ReplayMask>
  );
}

/** The figure, the bars with their average, and the sentence. */
function Week({ week }: { week: OnFeetWeek }) {
  const t = useT();
  const language = useLanguage();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const teal = accents[scheme].teal.fill;
  const [width, setWidth] = useState(0);
  const grow = useGrowIn();
  const growStyle = useAnimatedStyle(() => ({ transform: [{ scaleY: grow.value }] }));

  const whole = (hours: number) => formatNumber(Math.round(hours), language, 0);
  const average = week.average ?? 0;
  const top = Math.max(SCALE_MIN_HOURS, ...week.days.map((day) => day.hours ?? 0));
  const n = week.days.length;
  const slot = width / n;
  // The morning chart's week, bar for bar: six tenths of a slot, 26 at most.
  const barW = Math.max(3, Math.min(26, slot * 0.6));
  const cx = (i: number) => i * slot + slot / 2;
  const heightOf = (hours: number) => Math.max(barW, (hours / top) * BARS_HEIGHT);
  const averageY = BARS_HEIGHT - (average / top) * BARS_HEIGHT;

  return (
    <>
      <View
        accessible
        accessibilityLabel={`${t('progress.onFeet.average', { hours: whole(average) })}. ${t('progress.onFeet.averageCaption')}`}>
        <Text style={[styles.figure, { color: meter.ink }]} numberOfLines={1} adjustsFontSizeToFit>
          {t('progress.onFeet.average', { hours: whole(average) })}
        </Text>
        <Text style={[styles.sub, { color: meter.caption }]}>{t('progress.onFeet.averageCaption')}</Text>
      </View>

      <View style={styles.chart} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
        {width > 0 && (
          <>
            <View style={styles.bars} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
              <Animated.View style={[StyleSheet.absoluteFill, styles.growFromBottom, growStyle]}>
                <Svg width={width} height={BARS_HEIGHT}>
                  {week.days.map((day, i) => {
                    if (day.hours == null || day.hours <= 0) {
                      return (
                        <Rect
                          key={day.date}
                          x={cx(i) - barW / 2}
                          y={BARS_HEIGHT - STUB_HEIGHT}
                          width={barW}
                          height={STUB_HEIGHT}
                          rx={STUB_HEIGHT / 2}
                          fill={meter.track}
                        />
                      );
                    }
                    const h = heightOf(day.hours);
                    return (
                      <Rect
                        key={day.date}
                        x={cx(i) - barW / 2}
                        y={BARS_HEIGHT - h}
                        width={barW}
                        height={h}
                        rx={barW / 2}
                        fill={day.today ? teal : meter.ink}
                        fillOpacity={day.today ? 1 : 0.32}
                      />
                    );
                  })}
                </Svg>
              </Animated.View>

              {/* The average across the week, drawn as the morning chart
                  draws its start line. */}
              <Svg width={width} height={BARS_HEIGHT} style={StyleSheet.absoluteFill} pointerEvents="none">
                <Line
                  x1={0}
                  x2={width}
                  y1={averageY}
                  y2={averageY}
                  stroke={meter.label}
                  strokeOpacity={0.7}
                  strokeWidth={1.5}
                  strokeDasharray="4 5"
                />
              </Svg>
              <View
                pointerEvents="none"
                style={[styles.tag, { backgroundColor: colors.card, top: Math.max(-TAG_ROOM + 2, averageY - 24) }]}>
                <Text style={[styles.tagText, { color: meter.label }]}>{t('progress.onFeet.avgTag')}</Text>
              </View>
            </View>

            <View style={styles.ticks} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
              {week.days.map((day, i) => (
                <Text
                  key={day.date}
                  numberOfLines={1}
                  style={[
                    styles.tick,
                    day.today ? styles.tickLit : null,
                    {
                      left: Math.max(0, Math.min(width - TICK_WIDTH, cx(i) - TICK_WIDTH / 2)),
                      color: day.today ? meter.ink : meter.label,
                    },
                  ]}>
                  {formatDateKey(day.date, language, 'weekday')}
                </Text>
              ))}
            </View>

            {/* Read out day by day, since the picture is the whole point. */}
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

      <View style={[styles.foot, { borderTopColor: meter.divider }]}>
        {week.busiest != null && week.busiest.hours != null && (
          <Text style={[styles.sentence, { color: meter.ink }]}>
            {t('progress.onFeet.busiest', {
              weekday: formatDateKey(week.busiest.date, language, 'weekdayName'),
              hours: whole(week.busiest.hours),
            })}
          </Text>
        )}
        <Text style={[styles.note, { color: meter.caption }]}>{t('progress.onFeet.note')}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  /** The shoes card's figure: a whole phrase in the heavy face. */
  figure: { ...fonts.heavy(30, -0.8), marginTop: 8 },
  sub: { ...fonts.medium(13), marginTop: 2 },
  chart: { marginTop: 6, paddingTop: TAG_ROOM },
  bars: { height: BARS_HEIGHT },
  growFromBottom: { transformOrigin: 'bottom' },
  tag: { position: 'absolute', right: 0, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8 },
  tagText: fonts.semibold(13),
  ticks: { height: TICKS_HEIGHT, marginTop: 8 },
  tick: { ...fonts.medium(13), position: 'absolute', width: TICK_WIDTH, textAlign: 'center' },
  tickLit: fonts.bold(13),
  a11yList: { position: 'absolute', width: 1, height: 1, opacity: 0 },
  foot: { marginTop: 14, paddingTop: 14, borderTopWidth: StyleSheet.hairlineWidth, gap: 8 },
  sentence: { ...fonts.medium(16), lineHeight: 22 },
  note: { ...fonts.medium(13), lineHeight: 18 },
  body: { ...fonts.medium(16), lineHeight: 22, marginTop: 10 },
  action: { marginTop: 14 },
});
