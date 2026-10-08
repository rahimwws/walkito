import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.heelSpurExercises!;

export const metadata = guideMetadata(guide);

export default function HeelSpurExercisesFrPage() {
  return <Guide guide={guide} />;
}
