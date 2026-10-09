import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.massageBall!;

export const metadata = guideMetadata(guide);

export default function MassageBallEsPage() {
  return <Guide guide={guide} />;
}
