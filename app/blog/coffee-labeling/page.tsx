import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/coffee-labeling');

export default function Page() {
  return <HubDirectoryView id="blogCoffee" />;
}
