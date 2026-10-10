import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.insolesVsExercises!;

export const metadata = guideMetadata(guide);

export default function InsolesVsExercisesEsPage() {
  return <Guide guide={guide} />;
}
