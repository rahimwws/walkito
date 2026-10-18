import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.teachers!;

export const metadata = guideMetadata(guide);

export default function TeachersPtPage() {
  return <Guide guide={guide} />;
}
