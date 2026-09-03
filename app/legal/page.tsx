import { LegalView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/legal');

export default function Page() {
  return <LegalView />;
}
