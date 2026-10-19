import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.de.hairdressers!;

export const metadata = guideMetadata(guide);

export default function HairdressersDePage() {
  return <Guide guide={guide} />;
}
