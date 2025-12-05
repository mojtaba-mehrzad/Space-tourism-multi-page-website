export default function TravelInformation({planetInfo, refs}) {
  return (
    <ul className="destinations-information-list">
      <li className="destinations-information-item">
        <h3 className="destinations-information-type">
          Avg. distance
        </h3>
        <p className="destinations-information-value" ref={refs.distanceVal}>
          {planetInfo.distance}
        </p>
      </li>
      <li className="destinations-information-item">
        <h3 className="destinations-information-type">
          Est. travel time
        </h3>
        <p className="destinations-information-value" ref={refs.travelVal}>
          {planetInfo.travel}
        </p>
      </li>
    </ul>
  );
}
