import { useState, useRef } from "react";
import Image from "@/components/ui/Image";
import TravelInformation from "./sections/TravelInformation";
import { loadData } from "@/utils/loadData";
import DestinationContent from "./sections/DestinationContent";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import destinationNavStyles from "@/config/destinationNavStayles.json";
import Split from "@/components/layout/Split";
import { useGsap } from "@/utils/useGsap";
import { planetFadeAnimation } from "@/animations/planetFade";
import { destinationMasterTimeline } from "@/animations/destinationMasterTimeline";

export default function Destination() {
  const data = loadData("destinations");
  const [selectedPlanet, setSelectPlanet] = useState(data[0]);

  const elementRefs= {
    planetName: useRef(null),
    description: useRef(null),
    SeparatorLine: useRef(null),
    TravelInfoContainer: useRef(null),
    travelVal: useRef(null),
    distanceVal: useRef(null),
    image: useRef(null)
  }
  useGsap(() => {
    destinationMasterTimeline(elementRefs, selectedPlanet);
  }, [selectedPlanet]);

  return (
    <section className="page-container" data-bg="bg-destination">
      <PageHeader number="01" title="Pick your destination" />
      <Split className="split-container">
        <Split.Left>
          <section className="destinations-images-container" ref={elementRefs.image}>
            <Image
              png={selectedPlanet.images.png}
              webp={selectedPlanet.images.webp}
              imageSize={"destinations-images-size"}
            />
          </section>
        </Split.Left>
        <Split.Right>
          <DestinationContent
            planet={selectedPlanet}
            refs={elementRefs}
            destinationNavigationBar={
              <Tabs
                items={data}
                onSelect={setSelectPlanet}
                active={selectedPlanet.name}
                getLabel={(item, index) => item.name}
                styles={destinationNavStyles}
              />
            }
            TravelInfo={
              <TravelInformation
                planetInfo={selectedPlanet}
                refs={elementRefs}
              />
            }
          />
        </Split.Right>
      </Split>
    </section>
  );
}
