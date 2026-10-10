import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.barefoot;

export const metadata = guideMetadata(guide);

export default function BarefootPage() {
  return <Guide guide={guide} />;
}
