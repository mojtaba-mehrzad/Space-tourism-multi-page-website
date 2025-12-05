import { gsap } from "gsap";

export function risingUpAnimation(target) {
  if (!target) return gsap.timeline();

  const t1 = gsap.timeline();
  t1.fromTo(
    target,
    { y: 100, opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      y: 0,
      ease: "expo.Out",
    }
  );
  return t1;
}
