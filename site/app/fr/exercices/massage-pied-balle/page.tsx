import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.exFootRoll!;

export const metadata = guideMetadata(guide);

export default function ExFootRollFrPage() {
  return <Guide guide={guide} />;
}
