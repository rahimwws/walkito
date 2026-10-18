import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.runnersFootExercises!;

export const metadata = guideMetadata(guide);

export default function RunnersFootExercisesRuPage() {
  return <Guide guide={guide} />;
}
