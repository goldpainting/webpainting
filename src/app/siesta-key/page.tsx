import {
  buildAreaMetadata,
  getAreaLandingData,
} from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("siesta-key");

export const metadata = buildAreaMetadata(area);

export default function SiestaKeyPage() {
  return <AreaLandingPage area={area} />;
}
