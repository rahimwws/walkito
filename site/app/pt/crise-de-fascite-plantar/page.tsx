import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.pfFlareUp!;

export const metadata = guideMetadata(guide);

export default function PfFlareUpPtPage() {
  return <Guide guide={guide} />;
}
