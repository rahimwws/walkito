import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.pfVsStressFracture!;

export const metadata = guideMetadata(guide);

export default function PfVsStressFractureDePage() {
  return <Guide guide={guide} />;
}
