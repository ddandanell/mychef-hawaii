import { CorporateView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/corporate');

export default function Page() {
  return <CorporateView />;
}
