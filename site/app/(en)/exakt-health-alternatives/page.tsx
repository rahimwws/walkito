import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exaktAlt;

export const metadata = guideMetadata(guide);

export default function ExaktHealthAlternatives() {
  return <Guide guide={guide} />;
}
