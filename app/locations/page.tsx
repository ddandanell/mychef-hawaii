import HubPhotoGrid from '@/components/HubPhotoGrid';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { photos } from '@/data/photos';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/locations');

export default function Page() {
  return (
    <HubDirectoryView
      id="locations"
      related={
        <HubPhotoGrid
          eyebrow="Beside these dinner doors"
          heading="Open a related document."
          intro="This page is the four-island picker for live corridor URLs. Map notes, coverage maps, the form, and how a night runs are their own URLs."
          columns={2}
          items={[
            {
              href: '/areas',
              title: 'Map notes',
              body: 'Corridors plus the rest of the named places. Not the live dinner-door list.',
              still: photos.hubAreas,
            },
            {
              href: '/coverage',
              title: 'Coverage maps',
              body: 'Each island publishes its own zone list. Distinct from this corridor picker.',
              still: photos.hubCoverage,
            },
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
              still: photos.quoteHub,
            },
            {
              href: '/how-it-works',
              title: 'How it works',
              body: 'Enquire, menu, written quote. Distinct from the FAQ picker.',
              still: photos.hubHow,
            },
          ]}
        />
      }
    />
  );
}
