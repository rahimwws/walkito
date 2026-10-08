import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.morningHeelPain!;

export const metadata = guideMetadata(guide);

export default function MorningHeelPainDePage() {
  return <Guide guide={guide} />;
}
