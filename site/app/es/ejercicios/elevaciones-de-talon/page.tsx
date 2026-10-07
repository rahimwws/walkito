import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exCalfRaises!;

export const metadata = guideMetadata(guide);

export default function ExCalfRaisesEsPage() {
  return <Guide guide={guide} />;
}
