import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.highArches!;

export const metadata = guideMetadata(guide);

export default function HighArchesItPage() {
  return <Guide guide={guide} />;
}
