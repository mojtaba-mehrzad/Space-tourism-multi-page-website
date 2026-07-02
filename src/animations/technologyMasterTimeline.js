import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import {imageSlideAnimation} from "./imageSlide";

export function technologyMasterTimeline(refs, technology, direction = 1) {
  const tl = gsap.timeline();
  tl.add(scrambleTextAnimation(refs.technologyNameRef.current, technology.name))
    .add(imageSlideAnimation(refs.imageRef, direction), 0)
    .add(textMaskingWrapper(refs.technologyDescriptionRef.current, technology.description));

  return tl;
}
