import { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm';
import { Longform, SiblingCluster } from '@/components/Longform';
import { quoteTrustSections } from '@/data/longformHub';
import type { IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

export default function QuoteView({ islandId, hostMode }: { islandId: IslandId | null; hostMode: boolean }) {
  const href = (path: string) => islandHref(islandId, hostMode, path);
  return (
    <>
      <section className="bg-paper">
        <Suspense fallback={<div className="min-h-[60vh] bg-paper" />}>
          <QuoteForm />
        </Suspense>
      </section>
      <Longform sections={quoteTrustSections} />
      <SiblingCluster island={islandId} current="quote" href={href} />
    </>
  );
}
