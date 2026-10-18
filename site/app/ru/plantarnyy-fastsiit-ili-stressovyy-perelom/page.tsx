import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfVsStressFracture!;

export const metadata = guideMetadata(guide);

export default function PfVsStressFractureRuPage() {
  return <Guide guide={guide} />;
}
