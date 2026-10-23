import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.vsPfExercises;

export const metadata = guideMetadata(guide);

export default function WalkitoVsPfExercises() {
  return <Guide guide={guide} />;
}
