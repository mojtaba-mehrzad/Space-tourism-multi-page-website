export default function CrewContent({ crew, CrewNavigationBar }) {
  return (
    <>
      <div className="text-inner">
        <h2 className="crew-role">{crew.role}</h2>
        <h3 className="crew-name">{crew.name}</h3>
        <p className="description">{crew.bio}</p>
      </div>
      <div className="crew-nav-container">{CrewNavigationBar}</div>
    </>
  );
}
