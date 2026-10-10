import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.nurses!;

export const metadata = guideMetadata(guide);

export default function NursesItPage() {
  return <Guide guide={guide} />;
}
