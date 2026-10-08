import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exCalfStretch!;

export const metadata = guideMetadata(guide);

export default function ExCalfStretchDePage() {
  return <Guide guide={guide} />;
}
