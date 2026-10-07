import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.severs;

export const metadata = guideMetadata(guide);

export default function SeversPage() {
  return <Guide guide={guide} />;
}
