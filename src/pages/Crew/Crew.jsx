import { useState } from "react";
import { loadData } from "@/utils/loadData";
import Image from "@/components/ui/Image";
import CrewContent from "./sections/CrewContent";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import crewNavStyles from "@/config/crewNavStyles.json";
import Split from "@/components/layout/Split";

export default function Crew() {
  const data = loadData("crew");
  const [crew, setCrew] = useState(data[0]);

  return (
    <section className="page-container">
      <PageHeader number="02" title="Meet your crew" />
      <Split className="split-container">
        <Split.Left>
          <CrewContent
            crew={crew}
            CrewNavigationBar={
              <Tabs
                items={data}
                active={crew.name}
                onSelect={setCrew}
                styles={crewNavStyles}
              />
            }
          />
        </Split.Left>
        <Split.Right>
          <section className="crew-image-container">
            <Image
              png={crew.images.png}
              webp={crew.images.webp}
              imageSize={"crew-images-size"}
            />
          </section>
        </Split.Right>
      </Split>
    </section>
  );
}
