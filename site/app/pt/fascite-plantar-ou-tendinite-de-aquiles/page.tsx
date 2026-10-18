import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pfVsAchilles!;

export const metadata = guideMetadata(guide);

export default function PfVsAchillesPtPage() {
  return <Guide guide={guide} />;
}
