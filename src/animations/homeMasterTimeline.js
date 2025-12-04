import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";

export function homeMasterTimeline(refs) {
  const tl = gsap.timeline();

  tl.add( scrambleTextAnimation(refs.title) );
  tl.add( scrambleTextAnimation(refs.accent) );

  return tl;
}
