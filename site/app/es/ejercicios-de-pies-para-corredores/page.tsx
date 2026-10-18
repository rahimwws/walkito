import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.runnersFootExercises!;

export const metadata = guideMetadata(guide);

export default function RunnersFootExercisesEsPage() {
  return <Guide guide={guide} />;
}
