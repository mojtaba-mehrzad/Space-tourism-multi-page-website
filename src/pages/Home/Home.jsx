import Navbar from "@/components/layout/Navbar/Navbar.jsx";
import ExploreButton from "./sections/ExploreButton";

export default function Home() {
  return (
    <main id="home">
      <Navbar />
      <section id="home-main-container">
        <div id="home-texts-container">
          <h1 id="home-title">
            So, you want to travel to
            <p>Space</p>
          </h1>
          <p id="home-descripton">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div id="explore-button-container">
          <ExploreButton />
        </div>
      </section>
    </main>
  );
}
