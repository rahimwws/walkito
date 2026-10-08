import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.archPain;

export const metadata = guideMetadata(guide);

export default function ArchPainPage() {
  return <Guide guide={guide} />;
}
