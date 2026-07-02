export default function Tabs({ items, onSelect, active, getLabel, styles }) {
  const { baseStyles, activeStyles, inactiveStyles, listStyle } = styles;

  return (
    <nav>
      <ul className={listStyle}>
        {items.map((item, index) => {
          const isActive = item.name === active;
          return (
            <li key={item.name}>
              <button
                onClick={() => onSelect(item)}
                className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
              >
                {getLabel ? getLabel(item, index) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}