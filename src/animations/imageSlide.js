// src/animations/crewImageSlide.js
import { gsap } from "gsap";

export function imageSlideAnimation(imageRef) {
  if (!imageRef?.current) return gsap.timeline();

  const tl = gsap.timeline();

  tl.fromTo(
    imageRef.current,
    {
      x: 360,
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