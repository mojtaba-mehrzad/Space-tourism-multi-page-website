export default function HomeContent({refs}) {

  return (
    <div className="home-texts-container">
      <h1 className="home-title" ref={refs.titleRef}>
        So, you want to travel to
      </h1>
      <h2 className="home-accent-title" ref={refs.accentRef} >Space</h2>
      <p className="description" ref={refs.descriptionRef}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
}
