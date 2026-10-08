import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.heelSpurExercises!;

export const metadata = guideMetadata(guide);

export default function HeelSpurExercisesRuPage() {
  return <Guide guide={guide} />;
}
