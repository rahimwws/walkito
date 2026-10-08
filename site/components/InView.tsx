'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * A section that knows whether it is on screen.
 *
 * Sets `data-seen` the first time it scrolls into view (for entrance motion)
 * and `data-live` while it is in view, so looping animations inside run only
 * then: CSS pauses them when `data-live` is absent. Without JavaScript neither
 * is set, and the CSS shows the finished state.
 */
export function InView({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.js = '';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.seen = '';
          el.dataset.live = '';
        } else {
          delete el.dataset.live;
        }
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
