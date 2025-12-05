import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";

export function homeMasterTimeline(refs) {
  const tl = gsap.timeline();

  tl.add( scrambleTextAnimation(refs.title) )
    .add( scrambleTextAnimation(refs.accent) )
    .add( textMaskingWrapper(refs.description) )

  return tl;
}