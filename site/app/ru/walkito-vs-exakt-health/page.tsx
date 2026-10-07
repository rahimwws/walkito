import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.vsExakt!;

export const metadata = guideMetadata(guide);

export default function VsExaktRuPage() {
  return <Guide guide={guide} />;
}
