import { gsap } from "gsap";
import { scrambleTextAnimation } from "./scrambleText";
import { textMaskingWrapper } from "./textMaskingWrapper";
import { planetFadeAnimation } from "./planetFade";
import {imageSlideAnimation} from "./imageSlide";

export function technologyMsterTimeline(refs, technology) {
  const tl = gsap.timeline();
  tl.add(scrambleTextAnimation(refs.technologyNameRef.current, technology.name))
    .add(imageSlideAnimation(refs.imageRef), 0)
    .add(textMaskingWrapper(refs.technologyDescriptionRef.current, technology.description));

  return tl;
}
