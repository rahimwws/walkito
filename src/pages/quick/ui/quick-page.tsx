import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EXERCISE_LIST, currentDay, doseFor, doseSeconds, painOn, useProgramState } from '@/entities/program';
import { useHealthSignals } from '@/entities/health';
import { askForPlans, browsingLapsed, clearBrowsingLapsed, useEntitled, useLookingAround } from '@/entities/purchase';
import {
  PROTOCOLS,
  PROTOCOL_ICONS,
  clearProtocolRequest,
  protocolById,
  recommendProtocol,
  useProtocolRequest,
  type Protocol,
} from '@/entities/protocols';
import {
  CHROME_MAX_FONT_SCALE,
  accents,
  bitepal,
  bodyColors,
  colors,
  fonts,
  parts,
  space,
  target,
  type BodyPart,
} from '@/shared/config';
import { useT, type Translate } from '@/shared/lib/i18n';
import { useTabBarClearance } from '@/shared/lib/tab-bar';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { MetaChip } from '@/shared/ui/meta-chip';
import { PartIcon } from '@/shared/ui/part-icon';
import { CardLabel, MoveCircle, TITLE_SCALE, bodyPartOf, cardStyle, soft } from '@/widgets/session-player';

import { Hex, HexTile } from './hex-tile';

const PARTS: readonly BodyPart[] = ['heel', 'arch', 'calf', 'ankle', 'toes'];
/** Big numbers and titles stop growing here, so they never break mid-word. */
const BIG_SCALE = 1.7;
const PHOTO = 56;
const PLAY = 64;

type Move = { id: string; part: BodyPart | null; seconds: number };

/**
 * The Exercises tab, as BitePal's home cards and awards (#28, #102): the
 * routine that suits right now as a card with a big title and a round play
 * button, the other situations as coloured hexagons that open their routine,
 * the five parts of the foot and leg as hexagons that filter the moves, and
 * every move as a row with its picture in a circle of its part's colour, how
 * long it takes and the part it works. A move opens its sheet, which starts
 * nothing.
 */
