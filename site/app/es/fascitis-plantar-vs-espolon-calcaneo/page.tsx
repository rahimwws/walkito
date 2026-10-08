import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfVsHeelSpur!;

export const metadata = guideMetadata(guide);

export default function PfVsHeelSpurEsPage() {
  return <Guide guide={guide} />;
}
