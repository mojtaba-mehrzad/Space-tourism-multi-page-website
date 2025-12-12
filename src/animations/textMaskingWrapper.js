import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function textMaskingWrapper(target , newText) {
  if (!target) return gsap.timeline();
  if (newText) {target.innerText = newText;}

  gsap.set(target, { opacity: 1 });

  const tl = gsap.timeline();
  let split = new SplitText(target, {
    type: "words,lines",
    linesClass: "line",
    mask: "lines",
  });
  tl.from(split.lines, {
    duration: 0.3,
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out",
  });
  tl.add(() => {
    split.revert();
  });
  return tl;
}
