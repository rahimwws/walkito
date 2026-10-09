import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.barefoot!;

export const metadata = guideMetadata(guide);

export default function BarefootDePage() {
  return <Guide guide={guide} />;
}
