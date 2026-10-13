'use client';

import { CaretUpIcon } from '@phosphor-icons/react/dist/csr/CaretUp';
import { CheckIcon } from '@phosphor-icons/react/dist/csr/Check';
import { GlobeIcon } from '@phosphor-icons/react/dist/csr/Globe';
import { useEffect, useRef } from 'react';

/**
 * The language switcher: one button naming the current language, opening a
 * short list of the others. Seven languages in a row ran the width of the
 * footer; this keeps it to one control.
 *
 * A native `<details>`, so it opens and every link works without JavaScript;
 * the script only closes it on Escape or a click elsewhere. Plain `<a>`, not
 * `Link`: each language is its own root layout, so the jump is a full load
 * either way.
 */
export function LangPicker({
  current,
  options,
  label,
}: {
  current: string;
  options: { lang: string; name: string; href: string; current: boolean }[];
  /** "Language", for the control's accessible name. */
  label: string;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onPointer = (event: PointerEvent) => {
      if (el.open && !el.contains(event.target as Node)) el.open = false;
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && el.open) {
        el.open = false;
        el.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <details ref={ref} className="lp">
      <summary className="lp-button" aria-label={`${label}: ${current}`}>
        <GlobeIcon size={18} weight="fill" aria-hidden />
        <span>{current}</span>
        <CaretUpIcon className="lp-caret" size={14} weight="bold" aria-hidden />
      </summary>
      <nav className="lp-menu" aria-label={label}>
        {options.map((o) =>
          o.current ? (
            <span key={o.lang} className="lp-item" aria-current="page" lang={o.lang}>
              {o.name}
              <CheckIcon size={16} weight="bold" aria-hidden />
            </span>
          ) : (
            <a key={o.lang} className="lp-item" href={o.href} hrefLang={o.lang} lang={o.lang}>
              {o.name}
            </a>
          ),
        )}
      </nav>
    </details>
  );
}
