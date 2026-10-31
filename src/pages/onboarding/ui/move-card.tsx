import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import SunriseIcon from '@hugeicons/core-free-icons/SunriseIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useState, type Ref } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, type SharedValue } from 'react-native-reanimated';

import { CLIP_BACKDROP, ExercisePreview, type ExercisePreviewHandle } from '@/widgets/session-player';
import { fonts, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Raised, faceFor } from '@/shared/ui/raised';

import type { DeckWhen } from '../model/first-week-deck';

/** The clips' own shape, width over height. A card of exactly this shape can
 * fill with the clip (`cover`) and crop under 1%, so it has no bands. */
export const CLIP_SHAPE = 9 / 16;

/** One card of the deck, its copy resolved. */
export type DeckCard = {
  /** Catalogue id: what plays. Never sent anywhere (`first-week-deck.ts`). */
  id: string;
  when: DeckWhen;
  /** The chip on the card: "Every morning", "On session days". */
  whenLabel: string;
  title: string;
  /** The week-one prescription as a row prints it: "3 × 10", "2 min". */
  dose: string;
  /** Why this move, in the coach's bubble. */
  rationale: string;
  /** The technique point: what a screen reader hears in place of the clip. */
  cue: string;
};

export type MoveCardProps = {
  card: DeckCard;
  /** Its place in the deck. */
  index: number;
  width: number;
  height: number;
  /** Room to the next card. */
  gap: number;
  /** The card in front. Only it mounts a player; the others are covers. */
  active: boolean;
  /** The deck's scroll position, in cards. */
  position: SharedValue<number>;
  /** 0 → 1 as the next card slides in on arrival. */
  peekIn: SharedValue<number>;
  /** Scale stays at 1 under Reduce Motion; only opacity tells cards apart. */
  reduceMotion: boolean;
  /** The clip runs: the screen is in focus and the app in front. */
  playing: boolean;
  mirrored: boolean;
  /** Reaches the active card's preview, so the deck can open it full screen. */
  previewRef?: Ref<ExercisePreviewHandle>;
  /** A cover was tapped: bring it to the front. Absent on cards already passed. */
  onPress?: () => void;
  onFirstFrame: () => void;
  onDuration: (seconds: number) => void;
  onViewerChange: (open: boolean) => void;
};

/** How far a card behind the front one shrinks, about its left edge. */
const BEHIND_SCALE = 0.9;
/** How far past the front a card has gone by the time it has faded out. */
const PASSED_FADE = 0.6;
/** How far the next card travels as it slides in on arrival. */
const PEEK_SLIDE = 40;
const RADIUS = 28;
const CHIP_LIP = 2;

/**
 * One move of the first week: its clip filling a card of the clip's own tall
 * shape, so there are no bands, with when it is done on a chip at the top.
 *
 * The card is the studio's own white in both schemes, because the footage is:
 * a dark card would be a white picture in a black frame. In front, it plays;
 * behind, it is a cover in the same white with a play mark, so the deck runs
 * one player however many cards it holds.
 *
 * Only the chip sits on the clip, at the top, where the footage is backdrop:
 * the feet are in the bottom quarter of every clip and the hands of the
 * stretch at about half. The name, the dose and why are in the coach's
 * bubble under the deck, not over the movement they describe.
 */
