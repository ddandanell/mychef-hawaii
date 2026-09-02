import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { canonicalUrl } from '@/config/site';
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

    const canonicalHref = islandId ? canonicalUrl(islandId, localPath) : canonicalUrl('root', pathname);
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let node = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement('meta');
        node.setAttribute(attr, key);
        document.head.appendChild(node);
      }
      node.setAttribute('content', value);
    };
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;
    setMeta('property', 'og:title', resolved.title);
    setMeta('property', 'og:description', resolved.description);
    setMeta('property', 'og:url', canonicalHref);
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'robots', 'index,follow');
    return () => {
      if (explicit) delete document.documentElement.dataset.metaLocked;
    };
  }, [resolved.title, resolved.description, islandId, localPath, pathname, explicit]);

  return null;
}
