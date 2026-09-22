import { FlagCheckeredIcon } from 'phosphor-react-native';
import { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, ReduceMotion } from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The figure at the hinge between two blocks.
 *
 * Home's "no pain today" flower, cheering, standing where one block closes and
 * the next is named. Deliberately the same drawing rather than a new one: the
 * user has already met it on the card they tap to say the foot is fine, so it
 * arrives here already meaning something. It makes no claim about either block
 * — it is the one element on this screen that is purely a greeting.
 */
const OPENING_ART = require('@assets/home/mascot-nopain.png');

export const BlockOpening = memo(function BlockOpening() {
  return (
    <Animated.View
      // Fades rather than rises: the cards below it are already staggering in,
      // and a second direction of travel at the top of the same list reads as
      // two animations arguing.
      entering={FadeIn.duration(420).reduceMotion(ReduceMotion.System)}
      style={styles.opening}>
      <Image
        source={OPENING_ART}
        resizeMode="contain"
        accessible={false}
        style={styles.openingArt}
      />
    </Animated.View>
  );
});

/**
 * A label between two rules, the width of the cards.
 *
 * The rules are what make it read as a seam rather than as another row — a
 * centred chip on its own looks like a card that failed to draw. Shared by the
 * block that just closed and the one coming, so the two read as the same kind
 * of marker at two different weights.
 */
function Seam({
  label,
  caption,
  muted,
}: {
  label: string;
  caption: string;
  muted: boolean;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  return (
    <View style={styles.seam}>
      <View style={styles.ruleRow}>
        <View style={[styles.rule, { backgroundColor: meter.divider }]} />
        <View
          style={[
            styles.chip,
            muted
              ? // Outlined rather than filled. The block ahead is stated, not
                // offered — it cannot be started early, and a solid chip would
                // read as something to press.
                { borderColor: meter.divider, borderWidth: 1 }
              : { backgroundColor: meter.track },
          ]}>
          <Text
            style={[styles.chipText, { color: muted ? meter.unit : colors.foreground }]}>
            {label}
          </Text>
        </View>
        <View style={[styles.rule, { backgroundColor: meter.divider }]} />
      </View>

      <Text style={[styles.caption, { color: muted ? meter.unit : meter.caption }]}>
        {caption}
      </Text>
    </View>
  );
}

export type BlockFooterProps = {
  index: number;
  name: string;
  /** Days of the block behind the user, and how many it holds. */
  done: number;
  length: number;
};

/**
 * The end of the block the user is in.
 *
 * Counts what is actually behind them rather than announcing the block's length
 * as though it were finished. "14 days done" on the morning of day one would be
 * the screen congratulating someone for a fortnight they have not lived.
 */
export const BlockFooter = memo(function BlockFooter({
  index,
  name,
  done,
  length,
}: BlockFooterProps) {
  const t = useT();
  const complete = done >= length;
  return (
    <Seam
      // `blockName()` in `entities/program` still answers in English, so the
      // name arrives untranslated; the frame around it does not.
      label={t('pages.program.blockSeam', { index, name: name.toUpperCase() })}
      caption={
        complete
          ? t('pages.program.blockAllDone', { count: length })
          : t('pages.program.blockProgress', { done, length })
      }
      muted={false}
    />
  );
});

export type BlockAheadProps = {
  index: number;
  name: string;
  /** The exercise this block introduces, if it introduces one. */
  begins: string | null;
};

/**
 * The block after this one, shown but not offered.
 *
 * This is the one place in the app where the future can be shown without
 * promising anything: it is a table, not a forecast. What it says begins here
 * is read off the block's own exercise list, so it cannot claim a change the
 * program does not actually make.
 */
export const BlockAhead = memo(function BlockAhead({ index, name, begins }: BlockAheadProps) {
  // Subscribed, because `begins` is an exercise title the caller resolved
  // through the catalogue — it has to repaint when the language moves.
  const t = useT();
  return (
    <Seam
      label={t('pages.program.blockSeam', { index, name: name.toUpperCase() })}
      // "Heel raises begin here" reads well and "Short foot, standing begin
      // here" does not, and both titles come out of the same table. A label
      // rather than a sentence sidesteps the agreement entirely.
      caption={
        begins != null
          ? t('pages.program.blockNew', { exercise: begins })
          : t('pages.program.blockChanges')
      }
      muted
    />
  );
});

export type ProgramFinishProps = {
  /** The last day of the plan. */
  day: number;
};

/**
 * The end of the whole plan.
 *
 * Only reachable from the final block, which is the honest place for it: a
 * finish line drawn under block one would be eighty-three days of road
 * pretending to be one.
 */
export const ProgramFinish = memo(function ProgramFinish({ day }: ProgramFinishProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme].amber;
  const t = useT();

  return (
    <Animated.View
      entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
      style={styles.finish}>
      <FlagCheckeredIcon size={26} weight="fill" color={accent.fill} />
      <Text style={[styles.finishDay, { color: colors.foreground }]}>
        {t('pages.program.finishDay', { day })}
      </Text>
      <Text style={[styles.caption, { color: meter.caption }]}>
        {t('pages.program.finishCaption')}
      </Text>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  opening: {
    alignItems: 'center',
  },
  openingArt: {
    width: 132,
    height: 132,
  },
  seam: {
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 12,
  },
  rule: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  chip: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 10,
    borderCurve: 'continuous',
  },
  chipText: {
    fontSize: 11,
    fontFamily: fonts.bold,
    letterSpacing: 0.8,
  },
  caption: {
    fontSize: 13,
    fontFamily: fonts.semibold,
  },
  finish: {
    alignItems: 'center',
    gap: 4,
    paddingTop: 6,
  },
  finishDay: {
    fontSize: 20,
    fontFamily: fonts.heavy,
    letterSpacing: 0.4,
  },
});
