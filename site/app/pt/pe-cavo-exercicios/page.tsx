import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.pt.highArches!;

export const metadata = guideMetadata(guide);

export default function HighArchesPtPage() {
  return <Guide guide={guide} />;
}
