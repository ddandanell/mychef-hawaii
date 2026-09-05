import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal/private-chef-vs-restaurant');

export default function Page() {
  return <HubDirectoryView id="jnlVsrest" />;
}
