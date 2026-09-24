import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.flatFeet.en;

export const metadata = guideMetadata(guide);

export default function FlatFeetExercises() {
  return <Guide guide={guide} />;
}
