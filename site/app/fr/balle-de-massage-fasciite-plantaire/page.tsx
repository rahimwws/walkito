import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.massageBall!;

export const metadata = guideMetadata(guide);

export default function MassageBallFrPage() {
  return <Guide guide={guide} />;
}
