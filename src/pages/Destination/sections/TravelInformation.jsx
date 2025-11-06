import React from "react";

export default function TravelInformation({distance, travel}) {
  return (
    <ul className="destination-information-list">
      <li className="destination-information-item">
        <h3 className="destination-information-type">
          Avg. distance
        </h3>
        <p className="destination-information-value">
          {distance}
        </p>
      </li>
      <li className="destination-information-item">
        <h3 className="destination-information-type">
          Est. travel time
        </h3>
        <p className="destination-information-value">
          {travel}
        </p>
      </li>
    </ul>
  );
}
