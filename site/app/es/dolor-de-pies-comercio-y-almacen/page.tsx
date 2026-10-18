import { Guide } from '@/components/Guide';
import { ARTICLES_ES, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_ES.retailWarehouse!;

export const metadata = guideMetadata(guide);

export default function RetailWarehouseEsPage() {
  return <Guide guide={guide} />;
}
