import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.exBigToeLift!;

export const metadata = guideMetadata(guide);

export default function ExBigToeLiftEsPage() {
  return <Guide guide={guide} />;
}
