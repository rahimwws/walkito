import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.sesamoiditis!;

export const metadata = guideMetadata(guide);

export default function SesamoiditisItPage() {
  return <Guide guide={guide} />;
}
