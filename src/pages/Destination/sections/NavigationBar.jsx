
export default function NavigationBar({data, selectedPlanet, setPlanet}) {
  return (
    <nav className="destinations-nav">
      <ul className="destinations-nav-list">
        {data.map((planet) => (
          <li key={planet.name}>
            <button
              onClick={() => {
                setPlanet(planet);
              }}
              className={`destinations-nav-item border-transparent ${
                selectedPlanet.name === planet.name
                  ? "border-white text-white"
                  : "text-[#D0D6F9] hover:border-white/40 hover:text-white"
              }`}
            >
              {planet.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
