import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { serviceInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { areaPageImages, buildPageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/info-areas/ELLENTON.md');
const heroImage = '/ellenton/professional-exterior-painter-ellenton.jpg';
const heroAlt = 'Exterior house painting project in Ellenton';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/ellenton',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function EllentonPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Ellenton Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(areaPageImages.ellenton, 'Ellenton')}
    />
  );
}
