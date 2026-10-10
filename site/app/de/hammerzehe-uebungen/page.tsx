import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.hammerToe!;

export const metadata = guideMetadata(guide);

export default function HammerToeDePage() {
  return <Guide guide={guide} />;
}
