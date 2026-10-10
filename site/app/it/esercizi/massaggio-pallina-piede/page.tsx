import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exFootRoll!;

export const metadata = guideMetadata(guide);

export default function ExFootRollItPage() {
  return <Guide guide={guide} />;
}
