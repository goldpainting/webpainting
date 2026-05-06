import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { serviceInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { areaPageImages, buildPageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/info-areas/BRADENTON.md');
const heroImage = '/bradenton/luxury-exterior-painting-bradenton-02.jpg.jpg';
const heroAlt = 'Luxury exterior house painting project in Bradenton';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/bradenton',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function BradentonPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Bradenton Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(areaPageImages.bradenton, 'Bradenton')}
    />
  );
}
