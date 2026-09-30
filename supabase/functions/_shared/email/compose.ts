import { buttonUrl, oneClickUrl, settingsUrl, unsubscribePageUrl, unsubscribeToken } from './links.ts';
import { renderEmail } from './template.ts';
import type { Decision, Locale } from './types.ts';

/**
 * One decided email, as the request body Resend takes.
 *
 * Kept apart from the edge function so a test can render the exact message a
 * user would get — subject, HTML, plain text, headers — without a network.
 */

export type MailConfig = {
  /** `walkito <hello@walkito.site>`. */
  from: string;
  replyTo: string;
  postalAddress: string;
  /** The site, for buttons, the unsubscribe page and the mascot: `https://walkito.site`. */
  linkBase: string;
  /** `https://<ref>.supabase.co/functions/v1`, for the one-click unsubscribe target. */
  functionsBase: string;
  unsubscribeSecret: string;
};

export type ResendMessage = {
  from: string;
  to: string[];
  reply_to: string;
  subject: string;
  html: string;
  text: string;
  headers: Record<string, string>;
  tags: { name: string; value: string }[];
};

export async function composeMessage(
  decision: Decision,
  recipient: { userId: string; email: string; locale: Locale },
  config: MailConfig,
): Promise<ResendMessage> {
  const token = await unsubscribeToken(recipient.userId, config.unsubscribeSecret);
  const { html, text } = await renderEmail({
    content: decision.content,
    locale: recipient.locale,
    buttonUrl: buttonUrl(config.linkBase, decision.content.button.path, decision.key),
    unsubscribeUrl: unsubscribePageUrl(config.linkBase, token, recipient.locale),
    settingsUrl: settingsUrl(config.linkBase),
    // Lowercase like every other word in the email.
    postalAddress: config.postalAddress.toLowerCase(),
    assetBase: config.linkBase,
  });
  return {
    from: config.from,
    to: [recipient.email],
    reply_to: config.replyTo,
    subject: decision.content.subject,
    html,
    text,
    headers: {
      // RFC 8058: Gmail and Apple Mail show their own unsubscribe button and
      // POST here, so leaving takes one tap without opening the email.
      'List-Unsubscribe': `<${oneClickUrl(config.functionsBase, token)}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
    },
    tags: [
      { name: 'email_key', value: decision.key },
      { name: 'locale', value: recipient.locale },
    ],
  };
}
