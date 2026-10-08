import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.shinSplints!;

export const metadata = guideMetadata(guide);

export default function ShinSplintsDePage() {
  return <Guide guide={guide} />;
}
