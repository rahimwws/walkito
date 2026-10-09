import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.pfTaping!;

export const metadata = guideMetadata(guide);

export default function PfTapingItPage() {
  return <Guide guide={guide} />;
}
