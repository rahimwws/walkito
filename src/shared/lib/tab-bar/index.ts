import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Room to leave under a tab's scrolling content so its last row clears the
 * system tab bar. The bar is native (`expo-router/native-tabs`) and floats
 * over the content on iOS 26+, so the screen keeps drawing underneath it.
 *
 * 49pt is the bar UIKit draws; iOS 26's floating glass bar sits a little
 * higher, and Android's Material bar is 80dp.
 */
export function useTabBarClearance(): number {
  const insets = useSafeAreaInsets();
  return insets.bottom + (Platform.OS === 'android' ? 80 : 62);
}
