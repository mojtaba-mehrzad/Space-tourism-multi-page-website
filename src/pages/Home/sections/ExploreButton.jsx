import { NavLink } from "react-router-dom";

export default function ExploreButton({ refs }) {
  return (
    <NavLink
      className="flex items-center justify-center relative size-36 sm:size-68 bg-white sm:text-[32px] border-none rounded-full text-center cursor-pointer"
      ref={refs.exploreBtnRef}
      to="/destination"
    >
      <span className="absolute size-full max-w-64 max-h-64 animate-ping active:animate-ping bg-[rgba(255,255,255,0.25)] rounded-full"></span>
      EXPLORE
    </NavLink>
  );
}