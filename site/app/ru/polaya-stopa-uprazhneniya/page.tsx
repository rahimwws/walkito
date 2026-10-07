import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.highArches!;

export const metadata = guideMetadata(guide);

export default function HighArchesRuPage() {
  return <Guide guide={guide} />;
}
