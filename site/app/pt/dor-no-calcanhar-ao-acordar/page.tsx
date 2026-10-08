import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.morningHeelPain!;

export const metadata = guideMetadata(guide);

export default function MorningHeelPainPtPage() {
  return <Guide guide={guide} />;
}
