import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal/how-much-does-a-private-chef-cost');

export default function Page() {
  return <HubDirectoryView id="jnlCost" />;
}
