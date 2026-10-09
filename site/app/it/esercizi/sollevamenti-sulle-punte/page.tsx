import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exCalfRaises!;

export const metadata = guideMetadata(guide);

export default function ExCalfRaisesItPage() {
  return <Guide guide={guide} />;
}
