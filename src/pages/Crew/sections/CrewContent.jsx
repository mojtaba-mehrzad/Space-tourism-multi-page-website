export default function CrewContent({ crew, CrewNavigationBar, refs }) {
  return (
    <>
      <div className="text-inner">
        <h2 className="crew-role" ref={refs.crewRoleRef}>{crew.role}</h2>
        <h3 className="crew-name" ref={refs.crewNameRef}>{crew.name}</h3>
        <p className="description" ref={refs.crewBioRef}>{crew.bio}</p>
      </div>
      <div className="crew-nav-container">{CrewNavigationBar}</div>
    </>
  );
}
