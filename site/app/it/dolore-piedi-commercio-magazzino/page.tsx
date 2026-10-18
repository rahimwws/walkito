import { Guide } from '@/components/Guide';
import { ARTICLES_NEW, guideMetadata } from '@/lib/guides';

const guide = ARTICLES_NEW.it.retailWarehouse!;

export const metadata = guideMetadata(guide);

export default function RetailWarehouseItPage() {
  return <Guide guide={guide} />;
}
