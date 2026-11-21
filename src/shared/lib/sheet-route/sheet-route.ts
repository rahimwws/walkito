import { router, useNavigation, type Href } from 'expo-router';
import { useEffect, useRef } from 'react';

/**
 * A native form sheet route opened by a component that used to draw its own
 * sheet, keeping the component's `visible` / callback API.
 *
 * The host keeps its state (`visible`, `onClose`, answers) and the route
 * under `/app` draws the sheet. Callbacks cannot travel in a URL, so they wait
 * here under the route's name while it is open. One sheet per name at a time.
 *
 * - The host renders `useSheetRoute(name, visible, href, handlers, onGone)`:
 *   `visible` turning true pushes the route; turning false while the route is
 *   up closes it.
 * - The route's screen calls `useSheetHandlers(name)` for the handlers. When
 *   the screen unmounts (a button, a swipe down, the host closing it), `onGone`
 *   runs, after the sheet has left the screen, so a host that closes something
 *   under the sheet does it with nothing native still dismissing.
 */
type Entry = {
  handlers: { current: unknown };
  onGone: { current: () => void };
  close?: () => void;
};

const open = new Map<string, Entry>();

export function useSheetRoute<H>(name: string, visible: boolean, href: Href, handlers: H, onGone: () => void): void {
  const handlersRef = useRef<unknown>(handlers);
  handlersRef.current = handlers;
  const goneRef = useRef(onGone);
  goneRef.current = onGone;
  const hrefRef = useRef(href);
  hrefRef.current = href;

  useEffect(() => {
    if (visible) {
      if (open.has(name)) return;
      open.set(name, { handlers: handlersRef, onGone: goneRef });
      router.push(hrefRef.current);
      return;
    }
    open.get(name)?.close?.();
  }, [name, visible]);

  useEffect(
    () => () => {
      const entry = open.get(name);
      if (entry?.handlers === handlersRef) entry.close?.();
    },
    [name],
  );
}

/** The host's handlers for the sheet route `name`, read fresh on each call,
 * or undefined when the route was opened without a host (a deep link, a
 * reload in development). */
export function useSheetHandlers<H>(name: string): () => H | undefined {
  const navigation = useNavigation();

  useEffect(() => {
    const entry = open.get(name);
    if (entry != null) {
      entry.close = () => {
        entry.close = undefined;
        navigation.goBack();
      };
    }
    return () => {
      const gone = open.get(name);
      open.delete(name);
      gone?.onGone.current();
    };
  }, [name, navigation]);

  return () => open.get(name)?.handlers.current as H | undefined;
}

/** Whether a host has the sheet route `name` open right now. */
export function sheetRouteOpen(name: string): boolean {
  return open.has(name);
}
