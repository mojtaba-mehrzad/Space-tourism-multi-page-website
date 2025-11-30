import ExploreButton from "./sections/ExploreButton";
import HomeContent from "./sections/HomeContent";
import Split from "@/components/layout/Split";

export default function Home() {
  return (
    <section className="home" data-bg="bg-home">
      <Split className="home-main-container">
        <Split.Left className="">
          <HomeContent />
        </Split.Left>
        <Split.Right className=" explore-button-container">
          <ExploreButton />
        </Split.Right>
      </Split>
    </section>
  );
}
