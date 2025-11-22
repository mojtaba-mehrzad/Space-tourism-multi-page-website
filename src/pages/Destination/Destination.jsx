import { useState, useRef } from "react";
import Image from "@/components/ui/Image";
import TravelInformation from "./sections/TravelInformation";
import { loadData } from "@/utils/loadData";
import DestinationContent from "./sections/DestinationContent";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import destinationNavStyles from "@/config/destinationNavStayles.json";
import Split from "@/components/layout/Split";
import { useGsap } from "@/utils/useGsap";
import { planetFadeAnimation } from "@/animations/planetFade";

export default function Destination() {
  const data = loadData("destinations");
  const [selectPlanet, setSelectPlanet] = useState(data[0]);
  const imageRef = useRef(null)

  useGsap(()=>{planetFadeAnimation(imageRef)}, [])

  return (
    <section className="page-container">
      <PageHeader number="01" title="Pick your destination" />
      <Split className="split-container">
        <Split.Left>
          <section className="destinations-images-container" ref={imageRef}>
            <Image
              png={selectPlanet.images.png}
              webp={selectPlanet.images.webp}
              imageSize={"destinations-images-size"}
            />
          </section>
        </Split.Left>
        <Split.Right>
          <DestinationContent
            planet={selectPlanet}
            destinationNavigationBar={
              <Tabs
                items={data}
                onSelect={setSelectPlanet}
                active={selectPlanet.name}
                getLabel={(item, index) => item.name}
                styles={destinationNavStyles}
              />
            }
            TravelInfo={
              <TravelInformation
                distance={selectPlanet.distance}
                travel={selectPlanet.travel}
              />
            }
          />
        </Split.Right>
      </Split>
    </section>
  );
}
