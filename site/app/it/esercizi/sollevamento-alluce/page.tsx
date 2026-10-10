import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exBigToeLift!;

export const metadata = guideMetadata(guide);

export default function ExBigToeLiftItPage() {
  return <Guide guide={guide} />;
}
