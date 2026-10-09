import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.toeStrengthening!;

export const metadata = guideMetadata(guide);

export default function ToeStrengtheningRuPage() {
  return <Guide guide={guide} />;
}
