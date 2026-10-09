/**
 * The widget: one renderer for the six views, drawn from the tool result's
 * `structuredContent.kind`. Plain DOM, no framework; bridge.ts does the
 * talking to the host (ChatGPT, Claude) over the MCP Apps protocol. Styles are widget.css over the
 * generated tokens.css (the app's theme), so nothing here picks a colour.
 */
import { connect, on, openLink as hostOpenLink } from './bridge';

type Clip = { src: string; poster?: string };
type Card = { id: string; name: string; cue: string; dose: string; seconds?: number; clip: Clip | null };
type Cta = { line: string; bullets: string[]; button: string; url: string; code: string };
type Base = { cta?: Cta; footer: { disclaimer: string; evidence: string }; calm: boolean };
type RedFlags = { title: string; flags: string[] };
type Content = Base &
  (
    | { kind: 'routine'; title: string; intro: string; minutes: number; position: string; steps: Card[]; note?: string; redFlags: RedFlags }
    | { kind: 'plan_week'; title: string; intro: string; days: Day[]; appChanges: string; note?: string; redFlags: RedFlags }
    | { kind: 'single_exercise'; title: string; exercise: Card; why?: string; evidence?: string; note?: string }
    | { kind: 'self_check'; title: string; steps: string[]; question?: string; result?: string; exercise?: Card; note?: string }
    | { kind: 'safety_card'; title: string; flags: string[]; selected: string[]; message?: string }
    | { kind: 'tips'; title: string; tips: { title: string; text: string }[] }
  );
type Day = { weekday: string; type: string; label: string; minutes: number; exercises: Card[] };

const root = document.getElementById('root') as HTMLElement;


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

function video(card: Card): HTMLElement {
  if (!card.clip) return el('div', { class: 'clip clip-empty' }, 'Video coming soon');
  const v = el('video', {
    class: 'clip',
    src: card.clip.src,
    muted: '',
    loop: '',
    playsinline: '',
    autoplay: '',
    preload: 'metadata',
    'aria-label': `Video: ${card.name}`,
    ...(card.clip.poster ? { poster: card.clip.poster } : {}),
  });
  v.muted = true;
  return v;
}

function timer(seconds: number): HTMLElement {
  const button = el('button', { class: 'chip chip-button', type: 'button' }, `Start ${seconds}s`);
  let left = 0;
  let handle = 0;
  button.onclick = () => {
    if (handle) {
      clearInterval(handle);
      handle = 0;
      button.textContent = `Start ${seconds}s`;
      return;
    }
    left = seconds;
    button.textContent = `${left}s`;
    handle = window.setInterval(() => {
      left -= 1;
      if (left <= 0) {
        clearInterval(handle);
        handle = 0;
        button.textContent = 'Done';
        return;
      }
      button.textContent = `${left}s`;
    }, 1000);
  };
  return button;
}

/** The session screen's exercise card: clip, name, dose chip, one-line cue. */
function exercise(card: Card, opts: { timer?: boolean } = {}): HTMLElement {
  return el(
    'article',
    { class: 'ex' },
    video(card),
    el(
      'div',
      { class: 'ex-body' },
      el('h3', {}, card.name),
      el('div', { class: 'chips' }, el('span', { class: 'chip' }, card.dose), opts.timer && card.seconds ? timer(card.seconds) : null),
      el('p', { class: 'cue' }, card.cue),
    ),
  );
}

function redFlags(block: RedFlags): HTMLElement {
  return el('details', { class: 'flags' }, el('summary', {}, block.title), el('ul', {}, ...block.flags.map((f) => el('li', {}, f))));
}

