import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.flatFeetAge!;

export const metadata = guideMetadata(guide);

export default function FlatFeetAgeEsPage() {
  return <Guide guide={guide} />;
}
