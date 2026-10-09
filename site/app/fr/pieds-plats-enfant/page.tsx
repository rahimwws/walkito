import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.flatFeetKids!;

export const metadata = guideMetadata(guide);

export default function FlatFeetKidsFrPage() {
  return <Guide guide={guide} />;
}
