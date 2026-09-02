import { Suspense } from 'react';
import PricingView from '@/components/views/PricingView';
import { islandPageMetadata } from '@/lib/pageSeo';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/pricing');
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-paper" />}>
      <PricingView />
    </Suspense>
  );
}
