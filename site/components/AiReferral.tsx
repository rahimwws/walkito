'use client';

import { useEffect } from 'react';

/**
 * Counts App Store installs that start from an AI assistant, without a tracker.
 *
 * When a visitor lands from ChatGPT, Perplexity, Copilot, Gemini or Claude
 * (by referrer, or ChatGPT's own `utm_source=chatgpt.com`), the App Store links
 * on that page get the campaign `ai-<source>` instead of their placement name.
 * App Store Connect then reports installs per assistant under Campaigns.
 *
 * Nothing is stored, sent or set: no cookie, no storage, no request. It only
 * rewrites links already on the page, and only on the page the visitor landed
 * on, so the privacy policy stays true as written.
 */
const SOURCES: readonly [RegExp, string][] = [
  [/(^|\.)chatgpt\.com$|(^|\.)openai\.com$/, 'ai-chatgpt'],
  [/(^|\.)perplexity\.ai$/, 'ai-perplexity'],
  [/(^|\.)copilot\.microsoft\.com$|^copilot\.cloud\.microsoft$/, 'ai-copilot'],
  [/(^|\.)gemini\.google\.com$|^bard\.google\.com$/, 'ai-gemini'],
  [/(^|\.)claude\.ai$/, 'ai-claude'],
];

function aiCampaign(): string | null {
  const utm = new URLSearchParams(window.location.search).get('utm_source') ?? '';
  let host = '';
  try {
    host = document.referrer ? new URL(document.referrer).hostname : '';
  } catch {
    host = '';
  }
  for (const [re, ct] of SOURCES) {
    if (re.test(host) || re.test(utm)) return ct;
  }
  return null;
}

export function AiReferral() {
  useEffect(() => {
    const ct = aiCampaign();
    if (!ct) return;
    for (const a of document.querySelectorAll<HTMLAnchorElement>('a[href*="apps.apple.com"][href*="ct="]')) {
      const url = new URL(a.href);
      url.searchParams.set('ct', ct);
      a.href = url.toString();
    }
  }, []);
  return null;
}
