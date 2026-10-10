import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exSoleusStretch!;

export const metadata = guideMetadata(guide);

export default function ExSoleusStretchFrPage() {
  return <Guide guide={guide} />;
}
