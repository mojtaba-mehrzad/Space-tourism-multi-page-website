import navIcon from "@/assets/images/shared/logo.svg";

export default function Logo() {
  return (
    <a href="#" className="cursor-pointer">
      <img id="nav-icon" src={navIcon} alt="" />
    </a>
  );
}
