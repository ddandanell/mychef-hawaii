import { LegalView } from '@/components/views/SupportViews';
import { islandPageMetadata } from '@/lib/pageSeo';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/legal');
}

export default function Page() {
  return <LegalView />;
}
