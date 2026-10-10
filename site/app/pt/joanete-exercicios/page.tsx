import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.bunions!;

export const metadata = guideMetadata(guide);

export default function BunionsPtPage() {
  return <Guide guide={guide} />;
}
