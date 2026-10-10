import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exSoleusStretch!;

export const metadata = guideMetadata(guide);

export default function ExSoleusStretchItPage() {
  return <Guide guide={guide} />;
}
