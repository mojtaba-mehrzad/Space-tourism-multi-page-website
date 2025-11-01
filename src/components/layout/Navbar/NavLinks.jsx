import { navLinks } from "./navLinksData";

export default function NavLinks() {
  return (
    <ul id="nav-links-list">
      {navLinks.map((link) => (
        <li key={link.path} id="nav-links-item">
          <a href={link.path} onClick={onclick} id="item-link">
            <strong className="font-bold mr-3 tracking-[2.7px]">
              {link.title.slice(0, 2)}
            </strong>
            {link.title.slice(+2).toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}
