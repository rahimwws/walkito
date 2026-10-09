import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.flatFeetKids!;

export const metadata = guideMetadata(guide);

export default function FlatFeetKidsItPage() {
  return <Guide guide={guide} />;
}
