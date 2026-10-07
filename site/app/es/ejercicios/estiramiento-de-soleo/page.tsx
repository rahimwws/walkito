import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exSoleusStretch!;

export const metadata = guideMetadata(guide);

export default function ExSoleusStretchEsPage() {
  return <Guide guide={guide} />;
}
