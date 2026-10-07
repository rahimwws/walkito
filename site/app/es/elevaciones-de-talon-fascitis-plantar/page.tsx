import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.calfRaises!;

export const metadata = guideMetadata(guide);

export default function CalfRaisesEsPage() {
  return <Guide guide={guide} />;
}
