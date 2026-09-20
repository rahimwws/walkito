import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect } from 'react';
import { Linking, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { SYNC_GUIDES, type WatchBrand } from '../config/watch-guides';

/**
 * The session player's demonstration card, in the one respect that differs.
 *
 * Same margin, same radius, same silent autoplaying loop — the two screens are
 * doing the same job, so they are the same object. What cannot carry over is
 * the square: the player's card crops a body shot to a square with `cover`,
 * which is harmless because the subject sits in the middle of frame. This clip
 * is a recording of a phone screen, and squaring it would throw away the top
 * and bottom of the very UI the step is pointing at.
 *
 * So the card takes the clip's own shape. Driven by height rather than width,
 * because height is the scarce dimension on a step that also carries three
 * lines of instruction and a button.
 */
const CARD_MARGIN = 20;
const CARD_MAX_HEIGHT_FRACTION = 0.46;
const CARD_RADIUS = 32;
/** 600 × 1304 — the encoded clip. Kept as one ratio so the card cannot drift
 * out of step with the footage and start letterboxing. */
const CLIP_ASPECT = 600 / 1304;

export type WatchSyncStepProps = {
  brand: WatchBrand;
};

/**
 * How to turn on Health sync, as a loop.
 *
 * Three short lines and a video, because this is the one screen in the flow
 * that asks the user to leave and do something in another app. A numbered list
 * of menu names goes stale the first time Garmin moves a setting; a recording
 * of the switch being flipped stays legible even when the labels around it
 * change.
 *
 * There is no "done" to detect. Nothing here can verify the switch was flipped
 * — HealthKit will not say which read scopes it is receiving data for — so the
 * screen never claims to know, and the flow's own primary button carries on
 * regardless.
 */
export function WatchSyncStep({ brand }: WatchSyncStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const { width, height } = useWindowDimensions();

  const guide = SYNC_GUIDES[brand];

  // `useVideoPlayer` is a hook and cannot be skipped, so it is always created;
  // a null source simply gives it nothing to play. The card below is what is
  // conditional, not the player.
  const player = useVideoPlayer(guide.clip, (instance) => {
    instance.loop = true;
    // Silent, like every other demonstration in the app: this plays while
    // someone is reading, and audio would take the session from whatever they
    // are actually listening to.
    instance.muted = true;
    instance.play();
  });

  /**
   * Re-asserted whenever the guide changes, for the reason the session player
   * does the same: the setup callback above runs once, and switching watch
   * brands replaces the source in place without carrying its settings over.
   */
  useEffect(() => {
    player.loop = true;
    player.muted = true;
    player.play();
  }, [player, guide.clip]);

  const cardHeight = Math.min(
    height * CARD_MAX_HEIGHT_FRACTION,
    // Never wider than the margins allow, however tall the display is.
    (width - CARD_MARGIN * 2) / CLIP_ASPECT,
  );
  const cardWidth = cardHeight * CLIP_ASPECT;

  return (
    <View style={styles.root}>
      <View style={styles.steps}>
        {guide.steps.map((line, i) => (
          <View key={line} style={styles.line}>
            <View style={[styles.index, { backgroundColor: meter.track }]}>
              <Text style={[styles.indexText, { color: meter.caption }]}>{i + 1}</Text>
            </View>
            <Text style={[styles.lineText, { color: colors.foreground }]}>{line}</Text>
          </View>
        ))}
      </View>

      {/* Only when there is something to show. An empty rounded rectangle on a
          screen that is otherwise three clear instructions reads as a failed
          download, which is worse than the instructions standing alone. */}
      {guide.clip != null && (
        <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
          <VideoView
            player={player}
            style={StyleSheet.absoluteFill}
            // Contain, not cover. The card already matches the clip's aspect
            // ratio, so the two agree — and if a future recording does not,
            // letterboxing is a visible mistake where a crop is a silent one.
            contentFit="contain"
            nativeControls={false}
            // A demonstration, not media. Neither belongs on a screen that is
            // one step of a form.
            allowsPictureInPicture={false}
          />
        </View>
      )}

      {/* The way out to the app that actually owns the switch. Not a primary:
          the flow's own button is the primary here, and two loud controls on a
          screen with one obvious next move is the pattern that gets the wrong
          one pressed. */}
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={`Open ${guide.label}`}
        onPress={() => {
          void Linking.openURL(guide.url).catch(() => {});
        }}
        hitSlop={10}
        style={({ pressed }) => [styles.open, pressed && { opacity: 0.5 }]}>
        <Text style={[styles.openText, { color: meter.caption }]}>Open {guide.label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  steps: {
    alignSelf: 'stretch',
    gap: 10,
    paddingHorizontal: 4,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  index: {
    width: 26,
    height: 26,
    borderRadius: 9,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexText: { fontSize: 13, fontFamily: fonts.bold },
  lineText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
  },
  card: {
    borderRadius: CARD_RADIUS,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  open: { paddingVertical: 6 },
  openText: { fontSize: 15, fontFamily: fonts.semibold },
});
