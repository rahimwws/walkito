import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.ytStudy;

export const metadata = guideMetadata(guide);

export default function PlantarFasciitisYoutubeStudy() {
  return <Guide guide={guide} />;
}
