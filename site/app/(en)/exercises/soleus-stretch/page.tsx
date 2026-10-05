import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exSoleusStretch;

export const metadata = guideMetadata(guide);

export default function ExSoleusStretchPage() {
  return <Guide guide={guide} />;
}
