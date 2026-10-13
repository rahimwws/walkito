import { useCallback, useEffect, useRef } from 'react';
import type { View } from 'react-native';

/**
 * Named places on screen a tour can point at.
 *
 * A screen marks a view with `useSpotlightAnchor(id)` (the ref goes on the
 * view); the tour asks `measureSpotlight(id)` where it is in the window when
 * it needs it, so nothing is measured or stored while no tour runs. The
 * screen that scrolls can lend its scroller (`useSpotlightScroller`), so a
 * place below the fold can be brought up before it is pointed at.
 */

export type SpotlightRect = { x: number; y: number; width: number; height: number };

const anchors = new Map<string, View>();
let scroller: ((y: number) => void) | null = null;
let scrollOffset = 0;

export function useSpotlightAnchor(id: string): (view: View | null) => void {
  return useCallback(
    (view: View | null) => {
      if (view == null) anchors.delete(id);
      else anchors.set(id, view);
    },
    [id],
  );
}

/** Where the place is in the window, or null when nothing is marked so. */
export function measureSpotlight(id: string): Promise<SpotlightRect | null> {
  const view = anchors.get(id);
  if (view == null) return Promise.resolve(null);
  return new Promise((resolve) => {
    view.measureInWindow((x, y, width, height) => {
      resolve(width > 0 && height > 0 ? { x, y, width, height } : null);
    });
  });
}

/**
 * Lends a scroll view to the tour. The tour scrolls it to the top as it starts
 * and from there only by its own moves (nobody else can scroll while it
 * covers the screen), so it keeps the offset itself.
 */
export function useSpotlightScroller(scrollTo: (y: number) => void): void {
  const latest = useRef(scrollTo);
  latest.current = scrollTo;
  useEffect(() => {
    scroller = (y) => latest.current(y);
    return () => {
      scroller = null;
    };
  }, []);
}

/** Scrolls the lent scroll view by `dy` points; false when there is none. */
export function scrollSpotlightBy(dy: number): boolean {
  if (scroller == null) return false;
  scrollOffset = Math.max(0, scrollOffset + dy);
  scroller(scrollOffset);
  return true;
}

/** Back to the top, as a tour starts. */
export function scrollSpotlightTop(): void {
  scrollOffset = 0;
  scroller?.(0);
}
