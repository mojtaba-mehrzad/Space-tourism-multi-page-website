import { useState, useRef } from "react";
import { loadData } from "@/utils/loadData";
import Image from "@/components/ui/Image";
import CrewContent from "./sections/CrewContent";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import crewNavStyles from "@/config/crewNavStyles.json";
import Split from "@/components/layout/Split";
import { useGsap } from "@/utils/useGsap";
import { crewMasterTimeline } from "@/animations/crewMasterTimeline";
import { useSwipeNavigation } from "@/utils/useSwipeNavigation";

export default function Crew() {
  const data = loadData("crew");
  const [crew, setCrew] = useState(data[0]);
  const directionRef = useRef(1);
  const elementRefs = {
    crewNameRef: useRef(null),
    crewRoleRef: useRef(null),
    crewBioRef: useRef(null),
    imageRef: useRef(null),
  };
  const currentIndex = data.findIndex((item) => item.name === crew.name);

  const selectCrew = (newCrew, direction) => {
    const newIndex = data.findIndex((item) => item.name === newCrew.name);
    directionRef.current =
      direction ?? getSwipeDirection(currentIndex, newIndex, data.length);
    setCrew(newCrew);
  };

  const swipeRef = useSwipeNavigation(
    currentIndex,
    (newIndex, direction) => {
      directionRef.current = direction;
      setCrew(data[newIndex]);
    },
    data.length
  );
  useGsap(() => {
    crewMasterTimeline(elementRefs, crew, directionRef.current);
  }, [crew]);

  return (
    <section ref={swipeRef} className="page-container touch-pan-y select-none" data-bg="bg-crew">
      <PageHeader number="02" title="Meet your crew" />
      <Split className="split-container">
        <Split.Left>
          <CrewContent
            crew={crew}
            refs={elementRefs}
            CrewNavigationBar={
              <Tabs
                items={data}
                active={crew.name}
                onSelect={setCrew}
                styles={crewNavStyles}
              />
            }
          />
        </Split.Left>
        <Split.Right>
          <section className="crew-image-container">
            <Image
              png={crew.images.png}
              webp={crew.images.webp}
              imageSize={"crew-images-size"}
              refs={elementRefs}
            />
          </section>
        </Split.Right>
      </Split>
    </section>
  );
}
