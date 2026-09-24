import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { StyleSheet, Text, View } from 'react-native';

import { MAX_LEVEL, type Retest, type RetestRow, type ZoneKey } from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { DeltaLabel, TickBar } from '@/shared/ui/meter';

const ZONE_KEY: Record<ZoneKey, Key> = {
  calf: 'pages.program.zoneCalf',
  arch: 'pages.program.zoneArch',
  balance: 'pages.program.zoneBalance',
  symmetry: 'pages.program.zoneSymmetry',
};

/** What the number in each tile is counting. Symmetry is not a unit, it is a
 * gap, and the tile says so rather than leaving a bare "17%" to be guessed at. */
const UNIT_KEY: Record<ZoneKey, Key> = {
  calf: 'widgets.retestUnitReps',
  arch: 'widgets.retestUnitSeconds',
  balance: 'widgets.retestUnitSeconds',
  symmetry: 'widgets.retestUnitPercent',
};

function figure(text: string): number {
  const n = Number.parseFloat(text);
  return Number.isFinite(n) ? n : 0;
}

/**
 * The change in a zone, signed so that up is always better.
 *
 * Symmetry is the gap between the legs, so a smaller figure is the
 * improvement; its sign is flipped here so the shared delta label — which
 * colours only an improving change — reads it the right way round.
 */
function improvement(row: RetestRow): number {
  const change = figure(row.to) - figure(row.from);
  return row.zone === 'symmetry' ? -change : change;
}

export type RetestResultProps = {
  retest: Retest;
  /** The user's own goal, said back — null when they gave none. */
  goalLine: string | null;
};

/**
 * A retest, read back.
 *
 * Built from the Progress screen's own pieces — the glass hero surface, the
 * tick meter, the delta label — so a result looks like it belongs to the same
 * record it is being written into rather than like a form confirmation. One
 * tile per zone: the figure large, its level on the meter, and the change since
 * last time. A first retest has nothing to change from, and says it is the
 * starting point instead of printing a row of zeroes.
 */
export function RetestResult({ retest, goalLine }: RetestResultProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const glass = isLiquidGlassAvailable();
  const first = retest.rows.every((row) => row.from === row.to);

  return (
    <View style={styles.wrap}>
      {goalLine != null && (
        <Tile glass={glass} tint={meter.glassTint} fallback={meter.solidFallback}>
          <Text style={[styles.eyebrow, { color: meter.label }]}>{t('widgets.retestYourGoal')}</Text>
          <Text style={[styles.goal, { color: colors.foreground }]}>{goalLine}</Text>
        </Tile>
      )}

      <View style={styles.grid}>
        {retest.rows.map((row) => {
          const delta = improvement(row);
          return (
            <Tile
              key={row.zone}
              glass={glass}
              tint={meter.glassTint}
              fallback={meter.solidFallback}
              style={styles.cell}>
              <Text style={[styles.eyebrow, { color: meter.label }]}>{t(ZONE_KEY[row.zone])}</Text>
              <View style={styles.valueRow}>
                <Text style={[styles.value, { color: meter.ink }]}>{Math.round(figure(row.to))}</Text>
                <Text style={[styles.unit, { color: meter.unit }]}>{t(UNIT_KEY[row.zone])}</Text>
              </View>
              {row.zone === 'symmetry' && (
                <Text style={[styles.note, { color: meter.unit }]} numberOfLines={1}>
                  {t('widgets.retestGapNote')}
                </Text>
              )}
              <TickBar fill={row.level / MAX_LEVEL} tickCount={16} height={14} tickWidth={3} />
              <View style={styles.metaRow}>
                <View style={[styles.badge, { backgroundColor: meter.track }]}>
                  <Text style={[styles.badgeText, { color: meter.ink }]}>
                    {t('widgets.retestLevel', { level: row.level })}
                  </Text>
                </View>
                {first ? null : <DeltaLabel delta={Math.round(delta)} hideZero />}
              </View>
            </Tile>
          );
        })}
      </View>

      <Text style={[styles.caption, { color: meter.caption }]}>
        {first ? t('widgets.retestFirstCaption') : t('widgets.retestResultBlurb')}
      </Text>
    </View>
  );
}

function Tile({
  glass,
  tint,
  fallback,
  style,
  children,
}: {
  glass: boolean;
  tint: string;
  fallback: string;
  style?: object;
  children: React.ReactNode;
}) {
  return glass ? (
    <GlassView glassEffectStyle="regular" style={[styles.tile, { backgroundColor: tint }, style]}>
      {children}
    </GlassView>
  ) : (
    <View style={[styles.tile, { backgroundColor: fallback }, style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tile: {
    padding: 16,
    borderRadius: 26,
    borderCurve: 'continuous',
    overflow: 'hidden',
    gap: 10,
  },
  cell: {
    // Two to a row, with the gap between them.
    width: '47.5%',
    flexGrow: 1,
  },
  eyebrow: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  goal: {
    fontSize: 17,
    lineHeight: 23,
    fontFamily: fonts.semibold,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5,
  },
  value: {
    fontSize: 38,
    fontFamily: fonts.bold,
    letterSpacing: -0.5,
  },
  unit: {
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  note: {
    fontSize: 12,
    fontFamily: fonts.medium,
    marginTop: -8,
  },
  caption: {
    fontSize: 14,
    fontFamily: fonts.regular,
    textAlign: 'center',
    marginTop: 4,
  },
});
