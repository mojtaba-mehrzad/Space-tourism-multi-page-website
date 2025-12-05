import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function textMaskingWrapper(target , newText) {
  if (!target) return gsap.timeline();
  // const finalText = newText ?? target.innerText;

  // gsap.killTweensOf(target);
  // if(newText){target.innerText = "";}
  gsap.set(target, { opacity: 1 });
  
  const t1 = gsap.timeline();
  let split = new SplitText(target, {
    type: "words,lines",
    linesClass: "line",
    mask: "lines",
  });
  t1.from(split.lines, {
    duration: 0.3,
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out",
    text: newText
  });

  return t1;
}
