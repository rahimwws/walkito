import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.haglunds!;

export const metadata = guideMetadata(guide);

export default function HaglundsItPage() {
  return <Guide guide={guide} />;
}
