import { IslandCateringView } from '@/components/views/CateringView';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandProps } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/catering');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId, hostMode } = await islandProps(params);
  return <IslandCateringView islandId={islandId} hostMode={hostMode} />;
}
