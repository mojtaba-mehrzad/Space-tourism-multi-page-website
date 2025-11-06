import React from "react";

export default function TravelInformation({distance, travel}) {
  return (
    <ul className="destinations-information-list">
      <li className="destinations-information-item">
        <h3 className="destinations-information-type">
          Avg. distance
        </h3>
        <p className="destinations-information-value">
          {distance}
        </p>
      </li>
      <li className="destinations-information-item">
        <h3 className="destinations-information-type">
          Est. travel time
        </h3>
        <p className="destinations-information-value">
          {travel}
        </p>
      </li>
    </ul>
  );
}
