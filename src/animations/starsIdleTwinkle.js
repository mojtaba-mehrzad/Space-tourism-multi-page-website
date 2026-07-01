import { gsap } from "gsap";

export function starsIdleTwinkle(starsRef) {
  const stars = starsRef?.current?.filter(Boolean);
  if (!stars || !stars.length) return gsap.timeline();

  return gsap.to(stars, {
    opacity: () => gsap.utils.random(0.15, 0.9),
    duration: () => gsap.utils.random(1.2, 3),
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.01,
      from: "random",
    },
  });
}
