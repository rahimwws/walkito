import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exCalfRaises!;

export const metadata = guideMetadata(guide);

export default function ExCalfRaisesDePage() {
  return <Guide guide={guide} />;
}
