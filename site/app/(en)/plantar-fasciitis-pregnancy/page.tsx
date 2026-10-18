import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfPregnancy;

export const metadata = guideMetadata(guide);

export default function PlantarFasciitisPregnancy() {
  return <Guide guide={guide} />;
}
