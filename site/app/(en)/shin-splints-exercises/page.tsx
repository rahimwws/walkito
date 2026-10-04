import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.shinSplints;

export const metadata = guideMetadata(guide);

export default function ShinSplintsExercises() {
  return <Guide guide={guide} />;
}
