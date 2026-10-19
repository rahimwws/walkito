import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.pfFlareUp!;

export const metadata = guideMetadata(guide);

export default function PfFlareUpDePage() {
  return <Guide guide={guide} />;
}
