import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfVsStressFracture!;

export const metadata = guideMetadata(guide);

export default function PfVsStressFractureItPage() {
  return <Guide guide={guide} />;
}
