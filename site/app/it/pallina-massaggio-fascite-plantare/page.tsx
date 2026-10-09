import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.massageBall!;

export const metadata = guideMetadata(guide);

export default function MassageBallItPage() {
  return <Guide guide={guide} />;
}
