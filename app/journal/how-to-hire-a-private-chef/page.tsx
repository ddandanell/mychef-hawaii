import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/journal/how-to-hire-a-private-chef');

export default function Page() {
  return <HubDirectoryView id="jnlHire" />;
}
