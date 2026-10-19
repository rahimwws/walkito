import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.runnersFootExercises!;

export const metadata = guideMetadata(guide);

export default function RunnersFootExercisesDePage() {
  return <Guide guide={guide} />;
}
