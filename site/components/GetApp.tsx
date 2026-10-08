'use client';

import { XIcon } from '@phosphor-icons/react/dist/csr/X';
import type { ReactNode } from 'react';

import { AppleLogo, GooglePlayLogo } from '@/components/StoreLogos';

/** The one dialog on the page, rendered by the masthead. */
const DIALOG_ID = 'get-app';

type Platform = 'ios' | 'android' | 'other';

/** iPadOS asks for desktop sites and says "Macintosh"; touch gives it away. */
export function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return 'other';
}

/**
 * A "Get the app" button.
 *
 * On a phone it goes straight to that phone's store: the App Store link is the
 * `href`, so an iPhone simply follows it (and so does any browser without
 * JavaScript), and an Android phone is sent to Google Play once there is a
 * listing. Everywhere else, a laptop above all, it opens the dialog with the
 * QR code, since the app cannot be installed on the machine doing the clicking.
 */
export function GetAppButton({
  className,
  ios,
  android,
  children,
}: {
  className: string;
  ios: string;
  android: string | null;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href={ios}
      onClick={(event) => {
        const platform = detectPlatform();
        if (platform === 'ios') return;
        if (platform === 'android' && android) {
          event.preventDefault();
          window.location.href = android;
          return;
        }
        const dialog = document.getElementById(DIALOG_ID);
        if (dialog instanceof HTMLDialogElement) {
          event.preventDefault();
          dialog.showModal();
        }
      }}
    >
      {children}
    </a>
  );
}

/**
 * The desktop dialog: a QR code for the phone, and both stores as links.
 *
 * The code points at `/get/`, which looks at the phone that opened it and goes
 * on to the App Store or Google Play. It is drawn on the server (`lib/qr.ts`),
 * so this component only lays it out. A native `<dialog>`: focus is trapped,
 * Escape closes it, and the close button is a form submit that needs no script.
 */
export function GetAppDialog({
  qr,
  ios,
  android,
  words,
}: {
  qr: { size: number; d: string };
  ios: string;
  android: string | null;
  words: { title: string; scan: string; appStore: string; play: string; playSoon: string; close: string };
}) {
  const pad = 2;
  const box = qr.size + pad * 2;

  return (
    <dialog
      id={DIALOG_ID}
      className="get-dialog"
      aria-labelledby="get-dialog-title"
      onClick={(event) => {
        // A click on the backdrop lands on the dialog itself, outside the card.
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="get-card">
        <form method="dialog">
          <button className="get-close" aria-label={words.close}>
            <XIcon size={20} weight="bold" aria-hidden />
          </button>
        </form>

        <img className="get-icon" src="/icon.png" alt="" width={64} height={64} />
        <h2 id="get-dialog-title">{words.title}</h2>

        <div className="get-qr">
          <svg viewBox={`0 0 ${box} ${box}`} role="img" aria-label={words.scan} shapeRendering="crispEdges">
            <rect width={box} height={box} fill="#fff" />
            <path d={qr.d} transform={`translate(${pad} ${pad})`} fill="#111114" />
          </svg>
        </div>
        <p className="get-scan">{words.scan}</p>

        <div className="get-stores">
          <a className="get-store" href={ios}>
            <AppleLogo size={18} />
            {words.appStore}
          </a>
          {android ? (
            <a className="get-store" href={android}>
              <GooglePlayLogo size={18} />
              {words.play}
            </a>
          ) : (
            <span className="get-store get-store-soon" aria-disabled="true">
              <GooglePlayLogo size={18} />
              {words.playSoon}
            </span>
          )}
        </div>
      </div>
    </dialog>
  );
}
