import { gsap } from "gsap";

export function rocketIdleFloat(rocketRef) {
  if (!rocketRef?.current) return gsap.timeline();

  gsap.set(rocketRef.current, { y: 0, rotate: 0 });

  return gsap.to(rocketRef.current, {
    y: -14,
    duration: 1.8,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}
