import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exHipAbduction!;

export const metadata = guideMetadata(guide);

export default function ExHipAbductionRuPage() {
  return <Guide guide={guide} />;
}
