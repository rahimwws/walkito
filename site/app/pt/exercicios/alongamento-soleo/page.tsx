import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exSoleusStretch!;

export const metadata = guideMetadata(guide);

export default function ExSoleusStretchPtPage() {
  return <Guide guide={guide} />;
}
