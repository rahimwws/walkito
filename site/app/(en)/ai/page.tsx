import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The docs page the ChatGPT and Claude directory listings link to: what the
 * Walkito assistant does, its tools, example prompts, privacy and contact.
 * The tools themselves live in `ai-assistant/` (served at /mcp); their copy is
 * kept in step with ai-assistant/src/server.ts and LISTING.md. English only,
 * like the assistant.
 */
export const metadata: Metadata = {
  title: 'Walkito in ChatGPT and Claude',
  description:
    'Use Walkito inside ChatGPT and Claude: short foot and calf exercises with videos, a 7-day starter plan, and when to see a doctor. Nothing you type is stored.',
  alternates: { canonical: '/ai/' },
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

const TOOLS: [string, string][] = [
  ['Relief now', 'A gentle 3-minute seated routine for a heel, arch or foot that hurts today, with short videos and the signs that mean seeing a doctor.'],
  ['First-step stretch', 'The plantar fascia stretch done in bed before standing up: 10 × 10 seconds per foot.'],
  ['Starter plan', 'A 7-day plan of short daily exercises from the painful area, the minutes a day and the equipment at home.'],
  ['Exercise demo', 'A short video and cues for one exercise, such as short foot, towel heel raises or knee to wall.'],
  ['Flat foot check', 'The big toe lift check at home, and what the result usually means.'],
  ['When to see a doctor', 'The warning signs that mean getting checked by a doctor before doing exercises.'],
  ['Feet after work', 'A short routine for after a long shift on your feet, with shoe tips.'],
  ['Shoes and inserts', 'General footwear tips. No brands.'],
  ['Ready to run', 'A short check before running again, and a gentle place to start.'],
];

export default function AiPage() {
  return (
    <>
      <Masthead />

      <Prose className="shell prose">
        <h1>Walkito in ChatGPT and Claude</h1>
        <p className="updated">Short foot and calf exercises for heel pain, arch pain and flat feet, inside the chat.</p>

        <p>
          Ask ChatGPT or Claude about heel pain, plantar fasciitis, flat feet, Achilles or shin pain, and
          Walkito can answer with exercises you can follow straight away: short looping videos, the dose,
          and one line on how to do each. A starter plan comes with a code that carries its settings into
          the Walkito app, where the plan then changes every day with your morning check-in.
        </p>

        <h2>What it can do</h2>
        <ul>
          {TOOLS.map(([name, text]) => (
            <li key={name}>
              <b>{name}:</b> {text}
            </li>
          ))}
        </ul>

        <h2>Try asking</h2>
        <ul>
          <li>“My heel hurts in the morning, what can I do?”</li>
          <li>“Give me a 5-minute plan for flat feet.”</li>
          <li>“How do I do the short foot exercise?”</li>
          <li>“Walkito, build me a plan for Achilles pain, 10 minutes, I have a step.”</li>
        </ul>

        <h2>Safety</h2>
        <p>
          Walkito is not a medical device and does not diagnose, treat, cure or prevent any medical
          condition. If the pain followed a fall or a twist, or comes with numbness, swelling, warmth,
          fever, pain at night, a sudden pop at the back of the ankle or a hot, red foot with diabetes, it
          shows the signs that mean seeing a doctor, not exercises. With pain of 7 out of 10 or more, it
          keeps to a gentle seated routine.
        </p>

        <h2>Privacy</h2>
        <p>
          We don’t store anything you type here. The assistant sends our server only the settings it
          chose for a tool, and nothing is kept: no messages, names, pain values or IP addresses. The
          details are in the <a href="/privacy/#ai-assistants">privacy policy</a>.
        </p>

        <h2>For developers</h2>
        <p>
          The server is a remote MCP server with MCP Apps views at <code>https://walkito.site/mcp</code>{' '}
          (Streamable HTTP, no sign-in). All tools are read-only.
        </p>

        <h2>Contact</h2>
        <p>Questions or something wrong? Write to {mail}. A person replies.</p>
      </Prose>

      <Footer />
    </>
  );
}
