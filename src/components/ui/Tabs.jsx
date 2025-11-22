export default function Tabs({items, onSelect, active, getLabel, styles }) {
  let baseStyles = styles.baseStyles;
  let activeStyles = styles.activeStyles;
  let inactiveStyles = styles.inactiveStyles;
  let listStyle = styles.listStyle;

  return (
    <nav>
      <ul className={listStyle}>
        {items.map((item, index) => {
          const isActive = item.name === active;
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
                {getLabel ? getLabel(item, index) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
