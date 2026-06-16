import { useState, useRef, useEffect } from "react";
import Image from "@/components/ui/Image";
import TravelInformation from "./sections/TravelInformation";
import { loadData } from "@/utils/loadData";
import DestinationContent from "./sections/DestinationContent";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import destinationNavStyles from "@/config/destinationNavStayles.json";
import Split from "@/components/layout/Split";
import { useGsap } from "@/utils/useGsap";
import { destinationMasterTimeline } from "@/animations/destinationMasterTimeline";
import { useSwipeNavigation } from "@/utils/useSwipeNavigation";

export default function Destination() {
  const data = loadData("destinations");
  const [selectedPlanet, setSelectPlanet] = useState(data[0]);
  const isFirstRender = useRef(true);
  const swipeRef = useSwipeNavigation(
    data.findIndex(item => item.name === selectedPlanet.name),
    (newIndex) => setSelectPlanet(data[newIndex]),
    data.length
  );
  const rootRef= useRef(null)
  const mergedRef = (el) => {
    rootRef.current = el;
    swipeRef.current = el;
  };
  const elementRefs= {
    planetNameRef: useRef(null),
    descriptionRef: useRef(null),
    SeparatorLineRef: useRef(null),
    TravelInfoContainerRef: useRef(null),
    travelValRef: useRef(null),
    distanceValRef: useRef(null),
    imageRef: useRef(null),
    source1Ref: useRef(null),
    source2Ref: useRef(null),
    pictureRef: useRef(null)
  }

  useGsap(() => {
    destinationMasterTimeline(elementRefs, selectedPlanet, isFirstRender) , rootRef
  }, [selectedPlanet]);

  return (
    <section className="page-container touch-pan-y" data-bg="bg-destination" ref={mergedRef}>
      <PageHeader number="01" title="Pick your destination" />
      <Split className="split-container">
        <Split.Left>
          <section className="destinations-images-container">
            <Image
              imageSize={"destinations-images-size"}
              refs={elementRefs}
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
