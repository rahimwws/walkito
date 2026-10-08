'use client';

import { useEffect } from 'react';

/** One listener per page. The masthead renders this on every page, and the
 * home page still renders its own copy; whichever mounts first does the work
 * and the second stands aside until the first unmounts. */
let owner: symbol | null = null;

/**
 * Marks `<html data-scrolled>` once the page has moved past the top, which is
 * what draws the floating header together into one capsule (`.masthead-float`
 * in globals.css). One passive listener, read once a frame.
 *
 * The header is fixed, so it takes no room of its own; its height at the top
 * of the page goes into `--head-h`, which the home hero and the band at the
 * top of every other page (`.pg-head` in app/pages.css) use as their top
 * padding.
 */
export function ScrollState() {
  useEffect(() => {
    if (owner) return;
    const me = Symbol('scroll-state');
    owner = me;
    const root = document.documentElement;
    let frame = 0;
    const header = document.querySelector<HTMLElement>('.masthead-float');
    /* The header's resting layout: measured only while it is in it, since the
       scrolled capsule moves and shrinks what this reads. */
    const measure = () => {
      if (!header || 'scrolled' in root.dataset) return;
      root.style.setProperty('--head-h', `${header.offsetHeight}px`);
      // How far the logo and the button travel to meet the nav, which stays
      // where it is: each ends 8px from the nav's edge. The logo is measured
      // without its wordmark, which folds away as it moves.
      const brand = header.querySelector<HTMLElement>('.brand');
      const logo = header.querySelector<HTMLElement>('.brand img');
      const nav = header.querySelector<HTMLElement>('.nav');
      const button = header.querySelector<HTMLElement>('.download');
      if (!brand || !logo || !nav || !button) return;
      const b = brand.getBoundingClientRect();
      const n = nav.getBoundingClientRect();
      const d = button.getBoundingClientRect();
      root.style.setProperty('--brand-x', `${Math.round(n.left - 8 - (b.left + logo.offsetWidth))}px`);
      root.style.setProperty('--button-x', `${Math.round(n.right + 8 - d.left)}px`);
    };
    const resize = new ResizeObserver(measure);
    if (header) resize.observe(header);
    const update = () => {
      frame = 0;
      if (window.scrollY > 24) root.dataset.scrolled = '';
      else delete root.dataset.scrolled;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // Measure first: a page that opens already scrolled (a reload part way
    // down, a link to an anchor) is marked by `update()` at once, and every
    // later measure stands aside while it is, so this is the one chance to
    // read the resting header before the reader scrolls back to the top.
    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      resize.disconnect();
      cancelAnimationFrame(frame);
      delete root.dataset.scrolled;
      if (owner === me) owner = null;
    };
  }, []);

  return null;
}
