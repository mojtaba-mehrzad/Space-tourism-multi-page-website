import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import {imageSlideAnimation} from "./imageSlide";

// export function crewMasterTimeline(refs, crew) {
//   const tl = gsap.timeline();

//   tl.add(scrambleTextAnimation(refs.crewRoleRef.current, crew.role))
//     .add(imageSlideAnimation(refs.imageRef), 0)
//     .add(scrambleTextAnimation(refs.crewNameRef.current, crew.name), "<0.8")
//     .add(textMaskingWrapper(refs.crewBioRef.current, crew.bio));
//   return tl;
// }

export function crewMasterTimeline(refs, crew, direction = 1) {
  const tl = gsap.timeline();

  tl.add(scrambleTextAnimation(refs.crewRoleRef.current, crew.role))
    .add(imageSlideAnimation(refs.imageRef, direction), 0)
    .add(scrambleTextAnimation(refs.crewNameRef.current, crew.name), "<0.8")
    .add(textMaskingWrapper(refs.crewBioRef.current, crew.bio));
  return tl;
}
