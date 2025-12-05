import { homeMasterTimeline } from "@/animations/homeMasterTimeline";
import { useGsap } from "@/utils/useGsap";
import { useRef } from "react";

export default function HomeContent() {
  const titleRef = useRef(null);
  const accentRef = useRef(null);
  const descriptionRef = useRef(null)

  useGsap(() => {
    const refs = { title: titleRef.current, accent: accentRef.current, description: descriptionRef.current };
    homeMasterTimeline(refs);
  }, []);

  return (
    <div className="home-texts-container">
      <h1 className="home-title" ref={titleRef}>
        So, you want to travel to
      </h1>
      <h2 className="home-accent-title" ref={accentRef} >Space</h2>
      <p className="description" ref={descriptionRef}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
}
