import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/blog/corporate-offsites');

export default function Page() {
  return <HubDirectoryView id="blogOffsites" />;
}
