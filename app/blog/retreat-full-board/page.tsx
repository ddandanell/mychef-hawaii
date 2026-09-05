import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/retreat-full-board');

export default function Page() {
  return <HubDirectoryView id="blogRetreat" />;
}
