import { NavLink } from "react-router-dom";
import { navLinks } from "@/datas/navLinksData";

export default function NavLinks({ onClick }) {
  return (
    <ul className="nav-links-list">
      {navLinks.map((link) => (
        <li key={link.path} className="nav-links-item">
          <NavLink
            to={link.path}
            onClick={onClick}
            className={({ isActive }) =>`item-link ${
                isActive
                  ? " border-white! opacity-100!"
                  : " hover:border-[rgba(255,255,255,0.5)]!"
              }`}
          >
            <strong className="mr-3 tracking-[2.7px]">
              {link.title.slice(0, 2)}
            </strong>
            {link.title.slice(+2)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
