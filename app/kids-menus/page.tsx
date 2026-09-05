import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/kids-menus');

export default function Page() {
  return <HubDirectoryView id="kidsMenus" />;
}
