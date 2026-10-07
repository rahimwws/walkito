import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.sesamoiditis!;

export const metadata = guideMetadata(guide);

export default function SesamoiditisEsPage() {
  return <Guide guide={guide} />;
}
