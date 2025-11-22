import React from "react";
import { NavLink } from "react-router-dom";

export default function ExploreButton() {
  return (
    <NavLink
      to={"/destination"}
      className="size-36 sm:size-68 bg-white sm:text-[32px] border-none hover:outline-88 outline-[rgba(255,255,255,0.1)] rounded-full text-center place-content-center cursor-pointer"
    >
      EXPLORE
    </NavLink>
  );
}
