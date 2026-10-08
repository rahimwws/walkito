import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.pfVsHeelSpur!;

export const metadata = guideMetadata(guide);

export default function PfVsHeelSpurFrPage() {
  return <Guide guide={guide} />;
}
