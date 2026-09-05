import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal/what-is-included');

export default function Page() {
  return <HubDirectoryView id="jnlIncluded" />;
}
