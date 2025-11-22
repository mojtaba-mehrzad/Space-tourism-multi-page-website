import { gsap } from "gsap";

export function planetFadeAnimation(imageRef) {
  gsap.fromTo(
    imageRef.current,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  );
}
