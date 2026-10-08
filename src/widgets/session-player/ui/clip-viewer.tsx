import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useT } from '@/shared/lib/i18n';

import { clipFor } from '../config/exercise-clips';

/**
 * A demonstration, full screen and uncropped, so the movement can actually be
 * followed. Its own player, mounted only while open, so nothing plays behind
 * a closed one and the card underneath keeps its place.
 */
export function ClipViewer({
  clip,
  mirrored,
  visible,
  onClose,
}: {
  clip: string;
  mirrored: boolean;
  visible: boolean;
  onClose: () => void;
}) {
  const insets = useSafeAreaInsets();
  const t = useT();
  return (
    <Modal
      visible={visible}
      animationType="fade"
      presentationStyle="overFullScreen"
      transparent
      onRequestClose={onClose}
      statusBarTranslucent>
      <View style={styles.viewer}>
        {visible && <ViewerVideo clip={clip} mirrored={mirrored} />}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          onPress={onClose}
          hitSlop={12}
          style={[styles.close, { top: insets.top + 12 }]}>
          <HugeiconsIcon icon={Cancel01Icon} size={22} color="#FFFFFF" strokeWidth={2} />
        </Pressable>
      </View>
    </Modal>
  );
}

function ViewerVideo({ clip, mirrored }: { clip: string; mirrored: boolean }) {
  const player = useVideoPlayer(clipFor(clip), (instance) => {
    instance.loop = true;
    instance.muted = true;
    instance.audioMixingMode = 'mixWithOthers';
    instance.play();
  });
  return (
    <VideoView
      style={[styles.video, mirrored && styles.mirrored]}
      player={player}
      nativeControls={false}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create({
  viewer: { flex: 1, backgroundColor: '#000000', justifyContent: 'center' },
  video: { width: '100%', height: '100%' },
  mirrored: { transform: [{ scaleX: -1 }] },
  close: {
    position: 'absolute',
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    // Dark, because the clips are filmed on white.
    backgroundColor: 'rgba(17,17,20,0.72)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
