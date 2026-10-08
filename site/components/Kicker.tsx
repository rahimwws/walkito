/**
 * A section's tilted pair of chips: its number and its name ("01 · For you").
 * Decoration that repeats the heading's job, so it is hidden from screen
 * readers; pass `as="h2"` only where the chip *is* the heading (section 02).
 */
export function Kicker({ num, label, as: Tag = 'span', className }: { num: string; label: string; as?: 'span' | 'h2'; className?: string }) {
  return (
    <Tag className={`who-kicker${className ? ` ${className}` : ''}`} aria-hidden={Tag === 'span' ? true : undefined}>
      <span className="kick-num">{num}</span>
      <span className="kick-label">{label}</span>
    </Tag>
  );
}
