import Share08Icon from '@hugeicons/core-free-icons/Share08Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import type { ReactNode } from 'react';
import { Share, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  CHECKPOINT_ICON,
  movesFor,
  PROGRAM,
  RETEST_MINUTES,
  RETEST_TESTS,
  SESSION_META,
  blockName,
  dateFor,
  levelLabel,
  painFor,
  requestRetest,
  retestBranch,
  useRetest,
  type DayStatus,
  type ProgramDay,
  type Retest,
  type SessionKind,
  type ZoneKey,
} from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT, type Key, type Language } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { ActionButton } from '@/shared/ui/action-button';

/**
 * "Tue, Aug 12" — enough to place a day without spelling out a year.
 *
 * From `Intl` rather than from two arrays of English abbreviations. It already
 * knows every locale's weekday and month names, and it knows the conventions a
 * hand-written table gets wrong: Russian and Spanish lowercase theirs, and they
 * put the day before the month. See the same note in `shared/ui/streak-week`.
 */
function shortDate(ms: number, language: Language): string {
  return new Intl.DateTimeFormat(language, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date(ms));
}

/** The 0–10 scale a logged pain reading is out of. */
const PAIN_MAX = 10;

/** Named by the catalogue rather than by `SESSION_META.label`, which is still
 * English — the program list names a day's work with these same keys, and the
 * two screens must not call one session two things. */
const KIND_KEY = {
  strength: 'pages.program.kindStrength',
  mobility: 'pages.program.kindMobility',
  balance: 'pages.program.kindBalance',
  recovery: 'pages.program.kindRecovery',
} as const satisfies Record<SessionKind, Key>;

/** Likewise for the measured zones, in place of `ZONE_META.label`. */
const ZONE_KEY = {
  calf: 'pages.program.zoneCalf',
  arch: 'pages.program.zoneArch',
  balance: 'pages.program.zoneBalance',
  symmetry: 'pages.program.zoneSymmetry',
} as const satisfies Record<ZoneKey, Key>;

/**
 * What one day on the path holds, presented as a native form sheet.
 *
 * The day and its status arrive as route params rather than being re-derived
 * here: the path already decided what it was showing, and a sheet that
 * recomputed it could disagree with the node the user just tapped.
 */
export function DayPage() {
  const params = useLocalSearchParams<{ day: string; status: DayStatus }>();
  const insets = useSafeAreaInsets();
  const t = useT();

  const number = Number(params.day);
  const day = PROGRAM[number - 1];
  const status = params.status ?? 'upcoming';
  /** Subscribed, not read once: a retest taken while this sheet is behind the
   * player has to land in it, or the user comes back to a day that says it was
   * never measured. */
  const stored = useRetest(number);

  const sheet = [styles.sheet, { paddingBottom: Math.max(insets.bottom, 20) + 8 }];

  // A day number that is not in the program — a stale link, or a param that
  // never parsed. It used to render nothing at all, which raised an empty sheet
  // over the app and left the user to work out that it was not still loading.
  if (day == null) {
    return (
      <View style={sheet}>
        <Note>{t('pages.day.notInPlan')}</Note>
      </View>
    );
  }

  return (
    <View style={sheet}>
      {day.checkpoint ? (
        <CheckpointBody day={day} status={status} retest={stored} />
      ) : (
        <SessionBody day={day} status={status} />
      )}
    </View>
  );
}

/** A retest: the only place levels are shown in full. */
function CheckpointBody({
  day,
  status,
  retest,
}: {
  day: ProgramDay;
  status: DayStatus;
  retest?: Retest;
}) {
  const router = useRouter();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme].orange;
  const t = useT();
  const language = useLanguage();

  /** "3 tests · 4 minutes", each half already agreed with its own count. */
  const meta = t('pages.day.retestMeta', {
    tests: t('pages.program.testCount', { count: RETEST_TESTS }),
    minutes: t('pages.program.minuteCount', { count: RETEST_MINUTES }),
  });

  /**
   * Which of the four things this sheet says.
   *
   * The ordering is the part that can be wrong, so it lives in the entity as a
   * function of its own and is asserted there. In particular a retest day the
   * user walked past has no result and is not in the future, and must say so
   * rather than falling through to "opens on…" — which would promise a
   * measurement that already came and went.
   */
  const branch = retestBranch({ hasResult: retest != null, status });

  if (branch === 'result' && retest != null) {
    return (
      <>
        <Header
          eyebrow={t('pages.day.retestEyebrow', { day: day.day })}
          title={t('pages.day.blockTitle', { block: day.block, name: blockName(day.block) })}
          subtitle={t('pages.day.retestResultSubtitle')}
        />
        <View>
          {retest.rows.map((row, index) => (
            <View
              key={row.zone}
              style={[
                styles.row,
                index > 0 && { borderTopWidth: 1, borderTopColor: meter.track },
              ]}>
              <Text style={[styles.rowLabel, { color: colors.foreground }]}>
                {t(ZONE_KEY[row.zone])}
              </Text>
              <View style={styles.rowValues}>
                <Text style={[styles.rowMeasure, { color: meter.unit }]}>{row.from}</Text>
                <Text style={[styles.rowArrow, { color: meter.unit }]}>→</Text>
                <Text style={[styles.rowMeasure, { color: colors.foreground }]}>{row.to}</Text>
              </View>
              <Text style={[styles.rowLevel, { color: meter.label }]}>{levelLabel(row)}</Text>
            </View>
          ))}
        </View>
        <ActionButton
          label={t('pages.day.share')}
          icon={Share08Icon}
          onPress={() => {
            Share.share({
              message: retest.rows
                .map((r) =>
                  t('pages.day.shareRow', {
                    zone: t(ZONE_KEY[r.zone]),
                    from: r.from,
                    to: r.to,
                    level: levelLabel(r),
                  }),
                )
                .join('\n'),
            });
          }}
        />
      </>
    );
  }

  if (branch === 'today') {
    return (
      <>
        <Header
          eyebrow={t('session.day', { day: day.day })}
          title={t('pages.day.retestTodayTitle')}
          subtitle={meta}
        />
        <Note>{t('pages.day.retestTodayNote')}</Note>
        <ActionButton
          label={t('pages.day.startRetest')}
          onPress={() => {
            // The tests run in the player, which is a screen — this sheet is
            // sized to its own contents and cannot hold one. So the ask is left
            // for the program underneath, which stays mounted the whole time,
            // and the sheet gets out of its way.
            requestRetest(day.day);
            router.back();
          }}
        />
      </>
    );
  }

  // Behind the user, with nothing written down. Without this the sheet fell
  // through to the copy below and told someone looking at a checkpoint three
  // weeks gone that it opens on a date already in the past.
  if (branch === 'not-completed') {
    return (
      <>
        <Header
          eyebrow={t('pages.day.retestEyebrow', { day: day.day })}
          title={t('pages.day.blockTitle', { block: day.block, name: blockName(day.block) })}
        />
        <View style={styles.iconNote}>
          <HugeiconsIcon icon={CHECKPOINT_ICON} size={22} color={accent.fill} strokeWidth={1.9} />
          <Text style={[styles.noteText, { color: meter.caption }]}>
            {t('pages.day.retestMissed')}
          </Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Header
        eyebrow={t('session.day', { day: day.day })}
        title={t('pages.day.retestClosesBlock', { block: day.block })}
        subtitle={meta}
      />
      <View style={styles.iconNote}>
        <HugeiconsIcon icon={CHECKPOINT_ICON} size={22} color={accent.fill} strokeWidth={1.9} />
        <Text style={[styles.noteText, { color: meter.caption }]}>
          {t('pages.day.retestOpensOn', {
            date: shortDate(dateFor(day.index, Date.now()), language),
          })}
        </Text>
      </View>
    </>
  );
}

