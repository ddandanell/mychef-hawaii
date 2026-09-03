import { TrustView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/trust');

export default function Page() {
  return <TrustView />;
}
