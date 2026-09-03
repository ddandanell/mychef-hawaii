import { IslandWeddingView } from '@/components/views/WeddingView';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandProps } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/wedding-catering');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId, hostMode } = await islandProps(params);
  return <IslandWeddingView islandId={islandId} hostMode={hostMode} />;
}
