import { useState } from "react";
import { loadData } from "@/utils/loadData";
import Image from "@/components/ui/Image";
import Tabs from "@/components/ui/Tabs";
import PageHeader from "@/components/ui/PageHeader";
import TechnologyContent from "./sections/TechnologyContent";
import technologyNavStyles from "@/config/technologyNavStyles.json";
import Split from "@/components/layout/Split";

export default function Technology() {
  const data = loadData("technology");
  const [technology, setTechnology] = useState(data[0]);

  return (
    <section className="page-container" data-bg="bg-technology">
      <PageHeader number="03" title=" Space launch 101" />
      <Split className="split-container">
        <Split.Left className="lg:order-2">
          <section className="technology-image-container">
            <Image
              png={technology.images.portrait}
              webp={technology.images.landscape}
              imageSize={"technology-images-size"}
            />
          </section>
        </Split.Left>
        <Split.Right className="flex flex-col lg:flex-row lg:order-1 gap-10 lg:gap-16 ">
          <TechnologyContent
            technology={technology}
            technologyNavigationBar={
              <Tabs
                items={data}
                active={technology.name}
                onSelect={setTechnology}
                getLabel={(item, index) => index + 1}
                styles={technologyNavStyles}
              />
            }
          />
        </Split.Right>
      </Split>
    </section>
  );
}
