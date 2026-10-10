import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.massageBall!;

export const metadata = guideMetadata(guide);

export default function MassageBallRuPage() {
  return <Guide guide={guide} />;
}
