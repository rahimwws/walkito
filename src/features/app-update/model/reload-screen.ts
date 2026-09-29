import { requireOptionalNativeModule } from 'expo';
import { Asset } from 'expo-asset';
import type { ReloadScreenOptions } from 'expo-updates';
import { Image } from 'react-native';

import { meterColors } from '@/shared/config';

import { HANDOFF_SIZE, MASCOT_STILL } from '../config/mascot';

let still: Promise<string | null> | null = null;

/** Something the native reload screen can open without help: a real file, or
 * Metro's server in development. */
const OPENABLE = /^(file|https?|data):/;

/** expo-asset's native side, which can copy an Android resource out to a file.
 * Optional so a binary without it degrades to the spinner, never a crash. */
type AssetNative = {
  downloadAsync(url: string, md5Hash: string | null, type: string): Promise<string>;
};

/**
 * A `file://` (or, under Metro, `http://`) URL for the mascot still that the
 * native reload screen can open by itself.
 *
 * Not the `require` id handed straight to expo-updates, for two reasons found
 * in its source. It resolves an id with `Image.resolveAssetSource` and passes
 * that asset's point size *and* its scale, and the native side multiplies them
 * — a 200pt image picked at @3x would be drawn in a 600pt box. And on Android
 * an embedded image resolves to a bare resource name with no scheme, which
 * `ReloadScreenView.kt` cannot open; it falls back to a spinner.
 *
 * That second case is the one to watch. A build running its own embedded
 * bundle (a fresh install, before any update) resolves the still to something
 * like `assets_update_mascothandoff`, and `Asset.downloadAsync()` does not help:
 * for an image with a size expo-asset marks that name as already downloaded and
 * hands it back as `localUri`. So every answer is checked for a scheme, and a
 * bare name is copied out to the cache through expo-asset's native module,
 * which opens resource names itself (`AssetModule.kt`, `toInputStream`). On
 * iOS, and on Android once an update is running, the still is already a file.
 *
 * Started when the sheet appears so the restart never waits on it, and
 * remembered: it is the same file for the life of this bundle.
 */
export function prepareHandoffImage(): Promise<string | null> {
  if (still != null) return still;
  still = (async () => {
    let asset: Asset | null = null;
    try {
      asset = Asset.fromModule(MASCOT_STILL);
      await asset.downloadAsync();
      if (asset.localUri != null && OPENABLE.test(asset.localUri)) return asset.localUri;
    } catch {
      // Fall through to the copies below.
    }
    const resolved = asset?.uri ?? Image.resolveAssetSource(MASCOT_STILL)?.uri;
    if (resolved == null) return null;
    if (OPENABLE.test(resolved)) return resolved;
    try {
      const native = requireOptionalNativeModule<AssetNative>('ExpoAsset');
      const copied = await native?.downloadAsync(
        resolved,
        asset?.hash ?? null,
        asset?.type ?? 'png',
      );
      return copied != null && OPENABLE.test(copied) ? copied : null;
    } catch {
      return null;
    }
  })();
  // A miss is not remembered: the next sheet gets another go at it.
  void still.then((url) => {
    if (url == null) still = null;
  });
  return still;
}

/**
 * What expo-updates draws between this bundle and the next: the sheet's last
 * frame, redrawn natively.
 *
 * - `backgroundColor` is the colour the sheet expanded into, handed in by the
 *   sheet itself so the two cannot disagree.
 * - `image` is the still at `HANDOFF_SIZE` points, centred, which is exactly
 *   where the sheet parked him (see `config/mascot.ts` for how both platforms
 *   lay that out). `imageFullScreen` stays off: on it the overlay is
 *   transparent, and whatever React Native shows under a reloading root would
 *   show through.
 * - `fade` is what makes the end of it smooth too: the overlay leaves with a
 *   300ms fade once the new bundle has drawn its first content, rather than
 *   vanishing.
 * - No spinner. If the image cannot be opened expo-updates turns one on anyway,
 *   so it is given a quiet colour rather than the default system blue.
 */
export async function reloadScreenOptions(backgroundColor: string): Promise<ReloadScreenOptions> {
  const url = await prepareHandoffImage();
  return {
    backgroundColor,
    ...(url != null ? { image: { url, width: HANDOFF_SIZE, height: HANDOFF_SIZE, scale: 1 } } : {}),
    imageResizeMode: 'contain',
    imageFullScreen: false,
    fade: true,
    spinner: { enabled: false, color: meterColors.dark.caption, size: 'small' },
  };
}
