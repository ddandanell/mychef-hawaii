import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/help/managing-booking');

export default function Page() {
  return <HubDirectoryView id="helpManage" />;
}
