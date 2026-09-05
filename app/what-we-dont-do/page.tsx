import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/what-we-dont-do');

export default function Page() {
  return <HubDirectoryView id="whatWeDontDo" />;
}
