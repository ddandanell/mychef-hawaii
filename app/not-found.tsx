import type { Metadata } from 'next';
import HostLink from '@/components/HostLink';
import { CtaLink } from '@/components/Cta';
import { islandOrder, islands } from '@/data/islands';
import { islandHref } from '@/lib/paths';
import { requestHostMode, requestIsland } from '@/lib/request';

export const metadata: Metadata = {
  title: 'Page not found | myCHEF Hawaii',
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const island = await requestIsland();
  const hostMode = await requestHostMode();
  const home = islandHref(island, hostMode, '/');

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="text-[12px] text-mute">404 — Page not found</p>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-ink">
          This table isn&apos;t set.
        </h1>
        <p className="mt-6 max-w-[65ch] text-[17px] leading-[1.65] text-mute">
          The page you asked for doesn&apos;t exist{island ? ` in the ${islands[island].name} section` : ''}. Here&apos;s
          the way back:
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href={home}>{island ? `${islands[island].name} home` : 'Home'}</CtaLink>
          {islandOrder.map((id) => (
            <HostLink key={id} island={id} className="inline-flex h-12 items-center border border-line px-6 text-[14px] font-medium text-ink">
              {islands[id].name}
            </HostLink>
          ))}
        </div>
      </div>
    </section>
  );
}
