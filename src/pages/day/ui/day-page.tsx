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
  ZONE_META,
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
} from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { ActionButton } from '@/shared/ui/action-button';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;
const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

/** "Tue, Aug 12" — enough to place a day without spelling out a year. */
function shortDate(ms: number): string {
  const d = new Date(ms);
  return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

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
        <Note>That day isn’t part of your plan.</Note>
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
          eyebrow={`Retest · Day ${day.day}`}
          title={`Block ${day.block} · ${blockName(day.block)}`}
          subtitle="Where you stood at the end of the block"
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
                {ZONE_META[row.zone].label}
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
          label="Share"
          icon={Share08Icon}
          onPress={() => {
            Share.share({
              message: retest.rows
                .map(
                  (r) =>
                    `${ZONE_META[r.zone].label}: ${r.from} → ${r.to} (${levelLabel(r)})`,
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
          eyebrow={`Day ${day.day}`}
          title="Time to check your progress"
          subtitle={`${RETEST_TESTS} tests · ${RETEST_MINUTES} minutes`}
        />
        <Note>
          Nothing to train today. The tests measure where the block left you, and they are the
          only thing that moves a level.
        </Note>
        <ActionButton
          label="Start retest"
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
          eyebrow={`Retest · Day ${day.day}`}
          title={`Block ${day.block} · ${blockName(day.block)}`}
        />
        <View style={styles.iconNote}>
          <HugeiconsIcon icon={CHECKPOINT_ICON} size={22} color={accent.fill} strokeWidth={1.9} />
          <Text style={[styles.noteText, { color: meter.caption }]}>
            This retest wasn’t completed. Levels held from the last one.
          </Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Header
        eyebrow={`Day ${day.day}`}
        title={`Retest · closes Block ${day.block}`}
        subtitle={`${RETEST_TESTS} tests · ${RETEST_MINUTES} minutes`}
      />
      <View style={styles.iconNote}>
        <HugeiconsIcon icon={CHECKPOINT_ICON} size={22} color={accent.fill} strokeWidth={1.9} />
        <Text style={[styles.noteText, { color: meter.caption }]}>
          Opens on {shortDate(dateFor(day.index, Date.now()))}. Levels hold still until then.
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

  return (
    <>
      <Header
        eyebrow={shortDate(dateFor(day.index, Date.now()))}
        title={`${kind.label} · ${day.minutes} min`}
        subtitle={`Day ${day.day} · Block ${day.block} · ${blockName(day.block)}`}
      />

      {status === 'missed' ? (
        <Note>
          No session logged. Nothing to make up — the program runs on dates, so the next day is
          the next day.
        </Note>
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
          <Text style={[styles.painLabel, { color: meter.label }]}>Pain that day</Text>
          <Text style={[styles.painValue, { color: colors.foreground }]}>
            {painFor(day.index)}
            <Text style={[styles.painMax, { color: meter.unit }]}> / 10</Text>
          </Text>
        </View>
      )}

      {status === 'upcoming' && (
        // No way to start early, and no lock icon either — the day simply has
        // a date, and that date is not today.
        <Note>Comes up on {shortDate(dateFor(day.index, Date.now()))}.</Note>
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
