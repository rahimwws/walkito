import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfCost;

export const metadata = guideMetadata(guide);

export default function PlantarFasciitisCost() {
  return <Guide guide={guide} />;
}
