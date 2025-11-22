import { gsap } from "gsap";
export function navLogoAnimation(logoRef) {
  gsap.fromTo(
    logoRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      yoyoEase: "bounce.out",
    },
    []
  );
}
