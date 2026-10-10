import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.exFootRoll!;

export const metadata = guideMetadata(guide);

export default function ExFootRollDePage() {
  return <Guide guide={guide} />;
}
