import ArrowExpandDiagonal01Icon from '@hugeicons/core-free-icons/ArrowExpandDiagonal01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useState } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { useIntake } from '@/entities/profile';
import { useT } from '@/shared/lib/i18n';

import { clipFor } from '../config/exercise-clips';
import { mirroredFor } from '../model/mirror';
import { ClipViewer } from './clip-viewer';

/**
 * An exercise's clip on its own, looping and silent — the preview a chip opens
 * on the plan screen. The same source, cache and mirroring as the player, so
 * the preview is exactly what the session will show.
 */
export function ExercisePreview({
  exerciseId,
  style,
  expandable = false,
}: {
  exerciseId: string;
  style?: StyleProp<ViewStyle>;
  /** A tap opens it full screen, with a small expand chip in the corner. */
  expandable?: boolean;
}) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const mirrored = mirroredFor(useIntake()?.side);
  const player = useVideoPlayer(clipFor(exerciseId), (instance) => {
    instance.loop = true;
    instance.muted = true;
    instance.play();
  });
  const card = (
    <View style={[styles.frame, { backgroundColor: CLIP_BACKDROP }, style]}>
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <VideoView
          style={[StyleSheet.absoluteFill, mirrored && styles.mirrored]}
          player={player}
          nativeControls={false}
          // Fitted, not cropped: the clips are upright and show the whole
          // body, and a crop takes the feet first.
          contentFit="contain"
        />
      </View>
      {expandable && (
        <View style={styles.expand} pointerEvents="none">
          <HugeiconsIcon icon={ArrowExpandDiagonal01Icon} size={18} color="#111114" strokeWidth={2.2} />
        </View>
      )}
    </View>
  );
  if (!expandable) return card;
  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('widgets.expandDemo')}
        onPress={() => {
          Haptics.selectionAsync();
          setOpen(true);
        }}>
        {card}
      </Pressable>
      <ClipViewer clip={exerciseId} mirrored={mirrored} visible={open} onClose={() => setOpen(false)} />
    </>
  );
}

/** The studio backdrop the clips are filmed on. */
const CLIP_BACKDROP = '#ECF0F1';

const styles = StyleSheet.create({
  frame: {
    aspectRatio: 1,
    borderRadius: 24,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  mirrored: {
    transform: [{ scaleX: -1 }],
  },
  expand: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
