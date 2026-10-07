import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.sesamoiditis;

export const metadata = guideMetadata(guide);

export default function SesamoiditisPage() {
  return <Guide guide={guide} />;
}
