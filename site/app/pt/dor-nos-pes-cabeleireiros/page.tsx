import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.hairdressers!;

export const metadata = guideMetadata(guide);

export default function HairdressersPtPage() {
  return <Guide guide={guide} />;
}
