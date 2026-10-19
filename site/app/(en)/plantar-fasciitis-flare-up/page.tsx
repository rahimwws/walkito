import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.pfFlareUp;

export const metadata = guideMetadata(guide);

export default function PfFlareUpPage() {
  return <Guide guide={guide} />;
}
