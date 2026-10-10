import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.massageBall!;

export const metadata = guideMetadata(guide);

export default function MassageBallPtPage() {
  return <Guide guide={guide} />;
}
