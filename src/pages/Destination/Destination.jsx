import { useState } from "react";
import Image from "@/components/ui/Image";
import TravelInformation from "./sections/TravelInformation";
import { loadData } from "@/utils/loadData";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import DestinationContent from "./sections/DestinationContent";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";

export default function Destination() {
  const data = loadData("destinations");
  const [selectPlanet, setSelectPlanet] = useState(data[0]);
  return (
    <section className="page-container">
      <PageHeader number="01" title="Pick your destination" />
      <TwoColumnLayout
        one={
          <section className="destinations-images-container">
            <Image
              png={selectPlanet.images.png}
              webp={selectPlanet.images.webp}
              imageSize={"destinations-images-size"}
            />
          </section>
        }
        two={
          <DestinationContent
            planet={selectPlanet}
            NavigationBar={
              <Tabs
                items={data}
                onSelect={setSelectPlanet}
                active={selectPlanet.name}
                getLabel={(item) => item.name}
                variant="underline"
              />
            }
            TravelInfo={
              <TravelInformation
                distance={selectPlanet.distance}
                travel={selectPlanet.travel}
              />
            }
          />
        }
        className="two-column-container"
      />
    </section>
  );
}
