import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exTowelHeelRaise!;

export const metadata = guideMetadata(guide);

export default function ExTowelHeelRaiseDePage() {
  return <Guide guide={guide} />;
}
