import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.bestApp!;

export const metadata = guideMetadata(guide);

export default function BestAppItPage() {
  return <Guide guide={guide} />;
}
