import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfVsHeelSpur!;

export const metadata = guideMetadata(guide);

export default function PfVsHeelSpurItPage() {
  return <Guide guide={guide} />;
}
