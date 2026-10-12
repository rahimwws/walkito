import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exaktAlt!;

export const metadata = guideMetadata(guide);

export default function ExaktAltEsPage() {
  return <Guide guide={guide} />;
}
