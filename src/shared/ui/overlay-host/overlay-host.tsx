import { useEffect, useLayoutEffect, useSyncExternalStore, type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * A layer over the tabs' own chrome (the tab bar, the dock and the program
 * overlay), for something a screen inside the tabs must show above them: a
 * screen's own views sit under that chrome, so an overlay drawn in them is
 * covered by it.
 *
 * Still in the React tree, not a `Modal`. On iOS a modal asked to present
 * while another is up never shows and is never retried, and the screens
 * inside the tabs open sheets of their own (a session, the check-in, a link
 * from the widget), as do the update sheet and the offer wall: an overlay here
 * cannot collide with any of them, and a sheet presents over it as it would
 * over the screen.
 *
 * One at a time: `OverlayPortal` hands its children to the host while it is
 * mounted, and the host is mounted once, by the tabs layout, after the chrome.
 */
let content: ReactNode = null;
const listeners = new Set<() => void>();

function emit(): void {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function read(): ReactNode {
  return content;
}

/** Draws `children` in the host, over the tabs' chrome, while mounted. */
export function OverlayPortal({ children }: { children: ReactNode }) {
  // Before paint, so the first frame of whatever it holds is drawn there.
  useLayoutEffect(() => {
    content = children;
    emit();
  }, [children]);
  useEffect(
    () => () => {
      content = null;
      emit();
    },
    [],
  );
  return null;
}

/** Where `OverlayPortal`'s children are drawn. Touches pass through it to the
 * screen below wherever they land on nothing it holds. */
export function OverlayHost() {
  const node = useSyncExternalStore(subscribe, read, read);
  if (node == null) return null;
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      {node}
    </View>
  );
}
