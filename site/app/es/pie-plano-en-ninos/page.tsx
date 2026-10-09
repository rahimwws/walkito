import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.flatFeetKids!;

export const metadata = guideMetadata(guide);

export default function FlatFeetKidsEsPage() {
  return <Guide guide={guide} />;
}
