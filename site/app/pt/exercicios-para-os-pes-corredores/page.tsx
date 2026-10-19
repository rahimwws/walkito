import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.runnersFootExercises!;

export const metadata = guideMetadata(guide);

export default function RunnersFootExercisesPtPage() {
  return <Guide guide={guide} />;
}
