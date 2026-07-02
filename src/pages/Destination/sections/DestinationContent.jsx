export default function DestinationContent({ planet, destinationNavigationBar, travelInfo, refs }) {
  return (
    <div className="text-inner gap-6 lg:gap-10">
      {destinationNavigationBar}
      <div className="mb-auto h-[218px] sm:h-[235px]">
        <h2 className="destinations-planet-name" ref={refs.planetNameRef}>
          {planet.name}
        </h2>
        <p className="description" ref={refs.descriptionRef}>
          {planet.description}
        </p>
      </div>
      <div className="Separator-line" ref={refs.SeparatorLineRef}></div>
      <div className="w-full" ref={refs.TravelInfoContainerRef}>
        {travelInfo}
      </div>
    </div>
  );
}