import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export function scrambleTextAnimation(target, newText) {
  if (!target) return;
  const finalText = newText ?? target.innerText;


  gsap.killTweensOf(target);
  gsap.set(target, { opacity: 0 });

  if(newText){target.innerText = "";}

  gsap.timeline()
    .to(target, { opacity: 1, duration: 1.5 })
    .to(target, {
      duration: 1,
      ease: "none",
      scrambleText: {
        text: finalText,
        revealDelay: 0,
        speed: 0.4     
      }
    }, "<");
}
