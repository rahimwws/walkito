import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.insolesVsExercises!;

export const metadata = guideMetadata(guide);

export default function InsolesVsExercisesDePage() {
  return <Guide guide={guide} />;
}
