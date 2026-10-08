import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.heelSpurExercises!;

export const metadata = guideMetadata(guide);

export default function HeelSpurExercisesPtPage() {
  return <Guide guide={guide} />;
}
