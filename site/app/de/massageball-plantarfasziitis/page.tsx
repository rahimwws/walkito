import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.massageBall!;

export const metadata = guideMetadata(guide);

export default function MassageBallDePage() {
  return <Guide guide={guide} />;
}
