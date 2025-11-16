import { useState } from "react";
import { loadData } from "@/utils/loadData";
import Image from "@/components/ui/Image";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import TechnologyContent from "./sections/TechnologyContent";

export default function Technology() {
  const data = loadData("technology");
  const [technology, setTechnology] = useState(data[0]);

  return (
    <section className="page-container">
        <PageHeader number="03" title=" Space launch 101" />
        <TwoColumnLayout
          one={
            <section className="technology-image-container">
              <Image
                png={technology.images.portrait}
                webp={technology.images.landscape}
                imageSize={"technology-images-size"}
              />
            </section>
          }
          two={
            <TechnologyContent
              technology={technology}
              technologyNavigationBar={
                <Tabs
                  items={data}
                  active={technology.name}
                  onSelect={setTechnology}
                  getLabel={(index)=> (index+1)}
                  variant="id"
                />
              }
            />
          }
          className="two-column-container"
          classNameTwo="flex flex-col lg:flex-row lg:order-1 gap-10 lg:gap-[64px] "
          classNameOne="lg:order-2"

        />
    </section>
  );
}
