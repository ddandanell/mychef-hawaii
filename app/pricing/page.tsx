import { Suspense } from 'react';
import PricingView from '@/components/views/PricingView';
import { PricingRelatedDoors } from '@/components/views/PricingRelatedDoors';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/pricing');

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-paper" />}>
      <PricingView related={<PricingRelatedDoors />} />
    </Suspense>
  );
}
