export default function DestinationContent({ planet, NavigationBar, TravelInfo }) {
  return (
    <>
      <div className="text-inner gap-6 lg:gap-10">
        {NavigationBar}
        <div className="mb-auto h-[218px] sm:h-[235px]">
          <h2 className="destinations-planet-name">{planet.name}</h2>
          <p className=" description">{planet.description}</p>
        </div>
        <div className="Separator-line"></div>
        <div className="w-full">
          {TravelInfo}
        </div>
      </div>
    </>
  );
}
