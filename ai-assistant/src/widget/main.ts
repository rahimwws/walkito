/**
 * The widget: one renderer for the six views, drawn from the tool result's
 * `structuredContent.kind`. Plain DOM, no framework; bridge.ts does the
 * talking to the host (ChatGPT, Claude) over the MCP Apps protocol. Styles are widget.css over the
 * generated tokens.css (the app's theme), so nothing here picks a colour.
 */
import { connect, on, openLink as hostOpenLink } from './bridge';

type Clip = { src: string };
type Card = { id: string; name: string; cue: string; dose: string; seconds?: number; clip: Clip | null };
type Cta = { line: string; bullets: string[]; button: string; url: string; code: string };
type Ui = { start: string; seconds: string; done: string; code: string; copied: string; copyCode: string; video: string; restDay: string; rest: string };
type Base = { cta?: Cta; footer: { disclaimer: string; evidence: string }; calm: boolean; lang?: string; ui?: Ui };
type Content = Base &
  (
    | { kind: 'routine'; title: string; intro: string; minutes: number; minutesLabel?: string; position: string; steps: Card[]; note?: string }
    | { kind: 'plan_week'; title: string; intro: string; days: Day[]; note?: string }
    | { kind: 'single_exercise'; title: string; exercise: Card; why?: string; evidence?: string; note?: string }
    | { kind: 'self_check'; title: string; steps: string[]; question?: string; result?: string; exercise?: Card; note?: string }
    | { kind: 'safety_card'; title: string; flags: string[]; selected: string[]; message?: string }
    | { kind: 'tips'; title: string; tips: { title: string; text: string }[] }
  );
type Day = { weekday: string; initial?: string; type: string; label: string; minutes: number; minutesLabel?: string; exercises: Card[] };

const root = document.getElementById('root') as HTMLElement;

/** The widget's few words. The result brings them in its language; these are
 * for a result from a server older than that. */
let ui: Ui = {
  start: 'Start {seconds}s',
  seconds: '{seconds}s',
  done: 'Done',
  code: 'Code {code}',
  copied: 'Copied',
  copyCode: 'Copy plan code {code}',
  video: 'Video: {name}',
  restDay: 'Rest day.',
  rest: 'Rest',
};
const say = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ''));


// ─── DOM helpers ────────────────────────────────────────────────────────────

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string> = {},
  ...children: (Node | string | null | undefined | false)[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'class') node.className = value;
    else node.setAttribute(key, value);
  }
  for (const child of children) if (child != null && child !== false) node.append(child);
  return node;
}

async function openLink(url: string) {
  if (await hostOpenLink(url)) return;
  window.open(url, '_blank', 'noopener');
}

// ─── Pieces ─────────────────────────────────────────────────────────────────

function video(card: Card, big = false): HTMLElement | null {
  if (!card.clip) return null;
  const v = el('video', {
    class: big ? 'clip clip-big' : 'clip',
    src: card.clip.src,
    muted: '',
    loop: '',
    playsinline: '',
    autoplay: '',
    preload: 'metadata',
    'aria-label': say(ui.video, { name: card.name }),
  });
  v.muted = true;
  return v;
}

function timer(seconds: number): HTMLElement {
  const label = say(ui.start, { seconds });
  const button = el('button', { class: 'chip chip-button', type: 'button' }, label);
  let left = 0;
  let handle = 0;
  button.onclick = () => {
    if (handle) {
      clearInterval(handle);
      handle = 0;
      button.textContent = label;
      return;
    }
    left = seconds;
    button.textContent = say(ui.seconds, { seconds: left });
    handle = window.setInterval(() => {
      left -= 1;
      if (left <= 0) {
        clearInterval(handle);
        handle = 0;
        button.textContent = ui.done;
        return;
      }
      button.textContent = say(ui.seconds, { seconds: left });
    }, 1000);
  };
  return button;
}

/** One exercise in the strip: the clip, then number, name, dose and cue. An
 * exercise with no clip of a person keeps its cue where the video would be. */
function tile(card: Card, n: number): HTMLElement {
  const clip = video(card);
  return el(
    'article',
    { class: clip ? 'tile' : 'tile tile-text' },
    clip ?? el('p', { class: 'tile-cue-big' }, card.cue),
    el(
      'div',
      { class: 'tile-body' },
      el('div', { class: 'tile-head' }, el('span', { class: 'num' }, String(n)), el('h3', {}, card.name)),
      el('span', { class: 'chip' }, card.dose),
      clip ? el('p', { class: 'cue' }, card.cue) : null,
    ),
  );
}

function strip(cards: Card[]): HTMLElement {
  return el('div', { class: 'strip' }, ...cards.map((c, i) => tile(c, i + 1)));
}

/** One exercise, large, for a demo or a single stretch. */
function single(card: Card): HTMLElement {
  return el(
    'article',
    { class: 'single' },
    video(card, true),
    el(
      'div',
      { class: 'single-body' },
      el('h3', {}, card.name),
      el('div', { class: 'chips' }, el('span', { class: 'chip' }, card.dose), card.seconds ? timer(card.seconds) : null),
      el('p', { class: 'cue' }, card.cue),
    ),
  );
}

