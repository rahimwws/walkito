import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exHipAbduction!;

export const metadata = guideMetadata(guide);

export default function ExHipAbductionEsPage() {
  return <Guide guide={guide} />;
}
