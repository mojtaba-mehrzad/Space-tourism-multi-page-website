import { useState, useRef } from "react";
import { loadData } from "@/utils/loadData";
import Image from "@/components/ui/Image";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import TechnologyContent from "./sections/TechnologyContent";
import technologyNavStyles from "@/config/technologyNavStyles.json";
import Split from "@/components/layout/Split";
import { useGsap } from "@/utils/useGsap";
import { technologyMsterTimeline } from "@/animations/technologyMsterTimeline";
import { scrambleTextAnimation } from "@/animations/scrambleText";
import { useSwipeNavigation } from "@/utils/useSwipeNavigation";



export default function Technology() {
  const data = loadData("technology");
  const [technology, setTechnology] = useState(data[0]);
  const elementRefs = {
    technologyNameRef: useRef(null),
    technologyTitleRef: useRef(null),
    technologyDescriptionRef: useRef(null),
    imageRef: useRef(null),
  };
  const swipeRef = useSwipeNavigation(
    data.findIndex(item => item.name === technology.name), 
    (newIndex) => setTechnology(data[newIndex]),
    data.length
  );
  useGsap(() => {
    scrambleTextAnimation(elementRefs.technologyTitleRef.current)
  }, []);
  useGsap(() => {
    technologyMsterTimeline(elementRefs, technology);
  }, [technology]);

  return (
    <section ref={swipeRef} className="page-container touch-pan-y" data-bg="bg-technology">
      <PageHeader number="03" title=" Space launch 101" />
      <Split className="split-container">
        <Split.Left className="lg:order-2">
          <section className="technology-image-container">
            <Image
              png={technology.images.portrait}
              webp={technology.images.landscape}
              imageSize={"technology-images-size"}
              refs={elementRefs}
            />
          </section>
        </Split.Left>
        <Split.Right className="flex flex-col lg:flex-row lg:order-1 gap-10 lg:gap-16 ">
          <TechnologyContent
            technology={technology}
            refs={elementRefs}
            technologyNavigationBar={
              <Tabs
                items={data}
                active={technology.name}
                onSelect={setTechnology}
                getLabel={(item, index) => index + 1}
                styles={technologyNavStyles}
              />
            }
          />
        </Split.Right>
      </Split>
    </section>
  );
}
