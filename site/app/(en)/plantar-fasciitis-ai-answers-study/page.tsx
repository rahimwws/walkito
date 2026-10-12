import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.aiStudy;

export const metadata = guideMetadata(guide);

export default function PlantarFasciitisAiAnswersStudy() {
  return <Guide guide={guide} />;
}
