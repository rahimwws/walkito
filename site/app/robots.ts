import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';

/**
 * Who may crawl, and the reasoning for letting the AI bots in.
 *
 * Training and retrieval are separate crawlers now, and they can be treated
 * separately — you can refuse to be trained on while staying eligible to be
 * cited. For a pre-launch brand with no content moat there is nothing to
 * protect and everything to gain, so both are allowed.
 *
 * Two honest limits on all of this. robots.txt is a request and not a fence:
 * compliance is voluntary. And a user who pastes a URL into ChatGPT and asks it
 * to read the page triggers a real-time fetch that may ignore this file
 * entirely. Nothing here is a security control.
 */
// robots.txt is a build artefact here, not a route — `output: export` has no
// server to evaluate it per request, and Next refuses to guess.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /*
       * Nothing is disallowed, and `/_next/` in particular must not be.
       *
       * The brief's example blocked it. Every stylesheet, every script and the
       * self-hosted font live under `/_next/static/`, and Google renders with a
       * real browser — blocked CSS means it judges the layout and the mobile
       * experience from unstyled HTML. Google's own guidance is explicit about
       * not blocking these.
       *
       * There is no `/api/` on a statically exported site either, so the rule
       * protected nothing and cost the render.
       */
      { userAgent: '*', allow: '/' },

      // Retrieval — these are the ones that produce citations.
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },

      // Training.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
