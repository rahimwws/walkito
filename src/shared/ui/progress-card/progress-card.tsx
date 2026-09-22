import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { StyleSheet, Text, View } from 'react-native';

import { useT, type Key } from '@/shared/lib/i18n';
import { fonts } from '@/shared/config';
import { meterColors, type MeterColors } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { DeltaLabel, ScoreValue, TickBar } from '@/shared/ui/meter';

/** Ticks in the hero meter. Denser than a skill bar because this one spans the
 * full card width with no trailing score to leave room for. */
const TICK_COUNT = 35;

/**
 * Band vocabulary for a 0–100 score, widest band first. Bands are wide so a
 * label feels earned rather than incremental. Override via the `bands` prop
 * when a screen needs its own wording.
 */
export const DEFAULT_BANDS: readonly { min: number; label: Key }[] = [
  { min: 90, label: 'band.excellent' },
  { min: 75, label: 'band.strong' },
  { min: 60, label: 'band.steady' },
  { min: 0, label: 'band.building' },
] as const;

function bandFor(score: number, bands: readonly { min: number; label: Key }[]): Key | null {
  return bands.find((b) => score >= b.min)?.label ?? null;
}

const THEME = {
  light: {
    badgeBg: '#1C1C21',
    badgeText: '#FFFFFF',
    divider: '#E4E4E9',
  },
  dark: {
    badgeBg: '#F2F2F5',
    badgeText: '#111114',
    divider: 'rgba(255,255,255,0.12)',
  },
} as const;

export type ProgressStat = {
  value: string;
  /** Small suffix beside the value, e.g. "h" or "min". Omit for a bare number. */
  unit?: string;
  label: string;
};

export type ProgressCardProps = {
  /** 0–100, or null when there is nothing measured yet. */
  score: number | null;
  /** Change vs the previous period. Omit when there is no prior period. */
  scoreDelta?: number;
  /** Small caps label above the score. */
  eyebrow?: string;
  /** Caption under the meter, describing the period the score covers. */
  caption?: string;
  /** Totals rendered in the divided row beneath the hero. */
  stats?: readonly ProgressStat[];
  bands?: readonly { min: number; label: Key }[];
};

/** One stat: big value plus a muted label beneath. */
function Stat({ stat, theme }: { stat: ProgressStat; theme: MeterColors }) {
  return (
    <View style={styles.stat}>
      <View style={styles.statTop}>
        <Text style={[styles.statValue, { color: theme.ink }]}>{stat.value}</Text>
        {stat.unit ? <Text style={[styles.statUnit, { color: theme.unit }]}>{stat.unit}</Text> : null}
      </View>
      <Text style={[styles.statLabel, { color: theme.unit }]}>{stat.label}</Text>
    </View>
  );
}

/**
 * Hero score card: a big number with a band badge, a tick meter, and a row of
 * supporting totals beneath.
 *
 * Purely presentational — it derives nothing. Callers pass the score, the
 * delta, and whatever totals belong on their screen, so two screens showing
 * the same figure can't drift apart in how they compute it.
 */
export function ProgressCard({
  score,
  scoreDelta,
  eyebrow = 'SCORE',
  caption,
  stats = [],
  bands = DEFAULT_BANDS,
}: ProgressCardProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = meterColors[scheme];
  const t = useT();
  // Resolved here, not inside the JSX, so the band is looked up once.
  const band = score == null ? null : bandFor(score, bands);
  const chrome = THEME[scheme];
  const hasGlass = isLiquidGlassAvailable();

  const heroBody = (
    <>
      <Text style={[styles.eyebrow, { color: theme.label }]}>{eyebrow}</Text>
      <View style={styles.scoreRow}>
        <ScoreValue value={score} size={40} maxSize={18} />
        {score != null && (
          <View style={[styles.badge, { backgroundColor: chrome.badgeBg }]}>
            <Text style={[styles.badgeLabel, { color: chrome.badgeText }]}>
              {band == null ? '' : t(band)}
            </Text>
          </View>
        )}
      </View>
      <TickBar fill={score != null ? score / 100 : 0} tickCount={TICK_COUNT} height={20} />
      <View style={styles.metaRow}>
        <Text style={[styles.metaLabel, { color: theme.label }]}>{caption ?? t('card.last7Days')}</Text>
        {scoreDelta != null && scoreDelta !== 0 && (
          <DeltaLabel delta={scoreDelta} suffix="this week" />
        )}
      </View>
    </>
  );

  return (
    <View>
      {hasGlass ? (
        <GlassView
          glassEffectStyle="regular"
          style={[styles.hero, { backgroundColor: theme.glassTint }]}>
          {heroBody}
        </GlassView>
      ) : (
        <View style={[styles.hero, { backgroundColor: theme.solidFallback }]}>{heroBody}</View>
      )}

      {stats.length > 0 && (
        <View style={styles.momentum}>
          {stats.map((stat, i) => (
            <View key={stat.label} style={styles.momentumSlot}>
              {i > 0 && (
                <View style={[styles.momentumDivider, { backgroundColor: chrome.divider }]} />
              )}
              <Stat stat={stat} theme={theme} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 20,
    borderRadius: 30,
    borderCurve: 'continuous',
    overflow: 'hidden',
    gap: 14,
  },
  eyebrow: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 1,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -2,
  },
  badge: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderCurve: 'continuous',
  },
  badgeLabel: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 0.5,
    // Cased in the style rather than with `toUpperCase()`, so the catalogue
    // keeps the form a translator wrote and casing stays a display decision.
    textTransform: 'uppercase',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaLabel: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  momentum: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 2,
  },
  momentumSlot: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  statTop: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 3,
  },
  statValue: {
    fontSize: 21,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
  statUnit: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  momentumDivider: {
    width: 1,
    height: 34,
  },
});
