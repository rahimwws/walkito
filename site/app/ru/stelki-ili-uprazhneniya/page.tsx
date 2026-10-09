import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.insolesVsExercises!;

export const metadata = guideMetadata(guide);

export default function InsolesVsExercisesRuPage() {
  return <Guide guide={guide} />;
}
