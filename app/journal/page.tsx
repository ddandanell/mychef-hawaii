import { EditorialView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal');

export default function Page() {
  return <EditorialView kind="journal" />;
}
