import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.pfVsStressFracture!;

export const metadata = guideMetadata(guide);

export default function PfVsStressFractureEsPage() {
  return <Guide guide={guide} />;
}
