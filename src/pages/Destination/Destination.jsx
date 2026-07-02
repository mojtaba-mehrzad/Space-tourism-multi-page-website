import { useRef } from "react";
import Image from "@/components/ui/Image";
import TravelInformation from "./sections/TravelInformation";
import { loadData } from "@/utils/loadData";
import DestinationContent from "./sections/DestinationContent";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import destinationNavStyles from "@/config/destinationNavStyles.json";
import Split from "@/components/layout/Split";
import { useGsap } from "@/utils/useGsap";
import { destinationMasterTimeline } from "@/animations/destinationMasterTimeline";
import { useSwipeableItem } from "@/utils/useSwipeableItem";

export default function Destination() {
  const data = loadData("destinations");
  const isFirstRender = useRef(true);
  const {
    selected: selectedPlanet,
    select: selectPlanet,
    swipeRef,
    directionRef,
  } = useSwipeableItem(data);
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
    destinationMasterTimeline(elementRefs, selectedPlanet, isFirstRender, directionRef.current);
  }, [selectedPlanet]);

  return (
    <section className="page-container touch-pan-y select-none" data-bg="bg-destination" ref={mergedRef}>
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
                onSelect={selectPlanet}
                active={selectedPlanet.name}
                getLabel={(item) => item.name}
                styles={destinationNavStyles}
              />
            }
            travelInfo={
              <TravelInformation planetInfo={selectedPlanet} refs={elementRefs} />
            }
          />
        </Split.Right>
      </Split>
    </section>
  );
}