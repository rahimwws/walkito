/**
 * The two guide tools without React: the calf raise calculator and the
 * recovery timeline, for pages served without Next's runtime
 * (scripts/strip-js.mjs bundles this file and adds it only to pages that
 * have a tool).
 *
 * Words, numbers and parsing come from the same modules the React components
 * use (lib/tools/calf-copy.ts, calf-norms.ts, pf-timeline-copy.ts,
 * pf-timeline.ts), and the markup built here matches what those components
 * render, class for class. Tested by scripts/test-site-js.mjs.
 */
import type { Lang } from '@/lib/i18n';
import { CALF_COPY, toInt } from '@/lib/tools/calf-copy';
import { calfMedian, compareToMedian, limbSymmetry, type Sex } from '@/lib/tools/calf-norms';
import { HANSEN_POINTS } from '@/lib/tools/pf-timeline';
import { HIGHLIGHT, TIMELINE_COPY, type Stage } from '@/lib/tools/pf-timeline-copy';

type Child = Node | string | null | false | undefined;

function h(tag: string, className: string | null, ...children: Child[]): HTMLElement {
  const el = document.createElement(tag);
  if (className) el.className = className;
  for (const c of children) if (c != null && c !== false) el.append(c);
  return el;
}

/** App Store links copied in after site.js ran still get the AI tag. */
function tagAi(root: ParentNode) {
  const ct = document.documentElement.dataset.aiCt;
  if (!ct) return;
  root.querySelectorAll<HTMLAnchorElement>('a[href*="apps.apple.com"][href*="ct="]').forEach((a) => {
    const url = new URL(a.href);
    url.searchParams.set('ct', ct);
    a.href = url.toString();
  });
}

function calfCalc(root: HTMLElement) {
  const lang = (root.dataset.lang ?? 'en') as Lang;
  const c = CALF_COPY[lang] ?? CALF_COPY.en!;
  const form = root.querySelector('form');
  const out = root.querySelector<HTMLElement>('[data-tool-result]');
  const template = root.querySelector<HTMLTemplateElement>('template[data-tool-children]');
  if (!form || !out) return;
  const field = (name: string) => form.querySelector<HTMLInputElement>(`input[name="${name}"]`)?.value ?? '';
  const radios = [...form.querySelectorAll<HTMLInputElement>('input[type="radio"][name="sex"]')];
  const sex = (): Sex => (radios.find((r) => r.checked)?.value as Sex) ?? 'female';
  radios.forEach((r) =>
    r.addEventListener('change', () => {
      radios.forEach((x) => x.closest('label')?.classList.toggle('on', x.checked));
    }),
  );

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const a = toInt(field('age'));
    const l = toInt(field('left'));
    const r = toInt(field('right'));
    out.textContent = '';
    if (a == null || l == null || r == null || a > 110 || l > 200 || r > 200) {
      out.append(h('p', 'tool-error', c.invalid));
      return;
    }
    if (a < 18) {
      out.append(h('p', 'tool-error', c.tooYoung));
      return;
    }
    const s = sex();
    const { median, clamped } = calfMedian(a, s);
    const sym = limbSymmetry(l, r);
    const ageUsed = a < 20 ? 20 : 80;
    const list = h(
      'ul',
      null,
      ...(['left', 'right'] as const).map((side) => {
        const n = side === 'left' ? l : r;
        const v = compareToMedian(n, median);
        return h('li', `tool-verdict tool-${v}`, h('b', null, `${side === 'left' ? c.left : c.right}${lang === 'fr' ? '\u00A0:' : ':'} ${n}`), `, ${c.verdict[v]}`);
      }),
    );
    const result = h(
      'div',
      'tool-result',
      h('p', 'tool-result-lead', c.typical(s, clamped ? ageUsed : a, median)),
      clamped && h('p', 'tool-note', c.clamped(ageUsed)),
      list,
      h('p', 'tool-note', c.aroundNote),
      sym != null &&
        h(
          'p',
          sym.meets ? 'tool-balance' : 'tool-balance tool-below',
          h('b', null, c.balance(sym.lsi)),
          ' ',
          sym.meets ? c.balanceOk : c.balanceLow(l < r ? 'left' : 'right', sym.gap),
        ),
      h('p', 'tool-note', c.disclaimer),
      h('p', 'tool-cta', c.cta),
    );
    if (template) {
      const children = template.content.cloneNode(true) as DocumentFragment;
      tagAi(children);
      result.append(children);
    }
    out.append(result);
  });
}

function pfTimeline(root: HTMLElement) {
  const lang = (root.dataset.lang ?? 'en') as Lang;
  const c = TIMELINE_COPY[lang];
  const out = root.querySelector<HTMLElement>('[data-tool-result]');
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('button[data-stage]')];
  const bars = [...root.querySelectorAll<HTMLLIElement>('.pf-timeline-chart li')];
  const latt = root.querySelector<HTMLElement>('.pf-timeline-latt');
  if (!c || !out) return;
  buttons.forEach((button) =>
    button.addEventListener('click', () => {
      const stage = button.dataset.stage as Stage;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      out.textContent = '';
      out.append(
        h('div', 'pf-timeline-result', ...c.text[stage].map((p) => h('p', null, p)), h('p', 'pf-timeline-forecast', c.notForecast)),
      );
      const lit = HIGHLIGHT[stage];
      bars.forEach((li, i) => {
        const on = lit.includes(HANSEN_POINTS[i].year);
        if (on) li.className = 'is-lit';
        else li.removeAttribute('class');
      });
      latt?.classList.toggle('is-lit', stage === 'early' || stage === 'window');
    }),
  );
}

document.querySelectorAll<HTMLElement>('[data-tool="calf-calc"]').forEach(calfCalc);
document.querySelectorAll<HTMLElement>('[data-tool="pf-timeline"]').forEach(pfTimeline);
