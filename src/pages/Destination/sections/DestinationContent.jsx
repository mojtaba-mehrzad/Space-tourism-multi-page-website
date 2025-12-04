import { scrambleTextAnimation } from "@/animations/scrambleText";
import { useGsap } from "@/utils/useGsap";
import { useRef } from "react";

export default function DestinationContent({ planet, destinationNavigationBar, TravelInfo }) {
  const planetNameRef = useRef();
  useGsap(() => {scrambleTextAnimation(planetNameRef.current, planet.name);}, [planet]);
  return (
      <div className="text-inner gap-6 lg:gap-10">
        {destinationNavigationBar}
        <div className="mb-auto h-[218px] sm:h-[235px]">
          <h2 className="destinations-planet-name" ref={planetNameRef}>{planet.name}</h2>
          <p className=" description">{planet.description}</p>
        </div>
        <div className="Separator-line"></div>
        <div className="w-full">
          {TravelInfo}
        </div>
      </div>
  );
}
