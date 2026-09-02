import { IslandsView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/islands');

export default function Page() {
  return <IslandsView />;
}
