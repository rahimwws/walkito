import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.archPain!;

export const metadata = guideMetadata(guide);

export default function ArchPainRuPage() {
  return <Guide guide={guide} />;
}
