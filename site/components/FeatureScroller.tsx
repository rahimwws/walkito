'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * What one feature shows on the left: a screenshot of the phone, or something
 * drawn on the server and handed over finished (the Progress pieces). A drawn
 * visual carries text of its own, so it is announced once by its `label`
 * rather than word by word.
 */
export type FeatureVisual =
  | { src: string; alt: string; extras?: ReactNode }
  | { node: ReactNode; label: string; extras?: ReactNode };

/**
 * "How it works": a tall section that holds still while the page scrolls past
 * it. The visual on the left and the list on the right both follow the scroll:
 * each 1/n of the way through is one feature. Tapping a feature scrolls to its
 * share, so the two ways in always agree.
 *
 * The active feature's bar fills with the scroll inside its share (`--sub`).
 * Every visual, screenshot or drawn, takes the same `data-on` / `data-past`
 * states, so the move from one feature to the next is the same slide and fade
 * whichever kind is leaving and whichever is arriving.
 *
 * Icons arrive as elements, not as components: the page renders them on the
 * server, and a component reference cannot cross into a client component.
 */
export function FeatureScroller({
  items,
  visuals,
}: {
  items: { tag: string; title: string; text: string; icon: ReactNode }[];
  visuals: FeatureVisual[];
}) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const n = items.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? Math.min(0.9999, Math.max(0, -rect.top / travel)) : 0;
      const k = Math.min(n - 1, Math.floor(p * n));
      el.style.setProperty('--sub', (p * n - k).toFixed(3));
      setActive(k);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [n]);

  const go = (k: number) => {
    const el = ref.current;
    if (!el) return;
    const travel = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + travel * ((k + 0.08) / n), behavior: 'smooth' });
  };

  const item = items[active];

  return (
    <section ref={ref} className="feat-scroll" style={{ '--n': n } as React.CSSProperties}>
      <div className="feat-stage">
        <div className="feat-grid">
          <div className="feat-shot-card">
            {visuals.map((visual, k) => {
              const state = {
                'data-on': k === active ? '' : undefined,
                'data-past': k < active ? '' : undefined,
                'aria-hidden': k !== active,
              };
              const extras = visual.extras ? (
                <div key={`extras-${k}`} className="feat-extras" {...state} aria-hidden>
                  {visual.extras}
                </div>
              ) : null;
              return 'src' in visual ? (
                [<img
                  key={visual.src}
                  className="feat-shot"
                  {...state}
                  src={visual.src}
                  srcSet={`${visual.src} 376w, ${visual.src.replace(/\.webp$/, '@2x.webp')} 751w`}
                  sizes="(max-width: 760px) 60vw, 340px"
                  width={751}
                  height={1548}
                  alt={visual.alt}
                  loading="lazy"
                  decoding="async"
                />, extras]
              ) : (
                [
                  <div key={`visual-${k}`} className="feat-visual" role="img" aria-label={visual.label} {...state}>
                    {visual.node}
                  </div>,
                  extras,
                ]
              );
            })}
          </div>

          <div className="feat-list-card">
            <div className="feat-current" key={active}>
              <span className="feat-tag">{item.tag}</span>
              <h3 className="feat-title">{item.title}</h3>
            </div>

            <ol className="feat-items">
              {items.map((it, k) => (
                <li key={it.tag}>
                  <button
                    type="button"
                    className="feat-item"
                    aria-pressed={k === active}
                    data-on={k === active ? '' : undefined}
                    onClick={() => go(k)}
                  >
                    <span className="feat-num">{k + 1}</span>
                    <span className="feat-name">{it.tag}</span>
                    <span className="feat-icon">{it.icon}</span>
                    <span className="feat-text">
                      <span>{it.text}</span>
                    </span>
                    <span className="feat-bar" aria-hidden />
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
