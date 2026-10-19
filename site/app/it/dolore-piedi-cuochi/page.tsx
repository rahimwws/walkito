import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.chefs!;

export const metadata = guideMetadata(guide);

export default function ChefsItPage() {
  return <Guide guide={guide} />;
}
