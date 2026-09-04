import { LegalView } from '@/components/views/SupportViews';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandProps } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/legal');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId } = await islandProps(params);
  return <LegalView islandId={islandId} />;
}
