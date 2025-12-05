export default function DestinationContent({ planet, destinationNavigationBar, TravelInfo, refs }) {
  return (
      <div className="text-inner gap-6 lg:gap-10">
        {destinationNavigationBar}
        <div className="mb-auto h-[218px] sm:h-[235px]">
          <h2 className="destinations-planet-name" ref={refs.planetName}>{planet.name}</h2>
          <p className=" description" ref={refs.description}>{planet.description}</p>
        </div>
        <div className="Separator-line" ref={refs.SeparatorLine}></div>
        <div className="w-full" ref={refs.TravelInfoContainer}>
          {TravelInfo}
        </div>
      </div>
  );
}
