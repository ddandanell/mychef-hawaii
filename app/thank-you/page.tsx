import { Suspense } from 'react';
import ThankYouView from '@/components/views/ThankYouView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/thank-you');

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-paper" />}>
      <ThankYouView />
    </Suspense>
  );
}
