import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.toeStrengthening;

export const metadata = guideMetadata(guide);

export default function ToeStrengtheningPage() {
  return <Guide guide={guide} />;
}
