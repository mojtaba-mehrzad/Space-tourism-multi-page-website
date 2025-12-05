import { gsap } from "gsap";

export function planetFadeAnimation(target) {
  if (!target) return gsap.timeline();
  const t1 = gsap.timeline();
  t1.fromTo(
    target,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
  );
  return t1;
}
