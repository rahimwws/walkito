import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.vsExakt!;

export const metadata = guideMetadata(guide);

export default function VsExaktDePage() {
  return <Guide guide={guide} />;
}
