import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.teachers!;

export const metadata = guideMetadata(guide);

export default function TeachersItPage() {
  return <Guide guide={guide} />;
}
