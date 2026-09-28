import { Guide } from '@/components/Guide';
import { GUIDES, guideMetadata } from '@/lib/guides';

const guide = GUIDES.heelPain.en;

export const metadata = guideMetadata(guide);

export default function PlantarFasciitisExercises() {
  return <Guide guide={guide} />;
}
