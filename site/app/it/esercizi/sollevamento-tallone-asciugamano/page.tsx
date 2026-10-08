import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.exTowelHeelRaise!;

export const metadata = guideMetadata(guide);

export default function ExTowelHeelRaiseItPage() {
  return <Guide guide={guide} />;
}
