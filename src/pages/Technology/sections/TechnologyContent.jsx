
export default function TechnologyContent({technology, technologyNavigationBar}) {
  return (
    <>
      <div className="technology-nav-container">{technologyNavigationBar}</div>
      <div className="text-inner">
        <h2 className="technology-title">The terminology...</h2>
        <h3 className="technology-name">{technology.name}</h3>
        <p className="description">{technology.description}</p>
      </div>
    </>
  )
}
