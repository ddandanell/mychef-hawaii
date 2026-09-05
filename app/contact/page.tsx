import HubPhotoGrid from '@/components/HubPhotoGrid';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { photos } from '@/data/photos';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/contact');

export default function Page() {
  return (
    <HubDirectoryView
      id="contact"
      related={
        <HubPhotoGrid
          eyebrow="Beside this desk"
          heading="Open a related document."
          intro="This page is the four-island picker for how to reach a coordinator. The form, first-booking notes, how a night runs, and the FAQ are their own URLs. Island desks stay on the island host."
          columns={2}
          items={[
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A written total follows. Not a booking. Distinct from this desk picker.',
              still: photos.quoteHub,
            },
            {
              href: '/help/getting-started',
              title: 'Getting started',
              body: 'The first-booking checklist. Distinct from the form and from this reachability page.',
              still: photos.hubHelpStart,
            },
            {
              href: '/how-it-works',
              title: 'How it works',
              body: 'Enquire, menu, written quote. Distinct from the FAQ picker.',
              still: photos.hubHow,
            },
            {
              href: '/faq',
              title: 'FAQ',
              body: 'Booking questions live on the island host. This hub page is the picker.',
              still: photos.hubFaq,
            },
          ]}
        />
      }
    />
  );
}
