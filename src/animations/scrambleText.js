import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export function scrambleTextAnimation(target, newText) {
  if (!target) return gsap.timeline();
  const finalText = newText ?? target.innerText;


  gsap.killTweensOf(target);
  gsap.set(target, { opacity: 0 });

  if(newText){target.innerText = "";}
  const t1= gsap.timeline();
    t1.to(target, { opacity: 1, duration: 0.4 })
    .to(target, {
      duration: 0.8,
      ease: "none",
      scrambleText: {
        text: finalText,
        revealDelay: 0,
        speed: 0.8,
        chars: 0 
      }
    }, "<");
    return t1; 
}
