import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/cleanup-standard');

export default function Page() {
  return <HubDirectoryView id="blogCleanup" />;
}
