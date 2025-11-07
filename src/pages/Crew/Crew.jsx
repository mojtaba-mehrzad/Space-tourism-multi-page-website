import { useState } from "react";
import { loadData } from "@/utils/loadData";
import Image from "@/components/ui/Image";
import CrewNavigationBar from "./sections/CrewNavigationBar";



export default function Crew() {
      const data = loadData("crew");
  const [crew, setCrew] = useState(data[0]);

  return (
    <section className="crew">
          <article className="page-container">
            <h1 className="page-title">
              <strong className="page-title-number">02</strong>Meet your crew
            </h1>
            <section className="page-content-section">
              <section className="page-texts-container">
                <div className="text-inner">
                  <h2 className="crew-role">{crew.role}</h2>
                  <h3 className="crew-name">
                    {crew.name}
                  </h3>
                  <p className="description">{crew.bio}</p>
                </div>
                <div className="crew-nav-container">
                  <CrewNavigationBar data={data} crew={crew} setCrew={setCrew} />
                </div>
              </section>
              <section className="image-container">
                <Image png={crew.images.png} webp={crew.images.webp} imageSize={"crew-images-size"} continerStylr={""} />
              </section>
            </section>
          </article>
        </section>
  )
}