function cta(c: Cta): HTMLElement {
  const code = el('button', { class: 'code', type: 'button', 'aria-label': say(ui.copyCode, { code: c.code }) }, say(ui.code, { code: c.code }));
  code.onclick = async () => {
    try {
      await navigator.clipboard.writeText(c.code);
      code.textContent = ui.copied;
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      getSelection()?.removeAllRanges();
      getSelection()?.addRange(range);
    }
  };
  const button = el('button', { class: 'primary', type: 'button' }, c.button);
  button.onclick = () => void openLink(c.url);
  return el('section', { class: 'cta' }, el('p', { class: 'cta-line' }, c.line), button, code);
}

function header(title: string, meta?: string): HTMLElement {
  return el('header', {}, meta ? el('p', { class: 'eyebrow' }, meta) : null, el('h2', {}, title));
}

/** The Plan screen's week circles; the day picked shows its exercises below. */
function week(days: Day[]): HTMLElement {
  const below = el('div', { class: 'day-below' });
  const row = el('div', { class: 'week', role: 'tablist' });
  const show = (i: number) => {
    row.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-selected', String(i === j)));
    const day = days[i];
    below.replaceChildren(
      el(
        'p',
        { class: 'eyebrow' },
        day.exercises.length ? `${day.weekday} · ${day.label} · ${day.minutesLabel ?? `${day.minutes} min`}` : `${day.weekday} · ${ui.rest}`,
      ),
      day.exercises.length ? strip(day.exercises) : el('p', { class: 'muted' }, ui.restDay),
    );
  };
  days.forEach((day, i) => {
    const b = el(
      'button',
      { class: `day day-${day.type}`, type: 'button', role: 'tab', 'aria-label': `${day.weekday}, ${day.label}` },
      el('span', { class: 'dot' }),
      el('span', { class: 'day-name' }, day.initial ?? day.weekday.slice(0, 1)),
    );
    b.onclick = () => show(i);
    row.append(b);
  });
  show(Math.max(0, days.findIndex((d) => d.exercises.length > 0)));
  return el('div', { class: 'week-wrap' }, row, below);
}

// ─── Views ──────────────────────────────────────────────────────────────────

function render(c: Content) {
  document.body.classList.toggle('calm', c.calm);
  if (c.ui) ui = c.ui;
  if (c.lang) document.documentElement.lang = c.lang;
  const parts: (HTMLElement | null)[] = [];
  switch (c.kind) {
    case 'routine':
      parts.push(header(c.title, `${c.minutesLabel ?? `${c.minutes} min`} · ${c.position}`));
      if (c.note) parts.push(el('p', { class: 'note' }, c.note));
      parts.push(strip(c.steps));
      break;
    case 'plan_week':
      parts.push(header(c.title, c.intro));
      if (c.note) parts.push(el('p', { class: 'note' }, c.note));
      parts.push(week(c.days));
      break;
    case 'single_exercise':
      parts.push(single(c.exercise));
      if (c.note) parts.push(el('p', { class: 'note' }, c.note));
      break;
    case 'self_check':
      parts.push(header(c.title));
      parts.push(el('ol', { class: 'steps' }, ...c.steps.map((s) => el('li', {}, s))));
      if (c.question) parts.push(el('p', { class: 'question' }, c.question));
      if (c.exercise) parts.push(single(c.exercise));
      if (c.result) parts.push(el('p', { class: 'result' }, c.result));
      break;
    case 'safety_card':
      parts.push(header(c.title));
      if (c.message) parts.push(el('p', { class: 'warning' }, c.message));
      parts.push(el('ul', { class: 'flag-list' }, ...c.flags.map((f) => el('li', c.selected.includes(f) ? { class: 'selected' } : {}, f))));
      break;
    case 'tips':
      parts.push(header(c.title));
      parts.push(el('div', { class: 'tips' }, ...c.tips.map((t) => el('article', { class: 'tip' }, el('h3', {}, t.title), el('p', {}, t.text)))));
      break;
  }
  if (c.cta) parts.push(cta(c.cta));
  parts.push(el('footer', {}, c.footer.disclaimer));
  root.replaceChildren(...parts.filter((p): p is HTMLElement => p != null));
}

// ─── Host wiring ────────────────────────────────────────────────────────────

function applyTheme(theme: unknown) {
  document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';
}

on('ui/notifications/tool-result', (params) => {
  const content = (params as { structuredContent?: Content }).structuredContent;
  if (content?.kind) render(content);
});
on('ui/notifications/host-context-changed', (context) => applyTheme((context as { theme?: string }).theme));

void connect({ name: 'Walkito', version: '1.0.0' })
  .then((result) => applyTheme((result.hostContext as { theme?: string } | undefined)?.theme))
  .catch(() => applyTheme('dark'))
  .finally(() => {
    // ChatGPT may also hand the result over on window.openai.
    const legacy = (window as { openai?: { toolOutput?: Content } }).openai?.toolOutput;
    if (legacy?.kind && !root.childElementCount) render(legacy);
  });
