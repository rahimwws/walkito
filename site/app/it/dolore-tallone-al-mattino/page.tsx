import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.morningHeelPain!;

export const metadata = guideMetadata(guide);

export default function MorningHeelPainItPage() {
  return <Guide guide={guide} />;
}
