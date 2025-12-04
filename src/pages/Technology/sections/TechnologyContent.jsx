import { scrambleTextAnimation } from "@/animations/scrambleText";
import { useGsap } from "@/utils/useGsap";
import { useRef } from "react";

export default function TechnologyContent({technology, technologyNavigationBar}) {
  const technologyNameRef = useRef(null);

  useGsap(() => {scrambleTextAnimation(technologyNameRef.current, technology.name);}, [technology.name]);
  return (
    <>
      <div className="technology-nav-container">{technologyNavigationBar}</div>
      <div className="text-inner">
        <h2 className="technology-title">The terminology...</h2>
        <h3 className="technology-name" ref={technologyNameRef}>{technology.name}</h3>
        <p className="description">{technology.description}</p>
      </div>
    </>
  )
}
