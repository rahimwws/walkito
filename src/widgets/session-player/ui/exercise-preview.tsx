import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { useIntake } from '@/entities/profile';
import { meterColors } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { clipFor } from '../config/exercise-clips';
import { mirroredFor } from '../model/mirror';

/**
 * An exercise's clip on its own, looping and silent — the preview a chip opens
 * on the plan screen. The same source, cache and mirroring as the player, so
 * the preview is exactly what the session will show.
 */
export function ExercisePreview({ exerciseId, style }: { exerciseId: string; style?: StyleProp<ViewStyle> }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const mirrored = mirroredFor(useIntake()?.side);
  const player = useVideoPlayer(clipFor(exerciseId), (instance) => {
    instance.loop = true;
    instance.muted = true;
    instance.play();
  });
  return (
    <View style={[styles.frame, { backgroundColor: meter.track }, style]}>
      <VideoView
        style={[StyleSheet.absoluteFill, mirrored && styles.mirrored]}
        player={player}
        nativeControls={false}
        contentFit="cover"
      />
    </View>
  );
}

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
});
