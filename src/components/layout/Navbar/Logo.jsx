import navIcon from "@/assets/images/shared/logo.svg";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { navLogoAnimation } from "@/animations/navLogo";
import { useGsap } from "@/utils/useGsap";

export default function Logo() {
  const logoRef = useRef(null);
  useGsap(()=>{navLogoAnimation(logoRef)}, [])
  return (
    <NavLink to={"/"} className="cursor-pointer" ref={logoRef}>
      <img id="nav-icon" src={navIcon} alt="" />
    </NavLink>
  );
}
