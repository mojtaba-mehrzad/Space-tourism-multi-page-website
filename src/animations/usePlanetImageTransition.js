import { gsap } from "gsap";

export function usePlanetImageTransition(refs, image) {
  const tl = gsap.timeline();

  const img = refs.image?.current;
  const previousSrc = refs.prevSrc.current;
  const nextSrc = image;

  // اولین بار → فقط انیمیشن ورود
  const isFirstLoad = !previousSrc;

  if (isFirstLoad) {
    tl.fromTo(img, { x: -200, opacity: 0 }, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });
  } else {
    // خروج تصویر قبلی
    tl.to(img, {
      x: 200,
      opacity: 0,
      duration: 0.6,
      ease: "power3.in"
    });

    // تغییر src بعد از خروج
    tl.add(() => {
      img.src = nextSrc;
    });

    // ورورد تصویر جدید
    tl.fromTo(img, { x: -200, opacity: 0 }, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });
  }

  // Update previous src
  refs.prevSrc.current = nextSrc;
  return tl;
}
