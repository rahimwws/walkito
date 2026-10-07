import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.exFootRoll!;

export const metadata = guideMetadata(guide);

export default function ExFootRollRuPage() {
  return <Guide guide={guide} />;
}
