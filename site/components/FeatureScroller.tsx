'use client';

import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react';

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
 * whichever kind is leaving and whichever is arriving. The section carries
 * `data-live` while any of it is on screen, and anything that loops inside a
 * visual runs only under both: live, and the active feature's.
 *
 * On a short window (globals.css, "a short window: no pin") the stage is not
 * sticky and the section scrolls like any other. The scroll then picks
 * nothing; a tap on an item shows its feature, so the list works as tabs.
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
  const stageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  /** Whether the stage holds still. Read from the stylesheet, which decides. */
  const pinned = useRef(true);
  const [active, setActive] = useState(0);
  const n = items.length;

  useEffect(() => {
    const el = ref.current;
    const stage = stageRef.current;
    if (!el || !stage) return;
    let frame = 0;
    let lastSub = -1;
    let lastLive: boolean | null = null;
    let lastK = -1;
    const readPin = () => {
      pinned.current = getComputedStyle(stage).position === 'sticky';
    };
    /*
     * Once a frame while scrolling, so it touches the page as little as it can:
     * the bar's fill goes on the list alone (a custom property set on the
     * section would restyle every layer of the phone card, blurs included, on
     * every frame), and the attribute and the state change only when their
     * value does. Writing the same attribute again still invalidates every
     * `[data-live]` rule under it.
     */
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // Loops inside the visuals (a countdown, a count-in) run only while the
      // section is on screen.
      const live = rect.bottom > 0 && rect.top < window.innerHeight;
      if (live !== lastLive) {
        lastLive = live;
        el.toggleAttribute('data-live', live);
      }
      if (!pinned.current) {
        // A tap picks the feature now (`go`). Forgetting the last one lets the
        // scroll take over again from where it is if the stage pins again.
        lastK = -1;
        return;
      }
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? Math.min(0.9999, Math.max(0, -rect.top / travel)) : 0;
      const k = Math.min(n - 1, Math.floor(p * n));
      const sub = Math.round((p * n - k) * 200) / 200;
      if (sub !== lastSub && listRef.current) {
        lastSub = sub;
        listRef.current.style.setProperty('--sub', String(sub));
      }
      if (k !== lastK) {
        lastK = k;
        setActive(k);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // A resize (zoom included) is what moves the window across the short-window
    // line, so the pin is read again then.
    const onResize = () => {
      readPin();
      onScroll();
    };
    readPin();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frame);
    };
  }, [n]);

  const go = (k: number) => {
    const el = ref.current;
    if (!el) return;
    if (!pinned.current) {
      setActive(k);
      return;
    }
    const travel = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    // Straight there for anyone who asked for reduced motion, which the
    // stylesheet's `scroll-behavior: smooth` on `html` would otherwise ignore.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: top + travel * ((k + 0.08) / n), behavior: reduce ? 'instant' : 'smooth' });
  };

  const item = items[active];

  return (
    <section ref={ref} className="feat-scroll" style={{ '--n': n } as React.CSSProperties}>
      <div ref={stageRef} className="feat-stage">
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
                  // Eager: the next screenshot must be decoded before its turn
                  // comes, or it arrives blank and flashes in mid-scroll.
                  loading="eager"
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
            {/* A live region, so the new title is read out as it swaps in. It
                stays mounted; only what is inside it is new for each feature
                (a region inserted along with its text is not announced). */}
            <div className="feat-current" aria-live="polite" aria-atomic="true">
              <Fragment key={active}>
                <span className="feat-tag">{item.tag}</span>
                <h3 className="feat-title">{item.title}</h3>
              </Fragment>
            </div>

            <ol ref={listRef} className="feat-items">
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
