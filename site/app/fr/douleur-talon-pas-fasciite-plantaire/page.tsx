import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.fr.heelNotPf!;

export const metadata = guideMetadata(guide);

export default function HeelNotPfFrPage() {
  return <Guide guide={guide} />;
}
