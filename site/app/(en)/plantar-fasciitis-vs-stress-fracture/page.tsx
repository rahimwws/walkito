import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfVsStressFracture;

export const metadata = guideMetadata(guide);

export default function PfVsStressFracturePage() {
  return <Guide guide={guide} />;
}
