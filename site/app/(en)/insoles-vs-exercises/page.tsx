import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.insolesVsExercises;

export const metadata = guideMetadata(guide);

export default function InsolesVsExercisesPage() {
  return <Guide guide={guide} />;
}
