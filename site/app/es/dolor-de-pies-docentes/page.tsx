import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.teachers!;

export const metadata = guideMetadata(guide);

export default function TeachersEsPage() {
  return <Guide guide={guide} />;
}
