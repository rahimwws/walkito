import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.insolesVsExercises!;

export const metadata = guideMetadata(guide);

export default function InsolesVsExercisesFrPage() {
  return <Guide guide={guide} />;
}