export function QuickPage() {
  const t = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const clearance = useTabBarClearance();
  const { width, fontScale } = useWindowDimensions();
  const entitled = useEntitled();
  const [part, setPart] = useState<BodyPart | null>(null);

  // Subscribed rather than read once: logging pain on Home while this tab is
  // mounted has to change what is featured here.
  useProgramState();
  const health = useHealthSignals();

  /**
   * Which routine leads, worked out from the clock and today's log. The run
   * comes from the health cache, never from a query here: this tab must never
   * be the thing that asks for a HealthKit permission.
   */
  const now = new Date();
  const featured = protocolById(
    recommendProtocol(
      {
        painToday: painOn(currentDay()),
        checkedInToday: painOn(currentDay()) != null,
        lastRunEndedAt: health.lastRunEndedAt,
        hour: now.getHours(),
        weekday: now.getDay(),
      },
      now.getTime(),
    ),
  );
  const situations = PROTOCOLS.filter((protocol) => protocol.id !== featured.id);

  // Looking around without buying, the free routines are locked too: only
  // Day 1 is open before a purchase.
  const looking = useLookingAround();
  const locked = (protocol: Protocol) => !entitled && (!protocol.free || looking);

  const openProtocol = (protocol: Protocol) => {
    if (locked(protocol)) {
      // Somebody whose subscription ended and who is browsing read-only gets
      // the expiry screen back, which sells the same plans: `/offer` is not a
      // route for them.
      if (browsingLapsed()) clearBrowsingLapsed();
      else if (looking) askForPlans('routine');
      else router.push('/offer');
      return;
    }
    router.push({ pathname: '/routine/[id]', params: { id: protocol.id } });
  };

  /** A routine asked for from elsewhere (the plan, an email link) opens as a tap here would, lock included. */
  const asked = useProtocolRequest();
  useEffect(() => {
    if (asked == null) return;
    clearProtocolRequest();
    openProtocol(protocolById(asked));
    // Only the request: `openProtocol` is recreated every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asked]);

  const moves = useMemo<Move[]>(
    () =>
      EXERCISE_LIST.map((e) => ({
        id: e.id,
        part: bodyPartOf(e.id),
        seconds: doseSeconds(doseFor(e.id)),
      })),
    [],
  );
  const counts = PARTS.reduce(
    (all, p) => ({ ...all, [p]: moves.filter((m) => m.part === p).length }),
    {} as Record<BodyPart, number>,
  );
  const shown = part == null ? moves : moves.filter((m) => m.part === part);

  // Inside the page's gutter and the card's padding.
  const inner = width - 2 * space.screen - 2 * PAD;
  const huge = fontScale >= 2;
  const partCols = huge ? 1 : fontScale >= 1.35 ? 3 : 5;
  const situationCols = huge ? 1 : 2;
  const basis = (cols: number) => (inner - GAP * (cols - 1)) / cols;

  return (
    <View style={styles.screen}>
      <ScrollView
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 16,
          paddingHorizontal: space.screen,
          paddingBottom: clearance + 28,
          gap: 12,
        }}>
        <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={2}>
          {t('tabs.exercises')}
        </Text>

        <Featured
          protocol={featured}
          locked={locked(featured)}
          large={fontScale >= 1.35}
          onPress={() => openProtocol(featured)}
        />

        <View style={styles.card}>
          <CardLabel>{t('quick.situations')}</CardLabel>
          <View style={styles.grid}>
            {situations.map((protocol) => {
              const color = accents.light[protocol.accent].fill;
              const isLocked = locked(protocol);
              return (
                <HexTile
                  key={protocol.id}
                  layout={huge ? 'row' : 'grid'}
                  role="open"
                  style={{ width: basis(situationCols) }}
                  title={t(protocol.titleKey)}
                  duration={t('quick.minutes', { count: protocol.minutes })}
                  accessibilityLabel={
                    isLocked
                      ? `${t(protocol.titleKey)}, ${t('quick.locked')}`
                      : `${t(protocol.titleKey)}, ${t('quick.minutes', { count: protocol.minutes })}`
                  }
                  onPress={() => openProtocol(protocol)}
                  hex={
                    <Hex size={72} fill={soft(color, 0.2)} rim={soft(color, 0.42)}>
                      {isLocked ? (
                        <HugeiconsIcon icon={SquareLock02Icon} size={30} color={colors.text2} strokeWidth={2} />
                      ) : (
                        <FluentIcon name={PROTOCOL_ICONS[protocol.id]} size={36} />
                      )}
                    </Hex>
                  }
                />
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <CardLabel>{t('quick.bodyParts')}</CardLabel>
          <View style={styles.grid} accessibilityRole="radiogroup">
            {PARTS.map((p) => (
              <HexTile
                key={p}
                layout={huge ? 'row' : 'grid'}
                role="filter"
                selected={part === p}
                style={{ width: basis(partCols) }}
                title={t(`home.today.part.${p}`)}
                badge={counts[p]}
                accessibilityLabel={t('home.today.partMoves', {
                  part: t(`home.today.part.${p}`),
                  count: counts[p],
                })}
                onPress={() => setPart(part === p ? null : p)}
                hex={
                  <Hex
                    size={huge ? 64 : Math.min(60, basis(partCols))}
                    fill={parts[p].soft}
                    rim={soft(bodyColors[p], 0.42)}
                    selected={part === p}>
                    <PartIcon part={p} size={36} disc={false} />
                  </Hex>
                }
              />
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <View style={[styles.listHead, huge && styles.listHeadHuge]}>
            <View style={styles.listTitle}>
              <Text style={styles.section} accessibilityRole="header" maxFontSizeMultiplier={BIG_SCALE}>
                {part == null ? t('quick.allMoves') : t(`home.today.part.${part}`)}
              </Text>
              <Text style={styles.count}>{t('quick.moves', { count: shown.length })}</Text>
            </View>
            {part != null && (
              <Pressable
                accessibilityRole="button"
                hitSlop={4}
                onPress={() => setPart(null)}
                style={({ pressed }) => [styles.showAll, pressed && styles.pressed]}>
                <Text style={styles.showAllText}>{t('quick.showAll')}</Text>
              </Pressable>
            )}
          </View>
          {shown.map((move) => (
            <MoveRow
              key={move.id}
              move={move}
              onPress={() => router.push({ pathname: '/move/[id]', params: { id: move.id } })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/**
 * The routine that suits right now, as BitePal's timer card (#28): its name
 * big, the black round play button (a lock when it is not open), and its moves
 * as overlapping circles with how long as a clock chip beside them. Leading
 * the tab says it is the one for now; the circles count the moves.
 */
function Featured({
  protocol,
  locked,
  large,
  onPress,
}: {
  protocol: Protocol;
  locked: boolean;
  large: boolean;
  onPress: () => void;
}) {
  const t = useT();
  const title = t(protocol.titleKey);
  const length = t('quick.minutes', { count: protocol.minutes });
  const spoken = `${title}, ${t('player.header.meta', {
    minutes: length,
    moves: t('quick.moves', { count: protocol.steps.length }),
  })}`;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={locked ? `${spoken}, ${t('quick.locked')}` : spoken}
      onPress={() => {
        void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
      }}
      style={({ pressed }) => [styles.card, pressed && styles.pressedCard]}>
      <View style={[styles.featuredHead, large && styles.featuredHeadLarge]}>
        <View style={styles.featuredText}>
          <Text style={styles.featuredTitle} maxFontSizeMultiplier={BIG_SCALE}>
            {title}
          </Text>
        </View>
        <View style={styles.play}>
          <HugeiconsIcon
            icon={locked ? SquareLock02Icon : PlayIcon}
            size={28}
            color={bitepal.onPrimary}
            strokeWidth={2.2}
          />
        </View>
      </View>
      <View style={styles.photos}>
        {protocol.steps.map((step, index) => (
          <MoveCircle
            key={step.exerciseId + index}
            exerciseId={step.exerciseId}
            size={PHOTO}
            style={[styles.photo, index > 0 && styles.overlap]}
          />
        ))}
        <MetaChip icon={Clock01Icon} label={length} style={styles.length} />
      </View>
    </Pressable>
  );
}

/** `2 min` or `45 s`: what one round of the move takes at its first level. */
function lengthLabel(t: Translate, seconds: number): string {
  return seconds >= 60
    ? t('quick.minutes', { count: Math.round(seconds / 60) })
    : t('quick.seconds', { count: Math.max(1, Math.round(seconds)) });
}

/** One move, as BitePal's food rows (#59): its picture in a circle, its name, and chips for how long and which part. */
function MoveRow({ move, onPress }: { move: Move; onPress: () => void }) {
  const t = useT();
  const name = EXERCISE_LIST.find((e) => e.id === move.id)?.titleKey;
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <MoveCircle exerciseId={move.id} size={PHOTO} />
      <View style={styles.rowText}>
        <Text style={styles.rowName} maxFontSizeMultiplier={TITLE_SCALE}>
          {name == null ? move.id : t(name)}
        </Text>
        <View style={styles.chips}>
          <MetaChip icon={Clock01Icon} label={lengthLabel(t, move.seconds)} />
          {move.part != null && (
            <View style={[styles.chip, { backgroundColor: parts[move.part].soft }]}>
              <View style={[styles.dot, { backgroundColor: bodyColors[move.part] }]} />
              <Text style={styles.chipText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                {t(`home.today.part.${move.part}`)}
              </Text>
            </View>
          )}
        </View>
      </View>
      <HugeiconsIcon icon={ArrowRight01Icon} size={22} color={colors.text3} strokeWidth={2} />
    </Pressable>
  );
}

const PAD = 20;
const GAP = 10;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  title: { ...fonts.heavy(34, -0.8), color: colors.text, marginBottom: 4 },
  card: { ...cardStyle, padding: PAD, gap: 14 },
  pressedCard: { opacity: 0.8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', columnGap: GAP, rowGap: 14 },
  featuredHead: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  featuredHeadLarge: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
  featuredText: { flexGrow: 1, flexShrink: 1, gap: 2 },
  featuredTitle: { ...fonts.heavy(30, -0.6), color: colors.text },
  play: {
    width: PLAY,
    height: PLAY,
    borderRadius: PLAY / 2,
    backgroundColor: bitepal.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photos: { flexDirection: 'row', alignItems: 'center' },
  length: { marginLeft: 12, alignSelf: 'center' },
  photo: { borderWidth: 3, borderColor: bitepal.card },
  overlap: { marginLeft: -14 },
  listHead: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 8,
  },
  listHeadHuge: { flexDirection: 'column' },
  listTitle: { flexGrow: 1, flexShrink: 1, gap: 2 },
  section: { ...fonts.heavy(24, -0.4), color: colors.text },
  count: { ...fonts.medium(17), color: colors.text3 },
  showAll: {
    minHeight: target.min,
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: bitepal.well,
  },
  showAllText: { ...fonts.semibold(17), color: colors.text },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, minHeight: 72 },
  rowText: { flex: 1, gap: 6 },
  rowName: { ...fonts.semibold(19), color: colors.text },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    minHeight: 30,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: bitepal.well,
  },
  dot: { width: 8, height: 8, borderRadius: 4 },
  chipText: { ...fonts.medium(17), color: colors.text2 },
  pressed: { opacity: 0.55 },
});
