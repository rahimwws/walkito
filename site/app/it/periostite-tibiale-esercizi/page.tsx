import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.shinSplints!;

export const metadata = guideMetadata(guide);

export default function ShinSplintsItPage() {
  return <Guide guide={guide} />;
}
