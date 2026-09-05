import { Suspense } from 'react';
import PricingView from '@/components/views/PricingView';
import { PricingRelatedDoors } from '@/components/views/PricingRelatedDoors';
import { islandPageMetadata } from '@/lib/pageSeo';
import { parseIsland } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/pricing');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const islandId = await parseIsland(params);
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-paper" />}>
      <PricingView related={<PricingRelatedDoors islandId={islandId} />} />
    </Suspense>
  );
}
