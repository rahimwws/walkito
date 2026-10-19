import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.hairdressers!;

export const metadata = guideMetadata(guide);

export default function HairdressersItPage() {
  return <Guide guide={guide} />;
}
