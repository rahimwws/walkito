import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.pfVsStressFracture!;

export const metadata = guideMetadata(guide);

export default function PfVsStressFractureFrPage() {
  return <Guide guide={guide} />;
}
