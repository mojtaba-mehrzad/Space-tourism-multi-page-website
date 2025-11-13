
export default function Tabs({ items, onSelect, active, getLabel, variant , listStyle }) {
  return (
    <nav>
      <ul className={listStyle}>
        {items.map((item, index) => {
          const isActive = item.name === active;
          let baseStyles = "";
          let activeStyles = "";
          let inactiveStyles = "";

          if (variant === "underline"){
            baseStyles = "destinations-nav-item border-transparent"
            activeStyles = "border-white text-white";
            inactiveStyles ="text-[#D0D6F9] hover:border-white/40 hover:text-white";
          }
          if(variant === "dot"){
            baseStyles = "size-2.5 lg:size-[15px] rounded-full cursor-pointer duration-300 transition-all "
            activeStyles = "bg-[#979797]"
            inactiveStyles = "bg-[#979797]/18 hover:bg-[#979797]"
          }

          return (
            <li key={item.name}>
              <button
                onClick={() => {
                  onSelect(item);
                }}
                className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
              >
                {variant === "underline" ? getLabel(item, index) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
