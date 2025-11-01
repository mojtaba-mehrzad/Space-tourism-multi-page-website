import Navbar from "@/components/layout/Navbar/Navbar.jsx";
import ExploreButton from "../../components/ui/ExploreButton";

export default function Home() {
  const text1= 'So, you want to travel to'
  return (
    <section id="home">
      <Navbar />
      <div className="flex flex-col lg:flex-row p-6 sm:p-0 sm:px-10 sm:py-32 lg:p-32 sm:gap-10 justify-between text-center lg:text-left size-full ">
        <div className="flex flex-col lg:flex-1 sm:px-12 gap-6 sm:gap-2 h-fit">
          <p className="font-barlow sm:text-[28px] tracking-[2px] sm:tracking-[4px] text-[#D0D6F9]">{text1.toUpperCase()}</p>
          <p className="font-bellefair text-white text-[80px] sm:text-[144px]">SPACE</p>
          <p className="font-barlow text-[15px] sm:text-base tracking-widest leading-[180%] text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex grow items-center justify-center lg:flex-1 lg:mr-10 lg:place-content-end font-bellefair text-lg">
          <ExploreButton/>
        </div>
      </div>
    </section>
  );
}
