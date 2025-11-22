import { gsap } from "gsap";
export function navbarReveal(navRef) {
  gsap.from(navRef.current, { y: -60, duration: 0.7, ease: "power2.out" });
}
