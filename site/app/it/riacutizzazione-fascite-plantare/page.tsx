import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfFlareUp!;

export const metadata = guideMetadata(guide);

export default function PfFlareUpItPage() {
  return <Guide guide={guide} />;
}
