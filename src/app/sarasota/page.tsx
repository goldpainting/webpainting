import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { serviceInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { areaPageImages, buildPageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/info-areas/SARASOTA.md');
const heroImage = '/sarasota/sarasota_home.jpeg';
const heroAlt = 'Exterior house painting project in Sarasota';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/sarasota',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function SarasotaPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/sarasota"
      eyebrow="Sarasota Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(areaPageImages.sarasota, 'Sarasota')}
    />
  );
}