/** An ordinary training day, past or ahead. */
function SessionBody({ day, status }: { day: ProgramDay; status: DayStatus }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const kind = SESSION_META[day.kind];
  const accent = accents[scheme][kind.accent];
  const behind = status === 'done' || status === 'rest';
  // Subscribed to the language, not merely reading it: `movesFor` resolves the
  // exercise titles through whatever language is current at the moment it is
  // called, so without a `useT()` here the list would keep the words it was
  // first rendered with after a switch.
  const t = useT();
  const language = useLanguage();

  return (
    <>
      <Header
        eyebrow={shortDate(dateFor(day.index, Date.now()), language)}
        title={t('pages.day.sessionTitle', {
          kind: t(KIND_KEY[day.kind]),
          minutes: t('session.minutes', { count: day.minutes }),
        })}
        subtitle={t('pages.day.sessionSubtitle', {
          day: day.day,
          block: day.block,
          name: blockName(day.block),
        })}
      />

      {status === 'missed' ? (
        <Note>{t('pages.day.missedNote')}</Note>
      ) : (
        <View style={styles.list}>
          {movesFor(day).map((exercise) => (
            <View key={exercise} style={styles.listRow}>
              <HugeiconsIcon icon={kind.icon} size={20} color={accent.fill} strokeWidth={1.9} />
              <Text style={[styles.listLabel, { color: colors.foreground }]}>{exercise}</Text>
            </View>
          ))}
        </View>
      )}

      {behind && (
        <View style={[styles.painRow, { borderTopColor: meter.track }]}>
          <Text style={[styles.painLabel, { color: meter.label }]}>
            {t('pages.day.painLabel')}
          </Text>
          <Text style={[styles.painValue, { color: colors.foreground }]}>
            {painFor(day.index)}
            <Text style={[styles.painMax, { color: meter.unit }]}>
              {' '}
              {t('pages.day.painOutOf', { max: PAIN_MAX })}
            </Text>
          </Text>
        </View>
      )}

      {status === 'upcoming' && (
        // No way to start early, and no lock icon either — the day simply has
        // a date, and that date is not today.
        <Note>
          {t('pages.day.comesUpOn', { date: shortDate(dateFor(day.index, Date.now()), language) })}
        </Note>
      )}
    </>
  );
}

function Header({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <View style={styles.header}>
      <Text style={[styles.eyebrow, { color: meter.label }]}>{eyebrow}</Text>
      <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
      {subtitle != null && (
        <Text style={[styles.subtitle, { color: meter.caption }]}>{subtitle}</Text>
      )}
    </View>
  );
}

function Note({ children }: { children: ReactNode }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  return <Text style={[styles.noteText, { color: meter.caption }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  sheet: {
    paddingTop: 22,
    paddingHorizontal: 20,
    gap: 18,
  },
  header: {
    gap: 3,
  },
  eyebrow: {
    fontSize: 13,
    fontFamily: fonts.semibold,
    letterSpacing: 0.2,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: fonts.regular,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    gap: 12,
  },
  rowLabel: {
    width: 88,
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
  rowValues: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rowMeasure: {
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  rowArrow: {
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  rowLevel: {
    fontSize: 13,
    fontFamily: fonts.semibold,
  },
  list: {
    gap: 14,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  listLabel: {
    fontSize: 17,
    fontFamily: fonts.medium,
  },
  iconNote: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  noteText: {
    flex: 1,
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 21,
  },
  painRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 14,
  },
  painLabel: {
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  painValue: {
    fontSize: 22,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
  painMax: {
    fontSize: 14,
    fontFamily: fonts.medium,
  },
});
