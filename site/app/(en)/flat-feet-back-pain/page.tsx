import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.flatFeetBackPain;

export const metadata = guideMetadata(guide);

export default function FlatFeetBackPainPage() {
  return <Guide guide={guide} />;
}