export function MoveCard({
  card,
  index,
  width,
  height,
  gap,
  active,
  position,
  peekIn,
  reduceMotion,
  playing,
  mirrored,
  previewRef,
  onPress,
  onFirstFrame,
  onDuration,
  onViewerChange,
}: MoveCardProps) {
  const scheme = useColorScheme();
  const t = useT();
  const [failed, setFailed] = useState(false);
  // A card that leaves the front drops its player, and with it whatever the
  // player said; the next time it plays is a new load.
  useEffect(() => {
    if (!active) setFailed(false);
  }, [active]);

  // White cards behind the front one dim further on the dark page, where
  // white at 70% still reads as a lit card competing with the one playing.
  const behindOpacity = scheme === 'dark' ? 0.55 : 0.7;
  const motion = useAnimatedStyle(() => {
    const d = index - position.value;
    const ahead = Math.min(Math.max(d, 0), 1);
    const opacity =
      d < 0
        ? interpolate(d, [-PASSED_FADE, 0], [0, 1], Extrapolation.CLAMP)
        : interpolate(d, [0, 1], [1, behindOpacity], Extrapolation.CLAMP);
    // On arrival the next card slides in after the front one has risen.
    const arriving = 1 - (1 - peekIn.value) * ahead;
    const scale = reduceMotion ? 1 : 1 - (1 - BEHIND_SCALE) * Math.min(Math.abs(d), 1);
    return {
      opacity: opacity * arriving,
      transform: [
        { translateX: reduceMotion ? 0 : (1 - peekIn.value) * ahead * PEEK_SLIDE },
        { scale },
      ],
    };
  }, [index, reduceMotion, behindOpacity]);

  const top = <WhenChip when={card.when} label={card.whenLabel} />;

  return (
    <Animated.View style={[styles.slot, { width, height, marginRight: gap }, motion]}>
      <View style={[styles.lift, scheme === 'light' && styles.shadow]}>
        {active ? (
          <ExercisePreview
            ref={previewRef}
            exerciseId={card.id}
            aspectRatio={CLIP_SHAPE}
            fit="cover"
            mirrored={mirrored}
            playing={playing}
            expandable
            expandPlacement="top-right"
            moving
            onFirstFrame={onFirstFrame}
            onDuration={onDuration}
            onFailedChange={setFailed}
            onViewerChange={onViewerChange}
            style={[styles.face, { width, height }]}>
            {failed && (
              <View style={styles.failed} pointerEvents="none">
                <Text style={styles.failedText} maxFontSizeMultiplier={1.3}>
                  {t('widgets.clipFailed')}
                </Text>
              </View>
            )}
            {top}
          </ExercisePreview>
        ) : (
          <Pressable
            disabled={onPress == null}
            onPress={onPress}
            style={[styles.face, styles.cover, { width, height }]}>
            <HugeiconsIcon icon={PlayIcon} size={28} color={COVER_MARK} strokeWidth={2} />
            {top}
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
}

/**
 * When the move is done, as a raised chip: the morning in amber, the colour
 * the morning routine wears everywhere else, the sessions in the brand violet.
 * Drawn from the light scheme always, because the card it sits on is light.
 */
function WhenChip({ when, label }: { when: DeckWhen; label: string }) {
  const tone = faceFor('light', when === 'morning' ? 'amber' : 'primary');
  return (
    <View style={styles.top} pointerEvents="none">
      <Raised face={tone.face} lip={tone.lip} depth={CHIP_LIP} radius={10} style={styles.chipOuter} contentStyle={styles.chip}>
        <HugeiconsIcon icon={when === 'morning' ? SunriseIcon : Calendar03Icon} size={15} color={tone.label} strokeWidth={2.2} />
        {/* Two lines rather than an ellipsis: the card is narrow, and the
            longest translations are longer than its top edge. */}
        <Text style={[styles.chipLabel, { color: tone.label }]} numberOfLines={2} maxFontSizeMultiplier={1.3}>
          {label}
        </Text>
      </Raised>
    </View>
  );
}

/** The cover's play mark: the clip's ink, faint. */
const COVER_MARK = 'rgba(17,17,20,0.4)';
const INK = palette.light.foreground;

const styles = StyleSheet.create({
  slot: {
    // Scaled about the left edge, so a card behind keeps its distance from the
    // one in front and only its far side recedes.
    transformOrigin: 'left center',
  },
  lift: {
    flex: 1,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    backgroundColor: CLIP_BACKDROP,
  },
  shadow: {
    boxShadow: '0 10px 30px rgba(17,17,20,0.12)',
  },
  face: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  cover: {
    backgroundColor: CLIP_BACKDROP,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    position: 'absolute',
    top: 12,
    left: 12,
    // The expand chip's corner, kept clear: 34 pt and its gap.
    right: 12 + 34 + 8,
    alignItems: 'flex-start',
  },
  chipOuter: {
    maxWidth: '100%',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    minHeight: 28,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  chipLabel: {
    flexShrink: 1,
    ...fonts.heavy(13, 0.1),
    lineHeight: 16,
  },
  failed: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  failedText: {
    ...fonts.semibold(14),
    lineHeight: 19,
    color: INK,
    textAlign: 'center',
  },
});
