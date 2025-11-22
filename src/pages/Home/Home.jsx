import ExploreButton from "./sections/ExploreButton";
import { useRef } from "react";
import { useGsap } from "@/utils/useGsap";
import { heroTitleAnimation } from "@/animations/heroTitle";

export default function Home() {
  const titleRef = useRef(null);
  useGsap(()=>{heroTitleAnimation(titleRef)}, [])

  return (
    <section id="home">
      <section id="home-main-container">
        <div id="home-texts-container">
          <h1 id="home-title" ref={titleRef}>
            So, you want to travel to
            <p>Space</p>
          </h1>
          <p className="description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div id="explore-button-container">
          <ExploreButton />
        </div>
      </section>
    </section>
  );
}
