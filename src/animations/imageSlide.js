// src/animations/crewImageSlide.js
import { gsap } from "gsap";

export function imageSlideAnimation(imageRef, direction = 1) {
  if (!imageRef?.current) return gsap.timeline();

  const tl = gsap.timeline();
  const offset = -360 * direction;

  tl.fromTo(
    imageRef.current,
    {
      x: offset,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }
  );

  return tl;
}