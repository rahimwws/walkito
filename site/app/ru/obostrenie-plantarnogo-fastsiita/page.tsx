import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.pfFlareUp!;

export const metadata = guideMetadata(guide);

export default function PfFlareUpRuPage() {
  return <Guide guide={guide} />;
}
