import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.heelSpurExercises!;

export const metadata = guideMetadata(guide);

export default function HeelSpurExercisesDePage() {
  return <Guide guide={guide} />;
}
