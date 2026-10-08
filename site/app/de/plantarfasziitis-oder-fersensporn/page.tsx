import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.pfVsHeelSpur!;

export const metadata = guideMetadata(guide);

export default function PfVsHeelSpurDePage() {
  return <Guide guide={guide} />;
}
