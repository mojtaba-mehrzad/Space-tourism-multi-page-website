import { gsap } from "gsap";
import { updateSources } from "@/utils/updateImageSources";

export function planetImageTransition(refs, imageSrc, isFirstRenderRef, direction = 1) {
  const img = refs.imageRef.current;
  const nextSrc = imageSrc.webp || imageSrc.png;

  if (!img || !nextSrc) return gsap.timeline();

  const isFirstLoad = isFirstRenderRef.current;

  const tl = gsap.timeline();

  const exitX = 300 * direction;
  const enterFromX = -300 * direction;

   if (!isFirstLoad) {
        updateSources(refs, imageSrc.png, imageSrc.webp);
        tl.fromTo(img, 
          { x: enterFromX, opacity: 0, scale: 0.5 },
          { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
        );
        isFirstRenderRef.current = true;
      } else {
        tl.fromTo(img,{x:1, opacity:1, scale:1}, {
          x: exitX,
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          ease: "power2.in",
          onComplete: () => {
            updateSources(refs, imageSrc.png, imageSrc.webp);
          }
        })
          .set(img, { x: enterFromX, scale: 0.5, opacity: 0 })
          .to(img, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          });
      }

  return tl;
}
