import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exShortFoot!;

export const metadata = guideMetadata(guide);

export default function ExShortFootDePage() {
  return <Guide guide={guide} />;
}
