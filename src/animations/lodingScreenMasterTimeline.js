import { gsap } from "gsap";

export function loadingScreenMasterTimeline(refs, onComplete) {
  const tl = gsap.timeline();

  tl.to(refs.rocketRef.current, {
        y: -900,
        duration: 2.8,
        ease: "power4.in",
        onComplete: () => setTimeout(onComplete, 500)
      });

      refs.starsRef.current.forEach((star, i) => {
        tl.to(star, {
          y: 1200,
          duration: 0.6 + Math.random() * 0.2,
          ease: "power2.in",
          delay: i * 0.004
        }, "-=0.9");
      });

  return tl;
}