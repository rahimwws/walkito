import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.standing;

export const metadata = guideMetadata(guide);

export default function FeetHurtStanding() {
  return <Guide guide={guide} />;
}
