import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.ankleStrengthening;

export const metadata = guideMetadata(guide);

export default function AnkleStrengtheningPage() {
  return <Guide guide={guide} />;
}
