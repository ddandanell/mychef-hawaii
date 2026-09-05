import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal/how-far-ahead-to-book');

export default function Page() {
  return <HubDirectoryView id="jnlBook" />;
}
