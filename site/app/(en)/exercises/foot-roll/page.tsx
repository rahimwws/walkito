import { Guide } from '@/components/Guide';
import { ARTICLES_EN, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_EN.exFootRoll;

export const metadata = guideMetadata(guide);

export default function ExFootRollPage() {
  return <Guide guide={guide} />;
}
