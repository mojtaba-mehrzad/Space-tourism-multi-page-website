import { useState } from "react";
import Image from "@/components/ui/image";
import NavigationBar from "./sections/NavigationBar";
import TravelInformation from "./sections/TravelInformation";
import { loadData } from "@/utils/loadData";

export default function Destination() {
  const data = loadData("destinations");
  const [selectPlanet, setSelectPlanet] = useState(data[0]);
  return (
    <section className="destinations">
      <article className="page-container">
        <h1 className="page-title">
          <strong className="page-title-number">01</strong> Pick your
          destination
        </h1>
        <section className="page-content-section">
          <Image png={selectPlanet.images.png} webp={selectPlanet.images.webp} imageSize={"destinations-images-size"} continerStylr={"destinations-images"} />
          <div className="destinations-nav-container">
            <NavigationBar data={data} selectedPlanet={selectPlanet} setPlanet={setSelectPlanet} />
            <h2 className="destinations-planet-name">
              {selectPlanet.name}
            </h2>
            <p className=" description">{selectPlanet.description}</p>
            <div className="Separator-line"></div>
            <div className="w-full">
              <TravelInformation distance={selectPlanet.distance} travel={selectPlanet.travel} />
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}
