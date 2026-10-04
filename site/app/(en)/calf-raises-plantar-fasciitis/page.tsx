import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.calfRaises;

export const metadata = guideMetadata(guide);

export default function CalfRaises() {
  return <Guide guide={guide} />;
}
