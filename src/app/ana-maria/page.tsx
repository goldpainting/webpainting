import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { serviceInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { areaPageImages, buildPageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/info-areas/ANNA-MARIA-ISLAND.md');
const heroImage = '/anamaria/luxury-exterior-painting-anna-maria-02.jpg.jpg';
const heroAlt = 'Luxury coastal exterior painting project in Anna Maria Island';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/ana-maria',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function AnaMariaPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Anna Maria Island Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(
        areaPageImages['ana-maria'],
        'Anna Maria Island'
      )}
    />
  );
}
