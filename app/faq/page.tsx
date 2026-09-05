import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/faq');

export default function Page() {
  return <HubDirectoryView id="faq" />;
}
