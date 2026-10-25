import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.hingeReviews;

export const metadata = guideMetadata(guide);

export default function HingeReviews() {
  return <Guide guide={guide} />;
}
