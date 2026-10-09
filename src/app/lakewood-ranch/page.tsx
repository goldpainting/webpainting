import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { serviceInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { areaPageImages, buildPageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/info-areas/LAKEWOOD-RANCH.md');
const heroImage = '/LakewoodRanch/house-exterior-painting-lakewood-ranch.jpg';
const heroAlt = 'Exterior house painting project in Lakewood Ranch';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/lakewood-ranch',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function LakewoodRanchPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/lakewood-ranch"
      eyebrow="Lakewood Ranch Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(
        areaPageImages['lakewood-ranch'],
        'Lakewood Ranch'
      )}
    />
  );
}
