import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfVsHeelSpur!;

export const metadata = guideMetadata(guide);

export default function PfVsHeelSpurRuPage() {
  return <Guide guide={guide} />;
}
