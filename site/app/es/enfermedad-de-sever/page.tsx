import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.severs!;

export const metadata = guideMetadata(guide);

export default function SeversEsPage() {
  return <Guide guide={guide} />;
}
