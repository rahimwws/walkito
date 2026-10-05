import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exHipAbduction;

export const metadata = guideMetadata(guide);

export default function ExHipAbductionPage() {
  return <Guide guide={guide} />;
}
