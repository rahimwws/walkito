/**
 * A section's tilted pair of chips: its number and its name ("01 · For you").
 * Decoration that repeats the heading's job, so it is hidden from screen
 * readers; pass `as="h2"` only where the chip *is* the heading (section 02).
 * As a heading it reads as its name alone: the number is hidden on its own.
 */
export function Kicker({ num, label, as: Tag = 'span', className }: { num: string; label: string; as?: 'span' | 'h2'; className?: string }) {
  const heading = Tag === 'h2';
  return (
    <Tag className={`who-kicker${className ? ` ${className}` : ''}`} aria-hidden={heading ? undefined : true}>
      <span className="kick-num" aria-hidden={heading ? true : undefined}>
        {num}
      </span>
      {/* So the text reads "02 It's not your fault.", not "02It's". A flex
          container draws no space between its items, so the chips do not move. */}
      {' '}
      <span className="kick-label">{label}</span>
    </Tag>
  );
}
