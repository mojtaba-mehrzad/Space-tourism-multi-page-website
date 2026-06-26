// src/animations/exploreButtonFade.js
import { gsap } from "gsap";

export function fadeAnimation(btnRef) {
  if (!btnRef.current) return gsap.timeline();
  gsap.set(btnRef.current,{opacity:0})
  const tl = gsap.timeline();
  tl.to(btnRef.current,
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    }
  );
  return tl;
}