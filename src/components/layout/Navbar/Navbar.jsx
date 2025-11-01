import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import NavLinks from "./NavLinks";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav id="nav">
      <div id="nav-logo-container">
        <Logo />
        <span id="draw-nav-line"></span>
      </div>
      <div id="nav-links-container-1">
        <NavLinks />
      </div>
      <HamburgerButton
        isOpen={isMenuOpen}
        onToggel={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false);
        }}
      />
    </nav>
  );
}
