import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.shinSplints!;

export const metadata = guideMetadata(guide);

export default function ShinSplintsPtPage() {
  return <Guide guide={guide} />;
}
