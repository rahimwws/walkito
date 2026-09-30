import { Body, Button, Container, Head, Html, Img, Link, Preview, Section, Text, render } from '@react-email/components';
import { createElement as h, type ReactElement } from 'react';

import { copyFor } from './copy.ts';
import type { EmailContent, Locale } from './types.ts';

/**
 * The one email layout, in React Email.
 *
 * Written with `createElement` rather than JSX so the same file runs under
 * Deno in the edge function and under Bun in the tests without either needing
 * a JSX setting the other lacks.
 *
 * Built to look like the app: the mascot waving at the top, SF Pro Rounded
 * where the mail app has it (`ui-rounded` in Apple Mail), ink straight on
 * white, one black pill button, and the dark scheme inverted for mail apps that
 * honour `prefers-color-scheme`. One idea, one button.
 *
 * No card. It was a rounded white box on a grey page, which inside a mail app
 * is a container inside a container: the message already sits on the app's own
 * surface, so the text goes straight onto it.
 */

export type TemplateProps = {
  content: EmailContent;
  locale: Locale;
  buttonUrl: string;
  unsubscribeUrl: string;
  settingsUrl: string;
  /** The company's postal address. Required by US anti-spam law in every email. */
  postalAddress: string;
  /** Where `email/mascot.png` is served from, e.g. `https://walkito.site`. */
  assetBase: string;
};

const FONT = 'ui-rounded, "SF Pro Rounded", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const INK = '#111114';
const MUTED = '#77777E';
const FAINT = '#9E9EA6';
const PAGE = '#FFFFFF';
const LINE = '#EDEDF0';

/** Dark scheme, for Apple Mail and the others that read the media query. Mirrors `palette.dark`. */
const DARK_CSS = `
:root { color-scheme: light dark; supported-color-schemes: light dark; }
@media (prefers-color-scheme: dark) {
  .page { background-color: #111113 !important; }
  .ink { color: #FFFFFF !important; }
  .muted, .faint, .faint a { color: #9E9EA6 !important; }
  .btn { background-color: #FFFFFF !important; color: #111114 !important; }
  .rule { border-color: #2A2A2E !important; }
}
`;

export function EmailLayout(props: TemplateProps): ReactElement {
  const { content, locale } = props;
  const footer = copyFor(locale).footer;
  const text = (className: string, style: Record<string, string | number>, children: string) =>
    h(Text, { className, style: { margin: 0, fontFamily: FONT, ...style } }, children);

  return h(
    Html,
    { lang: locale, dir: 'ltr' },
    h(Head, null, h('meta', { name: 'color-scheme', content: 'light dark' }), h('meta', { name: 'supported-color-schemes', content: 'light dark' }), h('style', null, DARK_CSS)),
    h(Preview, null, content.preheader),
    h(
      Body,
      { className: 'page', style: { backgroundColor: PAGE, margin: 0, padding: '28px 20px 24px', fontFamily: FONT } },
      h(
        Container,
        { style: { maxWidth: 520, margin: '0 auto', padding: 0 } },
        h(Img, { src: `${props.assetBase.replace(/\/+$/, '')}/email/mascot.png`, width: 64, height: 64, alt: 'walkito', style: { margin: '0 0 14px -6px' } }),
        content.greeting != null ? text('ink', { color: INK, fontSize: 17, lineHeight: '26px', fontWeight: 700, marginBottom: 12 }, content.greeting) : null,
        ...content.paragraphs.map((p, i) =>
          h(Text, { key: i, className: 'ink', style: { margin: '0 0 12px', color: INK, fontSize: 17, lineHeight: '26px', fontFamily: FONT } }, p),
        ),
        h(
          Section,
          { style: { margin: '10px 0 6px' } },
          h(
            Button,
            {
              href: props.buttonUrl,
              className: 'btn',
              style: {
                backgroundColor: INK,
                color: '#FFFFFF',
                borderRadius: 999,
                padding: '14px 24px',
                fontSize: 16,
                fontWeight: 800,
                fontFamily: FONT,
                textDecoration: 'none',
                display: 'inline-block',
              },
            },
            content.button.label,
          ),
        ),
        content.ps != null ? text('muted', { color: MUTED, fontSize: 15, lineHeight: '22px', marginTop: 14 }, content.ps) : null,
        h(
          Section,
          { className: 'rule', style: { borderTop: `1px solid ${LINE}`, marginTop: 22, paddingTop: 14 } },
          text('faint', { color: FAINT, fontSize: 12, lineHeight: '18px' }, footer.why),
          h(
            Text,
            { className: 'faint', style: { margin: '2px 0 0', color: FAINT, fontSize: 12, lineHeight: '18px', fontFamily: FONT } },
            h(Link, { href: props.unsubscribeUrl, style: { color: FAINT, textDecoration: 'underline' } }, footer.unsubscribe),
            ' · ',
            h(Link, { href: props.settingsUrl, style: { color: FAINT, textDecoration: 'underline' } }, footer.settings),
          ),
          text('faint', { color: FAINT, fontSize: 12, lineHeight: '18px', marginTop: 2 }, `walkito · ${props.postalAddress}`),
        ),
      ),
    ),
  );
}

export async function renderEmail(props: TemplateProps): Promise<{ html: string; text: string }> {
  const element = EmailLayout(props);
  const [html, text] = await Promise.all([render(element), render(element, { plainText: true })]);
  return { html, text };
}
