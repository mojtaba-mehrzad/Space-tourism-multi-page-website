import { gsap } from "gsap";
export function pageWrapperAnimation(containerRef) {
  gsap.fromTo(
    containerRef.current,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  );
}
