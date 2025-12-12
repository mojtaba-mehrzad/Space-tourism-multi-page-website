import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import { planetFadeAnimation } from "./planetFade";

export function technologyMsterTimeline(refs, technology) {
  const tl = gsap.timeline();
  tl.add(scrambleTextAnimation(refs.technologyNameRef.current, technology.name))
    .add(textMaskingWrapper(refs.technologyDescriptionRef.current, technology.description));

  return tl;
}
