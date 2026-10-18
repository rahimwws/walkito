import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfVsAchilles;

export const metadata = guideMetadata(guide);

export default function PfVsAchillesPage() {
  return <Guide guide={guide} />;
}
