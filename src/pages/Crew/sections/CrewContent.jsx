import { scrambleTextAnimation } from "@/animations/scrambleText";
import { useGsap } from "@/utils/useGsap";
import { useRef } from "react";

export default function CrewContent({ crew, CrewNavigationBar }) {
    const crewNameRef = useRef(null);
    const crewRoleRef = useRef(null);

    useGsap(() => {scrambleTextAnimation(crewNameRef.current, crew.name);}, [crew]);
    useGsap(() => {scrambleTextAnimation(crewRoleRef.current, crew.role);}, [crew]);

  return (
    <>
      <div className="text-inner">
        <h2 className="crew-role" ref={crewRoleRef}>{crew.role}</h2>
        <h3 className="crew-name" ref={crewNameRef}>{crew.name}</h3>
        <p className="description">{crew.bio}</p>
      </div>
      <div className="crew-nav-container">{CrewNavigationBar}</div>
    </>
  );
}
