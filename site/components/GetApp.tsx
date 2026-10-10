'use client';

import { ArrowRightIcon } from '@phosphor-icons/react/dist/csr/ArrowRight';
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
 * The desktop dialog: "Scan to download Walkito", and under it one grey panel
 * with the app's Home screen, the QR code over its corner with the icon in the
 * middle, and both stores as a row of links.
 *
 * The code points at `/get/`, which looks at the phone that opened it and goes
 * on to the App Store or Google Play. It is drawn on the server (`lib/qr.ts`,
 * high correction, its middle cleared for the icon), so this component only
 * lays it out. A native `<dialog>`: focus is trapped, Escape closes it, and the
 * close button is a form submit that needs no script. No star ratings beside
 * the stores: the listing has none yet.
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
        <div className="get-head">
          <h2 id="get-dialog-title">{words.title}</h2>
          <form method="dialog">
            <button className="get-close" aria-label={words.close}>
              <XIcon size={26} aria-hidden />
            </button>
          </form>
        </div>

        <div className="get-panel">
          <div className="get-stage">
            <img
              className="get-phone"
              src="/hero/phone-home.webp"
              srcSet="/hero/phone-home.webp 376w, /hero/phone-home@2x.webp 751w"
              sizes="230px"
              width={751}
              height={1550}
              alt=""
              loading="lazy"
            />
            <div className="get-qr">
              <svg viewBox={`0 0 ${box} ${box}`} role="img" aria-label={words.scan} shapeRendering="crispEdges">
                <rect width={box} height={box} fill="#fff" />
                <path d={qr.d} transform={`translate(${pad} ${pad})`} fill="#111114" />
              </svg>
              <img className="get-qr-icon" src="/icon.png" alt="" width={64} height={64} />
            </div>
          </div>

          <div className="get-stores">
            <a className="get-store" href={ios}>
              <AppleLogo size={22} />
              {words.appStore}
              <ArrowRightIcon size={18} weight="bold" aria-hidden />
            </a>
            {android ? (
              <a className="get-store" href={android}>
                <GooglePlayLogo size={22} />
                {words.play}
                <ArrowRightIcon size={18} weight="bold" aria-hidden />
              </a>
            ) : (
              <span className="get-store get-store-soon" aria-disabled="true">
                <GooglePlayLogo size={22} />
                {words.playSoon}
              </span>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
