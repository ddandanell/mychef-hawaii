import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/kids-at-the-table');

export default function Page() {
  return <HubDirectoryView id="blogKids" />;
}
