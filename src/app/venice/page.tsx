import {
  buildAreaMetadata,
  getAreaLandingData,
} from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("venice");

export const metadata = buildAreaMetadata(area);

export default function VenicePage() {
  return <AreaLandingPage area={area} />;
}
