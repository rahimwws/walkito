import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.bunions!;

export const metadata = guideMetadata(guide);

export default function BunionsEsPage() {
  return <Guide guide={guide} />;
}
