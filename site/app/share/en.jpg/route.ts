import { shareImage } from '@/lib/og-card';

/** The share card at /share/en.jpg, built once into a static JPEG (lib/og-card.tsx). */
export const dynamic = 'force-static';

export function GET() {
  return shareImage('en');
}
