import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/grocery-at-cost');

export default function Page() {
  return <HubDirectoryView id="blogGrocery" />;
}
