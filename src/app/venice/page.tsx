import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { serviceInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { areaPageImages, buildPageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/info-areas/VENICE.md');
const heroImage = '/venice/exterior-painting-venice.jpeg';
const heroAlt = 'Exterior house painting project in Venice';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/venice',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function VenicePage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/venice"
      eyebrow="Venice Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(areaPageImages.venice, 'Venice')}
    />
  );
}
