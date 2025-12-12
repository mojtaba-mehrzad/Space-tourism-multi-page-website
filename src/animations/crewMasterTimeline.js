import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import { planetFadeAnimation } from "./planetFade";

export function crewMasterTimeline(refs, crew) {
  const tl = gsap.timeline();

  tl.add(scrambleTextAnimation(refs.crewRoleRef.current, crew.role))
    .add(scrambleTextAnimation(refs.crewNameRef.current, crew.name))
    .add(textMaskingWrapper(refs.crewBioRef.current, crew.bio), "+=0.3");

  return tl;
}
