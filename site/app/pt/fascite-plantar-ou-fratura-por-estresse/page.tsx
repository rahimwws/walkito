import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pfVsStressFracture!;

export const metadata = guideMetadata(guide);

export default function PfVsStressFracturePtPage() {
  return <Guide guide={guide} />;
}
