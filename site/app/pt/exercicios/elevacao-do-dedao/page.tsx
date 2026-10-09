import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.exBigToeLift!;

export const metadata = guideMetadata(guide);

export default function ExBigToeLiftPtPage() {
  return <Guide guide={guide} />;
}
