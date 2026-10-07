import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.heelSpurExercises!;

export const metadata = guideMetadata(guide);

export default function HeelSpurExercisesEsPage() {
  return <Guide guide={guide} />;
}
