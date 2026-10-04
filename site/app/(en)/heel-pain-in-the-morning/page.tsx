import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.morningHeelPain;

export const metadata = guideMetadata(guide);

export default function MorningHeelPain() {
  return <Guide guide={guide} />;
}
