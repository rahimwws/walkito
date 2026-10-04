import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.nurses;

export const metadata = guideMetadata(guide);

export default function NursesFootPain() {
  return <Guide guide={guide} />;
}
