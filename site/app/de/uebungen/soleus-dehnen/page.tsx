import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exSoleusStretch!;

export const metadata = guideMetadata(guide);

export default function ExSoleusStretchDePage() {
  return <Guide guide={guide} />;
}
