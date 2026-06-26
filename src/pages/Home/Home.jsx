import ExploreButton from "./sections/ExploreButton";
import HomeContent from "./sections/HomeContent";
import Split from "@/components/layout/Split";
import { useRef } from "react";
import { useGsap } from "@/utils/useGsap";
import { homeMasterTimeline } from "@/animations/homeMasterTimeline";

export default function Home() {
  const elementRefs = {
    titleRef: useRef(null),
    accentRef: useRef(null),
    descriptionRef: useRef(null),
    exploreBtnRef: useRef(null),
  };
  useGsap(() => {homeMasterTimeline(elementRefs)}, []);
  return (
    <section className="home" data-bg="bg-home">
      <Split className="home-main-container">
        <Split.Left className="">
          <HomeContent refs={elementRefs}/>
        </Split.Left>
        <Split.Right className=" explore-button-container">
          <ExploreButton refs={elementRefs}/>
        </Split.Right>
      </Split>
    </section>
  );
}
