import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfVsAchilles!;

export const metadata = guideMetadata(guide);

export default function PfVsAchillesRuPage() {
  return <Guide guide={guide} />;
}
