'use client';

import { ListIcon } from '@phosphor-icons/react/dist/csr/List';
import { XIcon } from '@phosphor-icons/react/dist/csr/X';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

import { AppleGlyph } from '@/components/AppStoreBadge';
import { GetAppButton } from '@/components/GetApp';

/**
 * The phone header's menu: a burger where the "Get the app" button sits on a
 * laptop, opening a sheet with the nav links and that button. Shown below
 * 761px only (CSS); above it the nav and the button are in the header itself.
 *
 * Closes on a link, on Escape and on a tap outside. Focus goes back to the
 * burger when it closes.
 */
export function MobileMenu({
  links,
  getApp,
  labels,
}: {
  links: { href: string; label: string; current: boolean }[];
  getApp: { ios: string; android: string | null; label: string };
  labels: { open: string; close: string };
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!panel.current?.contains(target) && !button.current?.contains(target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls={id}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <XIcon size={22} weight="bold" aria-hidden /> : <ListIcon size={22} weight="bold" aria-hidden />}
      </button>

      <div ref={panel} id={id} className="menu-panel" data-open={open ? '' : undefined} hidden={!open}>
        <nav>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.current ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <GetAppButton className="menu-get" ios={getApp.ios} android={getApp.android}>
          <AppleGlyph />
          {getApp.label}
        </GetAppButton>
      </div>
    </>
  );
}
