import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.teachers;

export const metadata = guideMetadata(guide);

export default function TeachersPage() {
  return <Guide guide={guide} />;
}
