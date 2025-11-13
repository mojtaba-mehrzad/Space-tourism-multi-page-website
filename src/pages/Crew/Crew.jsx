import { useState } from "react";
import { loadData } from "@/utils/loadData";
import Image from "@/components/ui/Image";
import CrewContent from "./sections/CrewContent";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";

export default function Crew() {
  const data = loadData("crew");
  const [crew, setCrew] = useState(data[0]);

  return (
    <section className="crew">
      <article className="page-container">
        <PageHeader number="02" title="Meet your crew" />
        <TwoColumnLayout
          one={
            <CrewContent
              crew={crew}
              CrewNavigationBar={
                <Tabs
                  items={data}
                  active={crew.name}
                  onSelect={setCrew}
                  variant="dot"
                  listStyle="crew-nav-list"
                />
              }
            />
          }
          two={
            <section className="image-container">
              <Image
                png={crew.images.png}
                webp={crew.images.webp}
                imageSize={"crew-images-size"}
                continerStylr={""}
              />
            </section>
          }
        />
      </article>
    </section>
  );
}
