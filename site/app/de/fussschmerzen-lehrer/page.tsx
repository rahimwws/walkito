import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.teachers!;

export const metadata = guideMetadata(guide);

export default function TeachersDePage() {
  return <Guide guide={guide} />;
}
