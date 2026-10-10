import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.sesamoiditis!;

export const metadata = guideMetadata(guide);

export default function SesamoiditisPtPage() {
  return <Guide guide={guide} />;
}
