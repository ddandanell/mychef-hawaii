import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal/wedding-week');

export default function Page() {
  return <HubDirectoryView id="jnlWedding" />;
}
