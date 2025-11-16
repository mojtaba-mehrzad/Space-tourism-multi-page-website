export default function Tabs({items, onSelect, active, getLabel, variant, }) {
  let baseStyles = "";
  let activeStyles = "";
  let inactiveStyles = "";
  let listStyle = "";

  if (variant === "underline") {
    listStyle = "destinations-nav-list";
    baseStyles = "destinations-nav-item ";
    activeStyles = "border-white text-white";
    inactiveStyles = "text-[#D0D6F9] border-transparent hover:border-white/40 hover:text-white";
  }
  if (variant === "dot") {
    listStyle = "crew-nav-list";
    baseStyles ="crew-nav-item";
    activeStyles = "bg-[#979797]";
    inactiveStyles = "bg-[#979797]/18 hover:bg-[#979797]";
  }
    if (variant === "id") {
    listStyle = "technology-nav-list";
    baseStyles ="technology-nav-item";
    activeStyles = "bg-white text-blue/900";
    inactiveStyles = "text-white border-white/25 hover:border-white";
  }
  return (
    <nav>
      <ul className={listStyle}>
        {items.map((item, index) => {
          const isActive = item.name === active;
           console.log(index)
          return (
            <li key={item.name}>
              <button
                onClick={() => {
                  onSelect(item);
                }}
                className={`${baseStyles} ${
                  isActive ? activeStyles : inactiveStyles
                }`}
              >
                {variant === "underline" ? getLabel(item, index) : null}
                {variant === "id" ? getLabel( index) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
