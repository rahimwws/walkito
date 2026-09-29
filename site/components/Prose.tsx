import { cloneElement, Fragment, isValidElement, type ReactNode } from 'react';

/** A word with a hyphen in it: single-leg, follow-up, что-то, 12-недельная. */
const HYPHENATED = /([\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)+)/u;

/**
 * Text with every hyphenated word kept on one line.
 *
 * `hyphens: manual` stops the browser inventing hyphens, but it still breaks
 * after a hyphen that is already there, which leaves "single-" at the end of
 * one line and "leg" at the start of the next. A no-wrap span around the word
 * is the only way to stop that without changing the text itself: a
 * non-breaking hyphen or a word joiner would put a different character into
 * what search engines and screen readers read.
 */
function keepWords(text: string): ReactNode {
  const parts = text.split(HYPHENATED);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/**
 * `keepWords` over a tree of plain elements: every string child of an HTML
 * element or fragment. Components are left alone, since their text does not
 * exist until they render; a component that shows prose calls this itself.
 */
export function typeset(node: ReactNode): ReactNode {
  if (typeof node === 'string') return keepWords(node);
  if (Array.isArray(node)) return node.map(typeset);
  if (
    isValidElement<{ children?: ReactNode }>(node) &&
    (typeof node.type === 'string' || node.type === Fragment) &&
    node.props.children !== undefined
  ) {
    const kids = node.props.children;
    // Spread an array back out, so React sees the same static children it had.
    return Array.isArray(kids)
      ? cloneElement(node, undefined, ...kids.map(typeset))
      : cloneElement(node, undefined, typeset(kids));
  }
  return node;
}

/** A page's `<main>`, with its text run through `typeset`. */
export function Prose({ className, children }: { className?: string; children: ReactNode }) {
  return <main className={className}>{typeset(children)}</main>;
}
