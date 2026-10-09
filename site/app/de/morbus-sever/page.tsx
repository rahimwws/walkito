import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.severs!;

export const metadata = guideMetadata(guide);

export default function SeversDePage() {
  return <Guide guide={guide} />;
}
