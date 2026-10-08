'use client';

import { useEffect } from 'react';

/**
 * Marks `<html data-scrolled>` once the page has moved past the top, which is
 * what draws the home header together into one capsule (`.masthead-float` in
 * globals.css). One passive listener, read once a frame.
 *
 * The header is fixed, so it takes no room of its own; its height at the top
 * of the page goes into `--head-h`, which the hero uses as its top padding.
 */
export function ScrollState() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const header = document.querySelector<HTMLElement>('.masthead-float');
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
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      resize.disconnect();
      cancelAnimationFrame(frame);
      delete root.dataset.scrolled;
    };
  }, []);

  return null;
}
