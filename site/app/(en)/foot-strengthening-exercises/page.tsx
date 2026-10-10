import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.footStrengthening;

export const metadata = guideMetadata(guide);

export default function FootStrengtheningPage() {
  return <Guide guide={guide} />;
}
