import hamburgerIcon from "@/assets/images/shared/icon-hamburger.svg";
import closeIcon from '@/assets/images/shared/icon-close.svg'
export default function HamburgerButton({isOpen, onToggel}) {
  return (
    <button className="cursor-pointer sm:hidden z-20" onClick={onToggel} aria-label="Toggle Menu">
      <img id="nav-hamburgerIcon" src={isOpen ?closeIcon : hamburgerIcon} alt=""  />
    </button>
  );
}
