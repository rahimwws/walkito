import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.haglunds!;

export const metadata = guideMetadata(guide);

export default function HaglundsDePage() {
  return <Guide guide={guide} />;
}
