import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.flatFeetAge!;

export const metadata = guideMetadata(guide);

export default function FlatFeetAgeItPage() {
  return <Guide guide={guide} />;
}
