import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <p>© {new Date().getFullYear()} Walkito</p>
        <nav>
          <Link href="/support/">Support</Link>
          <Link href="/privacy/">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
