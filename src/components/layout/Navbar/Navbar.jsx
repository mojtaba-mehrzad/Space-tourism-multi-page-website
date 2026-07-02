import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import NavLinks from "./NavLinks";
import { useState, useRef } from "react";
import MobileMenu from "./MobileMenu";
import { useGsap } from "@/utils/useGsap";
import { navbarReveal } from "@/animations/navbarReveal";
import { navLogoContainerAnimation } from "@/animations/navLogoContainer";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoContainerRef = useRef(null)

  useGsap(() => {navbarReveal(navRef);}, []);
  useGsap(() => {navLogoContainerAnimation(logoContainerRef);}, []);

  return (
    <nav className="nav">
      <div className="nav-logo-container" ref={logoContainerRef}>
        <Logo />
        <span className="draw-nav-line" ></span>
      </div>
      <div className="nav-links-container-1" ref={navRef}>
        <NavLinks />
      </div>
      <HamburgerButton
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((open) => !open)}
      />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}