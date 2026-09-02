import { IslandsView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/areas');

export default function Page() {
  return <IslandsView />;
}
