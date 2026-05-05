import {
  buildAreaMetadata,
  getAreaLandingData,
} from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("sarasota");

export const metadata = buildAreaMetadata(area);

export default function SarasotaPage() {
  return <AreaLandingPage area={area} />;
}
