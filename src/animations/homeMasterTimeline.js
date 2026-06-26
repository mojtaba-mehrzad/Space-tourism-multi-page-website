import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import { fadeAnimation } from "./Fade";
export function homeMasterTimeline(refs) {
  const tl = gsap.timeline();

  tl.add( scrambleTextAnimation(refs.titleRef.current) )
    .add( scrambleTextAnimation(refs.accentRef.current) )
    .add( textMaskingWrapper(refs.descriptionRef.current) )
    .add(fadeAnimation(refs.exploreBtnRef))

  return tl;
}