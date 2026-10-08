'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * A tall section whose scroll position is handed to CSS as `--p`, 0 when its
 * top meets the top of the window and 1 when its bottom meets the bottom. The
 * content inside sits sticky in the middle and reads `--p` to reveal itself.
 *
 * `--p` stays 1 (everything shown) without JavaScript and with Reduce Motion.
 * Updates once a frame, and only while the section is near the screen.
 */
export function ScrollProgress({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let near = false;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 1;
      el.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => {
      if (near && !frame) frame = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([entry]) => {
      near = entry.isIntersecting;
      if (near) onScroll();
    }, { rootMargin: '200px 0px' });
    io.observe(el);
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
