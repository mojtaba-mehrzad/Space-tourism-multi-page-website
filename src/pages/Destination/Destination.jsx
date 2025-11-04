import { useState } from "react";
import data from "./sections/data.json";
import Navbar from "../../components/layout/Navbar/Navbar";

export default function Destination() {
  const [selectPlanet, setSelectPlanet] = useState(data.destinations[0]);
  return (
    <main className=" relative h-full w-full pt-22 lg:pt-[133px] bg-[url(@/assets/images/destination-bg/background-destination-mobile.jpg)] sm:bg-[url(@/assets/images/destination-bg/background-destination-tablet.jpg)] lg:bg-[url(@/assets/images/destination-bg/background-destination-desktop.jpg)] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <article className="flex flex-col items-center p-6 sm:p-10 lg:py-12 lg:px-[165px] gap-6 text-center">
        <h1 className="sm:self-start text-white font-barlow uppercase text-base sm:text-xl lg:text-[28px] tracking-[2px]">
          <strong className="pr-6 font-bold opacity-25">01</strong> Pick your
          destination
        </h1>
        <section id="destinatuin-info-container" className="flex flex-col lg:flex-row lg:justify-between! gap-10 lg:py-[132px]">
          <figure classNme="flex-1">
            <picture className="flex items-center justify-center py-[26px] sm:py-[42px] lg:py-0 lg:px-[30px]">
              <source srcSet={selectPlanet.images.webp} type="image/webp" />
              <source srcSet={selectPlanet.images.png} type="image/png" />
              <img className="w-[150px] sm:w-[300px] lg:w-[480px]" src={selectPlanet.images.png} alt="" />
            </picture>
          </figure>
          <div className="lg:flex lg:flex-col lg:items-start lg:h-full sm:px-22 lg:px-12 flex-1">
            <nav className="mb-6 lg:mb-10">
              <ul className="flex items-center justify-center gap-8 ">
                {data.destinations.map((planet) => (
                  <li key={planet.name}>
                    <button
                      onClick={() => {
                        setSelectPlanet(planet);
                      }}
                      className={`uppercase font-barlow tracking-[2px] text-sm sm:text-base pb-2 border-b-3 border-transparent cursor-pointer transition-all duration-300 ${
                        selectPlanet.name === planet.name
                          ? "border-white text-white"
                          : "text-[#D0D6F9] hover:border-gray-400 hover:text-white"
                      }`}
                    >
                      {planet.name}
                    </button>
                  </li>
                ))}
              </ul>
              {console.log(selectPlanet.images)}
            </nav>
            <h2 className="mb-4 uppercase text-white font-bellefair text-[56px] sm:text-[80px] lg:text-8xl ">
              {selectPlanet.name}
            </h2>
            <p className="lg:text-left font-barlow text-[15px] sm:text-base lg:text-lg tracking-widest leading-[180%] text-[#D0D6F9]">
              {selectPlanet.description}
            </p>
            <div className="w-full h-px my-6 lg:my-10 opacity-60 bg-[#979797]"></div>
            <div className="w-full">
              <ul className="flex flex-col sm:flex-row justify-center sm:justify-around lg:justify-start items-center gap-6  lg:text-left">
                <li className="uppercase lg:flex-1">
                  <h3 className="mb-3 tracking-[2px] font-barlow text-sm text-[#D0D6F9]">
                    Avg. distance
                  </h3>
                  <p className="font-bellefair text-[28px] text-white">
                    {selectPlanet.distance}
                  </p>
                </li>
                <li className="uppercase lg:flex-1">
                  <h3 className="mb-3 tracking-[2px] font-barlow text-sm text-[#D0D6F9]">
                    Est. travel time
                  </h3>
                  <p className="font-bellefair text-[28px] text-white">
                    {selectPlanet.travel}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
