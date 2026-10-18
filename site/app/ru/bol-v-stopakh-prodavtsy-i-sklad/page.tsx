import { Guide } from '@/components/Guide';
import { ARTICLES_RU, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_RU.retailWarehouse!;

export const metadata = guideMetadata(guide);

export default function RetailWarehouseRuPage() {
  return <Guide guide={guide} />;
}
