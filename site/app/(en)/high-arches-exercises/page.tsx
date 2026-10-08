import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.highArches;

export const metadata = guideMetadata(guide);

export default function HighArchesPage() {
  return <Guide guide={guide} />;
}
