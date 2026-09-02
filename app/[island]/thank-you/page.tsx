import { Suspense } from 'react';
import ThankYouView from '@/components/views/ThankYouView';
import { islandPageMetadata } from '@/lib/pageSeo';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/thank-you');
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-paper" />}>
      <ThankYouView />
    </Suspense>
  );
}