function cta(c: Cta): HTMLElement {
  const code = el('button', { class: 'code', type: 'button', 'aria-label': `Copy plan code ${c.code}` }, `Plan code: ${c.code}`);
  code.onclick = async () => {
    try {
      await navigator.clipboard.writeText(c.code);
      code.textContent = `Copied: ${c.code}`;
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };
  const button = el('button', { class: 'primary', type: 'button' }, c.button);
  button.onclick = () => void openLink(c.url);
  return el(
    'section',
    { class: 'cta' },
    el('p', { class: 'cta-line' }, c.line),
    el('ul', { class: 'cta-list' }, ...c.bullets.map((b) => el('li', {}, b))),
    button,
    code,
  );
}

function footer(f: Base['footer']): HTMLElement {
  return el('footer', {}, el('p', {}, f.disclaimer), el('p', {}, f.evidence));
}

function header(title: string, intro?: string, meta?: string): HTMLElement {
  return el('header', {}, meta ? el('p', { class: 'eyebrow' }, meta) : null, el('h2', {}, title), intro ? el('p', { class: 'intro' }, intro) : null);
}

/** The Plan screen's week strip: a circle per day, tinted by the day's kind. */
function week(days: Day[]): HTMLElement {
  const list = el('div', { class: 'day-list' });
  const strip = el('div', { class: 'week', role: 'tablist' });
  const show = (i: number) => {
    strip.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-selected', String(i === j)));
    const day = days[i];
    list.replaceChildren(
      el('p', { class: 'day-meta' }, day.exercises.length ? `${day.weekday} · ${day.label} · ${day.minutes} min` : `${day.weekday} · ${day.label}`),
      ...(day.exercises.length ? day.exercises.map((e) => exercise(e)) : [el('p', { class: 'rest' }, 'A rest day.')]),
    );
  };
  days.forEach((day, i) => {
    const b = el(
      'button',
      { class: `day day-${day.type}`, type: 'button', role: 'tab', 'aria-label': `${day.weekday}, ${day.label}` },
      el('span', { class: 'day-name' }, day.weekday),
      el('span', { class: 'dot' }),
    );
    b.onclick = () => show(i);
    strip.append(b);
  });
  show(Math.max(0, days.findIndex((d) => d.exercises.length > 0)));
  return el('div', {}, strip, list);
}

// ─── Views ──────────────────────────────────────────────────────────────────

function render(c: Content) {
  document.body.classList.toggle('calm', c.calm);
  const parts: (HTMLElement | null)[] = [];
  switch (c.kind) {
    case 'routine':
      parts.push(header(c.title, c.intro, `${c.minutes} min · ${c.position}`));
      if (c.note) parts.push(el('p', { class: 'note' }, c.note));
      parts.push(...c.steps.map((s) => exercise(s, { timer: true })));
      parts.push(redFlags(c.redFlags));
      break;
    case 'plan_week':
      parts.push(header(c.title, c.intro));
      if (c.note) parts.push(el('p', { class: 'note' }, c.note));
      parts.push(week(c.days), el('p', { class: 'app-changes' }, c.appChanges), redFlags(c.redFlags));
      break;
    case 'single_exercise':
      parts.push(header(c.title));
      parts.push(exercise(c.exercise, { timer: true }));
      if (c.why) parts.push(el('p', { class: 'intro' }, c.why));
      if (c.evidence) parts.push(el('p', { class: 'evidence' }, c.evidence));
      if (c.note) parts.push(el('p', { class: 'note' }, c.note));
      break;
    case 'self_check':
      parts.push(header(c.title));
      parts.push(el('ol', { class: 'steps' }, ...c.steps.map((s) => el('li', {}, s))));
      if (c.question) parts.push(el('p', { class: 'question' }, c.question));
      if (c.exercise) parts.push(exercise(c.exercise));
      if (c.result) parts.push(el('p', { class: 'result' }, c.result));
      if (c.note) parts.push(el('p', { class: 'note' }, c.note));
      break;
    case 'safety_card':
      parts.push(header(c.title));
      if (c.message) parts.push(el('p', { class: 'warning' }, c.message));
      parts.push(
        el('ul', { class: 'flag-list' }, ...c.flags.map((f) => el('li', c.selected.includes(f) ? { class: 'selected' } : {}, f))),
      );
      break;
    case 'tips':
      parts.push(header(c.title));
      parts.push(...c.tips.map((t) => el('article', { class: 'tip' }, el('h3', {}, t.title), el('p', {}, t.text))));
      break;
  }
  if (c.cta) parts.push(cta(c.cta));
  parts.push(footer(c.footer));
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
