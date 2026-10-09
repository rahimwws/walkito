import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.ankleStrengthening!;

export const metadata = guideMetadata(guide);

export default function AnkleStrengtheningRuPage() {
  return <Guide guide={guide} />;
}
