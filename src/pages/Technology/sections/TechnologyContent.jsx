export default function TechnologyContent({technology, technologyNavigationBar, refs}) {
  return (
    <>
      <div className="technology-nav-container">{technologyNavigationBar}</div>
      <div className="text-inner">
        <h2 className="technology-title" ref={refs.technologyTitleRef}>The terminology...</h2>
        <h3 className="technology-name" ref={refs.technologyNameRef}>{technology.name}</h3>
        <p className="description" ref={refs.technologyDescriptionRef}>{technology.description}</p>
      </div>
    </>
  )
}
