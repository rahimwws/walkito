import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exBigToeLift!;

export const metadata = guideMetadata(guide);

export default function ExBigToeLiftRuPage() {
  return <Guide guide={guide} />;
}
