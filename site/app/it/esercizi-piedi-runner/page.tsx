import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.runnersFootExercises!;

export const metadata = guideMetadata(guide);

export default function RunnersFootExercisesItPage() {
  return <Guide guide={guide} />;
}
