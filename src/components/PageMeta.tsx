import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { siteUrl } from '@/config/site';
import { useIsland } from '@/context/IslandContext';
import { metaForPath } from '@/data/pageMeta';

/**
 * Sets document title, description and canonical from the route map.
 * Location pages override via their own PageMeta when they render.
 */
export default function PageMeta({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { pathname } = useLocation();
  const { islandId, hostMode, localPath } = useIsland();
  const resolved =
    title && description ? { title, description } : metaForPath(pathname, islandId, hostMode);

  const explicit = Boolean(title && description);

  useEffect(() => {
    if (explicit) {
      document.documentElement.dataset.metaLocked = '1';
    } else if (document.documentElement.dataset.metaLocked) {
      return;
    }
    document.title = resolved.title;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute('content', resolved.description);

    const canonicalHref = islandId ? siteUrl(islandId, localPath) : siteUrl('root', pathname);
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;
    return () => {
      if (explicit) delete document.documentElement.dataset.metaLocked;
    };
  }, [resolved.title, resolved.description, islandId, localPath, pathname, explicit]);

  return null;
}
