import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfVsHeelSpur;

export const metadata = guideMetadata(guide);

export default function PfVsHeelSpurPage() {
  return <Guide guide={guide} />;
}
