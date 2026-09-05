import HubPhotoGrid from '@/components/HubPhotoGrid';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { photos } from '@/data/photos';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/events');

export default function Page() {
  return (
    <HubDirectoryView
      id="events"
      related={
        <HubPhotoGrid
          eyebrow="Beside these occasions"
          heading="Open a related document."
          intro="This page is the four-island picker for villa occasions. Catering, wedding weeks, the form, and the packaged cart are their own URLs."
          columns={2}
          items={[
            {
              href: '/catering',
              title: 'Villa catering',
              body: 'The larger staffed room. Distinct from occasion documents.',
              still: photos.cateringHero,
            },
            {
              href: '/weddings',
              title: 'Wedding week',
              body: 'Welcome dinner to recovery brunch. Distinct from a birthday or retreat.',
              still: photos.weddingHero,
            },
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
              still: photos.quoteHub,
            },
            {
              href: '/mobile-bar',
              title: 'The packaged cart',
              body: 'The four-hour villa package. Distinct from the bartender add-on on /bar.',
              still: photos.hubMobileBar,
            },
          ]}
        />
      }
    />
  );
}
