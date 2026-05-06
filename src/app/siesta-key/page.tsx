import MarkdownLandingPage from "../components/MarkdownLandingPage";
import { serviceInterlinkCards } from "../content/landingCards";
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from "../content/markdownContent";

const raw = readMarkdownContent("doc/info-areas/SIESTA-KEY.md");
const heroImage = "/siesta/siesta_key_home.jpeg";
const heroAlt = "Exterior house painting project in Siesta Key";

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: "/siesta-key",
  image: heroImage,
  imageAlt: heroAlt,
});

export default function SiestaKeyPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Siesta Key Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
    />
  );
}
