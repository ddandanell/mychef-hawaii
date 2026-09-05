import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/menus/three-course');

export default function Page() {
  return <HubDirectoryView id="menuThree" />;
}
