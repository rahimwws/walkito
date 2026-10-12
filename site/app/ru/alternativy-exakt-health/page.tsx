import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exaktAlt!;

export const metadata = guideMetadata(guide);

export default function ExaktAltRuPage() {
  return <Guide guide={guide} />;
}
