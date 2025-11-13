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
    <section className="destinations">
      <article className="page-container">
        <PageHeader number="01" title="Pick your destination" />
        <TwoColumnLayout 
          one={
            <Image png={selectPlanet.images.png} webp={selectPlanet.images.webp} imageSize={"destinations-images-size"} continerStylr={"destinations-images"} />
          }
          two={
            <DestinationContent 
              planet={selectPlanet}
              NavigationBar={<Tabs items={data} onSelect={setSelectPlanet} active={selectPlanet.name} getLabel={(item)=> (item.name)} variant="underline" listStyle="destinations-nav-list" />}
              TravelInfo={<TravelInformation distance={selectPlanet.distance} travel={selectPlanet.travel} />}
            />
          }
        />
      </article>
    </section>
  );
}
