import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { exerciseById } from '@/entities/program';
import { PRIMARY, clipShape, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { ExercisePreview } from '@/widgets/session-player';

/** The page's side padding: the clip's column is measured inside it. */
const PAGE_GUTTER = 24;
/** The clip's share of the window's height, at most. */
const CLIP_SHARE = 0.46;

export type MovePreviewStepProps = {
  /** The move for where it hurts (`painMove`). Never sent anywhere: it is
   * chosen from the pain map, so it describes a body. */
  exerciseId: string;
  /** Room the coach takes in the top-right corner, beside the heading. */
  speakerInset?: number;
  /** How tall he is there: the heading is at least that, so the clip starts
   * under his feet. */
  speakerSize?: number;
  /** The clip opened full screen, or closed: the coach stops under it. */
  onViewerChange?: (open: boolean) => void;
};

/**
 * The flow's first answer: one move of the plan for where it hurts, playing,
 * straight after the pain map.
 *
 * Before this the first thing anybody got back for pointing at a sore heel
 * was fifteen more questions. Here the product itself answers within a tap:
 * the film of a move they will do, its name, why it is in the plan and the
 * one thing to get right in it (the catalogue's own two lines for it). The same move comes back in the first-week
 * deck, so "one of the moves in your plan" is true.
 *
 * The clip is drawn in its own shape, as wide as the page for a wide one, so
 * nothing of the foot is cropped and its still stands there until the film
 * arrives.
 */
export function MovePreviewStep({ exerciseId, speakerInset = 0, speakerSize = 0, onViewerChange }: MovePreviewStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const { width, height } = useWindowDimensions();
  const exercise = exerciseById(exerciseId);
  const shape = clipShape(exerciseId);
  const clipWidth = Math.round(Math.min(width - PAGE_GUTTER * 2, height * CLIP_SHARE * shape));

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={[styles.head, { paddingRight: speakerInset, minHeight: speakerSize }]}>
        <Text style={[styles.eyebrow, { color: PRIMARY }]}>{t('onboarding.move.eyebrow')}</Text>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
          {t(exercise.titleKey)}
        </Text>
      </View>
      <View style={styles.clip}>
        <ExercisePreview
          exerciseId={exerciseId}
          style={{ width: clipWidth, height: Math.round(clipWidth / shape) }}
          aspectRatio={shape}
          fit="cover"
          expandPlacement="top-right"
          expandable
          onViewerChange={onViewerChange}
        />
      </View>
      <Text style={[styles.body, { color: colors.foreground }]}>{t(exercise.rationaleKey)}</Text>
      <View style={styles.cue}>
        <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={PRIMARY} strokeWidth={2.2} />
        <Text style={[styles.cueText, { color: meter.caption }]}>{t(exercise.cueKey)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  scroll: { gap: 16, paddingBottom: 12 },
  head: { gap: 6, justifyContent: 'center' },
  eyebrow: { ...fonts.heavy(13, 0.4), textTransform: 'uppercase' },
  title: { ...fonts.heavy(26, -0.6), lineHeight: 31 },
  clip: { alignItems: 'center' },
  body: { ...fonts.medium(17), lineHeight: 24 },
  cue: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginTop: -6 },
  cueText: { ...fonts.medium(15), lineHeight: 21, flex: 1 },
});
